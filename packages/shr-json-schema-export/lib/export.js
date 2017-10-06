// export SHR specification content as a hierarchy in JSON format
// Author: John Gibson
// Derived from export SHR specification content as a hierarchy in JSON format by Greg Quinn

const bunyan = require('bunyan');
const {Identifier, IdentifiableValue, RefValue, ChoiceValue, TBD, IncompleteValue, ValueSetConstraint, IncludesCodeConstraint, CodeConstraint, CardConstraint, TypeConstraint} = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-json-schema-export'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}


/**
 * Converts a group of specifications into JSON Schema.
 * @param {shr-models.Specifications} specifications - a Specifications object.
 * @return {Object.<string, Object>} A mapping of schema ids to JSON Schema definitions.
 */
function exportToJSONSchema(specifications, baseSchemaURL, expanded = false) {
  const namespaceResults = {};
  for (const ns of specifications.namespaces.all) {
    const { schemaId, schema } = namespaceToSchema(ns,
        specifications.dataElements.byNamespace(ns.namespace),
        specifications.dataElements.grammarVersions, baseSchemaURL, expanded );
    namespaceResults[schemaId] = schema;
  }

  return namespaceResults;
}

/**
 * Converts a namespace into a JSON Schema.
 * @param {shr-models.Namespace} ns - the namespace of the schema.
 * @param {shr-models.DataElement[]} dataElements - the elements in the namespace.
 * @param {shr-models.Version[]} grammarVersions - the grammar versions defined by the elements in the namespace.
 * @return {{schemaId: string, schema: Object}} The schema id and the JSON Schema definition.
 */
