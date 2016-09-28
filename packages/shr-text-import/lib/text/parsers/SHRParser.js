// Generated from SHRParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRParserListener = require('./SHRParserListener').SHRParserListener;
var SHRParserVisitor = require('./SHRParserVisitor').SHRParserVisitor;

var grammarFileName = "SHRParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\61\u00de\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b",
    "\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20",
    "\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4",
    "\27\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35",
    "\4\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\3\2\3\2\3\2\3\3\3\3\3",
    "\3\3\3\3\4\3\4\3\5\6\5Q\n\5\r\5\16\5R\3\6\3\6\3\6\3\6\5\6Y\n\6\3\7\3",
    "\7\3\7\3\7\3\7\3\7\3\b\3\b\5\bc\n\b\3\t\3\t\3\t\3\t\3\n\3\n\3\13\6\13",
    "l\n\13\r\13\16\13m\3\f\3\f\3\f\3\f\3\f\3\f\3\f\5\fw\n\f\3\r\3\r\5\r",
    "{\n\r\3\16\3\16\3\16\3\16\3\17\3\17\3\20\3\20\5\20\u0085\n\20\3\21\3",
    "\21\3\21\3\21\3\22\6\22\u008c\n\22\r\22\16\22\u008d\3\23\3\23\3\23\3",
    "\23\3\24\3\24\3\24\3\24\5\24\u0098\n\24\3\25\3\25\3\25\3\25\3\26\3\26",
    "\3\26\7\26\u00a1\n\26\f\26\16\26\u00a4\13\26\3\27\3\27\3\27\3\30\3\30",
    "\3\30\3\30\3\31\3\31\3\31\3\31\3\32\3\32\3\32\7\32\u00b4\n\32\f\32\16",
    "\32\u00b7\13\32\3\33\3\33\3\33\5\33\u00bc\n\33\3\34\3\34\3\34\3\34\3",
    "\35\3\35\3\35\3\35\3\36\3\36\5\36\u00c8\n\36\3\36\3\36\3\37\3\37\3 ",
    "\3 \3!\3!\3\"\6\"\u00d3\n\"\r\"\16\"\u00d4\3#\3#\3#\3#\3#\5#\u00dc\n",
    "#\3#\2\2$\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\66",
    "8:<>@BD\2\7\3\2*+\3\2()\4\2)),,\3\2\20\37\4\2##\'\'\u00d2\2F\3\2\2\2",
    "\4I\3\2\2\2\6M\3\2\2\2\bP\3\2\2\2\nX\3\2\2\2\fZ\3\2\2\2\16`\3\2\2\2",
    "\20d\3\2\2\2\22h\3\2\2\2\24k\3\2\2\2\26v\3\2\2\2\30x\3\2\2\2\32|\3\2",
    "\2\2\34\u0080\3\2\2\2\36\u0082\3\2\2\2 \u0086\3\2\2\2\"\u008b\3\2\2",
    "\2$\u008f\3\2\2\2&\u0093\3\2\2\2(\u0099\3\2\2\2*\u009d\3\2\2\2,\u00a5",
    "\3\2\2\2.\u00a8\3\2\2\2\60\u00ac\3\2\2\2\62\u00b0\3\2\2\2\64\u00bb\3",
    "\2\2\2\66\u00bd\3\2\2\28\u00c1\3\2\2\2:\u00c7\3\2\2\2<\u00cb\3\2\2\2",
    ">\u00cd\3\2\2\2@\u00cf\3\2\2\2B\u00d2\3\2\2\2D\u00d6\3\2\2\2FG\5\4\3",
    "\2GH\5\b\5\2H\3\3\2\2\2IJ\7\3\2\2JK\7 \2\2KL\5\6\4\2L\5\3\2\2\2MN\t",
    "\2\2\2N\7\3\2\2\2OQ\5\n\6\2PO\3\2\2\2QR\3\2\2\2RP\3\2\2\2RS\3\2\2\2",
    "S\t\3\2\2\2TY\5\f\7\2UY\5\16\b\2VY\5\30\r\2WY\5\36\20\2XT\3\2\2\2XU",
    "\3\2\2\2XV\3\2\2\2XW\3\2\2\2Y\13\3\2\2\2Z[\7\4\2\2[\\\7 \2\2\\]\7(\2",
    "\2]^\7!\2\2^_\7%\2\2_\r\3\2\2\2`b\5\20\t\2ac\5\24\13\2ba\3\2\2\2bc\3",
    "\2\2\2c\17\3\2\2\2de\7\5\2\2ef\7 \2\2fg\5\22\n\2g\21\3\2\2\2hi\7*\2",
    "\2i\23\3\2\2\2jl\5\26\f\2kj\3\2\2\2lm\3\2\2\2mk\3\2\2\2mn\3\2\2\2n\25",
    "\3\2\2\2ow\5&\24\2pw\5(\25\2qw\5.\30\2rw\5\60\31\2sw\5\66\34\2tw\58",
    "\35\2uw\5:\36\2vo\3\2\2\2vp\3\2\2\2vq\3\2\2\2vr\3\2\2\2vs\3\2\2\2vt",
    "\3\2\2\2vu\3\2\2\2w\27\3\2\2\2xz\5\32\16\2y{\5\24\13\2zy\3\2\2\2z{\3",
    "\2\2\2{\31\3\2\2\2|}\7\6\2\2}~\7 \2\2~\177\5\34\17\2\177\33\3\2\2\2",
    "\u0080\u0081\t\3\2\2\u0081\35\3\2\2\2\u0082\u0084\5 \21\2\u0083\u0085",
    "\5\"\22\2\u0084\u0083\3\2\2\2\u0084\u0085\3\2\2\2\u0085\37\3\2\2\2\u0086",
    "\u0087\7\7\2\2\u0087\u0088\7 \2\2\u0088\u0089\7%\2\2\u0089!\3\2\2\2",
    "\u008a\u008c\5$\23\2\u008b\u008a\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u008b",
    "\3\2\2\2\u008d\u008e\3\2\2\2\u008e#\3\2\2\2\u008f\u0090\7&\2\2\u0090",
    "\u0091\7 \2\2\u0091\u0092\7-\2\2\u0092%\3\2\2\2\u0093\u0094\7\b\2\2",
    "\u0094\u0097\7 \2\2\u0095\u0098\5\22\n\2\u0096\u0098\5\34\17\2\u0097",
    "\u0095\3\2\2\2\u0097\u0096\3\2\2\2\u0098\'\3\2\2\2\u0099\u009a\7\t\2",
    "\2\u009a\u009b\7 \2\2\u009b\u009c\5*\26\2\u009c)\3\2\2\2\u009d\u00a2",
    "\5,\27\2\u009e\u009f\7\"\2\2\u009f\u00a1\5,\27\2\u00a0\u009e\3\2\2\2",
    "\u00a1\u00a4\3\2\2\2\u00a2\u00a0\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3+",
    "\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a5\u00a6\7(\2\2\u00a6\u00a7\7&\2\2\u00a7",
    "-\3\2\2\2\u00a8\u00a9\7\n\2\2\u00a9\u00aa\7 \2\2\u00aa\u00ab\7-\2\2",
    "\u00ab/\3\2\2\2\u00ac\u00ad\7\13\2\2\u00ad\u00ae\7 \2\2\u00ae\u00af",
    "\5\62\32\2\u00af\61\3\2\2\2\u00b0\u00b5\5\64\33\2\u00b1\u00b2\7\"\2",
    "\2\u00b2\u00b4\5\64\33\2\u00b3\u00b1\3\2\2\2\u00b4\u00b7\3\2\2\2\u00b5",
    "\u00b3\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\63\3\2\2\2\u00b7\u00b5\3\2",
    "\2\2\u00b8\u00bc\5<\37\2\u00b9\u00bc\5> \2\u00ba\u00bc\5@!\2\u00bb\u00b8",
    "\3\2\2\2\u00bb\u00b9\3\2\2\2\u00bb\u00ba\3\2\2\2\u00bc\65\3\2\2\2\u00bd",
    "\u00be\7\f\2\2\u00be\u00bf\7 \2\2\u00bf\u00c0\7%\2\2\u00c0\67\3\2\2",
    "\2\u00c1\u00c2\7\r\2\2\u00c2\u00c3\7 \2\2\u00c3\u00c4\7\17\2\2\u00c4",
    "9\3\2\2\2\u00c5\u00c6\7\16\2\2\u00c6\u00c8\7 \2\2\u00c7\u00c5\3\2\2",
    "\2\u00c7\u00c8\3\2\2\2\u00c8\u00c9\3\2\2\2\u00c9\u00ca\5B\"\2\u00ca",
    ";\3\2\2\2\u00cb\u00cc\t\2\2\2\u00cc=\3\2\2\2\u00cd\u00ce\t\4\2\2\u00ce",
    "?\3\2\2\2\u00cf\u00d0\t\5\2\2\u00d0A\3\2\2\2\u00d1\u00d3\5D#\2\u00d2",
    "\u00d1\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d4\u00d5\3",
    "\2\2\2\u00d5C\3\2\2\2\u00d6\u00d7\7\'\2\2\u00d7\u00d8\7$\2\2\u00d8\u00db",
    "\t\6\2\2\u00d9\u00dc\5<\37\2\u00da\u00dc\5> \2\u00db\u00d9\3\2\2\2\u00db",
    "\u00da\3\2\2\2\u00dcE\3\2\2\2\21RXbmvz\u0084\u008d\u0097\u00a2\u00b5",
    "\u00bb\u00c7\u00d4\u00db"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Namespace'", "'Vocabulary'", "'DataElement'", 
                     "'Entry'", "'ValueSetDefinition'", "'Extends'", "'Concept'", 
                     "'Description'", "'Answer'", "'ValueSet'", "'Binding'", 
                     "'Has'", "'Required'", "'boolean'", "'integer'", "'string'", 
                     "'decimal'", "'uri'", "'base64Binary'", "'instant'", 
                     "'date'", "'dateTime'", "'time'", "'code'", "'oid'", 
                     "'id'", "'markdown'", "'unsignedInt'", "'positiveInt'", 
                     "':'", "'='", "','", "'*'", "'..'" ];

