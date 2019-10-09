const bunyan = require('bunyan');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRContentProfileLexer} = require('./parsers/SHRContentProfileLexer');
const {SHRContentProfileParser} = require('./parsers/SHRContentProfileParser');
const {SHRContentProfileParserListener} = require('./parsers/SHRContentProfileParserListener');
const {SHRErrorListener} = require('./errorListener.js');
const {Specifications, Version, ContentProfile, ContentProfileRule, Identifier, IdentifiableValue, ChoiceValue, PrimitiveIdentifier, PRIMITIVES} = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

class ContentProfileImporter extends SHRContentProfileParserListener {
  constructor(specifications = new Specifications()) {
    super();
    // The specifications it collects
    this._specs = specifications;
    // The currently active namespace
    this._currentNs = '';
    // The currently active grammar version
    this._currentGrammarVersion = '';
    // The currently active content profile definition
    this._currentDef = null;
    // The currently active content profile rule
    this._currentRule = null;
  }

  get specifications() { return this._specs; }

  importFile(file) {
    // Setup a child logger to associate logs with the current file
    const lastLogger = logger;
    logger = rootLogger.child({ file: file });
    // 01004, 'Start importing content profile file',,
    logger.debug('01004');
    try {
      const errListener = new SHRErrorListener(logger);
      const chars = new FileStream(file);
      const lexer = new SHRContentProfileLexer(chars);
      lexer.removeErrorListeners();
      lexer.addErrorListener(errListener);
      const tokens  = new CommonTokenStream(lexer);
      const parser = new SHRContentProfileParser(tokens);
      parser.removeErrorListeners();
      parser.addErrorListener(errListener);
      parser.buildParseTrees = true;
      const tree = parser.doc();
      const walker = new ParseTreeWalker();
      walker.walk(this, tree);
    } finally {
      // 01005, 'Done importing content profile file',,
      logger.debug('01005');
      this.logger = lastLogger;
    }
  }

  enterDoc(ctx) {
    // set grammar version
    const version = ctx.docHeader().version();
    const major = parseInt(version.WHOLE_NUMBER()[0], 10);
    const minor = parseInt(version.WHOLE_NUMBER()[1], 10);
    this._currentGrammarVersion = new Version(major, minor);

    // 01006, 'Entered content profile file',,
    logger.debug('01006');
  }

  exitDoc(ctx) {
    // clear current namespace, current content, current rule, and grammar version
    // 01007, 'Exiting content profile file',,
    logger.debug('01007');
    this._currentNs = null;
    this._currentDef = null;
    this._currentRule = null;
    this._currentGrammarVersion = null;
  }

  enterNamespaceHeader(ctx) {
    // set current namespace
    this._currentNs = ctx.namespace().getText();
  }

  enterNamespaceFlag(ctx) {
    const noProfile = (ctx.KW_NO_PROFILE() != null);
    const primaryProfile = (ctx.KW_ALL_PRIMARY() != null);
    let warnAbstractOrElement = false;
    for (const de of this._specs.dataElements.byNamespace(this._currentNs)) {
      if (de.isEntry || de.isGroup) {
        this._currentDef = new ContentProfile(de.identifier);
        this._currentDef.grammarVersion = this._currentGrammarVersion;
        // Create new rule, apply it in enterHeaderFlag function
        this._currentRule = new ContentProfileRule();
        this._currentRule.noProfile = noProfile;
        this._currentRule.primaryProfile = primaryProfile;
        this._currentDef.addRule(this._currentRule);
        this._specs.contentProfiles.add(this._currentDef);
      } else {
        warnAbstractOrElement = true;
      }
    }
    if (warnAbstractOrElement) {
      // 01030, 'Namespace level content profile flag(s) for namespace ${namespace} only apply to Entries or Groups.',,
      logger.warn({ namespace: this._currentNs } ,'01030');
    }
  }

  enterContentDef(ctx) {
    // Check to see if Entry/Group has flags. Currently only NP
    if (ctx.headerFlags()) {
      const pathStr = ctx.contentHeader().simpleName().getText();
      const identifier = new Identifier(this._currentNs, pathStr);
      this._currentDef = new ContentProfile(identifier);
      this._currentDef.grammarVersion = this._currentGrammarVersion;
      // Create new rule, apply it in enterHeaderFlag function
      this._currentRule = new ContentProfileRule();
    }
    else {
      const pathStr = ctx.contentHeader().simpleName().getText();
      const identifier = new Identifier(this._currentNs, pathStr);
      this._currentDef = new ContentProfile(identifier);
      this._currentDef.grammarVersion = this._currentGrammarVersion;
      this._currentRule = new ContentProfileRule();
      this._currentRule.primaryProfile = true;
      this._currentDef.addRule(this._currentRule);
    }
  }

