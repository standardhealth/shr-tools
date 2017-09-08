// export SHR specification content as a hierarchy in JSON format
// Author: John Gibson
// Derived from export SHR specification content as a hierarchy in JSON format by Greg Quinn

const bunyan = require('bunyan');
const {IdentifiableValue, RefValue, ChoiceValue, TBD, IncompleteValue, ValueSetConstraint, IncludesCodeConstraint, CodeConstraint, CardConstraint, TypeConstraint} = require('shr-models');

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
function exportToJSONSchema(specifications, baseSchemaURL) {
  const namespaceResults = {};
  for (const ns of specifications.namespaces.all) {
    const { schemaId, schema } = namespaceToSchema(ns,
        specifications.dataElements.byNamespace(ns.namespace),
        specifications.dataElements.grammarVersions, baseSchemaURL );
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
function namespaceToSchema(ns, dataElements, grammarVersions, baseSchemaURL) {
  const schemaId = `${baseSchemaURL}/${namespaceToURLPathSegment(ns.namespace)}`;
  let schema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    id: schemaId,
    title: "TODO: Figure out what the title should be.",
    definitions: {}
  };

  const defs = dataElements.sort(function(l,r) {return l.identifier.name.localeCompare(r.identifier.name);});
  for (const def of defs) {
    let schemaDef = {
      type: 'object',
      properties: {}
    };
    let wholeDef = schemaDef;
    const tbdParentDescriptions = [];
    if (def.basedOn.length) {
      wholeDef = { allOf: [] };
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

    let requiredProperties = [];
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
    value.oneOf = [];
    for (const option of valueDef.options) {
      const { value: childValue } = convertDefinition(option, enclosingNamespace, baseSchemaURL);
      value.oneOf.push(childValue);
    }
  } else if (valueDef.constructor.name === 'RefValue') {
    // TODO: Schema extension or base definition: make this a first-class object.
    value.type = 'object';
    value.properties = {
      ShrId: { type: 'string' },
      EntryType: { type: 'string', format: 'uri' },
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
          value.format = 'dateTime';
          break;
        case 'instant':
        case 'date':
        case 'time':
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
  for (const constraint of valueDef.constraints) {
    if (constraint instanceof ValueSetConstraint) {
      if (!isCode) {
        logger.error('ERROR: valueset constraint %s was applied to a non-coding type %s', valueDef, constraint);
        continue;
      }
      description.push('ValueSet: ' + constraint.valueSet + ', ' + constraint.bindingStrength);
    } else if (constraint instanceof CodeConstraint) {
      if (!isCode) {
        logger.error('ERROR: code constraint %s was applied to a non-coding type %s', valueDef, constraint);
        continue;
      }
      description.push('Code: ' + constraint.code);
    } else if (constraint instanceof IncludesCodeConstraint) {
      if (!(isCode && card.isList)) {
        logger.error('ERROR: includes code constraint %s was applied to a non-coding array type %s', valueDef, constraint);
        continue;
      }
      description.push('Includes Code: ' + constraint.code);
    } else {
      logger.info('WARNING: Constraint not yet implemented', constraint);
    }
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
