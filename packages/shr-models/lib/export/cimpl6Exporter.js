/**
 * @file
 * CIMPL 6 Exporter.
 *
 * This file provides the high level functions to export CIMPL models to
 * CIMPL 6 format files. The primary usage of this export is to convert
 * imported CIMCORE models into authorable CIMPL files.
 *
 */

const fs = require('fs');
const mkdirp = require('mkdirp');

const { NamespaceFormatterCimpl6 } = require('./formatters/namespaceFormatterCimpl6');

/**
 * The CIMPL 6 exporter
 *
 * CIMPL files are constructed and formatted
 * by individual formatter generators
 *
 * @param {Specifications} specs - The expanded specifications containing the cimpl models
 *
 */
class Cimpl6Exporter {
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

  get specs() { return this._specs; }
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
    let substituteHash = {};
    const validNamespaces = this.namespaces.filter(ns => ns.namespace.trim().length > 0);
    /* For loop which will go through 2 iterations. The first is to fill out the
      substituteHash object and the second is so that the object can be used to make
      the necessary substitutions to the exported CIMPL 6.0 files generated.
    */
    for(let a = 0; a < 2; a++) {
      for (const ns of validNamespaces) {
        if(!substituteHash.hasOwnProperty(ns.namespace)) {
          substituteHash[ns.namespace] = {};
        }
        this.exportNamespaceToPath(ns.namespace, path, substituteHash);
      }
    }
  }

  exportNamespaceToPath(namespace, path, substituteHash) {
    const nsDataElements = this.elements.filter(de => de.identifier.namespace == namespace).map(de=>de.clone()); // this.specs.dataElements.byNamespace(namespace);
    const nsValueSets = this.valuesets.filter(vs => vs.identifier.namespace == namespace).map(vs=>vs.clone()); // this.specs.dataElements.byNamespace(namespace);
    const nsMappings = Object.keys(this.mappings).reduce((out, target) => {
      out[target] = this.mappings[target].filter(m => m.identifier.namespace == namespace).map(m=>m.clone());
      return out;
    }, {});

    const currentNamespace = this.namespaces.find(ns => ns.namespace == namespace);
    const namespaceFormatter = new NamespaceFormatterCimpl6(currentNamespace, this.specs, nsDataElements, nsValueSets, nsMappings);

    if (nsDataElements.length > 0) {
      const formattedDataElementFile = namespaceFormatter.formatDataElementFile(substituteHash);
      this.exportDataElementFileToNamespace(formattedDataElementFile, namespace, path);
    }

    /*if (nsValueSets.length > 0) {
      const formattedValueSetFile = namespaceFormatter.formatValueSetFile();
      this.exportValueSetFileToNamespace(formattedValueSetFile, namespace, path);
    }*/

    /*for (const target in nsMappings) {
      if (nsMappings[target].length > 0) {
        const formattedMappingsFile = namespaceFormatter.formatMappingsFile(target);
        this.exportMappingsFileToNamespace(formattedMappingsFile, namespace, path);
      }
    }*/
  }

  exportDataElementFileToNamespace(formattedFile, namespace, filePath) {
    let ns = namespace.replace(/\./, '_');

    const hierarchyPath = `${filePath}/${ns}.txt`;
    mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
    fs.writeFileSync(hierarchyPath, formattedFile);
  }

  /*exportValueSetFileToNamespace(formattedFile, namespace, filePath) {
    let ns = namespace.replace(/\./, '_');

    const hierarchyPath = `${filePath}/${ns}_vs.txt`;
    mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
    fs.writeFileSync(hierarchyPath, formattedFile);
  }*/

  /*exportMappingsFileToNamespace(formattedFile, namespace, filePath) {
    let ns = namespace.replace(/\./, '-');
    const hierarchyPath = `${filePath}/${ns}_map.txt`;
    mkdirp.sync(hierarchyPath.substring(0, hierarchyPath.lastIndexOf('/')));
    fs.writeFileSync(hierarchyPath, formattedFile);
  }*/
}


module.exports = { Cimpl6Exporter };