var symbolicNames = [ 'null', "KW_NAMESPACE", "KW_VOCABULARY", "KW_DATA_ELEMENT", 
                      "KW_ENTRY", "KW_VALUESET_DEFINITION", "KW_EXTENDS", 
                      "KW_CONCEPT", "KW_DESCRIPTION", "KW_ANSWER", "KW_VALUESET", 
                      "KW_BINDING", "KW_HAS", "KW_REQUIRED", "KW_BOOLEAN", 
                      "KW_INTEGER", "KW_STRING", "KW_DECIMAL", "KW_URI", 
                      "KW_BASE64_BINARY", "KW_INSTANT", "KW_DATE", "KW_DATE_TIME", 
                      "KW_TIME", "KW_CODE", "KW_OID", "KW_ID", "KW_MARKDOWN", 
                      "KW_UNSIGNED_INT", "KW_POSITIVE_INT", "COLON", "EQUAL", 
                      "COMMA", "STAR", "RANGE", "URL", "CODE", "WHOLE_NUMBER", 
                      "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", "DOT_SEPARATED_LW", 
                      "DOT_SEPARATED_UW", "STRING", "WS", "NEWLINE", "COMMENT", 
                      "LINE_COMMENT" ];

var ruleNames =  [ "shr", "namespaceDef", "namespace", "definitions", "definition", 
                   "vocabularyDef", "dataElementDef", "dataElementHeader", 
                   "dataElementName", "dataElementProps", "dataElementProp", 
                   "entryDef", "entryHeader", "entryName", "valuesetDef", 
                   "valuesetHeader", "valuesetValues", "valuesetValue", 
                   "extendsProp", "conceptProp", "concepts", "concept", 
                   "descriptionProp", "answerProp", "answers", "answer", 
                   "valuesetProp", "bindingProp", "hasProp", "dataElementRef", 
                   "entryRef", "primitive", "countedThings", "countedThing" ];

function SHRParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SHRParser.prototype = Object.create(antlr4.Parser.prototype);
SHRParser.prototype.constructor = SHRParser;

