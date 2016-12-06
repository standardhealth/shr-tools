const {SHRParserVisitor} = require('./parsers/SHRParserVisitor');

class Preprocessor extends SHRParserVisitor {
  constructor() {
    super();
    this._data = new PreprocessedData();
  }

  get data() { return this._data; }

  visitShr(ctx) {
    if (ctx.dataDefsDoc()) {
      return this.visitDataDefsDoc(ctx.dataDefsDoc());
    } else {
      return this.visitValuesetDefsDoc(ctx.valuesetDefsDoc());
    }
  }

  visitDataDefsDoc(ctx) {
    const ns = ctx.dataDefsHeader().namespace().getText();
    if (ctx.vocabularyDefs()) {
      for (const def of ctx.vocabularyDefs().vocabularyDef()) {
        const name = def.ALL_CAPS().getText();
        var url;
        if (typeof def.URL() != 'undefined') {
          url = def.URL().getText();
        } else if (typeof def.URN_OID() != 'undefined') {
          url = def.URN_OID().getText();
        }
        this._data.registerVocabulary(ns, name, url);
      }
    }
    for (const def of ctx.dataDefs().dataDef()) {
      if (def.entryDef()) {
        const name = def.entryDef().entryHeader().simpleName().getText();
        this._data.registerDefinition(ns, name);
      } else if (def.elementDef()) {
        const name = def.elementDef().elementHeader().simpleName().getText();
        this._data.registerDefinition(ns, name);
      }
    }
  }
}

class PreprocessedData {
  constructor() {
    this._vocabularies = {}; // map[namespace]map[name]url
    this._definitions = {}; // map[namespace]map[name]boolean
  }

  registerVocabulary(namespace, name, url) {
    let ns = this._vocabularies[namespace];
    if (typeof ns == 'undefined') {
      ns = {};
      this._vocabularies[namespace] = ns;
    }
    ns[name] = url;
  }

  registerDefinition(namespace, name) {
    let ns = this._definitions[namespace];
    if (typeof ns == 'undefined') {
      ns = {};
      this._definitions[namespace] = ns;
    }
    ns[name] = true;
  }

  resolveVocabulary(name, ...namespace) {
    const result = {};
    const foundNamespaces = [];
    let conflict = false;
    for (const ns of namespace) {
      if (this._vocabularies[ns] && this._vocabularies[ns][name]) {
        if (!result.hasOwnProperty('url')) {
          result['url'] = this._vocabularies[ns][name];
        } else if (result.url != this._vocabularies[ns][name]) {
          conflict = true;
        }
        foundNamespaces.push(ns);
      }
    }
    if (!result.hasOwnProperty('url')) {
      result['error'] = `Failed to resolve vocabulary for ${name}.`;
    } else if (conflict) {
      result['error'] = `Found conflicting vocabularies for ${name} in multiple namespaces: ${foundNamespaces}`;
    }
    return result;
  }

  resolveDefinition(name, ...namespace) {
    const result = {};
    const foundNamespaces = [];
    for (const ns of namespace) {
      if (this._definitions[ns] && this._definitions[ns][name]) {
        if (!result.hasOwnProperty('namespace')) {
          result['namespace'] = ns;
        }
        foundNamespaces.push(ns);
      }
    }
    if (!result.hasOwnProperty('namespace')) {
      result['error'] = `Failed to resolve definition for ${name}.`;
    } else if (foundNamespaces.length > 1) {
      result['error'] = `Found conflicting definitions for ${name} in multiple namespaces: ${foundNamespaces}`;
    }
    return result;
  }
}

module.exports = { Preprocessor, PreprocessedData };