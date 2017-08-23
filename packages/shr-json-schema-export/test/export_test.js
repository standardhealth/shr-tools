const fs = require('fs');
const err = require('shr-test-helpers/errors');
const Ajv = require('ajv');
const {commonExportTests} = require('shr-test-helpers/export');
const {exportToJSONSchema, setLogger} = require('../lib/export');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());


describe('#exportToJSONSchema()', commonExportTests(exportSpecifications, importFixture, importErrorsFixture));

function exportSpecifications(specifications) {
  const schemata = exportToJSONSchema(specifications);
  validateSchemata(schemata);
  return schemata;
}

function importFixture(name, ext='.schema.json') {
  const fixture = JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8'));
  validateSchemata(fixture);
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

function validateSchemata(schemata) {
  const schemaValidator = new Ajv();
  schemaValidator.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
  schemaValidator.addSchema(schemata);
}