Object.defineProperty(SHRParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SHRParser.EOF = antlr4.Token.EOF;
SHRParser.KW_NAMESPACE = 1;
SHRParser.KW_VOCABULARY = 2;
SHRParser.KW_DATA_ELEMENT = 3;
SHRParser.KW_ENTRY = 4;
SHRParser.KW_VALUESET_DEFINITION = 5;
SHRParser.KW_EXTENDS = 6;
SHRParser.KW_CONCEPT = 7;
SHRParser.KW_DESCRIPTION = 8;
SHRParser.KW_ANSWER = 9;
SHRParser.KW_VALUESET = 10;
SHRParser.KW_BINDING = 11;
SHRParser.KW_HAS = 12;
SHRParser.KW_REQUIRED = 13;
SHRParser.KW_BOOLEAN = 14;
SHRParser.KW_INTEGER = 15;
SHRParser.KW_STRING = 16;
SHRParser.KW_DECIMAL = 17;
SHRParser.KW_URI = 18;
SHRParser.KW_BASE64_BINARY = 19;
SHRParser.KW_INSTANT = 20;
SHRParser.KW_DATE = 21;
SHRParser.KW_DATE_TIME = 22;
SHRParser.KW_TIME = 23;
SHRParser.KW_CODE = 24;
SHRParser.KW_OID = 25;
SHRParser.KW_ID = 26;
SHRParser.KW_MARKDOWN = 27;
SHRParser.KW_UNSIGNED_INT = 28;
SHRParser.KW_POSITIVE_INT = 29;
SHRParser.COLON = 30;
SHRParser.EQUAL = 31;
SHRParser.COMMA = 32;
SHRParser.STAR = 33;
SHRParser.RANGE = 34;
SHRParser.URL = 35;
SHRParser.CODE = 36;
SHRParser.WHOLE_NUMBER = 37;
SHRParser.ALL_CAPS = 38;
SHRParser.UPPER_WORD = 39;
SHRParser.LOWER_WORD = 40;
SHRParser.DOT_SEPARATED_LW = 41;
SHRParser.DOT_SEPARATED_UW = 42;
SHRParser.STRING = 43;
SHRParser.WS = 44;
SHRParser.NEWLINE = 45;
SHRParser.COMMENT = 46;
SHRParser.LINE_COMMENT = 47;

SHRParser.RULE_shr = 0;
SHRParser.RULE_namespaceDef = 1;
SHRParser.RULE_namespace = 2;
SHRParser.RULE_definitions = 3;
SHRParser.RULE_definition = 4;
SHRParser.RULE_vocabularyDef = 5;
SHRParser.RULE_dataElementDef = 6;
SHRParser.RULE_dataElementHeader = 7;
SHRParser.RULE_dataElementName = 8;
SHRParser.RULE_dataElementProps = 9;
SHRParser.RULE_dataElementProp = 10;
SHRParser.RULE_entryDef = 11;
SHRParser.RULE_entryHeader = 12;
SHRParser.RULE_entryName = 13;
SHRParser.RULE_valuesetDef = 14;
SHRParser.RULE_valuesetHeader = 15;
SHRParser.RULE_valuesetValues = 16;
SHRParser.RULE_valuesetValue = 17;
SHRParser.RULE_extendsProp = 18;
SHRParser.RULE_conceptProp = 19;
SHRParser.RULE_concepts = 20;
SHRParser.RULE_concept = 21;
SHRParser.RULE_descriptionProp = 22;
SHRParser.RULE_answerProp = 23;
SHRParser.RULE_answers = 24;
SHRParser.RULE_answer = 25;
SHRParser.RULE_valuesetProp = 26;
SHRParser.RULE_bindingProp = 27;
SHRParser.RULE_hasProp = 28;
SHRParser.RULE_dataElementRef = 29;
SHRParser.RULE_entryRef = 30;
SHRParser.RULE_primitive = 31;
SHRParser.RULE_countedThings = 32;
SHRParser.RULE_countedThing = 33;

function ShrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_shr;
    return this;
}

ShrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShrContext.prototype.constructor = ShrContext;

ShrContext.prototype.namespaceDef = function() {
    return this.getTypedRuleContext(NamespaceDefContext,0);
};

ShrContext.prototype.definitions = function() {
    return this.getTypedRuleContext(DefinitionsContext,0);
};

ShrContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterShr(this);
	}
};

ShrContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitShr(this);
	}
};

ShrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitShr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ShrContext = ShrContext;

SHRParser.prototype.shr = function() {

    var localctx = new ShrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SHRParser.RULE_shr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.namespaceDef();
        this.state = 69;
        this.definitions();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_namespaceDef;
    return this;
}

NamespaceDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceDefContext.prototype.constructor = NamespaceDefContext;

NamespaceDefContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRParser.KW_NAMESPACE, 0);
};

NamespaceDefContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

NamespaceDefContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

NamespaceDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterNamespaceDef(this);
	}
};

NamespaceDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitNamespaceDef(this);
	}
};

NamespaceDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitNamespaceDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.NamespaceDefContext = NamespaceDefContext;

SHRParser.prototype.namespaceDef = function() {

    var localctx = new NamespaceDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SHRParser.RULE_namespaceDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 72;
        this.match(SHRParser.COLON);
        this.state = 73;
        this.namespace();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRParser.LOWER_WORD, 0);
};

NamespaceContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRParser.DOT_SEPARATED_LW, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.NamespaceContext = NamespaceContext;

SHRParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SHRParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.LOWER_WORD || _la===SHRParser.DOT_SEPARATED_LW)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefinitionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_definitions;
    return this;
}

DefinitionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefinitionsContext.prototype.constructor = DefinitionsContext;

DefinitionsContext.prototype.definition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DefinitionContext);
    } else {
        return this.getTypedRuleContext(DefinitionContext,i);
    }
};

DefinitionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDefinitions(this);
	}
};

DefinitionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDefinitions(this);
	}
};

DefinitionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDefinitions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DefinitionsContext = DefinitionsContext;

SHRParser.prototype.definitions = function() {

    var localctx = new DefinitionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SHRParser.RULE_definitions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 77;
            this.definition();
            this.state = 80; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_VOCABULARY) | (1 << SHRParser.KW_DATA_ELEMENT) | (1 << SHRParser.KW_ENTRY) | (1 << SHRParser.KW_VALUESET_DEFINITION))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_definition;
    return this;
}

DefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefinitionContext.prototype.constructor = DefinitionContext;

DefinitionContext.prototype.vocabularyDef = function() {
    return this.getTypedRuleContext(VocabularyDefContext,0);
};

