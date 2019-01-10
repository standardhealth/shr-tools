const CodeWriter = require('./CodeWriter');
const { className, factoryName } = require('./common.js');

/**
 * Generates a namespace-level factory class for instantiating ES6 classes based on element name and entry data.
 * @param {NamespaceSpecification} ns - The namespace to which this factory applies
 * @param {Array<Element>} defs - The element definitions which this factory must be able to instantiate
 * @returns {string} The ES6 factory class definition as a string (to be persisted to a .js file).
 */
function generateNamespaceFactory(ns, defs) {
  const cw = new CodeWriter();
  cw.ln(`import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '${relativeImportPath(ns.namespace, 'json-helper')}';`);
  for (const def of defs) {
    const name = className(def.identifier.name);
    cw.ln(`import ${name} from './${name}';`);
  }
  const factory = factoryName(ns.namespace);
  cw.ln()
    .blComment(`Generated object factory for the ${ns.namespace} namespace.`)
    .bl(`export default class ${factory}`, () => {
      cw.blComment(() => {
        cw.ln('Create an instance of a class from its JSON representation.')
          .ln('@param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)')
          .ln(`@param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.`)
          .ln('@returns {Object} An instance of the requested class populated with the provided data');
      })
        .bl('static createInstance(json, type)', () => {
          cw.ln('const { namespace, elementName } = getNamespaceAndName(json, type);')
            .bl(`if (namespace !== '${ns.namespace}')`, () => {
              cw.ln(`throw new Error(\`Unsupported type in ${factory}: \${type}\`);`);
            })
            .ln('switch (elementName) {');
          for (const def of defs) {
            const elName = className(def.identifier.name);
            cw.ln(`case '${elName}': return ${elName}.fromJSON(json);`);
          }
          cw.ln(`default: throw new Error(\`Unsupported type in ${factory}: \${type}\`);`)
            .ln('}');
        });

      cw.ln();

      cw.blComment(() => {
        cw.ln('Convert an instance of a class from its FHIR representation.')
          .ln('@param {Object} fhir - The element data in JSON format (use `{}` and provide `type` for a blank instance)')
          .ln(`@param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.`)
          .ln('@returns {Object} An instance of the requested class populated with the provided data');
      })
        .bl('static createInstanceFromFHIR(fhir, type, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false)', () => {
          cw.ln('const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, type);')
            .bl(`if (namespace !== '${ns.namespace}')`, () => {
              cw.ln(`throw new Error(\`Unsupported type in ${factory}: \${type}\`);`);
            })
            .ln('switch (elementName) {');
          for (const def of defs) {
            const elName = className(def.identifier.name);
            cw.ln(`case '${elName}': return ${elName}.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);`);
          }
          cw.ln(`default: throw new Error(\`Unsupported type in ${factory}: \${type}\`);`)
            .ln('}');
        });
    });
  return cw.toString();
}

/**
 * Determines the relative path from a generated namespace factory to an included file.
 * @param {string} namespace - The namespace representing the ES6 factory class that is doing the import
 * @param {string} to - The string representing the file being imported
 * @returns {string} A relative path to where the imported file can be expected to be found
 * @private
 */
function relativeImportPath(namespace, to) {
  const fromNS = namespace.split('.');
  return [...fromNS.map(n => '..'), to].join('/');
}


module.exports = generateNamespaceFactory;