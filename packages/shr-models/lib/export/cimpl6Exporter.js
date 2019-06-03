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
const path = require('path');

const { FileFormatterCimpl6 } = require('./formatters/fileFormatterCimpl6');

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
  exportToPath(outputPath) {
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
        this.exportDataElementFilesToPath(ns.namespace, outputPath, substituteHash);
      }
    }
  }

  exportDataElementFilesToPath(namespace, outputPath, substituteHash) {
    const nsValueSets = this.valuesets.filter(vs => vs.identifier.namespace == namespace).map(vs=>vs.clone()); // this.specs.dataElements.byNamespace(namespace);
    const nsMappings = Object.keys(this.mappings).reduce((out, target) => {
      out[target] = this.mappings[target].filter(m => m.identifier.namespace == namespace).map(m=>m.clone());
      return out;
    }, {});
    const fileFormatter = new FileFormatterCimpl6(this.specs, nsValueSets, nsMappings);
    const formattedDataElementFileHash = fileFormatter.formatDataElementFile(substituteHash);
    for (let k in formattedDataElementFileHash) {
      this.exportDataElementFile(formattedDataElementFileHash[k], k.split('.')[0], outputPath);
    }
  }

  exportDataElementFile(formattedFile, namespace, filePath) {
    let ns = namespace.replace(/\./, '_');
    const hierarchyPath = path.join(filePath, `${ns}.txt`);
    mkdirp.sync(path.dirname(hierarchyPath));
    fs.writeFileSync(hierarchyPath, formattedFile);
  }
}


module.exports = { Cimpl6Exporter };
