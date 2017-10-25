const fs = require('fs');
const path = require('path');
const {IdentifiableValue, RefValue, ChoiceValue, TBD, ValueSetConstraint, CodeConstraint, TypeConstraint, BooleanConstraint} = require('shr-models');

function exportToES6(specifications) {
  const exporter = new ES6Exporter(specifications);
  return exporter.export();
}

class ES6Exporter {
  constructor(specifications) {
    this._specs = specifications;
    this._currentNamespace = '';
  }

  export() {
    const es6Defs = {};

    // Copy over Reference
    es6Defs['Reference.js'] = fs.readFileSync(path.join(__dirname, 'includes', 'Reference.js'), "utf8");

    // Generate other classes
    for (const ns of this._specs.namespaces.all) {
      let container = es6Defs;
      for (const part of ns.namespace.split('.')) {
        if (!container[part]) {
          container[part] = {};
        }
        container = container[part];
      }
      for (const def of this._specs.dataElements.byNamespace(ns.namespace)) {
        const es6Def = this.defToES6(def);
        container[`${def.identifier.name}.js`] = es6Def;
      }
    }
    return es6Defs;
  }

  defToES6(def) {
    const output = [];
    if (def.basedOn.length) {
      if (def.basedOn.length > 1) {
        console.error('ERROR: Can create proper inheritance tree w/ multiple based on elements.  Using first element.');
      }

      if (def.basedOn[0] instanceof TBD) {
        output.push(`// Ommitting import and extension of base element: ${def.basedOn[0]}\n\n`)
      } else {
        output.push(`import ${def.basedOn[0].name} from '${relativeImportPath(def.identifier, def.basedOn[0])}';\n\n`)
        output.push(`/** Generated from SHR definition for ${def.identifier.fqn} */\n`);
        output.push(`class ${def.identifier.name} extends ${def.basedOn[0].name} {\n`);
      }
    } else {
      output.push(`/** Generated from SHR definition for ${def.identifier.fqn} */\n`);
      output.push(`class ${def.identifier.name} {\n`);
    }

    if (def.isEntry) {
      output.push('\n');
      output.push(`  /**\n   * Getter for entry information (shr.base.Entry)\n   */\n`);
      output.push(`  get entryInfo() {\n    return this._entryInfo;\n  }\n`);
      output.push('\n');
      output.push(`  /**\n   * Setter for entry information (shr.base.Entry)\n   */\n`);
      output.push(`  set entryInfo(entryVal) {\n    this._entryInfo = entryVal;\n  }\n`);
    }

    if (def.value) {
      if (def.value instanceof TBD) {
        output.push('\n');
        output.push(`  // Ommitting getter/setter for value: ${toCommentName(def.value)}\n`)
      } else if (def.value instanceof ChoiceValue) {
        const options = def.value.options.map(o => `   * - ${toCommentName(o)}\n`).join('');
        output.push('\n');
        output.push(`  /**\n`);
        output.push(`   * Getter for choice value\n`);
        output.push(options);
        output.push(`   */\n`);
        output.push('  get value() {\n    return this._value;\n  }\n');
        output.push('\n');
        output.push(`  /**\n`);
        output.push(`   * Setter for choice value\n`);
        output.push(options);
        output.push(`   */\n`);        output.push('  set value(val) {\n    this._value = val;\n  }\n');
      } else if (def.value.identifier.isValueKeyWord) {
        // Do nothing because this is just constraining the parent value, so we'll inherit it instead
      } else {
        const symbol = toSymbol(def.value.identifier.name);
        output.push('\n');
        output.push(`  /**\n   * Convenience getter for value (accesses this.${symbol})\n   */\n`)
        output.push(`  get value() {\n    return this.${symbol};\n  }\n`);
        output.push('\n');
        output.push(`  /**\n   * Convenience setter for value (sets this.${symbol})\n   */\n`);
        output.push(`  set value(val) {\n    this.${symbol} = val;\n  }\n`);
        output.push('\n');
        output.push(this.fieldToGetterSetter(def.value));
      }
    }

    for (const field of def.fields) {
      output.push('\n');
      output.push(this.fieldToGetterSetter(field));
    }
    output.push(`\n}\n\n`);
    output.push(`export default ${def.identifier.name};\n`);
    return output.join('');
  }

  fieldToGetterSetter(field) {
    const output = [];
    if (field instanceof TBD) {
      output.push(`  // Ommitting getter/setter for field: ${toCommentName(field)}\n`)
    } else if (field instanceof ChoiceValue) {
      // NOTE: This is special-case code to handle choice-fields, which actually should be deprecated!
      const choiceSymbol = toSymbol(field.options.filter(o => !(o instanceof TBD)).map(o => o.identifier.name).join('Or'));
      output.push(`  /**\n`)
      output.push(`   * Getter for ${toCommentName(field)}.\n`)
      output.push(`   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.\n`)
      output.push(`   */\n`)
      output.push(`  get ${choiceSymbol}() {\n    return this._${choiceSymbol};\n  }\n`)
      output.push('\n');
      output.push(`  /**\n`)
      output.push(`   * Setter for ${toCommentName(field)}.\n`)
      output.push(`   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.\n`)
      output.push(`   */\n`)
      output.push(`  set ${choiceSymbol}(choiceVal) {\n    this._${choiceSymbol} = choiceVal;\n  }\n`);
    } else if (field.identifier.isValueKeyWord) {
      // Do nothing because this is just a constraint on value, and we already generated code for value
      return '';
    } else if ((!field.identifier.namespace || field.identifier.namespace == 'shr.base') && field.identifier.name == 'Entry') {
      // Do nothing because this is just a constraint on entry, and we already generated code for entryInfo
      return '';
    } else {
      const symbol = toSymbol(field.identifier.name);
      output.push(`  /**\n   * Getter for ${toCommentName(field)}\n   */\n`)
      output.push(`  get ${symbol}() {\n    return this._${symbol};\n  }\n`)
      output.push('\n');
      output.push(`  /**\n   * Setter for ${toCommentName(field)}\n   */\n`)
      output.push(`  set ${symbol}(${symbol}Val) {\n    this._${symbol} = ${symbol}Val;\n  }\n`);
    }

    return output.join('');
  }
}

function toSymbol(name) {
  return `${name.charAt(0).toLowerCase()}${name.slice(1)}`;
}

function toCommentName(field) {
  const postFix = field.card && field.card.isList ? '[]' : '';
  if (field instanceof ChoiceValue) {
    return `Choice<${field.options.map(o => toCommentName(o)).join(' | ')}>${postFix}`;
  } else if (field instanceof TBD) {
    return `${field.toString()}${postFix}`;
  } else if (field instanceof RefValue) {
    return `Reference<${field.identifier.fqn}>${postFix}`;
  } else {
    return `${field.identifier.fqn}${postFix}`;
  }
}

function relativeImportPath(fromIdentifier, toIdentifier) {
  const fromNS = fromIdentifier.namespace.split('.');
  const toNS = toIdentifier.namespace.split('.');
  while (fromNS.length > 0 && toNS.length > 0 && fromNS[0] === toNS[0]) {
    fromNS.shift();
    toNS.shift();
  }
  const fromPath = fromNS.length ? fromNS.map(x => '..') : ['.'];
  return [...fromPath, ...toNS, toIdentifier.name].join('/');
}

module.exports = {exportToES6};