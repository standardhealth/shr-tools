const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');
const bunyan = require('bunyan');

const { IdentifiableValue, ChoiceValue, TypeConstraint, CardConstraint, IncludesTypeConstraint, ValueSetConstraint, CodeConstraint, ConstraintsFilter } = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-graph-export'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

// Global instance of the graph exporter, to be used across functions
let exporter;

function exportToGraph(specifications, configuration, outputPath) {
  exporter = new GraphExporter(specifications, configuration);
  const graphExport = exporter.export();
  exportResources(outputPath);
  return graphExport;
}

function exportResources(outputPath) {
  // Need to copy over the graph viewer files to the output directory
  const resourcePath = path.join(__dirname, 'resources');
  if (fs.existsSync(resourcePath)) {
    fs.copySync(resourcePath, outputPath);
  }

  const templatePath = path.join(__dirname, 'templates');
  if (fs.existsSync(templatePath)) {
    buildDataElements(outputPath);
  }
}

// Builds pages for each data element
function buildDataElements(outputPath) {
  // 08001, 'Building graph pages for ${count} elements...',,
  logger.info({ count: exporter.graph.length }, '08001');
  exporter.graph.forEach((node, index) => {
    const ejsPkg = { index };
    const fileName = `${node.name}.html`;
    const filePath = path.join(outputPath, fileName);
    renderEjsFile('templates/graph-viewer.ejs', ejsPkg, filePath);
  });

}

// Function to generate and write html from an ejs template
function renderEjsFile(template, pkg, destination) {
  ejs.renderFile(path.join(__dirname, template), pkg, (error, htmlText) => {
    if (error) {
      // 18001, 'Error rendering graph: ${errorText}',  'Unknown' , 'errorNumber'
      logger.error({errorText: error.stack }, '18001');
    }
    else fs.writeFileSync(destination, htmlText);
  });
}

class GraphExporter {
  constructor(specifications, configuration) {
    this._specs = specifications;
    this._config = configuration;
    this._graph = [];
  }

  get graph() {
    return this._graph;
  }

  export() {
    let roots = this._specs.dataElements.all.filter(r => this.isPrimary(r));

    for (const element of roots) {
      this.collectRootInfo(element);
    }

    this._graph.sort((a, b) => a.title > b.title ? 1 : -1);

    return this._graph;
  }

  collectRootInfo(root) {
    const type = this.getType(root);

    let properties = [];
    
    const contentProfile = this._specs.contentProfiles.findByIdentifier(root.identifier);

    contentProfile.rules.forEach(rule => {
      if (rule.mustSupport) {
        this.collectMustSupportInfo(root, rule.path, properties);
      }
    });

    this._graph.push({ name: root.identifier.fqn, title: root.identifier.title, type, description: root.description, properties, values: [] });
  }

  collectMustSupportInfo(root, path, properties) {
    let currentProperties = properties;
    let node;

    const elements = path.map(id => this._specs.dataElements.findByIdentifier(id));

    for (const element of elements) {
      node = { name: element.identifier.fqn, title: element.identifier.title, type: this.getType(element), description: element.description, properties: [], values: [] };
      currentProperties.push(node);
      currentProperties = node.properties;
    }

    if (!['abstract', 'entry'].includes(node.type)) {
      if (node.type === 'primitive') {
        this.collectPrimitiveInfo(node, valueSetConstraints, codeConstraints);
      } else {
        this.collectOtherInfo(root, path, elements[elements.length-1], node);
      }
    }
  }

