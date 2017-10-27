// export SHR specification content as a hierarchy in JSON format
// Author: John Gibson
// Derived from export SHR specification content as a hierarchy in JSON format by Greg Quinn

const bunyan = require('bunyan');
const {Identifier, IdentifiableValue, RefValue, ChoiceValue, TBD, IncompleteValue, ValueSetConstraint, IncludesCodeConstraint, IncludesTypeConstraint, CodeConstraint, CardConstraint, TypeConstraint, INHERITED, OVERRIDDEN, DataElement, Namespace, DataElementSpecifications, Specifications, MODELS_INFO} = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-json-schema-export'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}


/**
 * Converts a group of specifications into JSON Schema.
 * @param {Specifications} expSpecifications - a fully expanded Specifications object.
 * @param {string} baseSchemaURL - the root URL for the schema identifier.
 * @param {string=} flat - if true then the generated schema will not be hierarchical. Defaults to false.
 * @return {Object.<string, Object>} A mapping of schema ids to JSON Schema definitions.
 */
function exportToJSONSchema(expSpecifications, baseSchemaURL, flat = false) {
  const namespaceResults = {};
  for (const ns of expSpecifications.namespaces.all) {
    if (flat) {
      const { schemaId, schema } = flatNamespaceToSchema(ns, expSpecifications.dataElements, baseSchemaURL);
      namespaceResults[schemaId] = schema;
    } else {
      const { schemaId, schema } = namespaceToSchema(ns, expSpecifications.dataElements, baseSchemaURL);
      namespaceResults[schemaId] = schema;
    }
  }

  return namespaceResults;
}

/**
 * Converts a namespace into a JSON Schema.
 * @param {Namespace} ns - the namespace of the schema.
 * @param {DataElementSpecifications} dataElementsSpecs - the elements in the namespace.
 * @param {string} baseSchemaURL - the root URL for the schema identifier.
 * @return {{schemaId: string, schema: Object}} The schema id and the JSON Schema definition.
 */
