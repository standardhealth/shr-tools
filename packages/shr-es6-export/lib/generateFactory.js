const CodeWriter = require('./CodeWriter');
const { factoryName } = require('./common.js');

/**
 * Generates a top-level factory class for instantiating ES6 classes based on element type and entry data.
 * @param {Array<NamespaceSpecification>} namespaces - The namespaces to leverage in the factory.
 * @return {string} The ES6 factory class definition as a string (to be persisted to a .js file).
 */
function generateFactory(namespaces) {
  const cw = new CodeWriter();
  for (const ns of namespaces) {
    const factory = factoryName(ns.namespace);
    cw.ln(`import ${factory} from './${ns.namespace.split('.').join('/')}/${factory}';`);
  }
  cw.ln();

  // Generate the factory
  cw.blComment(`Generated top-level object factory for SHR classes.`)
    .bl('export default class ObjectFactory', () => {
      cw.blComment(() => {
        cw.ln('Create an instance of a class by its entry type and entry data.')
          .ln(`@param {string} entryType - The type of the element (e.g., 'http://standardhealthrecord.org/demographics/PersonOfRecord')`)
          .ln('@param {Object} entry - The entry data in JSON format')
          .ln('@return {Object} An instance of the requested class populated with the provided data (NOTE: data deserialization not yet implemented)');
      })
      .bl('static createInstance(entryType, entry)', () => {
        cw.ln('const { namespace, elementName } = entryTypeToClassSpec(entryType);')
          .bl('switch (namespace)', () => {
            for (const ns of namespaces) {
              const factory = factoryName(ns.namespace);
              cw.ln(`case '${ns.namespace}': return ${factory}.createInstance(elementName, entry);`);
            }
          })
          .ln(`throw new Error(\`Unsupported namespace: \${namespace}\`);`);
      });
    });

  // Generate helper functions for translating type to namespace and elementName
  const TYPE_REGEX = /^http:\/\/standardhealthrecord\.org\/(.*)\/([^\/]+)$/;
  cw.ln()
    .ln(`const TYPE_REGEX = ${TYPE_REGEX.toString()};`)
    .ln()
    .blComment( () => {
      cw.ln('Parses the entry type to return an object with the namespace and elementName.')
        .ln('@return {{namespace: string, elementName: string}} An object representing the element')
        .ln('@private');
    })
    .bl('function entryTypeToClassSpec(entryType)', () => {
      cw.ln('const found = entryType.match(TYPE_REGEX);')
        .bl('if (found)', () => {
          cw.ln('const namespace = `shr.${found[1].split(\'/\').join(\'.\')}`;')
            .ln('const elementName = found[2]')
            .ln('return { namespace, elementName }');
        })
        .ln('throw new Error(`Unexpected path in entryType: ${entryType}`);');
    })

  return cw.toString();
}

module.exports = generateFactory;