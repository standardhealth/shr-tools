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
    if (card.min != null)
      min = card.min;
    if (card.max != null)
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
      path: path,
      lastMod: lastMod
    };

    // If source is an element, add hyperlink
    if (this.inherited) {
      const element = this.elements[this.field.inheritedFrom.fqn];
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
    const element = this.elements[constraint.isA.fqn];
    const card = cardToString(constraint.card);
    const name = 'Includes Type';
    const value = element.name;
    const href = `../${element.namespacePath}/${element.name}.html`;
    const lastMod = constraint.lastModifiedBy.fqn;
    const iConstraint = this.newConstraint(name, value, subpath, lastMod, href, '', card);
    this.constraints.push(iConstraint);
  }

  // Handles the includes code constraint
  includesCode(constraint, subpath) {
    const system = constraint.code.system || '';
    const name = 'Includes Code';
    const value = `${system} (code: ${constraint.code.code})`;
    const lastMod = constraint.lastModifiedBy.fqn;
    const iConstraint = this.newConstraint(name, value, subpath, lastMod);
    this.constraints.push(iConstraint);
  }

  // Handles the value set constraint
  valueSet(constraint, subpath) {
    const name = 'Value Set';
    const binding = `(${constraint.bindingStrength})`;
    const value = constraint.valueSet + ' ' + binding;
    const lastMod = constraint.lastModifiedBy.fqn;
    //const href = constraint.uri;
    const vConstraint = this.newConstraint(name, value, subpath, lastMod, undefined, binding);
    this.constraints.push(vConstraint);
  }

  // Handles type constraint. Will override datatype if top level
  // type constraint.
  typeConstraint(constraint, subpath) {
    let constraintName, href;

    const element = this.elements[constraint.isA.fqn];
    if (element) {
      constraintName = element.name;

      href = `../${element.namespacePath}/${element.name}.html`;
    } else if (constraint.isA.fqn.indexOf('.') == -1) { //If primitive FQN
      constraintName = constraint.isA.fqn;
    } else {
      //Invalid constraint target
      return;
    }

    // allow for override of type constraint inherited from ancestor
    const oldTypeConstraint = this.constraints.find(typeCon => {
      return typeCon.name == 'DataType' && typeCon.path == subpath;
    });
    if (oldTypeConstraint && this.isConstraintNewer(constraint, oldTypeConstraint)) {
      const name = 'DataType';
      const value = constraintName;
      const lastMod = constraint.lastModifiedBy.fqn;
      const tConstraint = this.newConstraint(name, value, subpath, lastMod, href);
      const oldIndex = this.constraints.indexOf(oldTypeConstraint);
      this.constraints[oldIndex] = tConstraint;
    } else if (subpath === this.field.name && !this.inherited) {
    // Checks if type constraint is top level
      this.constraints[0].value = constraintName;
      this.constraints[0].href = href;
    } else {
      const name = 'DataType';
      const value = constraintName;
      const lastMod = constraint.lastModifiedBy.fqn;
      const tConstraint = this.newConstraint(name, value, subpath, lastMod, href);
      this.constraints.push(tConstraint);
    }
  }

  isConstraintNewer(newConstraint, oldConstraint) {
    const hierarchyFqns = this.element.hierarchy.map(element => element.fqn);
    return (this.element.fqn === newConstraint.lastModifiedBy.fqn) ||
            hierarchyFqns.indexOf(newConstraint.lastModifiedBy.fqn) > hierarchyFqns.indexOf(oldConstraint.lastMod);
  }

  // Handles fixed value constraints and boolean constraints
  fixedValue(constraint, subpath) {
    const value = constraint.value.toString();
    const name = 'Fixed Value';
    const lastMod = constraint.lastModifiedBy.fqn;
    const fConstraint = this.newConstraint(name, value, subpath, lastMod);
    this.constraints.push(fConstraint);
  }

  fixedCode(constraint, subpath) {
    const value = `${constraint.code.system} (code: ${constraint.code.code})`;
    const name = 'Fixed Value';
    const lastMod = constraint.lastModifiedBy.fqn;
    const fConstraint = this.newConstraint(name, value, subpath, lastMod);
    this.constraints.push(fConstraint);
  }

  // Handles cardinality constraint
  cardConstraint(constraint, subpath) {
    const name = 'Cardinality';
    const value = cardToString(constraint.card);
    const lastMod = constraint.lastModifiedBy.fqn;
    const cConstraint = this.newConstraint(name, value, subpath, lastMod);
    this.constraints.push(cConstraint);
  }

  buildFullPath(constraint) {
    if(constraint.path.length > 0) {
      return constraint.path.reduce((fullPath, pathPiece) => {
        if(pathPiece.namespace != 'primitive') {
          return `${fullPath}.${pathPiece.name}`;
        } else {
          return fullPath;
        }
      }, this.field.name);
    } else {
      return this.field.name;
    }
  }

  // Main function to parse the constraints, called in the constructor
  parse() {
    if (!this.inherited)
      this.initializeConstraints();
    // Card constraints aren't put in the constraints field because they're already reflected in the card
    // So first look in the constraintHistory for card constraint on this element
    if (this.field.constraintHistory && this.field.constraintHistory.card) {
      const modConstraints = this.field.constraintHistory.card.histories.map(c => c.constraint).filter(c => {
        return c.path.length == 0;
      });
      // the most recent card constraint on the field applies
      modConstraints.slice(-1).forEach(modConstraint => {
        this.cardConstraint(modConstraint, this.buildFullPath(modConstraint));
      });
    }
    // Now look at the rest of the constraints
    if (this.field.constraints && this.field.constraintsFilter) {
      let constraintsFilter = this.field.constraintsFilter;
      constraintsFilter.type.constraints.forEach((typeCon) => {
        this.typeConstraint(typeCon, this.buildFullPath(typeCon));
      });
      constraintsFilter.includesCode.constraints.forEach((icCon) => {
        this.includesCode(icCon, this.buildFullPath(icCon));
      });
      constraintsFilter.card.constraints.forEach((cardCon) => {
        const fullPath = this.buildFullPath(cardCon);
        if(fullPath != this.field.name) { // only add cardinality for subfields constrained by ancestors
          this.cardConstraint(cardCon, fullPath);
        }        
      });
      constraintsFilter.includesType.constraints.forEach((itCon) => {
        this.includesType(itCon, this.buildFullPath(itCon));
      });
      constraintsFilter.valueSet.constraints.forEach((vsCon) => {
        this.valueSet(vsCon, this.buildFullPath(vsCon));
      });
      constraintsFilter.fixedValue.constraints.forEach((fvCon) => {
        this.fixedValue(fvCon, this.buildFullPath(fvCon));
      });
      constraintsFilter.boolean.constraints.forEach((boolCon) => {
        this.fixedValue(boolCon, this.buildFullPath(boolCon));
      });
      constraintsFilter.code.constraints.forEach((codeCon) => {
        this.fixedCode(codeCon, this.buildFullPath(codeCon));
      });
    }
  }
}

module.exports = { Constraints, setLogger };