function namespaceToSchema(ns, dataElementsSpecs, baseSchemaURL) {
  const dataElements = dataElementsSpecs.byNamespace(ns.namespace);
  const schemaId = `${baseSchemaURL}/${namespaceToURLPathSegment(ns.namespace)}`;
  let schema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    id: schemaId,
    title: "TODO: Figure out what the title should be.",
    definitions: {}
  };
  const entryRef = makeRef(new Identifier('shr.base', 'Entry'), ns, baseSchemaURL);
  if (ns.description) {
    schema.description = ns.description;
  }

  const defs = dataElements.sort(function(l,r) {return l.identifier.name.localeCompare(r.identifier.name);});
  const entryRefs = [];
  for (const def of defs) {
    let schemaDef = {
      type: 'object',
      properties: {}
    };
    let wholeDef = schemaDef;
    const tbdParentDescriptions = [];
    let requiredProperties = [];
    if (def.isEntry || def.basedOn.length) {
      wholeDef = { allOf: [] };
      let hasEntryParent = false;
      for (const supertypeId of def.basedOn) {
        if (supertypeId instanceof TBD) {
          if (supertypeId.text) {
            tbdParentDescriptions.push(supertypeId.text);
          } else {
            tbdParentDescriptions.push('TBD');
          }
        } else {
          const parent = dataElementsSpecs.findByIdentifier(supertypeId);
          if (!parent) {
            logger.error('Could not find definition for %s which is a supertype of %s', supertypeId, def);
          } else {
            hasEntryParent = hasEntryParent || parent.isEntry;
          }
          wholeDef.allOf.push({ $ref:  makeRef(supertypeId, ns, baseSchemaURL)});
        }
      }
      if (def.isEntry && (!hasEntryParent)) {
        wholeDef.allOf.splice(0, 0, { $ref: entryRef });
      }
      wholeDef.allOf.push(schemaDef);
    }

    const tbdFieldDescriptions = [];
    if (def.value) {
      if (def.value.inheritance !== INHERITED) {
        let { value, required, tbd } = convertDefinition(def.value, dataElementsSpecs, ns, baseSchemaURL);
        if (required) {
          requiredProperties.push('Value');
        }
        schemaDef.properties.Value = value;
        if (tbd) {
          schemaDef.properties.Value.description = def.value.text ? ('TBD: ' + def.value.text) : tbdValueToString(def.value);
        }
      }
    }
    if (def.fields.length) {
      let qualifiedFields = {};
      let fieldNames = {};
      for (const field of def.fields) {
        if ((field instanceof TBD) || !isValidField(field) || (field.inheritance === INHERITED)) {
          continue;
        }
        const card = field.effectiveCard;
        if (!card) {
          continue;
        }
        if (card.isZeroedOut) {
          continue;
        }
        if (fieldNames[field.identifier.name]) {
          qualifiedFields[field.identifier.name] = true;
        } else {
          fieldNames[field.identifier.name] = true;
        }
      }
      for (const field of def.fields) {
        if (!(field instanceof TBD) && !isValidField(field) || (field.inheritance === INHERITED)) {
          continue;
        }
        const card = field.effectiveCard;
        if (card && card.isZeroedOut) {
          continue;
        }
        let {value, required, tbd} = convertDefinition(field, dataElementsSpecs, ns, baseSchemaURL);
        if (tbd) {
          tbdFieldDescriptions.push(tbdValueToString(field));
          continue;
        }

        let fieldName = field.identifier.name;
        if (qualifiedFields[field.identifier.name]) {
          fieldName = namespaceToURLPathSegment(field.identifier.namespace) + '/' + field.identifier.name;
        }
        schemaDef.properties[fieldName] = value;
        if (required) {
          requiredProperties.push(fieldName);
        }
      }
    } else if (!def.value) {
      schemaDef.type = 'object';
      schemaDef.description = 'Empty DataElement?';
    }
    let descriptionList = [];
    if (def.description) {
      descriptionList.push(def.description);
    }
    if (def.concepts.length) {
      wholeDef.concepts = def.concepts.map((concept) => makeConceptEntry(concept));
    }
    if (tbdParentDescriptions.length) {
      tbdParentDescriptions[0] = 'TBD Parents: ' + tbdParentDescriptions[0];
      descriptionList = descriptionList.concat(tbdParentDescriptions);
    }
    if (tbdFieldDescriptions.length) {
      tbdFieldDescriptions[0] = 'TBD Fields: ' + tbdFieldDescriptions[0];
      descriptionList = descriptionList.concat(tbdFieldDescriptions);
    }
    if (descriptionList.length) {
      wholeDef.description = descriptionList.join('\n');
    }
    if (requiredProperties.length) {
      schemaDef.required = requiredProperties;
    }

    schema.definitions[def.identifier.name] = wholeDef;
    if (def.isEntry && (!def.isAbstract)) {
      entryRefs.push({ $ref:  makeRef(def.identifier, ns, baseSchemaURL)});
    }
  }

  if (entryRefs.length) {
    schema.type = 'object';
    schema.anyOf = entryRefs;
  }
  return { schemaId, schema };
}

/**
 * Converts a namespace into a flat JSON Schema.
 * @param {Namespace} ns - the namespace of the schema.
 * @param {DataElementSpecifications} dataElementsSpecs - the elements in the namespace.
 * @param {string} baseSchemaURL - the root URL for the schema identifier.
 * @return {{schemaId: string, schema: Object}} The schema id and the JSON Schema definition.
 */
