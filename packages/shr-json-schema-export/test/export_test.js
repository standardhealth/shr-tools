const fs = require('fs');
const err = require('shr-test-helpers/errors');
const Ajv = require('ajv');
const {expect, assert} = require('chai');
const { sanityCheckModules } = require('shr-models');
const export_tests = require('shr-test-helpers/export');
const {commonExportTests } = export_tests;
const {exportToJSONSchema, setLogger} = require('../lib/export');
const expander = require('shr-expand');

sanityCheckModules({ 'shr-expand': expander, 'shr-test-helpers': export_tests });

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());
expander.setLogger(err.logger());


describe('#exportToJSONSchema()', commonExportTests(exportSpecifications, importFixture, importErrorsFixture));

function exportSpecifications(specifications) {
  const expSpecs = expander.expand(specifications);
  if (err.errors().length) {
    expect(err.errors()).to.deep.equal([]);
  }
  const schemataDict = exportToJSONSchema(expSpecs, 'https://standardhealthrecord.org/test', 'http://standardhealthrecord.org/spec');
  createValidator(schemataDict);
  return schemataDict;
}

function importFixture(name, ext='.schema.json') {
  const rawSchema = fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8');
  let fixture;
  try {
    fixture = JSON.parse(rawSchema);
  } catch (ex) {
    assert.fail(false, true, `Errors parsing schemata as JSON: ${ex}: raw schemata was: ${rawSchema}`);
    return;
  }
  const { ajv, validator } = createValidator(fixture);
  const file = `${__dirname}/fixtures/instances/${name}.json`;
  if (fs.existsSync(file)) {
    let instance;
    try {
      instance = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (ex) {
      assert.fail(false, true, `Errors loading instance from file ${file}: ${ex}`);
      return;
    }
    const valid = validator(instance);
    if (!valid) {
      assert.fail(false, true, 'Errors validating instance: ' + ajv.errorsText(validator.errors));
    }
  }
  return fixture;
}

function importErrorsFixture(name, ext='.schema.json') {
  const file = `${__dirname}/fixtures/${name}_errors${ext}`;
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } else {
    // default to no expected _errors
    return [];
  }
}

/**
 * Creates a validator from the given dictionary of schemas.
 *
 * @param {Object.<string, Object>} schemataDict - a mapping of schema ids to JSON Schema definitions.
 * @return {{ajv: Ajv, validator: function}} The validator and a compiled instance of the target schema.
 */
function createValidator(schemataDict) {
  const schemaValidator = new Ajv();
  schemaValidator.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
  schemaValidator.addSchema(stubSchema);
  const schemata = [];
  // This generally assumes that we'll be testing the shr.test namespace
  const defaultNamespace = 'https://standardhealthrecord.org/test/shr/test';
  let schema = schemataDict[defaultNamespace];
  if (!schema) {
    for (const id in schemataDict) {
      schema = schemataDict[id];
      break;
    }
  }
  for (const id in schemataDict) {
    schemata.push(schemataDict[id]);
  }
  try {
    schemaValidator.addSchema(schemata);
    return { ajv: schemaValidator, validator: schemaValidator.compile(schema) };
  } catch(ex) {
    assert.fail(false, true, 'Errors validating schemata: ' + ex + ': schemata was: ' + JSON.stringify(schemata, null, 2));
  }
}

/**
 * A stub implementation of shr.base.Entry.
 */
const stubSchema = JSON.parse(`{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "https://standardhealthrecord.org/test/shr/base",
  "title": "A stub implementation of shr.base.Entry.",
  "definitions": {
    "Entry": {
      "type": "object",
      "properties": {
        "shr.base.ShrId": {
          "$ref": "#/definitions/RequiredString"
        },
        "shr.base.EntryId": {
          "$ref": "#/definitions/RequiredString"
        },
        "shr.base.EntryType": {
          "$ref": "#/definitions/EntryType"
        },
        "shr.core.CreationTime": {
          "type": "object",
          "properties": {
            "Value": {
              "type": "string",
              "format": "date-time"
            }
          },
          "required": [ "Value" ]
        },
        "shr.base.LastUpdated": {
          "$ref": "#/definitions/RequiredString"
        }
      },
      "required": [
        "shr.base.ShrId",
        "shr.base.EntryId",
        "shr.base.EntryType",
        "shr.core.CreationTime",
        "shr.base.LastUpdated"
      ]
    },
    "RequiredString": {
      "type": "object",
      "properties": {
        "Value": { "type": "string" }
      },
      "required": [ "Value" ]
    },
    "EntryType": {
      "type": "object",
      "properties": {
        "Value": { "type": "string", "format": "uri" }
      },
      "required": [ "Value" ]
    }
  }
}`);