DefinitionContext.prototype.dataElementDef = function() {
    return this.getTypedRuleContext(DataElementDefContext,0);
};

DefinitionContext.prototype.entryDef = function() {
    return this.getTypedRuleContext(EntryDefContext,0);
};

DefinitionContext.prototype.valuesetDef = function() {
    return this.getTypedRuleContext(ValuesetDefContext,0);
};

DefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDefinition(this);
	}
};

DefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDefinition(this);
	}
};

DefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DefinitionContext = DefinitionContext;

SHRParser.prototype.definition = function() {

    var localctx = new DefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SHRParser.RULE_definition);
    try {
        this.state = 86;
        switch(this._input.LA(1)) {
        case SHRParser.KW_VOCABULARY:
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.vocabularyDef();
            break;
        case SHRParser.KW_DATA_ELEMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.dataElementDef();
            break;
        case SHRParser.KW_ENTRY:
            this.enterOuterAlt(localctx, 3);
            this.state = 84;
            this.entryDef();
            break;
        case SHRParser.KW_VALUESET_DEFINITION:
            this.enterOuterAlt(localctx, 4);
            this.state = 85;
            this.valuesetDef();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VocabularyDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_vocabularyDef;
    return this;
}

VocabularyDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VocabularyDefContext.prototype.constructor = VocabularyDefContext;

VocabularyDefContext.prototype.KW_VOCABULARY = function() {
    return this.getToken(SHRParser.KW_VOCABULARY, 0);
};

VocabularyDefContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

VocabularyDefContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

VocabularyDefContext.prototype.EQUAL = function() {
    return this.getToken(SHRParser.EQUAL, 0);
};

VocabularyDefContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

VocabularyDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitVocabularyDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.VocabularyDefContext = VocabularyDefContext;

SHRParser.prototype.vocabularyDef = function() {

    var localctx = new VocabularyDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SHRParser.RULE_vocabularyDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(SHRParser.KW_VOCABULARY);
        this.state = 89;
        this.match(SHRParser.COLON);
        this.state = 90;
        this.match(SHRParser.ALL_CAPS);
        this.state = 91;
        this.match(SHRParser.EQUAL);
        this.state = 92;
        this.match(SHRParser.URL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataElementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataElementDef;
    return this;
}

DataElementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataElementDefContext.prototype.constructor = DataElementDefContext;

DataElementDefContext.prototype.dataElementHeader = function() {
    return this.getTypedRuleContext(DataElementHeaderContext,0);
};

DataElementDefContext.prototype.dataElementProps = function() {
    return this.getTypedRuleContext(DataElementPropsContext,0);
};

DataElementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataElementDef(this);
	}
};

DataElementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataElementDef(this);
	}
};

DataElementDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataElementDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataElementDefContext = DataElementDefContext;

SHRParser.prototype.dataElementDef = function() {

    var localctx = new DataElementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRParser.RULE_dataElementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.dataElementHeader();
        this.state = 96;
        _la = this._input.LA(1);
        if(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (SHRParser.KW_EXTENDS - 6)) | (1 << (SHRParser.KW_CONCEPT - 6)) | (1 << (SHRParser.KW_DESCRIPTION - 6)) | (1 << (SHRParser.KW_ANSWER - 6)) | (1 << (SHRParser.KW_VALUESET - 6)) | (1 << (SHRParser.KW_BINDING - 6)) | (1 << (SHRParser.KW_HAS - 6)) | (1 << (SHRParser.WHOLE_NUMBER - 6)))) !== 0)) {
            this.state = 95;
            this.dataElementProps();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataElementHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataElementHeader;
    return this;
}

DataElementHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataElementHeaderContext.prototype.constructor = DataElementHeaderContext;

DataElementHeaderContext.prototype.KW_DATA_ELEMENT = function() {
    return this.getToken(SHRParser.KW_DATA_ELEMENT, 0);
};

DataElementHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

DataElementHeaderContext.prototype.dataElementName = function() {
    return this.getTypedRuleContext(DataElementNameContext,0);
};

DataElementHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataElementHeader(this);
	}
};

DataElementHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataElementHeader(this);
	}
};

DataElementHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataElementHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataElementHeaderContext = DataElementHeaderContext;

SHRParser.prototype.dataElementHeader = function() {

    var localctx = new DataElementHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRParser.RULE_dataElementHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this.match(SHRParser.KW_DATA_ELEMENT);
        this.state = 99;
        this.match(SHRParser.COLON);
        this.state = 100;
        this.dataElementName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataElementNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataElementName;
    return this;
}

DataElementNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataElementNameContext.prototype.constructor = DataElementNameContext;

DataElementNameContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRParser.LOWER_WORD, 0);
};

DataElementNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataElementName(this);
	}
};

DataElementNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataElementName(this);
	}
};

DataElementNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataElementName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataElementNameContext = DataElementNameContext;

SHRParser.prototype.dataElementName = function() {

    var localctx = new DataElementNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SHRParser.RULE_dataElementName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(SHRParser.LOWER_WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataElementPropsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataElementProps;
    return this;
}

DataElementPropsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataElementPropsContext.prototype.constructor = DataElementPropsContext;

DataElementPropsContext.prototype.dataElementProp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataElementPropContext);
    } else {
        return this.getTypedRuleContext(DataElementPropContext,i);
    }
};

DataElementPropsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataElementProps(this);
	}
};

DataElementPropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataElementProps(this);
	}
};

DataElementPropsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataElementProps(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataElementPropsContext = DataElementPropsContext;

SHRParser.prototype.dataElementProps = function() {

    var localctx = new DataElementPropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SHRParser.RULE_dataElementProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 104;
            this.dataElementProp();
            this.state = 107; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (SHRParser.KW_EXTENDS - 6)) | (1 << (SHRParser.KW_CONCEPT - 6)) | (1 << (SHRParser.KW_DESCRIPTION - 6)) | (1 << (SHRParser.KW_ANSWER - 6)) | (1 << (SHRParser.KW_VALUESET - 6)) | (1 << (SHRParser.KW_BINDING - 6)) | (1 << (SHRParser.KW_HAS - 6)) | (1 << (SHRParser.WHOLE_NUMBER - 6)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataElementPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataElementProp;
    return this;
}

DataElementPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataElementPropContext.prototype.constructor = DataElementPropContext;

DataElementPropContext.prototype.extendsProp = function() {
    return this.getTypedRuleContext(ExtendsPropContext,0);
};

DataElementPropContext.prototype.conceptProp = function() {
    return this.getTypedRuleContext(ConceptPropContext,0);
};

DataElementPropContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
};

