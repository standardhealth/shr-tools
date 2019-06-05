const {expect} = require('chai');
const {setLogger} = require('../index');

const {importCimcoreFolder, importCimcoreProjectFile, importCimcoreNSFile, importCimcoreDEFile, importCimcoreVSFile, importCimcoreMapFile, convertSpecsToCimcore} = require('../test/import-helper');
const err = require('shr-test-helpers/errors');
setLogger(err.logger());

// mlt: All of the cimcore test samples need updating to CIMPL6 grammar

describe.skip('#importCimcoreFromFilePath', () => {
  it('Cimcore1: should be able to correctly import specifications instance and then export to identical cimcore', () => {
    const [importedConfigSpecifications, importedSpecifications] = importCimcoreFolder();

    //This is the cimcore produced from importedSpecs. Used for verifying fidelity
    const cimcoreSpecifications = convertSpecsToCimcore(importedConfigSpecifications, importedSpecifications);

    //All CIMCORE files are verified through string comparison. This is perhaps not ideal as they can still be
    //valid files if the same elemenets are outputted in a different order. However, this should not be a problem
    //for now, as the process that produced the original fixtures and the process that produces the unit test are
    //identical in their ordering of outputs. This change should be a considered update in the future.

    const origProjectJSON = importCimcoreProjectFile();
    expect(JSON.stringify(cimcoreSpecifications.projectInfo, null, 2)).to.eql(origProjectJSON);

    //meta namespace files
    for (const ns in cimcoreSpecifications.namespaces) { //namespace files
      const origNsJSON = importCimcoreNSFile(ns);
      expect(JSON.stringify(cimcoreSpecifications.namespaces[ns], null, 2)).to.eql(origNsJSON);
    }

    //data elements
    for (const de of cimcoreSpecifications.dataElements) { //namespace files
      const origDeJSON = importCimcoreDEFile(de.namespace, de.name);
      expect(JSON.stringify(de, null, 2)).to.eql(origDeJSON);
    }

    //valuesets
    for (const vs of cimcoreSpecifications.valueSets) {
      const origVsJSON = importCimcoreVSFile(vs.namespace, vs.name);
      expect(JSON.stringify(vs, null, 2)).to.eql(origVsJSON);
    }

    //mappings
    for (const mapping of [...cimcoreSpecifications.mappings]) {
      const origMapJSON = importCimcoreMapFile(mapping.namespace, mapping.name);
      expect(JSON.stringify(mapping, null, 2)).to.eql(origMapJSON);
    }

  });
});