function namespaceToSchema(ns, dataElements, grammarVersions, baseSchemaURL, expanded) {
  const schemaId = `${baseSchemaURL}/${namespaceToURLPathSegment(ns.namespace)}`;
  let schema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    id: schemaId,
    title: "TODO: Figure out what the title should be.",
    definitions: {}
  };
  const entryRef = makeRef(new Identifier('shr.base', 'Entry'), ns, baseSchemaURL);
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
    if (expanded) {
      if (def.isEntry) {
        requiredProperties = expandedEntry.required.slice();
      }
    } else if (def.isEntry || def.basedOn.length) {
      wholeDef = { allOf: [] };
      if (def.isEntry) {
        wholeDef.allOf.push({ $ref: entryRef });
      }
      for (const supertypeId of def.basedOn) {
        if (supertypeId instanceof TBD) {
          if (supertypeId.text) {
            tbdParentDescriptions.push(supertypeId.text);
          } else {
            tbdParentDescriptions.push('TBD');
          }
        } else {
          wholeDef.allOf.push({ $ref:  makeRef(supertypeId, ns, baseSchemaURL)});
        }
      }
      wholeDef.allOf.push(schemaDef);
    }

    const tbdFieldDescriptions = [];
    if (def.value) {
      let { value, required, tbd } = convertDefinition(def.value, ns, baseSchemaURL);
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
        let {value, required, tbd} = convertDefinition(field, ns, baseSchemaURL);
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
      if (expanded && def.isEntry) {
        for (name in expandedEntry.properties) {
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
      descriptionList.push('Concepts: ' + def.concepts.map((c) => { return conceptToString(c); }).join(','));
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

function convertDefinition(valueDef, enclosingNamespace, baseSchemaURL) {
  const retValue = {};
  let value = retValue;
  const card = valueDef.effectiveCard;
  let required = false;
  let isCode = false;
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
    } else if (card.min) {
      required = true;
    }
  }

  // TODO: Is this really the best way to identify a type in ES6?
  logger.debug('Value type: %s', valueDef.constructor.name);
  if (valueDef.constructor.name === 'ChoiceValue') {
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
      const props = {
        ShrId: { type: 'string' },
        EntryType: { type: 'string', enum: [] },
        EntryId: { type: 'string' }
      };
      for (const option of refOptions) {
        props.EntryType.enum.push(`${baseSchemaURL}/${namespaceToURLPathSegment(option.identifier.namespace)}#/definitions/${option.identifier.name}`);
      }
      value.anyOf.push({ type: 'object', properties: props, required: ['ShrId', 'EntryType', 'EntryId']});
    }
    for (const option of normalOptions) {
      const { value: childValue } = convertDefinition(option, enclosingNamespace, baseSchemaURL);
      value.anyOf.push(childValue);
    }
    if (value.anyOf.length == 1) {
      const single = value.anyOf[0];
      delete value.anyOf;
      for (const ent in single) {
        value[ent] = single[ent];
      }
    }
  } else if (valueDef.constructor.name === 'RefValue') {
    // TODO: What should the value of EntryType be? The schema URL may not be portable across data types.
    value.type = 'object';
    value.properties = {
      ShrId: { type: 'string' },
      EntryType: { type: 'string', enum: [`${baseSchemaURL}/${namespaceToURLPathSegment(valueDef.identifier.namespace)}#/definitions/${valueDef.identifier.name}`] },
      EntryId: { type: 'string' }
    };
    value.required = ['ShrId', 'EntryType', 'EntryId'];
  } else if (valueDef.constructor.name === 'IdentifiableValue') {
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
      // This isn't always true, but other types may descend from codes or offer codes as an option for their value
      // so without walking the entire inheritance hierarchy we'll just allow it. The frontend of the tool chain
      // should block illegal coding constraints (hopefully).
      isCode = true;
    }
  } else if (valueDef.constructor.name === 'TBD') {
    if (retValue.items != null) {
      delete retValue.items;
    }
    return {value: retValue, required: required, tbd: true};
  } else if (valueDef.constructor.name === 'IncompleteValue') {
    logger.error('Unsupported Incomplete');
  } else {
    logger.error('Unknown type for value "%s"', valueDef.constructor.name);
  }

  const description = [];
  const includesCodeLists = {};
  for (const constraint of valueDef.constraints) {
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
      value.code[constraintPath] = { code: constraint.code.system + '#' + constraint.code.code };
      if (constraint.code.display) {
        value.code[constraintPath].display = constraint.code.display;
      }
    } else if (constraint instanceof IncludesCodeConstraint) {
      if (!(isCode/* && card && card.isList*/)) { // TODO: Deal with cardinality
        logger.error('ERROR: includes code constraint %s was applied to a non-coding array type %s', valueDef, JSON.stringify(constraint, null, 2));
        continue;
      }
      if (!includesCodeLists[constraintPath]) {
        includesCodeLists[constraintPath] = [];
      }
      const code = {code: constraint.code.system + '#' + constraint.code.code};
      if (constraint.code.display) {
        code.display = constraint.code.display;
      }
      includesCodeLists[constraintPath].push(code);
    } else if (constraint instanceof TypeConstraint) {
      if (constraint.onValue || constraint.hasPath()) {
        let allOfEntry = {};
        if (retValue === value) {
          value = {};
          for (const key of Object.keys(retValue)) {
            value[key] = retValue[key];
            delete retValue[key];
          }
          retValue.allOf = [value, allOfEntry];
        } else {
          retValue.items = { allOf: [ value, allOfEntry ]};
        }
        if (constraint.hasPath()) {
          // TODO: properly handling namespaces will require traversing the class hierarchy
          for (const pathId of constraint.path) {
            allOfEntry.properties = {};
            allOfEntry = allOfEntry.properties[pathId.name] = {};
          }
        }
        if (constraint.onValue) {
          allOfEntry.properties = {};
          allOfEntry = allOfEntry.properties.Value = {};
        }
        allOfEntry.$ref = makeRef(constraint.isA, enclosingNamespace, baseSchemaURL);
      } else {
        value.$ref = makeRef(constraint.isA, enclosingNamespace, baseSchemaURL);
      }
    } else {
      logger.info('WARNING: Constraint not yet implemented', constraint);
    }
  }

  if (Object.keys(includesCodeLists).length) {
    value.codes = includesCodeLists;
  }

  if (description.length) {
    retValue.description = 'Constraints: ' + description.join('\n');
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
    return `${baseSchemaURL}/${namespaceToURLPathSegment(id.namespace)}#/definitions/${id.name}`;
  }
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

function conceptToString(concept) {
  if (concept instanceof TBD) {
    return concept.text ? ('TBD: ' + concept.text) : 'TBD';
  } else if (concept.display) {
    return `${concept.display} (${concept.system}:${concept.code})`;
  } else {
    return `${concept.system}:${concept.code}`;
  }
}

function identifierToString(identifier) {
  return `${identifier.namespace}:${identifier.name}`;
}

module.exports = {exportToJSONSchema, setLogger};
