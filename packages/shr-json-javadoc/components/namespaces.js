class Namespace {
  constructor(name) {
    this.name = name;
    this.elements = [];
    this.description = '';
    this.path = name.replace('.', '-');
  }
  addElement(element) {
    this.elements.push(element.name);
  }
}

class Namespaces {
  constructor() {
    this.namespaces = {};
  }
  get(namespace) {
    if (!(namespace in this.namespaces))
      this.namespaces[namespace] = new Namespace(namespace);
    return this.namespaces[namespace];
  }
  list() {
    let oList = [];
    Object.keys(this.namespaces).forEach((namespace) => {
      oList.push(this.get(namespace));
    });
    oList.sort((a, b) => { return a.name.localeCompare(b.name) });
    return oList;
  }
}

module.exports = Namespaces;