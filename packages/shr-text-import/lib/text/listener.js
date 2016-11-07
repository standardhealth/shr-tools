const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {Namespace, Section, DataElement, Concept, Identifier, Group, Value, CodeValue, RefValue, PrimitiveIdentifier, QuantifiedValue, OrValues, PRIMITIVES} = require('../models');

class Importer extends SHRParserListener {
  constructor() {
    super();
    // The map of namespace to elements
    this._nsMap = {};
    // The currently active namespace
    this._currentNs = '';
    // The currently active definition (DataElement, Group, Section)
    this._currentDef = null;
    // The stack of parenthetical scopes
    this._scopeStack = [];
    // The vocabulary, mapping aliases to urls (string -> string)
    this._vocabMap = {};
  }

  exitNamespace(ctx) {
    if (ctx.parentCtx instanceof SHRParser.NamespaceDefContext) {
      const ns = ctx.getText();
      this._currentNs = ns;
      if (typeof this._nsMap[ns] == 'undefined') {
        this._nsMap[ns] = new Namespace(ns);
      }
    }
  }

  exitVocabularyDef(ctx) {
    this._vocabMap[ctx.ALL_CAPS().getText()] = ctx.URL().getText();
  }

  exitDataElementHeader(ctx) {
    this._currentDef = new DataElement(new Identifier(this._currentNs, ctx.simpleName().getText()));
  }

  exitDataElementDef(ctx) {
    this.pushCurrentDefinition();
  }

  exitGroupHeader(ctx) {
    this._currentDef = new Group(new Identifier(this._currentNs, ctx.simpleName().getText()));
  }

  exitGroupDef(ctx) {
    this.pushCurrentDefinition();
  }

  exitSectionHeader(ctx) {
    this._currentDef = new Section(new Identifier(this._currentNs, ctx.simpleName().getText()));
  }

  exitSectionDef(ctx) {
    this.pushCurrentDefinition();
  }

  exitDescriptionProp(ctx) {
    this._currentDef.description = stripStringToken(ctx.STRING());
  }

  exitConcept(ctx) {
    if (ctx.CODE()) {
      const csAlias = ctx.ALL_CAPS().getText();
      const code = ctx.CODE().getText().substr(1);
      this._currentDef.addConcept(new Concept(csAlias, code));
    }
  }

  enterValues(ctx) {
    if (ctx.OPEN_PAREN()) {
      // Because of how the grammar is constructed, parens only matter when there is a count
      if (ctx.count()) {
        const [min, max] = this.getMinMax(ctx.count());
        this._scopeStack.push(new QuantifiedValue(null, min, max));
      }
    } else if (ctx.KW_OR()) {
      if (this._scopeStack.length > 0) {
        const qv = this._scopeStack[this._scopeStack.length-1];
        if (!qv.value) {
          qv.value = new OrValues();
        }
      } else {
        if (!(this._currentDef.value)) {
          this._currentDef.value = new OrValues();
        }
      }
    }
  }

  exitValues(ctx) {
    if (ctx.CLOSE_PAREN()) {
      this.addCurrentValue(this._scopeStack.pop());
    } else if (ctx.value()) {
      const valueCtx = ctx.value();
      const countCtx = ctx.count();
      var value;
      if (valueCtx.primitive()) {
        value = new Value(new PrimitiveIdentifier(valueCtx.getText()));
      } else if (valueCtx.codeFromValueset()) {
        value = new CodeValue(valueCtx.codeFromValueset().valueset().getText());
      } else if (valueCtx.ref()) {
        value = new RefValue(this.resolveToIdentifier(valueCtx.ref().simpleOrFQName().getText()));
      } else if (valueCtx.simpleOrFQName()) {
        value = new Value(this.resolveToIdentifier(valueCtx.simpleOrFQName().getText()));
      }

      if (countCtx) {
        const [min, max] = this.getMinMax(countCtx);
        value = new QuantifiedValue(value, min, max);
      }

      this.addCurrentValue(value);
    }
  }

  exitCountedElement(ctx) {
    const identifier = this.resolveToIdentifier(ctx.simpleOrFQName().getText());
    const [min, max] = this.getMinMax(ctx.count());
    const qValue = new QuantifiedValue(new Value(identifier), min, max);
    if (this._currentDef instanceof Group) {
      this._currentDef.addElement(qValue);
    } else if (this._currentDef instanceof Section) {
      this._currentDef.addEntry(qValue);
    }
  }

  exitShr(ctx) {
    // Update the concepts to use the real vocab URLs instead of aliases
    const ns = this._nsMap[this._currentNs];
    for (const def of ns.definitions) {
      const concepts = def.concepts.map(concept => {
        const url = this._vocabMap[concept.codesystem];
        if (typeof url != 'undefined') {
          return new Concept(url, concept.code);
        } else {
          return concept;
        }
      });
      def.concepts = concepts;
    }
  }

  addCurrentValue(value) {
    if (this._scopeStack.length > 0) {
      const qv = this._scopeStack[this._scopeStack.length-1];
      if (value && qv.value instanceof OrValues) {
        qv.value.addValue(value);
      } else {
        qv.value = value;
      }
    } else if (this._currentDef.value instanceof OrValues) {
      this._currentDef.value.addValue(value);
    } else {
      this._currentDef.value = value;
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

  resolveToIdentifier(ref) {
    const lastDot = ref.lastIndexOf('.');
    if (lastDot != -1) {
      return new Identifier(ref.substr(0, lastDot), ref.substr(lastDot+1));
    }

    // No specified namespace -- is either primitive or in this namespace
    if (PRIMITIVES.includes(ref)) {
      return new PrimitiveIdentifier(ref);
    }
    return new Identifier(this._currentNs, ref);
  }

  pushCurrentDefinition() {
    if (this._currentDef instanceof Section) {
      this._nsMap[this._currentNs].addSection(this._currentDef);
    } else {
      this._nsMap[this._currentNs].addDefinition(this._currentDef);
    }
    this._currentDef = null;
  }

  namespaces() {
    return Object.keys(this._nsMap).map(key => this._nsMap[key]);
  }
}

function stripStringToken(tkn) {
  const str = tkn.getText();
  // TODO: Also fix escaped double-quotes, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

module.exports = {Importer};