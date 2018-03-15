const reserved = require('reserved-words');
const {Value, IdentifiableValue, RefValue, ChoiceValue, TBD, INHERITED} = require('shr-models');
const CodeWriter = require('./CodeWriter');
const { sanitizeName, className } = require('./common.js');

/**
 * Generates an ES6 class for the provided element definition.
 * @param {DataElement} def - The definition of the SHR element to generate a class for.
 * @returns {string} The ES6 class definition as a string (to be persisted to a .js file).
 */
function generateClass(def) {
  const cw = new CodeWriter();
  cw.ln(`import { setPropertiesFromJSON } from '${relativeImportPath(def.identifier, 'json-helper')}';`).ln();
  const clazzName = className(def.identifier.name);
  let superClass;
  if (def.basedOn.length) {
    if (def.basedOn.length > 1) {
      console.error('ERROR: Can create proper inheritance tree w/ multiple based on elements.  Using first element.');
    }

    if (def.basedOn[0] instanceof TBD) {
      cw.ln(`// Ommitting import and extension of base element: ${def.basedOn[0]}`).ln();
    } else {
      superClass = className(def.basedOn[0].name);
      cw.ln(`import ${superClass} from '${relativeImportPath(def.identifier, def.basedOn[0])}';`).ln();
    }
  }
  cw.blComment(() => {
    cw.ln(`Generated class for ${def.identifier.fqn}.`);
    if (superClass) {
      cw.ln(`@extends ${superClass}`);
    }
  });
  cw.bl(`class ${clazzName}${superClass ? ` extends ${superClass}` : ''}`, () => {
    generateClassBody(def, cw);
  });
  cw.ln(`export default ${clazzName};`);
  return cw.toString();
}

/**
 * Generates the body of the ES6 class.
 * @param {DataElement} def - The definition of the SHR element to generate a class body for
 * @param {CodeWriter} cw - The CodeWriter instance to use during generation
 * @private
 */
function generateClassBody(def, cw) {
  cw.ln();

  const clazzName = className(def.identifier.name);
  if (def.isEntry) {
    writeGetterAndSetter(cw, clazzName, 'shr.base.Entry', 'entryInfo', 'entry information', '_entryInfo', 'Entry');
  }

  // Don't repeat properties that were purely inherited (without overriding).  Although overrides actually don't
  // affect the definitions now, they may in the future, so we'll leave them in.
  if (def.value && def.value.inheritance !== INHERITED) {
    if (def.value instanceof ChoiceValue) {
      writeGetterAndSetter(cw, clazzName, def.value, 'value');
    } else if (def.value instanceof IdentifiableValue) {
      // If it's the "Value" keyword, we can just rely on an inherited getter/setter
      if (!def.value.identifier.isValueKeyWord) {
        const symbol = toSymbol(def.value.identifier.name);
        writeGetterAndSetter(cw, clazzName, def.value, 'value', `value (aliases ${symbol})`, `_${symbol}`);
        writeGetterAndSetter(cw, clazzName, def.value);
      }
    } else {
      // This should only happen for TBDs
      writeGetterAndSetter(cw, clazzName, def.value);
    }
  }

  for (const field of def.fields) {
    // Don't repeat properties that were purely inherited (without overriding).  Although overrides actually don't
    // affect the definitions now, they may in the future, so we'll leave them in
    if (field.inheritance !== INHERITED) {
      writeGetterAndSetter(cw, clazzName, field);
    }
  }

  cw.blComment( () => {
    const clazzName = className(def.identifier.name);
    cw.ln(`Deserializes JSON data to an instance of the ${clazzName} class.`)
      .ln(`The JSON must be valid against the ${clazzName} JSON schema, although this is not validated by the function.`)
      .ln(`@param {object} json - the JSON data to deserialize`)
      .ln(`@returns {${clazzName}} An instance of ${clazzName} populated with the JSON data`);
  })
    .bl('static fromJSON(json={})', () => writeFromJson(def, cw));
  
  cw.blComment( () => {
    const clazzName = className(def.identifier.name);
    cw.ln(`Serializes an instance of the ${clazzName} class to a JSON object.`)
      .ln(`The JSON is expected to be valid against the ${clazzName} JSON schema, but no validation checks are performed.`)
      .ln(`@returns {object} a JSON object populated with the data from the element`);
  })
    .bl(`toJSON()`, () => writeToJson(def, cw));
}

