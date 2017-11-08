// export SHR specification content as a hierarchy in JSON format
// Author: John Gibson
// Derived from export SHR specification content as a hierarchy in JSON format by Greg Quinn

const bunyan = require('bunyan');
const {Identifier, IdentifiableValue, RefValue, ChoiceValue, TBD, IncompleteValue, ValueSetConstraint, IncludesCodeConstraint, IncludesTypeConstraint, CodeConstraint, CardConstraint, TypeConstraint, INHERITED, OVERRIDDEN, DataElement, Namespace, DataElementSpecifications, Specifications, MODELS_INFO, PrimitiveIdentifier, PRIMITIVE_NS} = require('shr-models');

const CODE = new PrimitiveIdentifier('code');

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
      isCode = supportsCodeConstraint(valueDef.identifier, dataElementsSpecs);
      if (!isList) {
        // Inheritance rules allow us to constrain a parent's list to a single element. However we have to still
        // render it as a list so that the allOf() inheritance construct will work properly.
        // TODO: Move this to the top check.
        const fullDef = dataElementsSpecs.findByIdentifier(valueDef.identifier);
        if (fullDef.value) {
          const cardConstraints = fullDef.value.constraintsFilter.own.card.constraints;
          isList = cardConstraints.some((oneCard) => oneCard.isList);
        }
      }
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
    const fullDef = dataElementsSpecs.findByIdentifier(valueDef.identifier);
    const {path: constraintPath, target: constraintTarget } = extractConstraintPath(constraint, fullDef, dataElementsSpecs);
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
        logger.error('ERROR: code constraint %s was applied to a non-coding type %s', valueDef, JSON.stringify(constraint, null, 2));
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
      if (!constraintTarget) {
        value.$ref = makeRef(constraint.isA, enclosingNamespace, baseSchemaURL);
      } else {
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

        for (const path of constraintPath) {
          allOfEntry.properties = {};
          allOfEntry = allOfEntry.properties[path] = {};
        }

        allOfEntry.$ref = makeRef(constraint.isA, enclosingNamespace, baseSchemaURL);
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

/**
 * Translates a constraint path into a valid path for the JSON Schema.
 * @param {Constraint} constraint - the constraint.
 * @param {DataElement} valueDef - the data element that contains the constraint.
 * @param {DataElementSpecifications} dataElementSpecs - the elements in the namespace.
 * @return {{path: (Array<string>|undefined), target: (DataElement|undefined)}} - The target of the constraint and the extracted path (qualified if necessary). Both properties will be null if there was an error.
 */
function extractConstraintPath(constraint, valueDef, dataElementSpecs) {
  if (!constraint.hasPath()) {
    return {path: ['Value']};
  }

  let currentDef = valueDef;
  const normalizedPath = [];
  for (let i = 0; i < constraint.path.length; i += 1) {
    const pathId = constraint.path[i];
    if (pathId.namespace === PRIMITIVE_NS) {
      if (i !== constraint.path.length - 1) {
        logger.error('Encountered a constraint path containing a primitive %s at index %d that was not the leaf: %s', i, pathId, constraint);
        return {};
      }
      if (!currentDef.value) {
        logger.error('Encountered a constraint path with a primitive leaf %s on an element that lacked a value: %s', pathId, constraint);
        return {};
      }
      if (!pathId.equals(currentDef.value.identifier)) {
        logger.error('Encountered a constraint path with a primitive leaf %s on an element with a mismatched value: %s', pathId, constraint);
        return {};
      }
      normalizedPath.push('Value');
    } else {
      const newDef = dataElementSpecs.findByIdentifier(pathId);
      if (!newDef) {
        logger.error('Cannot resolve element definition for %s on constraint %s. ERROR_CODE:12029', pathId, constraint);
        return {};
      }
      let found = false;
      // See if the current definition has a value of the specified type.
      if (currentDef.value) {
        if (pathId.equals(currentDef.value.identifier) || checkHasBaseType(currentDef.value.identifier, pathId, dataElementSpecs)) {
          normalizedPath.push('Value');
          found = true;
        }
      }

      if (!found) {
        if (!currentDef.fields || !currentDef.fields.length) {
          logger.error('Element %s lacked any fields or a value that matched %s as part of constraint %s', currentDef, pathId, constraint);
          return {};
        } else {
          let qualified = false;
          for (const field of currentDef.fields) {
            if (pathId.equals(field.identifier)) {
              found = true;
            } else if (field.identifier.name === pathId.name) {
              qualified = true;
            }
          }
          if (!found) {
            logger.error('Element %s lacked a field or a value that matched %s as part of constraint %s', currentDef, pathId, constraint);
            return {};
          }
          normalizedPath.push(qualified ? (namespaceToURLPathSegment(pathId.namespace) + '/' + pathId.name) : pathId.name);
        }
      }
      currentDef = newDef;
    }
  }

  return {path:normalizedPath, target: currentDef === valueDef ? null : currentDef};
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

// stealing from shr-expand
/**
 * Determine if a type supports a code constraint.
 *
 * @param {Identifier} identifier - The identifier of the type to check.
 * @param {DataElementSpecifications} dataElementSpecs - The available DataElement specs.
 * @return {boolean} Whether or not the given type supports a code constraint.
 */
function supportsCodeConstraint(identifier, dataElementSpecs) {
  if (CODE.equals(identifier) || checkHasBaseType(identifier, new Identifier('shr.core', 'Coding'), dataElementSpecs)
      || checkHasBaseType(identifier, new Identifier('shr.core', 'CodeableConcept'), dataElementSpecs)) {
    return true;
  }
  const element = dataElementSpecs.findByIdentifier(identifier);
  if (element.value) {
    if (element.value instanceof IdentifiableValue) {
      return CODE.equals(element.value.identifier) || checkHasBaseType(element.value.identifier, new Identifier('shr.core', 'Coding'), dataElementSpecs)
          || checkHasBaseType(element.value.identifier, new Identifier('shr.core', 'CodeableConcept'), dataElementSpecs);
    } else if (element.value instanceof ChoiceValue) {
      for (const value of element.value.aggregateOptions) {
        if (value instanceof IdentifiableValue) {
          if (CODE.equals(value.identifier) || checkHasBaseType(value.identifier, new Identifier('shr.core', 'Coding'), dataElementSpecs)
              || checkHasBaseType(value.identifier, new Identifier('shr.core', 'CodeableConcept'), dataElementSpecs)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

function checkHasBaseType(identifier, baseIdentifier, dataElementSpecs) {
  if (typeof identifier === 'undefined' || typeof baseIdentifier === 'undefined') {
    return false;
  }
  const basedOns = getRecursiveBasedOns(identifier, dataElementSpecs);
  return basedOns.some(id => id.equals(baseIdentifier));
}

function getRecursiveBasedOns(identifier, dataElementSpecs, alreadyProcessed = []) {
  // If it's primitive or we've already processed this one, don't go further (avoid circular dependencies)
  if (identifier.isPrimitive || alreadyProcessed.some(id => id.equals(identifier))) {
    return alreadyProcessed;
  }

  // We haven't processed it, so look it up
  const element = dataElementSpecs.findByIdentifier(identifier);
  if (typeof element === 'undefined') {
    logger.error('Cannot resolve element definition for %s. ERROR_CODE:12029', identifier.fqn);
    return alreadyProcessed;
  }
  // Add it to the already processed list (again, to avoid circular dependencies)
  alreadyProcessed.push(identifier);
  // Now recursively get the BasedOns for each of the BasedOns
  for (const basedOn of element.basedOn) {
    alreadyProcessed = getRecursiveBasedOns(basedOn, dataElementSpecs, alreadyProcessed);
  }

  return alreadyProcessed;
}
// done stealing from shr-expand

module.exports = {exportToJSONSchema, setLogger, MODELS_INFO };
