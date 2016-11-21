//const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {Namespace, DataElement, Concept, Identifier, Group, Value, CodeFromValueSetValue, CodeFromAncestorValue, RefValue, PrimitiveIdentifier, QuantifiedValue, OrValues, PRIMITIVES} = require('../models');

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
    // The currently active definition (DataElement, Group)
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
    if (ctx.singleValue()) {
      this._currentDef = new DataElement(id);
    } else {
      this._currentDef = new Group(id);
    }
  }

  exitElementDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterEntryDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.entryHeader().simpleName().getText());
    if (ctx.singleValue()) {
      this._currentDef = new DataElement(id, true);
    } else {
      this._currentDef = new Group(id, true);
    }
  }

  exitEntryDef(ctx) {
    this.pushCurrentDefinition();
  }

  enterDescriptionProp(ctx) {
    this._currentDef.description = stripDelimitersFromToken(ctx.STRING());
  }

  enterConcepts(ctx) {
    for (const fqc of ctx.fullyQualifiedCode()) {
      this._currentDef.addConcept(this.processFullyQualifiedCode(fqc));
    }
  }

  enterSingleValue(ctx) {
    if (ctx.countedType().length > 1) {
      const or = new OrValues();
      for (const ct of ctx.countedType()) {
        or.addValue(this.processCountedType(ct));
      }
      this._currentDef.value = or;
    } else {
      const value = this.processCountedType(ctx.countedType()[0]);
      if (value.max == 1) {
        this._currentDef.value = value.value; // no need for QuantifiedValue here
      } else {
        this._currentDef.value = value;
      }
    }
  }

  processCountedType(ctx) {
    return this.processCountAndTypes(ctx.count(), ctx.types().type());
  }

  enterMultiValue(ctx) {
    for (const ce of ctx.countedElements()) {
      this._currentDef.addElement(this.processCountedElements(ce));
    }
  }

  processCountedElements(ctx) {
    if (ctx.countedElement().length > 1) {
      const or = new OrValues();
      for (const ce of ctx.countedElement()) {
        or.addValue(this.processCountedElement(ce));
      }
      return or;
    } else {
      return this.processCountedElement(ctx.countedElement()[0]);
    }
  }

  processCountedElement(ctx) {
    return this.processCountAndTypes(ctx.count(), ctx.elements().element());
  }

  processCountAndTypes(countCtx, typeCtxArr) {
    var value;
    if (typeCtxArr.length > 1) {
      value = new OrValues();
      for (const t of typeCtxArr) {
        value.addValue(this.processType(t));
      }
    } else {
      value = this.processType(typeCtxArr[0]);
    }
    const [min, max] = this.getMinMax(countCtx);
    return new QuantifiedValue(value, min, max);
  }

  processType(ctx) {
    if (ctx.simpleOrFQName()) {
      return new Value(this.resolveToIdentifier(ctx.simpleOrFQName().getText()));
    } else if (ctx.ref()) {
      return new RefValue(this.resolveToIdentifier(ctx.ref().simpleOrFQName().getText()));
    } else if (ctx.primitive()) {
      return new Value(new PrimitiveIdentifier(ctx.getText()));
    } else if (ctx.codeConstraint()) {
      if (ctx.codeConstraint().codeFromValueset()) {
        const vs = ctx.codeConstraint().codeFromValueset().valueset().getText();
        return new CodeFromValueSetValue(vs);
      } else {
        const fqn = ctx.codeConstraint().codeDescendent().fullyQualifiedCode();
        return new CodeFromAncestorValue(this.processFullyQualifiedCode(fqn));
      }
    }
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
    if (ctx.code().EXTRA_INFO()) {
      concept.label = stripDelimitersFromToken(ctx.code().EXTRA_INFO());
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
  // TODO: Also fix escaped double-quotes or brackets, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

module.exports = {Importer};