  collectOtherInfo(root, path, element, node, processed = []) {
    const constraints = this.getConstraints(root, path);
    const typeConstraints = constraints.filter(c => c instanceof TypeConstraint);
    const valueSetConstraints = constraints.filter(c => c instanceof ValueSetConstraint);
    const codeConstraints = constraints.filter(c => c instanceof CodeConstraint);
        
    processed.push(element.identifier.fqn);

    let fieldElements = element.fields.map(f => this._specs.dataElements.findByIdentifier(f.identifier));
    fieldElements = fieldElements.filter(fieldElement => {
      const newConstraints = this.getConstraints(root, path.concat(fieldElement.identifier));
      const newCardConstraints = newConstraints.filter(c => c instanceof CardConstraint);
      return !newCardConstraints.some(c => c.card.max === 0);
    });

    node.properties = fieldElements.map(fieldElement => {
      let newNode = { name: fieldElement.identifier.fqn, title: fieldElement.identifier.title, type: this.getType(fieldElement), description: fieldElement.description, properties: [], values: [] };
      if (!processed.includes(fieldElement.identifier.fqn) && (!['abstract', 'entry'].includes(newNode.type))) {
        if (newNode.type === 'primitive') {
          this.collectPrimitiveInfo(newNode, valueSetConstraints, codeConstraints);
        } else {
          this.collectOtherInfo(root, path.concat(fieldElement.identifier), fieldElement, newNode, processed);
        }
      }
      return newNode;
    });

    const value = element.value;
    if (value && value.effectiveIdentifier) { // is IdentifiableValue
      const valueElement = this._specs.dataElements.findByIdentifier(value.effectiveIdentifier) || value;
      let newNode;
      if (!valueElement.effectiveIdentifier) { // is Element
        newNode = { name: valueElement.identifier.fqn, title: valueElement.identifier.title, type: this.getType(valueElement), description: valueElement.description, properties: [], values: [] };
      } else { // is Value
        newNode = { name: valueElement.effectiveIdentifier.fqn, title: valueElement.effectiveIdentifier.title, type: 'primitive', properties: [], values: [] }
      }
      node.values.push(newNode);
      if (!processed.includes(valueElement.identifier.fqn) && (!['abstract', 'entry'].includes(newNode.type))) {
        if (newNode.type === 'primitive') {
          this.collectPrimitiveInfo(newNode, valueSetConstraints, codeConstraints);
        } else {
          this.collectOtherInfo(root, path.concat(valueElement.identifier), valueElement, newNode, processed);
        }
      }
    } else if (value && value.options) { // is ChoiceValue
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
      if (valueElements.length === 0) {
        valueElements = allValueElements;
      }

      node.values = valueElements.map(valueElement => {
        let newNode;
        if (!valueElement.effectiveIdentifier) { // is Element
          newNode = { name: valueElement.identifier.fqn, title: valueElement.identifier.title, type: this.getType(valueElement), description: valueElement.description, properties: [], values: [] };
        } else { // is Value
          newNode = { name: valueElement.effectiveIdentifier.fqn, title: valueElement.effectiveIdentifier.title, type: 'primitive', properties: [], values: [] }
        }
        if (!processed.includes(valueElement.identifier.fqn) && (!['abstract', 'entry'].includes(newNode.type))) {
          if (newNode.type === 'primitive') {
            this.collectPrimitiveInfo(newNode, valueSetConstraints, codeConstraints);
          } else {
            this.collectOtherInfo(root, path.concat(valueElement.identifier), valueElement, newNode, processed);
          }
        }
        return newNode;
      });
    }

    processed.pop();
  }

  collectPrimitiveInfo(node, valueSetConstraints, codeConstraints) {
    let description = [];
    if (valueSetConstraints.length > 0) description.push(`${valueSetConstraints[0].valueSet} (${valueSetConstraints[0].bindingStrength})`);
    if (codeConstraints.length > 0) description.push(codeConstraints[0].code.display);

    if (description.length > 0) {
      node.description = description.join(' or ');
    }
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
    } else if (this._specs.contentProfiles.all.length > 0) {
      const primary = [];
      for (const cp of this._specs.contentProfiles.all) {
        for (const cpr of cp.rules) {
          // Process element as primaryProfile if it is in ContentProfile
          if (cpr.primaryProfile) {
            primary.push(cp.identifier.fqn);
          }
        }
      }
      if (primary.length > 0) {
        return element && element.isEntry && (primary.indexOf(element.identifier.fqn) != -1);
      }
    // If strategy is "entry" or default, set every entry as primary
    } else {
      return element.isEntry;
    }
 
    return;
  }

  getConstraints(de, path) {
    const value = this.findValueByPath(path, de);
    let constraints = value.constraintsFilter.constraints;
    const constraintsOnValue = this.getConstraintOnValue(value, this._specs.dataElements);

    if (constraints) {
      if (constraintsOnValue) constraints = constraints.concat(constraintsOnValue);
      return constraints;
    } else if (constraintsOnValue) {
      return constraintsOnValue;
    }

    return [];
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
        return newValue.constraintsFilter.constraints;
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
  findValueByPath(path, def, valueOnly=false, parentConstraints=[]) {
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
    def = this._specs.dataElements.findByIdentifier(this.choiceFriendlyEffectiveIdentifier(value));
    if (def === undefined) {
      return; // invalid path
    }
  
    // First see if we can continue the path by traversing the value
    if (def.value !== undefined) {
      const subValue = this.findValueByPath(path.slice(1), def, true, value.constraints);
      if (subValue !== undefined) {
        return this.mergeConstraintsToChild(value.constraints, subValue, true);
      }
    }
  
    // Still haven't found it, so traverse the rest
    const subValue = this.findValueByPath(path.slice(1), def, false, value.constraints);
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

function errorFilePath() {
  return path.join(__dirname, '..', 'errorMessages.txt');
}

module.exports = {exportToGraph, setLogger, errorFilePath};
