const fs = require('fs');
const path = require('path');
const bunyan = require('bunyan');
const {Specifications, MODELS_INFO} = require('shr-models');
const {Preprocessor, VERSION, GRAMMAR_VERSION} = require('./preprocessor');
const {DataElementImporter} = require('./dataElementListener');
const {ValueSetImporter} = require('./valueSetListener');
const {MappingImporter} = require('./mappingListener');

var logger = bunyan.createLogger({name: 'shr-text-import'});
function setLogger(bunyanLogger) {
  logger = bunyanLogger;
  require('./preprocessor').setLogger(logger);
  require('./dataElementListener').setLogger(logger);
  require('./valueSetListener').setLogger(logger);
  require('./mappingListener').setLogger(logger);
}

function importFromFilePath(filePath, configuration=[], specifications = new Specifications()) {
  const filesByType = processPath(filePath);
  const preprocessor = new Preprocessor(configuration);

  for (const file of filesByType.dataElement) {
    preprocessor.preprocessFile(file);
  }
  const valueSetimporter = new ValueSetImporter(specifications, configuration);
  for (const file of filesByType.valueSet) {
    valueSetimporter.importFile(file);
  }
  const importer = new DataElementImporter(preprocessor.data, specifications);
  for (const file of filesByType.dataElement) {
    importer.importFile(file);
  }
  const mappingImporter = new MappingImporter(specifications);
  for (const file of filesByType.map) {
    mappingImporter.importFile(file);
  }
  return specifications;
}

function importConfigFromFilePath(filePath) {
  const filesByType = processPath(filePath);
  const preprocessor = new Preprocessor();

  let defaultConfigPath = path.join(__dirname, 'config-template', '/default_config.json');
  let defaultConfigFile = fs.readFileSync(defaultConfigPath, 'utf8');

  let configuration;
  if (filesByType.config.length > 0) {
    configuration = preprocessor.preprocessConfig(defaultConfigFile, filesByType.config[0]);
  } else {
    configuration = preprocessor.preprocessConfig(defaultConfigFile);
    fs.writeFileSync(filePath + '/config.json', defaultConfigFile, 'utf8');
  }

  return configuration;
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
    this._config = [];
  }

  get contentProfile() { return this._contentProfile; }
  get dataElement() { return this._dataElement; }
  get map() { return this._map; }
  get valueSet() { return this._valueSet; }
  get config() { return this._config; }

  add(file) {
    switch (this.detectType(file)) {
    case 'DataElement':
      this._dataElement.push(file);
      break;
    case 'Map':
      this._map.push(file);
      break;
    case 'ValueSet':
      this._valueSet.push(file);
      break;
    case 'ContentProfile':
      this._contentProfile.push(file);
      break;
    case 'Config':
      this._config.push(file);
      break;
    }
  }

  detectType(file) {
    if (!file.endsWith('.txt') && !file.endsWith('.shr') && !file.endsWith('config.json')) {
      return;  // only support *.txt or *.shr or .json coniguration files
    }
    const re = /^\s*Grammar:\s+([^\s]+)/;
    const lines = fs.readFileSync(file, 'utf-8').split('\n');
    for (const l of lines) {
      const match = l.match(re);
      if (match != null && match.length >= 2) {
        return match[1];
      } else if (file.endsWith('config.txt') || file.endsWith('config.json')) {
        return 'Config';
      }
    }
  }
}

module.exports = {importFromFilePath, importConfigFromFilePath, VERSION, GRAMMAR_VERSION, setLogger, MODELS_INFO};
