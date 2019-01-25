/**
 * @file
 * CIMPL 5 Exporter.
 *
 * This file provides the high level functions to export CIMPL models to
 * CIMPL 5 format files. The primary usage of this export is to convert
 * imported CIMCORE models into authorable CIMPL files.
 *
 */

// const models = require('shr-models');
const fs = require('fs');
const mkdirp = require('mkdirp');
// const bunyan = require('bunyan');

const { NamespaceFormatter } = require('./formatters/namespaceFormatter');

// var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
// var logger = rootLogger;

// function setLogger(bunyanLogger) {
//   rootLogger = logger = bunyanLogger;
//   require('./formatters/namespaceFormatter').setLogger(logger);
//   require('./formatters/mappingFormatter').setLogger(logger);
//   require('./formatters/valueSetFormatter').setLogger(logger);
//   require('./formatters/namespaceFormatter').setLogger(logger);
// }

/**
 * The CIMPL 5 exporter
 *
 * CIMPL files are constructed and formatted
 * by type ein individual formatter generators
 *
 * @param {Specifications} specs - The expanded specifications containing the cimpl models
 *
 */
class Cimpl5Exporter {
  constructor(specs) {
    this._specs = specs;
    this._namespaces = specs.namespaces.all;
    this._elements = specs.dataElements.all;
    this._valuesets = specs.valueSets.all;
    this._mappings = specs.maps.targets.reduce((out, target) => {
      out[target] = specs.maps.byTarget(target);
      return out;
    }, {});
  }

  get namespaces() { return this._namespaces; }
  get elements() { return this._elements; }
  get valuesets() { return this._valuesets; }
  get mappings() { return this._mappings; }

  /**
   * Primary export function. This triggers the chain of exporters and
   * formatters to output DataElements, ValueSets, and Mappings by
   * namespace.
   *
   * @param {string} path - the output destination for the formatted export.
   */
  exportToPath(path) {
    const validNamespaces = this.namespaces.filter(ns => [''].indexOf(ns.namespace) == -1); //TODO: Verify this exclude primitives..?
    for (const ns of validNamespaces) {
      this.exportNamespaceToPath(ns.namespace, path);
    }
  }

  exportNamespaceToPath(namespace, path) {
    const nsDataElements = this.elements.filter(de => de.identifier.namespace == namespace).map(de=>de.clone()); // this.specs.dataElements.byNamespace(namespace);
    const nsValueSets = this.valuesets.filter(vs => vs.identifier.namespace == namespace).map(vs=>vs.clone()); // this.specs.dataElements.byNamespace(namespace);
    const nsMappings = Object.keys(this.mappings).reduce((out, target) => {
      out[target] = this.mappings[target].filter(m => m.identifier.namespace == namespace).map(m=>m.clone());
      return out;
    }, {}); // despite this current complexity, alternative ways to reach mappings were even more complex

    const currentNamespace = this.namespaces.find(ns => ns.namespace == namespace);
    const namespaceFormatter = new NamespaceFormatter(currentNamespace, this.specs, nsDataElements, nsValueSets, nsMappings);

    if (nsDataElements.length > 0) {
      const formattedDataElementFile = namespaceFormatter.formatDataElementFile();
      this.exportDataElementFileToNamespace(formattedDataElementFile, namespace, path);
    }

    if (nsValueSets.length > 0) {
      const formattedValueSetFile = namespaceFormatter.formatValueSetFile();
      this.exportValueSetFileToNamespace(formattedValueSetFile, namespace, path);
    }

    const totalNSMappingsCount = Object.keys(nsMappings).reduce((count, target) => count + nsMappings[target].length, 0);
    if (totalNSMappingsCount > 0) {
      for (const target in nsMappings) {
        if (nsMappings[target].length > 0) {
          const formattedMappingsFile = namespaceFormatter.formatMappingsFile(target);
          this.exportMappingsFileToNamespace(formattedMappingsFile, namespace, path);
        }
      }
    }
  }

  exportDataElementFileToNamespace(formattedFile, namespace, filePath) {
    let ns = namespace.replace(/\./, '_');

    const hierarchyPath = `${filePath}/${ns}.txt`;
    mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
    fs.writeFileSync(hierarchyPath, formattedFile);
  }

  exportValueSetFileToNamespace(formattedFile, namespace, filePath) {
    let ns = namespace.replace(/\./, '_');

    const hierarchyPath = `${filePath}/${ns}_vs.txt`;
    mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
    fs.writeFileSync(hierarchyPath, formattedFile);
  }

  exportMappingsFileToNamespace(formattedFile, namespace, filePath) {
    let ns = namespace.replace(/\./, '-');
    const hierarchyPath = `${filePath}/${ns}_map.txt`;
    mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
    fs.writeFileSync(hierarchyPath, formattedFile);
  }
}


module.exports = { Cimpl5Exporter };