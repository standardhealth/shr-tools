/*
 *  Respresents a single namespace. Holds a list of element names.
 */
class Namespace {
  constructor(name) {
    this.name = name;
    this.elements = [];
    this.description = '';
    this.path = name.replace('.', '-');
  }

  // Add a new element to the namespace
  addElement(element) {
    this.elements.push(element.name);
  }
}

/*
 *  Stores a map of the namespaces. Allows for new namespace and
 *  getting a sorted list of namespaces
 */
class Namespaces {
  constructor() {
    this.namespaces = {};
  }

  // Get a namespace, if it doesn't exist, make one
  get(namespace) {
    if (!(namespace in this.namespaces))
      this.namespaces[namespace] = new Namespace(namespace);
    return this.namespaces[namespace];
  }

  // Return a sorted list of the namespaces
  list() {
    let oList = [];
    Object.keys(this.namespaces).forEach((namespace) => {
      oList.push(this.get(namespace));
    });
    oList.sort((a, b) => { return a.name.localeCompare(b.name); });
    return oList;
  }
}

module.exports = Namespaces;