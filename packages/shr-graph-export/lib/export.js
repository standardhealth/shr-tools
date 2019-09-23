const fs = require('fs-extra');
const path = require('path');
const bunyan = require('bunyan');

const { IdentifiableValue, ChoiceValue, TypeConstraint, CardConstraint, IncludesTypeConstraint, ConstraintsFilter } = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-graph-export'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

function exportToGraph(specifications, configuration) {
  const exporter = new GraphExporter(specifications, configuration);
  return exporter.export();
}

function exportResources(outputPath) {
  // Need to copy over the graph viewer files to the output directory
  const resourcePath = path.join(__dirname, 'resources');
  if (fs.existsSync(resourcePath)) {
    fs.copySync(resourcePath, outputPath);
  }
}

class GraphExporter {
  constructor(specifications, configuration) {
    this._specs = specifications;
    this._config = configuration;
    this._graph = [];
  }

  export() {
    let roots = this._specs.dataElements.all.filter(r => this.isPrimary(r));

    for (const element of roots) {
      this.collectRootInfo(element);
    }

    this._graph.sort((a, b) => getHumanReadableName(a.name) > getHumanReadableName(b.name) ? 1 : -1);

    return this._graph;
  }

  collectRootInfo(root) {
    const type = this.getType(root);

    let properties = [];
    
    const contentProfile = this._specs.contentProfiles.findByIdentifier(root.identifier);

    contentProfile.rules.forEach(rule => {
      if (rule.mustSupport) {
        const pathElements = rule.path.map(id => this._specs.dataElements.findByIdentifier(id));
        const constraints = this.getConstraints(root, rule.path, this._specs);
        this.collectMustSupportInfo(pathElements, constraints, properties);
      }
    });

    this._graph.push({ name: root.identifier.fqn, type,  description: root.description, properties, values: [] });
  }

  collectMustSupportInfo(elements, constraints, properties) {
    let currentProperties = properties;
    let node;

    for (const element of elements) {
      node = { name: element.identifier.fqn, type: this.getType(element), description: element.description, properties: [], values: [] };
      currentProperties.push(node);
      currentProperties = node.properties;
    }

    if (!['abstract', 'entry', 'primitive'].includes(node.type)) {
      this.collectOtherInfo(elements[elements.length-1], node, constraints);
    }
  }

  collectOtherInfo(element, node, constraints, processed = []) {
    processed.push(element.identifier.fqn);

    const fieldElements = element.fields.map(f => this._specs.dataElements.findByIdentifier(f.identifier));
    node.properties = fieldElements.map(fieldElement => {
      let newNode = { name: fieldElement.identifier.fqn, type: this.getType(fieldElement), description: fieldElement.description, properties: [], values: [] };
      if (!processed.includes(fieldElement.identifier.fqn) && (!['abstract', 'entry', 'primitive'].includes(newNode.type))) {
        this.collectOtherInfo(fieldElement, newNode, constraints, processed);
      }
      return newNode;
    });

    const value = element.value;
    if (value && value.effectiveIdentifier) { // is IdentifiableValue
      const valueElement = this._specs.dataElements.findByIdentifier(value.effectiveIdentifier) || value;
      let newNode;
      if (!valueElement.effectiveIdentifier) { // is Element
        newNode = { name: valueElement.identifier.fqn, type: this.getType(valueElement), description: valueElement.description, properties: [], values: [] };
      } else { // is Value
        newNode = { name: valueElement.effectiveIdentifier.fqn, type: 'primitive', properties: [], values: [] }
      }
      node.values.push(newNode);
      if (!processed.includes(valueElement.identifier.fqn) && (!['abstract', 'entry', 'primitive'].includes(newNode.type))) {
        this.collectOtherInfo(valueElement, newNode, constraints, processed);
      }
    } else if (value && value.options) { // is ChoiceValue
      const typeConstraints = constraints.filter(c => c instanceof TypeConstraint);
      const allValueElements = value.aggregateOptions.filter(opt => opt.effectiveIdentifier).map(opt => this._specs.dataElements.findByIdentifier(opt.effectiveIdentifier) || opt);
      let valueElements = allValueElements;

      if (typeConstraints.length > 0) {
        valueElements = allValueElements.filter(v => {
          if (!v.effectiveIdentifier) { // is Element
            return typeConstraints.some(tc => tc.isA.equals((v.identifier)));
          } else { // is Value
            return typeConstraints.some(tc => tc.isA.equals((v.effectiveIdentifier)));
          }
        });
      }

      // If we somehow accidentally filtered out all children, then revert
      // TODO: See if there's a fix for an issue like this with substitute constraints
      if (valueElements.length === 0) {
        valueElements = allValueElements;
      }

      node.values = valueElements.map(valueElement => {
        let newNode;
        if (!valueElement.effectiveIdentifier) { // is Element
          newNode = { name: valueElement.identifier.fqn, type: this.getType(valueElement), description: valueElement.description, properties: [], values: [] };
        } else { // is Value
          newNode = { name: valueElement.effectiveIdentifier.fqn, type: 'primitive', properties: [], values: [] }
        }
        if (!processed.includes(valueElement.identifier.fqn) && (!['abstract', 'entry', 'primitive'].includes(newNode.type))) {
          this.collectOtherInfo(valueElement, newNode, constraints, processed);
        }
        return newNode;
      });
    }

    processed.pop();
  }
  
