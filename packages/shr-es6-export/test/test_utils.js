const fs = require('fs');
const {expect} = require('chai');
const Ajv = require('ajv');

function importResult(path) {
  return require(`../build/test/es6/${path}`).default;
}

class TestContext {
  validateJSON(name, json) {
    if (!json['shr.base.EntryType'] || !json['shr.base.EntryType'].Value) {
      throw new Error(`Couldn't find entry type for ${name}`);
    }
    const entryType = json['shr.base.EntryType'].Value;
    const matches = entryType.match(/^http:\/\/standardhealthrecord\.org\/spec\/(.*)\/[^/]+$/);
    if (!matches) {
      throw new Error(`${name}'s entry type does not match expected format: ${entryType}`);
    }
    const schema = `${matches[1].split('/').join('.')}.schema.json`;
    const valid = this._ajv.validate(schema, json);
    expect(valid, this._ajv.errorsText()).to.be.true;
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

  setupAjv(schemaPath='./build/test/schema') {
    const ajv = new Ajv();
    // Add the JSON Schema DRAFT-04 meta schema
    ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
    // Add the generated schemas
    for (const file of fs.readdirSync(schemaPath)) {
      if (file.endsWith('schema.json')) {
        ajv.addSchema(require(`../${schemaPath}/${file}`), file);
      }
    }
    this._ajv = ajv;
  }
}

module.exports = { importResult, TestContext };

