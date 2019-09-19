const fs = require('fs');
const {expect} = require('chai');
const Ajv = require('ajv');

class TestContext {

  importResult(path) {
    return require(`../build/test/es6/${path}`).default;
  }

  // Currently create a json schema for each new profile
  // Ajv had probelems validating against the official FHIR schemas, and us-core doesn't have json schemas
  validateFHIR(name, fhir) {

    const valid = this._ajvFhir.validate(`${name}.fhir.schema.json`, fhir);

    expect(valid, this._ajvFhir.errorsText()).to.be.true;
  }

  validateJSON(name, json) {
    if (!json['entryType']) {
      throw new Error(`Couldn't find entry type for ${name}`);
    }
    const entryType = json['entryType'];
    const matches = entryType.match(/^http:\/\/standardhealthrecord\.org\/spec\/(.*)\/[^/]+$/);
    if (!matches) {
      throw new Error(`${name}'s entry type does not match expected format: ${entryType}`);
    }
    const schema = `${matches[1].split('/').join('.')}.schema.json`;
    const valid = this._ajvJson.validate(schema, json);
    expect(valid, this._ajvJson.errorsText()).to.be.true;
  }

  getJSON(name, validate=true) {
    const json = require(`./fixtures/instances/${name}.json`);
    if (!json) {
      throw new Error(`No JSON found for ${name}`);
    }
    if (validate) {
      this.validateJSON(name, json);
    }
    return json;
  }

  getFHIR(name) {
    const fhir = require(`./fixtures/fhir/${name}.json`);
    if (!fhir) {
      throw new Error(`No FHIR JSON found for ${name}`);
    }
    return fhir;
  }

  compareFHIR(name, testFHIR) {
    const fixtureFHIR = this.getFHIR(name);
    return JSON.stringify(fixtureFHIR) === JSON.stringify(testFHIR);
  }

  setupAjvJson(schemaPath='./build/test/schema') {
    const ajv = new Ajv();
    // Add the JSON Schema DRAFT-04 meta schema
    ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
    // Add the generated schemas
    for (const file of fs.readdirSync(schemaPath)) {
      if (file.endsWith('schema.json')) {
        ajv.addSchema(require(`../${schemaPath}/${file}`), file);
      }
    }
    this._ajvJson = ajv;
  }

  setupAjvFhir(schemaPath, fhirVersion) {
    const ajv = new Ajv({schemaId: 'id'});
    // Add the JSON Schema DRAFT-04 meta schema
    ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
    // Add FHIR schemas
    for (const file of fs.readdirSync(schemaPath)) {
      if (file.endsWith('schema.json')) {
        ajv.addSchema(require(`../${schemaPath}/${file}`), file);
      }
    }
    this._ajvFhir = ajv;
  }
}

module.exports = { TestContext };