function flatNamespaceToSchema(ns, dataElementsSpecs, baseSchemaURL) {
  const dataElements = dataElementsSpecs.byNamespace(ns.namespace);
  const schemaId = `${baseSchemaURL}/${namespaceToURLPathSegment(ns.namespace)}`;
  let schema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    id: schemaId,
    title: "TODO: Figure out what the title should be.",
    definitions: {}
  };
  const expandedEntry = makeExpandedEntryDefinitions(ns, baseSchemaURL);
  if (ns.description) {
    schema.description = ns.description;
  }

  const defs = dataElements.sort(function(l,r) {return l.identifier.name.localeCompare(r.identifier.name);});
  const entryRefs = [];
  for (const def of defs) {
    let schemaDef = {
      type: 'object',
      properties: {}
    };
    let wholeDef = schemaDef;
    const tbdParentDescriptions = [];
    let requiredProperties = [];
    if (def.isEntry) {
      requiredProperties = expandedEntry.required.slice();
    }

    const tbdFieldDescriptions = [];
    if (def.value) {
      let { value, required, tbd } = convertDefinition(def.value, dataElementsSpecs, ns, baseSchemaURL);
      if (required) {
        requiredProperties.push('Value');
      }
      schemaDef.properties.Value = value;
      if (tbd) {
        schemaDef.properties.Value.description = def.value.text ? ('TBD: ' + def.value.text) : tbdValueToString(def.value);
      }
    }
    if (def.fields.length) {
      let qualifiedFields = {};
      let fieldNames = {};
      for (const field of def.fields) {
        if ((field instanceof TBD) || !isValidField(field)) {
          continue;
        }
        const card = field.effectiveCard;
        if (!card) {
          continue;
        }
        if (card.isZeroedOut) {
          continue;
        }
        if (fieldNames[field.identifier.name]) {
          qualifiedFields[field.identifier.name] = true;
        } else {
          fieldNames[field.identifier.name] = true;
        }
      }
      for (const field of def.fields) {
        if (!(field instanceof TBD) && !isValidField(field)) {
          continue;
        }
        const card = field.effectiveCard;
        if (card && card.isZeroedOut) {
          continue;
        }
        let {value, required, tbd} = convertDefinition(field, dataElementsSpecs, ns, baseSchemaURL);
        if (tbd) {
          tbdFieldDescriptions.push(tbdValueToString(field));
          continue;
        }

        let fieldName = field.identifier.name;
        if (qualifiedFields[field.identifier.name]) {
          fieldName = namespaceToURLPathSegment(field.identifier.namespace) + '/' + field.identifier.name;
        }
        schemaDef.properties[fieldName] = value;
        if (required) {
          requiredProperties.push(fieldName);
        }
      }
      if (def.isEntry) {
        for (const name in expandedEntry.properties) {
          if (!(name in schemaDef.properties)) {
            schemaDef.properties[name] = expandedEntry.properties[name];
          }
        }
      }
    } else if (!def.value) {
      schemaDef.type = 'object';
      schemaDef.description = 'Empty DataElement?';
    }
    let descriptionList = [];
    if (def.description) {
      descriptionList.push(def.description);
    }
    if (def.concepts.length) {
      wholeDef.concepts = def.concepts.map((concept) => makeConceptEntry(concept));
    }
    if (tbdParentDescriptions.length) {
      tbdParentDescriptions[0] = 'TBD Parents: ' + tbdParentDescriptions[0];
      descriptionList = descriptionList.concat(tbdParentDescriptions);
    }
    if (tbdFieldDescriptions.length) {
      tbdFieldDescriptions[0] = 'TBD Fields: ' + tbdFieldDescriptions[0];
      descriptionList = descriptionList.concat(tbdFieldDescriptions);
    }
    if (descriptionList.length) {
      wholeDef.description = descriptionList.join('\n');
    }
    if (requiredProperties.length) {
      schemaDef.required = requiredProperties;
    }

    schema.definitions[def.identifier.name] = wholeDef;
    if (def.isEntry && (!def.isAbstract)) {
      entryRefs.push({ $ref:  makeRef(def.identifier, ns, baseSchemaURL)});
    }
  }

  if (entryRefs.length) {
    schema.type = 'object';
    schema.anyOf = entryRefs;
  }
  return { schemaId, schema };
}

function namespaceToURLPathSegment(namespace) {
  return namespace.replace(/\./g, '/');
}

function isValidField(field) {
  if (field instanceof ChoiceValue) {
    logger.error('ERROR: Ignoring field defined as a choice', field);
    return false;
  }
  if (!(field.identifier)) {
    logger.error('ERROR: Ignoring name-less field: ', field);
    return false;
  }
  if (field.identifier.name === 'Value') {
    logger.error('ERROR: Ignoring restricted field name: Value', field);
    return false;
  }
  return true;
}

