function cardToString(card) {
  let min = 0;
  let max = '*';
  if (card) {
    if ('min' in card)
      min = card.min;
    if ('max' in card)
      max = card.max
  }
  return `${min}..${max}`
}

class Constraints {
  constructor(field, elements, inherited) {
    this.field = field;
    this.inherited = inherited;
    this.constraints = [];
    this.subtypes = [];
    this.elements = elements;
    this.parse();
  }

  newConstraint(name, value, path, lastMod, hrefValue, binding) {
    let constraint = {
      name: name,
      source: this.field.name,
      value: value,
      href: hrefValue,
      binding: binding,
      path: path
    }
    const sElement = this.elements[this.field.fqn];
    if (sElement) {
      const sourceHref = `../${sElement.namespacePath}/${sElement.name}.html`;
      constraint.sourceHref = sourceHref;
    }
    if (lastMod !== undefined) {
      const lastModElement = this.elements[lastMod];
      const name = lastModElement.name;
      constraint.override = name;
      const href = `../${lastModElement.namespacePath}/${name}.html`
      constraint.overrideHref = href;
    }
    return constraint;
  }

  initializeConstraints() {
    const isRef = this.field.valueType === 'RefValue';
    const dValue = isRef ? `ref(${this.field.name})` : this.field.name;
    const path = this.field.name;
    
    let dTypeConstraint = this.newConstraint('DataType', dValue, path);
    if (this.field.path)
      dTypeConstraint.href = `../${this.field.path}/${this.field.name}.html`;
    this.constraints.push(dTypeConstraint);

    const cValue = cardToString(this.field.card);
    const cardConstraint = this.newConstraint('Cardinality', cValue, path); 
    this.constraints.push(cardConstraint);
  }
  
  includesType(constraint, subpath) {
    constraint.forEach((item) => {
      const card = cardToString(item.card);
      const name = 'Includes Type';
      const value = `${card} ${item.fqn}`;
      const lastMod = item.lastModifiedBy;
      const iConstraint = this.newConstraint(name, value, subpath, lastMod);
      this.constraints.push(iConstraint);
    });
  }

  includesCode(constraint, subpath) {
    constraint.forEach((item) => {
      const system = item.system ? item.system : '';
      const name = 'Includes Code';
      const value = `${system}#${item.code}`;
      const lastMod = item.lastModifiedBy;
      const iConstraint = this.newConstraint(name, value, subpath, lastMod);
      this.constraints.push(iConstraint);
    });
  }

  valueSet(constraint, subpath) {
    const name = 'Value Set';
    const value = constraint.uri;
    const lastMod = constraint.lastModifiedBy;
    const href = constraint.uri;
    const binding = `(${constraint.bindingStrength})`;
    const vConstraint = this.newConstraint(name, value, subpath, lastMod, href, binding);
    this.constraints.push(vConstraint);
  }

  subpaths(constraint, subpath) {
    Object.keys(constraint).forEach((element) => {
      let newPath = subpath;
      if (element in this.elements) {
        const eName = this.elements[element].name;
        newPath = subpath ? `${subpath}.${eName}` : eName;
      }
      Object.keys(constraint[element]).forEach((subCType) => {
        const subConstraint = constraint[element][subCType];
        this.switchConstraintType(subConstraint, subCType, newPath);
      });
    });
  }

  typeConstraint(constraint, subpath) {
    const element = this.elements[constraint.fqn];
    const constraintName = element.name;
    const href = `../${element.namespacePath}/${element.name}.html`;
    if (subpath === this.field.name && !this.inherited) {
      this.constraints[0].value = constraintName;
      this.constraints[0].href = href;
    } else {
      const name = 'DataType';
      const value = constraintName;
      const lastMod = constraint.lastModifiedBy;
      const tConstraint = this.newConstraint(name, value, subpath, lastMod, href);
      this.constraints.push(tConstraint);
    }
  }

  fixedValue(constraint, subpath) {
    let value = "";
    if (constraint.type === 'code') {
      value = `${constraint.value.system}#${constraint.value.code}`;
    } else if (constraint.type === 'boolean') {
      value = constraint.value.toString();
    }

    const name = 'Fixed Value';
    const lastMod = constraint.lastModifiedBy;
    const fConstraint = this.newConstraint(name, value, subpath, lastMod);
    this.constraints.push(fConstraint);
  }

  cardConstraint(constraint, subpath) {
    const name = 'Cardinality';
    const value = cardToString(constraint);
    const lastMod = constraint.lastModifiedBy;
    const cConstraint = this.newConstraint(name, value, subpath, lastMod);
    this.constraints.push(cConstraint);
  }

  switchConstraintType(constraint, cType, subpath) {
    switch (cType) {
      case 'includesType':
        this.includesType(constraint, subpath);
        break;
      case 'includesCode':
        this.includesCode(constraint, subpath);
        break;
      case 'valueSet':
        this.valueSet(constraint, subpath);
        break;
      case 'subpaths':
        this.subpaths(constraint, subpath);
        break;
      case 'type':
        this.typeConstraint(constraint, subpath);
        break;
      case 'fixedValue':
        this.fixedValue(constraint, subpath);
        break;
      case 'card':
        this.cardConstraint(constraint, subpath);
        break;
      default:
        console.log(cType);
    }
  }

  parse() {
    if (!this.inherited)
      this.initializeConstraints();
    if ('constraints' in this.field) {
      Object.keys(this.field.constraints).forEach((cType) => {
        const constraint = this.field.constraints[cType];
        this.switchConstraintType(constraint, cType, this.field.name);
      });
    }
  }
}

module.exports = Constraints;