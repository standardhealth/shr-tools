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
  return namespace.split('.').map(part => upperCaseFirst(part)).join('') + 'ObjectFactory';
}

/**
 * Returns the input string with its first letter uppercased
 * @param {string} input - the string to uppercase the first letter for
 * @returns {string} a new string representing the input string with an uppercased first letter
 */
function upperCaseFirst(input) {
  if (!input || input.length === 0) {
    return input;
  }
  return input[0].toUpperCase() + input.slice(1);
}

/**
 * Custom stringify that wraps strings in single quotes. All other objects fall back to JSON.stringify.
 */
function stringify(obj) {
  if (typeof obj === 'string') {
    if (obj.includes('\'')) {
      obj = obj.replace(/'/g, '\\\''); // replace the single quote with an escaped quote. we have to double-escape here to get the desired output
    }
    return `'${obj}'`;
  }

  return JSON.stringify(obj);
}

module.exports = { sanitizeName, className, factoryName, upperCaseFirst, stringify };