  getType(element) {
    let type = 'element';
    if (element.isEntry) {
      type = 'entry';
    } else if (element.isAbstract) {
      type = 'abstract';
    } else if (element.isGroup) {
      type = 'group';
    }
    return type;
  }

  isPrimary(element) {
    // If strategy is "namespace", set every entry within selected namespaces as primary
    if (this._config.implementationGuide.primarySelectionStrategy && this._config.implementationGuide.primarySelectionStrategy.strategy === 'namespace') {
      const primary = this._config.implementationGuide.primarySelectionStrategy.primary;
      if (Array.isArray(primary)) {
        return element && element.isEntry && (primary.indexOf(element.identifier.namespace) != -1);
      } else {
        logger.error('Namespace strategy requires config.implementationGuide.primarySelectionStrategy.primary to be an array');
      }
    // If strategy is "hybrid", set every entry within selected namespaces and every selected entry as primary
    } else if (this._config.implementationGuide.primarySelectionStrategy && this._config.implementationGuide.primarySelectionStrategy.strategy === 'hybrid') {
      const primary = this._config.implementationGuide.primarySelectionStrategy.primary;
      if (Array.isArray(primary)) {
        return element && element.isEntry && ((primary.indexOf(element.identifier.name) != -1) || (primary.indexOf(element.identifier.namespace) != -1) || (primary.indexOf(element.identifier.fqn) != -1));
      } else {
        logger.error('Hybrid strategy requires config.implementationGuide.primarySelectionStrategy.primary to be an array');
      }
    // If strategy is "entry" or default, set every entry as primary
    } else {
      return element.isEntry;
    }
  
    return;
  }

  getConstraints(de, path, specs) {
    const value = this.findValueByPath(specs, path, de);
    let constraints = value.constraintsFilter.constraints;
    if (constraints && constraints.length === 0) {
      // It may be on the value...
      constraints = this.getConstraintOnValue(value, specs.dataElements);
    }

    return constraints || [];
  }
  
  getConstraintOnValue(value, dataElements) {
    let valueId = this.choiceFriendlyEffectiveIdentifier(value);
    if (valueId == null && value instanceof ChoiceValue) {
      valueId = value.aggregateOptions.find(o => o.identifier.isPrimitive && o.identifier.name === 'concept');
    }
    if (valueId) {
      const valueDE = dataElements.findByIdentifier(valueId);
      if (valueDE.value) {
        const newValue = this.mergeConstraintsToChild(value.constraints, valueDE.value, true);
        const newConstraints = newValue.constraintsFilter.constraints;
        return newConstraints.find(c => !c.onValue && c.path.some(e => e.equals('shr.core', 'Units')));
      }
    }
    return;
  }
  
  choiceFriendlyEffectiveIdentifier(value) {
    if (value.effectiveIdentifier) {
      return value.effectiveIdentifier;
    }
    const ownTypeConstraints = value.constraintsFilter.own.type.constraints;
    if (value instanceof ChoiceValue && ownTypeConstraints.length === 1) {
      return ownTypeConstraints[0].isA;
    }
  }
  
  // Given a path (identifier array) and a SHR data element definition, it will return the matching value at the tail
  // of the path with all constraints aggregrated onto it
  findValueByPath(specs, path, def, valueOnly=false, parentConstraints=[]) {
    if (path.length == 0) {
      return;
    }
  
    const fieldsToSearch = [];
    if (def.value !== undefined) {
      fieldsToSearch.push(this.mergeConstraintsToChild(parentConstraints, def.value, true));
    }
    if (!valueOnly) {
      fieldsToSearch.push(...(def.fields.map(f => this.mergeConstraintsToChild(parentConstraints, f, false))));
    }
    // Find the value at the root of the path
    let value = this.findValueByIdentifier(path[0], fieldsToSearch);
  
    // If we didn't find the value, it could be one of those cases where we replaced the original identifier with
    // an includesType identifier, so we should check the constraints to look for a match on the includesType.
    if (value === undefined && parentConstraints.length > 0) {
      const cf = new ConstraintsFilter(parentConstraints);
      for (const itc of cf.includesType.constraints) {
        if (itc.path.length == 1 && itc.isA.equals(path[0])) {
  
          value = this.findValueByIdentifier(itc.path[0], fieldsToSearch);
          if (value !== undefined) {
            value = new IdentifiableValue(itc.isA).withCard(itc.card).withConstraints(value.constraints);
          }
        }
      }
    }
  
    if (value === undefined) {
      return; // invalid path
    }
  
    if (path.length == 1) {
      return value; // this was the tail of the path
    }
  
    // We're not at the end of the path, so we must dig deeper
    def = specs.dataElements.findByIdentifier(this.choiceFriendlyEffectiveIdentifier(value));
    if (def === undefined) {
      return; // invalid path
    }
  
    // First see if we can continue the path by traversing the value
    if (def.value !== undefined) {
      const subValue = this.findValueByPath(specs, path.slice(1), def, true, value.constraints);
      if (subValue !== undefined) {
        return this.mergeConstraintsToChild(value.constraints, subValue, true);
      }
    }
  
    // Still haven't found it, so traverse the rest
    const subValue = this.findValueByPath(specs, path.slice(1), def, false, value.constraints);
    if (subValue !== undefined) {
      return subValue;
    }
  }
  
