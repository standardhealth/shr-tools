const bunyan = require('bunyan');
var rootLogger = bunyan.createLogger({ name: 'shr-json-javadoc' });
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

// Converts a card object into the formatted string representing cardinality
function cardToString(card) {
  let min = 0;
  let max = '*';
  if (card) {
    if ('min' in card)
      min = card.min;
    if ('max' in card)
      max = card.max;
  }
  return `${min}..${max}`;
}

/*
 *  Constraints class parses the constraints for a given field or value
 *  Stores parsed constraints in this.constraints
 *  Takes the field/value, element map, and whether the field is inherited
 */
class Constraints {
  constructor(element, field, elements, config, inherited=false, configureForIG=false) {
    this.element = element;
    this.field = field;
    this.config = config;
    this.inherited = inherited;
    this.configureForIG = configureForIG;
    this.constraints = [];
    this.subtypes = [];
    this.elements = elements;
    this.parse();
  }

  // Builds a new constraint row based on passed in parameter
  newConstraint(name, value, path, lastMod, href, back, front) {
    let targetTop = false;
    if (href !== undefined) {
      targetTop = href.includes('http');
      //Special case for FHIR IG model doc instance
      if (this.configureForIG && href.startsWith(`${this.config.fhirURL}/ValueSet/`)) {
        href = href.replace(`${this.config.fhirURL}/ValueSet/`, '../../ValueSet-').concat('.html');
      }
    }
    let constraint = {
      name: name,
      value: value,
      href: href,
      targetTop: targetTop,
      back: back,
      front: front,
      path: path
    };

    // If source is an element, add hyperlink
    if (this.inherited) {
      const element = this.elements[this.field.inheritance.from];
      const sourceHref = `../${element.namespacePath}/${element.name}.html`;
      constraint.source = element.name;
      constraint.sourceHref = sourceHref;
    }

    // If field was inherited, check when it was last modified
    // Add hyperlink for last modified element
    if (lastMod !== undefined) {
      const lastModElement = this.elements[lastMod];
      const name = lastModElement.name;
      constraint.override = name;
      const href = `../${lastModElement.namespacePath}/${name}.html`;
      constraint.overrideHref = href;
    }
    return constraint;
  }

  // Creates datatype and cardinality constraint for non inherrited fields
  // Done separately because these occur outside of constraints object
  initializeConstraints() {
    const dValue = this.field.name;
    const path = this.field.name;

    // Datatype constraint
    let dTypeConstraint = this.newConstraint('DataType', dValue, path);
    if (this.field.path)
      dTypeConstraint.href = `../${this.field.path}/${this.field.name}.html`;
    this.constraints.push(dTypeConstraint);

    // Cardinality constraint
    const cValue = cardToString(this.field.card);
    const cardConstraint = this.newConstraint('Cardinality', cValue, path);
    this.constraints.push(cardConstraint);
  }

  // Handles the includes type constraint
  includesType(constraint, subpath) {
    constraint.forEach((item) => {
      const element = this.elements[item.fqn];
      const card = cardToString(item.card);
      const name = 'Includes Type';
      const value = element.name;
      const href = `../${element.namespacePath}/${element.name}.html`;
      const lastMod = item.lastModifiedBy;
      const iConstraint = this.newConstraint(name, value, subpath, lastMod, href, '', card);
      this.constraints.push(iConstraint);
    });
  }

  // Handles the includes code constraint
  includesCode(constraint, subpath) {
    constraint.forEach((item) => {
      const system = item.system ? item.system : '';
      const name = 'Includes Code';
      const value = `${system} (code: ${item.code})`;
      const lastMod = item.lastModifiedBy;
      const iConstraint = this.newConstraint(name, value, subpath, lastMod);
      this.constraints.push(iConstraint);
    });
  }

  // Handles the value set constraint
  valueSet(constraint, subpath) {
    const name = 'Value Set';
    const binding = `(${constraint.bindingStrength})`;
    const value = constraint.uri + ' ' + binding;
    const lastMod = constraint.lastModifiedBy;
    //const href = constraint.uri;
    const vConstraint = this.newConstraint(name, value, subpath, lastMod, undefined, binding);
    this.constraints.push(vConstraint);
  }

  // Handles subpaths, and creates new constraints for each nested path
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

  // Handles type constraint. Will override datatype if top level
  // type constraint.
  typeConstraint(constraint, subpath) {
    let constraintName, href;

    const element = this.elements[constraint.fqn];
    if (element) {
      constraintName = element.name;

      href = `../${element.namespacePath}/${element.name}.html`;
    } else if (constraint.fqn.indexOf('.') == -1) { //If primitive FQN
      constraintName = constraint.fqn;
    } else {
      //Invalid constraint target
      return;
    }

    // Checks if type constraint is top level
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

  // Handles fixed value constraints, checks for code and boolean
  fixedValue(constraint, subpath) {
    let value = '';
    if (constraint.type === 'code') {
      value = `${constraint.value.system} (code: ${constraint.value.code})`;
    } else if (constraint.type === 'boolean') {
      value = constraint.value.toString();
    } else if (constraint.type != null) {
      value = constraint.value.toString();
    }

    const name = 'Fixed Value';
    const lastMod = constraint.lastModifiedBy;
    const fConstraint = this.newConstraint(name, value, subpath, lastMod);
    this.constraints.push(fConstraint);
  }

  // Handles cardinality constraint
  cardConstraint(constraint, subpath) {
    const name = 'Cardinality';
    const value = cardToString(constraint);
    const lastMod = constraint.lastModifiedBy;
    const cConstraint = this.newConstraint(name, value, subpath, lastMod);
    this.constraints.push(cConstraint);
  }

  // Case Statement function to map which constraint is being used
  // Logs if the constraint doesn't exist
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
      // 07001, 'Unknown constraint type ${constraintType}.', 'Unknown', 'errorNumber'
      logger.warn({ constraintType: cType }, '07001');
    }
  }

  // Main function to parse the constraints, called in the constructor
  parse() {
    if (!this.inherited)
      this.initializeConstraints();
    // Card constraints aren't put in the constraints field because they're already reflected in the card
    // So first look in the constraintHistory for card constraint on this element
    if (this.field.constraintHistory && this.field.constraintHistory.card) {
      const modConstraint = this.field.constraintHistory.card.map(c => c.constraint).find(c => {
        return c.lastModifiedBy === this.element.fqn;
      });
      if (modConstraint) {
        this.switchConstraintType(modConstraint, 'card', this.field.name);
      }
    }
    // Now look at the rest of the constraints
    if ('constraints' in this.field) {
      Object.keys(this.field.constraints).forEach((cType) => {
        const constraint = this.field.constraints[cType];
        this.switchConstraintType(constraint, cType, this.field.name);
      });
    }
  }
}

module.exports = { Constraints, setLogger };
