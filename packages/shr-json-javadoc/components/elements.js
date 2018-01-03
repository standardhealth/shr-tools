const Constraints = require('./constraints');

/*  
 *  Elements class manages all the data elements in a map based on fqn.
 *  The class has functions for accessing elements, adding elements,
 *  and updating elements for the ejs templates
 */
class Elements {
  constructor() {
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
    this.elements[element.fqn] = element;
  }

  // Returns a list of all the elements sorted by name
  list() {
    let oList = [];
    Object.keys(this.elements).forEach((element) => {
      oList.push(this.get(element));
    });
    oList.sort((a, b) => { return a.name.localeCompare(b.name) });
    return oList;
  }

  // If element is a child, adds itself to parent's children array
  updateBasedOn(element) {
    if (!('basedOn' in element)) return;

    element.basedOn.forEach((fqn) => {
      let parent = this.get(fqn);
      if (parent === undefined) return;
      parent.children.push({
        name: element.name,
        fqn: element.fqn,
        path: element.namespacePath
      });
    });
  }

  // Adds information to value object to be parsed for constraints
  valueConstraints(value, title) {
    if (value.fqn in this.elements) {
      const valueElement = this.get(value.fqn);
      value.path = valueElement.namespacePath;
      value.name = valueElement.name;
    } else {
      value.name = value.fqn;
    }
    value.title = title;
    value.description = '<nothing>';
    const cs = new Constraints(value, this.elements);
    value.pConstraints = cs.constraints;
    return value;
  }

  // Checks whether value is choice or not, iterates over options
  // treating each option as an individual value
  updateValue(element) {
    element.pValue = [];
    let value = element.value;
    if (value === undefined) {
      return;
    } else if (value.valueType === 'ChoiceValue') {
      value.options.forEach((option) => {
        option = this.valueConstraints(option, 'Value Choice');
        element.pValue.push(option)
      });
    } else {
      value = this.valueConstraints(element.value, 'Value');
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
    element.hierarchy.forEach((a) => { hierarchyFields[a.fqn] = []; });

    // Iterate over fields, handle valueType TBD separately
    element.fields.forEach((field) => {
      let inherited = false;
      if (field.valueType === 'TBD') {
        field.title = field.fqn;
        field.path = '';
      } else {
        const fieldElement = this.get(field.fqn);
        field.name = fieldElement.name;
        field.description = fieldElement.description;
        field.path = fieldElement.namespacePath;
        if ('inheritance' in field) {
          inherited = true;
          hierarchyFields[field.inheritance.from].push(field);
        }
      } 
      const cs = new Constraints(field, this.elements, inherited);
      field.pConstraints = cs.constraints;
      if ('inheritance' in field && field.inheritance.status === 'overridden')
        element.overridden = element.overridden.concat(cs.constraints);
    });

    // Add fields to their origin ancestor
    element.hierarchy.forEach((a) => { a.fields = hierarchyFields[a.fqn]; });
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