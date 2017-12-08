class Elements {
  constructor() {
    this.elements = {};
  }
  get(fqn) {
    return this.elements[fqn];
  }
  add(element) {
    element.children = [];
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
  updateChildren() {
    this.list().forEach((element) => {
      if ('basedOn' in element) {
        element.basedOn.forEach((fqn) => {
          let parent = this.get(fqn);
          if (parent === undefined) return;
          parent.children.push({
            name: element.name, 
            fqn: element.fqn, 
            path: element.namespacePath
          })
        });
      }
    });
  }
}

module.exports = Elements;