const antlr4 = require('antlr4/index');
const {SHRParser} = require('./parsers/SHRParser');
const {SHRParserListener} = require('./parsers/SHRParserListener');
const {Namespace, DataElement, Entry, Component, Identifier, PrimitiveIdentifier, QuantifiedIdentifier, PRIMITIVES} = require('./models')

class SHR2JS extends SHRParserListener {
    constructor() {
        super();
        // The map of namespace to elements
        this._nsMap = {};
        // The currently active namespace
        this._currentNs = "";
        // The currently active definition (data element, entry, vocabulary)
        this._currentDef = null;
    }

    exitNamespace(ctx) {
        if (ctx.parentCtx instanceof SHRParser.NamespaceDefContext) {
            let ns = ctx.getText()
            this._currentNs = ns;
            this._nsMap[ns] = new Namespace(ns)
        }
    }

    exitDataElementName(ctx) {
        if (ctx.parentCtx instanceof SHRParser.DataElementHeaderContext) {
            this._currentDef = new DataElement(new Identifier(this._currentNs, ctx.getText()));
        }
    }

    exitDataElementDef(ctx) {
        this.pushCurrentDefinition();
    }

    exitEntryName(ctx) {
        if (ctx.parentCtx instanceof SHRParser.EntryHeaderContext) {
            this._currentDef = new Entry(new Identifier(this._currentNs, ctx.getText()));
        }
    }

    exitEntryDef(ctx) {
        this.pushCurrentDefinition();
    }

    exitAnswer(ctx) {
        this._currentDef.addAnswer(this.resolveToIdentifier(ctx.getText()));
    }

    exitDescriptionProp(ctx) {
        let d = stripStringToken(ctx.STRING());
        this._currentDef.description = d;
    }

    exitCountedThing(ctx) {
        if (ctx.parentCtx && ctx.parentCtx.parentCtx instanceof SHRParser.HasPropContext) {
            let min = parseInt(ctx.WHOLE_NUMBER()[0].getText(), 10);
            var max;
            if (ctx.WHOLE_NUMBER().length > 1) {
                max = parseInt(ctx.WHOLE_NUMBER()[1].getText(), 10);
            }
            let identifier = this.resolveToIdentifier(ctx.dataElementName().getText())
            this._currentDef.addComponent(new QuantifiedIdentifier(identifier, min, max))
        }
    }

    resolveToIdentifier(ref) {
        let lastDot = ref.lastIndexOf(".");
        if (lastDot != -1) {
            return new Identifier(ref.substr(0, lastDot), ref.substr(lastDot))
        }

        // No specified namespace -- is either primitive or in this namespace
        if (PRIMITIVES.includes(ref)) {
            return new PrimitiveIdentifier(ref)
        }
        return new Identifier(this._currentNs, ref)
    }

    pushCurrentDefinition() {
        this._nsMap[this._currentNs].addElement(this._currentDef);
        this._currentDef = null;
    }

    namespaces() {
        return Object.keys(this._nsMap).map(key => this._nsMap[key]);
    }
}

function stripStringToken(tkn) {
    let str = tkn.getText()
    // TODO: Also fix escaped double-quotes, but right now, the parser seems to be screwing those up.
    return str.substr(1,str.length -2)
}

exports.SHR2JS = SHR2JS;