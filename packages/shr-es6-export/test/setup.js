const path = require('path');
const fs = require('fs-extra');
const { sanityCheckModules } = require('shr-models');
const err = require('shr-test-helpers/errors');
const shrTI = require('shr-text-import');
const shrEx = require('shr-expand');
const shrFE = require('shr-fhir-export');
const shrJSE = require('shr-json-schema-export');
const { exportToES6 } = require('../lib/export');
const { TestContext } = require('./test_utils');

sanityCheckModules({shrTI, shrEx, shrJSE, shrFE});

function setup(inDir='./test/fixtures/spec', configFile='config_stu3.json', outDir='./build/test', clean=false) {
  const context = new TestContext();
  // Set the loggers so they don't log out to the screen
  err.clear();
  const errLogger = err.logger();
  shrTI.setLogger(errLogger);
  shrEx.setLogger(errLogger);
  shrFE.setLogger(errLogger);
  shrJSE.setLogger(errLogger);

  const configSpecs = shrTI.importConfigFromFilePath(inDir, configFile);
  const specs = shrEx.expand(shrTI.importFromFilePath(inDir, configSpecs), {}, shrFE);

  // Generate the JSON schemas
  const baseSchemaNamespace = 'https://standardhealthrecord.org/schema';
  const jsonSchemaResults = shrJSE.exportToJSONSchema(specs, baseSchemaNamespace, configSpecs.entryTypeURL);

  // Generate FHIR structure definitions
  const fhirResults = shrFE.exportToFHIR(specs, configSpecs);

  // Generate the ES6
  const results = exportToES6(specs, fhirResults);

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

  // Write the FHIR Profiles
  const baseFHIRPath = `${outDir}/fhir/`;
  const baseFHIRNoDiffProfilesPath = path.join(baseFHIRPath, 'noDiffProfiles');
  fs.mkdirpSync(baseFHIRNoDiffProfilesPath);
  for (const profile of fhirResults._noDiffProfiles) {
    fs.writeFileSync(path.join(baseFHIRNoDiffProfilesPath, `${profile.id}.json`), JSON.stringify(profile, null, 2));
  }
  const baseFHIRProfilesPath = path.join(baseFHIRPath, 'profiles');
  fs.mkdirpSync(baseFHIRProfilesPath);
  for (const profile of fhirResults.profiles) {
    fs.writeFileSync(path.join(baseFHIRProfilesPath, `${profile.id}.json`), JSON.stringify(profile, null, 2));
  }
  const baseFHIRExtensionsPath = path.join(baseFHIRPath, 'extensions');
  fs.mkdirpSync(baseFHIRExtensionsPath);
  for (const extension of fhirResults.extensions) {
    fs.writeFileSync(path.join(baseFHIRExtensionsPath, `${extension.id}.json`), JSON.stringify(extension, null, 2));
  }
  const baseFHIRCodeSystemsPath = path.join(baseFHIRPath, 'codeSystems');
  fs.mkdirpSync(baseFHIRCodeSystemsPath);
  for (const codeSystem of fhirResults.codeSystems) {
    fs.writeFileSync(path.join(baseFHIRCodeSystemsPath, `${codeSystem.id}.json`), JSON.stringify(codeSystem, null, 2));
  }
  const baseFHIRValueSetsPath = path.join(baseFHIRPath, 'valueSets');
  fs.mkdirpSync(baseFHIRValueSetsPath);
  for (const valueSet of fhirResults.valueSets) {
    fs.writeFileSync(path.join(baseFHIRValueSetsPath, `${valueSet.id}.json`), JSON.stringify(valueSet, null, 2));
  }

  // Initialize the ES6 classes as required
  require(`${path.resolve(outDir)}/es6/init`);

  context.errors = err.errors();

  return context;
}

module.exports = setup;
