const Constraints = require('./constraints').Constraints;

/*
 *  Elements class manages all the data elements in a map based on fqn.
 *  The class has functions for accessing elements, adding elements,
 *  and updating elements for the ejs templates
 */
class Elements {
  constructor(config, configureForIG = false) {
    this.config = config;
    this.configureForIG = configureForIG;
    this.elements = {};
  }

  // Get the element that corresponds to the fqn
  get(fqn) {
    return this.elements[fqn];
  }

  // Add a new element, add fields for ejs templates
  add(element) {
    element.children = [];
    element.overridden = [];
    element.usedBy = new Set();
    if(element.isGroup) {
      element.cssClass = 'group';
      element.displayTitle = 'Group';
    } else if(element.isAbstract) {
      element.cssClass = 'abstract';
      element.displayTitle = 'Abstract';
    } else if(element.isEntry) {
      element.cssClass = 'entry';
      element.displayTitle = 'Entry';
    } else {
      element.cssClass = 'element';
      element.displayTitle = 'Element';
    }
    this.elements[element.identifier.fqn] = {
      children: [],
      overridden: [],
      usedBy: new Set(),
      fqn: element.identifier.fqn,
      name: element.identifier.name,
      namespace: element.identifier.namespace,
      basedOn: element.basedOn,
      description: element.description,
      cssClass: element.cssClass,
      displayTitle: element.displayTitle,
      namespacePath: element.namespacePath,
      value: element.value,
      hierarchy: element.hierarchy,
      fields: element.fields
    };
  }

  // Returns a list of all the elements sorted by name
  list() {
    let oList = [];
    Object.keys(this.elements).forEach((element) => {
      oList.push(this.get(element));
    });
    oList.sort((a, b) => { return a.name.localeCompare(b.name); });
    return oList;
  }

  // If element is a child, adds itself to parent's children array
  updateBasedOn(element) {
    if (!('basedOn' in element)) return;

    element.basedOn.forEach((basedElement) => {
      let parent = this.get(basedElement.fqn);
      if (parent === undefined) return;
      parent.children.push({
        name: element.name,
        fqn: element.fqn,
        path: element.namespacePath
      });
    });
  }

  // Adds information to value object to be parsed for constraints
  valueConstraints(element, value, title) {
    if (value.identifier.fqn in this.elements) {
      const valueElement = this.get(value.identifier.fqn);
      value.path = valueElement.namespacePath;
      value.name = valueElement.name;
    } else {
      value.name = value.identifier.fqn;
    }
    value.title = title;
    value.description = '';
    const cs = new Constraints(element, value, this.elements, this.config, false, this.configureForIG);
    value.pConstraints = cs.constraints;
    return value;
  }

  // Adds main element to sub element's usedBy set
  addToUsedBy(fqn, element) {
    if (fqn in this.elements) {
      let subElement = this.get(fqn);
      subElement.usedBy.add({
        name: element.name,
        fqn: element.fqn,
        path: element.namespacePath
      });
    }
  }

  // Checks whether value is choice or not, iterates over options
  // treating each option as an individual value
  updateValue(element) {
    element.pValue = [];
    let value = element.value;
    if (value === undefined) {
      return;
    } else if (value.constructor.name === 'ChoiceValue') {
      let forcedMin = 0;
      if(value.options.length == 1) {
        // exactly one option isn't much of a choice
        forcedMin = 1;
      }
      value.options.forEach((option, index) => {
        if(!option.card) {
          option.card = {};
        }
        option.card.min = forcedMin;
        option.card.max = 1;
        this.addToUsedBy(option.identifier.fqn, element);
        const optionValue = this.valueConstraints(element, option, `Value (Choice ${index+1})`);
        element.pValue.push(optionValue);
      });
    } else {
      this.addToUsedBy(value.identifier.fqn, element);
      value = this.valueConstraints(element, element.value, 'Value');
      element.pValue.push(value);
    }
  }

  // Adds information to hierarchy list
  // Used for ejs templates display and hyperlink
  updateHierarchy(element) {
    let flatHierarchy = [];
    if ('hierarchy' in element) {
      element.hierarchy.forEach((fqn) => {
        const ancestor = this.get(fqn);
        flatHierarchy.push({
          name: ancestor.name,
          fqn: ancestor.fqn,
          path: ancestor.namespacePath
        });
      });
    }
    element.hierarchy = flatHierarchy;
  }

  // Iterates over fields adding constraints and checking for
  // natively defined and overridden attributes
  updateFields(element) {
    if (!('fields' in element)) return;
    // Build map of ancestors to track field origins
    let hierarchyFields = {};
    element.hierarchy.forEach((a) => {
      hierarchyFields[a.fqn] = [];
    });

    // Iterate over fields, handle valueType TBD separately
    element.fields.forEach((field) => {
      let inherited = false;
      if (field.valueType === 'TBD') {
        field.title = field.fqn;
        field.path = '';
      } else {
        const fieldElement = this.get(field.identifier.fqn);
        field.name = fieldElement.name;
        field.description = fieldElement.description;
        field.path = fieldElement.namespacePath;
        if (field.inheritance) {
          inherited = true;
          hierarchyFields[field.inheritedFrom.fqn].push(field);
        }
      }
      this.addToUsedBy(field.identifier.fqn, element);
      const cs = new Constraints(element, field, this.elements, this.config, inherited, this.configureForIG);
      // A constraint on this field will have a path matching that field's name.
      // A constraint on a subfield of this field will not match.
      field.pConstraints = cs.constraints.filter(constraint => {
        return constraint.path == field.name;
      });
      if (inherited) {
        element.overridden = element.overridden.concat(cs.constraints);
      } else {
        element.overridden = element.overridden.concat(cs.constraints.filter(constraint => {
          return constraint.path != field.name;
        }).map(constraint => {
          if(!constraint.source) {
            constraint.source = element.name;
            constraint.sourceHref = `../${element.namespacePath}/${element.name}.html`;
          }
          return constraint;
        }));
      }
    });

    // Add fields to their origin ancestor
    element.hierarchy.forEach((a) => {
      a.fields = hierarchyFields[a.fqn];
    });
  }
  // Updates elements to include extra data for ejs templates
  // Only called after all elements have been added
  flatten() {
    this.list().forEach((element) => {
      this.updateBasedOn(element);
      this.updateValue(element);
      this.updateHierarchy(element);
      this.updateFields(element);
    });
  }
}

module.exports = Elements;