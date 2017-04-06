const bunyan = require('bunyan');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRLexer} = require('./parsers/SHRLexer');
const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {SHRErrorListener} = require('./common.js');
const {Specifications, Version, ValueSet, CodeSystem, Concept, Identifier} = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

class ValueSetImporter extends SHRParserListener {
  constructor(specifications = new Specifications) {
    super();
    // The specifications container to put the mappings into
    this._specs = specifications;
    // The currently active namespace
    this._currentNs = '';
    // The currently active grammar version
    this._currentGrammarVersion = '';
    // The currently active default path -- based on namespace unless specifically defined in file
    this._currentPath = '';
    // The currently active definition (ValueSet)
    this._currentDef = null;
    // The currently active CodeSystem definition (if applicable)
    this._currentCodeSystemDef = null;
    // The external code systems used in this file
    this._csMap = new Map();
  }

  importFile(file) {
    // Setup a child logger to associate logs with the current file
    const lastLogger = logger;
    logger = rootLogger.child({ file: file });
    logger.debug('Start importing value set file');
    try {
      const errListener = new SHRErrorListener(logger);
      const chars = new FileStream(file);
      const lexer = new SHRLexer(chars);
      lexer.removeErrorListeners();
      lexer.addErrorListener(errListener);
      const tokens  = new CommonTokenStream(lexer);
      const parser = new SHRParser(tokens);
      parser.removeErrorListeners();
      parser.addErrorListener(errListener);
      parser.buildParseTrees = true;
      const tree = parser.shr();
      const walker = new ParseTreeWalker();
      walker.walk(this, tree);
    } finally {
      logger.debug('Done importing value set file');
      this.logger = lastLogger;
    }
  }

  enterValuesetDefsDoc(ctx) {
    // Process the namespace
    this._currentNs = ctx.valuesetDefsHeader().namespace().getText();

    // Create the default path based on the namespace
    this._currentPath = `http://standardhealthrecord.org/${this._currentNs.replace('.', '/')}/vs/`;

    // Process the version
    const version = ctx.valuesetDefsHeader().version();
    const major = parseInt(version.WHOLE_NUMBER()[0], 10);
    const minor = parseInt(version.WHOLE_NUMBER()[1], 10);
    this._currentGrammarVersion = new Version(major, minor);

    logger.debug({shrId: this._currentNs, version: this._currentGrammarVersion.toString()}, 'Start importing value set namespace');
  }

  exitValuesetDefsDoc(ctx) {
    // clear current namespace, target spec, and grammar version
    this._currentNs = '';
    this._currentGrammarVersion = null;
    logger.debug({shrId: this._currentNs}, 'Done importing value set namespace');
  }

  enterDefaultPathDef(ctx) {
    this._currentPath = ctx.URL().getText();
    if (!this._currentPath.endsWith('/')) {
      this._currentPath += '/';
    }
  }

  enterVocabularyDef(ctx) {
    const key = ctx.ALL_CAPS().getText();
    let value;
    if (ctx.URL()) {
      value = ctx.URL().getText();
    } else if (ctx.URN_OID()) {
      value = ctx.URN_OID().getText();
    } else if (ctx.URN()) {
      value = ctx.URN().getText();
    }
    this._csMap.set(key, value);
  }

  enterValuesetDef(ctx) {
    const h = ctx.valuesetHeader();
    if (h.URL()) {
      logger.error('Defining value sets by URL has been deprecated in ValueSet files.  ValueSet %s ignored.', h.URL().getText());
      // Set a dummy unsupported def so the rest of the parsing can occur -- but it won't be added to the definitions
      this._currentDef = new ValueSet(new Identifier('unsupported', 'Unsupported'), 'urn:unsupported');
      return;
    } else if (h.URN_OID()) {
      logger.error('Defining value sets by URN has been deprecated in ValueSet files.  ValueSet %s ignored.', h.URN_OID().getText());
      // Set a dummy unsupported def so the rest of the parsing can occur -- but it won't be added to the definitions
      this._currentDef = new ValueSet(new Identifier('unsupported', 'Unsupported'), 'urn:unsupported');
      return;
    }
    const identifier = new Identifier(this._currentNs, h.simpleName().getText());
    const url = `${this._currentPath}${identifier.name}`;
    this._currentDef = new ValueSet(identifier, url);
    this._currentDef.grammarVersion = this._currentGrammarVersion;
  }

  enterDescriptionProp(ctx) {
    this._currentDef.description = stripDelimitersFromToken(ctx.STRING());
  }

  enterConcepts(ctx) {
    for (const fqc of ctx.fullyQualifiedCode()) {
      const code = this.processFullyQualifiedCode(fqc);
      if (typeof code !== 'undefined') {
        this._currentDef.addConcept(code);
      }
    }
  }

  enterFullyQualifiedCode(ctx) {
    if (ctx.parentCtx instanceof SHRParser.ValuesetValueContext) {
      const concept = this.processFullyQualifiedCode(ctx);
      if (typeof concept === 'undefined') {
        return;
      }
      this._currentDef.addValueSetIncludesCodeRule(concept);
    }
    // Other cases are handled elsewhere
  }

