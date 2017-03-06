const {FileStream, CommonTokenStream} = require('antlr4/index');
const {SHRLexer} = require('./parsers/SHRLexer');
const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserVisitor} = require('./parsers/SHRParserVisitor');
const {Version} = require('shr-models');

const VERSION = new Version(4, 0, 0);
const GRAMMAR_VERSION = new Version(4, 0, 0);

class Preprocessor extends SHRParserVisitor {
  constructor() {
    super();
    // The current file being parsed -- useful for error messages
    this._currentFile = '';
    // The preprocessed data
    this._data = new PreprocessedData();
    // Errors during parsing
    this._errors = []; // errors
  }

  get errors() { return this._errors; }
  get data() { return this._data; }

  preprocessFile(file) {
    this._currentFile = file;
    const chars = new FileStream(file);
    const lexer = new SHRLexer(chars);
    lexer.removeErrorListeners();
    const tokens  = new CommonTokenStream(lexer);
    const parser = new SHRParser(tokens);
    parser.removeErrorListeners();
    parser.buildParseTrees = true;
    const tree = parser.shr();
    this.visitShr(tree);
    this._currentFile = '';
  }

  visitShr(ctx) {
    if (ctx.dataDefsDoc()) {
      return this.visitDataDefsDoc(ctx.dataDefsDoc());
    }
  }

  visitDataDefsDoc(ctx) {
    if (!this.checkVersion(ctx.dataDefsHeader().version())) {
      return;
    }
    this._data.files.push(this._currentFile);
    const ns = ctx.dataDefsHeader().namespace().getText();
    if (ctx.pathDefs()) {
      const removeTrailingSlash = function(url) {
        while (url.endsWith('/')) { url = url.substring(0, url.length - 1); }
        return url;
      };
      if (ctx.pathDefs().defaultPathDef()) {
        const url = removeTrailingSlash(ctx.pathDefs().defaultPathDef().URL().getText());
        this._data.registerPath(ns, 'default', url);
      }
      for (const def of ctx.pathDefs().pathDef()) {
        const name = def.ALL_CAPS().getText();
        let url = removeTrailingSlash(def.URL().getText());
        while (url.endsWith('/')) {
          url = url.substring(0, url.length - 1);
        }
        this._data.registerPath(ns, name, url);
      }
    }
    if (ctx.vocabularyDefs()) {
      for (const def of ctx.vocabularyDefs().vocabularyDef()) {
        const name = def.ALL_CAPS().getText();
        var url;
        if (def.URL()) {
          url = def.URL().getText();
        } else if (def.URN_OID()) {
          url = def.URN_OID().getText();
        } else if (def.URN()) {
          url = def.URN().getText();
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

  checkVersion(version) {
    const major = parseInt(version.WHOLE_NUMBER()[0], 10);
    const minor = parseInt(version.WHOLE_NUMBER()[1], 10);
    if (GRAMMAR_VERSION.major != major || GRAMMAR_VERSION.minor < minor) {
      this.addError(`Unsupported grammar version: ${major}.${minor}`);
      return false;
    }
    return true;
  }

  addError(err) {
    this._errors.push(`${this._currentFile}: ${err}`);
  }
}

class PreprocessedData {
  constructor() {
    this._files = []; // file paths of supported files
    this._paths = {}; //map[namespace]map[name]url
    this._vocabularies = {}; // map[namespace]map[name]url
    this._definitions = {}; // map[namespace]map[name]boolean
  }

  get files() { return this._files; }

  registerPath(namespace, name, url) {
    let ns = this._paths[namespace];
    if (typeof ns == 'undefined') {
      ns = {};
      this._paths[namespace] = ns;
    }
    ns[name] = url;
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

  resolvePath(name, ...namespace) {
    // First ensure namespaces were passed in
    if (namespace.length == 0) {
      return { error: `Cannot resolve path without namespaces` };
    }

    // Special handling for default paths
    if (name == 'default') {
      const ns = namespace[0];
      if (this._paths[ns] && this._paths[ns]['default']) {
        return { url: this._paths[ns]['default'] };
      }
      // Didn't find default, so infer default from namespace
      const parts = ns.split('.');
      return 'http://standardhealthrecord.org/' + parts.join('/') + '/vs';
    }

    // Attempt to resolve specific path
    const result = {};
    const foundNamespaces = [];
    let conflict = false;
    for (const ns of namespace) {
      if (this._paths[ns] && this._paths[ns][name]) {
        if (!result.hasOwnProperty('url')) {
          result['url'] = this._paths[ns][name];
        } else if (result.url != this._paths[ns][name]) {
          conflict = true;
        }
        foundNamespaces.push(ns);
      }
    }
    if (!result.hasOwnProperty('url')) {
      result['error'] = `Failed to resolve path for ${name}.`;
    } else if (conflict) {
      result['error'] = `Found conflicting path for ${name} in multiple namespaces: ${foundNamespaces}`;
    }
    return result;
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

module.exports = { Preprocessor, PreprocessedData, VERSION, GRAMMAR_VERSION };