/**
 * Generates a getter and a setter for a value or field.
 * @param {CodeWriter} cw - The CodeWriter instance to use during generation
 * @param {string} clazzName - The name of the class.
 * @param {Value|string} formalDefOrName - The `Value` or a string representing the thing to generate get/set for
 * @param {string=} publicSymbol - The symbol which other classes will use to access the property.  If undefined, it will
 *    be generated using sensible defaults.
 * @param {string=} descriptiveName - The descriptive name, used in the generated comments for the get/set functions.  If
 *    undefined, it will be generated using sensible defaults.
 * @param {string=} privateSymbol - The private property name where the data will be stored in the class.  If undefined,
 *    it will be generated using sensible defaults.
 * @param {string=} typeName - The type name used in the generated JSDoc to indicate the type of the thing being got or
 *    set.  If undefined, it will be generated using sensible defaults.
 * @private
 */
function writeGetterAndSetter(cw, clazzName, formalDefOrName, publicSymbol, descriptiveName, privateSymbol, typeName) {
  if (formalDefOrName instanceof TBD) {
    cw.ln(`// Ommitting getter/setter for TBD: ${formalDefOrName.text}`).ln();
    return;
  }

  let formalName;
  let required = (formalDefOrName instanceof Value) ? formalDefOrName.effectiveCard.min === 1 : false;
  if (formalDefOrName instanceof ChoiceValue) {
    // Choices get a special treatment
    const options = formalDefOrName.options.filter(o => !(o instanceof TBD));
    if (options.length === 0) {
      cw.ln('// Ommitting getter/setter for choice with only TBD options').ln();
      return;
    }
    formalName = 'choice value; one of: ' + options.map(o => {
      return `${o.effectiveIdentifier.fqn}${o instanceof RefValue ? ' reference' : ''}`;
    }).join(', ');
    if (typeof publicSymbol === 'undefined') {
      publicSymbol = toSymbol(options.map(o => o.identifier.name).join('Or'));
    }
    if (typeof typeName === 'undefined') {
      // Create the set of types, squashing all references into one Reference type
      const typeMap = {};
      for (const o of options) {
        if (o instanceof RefValue) {
          typeMap['Reference'] = true;
        } else {
          typeMap[o.effectiveIdentifier.name] = true;
        }
      }
      const types = Object.keys(typeMap);
      typeName = types.length > 1 ? `(${types.join('|')})` : types[0];
    }
    if (typeof descriptiveName === 'undefined') {
      descriptiveName = formalName;
    }
  } else if (formalDefOrName instanceof RefValue){
    // References get a special treatment too
    formalName = `${formalDefOrName.effectiveIdentifier.fqn} reference`;
    if (typeof typeName === 'undefined') {
      typeName = 'Reference';
    }
    if (typeof publicSymbol === 'undefined') {
      publicSymbol = toSymbol(formalDefOrName.identifier.name);
    }
    if (typeof descriptiveName === 'undefined') {
      descriptiveName = formalName;
    }
  } else {
    // IdentifiableValue or string
    let originalName;
    if (formalDefOrName instanceof IdentifiableValue) {
      originalName = formalDefOrName.identifier.fqn;
      formalName = formalDefOrName.effectiveIdentifier.fqn;
    } else {
      originalName = formalDefOrName;
      formalName = formalDefOrName;
    }
    if (typeof typeName === 'undefined') {
      typeName = formalName.split('.').pop();
    }
    if (typeof publicSymbol === 'undefined') {
      publicSymbol = toSymbol(originalName.split('.').pop());
    }
    if (typeof descriptiveName === 'undefined') {
      descriptiveName = typeName;
    }
  }
  if (typeof privateSymbol === 'undefined') {
    privateSymbol = `_${publicSymbol}`;
  }
  let arrayDescriptionPostfix = '';
  if (formalDefOrName instanceof Value && formalDefOrName.card && formalDefOrName.card.isList) {
    typeName = `Array<${typeName}>`;
    arrayDescriptionPostfix = ' array';
  }
  const capitalizedPublicSymbol = `${publicSymbol.charAt(0).toUpperCase()}${publicSymbol.slice(1)}`;
  // The variable name can't be a reserved word, so check it and modify if necessary
  const varName = reserved.check(publicSymbol, 'es2015', true) ? `${publicSymbol}Var` : publicSymbol;
  cw.blComment(() => {
    cw.ln(`Get the ${descriptiveName}${arrayDescriptionPostfix}.`)
      .ln(`@returns {${typeName}} The ${formalName}${arrayDescriptionPostfix}`);
  })
    .bl(`get ${publicSymbol}()`, `return this.${privateSymbol};`)
    .ln()
    .blComment(() => {
      cw.ln(`Set the ${descriptiveName}${arrayDescriptionPostfix}.`);
      if (required) {
        cw.ln('This field/value is required.');
      }
      cw.ln(`@param {${typeName}} ${varName} - The ${formalName}${arrayDescriptionPostfix}`);
    })
    .bl(`set ${publicSymbol}(${varName})`, `this.${privateSymbol} = ${varName};`)
    .ln()
    .blComment(() => {
      cw.ln(`Set the ${descriptiveName}${arrayDescriptionPostfix} and return 'this' for chaining.`);
      if (required) {
        cw.ln('This field/value is required.');
      }
      cw.ln(`@param {${typeName}} ${varName} - The ${formalName}${arrayDescriptionPostfix}`)
        .ln(`@returns {${clazzName}} this.`);
    })
    .bl(`with${capitalizedPublicSymbol}(${varName})`, `this.${publicSymbol} = ${varName}; return this;`)
    .ln();
}