DataElementPropContext.prototype.answerProp = function() {
    return this.getTypedRuleContext(AnswerPropContext,0);
};

DataElementPropContext.prototype.valuesetProp = function() {
    return this.getTypedRuleContext(ValuesetPropContext,0);
};

DataElementPropContext.prototype.bindingProp = function() {
    return this.getTypedRuleContext(BindingPropContext,0);
};

DataElementPropContext.prototype.hasProp = function() {
    return this.getTypedRuleContext(HasPropContext,0);
};

DataElementPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataElementProp(this);
	}
};

DataElementPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataElementProp(this);
	}
};

DataElementPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataElementProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataElementPropContext = DataElementPropContext;

SHRParser.prototype.dataElementProp = function() {

    var localctx = new DataElementPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SHRParser.RULE_dataElementProp);
    try {
        this.state = 116;
        switch(this._input.LA(1)) {
        case SHRParser.KW_EXTENDS:
            this.enterOuterAlt(localctx, 1);
            this.state = 109;
            this.extendsProp();
            break;
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 110;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 111;
            this.descriptionProp();
            break;
        case SHRParser.KW_ANSWER:
            this.enterOuterAlt(localctx, 4);
            this.state = 112;
            this.answerProp();
            break;
        case SHRParser.KW_VALUESET:
            this.enterOuterAlt(localctx, 5);
            this.state = 113;
            this.valuesetProp();
            break;
        case SHRParser.KW_BINDING:
            this.enterOuterAlt(localctx, 6);
            this.state = 114;
            this.bindingProp();
            break;
        case SHRParser.KW_HAS:
        case SHRParser.WHOLE_NUMBER:
            this.enterOuterAlt(localctx, 7);
            this.state = 115;
            this.hasProp();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntryDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_entryDef;
    return this;
}

EntryDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryDefContext.prototype.constructor = EntryDefContext;

EntryDefContext.prototype.entryHeader = function() {
    return this.getTypedRuleContext(EntryHeaderContext,0);
};

EntryDefContext.prototype.dataElementProps = function() {
    return this.getTypedRuleContext(DataElementPropsContext,0);
};

EntryDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterEntryDef(this);
	}
};

EntryDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitEntryDef(this);
	}
};

EntryDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitEntryDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.EntryDefContext = EntryDefContext;

SHRParser.prototype.entryDef = function() {

    var localctx = new EntryDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SHRParser.RULE_entryDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.entryHeader();
        this.state = 120;
        _la = this._input.LA(1);
        if(((((_la - 6)) & ~0x1f) == 0 && ((1 << (_la - 6)) & ((1 << (SHRParser.KW_EXTENDS - 6)) | (1 << (SHRParser.KW_CONCEPT - 6)) | (1 << (SHRParser.KW_DESCRIPTION - 6)) | (1 << (SHRParser.KW_ANSWER - 6)) | (1 << (SHRParser.KW_VALUESET - 6)) | (1 << (SHRParser.KW_BINDING - 6)) | (1 << (SHRParser.KW_HAS - 6)) | (1 << (SHRParser.WHOLE_NUMBER - 6)))) !== 0)) {
            this.state = 119;
            this.dataElementProps();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntryHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_entryHeader;
    return this;
}

EntryHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryHeaderContext.prototype.constructor = EntryHeaderContext;

EntryHeaderContext.prototype.KW_ENTRY = function() {
    return this.getToken(SHRParser.KW_ENTRY, 0);
};

EntryHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

EntryHeaderContext.prototype.entryName = function() {
    return this.getTypedRuleContext(EntryNameContext,0);
};

EntryHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterEntryHeader(this);
	}
};

EntryHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitEntryHeader(this);
	}
};

EntryHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitEntryHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.EntryHeaderContext = EntryHeaderContext;

SHRParser.prototype.entryHeader = function() {

    var localctx = new EntryHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRParser.RULE_entryHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(SHRParser.KW_ENTRY);
        this.state = 123;
        this.match(SHRParser.COLON);
        this.state = 124;
        this.entryName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntryNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_entryName;
    return this;
}

EntryNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryNameContext.prototype.constructor = EntryNameContext;

EntryNameContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRParser.UPPER_WORD, 0);
};

EntryNameContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

EntryNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterEntryName(this);
	}
};

EntryNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitEntryName(this);
	}
};

EntryNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitEntryName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.EntryNameContext = EntryNameContext;

SHRParser.prototype.entryName = function() {

    var localctx = new EntryNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SHRParser.RULE_entryName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.ALL_CAPS || _la===SHRParser.UPPER_WORD)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetDef;
    return this;
}

ValuesetDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefContext.prototype.constructor = ValuesetDefContext;

ValuesetDefContext.prototype.valuesetHeader = function() {
    return this.getTypedRuleContext(ValuesetHeaderContext,0);
};

ValuesetDefContext.prototype.valuesetValues = function() {
    return this.getTypedRuleContext(ValuesetValuesContext,0);
};

ValuesetDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetDef(this);
	}
};

ValuesetDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetDef(this);
	}
};

ValuesetDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetDefContext = ValuesetDefContext;

SHRParser.prototype.valuesetDef = function() {

    var localctx = new ValuesetDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SHRParser.RULE_valuesetDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 128;
        this.valuesetHeader();
        this.state = 130;
        _la = this._input.LA(1);
        if(_la===SHRParser.CODE) {
            this.state = 129;
            this.valuesetValues();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetHeader;
    return this;
}

ValuesetHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetHeaderContext.prototype.constructor = ValuesetHeaderContext;

ValuesetHeaderContext.prototype.KW_VALUESET_DEFINITION = function() {
    return this.getToken(SHRParser.KW_VALUESET_DEFINITION, 0);
};

ValuesetHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

ValuesetHeaderContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

ValuesetHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetHeader(this);
	}
};

ValuesetHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetHeader(this);
	}
};

ValuesetHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetHeaderContext = ValuesetHeaderContext;

SHRParser.prototype.valuesetHeader = function() {

    var localctx = new ValuesetHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRParser.RULE_valuesetHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(SHRParser.KW_VALUESET_DEFINITION);
        this.state = 133;
        this.match(SHRParser.COLON);
        this.state = 134;
        this.match(SHRParser.URL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetValues;
    return this;
}

ValuesetValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetValuesContext.prototype.constructor = ValuesetValuesContext;

ValuesetValuesContext.prototype.valuesetValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValuesetValueContext);
    } else {
        return this.getTypedRuleContext(ValuesetValueContext,i);
    }
};

ValuesetValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetValues(this);
	}
};

ValuesetValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetValues(this);
	}
};

ValuesetValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetValuesContext = ValuesetValuesContext;

SHRParser.prototype.valuesetValues = function() {

    var localctx = new ValuesetValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SHRParser.RULE_valuesetValues);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 136;
            this.valuesetValue();
            this.state = 139; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.CODE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetValue;
    return this;
}

ValuesetValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetValueContext.prototype.constructor = ValuesetValueContext;

ValuesetValueContext.prototype.CODE = function() {
    return this.getToken(SHRParser.CODE, 0);
};

ValuesetValueContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

ValuesetValueContext.prototype.STRING = function() {
    return this.getToken(SHRParser.STRING, 0);
};

ValuesetValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetValue(this);
	}
};

ValuesetValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetValue(this);
	}
};

ValuesetValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetValueContext = ValuesetValueContext;

SHRParser.prototype.valuesetValue = function() {

    var localctx = new ValuesetValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SHRParser.RULE_valuesetValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(SHRParser.CODE);
        this.state = 142;
        this.match(SHRParser.COLON);
        this.state = 143;
        this.match(SHRParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExtendsPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_extendsProp;
    return this;
}

ExtendsPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtendsPropContext.prototype.constructor = ExtendsPropContext;

ExtendsPropContext.prototype.KW_EXTENDS = function() {
    return this.getToken(SHRParser.KW_EXTENDS, 0);
};

ExtendsPropContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

ExtendsPropContext.prototype.dataElementName = function() {
    return this.getTypedRuleContext(DataElementNameContext,0);
};

ExtendsPropContext.prototype.entryName = function() {
    return this.getTypedRuleContext(EntryNameContext,0);
};

ExtendsPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterExtendsProp(this);
	}
};

ExtendsPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitExtendsProp(this);
	}
};

ExtendsPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitExtendsProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ExtendsPropContext = ExtendsPropContext;

SHRParser.prototype.extendsProp = function() {

    var localctx = new ExtendsPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SHRParser.RULE_extendsProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(SHRParser.KW_EXTENDS);
        this.state = 146;
        this.match(SHRParser.COLON);
        this.state = 149;
        switch(this._input.LA(1)) {
        case SHRParser.LOWER_WORD:
            this.state = 147;
            this.dataElementName();
            break;
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.state = 148;
            this.entryName();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConceptPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_conceptProp;
    return this;
}

ConceptPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptPropContext.prototype.constructor = ConceptPropContext;

ConceptPropContext.prototype.KW_CONCEPT = function() {
    return this.getToken(SHRParser.KW_CONCEPT, 0);
};

ConceptPropContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

ConceptPropContext.prototype.concepts = function() {
    return this.getTypedRuleContext(ConceptsContext,0);
};

ConceptPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterConceptProp(this);
	}
};

ConceptPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitConceptProp(this);
	}
};

ConceptPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitConceptProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ConceptPropContext = ConceptPropContext;

SHRParser.prototype.conceptProp = function() {

    var localctx = new ConceptPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SHRParser.RULE_conceptProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(SHRParser.KW_CONCEPT);
        this.state = 152;
        this.match(SHRParser.COLON);
        this.state = 153;
        this.concepts();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConceptsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_concepts;
    return this;
}

ConceptsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptsContext.prototype.constructor = ConceptsContext;

ConceptsContext.prototype.concept = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConceptContext);
    } else {
        return this.getTypedRuleContext(ConceptContext,i);
    }
};

ConceptsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.COMMA);
    } else {
        return this.getToken(SHRParser.COMMA, i);
    }
};


ConceptsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterConcepts(this);
	}
};

ConceptsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitConcepts(this);
	}
};

ConceptsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitConcepts(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ConceptsContext = ConceptsContext;

SHRParser.prototype.concepts = function() {

    var localctx = new ConceptsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SHRParser.RULE_concepts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.concept();
        this.state = 160;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 156;
            this.match(SHRParser.COMMA);
            this.state = 157;
            this.concept();
            this.state = 162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConceptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_concept;
    return this;
}

ConceptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptContext.prototype.constructor = ConceptContext;

ConceptContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

ConceptContext.prototype.CODE = function() {
    return this.getToken(SHRParser.CODE, 0);
};

ConceptContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterConcept(this);
	}
};

ConceptContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitConcept(this);
	}
};

ConceptContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitConcept(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ConceptContext = ConceptContext;

SHRParser.prototype.concept = function() {

    var localctx = new ConceptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SHRParser.RULE_concept);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(SHRParser.ALL_CAPS);
        this.state = 164;
        this.match(SHRParser.CODE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DescriptionPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_descriptionProp;
    return this;
}

DescriptionPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionPropContext.prototype.constructor = DescriptionPropContext;

DescriptionPropContext.prototype.KW_DESCRIPTION = function() {
    return this.getToken(SHRParser.KW_DESCRIPTION, 0);
};

DescriptionPropContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

DescriptionPropContext.prototype.STRING = function() {
    return this.getToken(SHRParser.STRING, 0);
};

DescriptionPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDescriptionProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DescriptionPropContext = DescriptionPropContext;

SHRParser.prototype.descriptionProp = function() {

    var localctx = new DescriptionPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SHRParser.RULE_descriptionProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(SHRParser.KW_DESCRIPTION);
        this.state = 167;
        this.match(SHRParser.COLON);
        this.state = 168;
        this.match(SHRParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnswerPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_answerProp;
    return this;
}

AnswerPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnswerPropContext.prototype.constructor = AnswerPropContext;

AnswerPropContext.prototype.KW_ANSWER = function() {
    return this.getToken(SHRParser.KW_ANSWER, 0);
};

AnswerPropContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

AnswerPropContext.prototype.answers = function() {
    return this.getTypedRuleContext(AnswersContext,0);
};

AnswerPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterAnswerProp(this);
	}
};

AnswerPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitAnswerProp(this);
	}
};

AnswerPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitAnswerProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.AnswerPropContext = AnswerPropContext;

SHRParser.prototype.answerProp = function() {

    var localctx = new AnswerPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SHRParser.RULE_answerProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(SHRParser.KW_ANSWER);
        this.state = 171;
        this.match(SHRParser.COLON);
        this.state = 172;
        this.answers();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnswersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_answers;
    return this;
}

AnswersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnswersContext.prototype.constructor = AnswersContext;

AnswersContext.prototype.answer = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnswerContext);
    } else {
        return this.getTypedRuleContext(AnswerContext,i);
    }
};

AnswersContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.COMMA);
    } else {
        return this.getToken(SHRParser.COMMA, i);
    }
};


AnswersContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterAnswers(this);
	}
};

AnswersContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitAnswers(this);
	}
};

AnswersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitAnswers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.AnswersContext = AnswersContext;

SHRParser.prototype.answers = function() {

    var localctx = new AnswersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SHRParser.RULE_answers);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.answer();
        this.state = 179;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 175;
            this.match(SHRParser.COMMA);
            this.state = 176;
            this.answer();
            this.state = 181;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnswerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_answer;
    return this;
}

AnswerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnswerContext.prototype.constructor = AnswerContext;

AnswerContext.prototype.dataElementRef = function() {
    return this.getTypedRuleContext(DataElementRefContext,0);
};

AnswerContext.prototype.entryRef = function() {
    return this.getTypedRuleContext(EntryRefContext,0);
};

AnswerContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

AnswerContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterAnswer(this);
	}
};

AnswerContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitAnswer(this);
	}
};

AnswerContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitAnswer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.AnswerContext = AnswerContext;

SHRParser.prototype.answer = function() {

    var localctx = new AnswerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SHRParser.RULE_answer);
    try {
        this.state = 185;
        switch(this._input.LA(1)) {
        case SHRParser.LOWER_WORD:
        case SHRParser.DOT_SEPARATED_LW:
            this.enterOuterAlt(localctx, 1);
            this.state = 182;
            this.dataElementRef();
            break;
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 183;
            this.entryRef();
            break;
        case SHRParser.KW_BOOLEAN:
        case SHRParser.KW_INTEGER:
        case SHRParser.KW_STRING:
        case SHRParser.KW_DECIMAL:
        case SHRParser.KW_URI:
        case SHRParser.KW_BASE64_BINARY:
        case SHRParser.KW_INSTANT:
        case SHRParser.KW_DATE:
        case SHRParser.KW_DATE_TIME:
        case SHRParser.KW_TIME:
        case SHRParser.KW_CODE:
        case SHRParser.KW_OID:
        case SHRParser.KW_ID:
        case SHRParser.KW_MARKDOWN:
        case SHRParser.KW_UNSIGNED_INT:
        case SHRParser.KW_POSITIVE_INT:
            this.enterOuterAlt(localctx, 3);
            this.state = 184;
            this.primitive();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetProp;
    return this;
}

ValuesetPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetPropContext.prototype.constructor = ValuesetPropContext;

ValuesetPropContext.prototype.KW_VALUESET = function() {
    return this.getToken(SHRParser.KW_VALUESET, 0);
};

ValuesetPropContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

ValuesetPropContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

ValuesetPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetProp(this);
	}
};

ValuesetPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetProp(this);
	}
};

ValuesetPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetPropContext = ValuesetPropContext;

SHRParser.prototype.valuesetProp = function() {

    var localctx = new ValuesetPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SHRParser.RULE_valuesetProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.match(SHRParser.KW_VALUESET);
        this.state = 188;
        this.match(SHRParser.COLON);
        this.state = 189;
        this.match(SHRParser.URL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BindingPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_bindingProp;
    return this;
}

BindingPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingPropContext.prototype.constructor = BindingPropContext;

BindingPropContext.prototype.KW_BINDING = function() {
    return this.getToken(SHRParser.KW_BINDING, 0);
};

BindingPropContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

BindingPropContext.prototype.KW_REQUIRED = function() {
    return this.getToken(SHRParser.KW_REQUIRED, 0);
};

BindingPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterBindingProp(this);
	}
};

BindingPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitBindingProp(this);
	}
};

BindingPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitBindingProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.BindingPropContext = BindingPropContext;

SHRParser.prototype.bindingProp = function() {

    var localctx = new BindingPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SHRParser.RULE_bindingProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(SHRParser.KW_BINDING);
        this.state = 192;
        this.match(SHRParser.COLON);
        this.state = 193;
        this.match(SHRParser.KW_REQUIRED);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HasPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_hasProp;
    return this;
}

HasPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HasPropContext.prototype.constructor = HasPropContext;

HasPropContext.prototype.countedThings = function() {
    return this.getTypedRuleContext(CountedThingsContext,0);
};

HasPropContext.prototype.KW_HAS = function() {
    return this.getToken(SHRParser.KW_HAS, 0);
};

HasPropContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

HasPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterHasProp(this);
	}
};

HasPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitHasProp(this);
	}
};

HasPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitHasProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.HasPropContext = HasPropContext;

SHRParser.prototype.hasProp = function() {

    var localctx = new HasPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SHRParser.RULE_hasProp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_HAS) {
            this.state = 195;
            this.match(SHRParser.KW_HAS);
            this.state = 196;
            this.match(SHRParser.COLON);
        }

        this.state = 199;
        this.countedThings();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataElementRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataElementRef;
    return this;
}

DataElementRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataElementRefContext.prototype.constructor = DataElementRefContext;

DataElementRefContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRParser.LOWER_WORD, 0);
};

DataElementRefContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRParser.DOT_SEPARATED_LW, 0);
};

DataElementRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataElementRef(this);
	}
};

DataElementRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataElementRef(this);
	}
};

DataElementRefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataElementRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataElementRefContext = DataElementRefContext;