function convertDefinition(valueDef, dataElementsSpecs, enclosingNamespace, baseSchemaURL) {
  const retValue = {};
  let value = retValue;
  const card = valueDef.effectiveCard;
  let required = false;
  let isCode = false;
  let isList = false;
  if (card) {
    if (card.isList) {
      retValue.type = 'array';
      if (card.min != null) {
        retValue.minItems = card.min;
        if (card.min) {
          required = true;
        }
      }
      if (card.max) {
        retValue.maxItems = card.max;
      }
      value = retValue.items = {};
      isList = true;
    } else if (card.min) {
      required = true;
    }
  }

  if (valueDef instanceof ChoiceValue) {
    const refOptions = [];
    const normalOptions = [];
    for (const option of valueDef.options) {
      if (option instanceof RefValue) {
        refOptions.push(option);
      } else {
        normalOptions.push(option);
      }
    }
    value.anyOf = [];
    if (refOptions.length) {
      value.anyOf.push(makeShrRefObject(refOptions, baseSchemaURL));
    }
    for (const option of normalOptions) {
      const { value: childValue } = convertDefinition(option, dataElementsSpecs, enclosingNamespace, baseSchemaURL);
      value.anyOf.push(childValue);
    }
    if (value.anyOf.length == 1) {
      const single = value.anyOf[0];
      delete value.anyOf;
      for (const ent in single) {
        value[ent] = single[ent];
      }
    }
  } else if (valueDef instanceof RefValue) {
    // TODO: What should the value of EntryType be? The schema URL may not be portable across data types.
    value.type = 'object';
    value.properties = {
      ShrId: { type: 'string' },
      EntryType: { type: 'string', enum: [`${baseSchemaURL}/${namespaceToURLPathSegment(valueDef.identifier.namespace)}#/definitions/${valueDef.identifier.name}`] },
      EntryId: { type: 'string' }
    };
    value.required = ['ShrId', 'EntryType', 'EntryId'];
  } else if (valueDef instanceof IdentifiableValue) {
    const id = valueDef.effectiveIdentifier;
    if (id.isPrimitive) {
      switch (id.name) {
        case 'boolean':
        case 'string':
        case 'integer':
          value.type = id.name;
          break;
        case 'unsignedInt':
          value.type = 'integer';
          value.minimum = 0;
          break;
        case 'positiveInt':
          value.type = 'integer';
          value.minimum = 1;
          break;
        case 'decimal':
          value.type = 'number';
          break;
        case 'uri':
          value.type = 'string';
          value.format = 'uri';
          break;
        case 'base64Binary':
          value.type = 'string';
          break;
        case 'dateTime':
          value.type = 'string';
          value.format = 'date-time';
          break;
        case 'instant':
        case 'date':
        case 'time':
          value.type = 'string';
          break;
        case 'code':
          value.type = 'string';
          isCode = true;
          break;
        case 'oid':
        case 'id':
        case 'markdown':
        case 'xhtml':
          value.type = 'string';
          break;
      }
    } else {
      value['$ref'] = makeRef(valueDef.identifier, enclosingNamespace, baseSchemaURL);
      // These flags aren't always true, but other types may descend from codes or offer codes as an option for their value
      // so without walking the entire inheritance hierarchy we'll just allow it. The frontend of the tool chain
      // should block illegal coding constraints (hopefully).
      isCode = true;
      isList = true;
    }
  } else if (valueDef instanceof TBD) {
    if (retValue.items != null) {
      delete retValue.items;
    }
    return {value: retValue, required: required, tbd: true};
  } else if (valueDef instanceof IncompleteValue) {
    logger.error('Unsupported Incomplete');
  } else {
    logger.error('Unknown type for value "%s"', valueDef.constructor.name);
  }

  const includesCodeLists = {};
  const includesTypeListType = [];
  const includesTypeListRef = [];
  let includesTypeListsMin = 0;
  let includesTypeListsMax = 0;
  for (const constraint of valueDef.constraints) {
    if (constraint.onValue) {
      logger.error('Constraint should not be on the value in an expanded object model "%s"', constraint);
    }
    const constraintPath = extractConstraintPath(constraint);
    if (constraint instanceof ValueSetConstraint) {
      if (!isCode) {
        logger.error('ERROR: valueset constraint %s was applied to a non-coding type %s', valueDef, JSON.stringify(constraint, null, 2));
        continue;
      }
      if (!value.valueSet) {
        value.valueSet = {};
      }
      value.valueSet[constraintPath] = { uri: constraint.valueSet, strength: constraint.bindingStrength };
    } else if (constraint instanceof CodeConstraint) {
      if (!isCode) {
        logger.error('ERROR: code constraint %s was applied to a non-coding type %s', valueDef, constraint);
        continue;
      }
      if (!value.code) {
        value.code = {};
      }
      value.code[constraintPath] = makeConceptEntry(constraint.code);
    } else if (constraint instanceof IncludesCodeConstraint) {
      if (!(isCode/* && card && card.isList*/)) { // TODO: Deal with cardinality
        logger.error('ERROR: includes code constraint %s was applied to a non-coding array type %s', valueDef, JSON.stringify(constraint, null, 2));
        continue;
      }
      if (!includesCodeLists[constraintPath]) {
        includesCodeLists[constraintPath] = [];
      }
      includesCodeLists[constraintPath].push(makeConceptEntry(constraint.code));
    } else if (constraint instanceof TypeConstraint) {
      if (constraint.hasPath()) {
        let allOfEntry = {};
        if (retValue === value) {
          value = {};
          for (const key of Object.keys(retValue)) {
            value[key] = retValue[key];
            delete retValue[key];
          }
          retValue.allOf = [value, allOfEntry];
        } else {
          retValue.items = {allOf: [value, allOfEntry]};
        }
        if (constraint.hasPath()) {
          // TODO: properly handling namespaces will require traversing the class hierarchy
          let currentDef = valueDef;
          for (const pathId of constraint.path) {
            const fullDef = dataElementsSpecs.findByIdentifier(currentDef.identifier);
            allOfEntry.properties = {};
            if (fullDef.value && (fullDef.value.identifier.equals(pathId))) {
              allOfEntry = allOfEntry.properties.Value = {};
            } else {
              allOfEntry = allOfEntry.properties[pathId.name] = {};
            }
            currentDef = fullDef;
          }
        }
        allOfEntry.$ref = makeRef(constraint.isA, enclosingNamespace, baseSchemaURL);
      } else {
        value.$ref = makeRef(constraint.isA, enclosingNamespace, baseSchemaURL);
      }
    } else if (constraint instanceof IncludesTypeConstraint) {
      if (!isList) { // TODO: Deal with cardinality
        logger.error('ERROR: includestypeconstraint %s was applied to a non-array type %s', valueDef, JSON.stringify(constraint, null, 2));
        continue;
      }
      if (constraint.hasPath()) {
        // TODO: properly handling namespaces will require traversing the class hierarchy
      } else {
        includesTypeListsMin += constraint.card.min;
        if (includesTypeListsMax !== null) {
          if (constraint.card.isMaxUnbounded) {
            includesTypeListsMax = null;
          } else {
            includesTypeListsMax += constraint.card.max;
          }
        }

        if (constraint.isA instanceof RefValue) {
          includesTypeListRef.push(constraint);
        } else {
          includesTypeListType.push(constraint);
        }
      }
    } else {
      logger.info('WARNING: Constraint not yet implemented', constraint);
    }
  }

  if (includesTypeListRef.length || includesTypeListType.length) {
    if (typeof retValue.minItems === 'undefined') {
      retValue.minItems = includesTypeListsMin;
    } else if (retValue.minItems < includesTypeListsMin) {
      retValue.minItems = includesTypeListsMin;
    }

    if (typeof retValue.maxItems === 'undefined') {
      if (includesTypeListsMax !== null) {
        retValue.maxItems = includesTypeListsMax;
      }
    } else {
      if (includesTypeListsMax < retValue.maxItems) {
        retValue.maxItems = includesTypeListsMax;
      }
    }
    delete value.$ref;
    retValue.includesTypes = [];
    value.anyOf = [];
    if (includesTypeListRef.length) {
      value.anyOf.push(makeShrRefObject(includesTypeListRef.map((ref) => ref.isA), baseSchemaURL));
      for (const ref of includesTypeListRef) {
        const includesType = {
          items: `ref(${makeShrDefinitionURL(ref.isA, baseSchemaURL)})`,
          minItems: ref.card.min
        };
        if (!ref.card.isMaxUnbounded) {
          includesType.maxItems = ref.card.max;
        }
        retValue.includesTypes.push(includesType);
      }
    }
    for (const val of includesTypeListType) {
      value.anyOf.push({ $ref: makeRef(val.isA, enclosingNamespace, baseSchemaURL) });
      const includesType = {
        items: makeShrDefinitionURL(val.isA, baseSchemaURL),
        minItems: val.card.min
      };
      if (!val.card.isMaxUnbounded) {
        includesType.maxItems = val.card.max;
      }
      retValue.includesTypes.push(includesType);
    }
  }

  if (Object.keys(includesCodeLists).length) {
    value.codes = includesCodeLists;
  }

  return {value: retValue, required, tbd: false};
}

