const CodeWriter = require('./CodeWriter');
const { factoryName } = require('./common.js');

/**
 * Generates a top-level factory class for instantiating ES6 classes based on element type and entry data.
 * @param {Array<NamespaceSpecification>} namespaces - The namespaces to leverage in the factory.
 * @returns {string} The ES6 factory class definition as a string (to be persisted to a .js file).
 */
function generateFactory(namespaces) {
  const cw = new CodeWriter();
  cw.ln(`// GENERATED CODE`)
    .ln(`// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the classes are generated.`)
    .ln();
  cw.ln(`import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from './json-helper';`);
  for (const ns of namespaces) {
    const factory = factoryName(ns.namespace);
    cw.ln(`import ${factory} from './${ns.namespace.split('.').join('/')}/${factory}';`);
  }
  cw.ln();

  // Generate the factory
  cw.blComment(`Generated top-level object factory for SHR classes.`)
    .bl('export default class ObjectFactory', () => {
      cw.blComment(() => {
        cw.ln('Create an instance of a class from its JSON representation.')
          .ln('@param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)')
          .ln(`@param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.`)
          .ln('@returns {Object} An instance of the requested class populated with the provided data');
      })
        .bl('static createInstance(json, type)', () => {
          cw.ln('const { namespace } = getNamespaceAndName(json, type);')
            .ln('switch (namespace) {');
          for (const ns of namespaces) {
            const factory = factoryName(ns.namespace);
            cw.ln(`case '${ns.namespace}': return ${factory}.createInstance(json, type);`);
          }
          cw.ln(`default: throw new Error(\`Unsupported namespace: \${namespace}\`);`)
            .ln('}');

        });

      cw.ln();

      cw.blComment(() => {
        cw.ln('Create an instance of a class from its FHIR representation.')
          .ln(`@param {string} shrType - The type of the element (e.g., 'shr.core.Quantity').  This is only used if the type cannot be extracted from the JSON.`)
          .ln('@param {Object} fhir - The element data in FHIR format (use `{}` and provide `type` for a blank instance)')
          .ln(`@param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself`)
          .ln('@returns {Object} An instance of the requested class populated with the provided data');
      })
        .bl('static createInstanceFromFHIR(shrType, fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false)', () => {
          cw.ln('const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, shrType);')
            .ln('switch (namespace) {');
          for (const ns of namespaces) {
            const factory = factoryName(ns.namespace);
            cw.ln(`case '${ns.namespace}': return ${factory}.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);`);
          }
          cw.ln(`case 'primitive': return elementName === 'concept' ? FHIRHelper.createConcept(fhir) : fhir;`);
          cw.ln(`default: throw new Error(\`Unsupported namespace: \${namespace}\`);`)
            .ln('}');

        });

    });

  return cw.toString();
}

module.exports = generateFactory;