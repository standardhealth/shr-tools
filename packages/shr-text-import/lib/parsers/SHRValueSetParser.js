// Generated from SHRValueSetParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRValueSetParserListener = require('./SHRValueSetParserListener').SHRValueSetParserListener;
var SHRValueSetParserVisitor = require('./SHRValueSetParserVisitor').SHRValueSetParserVisitor;

var grammarFileName = "SHRValueSetParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3 \u00ad\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\3\2\3\2\5\2\67\n\2\3\2\3\2\3\3\3",
    "\3\3\3\3\3\3\3\3\3\3\4\6\4B\n\4\r\4\16\4C\3\5\3\5\3\5\3\5\3\5\3\6\7",
    "\6L\n\6\f\6\16\6O\13\6\3\7\3\7\5\7S\n\7\3\7\5\7V\n\7\3\b\3\b\3\b\3\b",
    "\5\b\\\n\b\3\t\6\t_\n\t\r\t\16\t`\3\n\3\n\3\n\3\n\3\n\5\nh\n\n\3\13",
    "\3\13\3\f\3\f\3\f\3\f\7\fp\n\f\f\f\16\fs\13\f\3\r\3\r\3\r\3\16\3\16",
    "\3\16\3\17\6\17|\n\17\r\17\16\17}\3\20\3\20\5\20\u0082\n\20\3\21\3\21",
    "\3\21\5\21\u0087\n\21\3\22\3\22\3\22\7\22\u008c\n\22\f\22\16\22\u008f",
    "\13\22\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3",
    "\27\5\27\u009e\n\27\3\30\3\30\3\30\5\30\u00a3\n\30\3\31\3\31\5\31\u00a7",
    "\n\31\3\32\3\32\5\32\u00ab\n\32\3\32\2\2\33\2\4\6\b\n\f\16\20\22\24",
    "\26\30\32\34\36 \"$&(*,.\60\62\2\5\3\2\22\24\3\2\31\32\3\2\27\30\u00a8",
    "\2\64\3\2\2\2\4:\3\2\2\2\6A\3\2\2\2\bE\3\2\2\2\nM\3\2\2\2\fP\3\2\2\2",
    "\16W\3\2\2\2\20^\3\2\2\2\22g\3\2\2\2\24i\3\2\2\2\26k\3\2\2\2\30t\3\2",
    "\2\2\32w\3\2\2\2\34{\3\2\2\2\36\u0081\3\2\2\2 \u0083\3\2\2\2\"\u0088",
    "\3\2\2\2$\u0090\3\2\2\2&\u0093\3\2\2\2(\u0097\3\2\2\2*\u0099\3\2\2\2",
    ",\u009b\3\2\2\2.\u00a2\3\2\2\2\60\u00a4\3\2\2\2\62\u00a8\3\2\2\2\64",
    "\66\5\4\3\2\65\67\5\6\4\2\66\65\3\2\2\2\66\67\3\2\2\2\678\3\2\2\289",
    "\5\n\6\29\3\3\2\2\2:;\7\3\2\2;<\7\4\2\2<=\5&\24\2=>\7\5\2\2>?\5(\25",
    "\2?\5\3\2\2\2@B\5\b\5\2A@\3\2\2\2BC\3\2\2\2CA\3\2\2\2CD\3\2\2\2D\7\3",
    "\2\2\2EF\7\6\2\2FG\7\27\2\2GH\7\20\2\2HI\t\2\2\2I\t\3\2\2\2JL\5\f\7",
    "\2KJ\3\2\2\2LO\3\2\2\2MK\3\2\2\2MN\3\2\2\2N\13\3\2\2\2OM\3\2\2\2PR\5",
    "\16\b\2QS\5\34\17\2RQ\3\2\2\2RS\3\2\2\2SU\3\2\2\2TV\5\20\t\2UT\3\2\2",
    "\2UV\3\2\2\2V\r\3\2\2\2W[\7\7\2\2X\\\7\22\2\2Y\\\7\23\2\2Z\\\5*\26\2",
    "[X\3\2\2\2[Y\3\2\2\2[Z\3\2\2\2\\\17\3\2\2\2]_\5\22\n\2^]\3\2\2\2_`\3",
    "\2\2\2`^\3\2\2\2`a\3\2\2\2a\21\3\2\2\2bh\5.\30\2ch\5\24\13\2dh\5\26",
    "\f\2eh\5\32\16\2fh\5\30\r\2gb\3\2\2\2gc\3\2\2\2gd\3\2\2\2ge\3\2\2\2",
    "gf\3\2\2\2h\23\3\2\2\2ij\5,\27\2j\25\3\2\2\2kl\7\t\2\2lq\5.\30\2mn\7",
    "\n\2\2np\5.\30\2om\3\2\2\2ps\3\2\2\2qo\3\2\2\2qr\3\2\2\2r\27\3\2\2\2",
    "sq\3\2\2\2tu\7\b\2\2uv\7\27\2\2v\31\3\2\2\2wx\7\b\2\2xy\5.\30\2y\33",
    "\3\2\2\2z|\5\36\20\2{z\3\2\2\2|}\3\2\2\2}{\3\2\2\2}~\3\2\2\2~\35\3\2",
    "\2\2\177\u0082\5 \21\2\u0080\u0082\5$\23\2\u0081\177\3\2\2\2\u0081\u0080",
    "\3\2\2\2\u0082\37\3\2\2\2\u0083\u0086\7\13\2\2\u0084\u0087\5\"\22\2",
    "\u0085\u0087\5\60\31\2\u0086\u0084\3\2\2\2\u0086\u0085\3\2\2\2\u0087",
    "!\3\2\2\2\u0088\u008d\5.\30\2\u0089\u008a\7\21\2\2\u008a\u008c\5.\30",
    "\2\u008b\u0089\3\2\2\2\u008c\u008f\3\2\2\2\u008d\u008b\3\2\2\2\u008d",
    "\u008e\3\2\2\2\u008e#\3\2\2\2\u008f\u008d\3\2\2\2\u0090\u0091\7\f\2",
    "\2\u0091\u0092\7\34\2\2\u0092%\3\2\2\2\u0093\u0094\7\26\2\2\u0094\u0095",
    "\7\17\2\2\u0095\u0096\7\26\2\2\u0096\'\3\2\2\2\u0097\u0098\t\3\2\2\u0098",
    ")\3\2\2\2\u0099\u009a\t\4\2\2\u009a+\3\2\2\2\u009b\u009d\7\25\2\2\u009c",
    "\u009e\7\34\2\2\u009d\u009c\3\2\2\2\u009d\u009e\3\2\2\2\u009e-\3\2\2",
    "\2\u009f\u00a0\7\27\2\2\u00a0\u00a3\5,\27\2\u00a1\u00a3\5\62\32\2\u00a2",
    "\u009f\3\2\2\2\u00a2\u00a1\3\2\2\2\u00a3/\3\2\2\2\u00a4\u00a6\7\r\2",
    "\2\u00a5\u00a7\7\34\2\2\u00a6\u00a5\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7",
    "\61\3\2\2\2\u00a8\u00aa\7\16\2\2\u00a9\u00ab\7\34\2\2\u00aa\u00a9\3",
    "\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\63\3\2\2\2\23\66CMRU[`gq}\u0081\u0086",
    "\u008d\u009d\u00a2\u00a6\u00aa"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'ValueSet'", "'Namespace:'", 
                     "'CodeSystem:'", "'ValueSet:'", "'Includes codes from'", 
                     "'Includes codes descending from'", "'and not descending from'", 
                     "'Concept:'", "'Description:'", "'TBD'", "'TBD#TBD'", 
                     "'.'", "'='", "','", 'null', 'null', 'null', 'null', 
                     'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                     'null', "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_VALUE_SET", "KW_NAMESPACE", 
                      "KW_VOCABULARY", "KW_VALUESET", "KW_INCLUDES_CODES_FROM", 
                      "KW_INCLUDES_CODES_DESCENDING_FROM", "KW_AND_NOT_DESCENDING_FROM", 
                      "KW_CONCEPT", "KW_DESCRIPTION", "KW_TBD", "KW_TBD_CODE", 
                      "DOT", "EQUAL", "COMMA", "URL", "URN_OID", "URN", 
                      "CODE", "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", 
                      "LOWER_WORD", "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", 
                      "STRING", "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "doc", "docHeader", "vocabularyDefs", "vocabularyDef", 
                   "valuesetDefs", "valuesetDef", "valuesetHeader", "valuesetValues", 
                   "valuesetValue", "valuesetInlineValue", "valuesetDescendingFrom", 
                   "valuesetFromCodeSystem", "valuesetFromCode", "valuesetProps", 
                   "valuesetProp", "conceptProp", "concepts", "descriptionProp", 
                   "version", "namespace", "simpleName", "code", "fullyQualifiedCode", 
                   "tbd", "tbdCode" ];

function SHRValueSetParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SHRValueSetParser.prototype = Object.create(antlr4.Parser.prototype);
SHRValueSetParser.prototype.constructor = SHRValueSetParser;

Object.defineProperty(SHRValueSetParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SHRValueSetParser.EOF = antlr4.Token.EOF;
SHRValueSetParser.KW_GRAMMAR = 1;
SHRValueSetParser.KW_G_VALUE_SET = 2;
SHRValueSetParser.KW_NAMESPACE = 3;
SHRValueSetParser.KW_VOCABULARY = 4;
SHRValueSetParser.KW_VALUESET = 5;
SHRValueSetParser.KW_INCLUDES_CODES_FROM = 6;
SHRValueSetParser.KW_INCLUDES_CODES_DESCENDING_FROM = 7;
SHRValueSetParser.KW_AND_NOT_DESCENDING_FROM = 8;
SHRValueSetParser.KW_CONCEPT = 9;
SHRValueSetParser.KW_DESCRIPTION = 10;
SHRValueSetParser.KW_TBD = 11;
SHRValueSetParser.KW_TBD_CODE = 12;
SHRValueSetParser.DOT = 13;
SHRValueSetParser.EQUAL = 14;
SHRValueSetParser.COMMA = 15;
SHRValueSetParser.URL = 16;
SHRValueSetParser.URN_OID = 17;
SHRValueSetParser.URN = 18;
SHRValueSetParser.CODE = 19;
SHRValueSetParser.WHOLE_NUMBER = 20;
SHRValueSetParser.ALL_CAPS = 21;
SHRValueSetParser.UPPER_WORD = 22;
SHRValueSetParser.LOWER_WORD = 23;
SHRValueSetParser.DOT_SEPARATED_LW = 24;
SHRValueSetParser.DOT_SEPARATED_UW = 25;
SHRValueSetParser.STRING = 26;
SHRValueSetParser.WS = 27;
SHRValueSetParser.NEWLINE = 28;
SHRValueSetParser.COMMENT = 29;
SHRValueSetParser.LINE_COMMENT = 30;

SHRValueSetParser.RULE_doc = 0;
SHRValueSetParser.RULE_docHeader = 1;
SHRValueSetParser.RULE_vocabularyDefs = 2;
SHRValueSetParser.RULE_vocabularyDef = 3;
SHRValueSetParser.RULE_valuesetDefs = 4;
SHRValueSetParser.RULE_valuesetDef = 5;
SHRValueSetParser.RULE_valuesetHeader = 6;
SHRValueSetParser.RULE_valuesetValues = 7;
SHRValueSetParser.RULE_valuesetValue = 8;
SHRValueSetParser.RULE_valuesetInlineValue = 9;
SHRValueSetParser.RULE_valuesetDescendingFrom = 10;
SHRValueSetParser.RULE_valuesetFromCodeSystem = 11;
SHRValueSetParser.RULE_valuesetFromCode = 12;
SHRValueSetParser.RULE_valuesetProps = 13;
SHRValueSetParser.RULE_valuesetProp = 14;
SHRValueSetParser.RULE_conceptProp = 15;
SHRValueSetParser.RULE_concepts = 16;
SHRValueSetParser.RULE_descriptionProp = 17;
SHRValueSetParser.RULE_version = 18;
SHRValueSetParser.RULE_namespace = 19;
SHRValueSetParser.RULE_simpleName = 20;
SHRValueSetParser.RULE_code = 21;
SHRValueSetParser.RULE_fullyQualifiedCode = 22;
SHRValueSetParser.RULE_tbd = 23;
SHRValueSetParser.RULE_tbdCode = 24;

function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.docHeader = function() {
    return this.getTypedRuleContext(DocHeaderContext,0);
};

DocContext.prototype.valuesetDefs = function() {
    return this.getTypedRuleContext(ValuesetDefsContext,0);
};

DocContext.prototype.vocabularyDefs = function() {
    return this.getTypedRuleContext(VocabularyDefsContext,0);
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitDoc(this);
	}
};

DocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.DocContext = DocContext;

SHRValueSetParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SHRValueSetParser.RULE_doc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.docHeader();
        this.state = 52;
        _la = this._input.LA(1);
        if(_la===SHRValueSetParser.KW_VOCABULARY) {
            this.state = 51;
            this.vocabularyDefs();
        }

        this.state = 54;
        this.valuesetDefs();
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

function DocHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_docHeader;
    return this;
}

DocHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocHeaderContext.prototype.constructor = DocHeaderContext;

DocHeaderContext.prototype.KW_GRAMMAR = function() {
    return this.getToken(SHRValueSetParser.KW_GRAMMAR, 0);
};

DocHeaderContext.prototype.KW_G_VALUE_SET = function() {
    return this.getToken(SHRValueSetParser.KW_G_VALUE_SET, 0);
};

DocHeaderContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

DocHeaderContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRValueSetParser.KW_NAMESPACE, 0);
};

DocHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

DocHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterDocHeader(this);
	}
};

DocHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitDocHeader(this);
	}
};

DocHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitDocHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.DocHeaderContext = DocHeaderContext;

SHRValueSetParser.prototype.docHeader = function() {

    var localctx = new DocHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SHRValueSetParser.RULE_docHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 56;
        this.match(SHRValueSetParser.KW_GRAMMAR);
        this.state = 57;
        this.match(SHRValueSetParser.KW_G_VALUE_SET);
        this.state = 58;
        this.version();
        this.state = 59;
        this.match(SHRValueSetParser.KW_NAMESPACE);
        this.state = 60;
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

function VocabularyDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_vocabularyDefs;
    return this;
}

VocabularyDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VocabularyDefsContext.prototype.constructor = VocabularyDefsContext;

VocabularyDefsContext.prototype.vocabularyDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VocabularyDefContext);
    } else {
        return this.getTypedRuleContext(VocabularyDefContext,i);
    }
};

VocabularyDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterVocabularyDefs(this);
	}
};

VocabularyDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitVocabularyDefs(this);
	}
};

VocabularyDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitVocabularyDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.VocabularyDefsContext = VocabularyDefsContext;

SHRValueSetParser.prototype.vocabularyDefs = function() {

    var localctx = new VocabularyDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SHRValueSetParser.RULE_vocabularyDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 62;
            this.vocabularyDef();
            this.state = 65; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRValueSetParser.KW_VOCABULARY);
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
    this.ruleIndex = SHRValueSetParser.RULE_vocabularyDef;
    return this;
}

VocabularyDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VocabularyDefContext.prototype.constructor = VocabularyDefContext;

VocabularyDefContext.prototype.KW_VOCABULARY = function() {
    return this.getToken(SHRValueSetParser.KW_VOCABULARY, 0);
};

VocabularyDefContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRValueSetParser.ALL_CAPS, 0);
};

VocabularyDefContext.prototype.EQUAL = function() {
    return this.getToken(SHRValueSetParser.EQUAL, 0);
};

VocabularyDefContext.prototype.URL = function() {
    return this.getToken(SHRValueSetParser.URL, 0);
};

VocabularyDefContext.prototype.URN_OID = function() {
    return this.getToken(SHRValueSetParser.URN_OID, 0);
};

VocabularyDefContext.prototype.URN = function() {
    return this.getToken(SHRValueSetParser.URN, 0);
};

VocabularyDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitVocabularyDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.VocabularyDefContext = VocabularyDefContext;

SHRValueSetParser.prototype.vocabularyDef = function() {

    var localctx = new VocabularyDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SHRValueSetParser.RULE_vocabularyDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(SHRValueSetParser.KW_VOCABULARY);
        this.state = 68;
        this.match(SHRValueSetParser.ALL_CAPS);
        this.state = 69;
        this.match(SHRValueSetParser.EQUAL);
        this.state = 70;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRValueSetParser.URL) | (1 << SHRValueSetParser.URN_OID) | (1 << SHRValueSetParser.URN))) !== 0))) {
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

function ValuesetDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_valuesetDefs;
    return this;
}

ValuesetDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefsContext.prototype.constructor = ValuesetDefsContext;

ValuesetDefsContext.prototype.valuesetDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValuesetDefContext);
    } else {
        return this.getTypedRuleContext(ValuesetDefContext,i);
    }
};

ValuesetDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetDefs(this);
	}
};

ValuesetDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetDefs(this);
	}
};

ValuesetDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetDefsContext = ValuesetDefsContext;

SHRValueSetParser.prototype.valuesetDefs = function() {

    var localctx = new ValuesetDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SHRValueSetParser.RULE_valuesetDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRValueSetParser.KW_VALUESET) {
            this.state = 72;
            this.valuesetDef();
            this.state = 77;
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

function ValuesetDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_valuesetDef;
    return this;
}

ValuesetDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefContext.prototype.constructor = ValuesetDefContext;

ValuesetDefContext.prototype.valuesetHeader = function() {
    return this.getTypedRuleContext(ValuesetHeaderContext,0);
};

ValuesetDefContext.prototype.valuesetProps = function() {
    return this.getTypedRuleContext(ValuesetPropsContext,0);
};

ValuesetDefContext.prototype.valuesetValues = function() {
    return this.getTypedRuleContext(ValuesetValuesContext,0);
};

ValuesetDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetDef(this);
	}
};

ValuesetDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetDef(this);
	}
};

ValuesetDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetDefContext = ValuesetDefContext;

