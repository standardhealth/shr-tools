const bunyan = require('bunyan');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRLexer} = require('./parsers/SHRLexer');
const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {SHRErrorListener} = require('./common.js');
const {Specifications, Version, Namespace, DataElement, Concept, Cardinality, Identifier, IdentifiableValue, RefValue, PrimitiveIdentifier, ChoiceValue, IncompleteValue, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, CardConstraint, TBD, PRIMITIVES} = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

class Importer extends SHRParserListener {
  constructor(preprocessedData, specifications = new Specifications()) {
    super();
    // The preprocessed data indicating valid elements and vocabularies
    this._preprocessedData = preprocessedData;
    // The specifications it collects
    this._specs = specifications;
    // The currently active namespace
    this._currentNs = '';
    // The external namespaces it "uses"
    this._usesNs = [];
    // The currently active grammar version
    this._currentGrammarVersion = '';
    // The currently active definition (DataElement)
    this._currentDef = null;
  }

  get specifications() { return this._specs; }

  importFile(file) {
    // Setup a child logger to associate logs with the current file
    const lastLogger = logger;
    logger = rootLogger.child({ file: file });
    logger.debug('Start importing data elements file');
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
      logger.debug('Done importing data elements file');
      this.logger = lastLogger;
    }
  }

  enterDataDefsDoc(ctx) {
    // Process the namespace
    const ns = ctx.dataDefsHeader().namespace().getText();
    this._currentNs = ns;
    let nsDef = this._specs.namespaces.find(ns);
    if (typeof nsDef === 'undefined') {
      nsDef = new Namespace(ns);
      this._specs.namespaces.add(nsDef);
    }
    if (ctx.descriptionProp() && typeof nsDef.description === 'undefined') {
      nsDef.description = stripDelimitersFromToken(ctx.descriptionProp().STRING());
    }

    // Process the version
    const version = ctx.dataDefsHeader().version();
    const major = parseInt(version.WHOLE_NUMBER()[0], 10);
    const minor = parseInt(version.WHOLE_NUMBER()[1], 10);
    this._currentGrammarVersion = new Version(major, minor);

    logger.debug({shrId: ns, version: this._currentGrammarVersion.toString()}, 'Start importing data element namespace');
  }

  exitDataDefsDoc(ctx) {
    // clear current namespace, uses namespaces, and grammar version
    logger.debug({shrId: this._currentNs}, 'Done importing data element namespace');
    this._currentNs = '';
    this._usesNs = [];
    this._currentGrammarVersion = null;
  }

  enterUsesStatement(ctx) {
    this._usesNs = ctx.namespace().map(ns => { return ns.getText(); });
  }

  enterElementDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.elementHeader().simpleName().getText());
    this._currentDef = new DataElement(id).withGrammarVersion(this._currentGrammarVersion);

    // Setup a child logger to associate logs with the current element
    const lastLogger = logger;
    logger = logger.child({ shrId: id.fqn });
    logger.parent = lastLogger;
    logger.debug('Start importing data element');
  }

  exitElementDef(ctx) {
    try {
      this.pushCurrentDefinition();
    } finally {
      logger.debug('Done importing data element');
      logger = logger.parent;
    }
  }

  enterEntryDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.entryHeader().simpleName().getText());
    this._currentDef = new DataElement(id, true).withGrammarVersion(this._currentGrammarVersion);
  }

  exitEntryDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterBasedOnProp(ctx) {
    this._currentDef.addBasedOn(this.resolveToIdentifierOrTBD(ctx));
  }

  enterDescriptionProp(ctx) {
    if (ctx.parentCtx instanceof SHRParser.ValuesetPropContext) {
      // Skip this -- currently unsupported
      return;
    } else if (ctx.parentCtx instanceof SHRParser.DataDefsDocContext) {
      // Skip this -- already handled elsewhere
      return;
    }
    this._currentDef.description = stripDelimitersFromToken(ctx.STRING());
  }

  enterConcepts(ctx) {
    if (ctx.parentCtx.parentCtx instanceof SHRParser.ValuesetPropContext) {
      // Skip this -- currently unsupported
      return;
    }
    for (const fqc of ctx.fullyQualifiedCode()) {
      this._currentDef.addConcept(this.processFullyQualifiedCode(fqc));
    }
  }

  enterValue(ctx) {
    let min = 1, max = 1;
    var subCtx;
    if (ctx.countedValue()) {
      subCtx = ctx.countedValue();
      [min, max] = this.getMinMax(subCtx.count());
    } else {
      subCtx = ctx.uncountedValue();
    }

    if (subCtx.valueType().length > 1) {
      const choice = new ChoiceValue();
      for (const ct of subCtx.valueType()) {
        choice.addOption(this.processType(ct, 1, 1));
      }
      choice.setMinMax(min, max);
      this._currentDef.value = choice;
    } else {
      this._currentDef.value = this.processType(subCtx.valueType()[0], min, max);
    }
  }

  enterField(ctx) {
    if (ctx.countedField().length > 1) {
      const choice = new ChoiceValue();
      for (const csv of ctx.countedField()) {
        choice.addOption(this.processCountedField(csv));
      }
      choice.setMinMax(1, 1);
      this.addFieldToCurrentDef(choice);
      return;
    }
    const val = this.processCountedField(ctx.countedField()[0]);
    this.addFieldToCurrentDef(val);
  }

  // addFieldToCurrentDef contains special logic to handle IncompleteValues.  If an IncompleteValue matches an already
  // existing field, it will just apply the constraints to that field.  If no matching field is found, it will be pushed
  // to the fields as-is -- and when fields are added after, they will be checked against any IncompleteValues
  // and resolved as appropriate.  Note that constraints on the Value can also be added by passing an IncompleteValue
  // matching the value's identifier to this function.
  addFieldToCurrentDef(field) {
    if (field instanceof IncompleteValue) {
      // Search through the current def's value and fields to see if this matches an already existing value or field
      for (const el of [this._currentDef.value, ...this._currentDef.fields]) {
        if (el && el.identifier && el.identifier.equals(field.identifier)) {
          // Found a match!  Just add the constraints to the existing one!
          for (const cst of field.constraints) {
            el.addConstraint(cst);
          }
          return;
        }
      }
    }

    // Search through the fields to see if there are any IncompleteValues we can now resolve
    for (let i=0; i < this._currentDef.fields.length; i++) {
      const el = this._currentDef.fields[i];
      if (el instanceof IncompleteValue && field.identifier && el.identifier.equals(field.identifier)) {
        // Found a match!  Add the constraints to the field and replace the IncompleteValue
        for (const cst of el.constraints) {
          field.addConstraint(cst);
        }
        this._currentDef.fields[i] = field;
        return;
      }
    }
    this._currentDef.addField(field);
  }

  processCountedField(ctx) {
    return this.processCountAndTypes(ctx.count(), ctx.fieldType());
  }

  processCountAndTypes(countCtx, typeCtxArr) {
    let min, max;
    if (countCtx) {
      [min, max] = this.getMinMax(countCtx);
    }
    if (typeCtxArr.length > 1) {
      const value = new ChoiceValue();
      for (const t of typeCtxArr) {
        value.addOption(this.processType(t, 1, 1));
      }
      if (typeof min !== 'undefined') {
        value.setMinMax(min, max);
      }
      return value;
    }
    return this.processType(typeCtxArr[0], min, max);
  }

  processType(ctx, min, max) {
    if (ctx.elementWithConstraint()) {
      const ewc = ctx.elementWithConstraint();
      let value;
      let path = [];
      if (ewc.simpleOrFQName()) {
        value = new IdentifiableValue(this.resolveToIdentifier(ewc.simpleOrFQName().getText()));
        if (typeof min !== 'undefined') {
          value.setMinMax(min, max);
        }
      } else if (ewc.primitive()) {
        value = new IdentifiableValue(new PrimitiveIdentifier(ewc.primitive().getText()));
        if (typeof min !== 'undefined') {
          value.setMinMax(min, max);
        }
      } else {
        // This is a dotted path constraint -- so we must use an IncompleteValue
        const ep = ewc.elementPath();
        value = new IncompleteValue(this.resolveToIdentifier(ep.simpleOrFQName().getText()));
        if (ep.simpleName()) {
          path = ep.simpleName().map(ctx => this.resolveToIdentifier(ctx.getText()));
        }
        if (ep.primitive()) {
          path.push(new PrimitiveIdentifier(ep.primitive().getText()));
        }
        if (typeof min !== 'undefined') {
          value.addConstraint(new CardConstraint(new Cardinality(min, max), path));
        }
      }

      if (ewc.elementConstraint()) {
        const cst = ewc.elementConstraint();
        if (cst.elementTypeConstraint()) {
          const newIdentifier = this.resolveToIdentifierOrTBD(cst.elementTypeConstraint());
          const onValue = cst.elementTypeConstraint().KW_VALUE_IS_TYPE() ? true : false;
          value.addConstraint(new TypeConstraint(newIdentifier, path, onValue));
        } else if (cst.elementCodeVSConstraint()) {
          const codeFromVS = cst.elementCodeVSConstraint().codeFromVS();
          const codeIdentifier = this.resolveCodeFromVSIdentifier(codeFromVS);
          const vs = this.resolveCodeFromVSValueSet(codeFromVS);
          value.addConstraint(new ValueSetConstraint(vs, [...path, codeIdentifier]));
        } else if (cst.elementCodeValueConstraint()) {
          const code = this.processCodeOrFQCode(cst.elementCodeValueConstraint().codeOrFQCode());
          value.addConstraint(new CodeConstraint(code, path));
        } else if (cst.elementWithUnitsConstraint()) {
          const code = this.processFullyQualifiedCode(cst.elementWithUnitsConstraint().fullyQualifiedCode());
          value.addConstraint(new CodeConstraint(code, [...path, new Identifier('shr.core', 'Units'), new Identifier('shr.core', 'Coding')]));
        } else if (cst.elementIncludesCodeValueConstraint()) {
          for (const codeOrFQCode of cst.elementIncludesCodeValueConstraint().codeOrFQCode()) {
            const code = this.processCodeOrFQCode(codeOrFQCode);
            value.addConstraint(new IncludesCodeConstraint(code, path));
          }
        } else if (cst.elementBooleanConstraint()) {
          const b = cst.elementBooleanConstraint().KW_TRUE() ? true : false;
          value.addConstraint(new BooleanConstraint(b, path));
        }
      }
      return value;
    }

    let value;
    if (ctx.simpleOrFQName()) {
      value = new IdentifiableValue(this.resolveToIdentifier(ctx.simpleOrFQName().getText()));
    } else if (ctx.ref()) {
      value = new RefValue(this.resolveToIdentifier(ctx.ref().simpleOrFQName().getText()));
    } else if (ctx.tbd()) {
      if (ctx.tbd().STRING()) {
        value = new TBD(stripDelimitersFromToken(ctx.tbd().STRING()));
      } else {
        value = new TBD();
      }
    } else if (ctx.primitive()) {
      value = new IdentifiableValue(new PrimitiveIdentifier(ctx.getText()));
    } else if (ctx.codeFromVS()) {
      const codeIdentifier = this.resolveCodeFromVSIdentifier(ctx.codeFromVS());
      const vs = this.resolveCodeFromVSValueSet(ctx.codeFromVS());
      value = new IdentifiableValue(codeIdentifier);
      value.addConstraint(new ValueSetConstraint(vs));
    }
    if (typeof min !== 'undefined') {
      value.setMinMax(min, max);
    }
    return value;
  }

  resolveCodeFromVSIdentifier(codeFromVS) {
    if (codeFromVS.KW_CODING_FROM()) {
      return this.resolveToIdentifier('Coding');
    } else if (codeFromVS.KW_CODEABLECONCEPT_FROM()) {
      return this.resolveToIdentifier('CodeableConcept');
    }
    return new PrimitiveIdentifier('code');
  }

  resolveCodeFromVSValueSet(codeFromVS) {
    let vs = codeFromVS.valueset().getText();
    if (codeFromVS.valueset().PATH_URL()) {
      const [path, name] =  codeFromVS.valueset().PATH_URL().getText().split('/', 2);
      const resolution = this._preprocessedData.resolvePath(path, this._currentNs, ...this._usesNs);
      if (resolution.error) {
        logger.error(resolution.error);
      }
      if (resolution.url) {
        vs = `${resolution.url}/${name}`;
      }
    } else if (codeFromVS.valueset().simpleName()) {
      const name = codeFromVS.valueset().simpleName().getText();
      // Look it up in this namespace's value set definitions
      let found = false;
      for (const ns of [this._currentNs, ...this._usesNs]) {
        const vsDef = this._specs.valueSets.find(ns, name);
        if (typeof vsDef !== 'undefined') {
          vs = vsDef.url;
          found = true;
          break;
        }
      }
      if (!found) {
        logger.error('Unable to resolve value set reference: %s', name);
        vs = `urn:tbd:${name}`;
      }
    } else if (codeFromVS.valueset().tbd()) {
      if (codeFromVS.valueset().tbd().STRING()) {
        vs = `urn:tbd:${stripDelimitersFromToken(codeFromVS.valueset().tbd().STRING())}`;
      } else {
        vs = 'urn:tbd';
      }
    }
    return vs;
  }

  processCodeOrFQCode(ctx) {
    var code;
    if (ctx.fullyQualifiedCode()) {
      code = this.processFullyQualifiedCode(ctx.fullyQualifiedCode());
    } else if (ctx.code()) {
      code = new Concept(null, ctx.code().CODE().getText().substr(1)); // substr to skip the '#'
      if (ctx.code().STRING()) {
        code.display = stripDelimitersFromToken(ctx.code().STRING());
      }
    }
    return code;
  }

  processFullyQualifiedCode(ctx) {
    if (ctx.ALL_CAPS()) {
      let cs;
      const csAlias = ctx.ALL_CAPS().getText();
      const resolution = this._preprocessedData.resolveVocabulary(csAlias, this._currentNs, ...this._usesNs);
      if (resolution.error) {
        logger.error(resolution.error);
        cs = resolution.url ? resolution.url : csAlias;
      } else {
        cs = resolution.url;
      }
      const code = ctx.code().CODE().getText().substr(1); // substr to skip the '#'
      const concept = new Concept(cs, code);
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

  getMinMax(countCtx) {
    const cards = countCtx.WHOLE_NUMBER();
    const min = parseInt(cards[0].getText(), 10);
    var max;
    if (cards.length == 2) {
      max = parseInt(cards[1].getText(), 10);
    }
    return [min, max];
  }

  resolveToIdentifierOrTBD(ctx) {
    if (ctx.simpleOrFQName()) {
      return this.resolveToIdentifier(ctx.simpleOrFQName().getText());
    } else if (ctx.tbd() && ctx.tbd().STRING()) {
      return new TBD(stripDelimitersFromToken(ctx.tbd().STRING()));
    } else {
      return new TBD();
    }
  }

  resolveToIdentifier(ref) {
    const lastDot = ref.lastIndexOf('.');
    if (lastDot != -1) {
      const ns = ref.substr(0, lastDot);
      const name = ref.substr(lastDot+1);
      const resolution = this.resolveDefinition(name, ns);
      if (resolution.error) {
        logger.error(resolution.error);
      }
      return new Identifier(ns, name);
    }

    // No specified namespace -- is either primitive or something we need to resolve
    if (PRIMITIVES.includes(ref)) {
      return new PrimitiveIdentifier(ref);
    }
    var ns;
    const resolution = this.resolveDefinition(ref, this._currentNs, ...this._usesNs);
    if (resolution.error) {
      logger.error(resolution.error);
      ns = resolution.namespace ? resolution.namespace: 'unknown';
    } else {
      ns = resolution.namespace;
    }
    return new Identifier(ns, ref);
  }

  resolveDefinition(name, ...namespace) {
    // First try in the specifications (in case specifications were passed into the listener)
    const result = {};
    const foundNamespaces = [];
    for (const ns of namespace) {
      if (this._specs._dataElements.find(ns, name)) {
        if (!result.hasOwnProperty('namespace')) {
          result['namespace'] = ns;
        }
        foundNamespaces.push(ns);
      }
    }
    if (foundNamespaces.length > 0) {
      // We found it in specifications, but should be sure it's not also lurking in other namespaces that were preprocessed
      const otherNamespaces = namespace.filter(ns => foundNamespaces.some(ns2 => ns != ns2));
      for (const otherNS of otherNamespaces) {
        const resolution = this._preprocessedData.resolveDefinition(name, otherNS);
        if (typeof resolution.namespace !== 'undefined') {
          foundNamespaces.push(resolution.ns);
        }
      }
      if (foundNamespaces.length > 1) {
        result['error'] = `Found conflicting definitions for ${name} in multiple namespaces: ${foundNamespaces}`;
      }
      return result;
    }
    // Didn't find it in specifications, so use the preprocessed data
    return this._preprocessedData.resolveDefinition(name, ...namespace);
  }

  pushCurrentDefinition() {
    this._specs.dataElements.add(this._currentDef);
    this._currentDef = null;
  }
}

function stripDelimitersFromToken(tkn) {
  const str = tkn.getText();
  // TODO: Also fix escaped double-quotes, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

module.exports = {Importer, setLogger};