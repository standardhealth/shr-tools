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


function exportToJSONSchema(specifications) {
  const namespaceResults = [];
  for (const ns of specifications.namespaces.all) {
    namespaceResults.push(
        namespaceToSchema(ns,
            specifications.dataElements.byNamespace(ns.namespace),
            specifications.dataElements.grammarVersions )); // *Namespace
  }

  return namespaceResults;
}

function namespaceToSchema(ns, dataElements, grammarVersions) {
  let schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "https://standardhealthrecord.org/test/" + ns.namespace.replace(/\./g, '/'),
    "title": "TODO: Figure out what the title should be.",
    "definitions": {}
  };

  const defs = dataElements.sort(function(l,r) {return l.identifier.name.localeCompare(r.identifier.name);});
  for (const def of defs) {
    let schemaDef = {
      type: 'object',
      properties: {}
    };
    let required = [];
    if (def.value) {
      required.push('Value');
      const value = schemaDef.properties.Value = {};
      // TODO: Is this really the best way to identify a type in ES6?
      logger.debug('Value type: %s', def.value.constructor.name);
      if (def.value.constructor.name === 'ChoiceValue') {
        logger.error('Unsupported ChoiceValue');
      } else if (def.value.constructor.name === 'RefValue') {
        logger.error('Unsupported RefValue');
      } else if (def.value.constructor.name === 'IdentifiableValue') {
        const id = def.value.effectiveIdentifier;
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
            case 'oid':
            case 'id':
            case 'markdown':
            case 'xhtml':
              value.type = 'string';
              break;
          }
        } else {
          if (id.namespace === ns.namespace) {
            value['$ref'] = '#' + def.value.identifier.name;
          } else {
            value['$ref'] = "https://standardhealthrecord.org/test/" + def.value.identifier.namespace.replace(/\./g, '/') + '#definitions/' + def.value.identifier.name;
          }
        }
      } else if (def.value.constructor.name === 'TBD') {
        logger.error('Unsupported TBD');
      } else if (def.value.constructor.name === 'IncompleteValue') {
        logger.error('Unsupported Incomplete');
      } else {
        logger.error('Unknown type for value "%s"', def.value.constructor.name);
      }
    }
    if (def.fields.length) {
      for (const field in def.fields) {
        if (field.identifier.name === 'Value') {
          logger.error('ERROR: Ignoring restricted field name: Value', field);
          continue;
        }
        const card = field.effectiveCard;
        if (card.isList) {
          logger.error('List cardinality is unsupported. Field: "%s"', field.identifier.name);
          continue;
        } else if (card.min) {
          required.push(field.identifier.name);
        }
        if (field.value && field.value.identifier) {
          if (field.value.identifier.namespace.namespace === ns) {
            schemaDef.properties[field.identifier.name] = { '$ref': '#' + field.value.identifier.name};
          } else {
            schemaDef.properties[field.identifier.name] = { '$ref': "https://standardhealthrecord.org/test/" + field.value.identifier.namespace.replace(/\./g, '/') + '#' + field.value.identifier.name};
          }
        }
      }
    } else if (!def.value) {
      schemaDef.type = 'object';
      schemaDef.description = 'Empty DataElement?';
    }
    schemaDef.description = def.description;
    if (def.concepts.length) {
      schemaDef.description += '\nConcepts: ' + def.concepts.map((c) => { return conceptToString(c); }).join(',');
    }
    if (required.length) {
      schemaDef.required = required;
    }

    schema.definitions[def.identifier.name] = schemaDef;
  }

  return schema;
}

function conceptToString(concept) {
  if (concept.display) {
    return `${concept.display} (${concept.system}:${concept.code})`;
  } else {
    return `${concept.system}:${concept.code}`;
  }
}

function identifierToString(identifier) {
  return `${identifier.namespace}:${identifier.name}`;
}

module.exports = {exportToJSONSchema, setLogger};