function tbdValueToString(tbd) {
  if (tbd.text) {
    return tbd.text;
  } else {
    const card = tbd.effectiveCard;
    if (card) {
      return 'TBD with cardinality ' + card;
    } else {
      return 'TBD';
    }
  }
}

function makeRef(id, enclosingNamespace, baseSchemaURL) {
  if (id.namespace === enclosingNamespace.namespace) {
    return '#/definitions/' + id.name;
  } else {
    return makeShrDefinitionURL(id, baseSchemaURL);
  }
}

function makeShrRefObject(refs, baseSchemaURL) {
  return {
    type: 'object',
    properties: {
      ShrId: { type: 'string' },
      EntryId: { type: 'string' },
      EntryType: {
        type: 'string',
        enum: refs.map((ref) => makeShrDefinitionURL(ref.identifier, baseSchemaURL))
      }
    },
    required: ['ShrId', 'EntryType', 'EntryId']
  };
}

function makeShrDefinitionURL(id, baseSchemaURL) {
  return `${baseSchemaURL}/${namespaceToURLPathSegment(id.namespace)}#/definitions/${id.name}`;
}

function extractConstraintPath(constraint) {
  if (!constraint.hasPath()) {
    return 'Value';
  }
  return constraint.path.map(pathId => namespaceToURLPathSegment(pathId.namespace) + '/' + pathId.name).join(',');
}

