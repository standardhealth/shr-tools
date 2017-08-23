const fs = require('fs');
const err = require('shr-test-helpers/errors');
const {commonExportTests} = require('shr-test-helpers/export');
const {exportToJSONSchema, setLogger} = require('../lib/export');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

describe('#exportToJSONSchema()', commonExportTests(exportSpecifications, importFixture, importErrorsFixture));

function exportSpecifications(specifications) {
  return exportToJSONSchema(specifications);
}

function importFixture(name, ext='.schema.json') {
  return JSON.parse(fs.readFileSync(`${__dirname}/fixtures/${name}${ext}`, 'utf8'));
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