  enterHeaderFlag(ctx) {
    if (this._currentRule) {
      this._currentRule.noProfile = (ctx.KW_NO_PROFILE() != null);
      if (this._currentRule.noProfile) this._currentRule.primaryProfile = false;
      this._currentDef.addRule(this._currentRule);
    }
  }

  enterCpRule(ctx) {
    // find identifier for each data element in path,
    // then create and set current rule with that path

    const pathStr = ctx.simpleOrPathName().getText();
    const names = pathStr.split('.');
    let path = [];
    let currentElement = this._specs.dataElements.findByIdentifier(this._currentDef.identifier);

    if (currentElement) {
      for (const name of names) {
        let parentElements = this.getRecursiveBasedOns(currentElement.identifier);
        if (PRIMITIVES.includes(name)) {
          path.push(new PrimitiveIdentifier(name));
          break;
        } else if (name === 'Value' || name === '_Value') {
          path.push(new Identifier('', '_Value'));

          // find value from self or most recent ancestor
          let value = null;
          for (const id of parentElements) {
            const el = this._specs.dataElements.findByIdentifier(id);
            value = el ? el.value : null;

            if (value) {
              break;
            }
          }

          if (value && !(value instanceof ChoiceValue)) {
            currentElement = this._specs.dataElements.findByIdentifier(value.effectiveIdentifier);
          } else {
            break; // Exit loop to reach error condition below
          }
        } else {
          // Collect fields from current elements and all parents
          let fields = new Map();
          for (const id of parentElements) {
            const el = this._specs.dataElements.findByIdentifier(id);
            [el.value, ...el.fields].forEach(field => {
              const key = (field && field.identifier) ? field.identifier : 'value';
              if (field && !fields.has(key)) fields.set(key, field);
            });
          }

          let value = Array.from(fields.values()).find(field => {
            if (field instanceof IdentifiableValue) {
              // match name on effectiveIdentifier since CP requires author to use constrained type name
              return field.effectiveIdentifier.name === name;
            } else if (field instanceof ChoiceValue) {
              // match name on one of the choice option's effectiveIdentifier
              return field.aggregateOptions.some(o => o.effectiveIdentifier && o.effectiveIdentifier.name === name);
            }

            return false;
          });

          let element;
          if (value && value.effectiveIdentifier) {
            element = this._specs.dataElements.findByIdentifier(value.effectiveIdentifier);
          }

          if (element) {
            path.push(element.identifier);
            currentElement = element;
          } else {
            break; // Exit loop to reach error condition below
          }
        }
      }
    } else {
      // 11037, 'Definition not found for data element in content profile path: ${cpProfilePath}', 'Unknown', 'errorNumber'
      logger.error({ cpProfilePath: this._currentDef.identifier.fqn }, '11037');
    }

    if (path.length === names.length) {
      this._currentRule = new ContentProfileRule(path);
    } else {
      // TODO: We may be able to help the author by suggesting fixes when the problem is that they referred to the old identifier instead of the effectiveIdentifier.
      // This will require some rework of the above code to detect and remember this situation.
      // 11036, 'Path not found for ${identifier}: ${path}', 'Unknown', 'errorNumber'
      logger.error({ identifier: this._currentDef.identifier.fqn, path: pathStr }, '11036');
    }
  }

  enterFlag(ctx) {
    if (this._currentRule) {
      this._currentRule.mustSupport = (ctx.KW_MUST_SUPPORT() != null);
      this._currentDef.addRule(this._currentRule);
    }
  }

  exitCpRule(ctx) {
    this._currentRule = null;
  }

  exitContentDef(ctx) {
    if (ctx.headerFlags()) {
      this._currentRule = null;
    }
    this._specs.contentProfiles.add(this._currentDef);
    this._currentDef = null;
  }

  // NOTE: This function "borrowed" from shr-expand
  getRecursiveBasedOns(identifier, alreadyProcessed = []) {
    // If it's primitive or we've already processed this one, don't go further (avoid circular dependencies)
    if (identifier.isPrimitive || alreadyProcessed.some(id => id.equals(identifier))) {
      return alreadyProcessed;
    }

    // We haven't processed it, so look it up
    const element = this._specs.dataElements.findByIdentifier(identifier);
    if (typeof element === 'undefined') {
      // 11048, 'Cannot resolve element definition for ${elementFqn}', 'Unknown', 'errorNumber'
      logger.error({ elementFqn: identifier.fqn }, '11048');
      return alreadyProcessed;
    }
    // Add it to the already processed list (again, to avoid circular dependencies)
    alreadyProcessed.push(identifier);
    // Now recursively get the BasedOns for each of the BasedOns
    for (const basedOn of element.basedOn) {
      alreadyProcessed = this.getRecursiveBasedOns(basedOn, alreadyProcessed);
    }

    return alreadyProcessed;
  }
}

module.exports = {ContentProfileImporter, setLogger};
