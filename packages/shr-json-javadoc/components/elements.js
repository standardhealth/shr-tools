const Constraints = require('./constraints');

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

class Elements {
  constructor() {
    this.elements = {};
  }
  get(fqn) {
    return this.elements[fqn];
  }
  add(element) {
    element.children = [];
    element.overridden = [];
    this.elements[element.fqn] = element;
  }
  list() {
    let oList = [];
    Object.keys(this.elements).forEach((element) => {
      oList.push(this.get(element));
    });
    oList.sort((a, b) => { return a.name.localeCompare(b.name) });
    return oList;
  }
  updateBasedOn(element) {
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

  valueConstraints(value, title) {
    if (value.fqn in this.elements) {
      const valueElement = this.get(value.fqn);
      value.path = valueElement.namespacePath;
      value.name = valueElement.name;
    } else {
      value.name = value.fqn;
    }
    value.title = title;
    value.description = 'See Documentation';
    const cs = new Constraints(value, this.elements);
    value.pConstraints = cs.constraints;
    return value;
  }

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

  // Set { 'IdentifiableValue', 'RefValue', 'TBD' }
  updateFields(element) {
    let hierarchyMap = {};
    element.hierarchy.forEach((ancestor) => {
      hierarchyMap[ancestor.fqn] = { 'fields': [], 'overridden': [] };
    });

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
          hierarchyMap[field.inheritance.from].fields.push(field);
          if (field.inheritance.status === 'overridden')
            hierarchyMap[field.inheritance.from].overridden.push(field);
        }
      }
      const cs = new Constraints(field, this.elements, inherited);
      field.pConstraints = cs.constraints;
      if ('inheritance' in field && field.inheritance.status === 'overridden')
        element.overridden = element.overridden.concat(cs.constraints);
    });

    element.hierarchy.forEach((ancestor) => {
      ancestor.overridden = hierarchyMap[ancestor.fqn].overridden;
      ancestor.fields = hierarchyMap[ancestor.fqn].fields;
    });
  }
  flatten() {
    this.list().forEach((element) => {
      if ('basedOn' in element)
        this.updateBasedOn(element);
      this.updateValue(element);
      this.updateHierarchy(element);
      if ('fields' in element)
        this.updateFields(element);
    });
  }
}

module.exports = Elements;