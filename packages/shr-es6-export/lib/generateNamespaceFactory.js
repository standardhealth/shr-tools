const CodeWriter = require('./CodeWriter');
const { factoryName } = require('./common.js');

/**
 * Generates a namespace-level factory class for instantiating ES6 classes based on element name and entry data.
 * @param {NamespaceSpecification} ns - The namespace to which this factory applies
 * @param {Array<Element>} defs - The element definitions which this factory must be able to instantiate
 * @returns {string} The ES6 factory class definition as a string (to be persisted to a .js file).
 */
function generateNamespaceFactory(ns, defs) {
  const cw = new CodeWriter();
  cw.ln(`// GENERATED CODE`)
    .ln(`// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the classes are generated.`)
    .ln();
  cw.ln(`import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '${relativeImportPath(ns.namespace, 'json-helper')}';`);
  cw.ln(`import ClassRegistry from '${relativeImportPath(ns.namespace, 'ClassRegistry')}';`);

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
            .ln(`const klass = ClassRegistry.get('${ns.namespace}', elementName);`)
            .bl(`if (!klass)`, ()=> {
              cw.ln(`throw new Error(\`Unsupported type in ${factory}: \${type}\`);`);
            })
            .ln(`return klass.fromJSON(json);`);
        });

      cw.ln();

      cw.blComment(() => {
        cw.ln('Convert an instance of a class from its FHIR representation.')
          .ln(`@param {string} shrType - The type of the element (e.g., 'shr.core.CodeableConcept').  This is only used if the type cannot be extracted from the JSON.`)
          .ln('@param {Object} fhir - The element data in JSON format (use `{}` and provide `shrType` for a blank instance)')
          .ln(`@param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself`)
          .ln('@returns {Object} An instance of the requested class populated with the provided data');
      })
        .bl('static createInstanceFromFHIR(shrType, fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false)', () => {
          cw.ln('const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, shrType);')
            .bl(`if (namespace !== '${ns.namespace}')`, () => {
              cw.ln(`throw new Error(\`Unsupported type in ${factory}: \${shrType}\`);`);
            })
            .ln(`const klass = ClassRegistry.get('${ns.namespace}', elementName);`)
            .bl(`if (!klass)`, ()=> {
              cw.ln(`throw new Error(\`Unsupported type in ${factory}: \${shrType}\`);`);
            })
            .ln(`return klass.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);`);
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