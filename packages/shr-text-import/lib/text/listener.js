//const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {Namespace, DataElement, Concept, Identifier, Field, Value, CodeValue, RefValue, PrimitiveIdentifier, QuantifiedValue, ChoiceValue, PRIMITIVES} = require('../models');

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
    this._currentDef.description = stripDelimitersFromToken(ctx.STRING());
  }

  enterConcepts(ctx) {
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
        choice.addOption(new QuantifiedValue(this.processType(ct), 1, 1));
      }
      this._currentDef.value = new Field(choice, min, max);
    } else {
      const value = this.processType(subCtx.valueType()[0]);
      this._currentDef.value = new Field(value, min, max);
    }
  }

  enterSupportingValue(ctx) {
    if (ctx.countedSupportingValue().length > 1) {
      const choice = new ChoiceValue();
      for (const csv of ctx.countedSupportingValue()) {
        choice.addOption(this.processCountedSupportingValue(csv));
      }
      this._currentDef.addElement(new Field(choice, 1, 1));
      return;
    }
    const qv = this.processCountedSupportingValue(ctx.countedSupportingValue()[0]);
    this._currentDef.addElement(new Field(qv.value, qv.min, qv.max));
  }

  processCountedSupportingValue(ctx) {
    return this.processCountAndTypes(ctx.count(), ctx.supportingValueType());
  }

  processCountAndTypes(countCtx, typeCtxArr) {
    var value;
    if (typeCtxArr.length > 1) {
      value = new ChoiceValue();
      for (const t of typeCtxArr) {
        value.addOption(new QuantifiedValue(this.processType(t), 1, 1));
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
    } else if (ctx.codeFromVS()) {
      let codeIdentifier = new PrimitiveIdentifier('code');
      if (ctx.codeFromVS().KW_CODING_FROM()) {
        codeIdentifier = this.resolveToIdentifier('Coding');
      }
      let vs = ctx.codeFromVS().valueset().getText();
      if (ctx.codeFromVS().valueset().PATH_URL() || ctx.codeFromVS().valueset().simpleName()) {
        var path, name;
        if (ctx.codeFromVS().valueset().PATH_URL()) {
          [path, name] =  ctx.codeFromVS().valueset().PATH_URL().getText().split('/', 2);
        } else {
          path = 'default';
          name = ctx.codeFromVS().valueset().simpleName().getText();
        }
        const resolution = this._preprocessedData.resolvePath(path, this._currentNs, ...this._usesNs);
        if (resolution.error) {
          this.addError(resolution.error);
        }
        if (resolution.url) {
          vs = `${resolution.url}/${name}`;
        }
      }
      return new CodeValue(codeIdentifier, vs);
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