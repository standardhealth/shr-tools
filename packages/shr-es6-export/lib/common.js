/**
 * Replaces `-` with `_`.  Future versions may implement additional sanitation.
 * @param {string} name - the name to sanitize
 * @returns {string} a sanitized version of the name
 */
function sanitizeName(name) {
  return name.replace(/[-]/g, '_');
}

/**
 * Creates an ES6 class name from an element name.
 * @param {string} name - the name of the element to derive the class name from
 * @returns {string} a string representing the class name
 */
function className(name) {
  return sanitizeName(name);
}

/**
 * Creates an ES6 factory class name from a namespace.
 * @param {string} namespace - the namespace to derive the factory class name from
 * @returns {string} a string representing the factory class name
 */
function factoryName(namespace) {
  return namespace.split('.').map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`).join('') + 'ObjectFactory';
}

module.exports = { sanitizeName, className, factoryName };