  // Given an identifier and a list of values, it will return the matching value, with all constraints aggregrated onto it
  findValueByIdentifier(identifier, values) {
    for (let value of values) {
      if (value instanceof IdentifiableValue && value.possibleIdentifiers.some(pid => pid.equals(identifier))) {
        // If the identifier isn't the value's direct identifier or effective identifier, it's
        // probably from an includes type.  Check for that case.
        if (!identifier.equals(value.identifier) && !identifier.equals(value.effectiveIdentifier)) {
          for (const itc of value.constraintsFilter.includesType.constraints) {
            if (itc.path.length == 0 && itc.isA.equals(identifier)) {
              // It did resolve from an includes type, so return a value referencing the includes type instead!
              // Remove any of the direct type-ish constraints and card constraints since we're setting type & card
              const constraintsToCopy = value.constraints.filter(c => {
                return c.path.length === 0
                  && !(c instanceof IncludesTypeConstraint)
                  && !(c instanceof TypeConstraint)
                  && !(c instanceof CardConstraint);
              });
              value = new IdentifiableValue(itc.isA).withCard(itc.card).withConstraints(constraintsToCopy);
              break;
            }
          }
        }
        return value;
      } else if (value instanceof ChoiceValue) {
        // First check to see if there is a type constraint to make this a single value type
        const typeConstrained = value.constraintsFilter.own.type.constraints.some(c => c.isA.equals(identifier));
  
        let opt = this.findValueByIdentifier(identifier, value.options);
        if (opt !== undefined) {
          // We need to modify cardinality to:
          // (a) use the choice's cardinality, because choice options are now ALWAYS 1..1
          // (b) set min to 0 if there are multiple options (since it will have 0 instances if not selected)
          opt = opt.clone().withCard(value.effectiveCard.clone());
          if (value.options.length > 1 && !typeConstrained) {
            opt.card.min = 0;
          }
          return this.mergeConstraintsToChild(value.constraints, opt);
        }
      }
    }
  }
  
  mergeConstraintsToChild(parentConstraints, childValue, childIsElementValue=false) {
    let constraints = [];
    for (const cst of parentConstraints) {
      if (childIsElementValue && cst.path.length == 0 && cst.onValue) {
        const transferredCst = cst.clone();
        transferredCst.onValue = false;
        constraints.push(transferredCst);
      } else if (cst.path.length > 0) {
        if (cst.path[0].equals(childValue.effectiveIdentifier) || (childValue.options && childValue.aggregateOptions.some(o => cst.path[0].equals(o.effectiveIdentifier)))) {
          const transferredCst = cst.clone();
          transferredCst.path.shift(); // Remove the first element of the path since we're transferring this to the child
          constraints.push(transferredCst);
        }
      }
    }
    // Remove any type constraints that are no-ops
    constraints = constraints.filter(c => !(c instanceof TypeConstraint && c.isA.equals(this.choiceFriendlyEffectiveIdentifier(childValue))));
    if (constraints.length == 0) {
      return childValue;
    }
    const mergedChild = childValue.clone();
    for (const cst of mergedChild.constraints) {
      const siblings = new ConstraintsFilter(constraints).withPath(cst.path).constraints;
      if (siblings.some(c => c.constructor.name == cst.constructor.name)) {
        continue; // Don't add this constraint since the parent has the same type
      }
      constraints.push(cst);
    }
    mergedChild.constraints = constraints;
    return mergedChild;
  }
}

// Utility functions to get a human readable name for a node.
// This will get the string after the last '.' and insert a space in between:
// - not a capital letter -- a capital letter
// - a capital letter -- a capital letter follow by not a capital letter
// - not a number -- a number
const getHumanReadableName = (name) => {
  return `${name.substr(name.lastIndexOf(".") + 1).replace(/(([^A-Z])([A-Z]))|(([A-Z])([A-Z][^A-Z]))|(([^0-9])([0-9]))/g, humanReadableReplacer).trim()}`;
}
const humanReadableReplacer = (match, p1, p2, p3, p4, p5, p6, p7, p8, p9, offset, string) => {
  if (p1) {
  return [p2, p3].join(' ');
  } else if (p4) {
  return [p5, p6].join(' ');
  } else if (p7) {
  return [p8, p9].join(' ');
  }
}

module.exports = {exportToGraph, exportResources, setLogger};