SHRValueSetParser.prototype.valuesetDef = function() {

    var localctx = new ValuesetDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SHRValueSetParser.RULE_valuesetDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.valuesetHeader();
        this.state = 80;
        _la = this._input.LA(1);
        if(_la===SHRValueSetParser.KW_CONCEPT || _la===SHRValueSetParser.KW_DESCRIPTION) {
            this.state = 79;
            this.valuesetProps();
        }

        this.state = 83;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRValueSetParser.KW_INCLUDES_CODES_FROM) | (1 << SHRValueSetParser.KW_INCLUDES_CODES_DESCENDING_FROM) | (1 << SHRValueSetParser.KW_TBD_CODE) | (1 << SHRValueSetParser.CODE) | (1 << SHRValueSetParser.ALL_CAPS))) !== 0)) {
            this.state = 82;
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
    this.ruleIndex = SHRValueSetParser.RULE_valuesetHeader;
    return this;
}

ValuesetHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetHeaderContext.prototype.constructor = ValuesetHeaderContext;

ValuesetHeaderContext.prototype.KW_VALUESET = function() {
    return this.getToken(SHRValueSetParser.KW_VALUESET, 0);
};

ValuesetHeaderContext.prototype.URL = function() {
    return this.getToken(SHRValueSetParser.URL, 0);
};

ValuesetHeaderContext.prototype.URN_OID = function() {
    return this.getToken(SHRValueSetParser.URN_OID, 0);
};

ValuesetHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ValuesetHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetHeader(this);
	}
};

ValuesetHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetHeader(this);
	}
};

ValuesetHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetHeaderContext = ValuesetHeaderContext;

SHRValueSetParser.prototype.valuesetHeader = function() {

    var localctx = new ValuesetHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRValueSetParser.RULE_valuesetHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        this.match(SHRValueSetParser.KW_VALUESET);
        this.state = 89;
        switch(this._input.LA(1)) {
        case SHRValueSetParser.URL:
            this.state = 86;
            this.match(SHRValueSetParser.URL);
            break;
        case SHRValueSetParser.URN_OID:
            this.state = 87;
            this.match(SHRValueSetParser.URN_OID);
            break;
        case SHRValueSetParser.ALL_CAPS:
        case SHRValueSetParser.UPPER_WORD:
            this.state = 88;
            this.simpleName();
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

function ValuesetValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_valuesetValues;
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
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetValues(this);
	}
};

ValuesetValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetValues(this);
	}
};

ValuesetValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetValuesContext = ValuesetValuesContext;

SHRValueSetParser.prototype.valuesetValues = function() {

    var localctx = new ValuesetValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRValueSetParser.RULE_valuesetValues);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 91;
            this.valuesetValue();
            this.state = 94; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRValueSetParser.KW_INCLUDES_CODES_FROM) | (1 << SHRValueSetParser.KW_INCLUDES_CODES_DESCENDING_FROM) | (1 << SHRValueSetParser.KW_TBD_CODE) | (1 << SHRValueSetParser.CODE) | (1 << SHRValueSetParser.ALL_CAPS))) !== 0));
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
    this.ruleIndex = SHRValueSetParser.RULE_valuesetValue;
    return this;
}

ValuesetValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetValueContext.prototype.constructor = ValuesetValueContext;

ValuesetValueContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

ValuesetValueContext.prototype.valuesetInlineValue = function() {
    return this.getTypedRuleContext(ValuesetInlineValueContext,0);
};

ValuesetValueContext.prototype.valuesetDescendingFrom = function() {
    return this.getTypedRuleContext(ValuesetDescendingFromContext,0);
};

ValuesetValueContext.prototype.valuesetFromCode = function() {
    return this.getTypedRuleContext(ValuesetFromCodeContext,0);
};

ValuesetValueContext.prototype.valuesetFromCodeSystem = function() {
    return this.getTypedRuleContext(ValuesetFromCodeSystemContext,0);
};

ValuesetValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetValue(this);
	}
};

ValuesetValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetValue(this);
	}
};

ValuesetValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetValueContext = ValuesetValueContext;

SHRValueSetParser.prototype.valuesetValue = function() {

    var localctx = new ValuesetValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SHRValueSetParser.RULE_valuesetValue);
    try {
        this.state = 101;
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 96;
            this.fullyQualifiedCode();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 97;
            this.valuesetInlineValue();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 98;
            this.valuesetDescendingFrom();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 99;
            this.valuesetFromCode();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 100;
            this.valuesetFromCodeSystem();
            break;

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

function ValuesetInlineValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_valuesetInlineValue;
    return this;
}

ValuesetInlineValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetInlineValueContext.prototype.constructor = ValuesetInlineValueContext;

ValuesetInlineValueContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

ValuesetInlineValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetInlineValue(this);
	}
};

ValuesetInlineValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetInlineValue(this);
	}
};

ValuesetInlineValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetInlineValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetInlineValueContext = ValuesetInlineValueContext;

SHRValueSetParser.prototype.valuesetInlineValue = function() {

    var localctx = new ValuesetInlineValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SHRValueSetParser.RULE_valuesetInlineValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.code();
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

function ValuesetDescendingFromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_valuesetDescendingFrom;
    return this;
}

ValuesetDescendingFromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDescendingFromContext.prototype.constructor = ValuesetDescendingFromContext;

ValuesetDescendingFromContext.prototype.KW_INCLUDES_CODES_DESCENDING_FROM = function() {
    return this.getToken(SHRValueSetParser.KW_INCLUDES_CODES_DESCENDING_FROM, 0);
};

ValuesetDescendingFromContext.prototype.fullyQualifiedCode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FullyQualifiedCodeContext);
    } else {
        return this.getTypedRuleContext(FullyQualifiedCodeContext,i);
    }
};

ValuesetDescendingFromContext.prototype.KW_AND_NOT_DESCENDING_FROM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRValueSetParser.KW_AND_NOT_DESCENDING_FROM);
    } else {
        return this.getToken(SHRValueSetParser.KW_AND_NOT_DESCENDING_FROM, i);
    }
};


ValuesetDescendingFromContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetDescendingFrom(this);
	}
};

ValuesetDescendingFromContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetDescendingFrom(this);
	}
};

ValuesetDescendingFromContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetDescendingFrom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetDescendingFromContext = ValuesetDescendingFromContext;

SHRValueSetParser.prototype.valuesetDescendingFrom = function() {

    var localctx = new ValuesetDescendingFromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SHRValueSetParser.RULE_valuesetDescendingFrom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(SHRValueSetParser.KW_INCLUDES_CODES_DESCENDING_FROM);
        this.state = 106;
        this.fullyQualifiedCode();
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRValueSetParser.KW_AND_NOT_DESCENDING_FROM) {
            this.state = 107;
            this.match(SHRValueSetParser.KW_AND_NOT_DESCENDING_FROM);
            this.state = 108;
            this.fullyQualifiedCode();
            this.state = 113;
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

function ValuesetFromCodeSystemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_valuesetFromCodeSystem;
    return this;
}

ValuesetFromCodeSystemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetFromCodeSystemContext.prototype.constructor = ValuesetFromCodeSystemContext;

ValuesetFromCodeSystemContext.prototype.KW_INCLUDES_CODES_FROM = function() {
    return this.getToken(SHRValueSetParser.KW_INCLUDES_CODES_FROM, 0);
};

ValuesetFromCodeSystemContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRValueSetParser.ALL_CAPS, 0);
};

ValuesetFromCodeSystemContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetFromCodeSystem(this);
	}
};

ValuesetFromCodeSystemContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetFromCodeSystem(this);
	}
};

ValuesetFromCodeSystemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetFromCodeSystem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetFromCodeSystemContext = ValuesetFromCodeSystemContext;

SHRValueSetParser.prototype.valuesetFromCodeSystem = function() {

    var localctx = new ValuesetFromCodeSystemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SHRValueSetParser.RULE_valuesetFromCodeSystem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(SHRValueSetParser.KW_INCLUDES_CODES_FROM);
        this.state = 115;
        this.match(SHRValueSetParser.ALL_CAPS);
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

function ValuesetFromCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_valuesetFromCode;
    return this;
}

ValuesetFromCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetFromCodeContext.prototype.constructor = ValuesetFromCodeContext;

ValuesetFromCodeContext.prototype.KW_INCLUDES_CODES_FROM = function() {
    return this.getToken(SHRValueSetParser.KW_INCLUDES_CODES_FROM, 0);
};

ValuesetFromCodeContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

ValuesetFromCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetFromCode(this);
	}
};

ValuesetFromCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetFromCode(this);
	}
};

ValuesetFromCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetFromCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetFromCodeContext = ValuesetFromCodeContext;

SHRValueSetParser.prototype.valuesetFromCode = function() {

    var localctx = new ValuesetFromCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRValueSetParser.RULE_valuesetFromCode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(SHRValueSetParser.KW_INCLUDES_CODES_FROM);
        this.state = 118;
        this.fullyQualifiedCode();
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

function ValuesetPropsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_valuesetProps;
    return this;
}

ValuesetPropsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetPropsContext.prototype.constructor = ValuesetPropsContext;

ValuesetPropsContext.prototype.valuesetProp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValuesetPropContext);
    } else {
        return this.getTypedRuleContext(ValuesetPropContext,i);
    }
};

ValuesetPropsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetProps(this);
	}
};

ValuesetPropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetProps(this);
	}
};

ValuesetPropsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetProps(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetPropsContext = ValuesetPropsContext;

SHRValueSetParser.prototype.valuesetProps = function() {

    var localctx = new ValuesetPropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SHRValueSetParser.RULE_valuesetProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 120;
            this.valuesetProp();
            this.state = 123; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRValueSetParser.KW_CONCEPT || _la===SHRValueSetParser.KW_DESCRIPTION);
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
    this.ruleIndex = SHRValueSetParser.RULE_valuesetProp;
    return this;
}

ValuesetPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetPropContext.prototype.constructor = ValuesetPropContext;

ValuesetPropContext.prototype.conceptProp = function() {
    return this.getTypedRuleContext(ConceptPropContext,0);
};

ValuesetPropContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
};

ValuesetPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterValuesetProp(this);
	}
};

ValuesetPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitValuesetProp(this);
	}
};

ValuesetPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitValuesetProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ValuesetPropContext = ValuesetPropContext;

SHRValueSetParser.prototype.valuesetProp = function() {

    var localctx = new ValuesetPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SHRValueSetParser.RULE_valuesetProp);
    try {
        this.state = 127;
        switch(this._input.LA(1)) {
        case SHRValueSetParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 1);
            this.state = 125;
            this.conceptProp();
            break;
        case SHRValueSetParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 126;
            this.descriptionProp();
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
    this.ruleIndex = SHRValueSetParser.RULE_conceptProp;
    return this;
}

ConceptPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptPropContext.prototype.constructor = ConceptPropContext;

ConceptPropContext.prototype.KW_CONCEPT = function() {
    return this.getToken(SHRValueSetParser.KW_CONCEPT, 0);
};

ConceptPropContext.prototype.concepts = function() {
    return this.getTypedRuleContext(ConceptsContext,0);
};

ConceptPropContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ConceptPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterConceptProp(this);
	}
};

ConceptPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitConceptProp(this);
	}
};

ConceptPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitConceptProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ConceptPropContext = ConceptPropContext;

SHRValueSetParser.prototype.conceptProp = function() {

    var localctx = new ConceptPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRValueSetParser.RULE_conceptProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(SHRValueSetParser.KW_CONCEPT);
        this.state = 132;
        switch(this._input.LA(1)) {
        case SHRValueSetParser.KW_TBD_CODE:
        case SHRValueSetParser.ALL_CAPS:
            this.state = 130;
            this.concepts();
            break;
        case SHRValueSetParser.KW_TBD:
            this.state = 131;
            this.tbd();
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

function ConceptsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_concepts;
    return this;
}

ConceptsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptsContext.prototype.constructor = ConceptsContext;

ConceptsContext.prototype.fullyQualifiedCode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FullyQualifiedCodeContext);
    } else {
        return this.getTypedRuleContext(FullyQualifiedCodeContext,i);
    }
};

ConceptsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRValueSetParser.COMMA);
    } else {
        return this.getToken(SHRValueSetParser.COMMA, i);
    }
};


ConceptsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterConcepts(this);
	}
};

ConceptsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitConcepts(this);
	}
};

ConceptsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitConcepts(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.ConceptsContext = ConceptsContext;

SHRValueSetParser.prototype.concepts = function() {

    var localctx = new ConceptsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SHRValueSetParser.RULE_concepts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.fullyQualifiedCode();
        this.state = 139;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRValueSetParser.COMMA) {
            this.state = 135;
            this.match(SHRValueSetParser.COMMA);
            this.state = 136;
            this.fullyQualifiedCode();
            this.state = 141;
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

function DescriptionPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_descriptionProp;
    return this;
}

DescriptionPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionPropContext.prototype.constructor = DescriptionPropContext;

DescriptionPropContext.prototype.KW_DESCRIPTION = function() {
    return this.getToken(SHRValueSetParser.KW_DESCRIPTION, 0);
};

DescriptionPropContext.prototype.STRING = function() {
    return this.getToken(SHRValueSetParser.STRING, 0);
};

DescriptionPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitDescriptionProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.DescriptionPropContext = DescriptionPropContext;

SHRValueSetParser.prototype.descriptionProp = function() {

    var localctx = new DescriptionPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SHRValueSetParser.RULE_descriptionProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.match(SHRValueSetParser.KW_DESCRIPTION);
        this.state = 143;
        this.match(SHRValueSetParser.STRING);
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

function VersionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRValueSetParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRValueSetParser.WHOLE_NUMBER, i);
    }
};


VersionContext.prototype.DOT = function() {
    return this.getToken(SHRValueSetParser.DOT, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.VersionContext = VersionContext;

SHRValueSetParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SHRValueSetParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(SHRValueSetParser.WHOLE_NUMBER);
        this.state = 146;
        this.match(SHRValueSetParser.DOT);
        this.state = 147;
        this.match(SHRValueSetParser.WHOLE_NUMBER);
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
    this.ruleIndex = SHRValueSetParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRValueSetParser.LOWER_WORD, 0);
};

NamespaceContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRValueSetParser.DOT_SEPARATED_LW, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.NamespaceContext = NamespaceContext;

SHRValueSetParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SHRValueSetParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        _la = this._input.LA(1);
        if(!(_la===SHRValueSetParser.LOWER_WORD || _la===SHRValueSetParser.DOT_SEPARATED_LW)) {
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

function SimpleNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_simpleName;
    return this;
}

SimpleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleNameContext.prototype.constructor = SimpleNameContext;

SimpleNameContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRValueSetParser.UPPER_WORD, 0);
};

SimpleNameContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRValueSetParser.ALL_CAPS, 0);
};

SimpleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterSimpleName(this);
	}
};

SimpleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitSimpleName(this);
	}
};

SimpleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitSimpleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.SimpleNameContext = SimpleNameContext;

SHRValueSetParser.prototype.simpleName = function() {

    var localctx = new SimpleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SHRValueSetParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        _la = this._input.LA(1);
        if(!(_la===SHRValueSetParser.ALL_CAPS || _la===SHRValueSetParser.UPPER_WORD)) {
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

function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.CODE = function() {
    return this.getToken(SHRValueSetParser.CODE, 0);
};

CodeContext.prototype.STRING = function() {
    return this.getToken(SHRValueSetParser.STRING, 0);
};

CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.CodeContext = CodeContext;

SHRValueSetParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SHRValueSetParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(SHRValueSetParser.CODE);
        this.state = 155;
        _la = this._input.LA(1);
        if(_la===SHRValueSetParser.STRING) {
            this.state = 154;
            this.match(SHRValueSetParser.STRING);
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

function FullyQualifiedCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_fullyQualifiedCode;
    return this;
}

FullyQualifiedCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedCodeContext.prototype.constructor = FullyQualifiedCodeContext;

FullyQualifiedCodeContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRValueSetParser.ALL_CAPS, 0);
};

FullyQualifiedCodeContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

FullyQualifiedCodeContext.prototype.tbdCode = function() {
    return this.getTypedRuleContext(TbdCodeContext,0);
};

FullyQualifiedCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitFullyQualifiedCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.FullyQualifiedCodeContext = FullyQualifiedCodeContext;

SHRValueSetParser.prototype.fullyQualifiedCode = function() {

    var localctx = new FullyQualifiedCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SHRValueSetParser.RULE_fullyQualifiedCode);
    try {
        this.state = 160;
        switch(this._input.LA(1)) {
        case SHRValueSetParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 157;
            this.match(SHRValueSetParser.ALL_CAPS);
            this.state = 158;
            this.code();
            break;
        case SHRValueSetParser.KW_TBD_CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
            this.tbdCode();
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

function TbdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_tbd;
    return this;
}

TbdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TbdContext.prototype.constructor = TbdContext;

TbdContext.prototype.KW_TBD = function() {
    return this.getToken(SHRValueSetParser.KW_TBD, 0);
};

TbdContext.prototype.STRING = function() {
    return this.getToken(SHRValueSetParser.STRING, 0);
};

TbdContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterTbd(this);
	}
};

TbdContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitTbd(this);
	}
};

TbdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitTbd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.TbdContext = TbdContext;

SHRValueSetParser.prototype.tbd = function() {

    var localctx = new TbdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SHRValueSetParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(SHRValueSetParser.KW_TBD);
        this.state = 164;
        _la = this._input.LA(1);
        if(_la===SHRValueSetParser.STRING) {
            this.state = 163;
            this.match(SHRValueSetParser.STRING);
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

function TbdCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRValueSetParser.RULE_tbdCode;
    return this;
}

TbdCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TbdCodeContext.prototype.constructor = TbdCodeContext;

TbdCodeContext.prototype.KW_TBD_CODE = function() {
    return this.getToken(SHRValueSetParser.KW_TBD_CODE, 0);
};

TbdCodeContext.prototype.STRING = function() {
    return this.getToken(SHRValueSetParser.STRING, 0);
};

TbdCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.enterTbdCode(this);
	}
};

TbdCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRValueSetParserListener ) {
        listener.exitTbdCode(this);
	}
};

TbdCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRValueSetParserVisitor ) {
        return visitor.visitTbdCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRValueSetParser.TbdCodeContext = TbdCodeContext;

SHRValueSetParser.prototype.tbdCode = function() {

    var localctx = new TbdCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SHRValueSetParser.RULE_tbdCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(SHRValueSetParser.KW_TBD_CODE);
        this.state = 168;
        _la = this._input.LA(1);
        if(_la===SHRValueSetParser.STRING) {
            this.state = 167;
            this.match(SHRValueSetParser.STRING);
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


exports.SHRValueSetParser = SHRValueSetParser;
