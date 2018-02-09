const path = require('path');
const fs = require('fs-extra');
const shrTI = require('shr-text-import');
const shrEx = require('shr-expand');
const shrJSE = require('shr-json-schema-export');
const { exportToES6 } = require('../lib/export');

function setup(inDir='./test/fixtures/spec', outDir='./build/test', clean=false) {
  const configSpecs = shrTI.importConfigFromFilePath(inDir);
  const specs = shrEx.expand(shrTI.importFromFilePath(inDir, configSpecs));

  // Generate the JSON schemas
  const baseSchemaNamespace = 'https://standardhealthrecord.org/schema';
  const jsonSchemaResults = shrJSE.exportToJSONSchema(specs, baseSchemaNamespace, configSpecs.entryTypeURL);

  // Generate the ES6
  const results = exportToES6(specs);

  if (clean) {
    fs.removeSync(outDir);
  }

  // Write the generated ES6 code out to disk
  const es6Path = `${outDir}/es6/`;
  const handleNS = (obj, fpath) => {
    fs.mkdirpSync(fpath);
    for (const key of Object.keys(obj)) {
      if (key.endsWith('.js')) {
        fs.writeFileSync(path.join(fpath, key), obj[key]);
      } else {
        handleNS(obj[key], path.join(fpath, key));
      }
    }
  };
  handleNS(results, es6Path);

  // Write the JSON schemas out to disk
  const jsonSchemaPath = `${outDir}/schema/`;
  fs.mkdirpSync(jsonSchemaPath);
  for (const schemaId in jsonSchemaResults) {
    const filename = `${schemaId.substring(baseSchemaNamespace.length+1).replace(/\//g, '.')}.schema.json`;
    fs.writeFileSync(path.join(jsonSchemaPath, filename), JSON.stringify(jsonSchemaResults[schemaId], null, 2));
  }

  // Initialize the ES6 classes as required
  require(`${path.resolve(outDir)}/es6/init`);
}

module.exports = setup;