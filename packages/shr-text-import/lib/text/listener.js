//const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {SHRParser} = require('./parsers/SHRParser');
const {Namespace, DataElement, Concept, Cardinality, Identifier, IdentifiableValue, RefValue, PrimitiveIdentifier, ChoiceValue, IncompleteValue, ValueSetConstraint, CodeConstraint, TypeConstraint, ChildCardConstraint, TBD, PRIMITIVES} = require('../models');

class Importer extends SHRParserListener {
  constructor(preprocessedData) {
    super();
    // The current file being parsed -- useful for error messages
    this._currentFile = '';
    // The preprocessed data indicating valid elements and vocabularies
    this._preprocessedData = preprocessedData;
    // The map of namespace to elements
    this._nsMap = {};
    // The currently active namespace
    this._currentNs = '';
    // The external namespaces it "uses"
    this._usesNs = [];
    // The currently active definition (DataElement)
    this._currentDef = null;
    // The accumulated errors
    this._errors = [];
  }

  set currentFile(file) { this._currentFile = file; }
  get errors() { return this._errors; }

  enterDataDefsDoc(ctx) {
    const ns = ctx.dataDefsHeader().namespace().getText();
    this._currentNs = ns;
    if (typeof this._nsMap[ns] == 'undefined') {
      this._nsMap[ns] = new Namespace(ns);
    }
  }

  exitDataDefsDoc(ctx) {
    // clear current namespace and uses namespaces
    this._currentNs = '';
    this._usesNs = [];
  }

  enterUsesStatement(ctx) {
    this._usesNs = ctx.namespace().map(ns => { return ns.getText(); });
  }

  enterElementDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.elementHeader().simpleName().getText());
    this._currentDef = new DataElement(id);
  }

  exitElementDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterEntryDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.entryHeader().simpleName().getText());
    this._currentDef = new DataElement(id, true);
  }

  exitEntryDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterBasedOnProp(ctx) {
    this._currentDef.addBasedOn(this.resolveToIdentifier(ctx.simpleOrFQName().getText()));
  }

  enterDescriptionProp(ctx) {
    if (ctx.parentCtx instanceof SHRParser.ValuesetPropContext) {
      // Skip this -- currently unsupported
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
      this._currentDef.addField(choice);
      return;
    }
    const val = this.processCountedField(ctx.countedField()[0]);
    this._currentDef.addField(val);
  }

  processCountedField(ctx) {
    return this.processCountAndTypes(ctx.count(), ctx.fieldType());
  }

  processCountAndTypes(countCtx, typeCtxArr) {
    const [min, max] = this.getMinMax(countCtx);
    if (typeCtxArr.length > 1) {
      const value = new ChoiceValue();
      for (const t of typeCtxArr) {
        value.addOption(this.processType(t, 1, 1));
      }
      value.setMinMax(min, max);
      return value;
    }
    return this.processType(typeCtxArr[0], min, max);
  }

  processType(ctx, min, max) {
    if (ctx.elementWithConstraint()) {
      const ewc = ctx.elementWithConstraint();
      let value = new IdentifiableValue(this.resolveToIdentifier(ewc.simpleOrFQName().getText()));
      let path = [];
      if (ewc.simpleName().length > 0) {
        // This is a dotted path constraint -- so we must use an IncompleteValue
        path = ewc.simpleName().map(ctx => this.resolveToIdentifier(ctx.getText()));
        value = new IncompleteValue(value.identifier);
        value.addConstraint(new ChildCardConstraint(new Cardinality(min, max), path));
      } else {
        value.setMinMax(min, max);
      }
      const cst = ewc.elementConstraint();
      // TODO: Handle other constraint types
      if (cst.elementTypeConstraint()) {
        const newIdentifier = this.resolveToIdentifier(cst.elementTypeConstraint().simpleOrFQName().getText());
        value.addConstraint(new TypeConstraint(newIdentifier, path));
      } else if (cst.elementCodeVSConstraint()) {
        const codeFromVS = cst.elementCodeVSConstraint().codeFromVS();
        const codeIdentifier = this.resolveCodeFromVSIdentifier(codeFromVS);
        const vs = this.resolveCodeFromVSValueSet(codeFromVS);
        value.addConstraint(new ValueSetConstraint(vs, [...path, codeIdentifier]));
      } else if (cst.elementCodeValueConstraint()) {
        const code = this.processFullyQualifiedCode(cst.elementCodeValueConstraint().fullyQualifiedCode());
        value.addConstraint(new CodeConstraint(code, path));
      } else if (cst.elementWithUnitsConstraint()) {
        const code = this.processFullyQualifiedCode(cst.elementWithUnitsConstraint().fullyQualifiedCode());
        value.addConstraint(new CodeConstraint(code, [...path, new Identifier('shr.core', 'UnitOfMeasure'), new Identifier('shr.core', 'Coding')]));
      }
      return value;
    }

    var value;
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
    value.setMinMax(min, max);
    return value;
  }

  resolveCodeFromVSIdentifier(codeFromVS) {
    if (codeFromVS.KW_CODING_FROM()) {
      return this.resolveToIdentifier('Coding');
    }
    return new PrimitiveIdentifier('code');
  }

  resolveCodeFromVSValueSet(codeFromVS) {
    let vs = codeFromVS.valueset().getText();
    if (codeFromVS.valueset().PATH_URL() || codeFromVS.valueset().simpleName()) {
      var path, name;
      if (codeFromVS.valueset().PATH_URL()) {
        [path, name] =  codeFromVS.valueset().PATH_URL().getText().split('/', 2);
      } else {
        path = 'default';
        name = codeFromVS.valueset().simpleName().getText();
      }
      const resolution = this._preprocessedData.resolvePath(path, this._currentNs, ...this._usesNs);
      if (resolution.error) {
        this.addError(resolution.error);
      }
      if (resolution.url) {
        vs = `${resolution.url}/${name}`;
      }
    }
    return vs;
  }

  processFullyQualifiedCode(ctx) {
    var cs;
    const csAlias = ctx.ALL_CAPS().getText();
    const resolution = this._preprocessedData.resolveVocabulary(csAlias, this._currentNs, ...this._usesNs);
    if (resolution.error) {
      this.addError(resolution.error);
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

  resolveToIdentifier(ref) {
    const lastDot = ref.lastIndexOf('.');
    if (lastDot != -1) {
      const ns = ref.substr(0, lastDot);
      const name = ref.substr(lastDot+1);
      const resolution = this._preprocessedData.resolveDefinition(name, ns);
      if (resolution.error) {
        this.addError(resolution.error);
      }
      return new Identifier(ns, name);
    }

    // No specified namespace -- is either primitive or something we need to resolve
    if (PRIMITIVES.includes(ref)) {
      return new PrimitiveIdentifier(ref);
    }
    var ns;
    const resolution = this._preprocessedData.resolveDefinition(ref, this._currentNs, ...this._usesNs);
    if (resolution.error) {
      this.addError(resolution.error);
      ns = resolution.namespace ? resolution.namespace: this._currentNs;
    } else {
      ns = resolution.namespace;
    }
    return new Identifier(ns, ref);
  }

  pushCurrentDefinition() {
    this._nsMap[this._currentNs].addDefinition(this._currentDef);
    this._currentDef = null;
  }

  addError(err) {
    this._errors.push(`${this._currentFile}: ${err}`);
  }

  namespaces() {
    return Object.keys(this._nsMap).map(key => this._nsMap[key]);
  }
}

function stripDelimitersFromToken(tkn) {
  const str = tkn.getText();
  // TODO: Also fix escaped double-quotes, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

module.exports = {Importer};