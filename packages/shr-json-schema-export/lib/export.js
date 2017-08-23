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
//  let de = new mdl.DataElement(id(ns, 'Simple'), true)
//  .withDescription('It is a simple element')
//  .withConcept(new mdl.Concept('http://foo.org', 'bar', 'Foobar'))
//  .withValue(new mdl.IdentifiableValue(pid('string')).withMinMax(1, 1));
//  add(specs, de);
    "definitions": {
    }
  };

  const defs = dataElements.sort(function(l,r) {return l.identifier.name.localeCompare(r.identifier.name);});
  for (const def of defs) {
    let schemaDef = {};
    if (def.fields.length) {
      console.error('Fields: ', def.fields);
      schemaDef.type = 'object';
      if (def.value) {

      }
    } else if (def.value) {
      // TODO: Is this really the best way to identify a type in ES6?
      logger.debug('Value type: %s', def.value.constructor.name);
      if (def.value.constructor.name === "ChoiceValue") {
        logger.error('Unsupported ChoiceValue');
      } else if (def.value.constructor.name === "RefValue") {
        logger.error('Unsupported RefValue');
      } else if (def.value.constructor.name === "IdentifiableValue") {
        const id = def.value.effectiveIdentifier;
        if (id.isPrimitive) {
          switch (id.name) {
            case 'boolean':
            case 'string':
            case 'integer':
              schemaDef.type = id.name;
              break;
            case 'unsignedInt':
              schemaDef.type = 'integer';
              schemaDef.minimum = 0;
              break;
            case 'positiveInt':
              schemaDef.type = 'integer';
              schemaDef.minimum = 1;
              break;
            case 'decimal':
              schemaDef.type = 'number';
              break;
            case 'uri':
              schemaDef.type = 'string';
              schemaDef.format = 'uri';
              break;
            case 'base64Binary':
              schemaDef.type = 'string';
              break;
            case 'dateTime':
              schemaDef.type = 'string';
              schemaDef.format = 'dateTime';
              break;
            case 'instant':
            case 'date':
            case 'time':
            case 'code':
            case 'oid':
            case 'id':
            case 'markdown':
            case 'xhtml':
              schemaDef.type = 'string';
              break;
          }
        } else {
          logger.error('Unsupported non-primitive identifier: ' + id);
        }
      } else if (value.constructor.name === "TBD") {
        logger.error('Unsupported TBD');
      } else if (value.constructor.name === "IncompleteValue") {
        logger.error('Unsupported Incomplete');
      } else {
        logger.error("Unknown type for value '%s'", value.constructor.name);
      }
    } else {
      schemaDef.type = 'object';
      schemaDef.description = 'Empty DataElement?';
    }
    schemaDef.description = def.description;
    if (def.concepts) {
      schemaDef.description += '\nConcepts: ' + def.concepts.map((c) => { return conceptToString(c); }).join(',');
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