function makeExpandedEntryDefinitions(enclosingNamespace, baseSchemaURL) {
  const properties = {};
  for (const name of ['ShrId', 'EntryId', 'FocalSubject', 'SubjectIsThirdPartyFlag', 'Narrative', 'Informant', 'Author', 'AssociatedEncounter', 'OriginalCreationDate', 'LastUpdateDate', 'Language']) {
    properties[name] = { $ref: makeRef(new Identifier('shr.base', name), enclosingNamespace, baseSchemaURL) };
  }
  properties.Version = { $ref: makeRef(new Identifier('shr.core', 'Version'), enclosingNamespace, baseSchemaURL) };
  properties.EntryType = { type: 'array', minItems: 1,
    items: { $ref: makeRef(new Identifier('shr.base', 'EntryType'), enclosingNamespace, baseSchemaURL) }
  };
  return { properties, required: [
    'ShrId',
    'EntryId',
    'EntryType',
    'FocalSubject',
    'OriginalCreationDate',
    'LastUpdateDate'
  ]};
}

/**
 * Converts a concept into a code entry for the schema. (Codes are also represented as Concepts in the object model.)
 *
 * @param {Concept|TBD} concept - The concept to convert.
 * @return {{code: string, display: (string|undefined)}} The converted object. Display is optional.
 */
function makeConceptEntry(concept) {
  if (concept instanceof TBD) {
    const ret = { code: 'urn:tbd#TBD' };
    if (concept.text) {
      ret.display = concept.text;
    }
    return ret;
  } else {
    const ret = { code: concept.system + '#' + concept.code };
    if (concept.display) {
      ret.display = concept.display;
    }
    return ret;
  }
}

function identifierToString(identifier) {
  return `${identifier.namespace}:${identifier.name}`;
}

module.exports = {exportToJSONSchema, setLogger, MODELS_INFO };
