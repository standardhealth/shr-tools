const fs = require('fs');
const path = require('path');
const {Specifications} = require('shr-models');
const {Preprocessor, VERSION, GRAMMAR_VERSION} = require('./preprocessor');
const {Importer} = require('./listener');
const {ValueSetImporter} = require('./valueSetListener');
const {MappingImporter} = require('./mappingListener');

function importFromFilePath(filePath, specifications = new Specifications()) {
  const filesByType = processPath(filePath);
  const preprocessor = new Preprocessor();
  for (const file of filesByType.dataElement) {
    preprocessor.preprocessFile(file);
  }
  const valueSetimporter = new ValueSetImporter(specifications);
  for (const file of filesByType.valueSet) {
    valueSetimporter.importFile(file);
  }
  const importer = new Importer(preprocessor.data, specifications);
  for (const file of filesByType.dataElement) {
    importer.importFile(file);
  }
  const mappingImporter = new MappingImporter(specifications);
  for (const file of filesByType.map) {
    mappingImporter.importFile(file);
  }
  return {
    specifications,
    errors: preprocessor.errors.concat(importer.errors).concat(valueSetimporter.errors).concat(mappingImporter.errors)
  };
}

function processPath(filePath, filesByType = new FilesByType()) {
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      processPath(path.join(filePath, file), filesByType);
    }
  } else {
    filesByType.add(filePath);
  }

  return filesByType;
}

class FilesByType {
  constructor() {
    this._contentProfile = [];
    this._dataElement = [];
    this._map = [];
    this._valueSet = [];
  }

  get contentProfile() { return this._contentProfile; }
  get dataElement() { return this._dataElement; }
  get map() { return this._map; }
  get valueSet() { return this._valueSet; }

  add(file) {
    if (file.endsWith('_cp.txt')) {
      this._contentProfile.push(file);
    } else if (file.endsWith('_map.txt')) {
      this._map.push(file);
    } else if (file.endsWith('_vs.txt')) {
      this._valueSet.push(file);
    } else if (file.endsWith('.txt')) {
      this._dataElement.push(file);
    }
  }
}

module.exports = {importFromFilePath, VERSION, GRAMMAR_VERSION};