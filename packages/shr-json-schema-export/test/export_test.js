const fs = require('fs');
const err = require('shr-test-helpers/errors');
const Ajv = require('ajv');
const {expect} = require('chai');
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
  const schemataDict = exportToJSONSchema(expSpecs, 'https://standardhealthrecord.org/test');
  validateSchemata(schemataDict);
  return schemataDict;
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

function validateSchemata(schemataDict) {
  const schemaValidator = new Ajv();
  schemaValidator.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
  const schemata = [];
  for (const id in schemataDict) {
    schemata.push(schemataDict[id]);
  }
  try {
    schemaValidator.addSchema(schemata);
  } catch(ex) {
    console.error('Error validating schemata', JSON.stringify(schemata, null, 2));
    throw ex;
  }
}