/**
 * Generates a JSON deserializer for the class.
 * @param {DataElement} def - The definition of the SHR element to generate a deserializer for
 * @param {CodeWriter} cw - The CodeWriter instance to use during generation
 * @private
 */
function writeFromJson(def, cw) {
  cw.ln(`const inst = new ${className(def.identifier.name)}();`);
  cw.ln('setPropertiesFromJSON(inst, json);');
  cw.ln('return inst;');
}

/**
 * Generates a JSON serializer for the element
 * @param {DataElement} def - The definition of the SHR element to generate a serializer for
 * @param {CodeWriter} cw - The CodeWriter instance to use during generation
 * @private
 */
function writeToJson(def, cw) {
  // If the element is an Entry, put those fields on the JSON object first
  const url = `http://standardhealthrecord.org/spec/${def.identifier.namespace.replace('.', '/')}/${className(def.identifier.name)}`;
  if (def.isEntry) {
    cw.ln(`const inst = this._entryInfo.toJSON();`);
    cw.ln(`inst['shr.base.EntryType'] = { 'Value' : '${url}' };`);
  } else if (def.identifier.name !== 'EntryType') {
    cw.ln(`const inst = { 'shr.base.EntryType': { 'Value' : '${url}' } };`);
  } else {
    cw.ln(`const inst = {};`);
  }

  if (def.value !== undefined) {
    if (def.value instanceof ChoiceValue) {
      // Choices get a special treatment
      cw.bl(`if (this.value != null)`, () => {
        if (def.value.card.isList) {
          cw.ln(`inst['Value'] = this.value.map(f => typeof f.toJSON === 'function' ? f.toJSON() : f);`);
        } else {
          cw.ln(`inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;`);
        }
      });
    } else if (def.value instanceof IdentifiableValue && def.value.identifier.isPrimitive) {
      cw.bl(`if (this.value != null)`, () => {
        cw.ln(`inst['Value'] = this.value;`);
      });
    } else {
      generateAssignmentIfList(def.value.card, 'Value', 'value', cw);
    }
  }

  for (const field of def.fields) {
    if (!(field instanceof TBD)) {
      generateAssignmentIfList(field.card, field.identifier.fqn, toSymbol(field.identifier.name), cw);
    }
  }

  cw.ln(`return inst;`);
}

/**
 * Writes out an object assignment string based on the cardinality
 * @param {object} card - the Cardinality object for the value being written
 * @param {string} jsonString - the key to use to write the value to JSON
 * @param {string} valueString - the string to get the required value out of 'this'
 * @param {CodeWriter} cw - The CodeWriter that's writing the class
 */
function generateAssignmentIfList(card, jsonString, valueString, cw) {
  cw.bl(`if (this.${valueString} != null)`, () => {
    if (card.isList) {
      cw.ln(`inst['${jsonString}'] = this.${valueString}.map(f => f.toJSON());`);
    } else {
      cw.ln(`inst['${jsonString}'] = typeof this.${valueString}.toJSON === 'function' ? this.${valueString}.toJSON() : this.${valueString};`);
    }
  });
}

/**
 * Creates a symbol given a name.  Useful when a specific `publicSymbol` is not provided.
 * @param {string} name - The name to create the symbol for.
 * @private
 */
function toSymbol(name) {
  const _name = sanitizeName(name);
  return `${_name.charAt(0).toLowerCase()}${_name.slice(1)}`;
}

/**
 * Determines the relative path from one generated class to another generated class or included file.  Needed when
 * generating imports.
 * @param {Identifier} fromIdentifier - The element identifier representing the ES6 class that is doing the import
 * @param {Identifier|string} to - The element identifier representing the ES6 class being imported or the string
 *   representing the file being imported
 * @returns {string} A relative path to where the imported class or file can be expected to be found
 * @private
 */
function relativeImportPath(fromIdentifier, to) {
  const fromNS = fromIdentifier.namespace.split('.');
  if (typeof to === 'string') {
    return [...fromNS.map(n => '..'), to].join('/');
  } else {
    const toNS = to.namespace.split('.');
    while (fromNS.length > 0 && toNS.length > 0 && fromNS[0] === toNS[0]) {
      fromNS.shift();
      toNS.shift();
    }
    const fromPath = fromNS.length ? fromNS.map(x => '..') : ['.'];
    return [...fromPath, ...toNS, className(to.name)].join('/');
  }
}

module.exports = generateClass;