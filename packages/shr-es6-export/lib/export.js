const fs = require('fs');
const path = require('path');
const generateClass = require('./generateClass');
const generateNamespaceFactory = require('./generateNamespaceFactory');
const generateFactory = require('./generateFactory');
const { className, factoryName } = require('./common.js');

/**
 * Exports SHR namespaces and elements to a set of ES6 classes for using within SHR-aware applications.
 * @param {Specifications} specifications - The SHR specifications to export to ES6 code
 * @returns {Object} An object representing the file hierarchy on disk, with file contents as the leaves
 */
function exportToES6(specifications) {
  const exporter = new ES6Exporter(specifications);
  return exporter.export();
}

/**
 * A class to manage the basic export of SHR definitions to ES6 classes.
 */
class ES6Exporter {
  /**
   * Constructs an ES6Exporter with the given SHR specification definitions
   * @param {Specifications} specifications - The SHR specifications to export to ES6 code
   */
  constructor(specifications) {
    this._specs = specifications;
    this._currentNamespace = '';
  }

  /**
   * Exports the loaded specifications to ES6 classes
   * @returns {Object} An object representing the file hierarchy on disk, with file contents as the leaves
   */
  export() {
    const es6Defs = {};

    // Copy over Reference
    es6Defs['Reference.js'] = fs.readFileSync(path.join(__dirname, 'includes', 'Reference.js'), 'utf8');
    es6Defs['json-helper.js'] = fs.readFileSync(path.join(__dirname, 'includes', 'json-helper.js'), 'utf8');
    es6Defs['init.js'] = fs.readFileSync(path.join(__dirname, 'includes', 'init.js'), 'utf8');


    // Generate the namespace factories and specific ES6 classes
    const namespaces = this._specs.namespaces.all;
    for (const ns of namespaces) {
      // Nest classes into subpaths by namespace
      let container = es6Defs;
      for (const part of ns.namespace.split('.')) {
        if (!container[part]) {
          container[part] = {};
        }
        container = container[part];
      }
      const defs = this._specs.dataElements.byNamespace(ns.namespace);
      container[`${factoryName(ns.namespace)}.js`] = generateNamespaceFactory(ns, defs);
      for (const def of defs) {
        container[`${className(def.identifier.name)}.js`] = generateClass(def);
      }
    }

    // Generate the top-level factory
    es6Defs['ObjectFactory.js'] = generateFactory(namespaces);

    return es6Defs;
  }
}

module.exports = {exportToES6};