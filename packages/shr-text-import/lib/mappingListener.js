const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRLexer} = require('./parsers/SHRLexer');
const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {SHRErrorListener} = require('./common.js');
const {Specifications, Version, ElementMapping, Cardinality, Identifier, PrimitiveIdentifier, TBD} = require('shr-models');

class MappingImporter extends SHRParserListener {
  constructor(specifications = new Specifications) {
    super();
    // The specifications container to put the mappings into
    this._specs = specifications;
    // The current file being parsed -- useful for error messages
    this._currentFile = '';
    // The currently active target spec
    this._currentTargetSpec = '';
    // The currently active namespace
    this._currentNs = '';
    // The currently active grammar version
    this._currentGrammarVersion = '';
    // The currently active definition (ElementMapping)
    this._currentDef = null;
    // The accumulated errors
    this._errors = [];
  }

  get errors() { return this._errors; }

  importFile(file) {
    const errListener = new SHRErrorListener(file);
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
    this._currentFile = file;
    walker.walk(this, tree);
    this._currentFile = '';
  }

  enterMappingsDoc(ctx) {
    // Process the namespace
    this._currentNs = ctx.mappingsHeader().namespace().getText();

    // Process the target
    this._currentTargetSpec = ctx.targetStatement().simpleName().getText();

    // Process the version
    const version = ctx.mappingsHeader().version();
    const major = parseInt(version.WHOLE_NUMBER()[0], 10);
    const minor = parseInt(version.WHOLE_NUMBER()[1], 10);
    this._currentGrammarVersion = new Version(major, minor);
  }

  exitMappingsDoc(ctx) {
    // clear current namespace, target spec, and grammar version
    this._currentNs = '';
    this._currentTargetSpec = '';
    this._currentGrammarVersion = null;
  }

  enterMappingDef(ctx) {
    // NOTE: All validation happens outside of the listener (in the expander)
    const source = new Identifier(this._currentNs, ctx.mappingDefHeader().simpleName().getText());
    let target;
    if (ctx.mappingDefHeader().TARGET_PHRASE()) {
      target = ctx.mappingDefHeader().TARGET_PHRASE().getText();
    }
    this._currentDef = new ElementMapping(source, this._currentTargetSpec, target);
    this._currentDef.grammarVersion = this._currentGrammarVersion;
  }

  exitMappingDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterFieldMapping(ctx) {
    const sourcePath = this.buildSourcePath(ctx);
    const target = ctx.TARGET_PHRASE().getText();
    this._currentDef.addFieldMappingRule(sourcePath, target);
  }

  enterCardMapping(ctx) {
    const target = ctx.TARGET_PHRASE().getText();
    const cardinality = this.processCardinality(ctx.count());
    this._currentDef.addCardinalityMappingRule(target, cardinality);
  }

  buildSourcePath(fmCtx) {
    const sourcePath = [];
    let c = fmCtx;
    for (const part of c.source().sourcePart()) {
      for (const word of part.sourceWord()) {
        if (word.simpleOrFQName()) {
          sourcePath.push(this.resolveToIdentifier(word.simpleOrFQName().getText()));
        } else if (word.primitive()) {
          sourcePath.push(new PrimitiveIdentifier(word.primitive().getText()));
        } else if (word.tbd()){
          if (word.tbd().STRING()) {
            sourcePath.push(new TBD(stripDelimitersFromToken(word.tbd().STRING())));
          } else {
            sourcePath.push(new TBD());
          }
        } else {
          this.addError(`Error parsing mapping for ${this._currentDef.identifier.fqn}`);
        }
      }
    }
    return sourcePath;
  }

  processCardinality(ctx) {
    const cards = ctx.WHOLE_NUMBER();
    const min = parseInt(cards[0].getText(), 10);
    var max;
    if (cards.length == 2) {
      max = parseInt(cards[1].getText(), 10);
    }
    return new Cardinality(min, max);
  }

  resolveToIdentifier(ref) {
    const lastDot = ref.lastIndexOf('.');
    if (lastDot != -1) {
      const ns = ref.substr(0, lastDot);
      const name = ref.substr(lastDot+1);
      return new Identifier(ns, name);
    }
    return new Identifier(null, ref);
  }

  pushCurrentDefinition() {
    this._specs.maps.add(this._currentDef);
    this._currentDef = null;
  }

  addError(err) {
    this._errors.push(`${this._currentFile}: ${err}`);
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

module.exports = {MappingImporter};