  enterValuesetInlineValue(ctx) {
    this.ensureCodeSystemDef();
    const code = ctx.CODE().getText().substr(1); // substr to skip the '#'
    const concept = new Concept(this._currentCodeSystemDef.url, code);
    if (ctx.STRING()) {
      concept.display = stripDelimitersFromToken(ctx.STRING());
    }
    this._currentCodeSystemDef.addCode(concept);
    this._currentDef.addValueSetIncludesCodeRule(concept.clone());
  }

  enterValuesetDescendingFrom(ctx) {
    const fqcCtxs = ctx.fullyQualifiedCode();

    // First fully qualified code is the one to *include* descendents of
    const concept = this.processFullyQualifiedCode(fqcCtxs[0]);
    if (typeof concept === 'undefined') {
      // It doesn't make sense to even try to process the ones to exclude, so just return
      return;
    }
    this._currentDef.addValueSetIncludesDescendentsRule(concept);

    // Remaining fully qualified codes are the ones to *exclude* descendents of
    for (let i=1; i < fqcCtxs.length; i++) {
      const concept = this.processFullyQualifiedCode(fqcCtxs[i]);
      if (typeof concept === 'undefined') {
        // If we can't process an exclude rule, that invalidates the include rule too, so just return
        return;
      }
      this._currentDef.withValueSetExcludesDescendentsRule(concept);
    }
  }

  enterValuesetFromCodeSystem(ctx) {
    const alias = ctx.ALL_CAPS().getText();
    const system = this._csMap.get(alias);
    if (typeof system === 'undefined') {
      logger.error('Couldn\'t resolve code system for alias: %s', alias);
      return;
    }
    this._currentDef.addValueSetIncludesFromCodeSystemRule(system);
  }

  enterValuesetFromCode(ctx) {
    const concept = this.processFullyQualifiedCode(ctx.fullyQualifiedCode());
    if (typeof concept !== 'undefined') {
      this._currentDef.addValueSetIncludesFromCodeRule(concept);
    }
  }

  exitValuesetDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterUsesStatement(ctx) {
    logger.error('Uses statements have been deprecated in ValueSet files.  Uses statement ignored.');
  }

  enterPathDef(ctx) {
    logger.error('Only default path definitions are allowed in ValueSet files.  Path definition ignored.');
  }

  processFullyQualifiedCode(ctx) {
    if (ctx.ALL_CAPS()) {
      const alias = ctx.ALL_CAPS().getText();
      const system = this._csMap.get(alias);
      if (typeof system === 'undefined') {
        logger.error('Couldn\'t resolve code system for alias: %s', alias);
        return;
      }
      const code = ctx.code().CODE().getText().substr(1); // substr to skip the '#'
      const concept = new Concept(system, code);
      if (ctx.code().STRING()) {
        concept.display = stripDelimitersFromToken(ctx.code().STRING());
      }
      return concept;
    } else if (ctx.tbdCode()) {
      const concept = new Concept('urn:tbd', 'TBD');
      if (ctx.tbdCode().STRING()) {
        concept.display = stripDelimitersFromToken(ctx.tbdCode().STRING());
      }
      return concept;
    }
  }

  ensureCodeSystemDef() {
    if (typeof this._currentCodeSystemDef === 'undefined' || this._currentCodeSystemDef == null) {
      let csPath;
      if (this._currentPath.indexOf('/vs/') >= 0) {
        csPath = this._currentPath.replace('/vs/', '/cs/');
      } else {
        csPath = `${this._currentPath}cs/`;
      }
      // To eliminate confusion, if the name ends with VS, replace it with CS
      const vsID = this._currentDef.identifier;
      const identifier = new Identifier(vsID.namespace, vsID.name.replace(/VS$/, 'CS'));
      const csURL = `${csPath}${identifier.name}`;
      this._currentCodeSystemDef = new CodeSystem(identifier, csURL);
      if (typeof this._currentDef.description !== 'undefined') {
        this._currentCodeSystemDef.description = this._currentDef.description;
      }
      this._currentCodeSystemDef.grammarVersion = this._currentGrammarVersion;
    }
  }

  pushCurrentDefinition() {
    if (this._currentDef.url == 'urn:unsupported') {
      // This was an unsupport value set definition, so don't add it.
      this._currentDef = null;
      this._currentCodeSystemDef = null;
      return;
    }

    this._specs.valueSets.add(this._currentDef);
    this._currentDef = null;
    if (typeof this._currentCodeSystemDef !== 'undefined' && this._currentCodeSystemDef != null) {
      this._specs.codeSystems.add(this._currentCodeSystemDef);
      this._currentCodeSystemDef = null;
    }
  }

  specifications() {
    return this._specs;
  }
}

function stripDelimitersFromToken(tkn) {
  const str = tkn.getText();
  // TODO: Also fix escaped double-quotes, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

module.exports = {ValueSetImporter, setLogger};