SHRParser.prototype.dataElementRef = function() {

    var localctx = new DataElementRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SHRParser.RULE_dataElementRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.LOWER_WORD || _la===SHRParser.DOT_SEPARATED_LW)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntryRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_entryRef;
    return this;
}

EntryRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryRefContext.prototype.constructor = EntryRefContext;

EntryRefContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRParser.UPPER_WORD, 0);
};

EntryRefContext.prototype.DOT_SEPARATED_UW = function() {
    return this.getToken(SHRParser.DOT_SEPARATED_UW, 0);
};

EntryRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterEntryRef(this);
	}
};

EntryRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitEntryRef(this);
	}
};

EntryRefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitEntryRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.EntryRefContext = EntryRefContext;

SHRParser.prototype.entryRef = function() {

    var localctx = new EntryRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SHRParser.RULE_entryRef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.UPPER_WORD || _la===SHRParser.DOT_SEPARATED_UW)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_primitive;
    return this;
}

PrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveContext.prototype.constructor = PrimitiveContext;

PrimitiveContext.prototype.KW_BOOLEAN = function() {
    return this.getToken(SHRParser.KW_BOOLEAN, 0);
};

PrimitiveContext.prototype.KW_INTEGER = function() {
    return this.getToken(SHRParser.KW_INTEGER, 0);
};

PrimitiveContext.prototype.KW_STRING = function() {
    return this.getToken(SHRParser.KW_STRING, 0);
};

PrimitiveContext.prototype.KW_DECIMAL = function() {
    return this.getToken(SHRParser.KW_DECIMAL, 0);
};

PrimitiveContext.prototype.KW_URI = function() {
    return this.getToken(SHRParser.KW_URI, 0);
};

PrimitiveContext.prototype.KW_BASE64_BINARY = function() {
    return this.getToken(SHRParser.KW_BASE64_BINARY, 0);
};

PrimitiveContext.prototype.KW_INSTANT = function() {
    return this.getToken(SHRParser.KW_INSTANT, 0);
};

PrimitiveContext.prototype.KW_DATE = function() {
    return this.getToken(SHRParser.KW_DATE, 0);
};

PrimitiveContext.prototype.KW_DATE_TIME = function() {
    return this.getToken(SHRParser.KW_DATE_TIME, 0);
};

PrimitiveContext.prototype.KW_TIME = function() {
    return this.getToken(SHRParser.KW_TIME, 0);
};

PrimitiveContext.prototype.KW_CODE = function() {
    return this.getToken(SHRParser.KW_CODE, 0);
};

PrimitiveContext.prototype.KW_OID = function() {
    return this.getToken(SHRParser.KW_OID, 0);
};

PrimitiveContext.prototype.KW_ID = function() {
    return this.getToken(SHRParser.KW_ID, 0);
};

PrimitiveContext.prototype.KW_MARKDOWN = function() {
    return this.getToken(SHRParser.KW_MARKDOWN, 0);
};

PrimitiveContext.prototype.KW_UNSIGNED_INT = function() {
    return this.getToken(SHRParser.KW_UNSIGNED_INT, 0);
};

PrimitiveContext.prototype.KW_POSITIVE_INT = function() {
    return this.getToken(SHRParser.KW_POSITIVE_INT, 0);
};

PrimitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterPrimitive(this);
	}
};

PrimitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitPrimitive(this);
	}
};

PrimitiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitPrimitive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.PrimitiveContext = PrimitiveContext;

SHRParser.prototype.primitive = function() {

    var localctx = new PrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SHRParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BOOLEAN) | (1 << SHRParser.KW_INTEGER) | (1 << SHRParser.KW_STRING) | (1 << SHRParser.KW_DECIMAL) | (1 << SHRParser.KW_URI) | (1 << SHRParser.KW_BASE64_BINARY) | (1 << SHRParser.KW_INSTANT) | (1 << SHRParser.KW_DATE) | (1 << SHRParser.KW_DATE_TIME) | (1 << SHRParser.KW_TIME) | (1 << SHRParser.KW_CODE) | (1 << SHRParser.KW_OID) | (1 << SHRParser.KW_ID) | (1 << SHRParser.KW_MARKDOWN) | (1 << SHRParser.KW_UNSIGNED_INT) | (1 << SHRParser.KW_POSITIVE_INT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CountedThingsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedThings;
    return this;
}

CountedThingsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedThingsContext.prototype.constructor = CountedThingsContext;

CountedThingsContext.prototype.countedThing = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CountedThingContext);
    } else {
        return this.getTypedRuleContext(CountedThingContext,i);
    }
};

CountedThingsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedThings(this);
	}
};

CountedThingsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedThings(this);
	}
};

CountedThingsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedThings(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedThingsContext = CountedThingsContext;

SHRParser.prototype.countedThings = function() {

    var localctx = new CountedThingsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SHRParser.RULE_countedThings);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 207;
        		this.countedThing();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 210; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CountedThingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedThing;
    return this;
}

CountedThingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedThingContext.prototype.constructor = CountedThingContext;

CountedThingContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRParser.WHOLE_NUMBER, i);
    }
};


CountedThingContext.prototype.RANGE = function() {
    return this.getToken(SHRParser.RANGE, 0);
};

CountedThingContext.prototype.STAR = function() {
    return this.getToken(SHRParser.STAR, 0);
};

CountedThingContext.prototype.dataElementRef = function() {
    return this.getTypedRuleContext(DataElementRefContext,0);
};

CountedThingContext.prototype.entryRef = function() {
    return this.getTypedRuleContext(EntryRefContext,0);
};

CountedThingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedThing(this);
	}
};

CountedThingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedThing(this);
	}
};

CountedThingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedThing(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedThingContext = CountedThingContext;

SHRParser.prototype.countedThing = function() {

    var localctx = new CountedThingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SHRParser.RULE_countedThing);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 213;
        this.match(SHRParser.RANGE);
        this.state = 214;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.STAR || _la===SHRParser.WHOLE_NUMBER)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 217;
        switch(this._input.LA(1)) {
        case SHRParser.LOWER_WORD:
        case SHRParser.DOT_SEPARATED_LW:
            this.state = 215;
            this.dataElementRef();
            break;
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 216;
            this.entryRef();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SHRParser = SHRParser;
