// Generated from SHRMapParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRMapParserListener = require('./SHRMapParserListener').SHRMapParserListener;
var SHRMapParserVisitor = require('./SHRMapParserVisitor').SHRMapParserVisitor;

var grammarFileName = "SHRMapParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\67\u0094\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b",
    "\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20",
    "\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4",
    "\27\t\27\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\5\7\5",
    "=\n\5\f\5\16\5@\13\5\3\6\3\6\7\6D\n\6\f\6\16\6G\13\6\3\7\3\7\3\7\5\7",
    "L\n\7\3\7\3\7\3\b\3\b\3\b\5\bS\n\b\3\t\3\t\3\t\3\t\3\n\3\n\3\n\7\n\\",
    "\n\n\f\n\16\n_\13\n\3\13\3\13\3\13\3\13\3\13\7\13f\n\13\f\13\16\13i",
    "\13\13\3\f\3\f\3\f\3\f\5\fo\n\f\3\r\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3",
    "\16\3\17\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24",
    "\3\24\5\24\u0088\n\24\3\25\3\25\3\26\3\26\3\26\3\26\3\27\3\27\5\27\u0092",
    "\n\27\3\27\2\2\30\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,\2\7",
    "\3\2)*\3\2\f\16\3\2\'(\3\2\25%\4\2\20\20&&\u0089\2.\3\2\2\2\4\62\3\2",
    "\2\2\68\3\2\2\2\b>\3\2\2\2\nA\3\2\2\2\fH\3\2\2\2\16R\3\2\2\2\20T\3\2",
    "\2\2\22X\3\2\2\2\24`\3\2\2\2\26n\3\2\2\2\30p\3\2\2\2\32u\3\2\2\2\34",
    "y\3\2\2\2\36}\3\2\2\2 \177\3\2\2\2\"\u0081\3\2\2\2$\u0083\3\2\2\2&\u0087",
    "\3\2\2\2(\u0089\3\2\2\2*\u008b\3\2\2\2,\u008f\3\2\2\2./\5\4\3\2/\60",
    "\5\6\4\2\60\61\5\b\5\2\61\3\3\2\2\2\62\63\7\3\2\2\63\64\7\4\2\2\64\65",
    "\5\34\17\2\65\66\7\5\2\2\66\67\5\36\20\2\67\5\3\2\2\289\7\7\2\29:\5",
    "\"\22\2:\7\3\2\2\2;=\5\n\6\2<;\3\2\2\2=@\3\2\2\2><\3\2\2\2>?\3\2\2\2",
    "?\t\3\2\2\2@>\3\2\2\2AE\5\f\7\2BD\5\16\b\2CB\3\2\2\2DG\3\2\2\2EC\3\2",
    "\2\2EF\3\2\2\2F\13\3\2\2\2GE\3\2\2\2HK\5\"\22\2IJ\7\b\2\2JL\7\61\2\2",
    "KI\3\2\2\2KL\3\2\2\2LM\3\2\2\2MN\7\23\2\2N\r\3\2\2\2OS\5\20\t\2PS\5",
    "\30\r\2QS\5\32\16\2RO\3\2\2\2RP\3\2\2\2RQ\3\2\2\2S\17\3\2\2\2TU\5\22",
    "\n\2UV\7\b\2\2VW\7\61\2\2W\21\3\2\2\2X]\5\24\13\2YZ\7\17\2\2Z\\\5\24",
    "\13\2[Y\3\2\2\2\\_\3\2\2\2][\3\2\2\2]^\3\2\2\2^\23\3\2\2\2_]\3\2\2\2",
    "`g\5\26\f\2ab\7\21\2\2bc\5\26\f\2cd\7\22\2\2df\3\2\2\2ea\3\2\2\2fi\3",
    "\2\2\2ge\3\2\2\2gh\3\2\2\2h\25\3\2\2\2ig\3\2\2\2jo\5 \21\2ko\5&\24\2",
    "lo\5(\25\2mo\5,\27\2nj\3\2\2\2nk\3\2\2\2nl\3\2\2\2nm\3\2\2\2o\27\3\2",
    "\2\2pq\7\t\2\2qr\7\63\2\2rs\7\13\2\2st\5*\26\2t\31\3\2\2\2uv\7\n\2\2",
    "vw\7\65\2\2wx\7\66\2\2x\33\3\2\2\2yz\7&\2\2z{\7\17\2\2{|\7&\2\2|\35",
    "\3\2\2\2}~\t\2\2\2~\37\3\2\2\2\177\u0080\t\3\2\2\u0080!\3\2\2\2\u0081",
    "\u0082\t\4\2\2\u0082#\3\2\2\2\u0083\u0084\7+\2\2\u0084%\3\2\2\2\u0085",
    "\u0088\5\"\22\2\u0086\u0088\5$\23\2\u0087\u0085\3\2\2\2\u0087\u0086",
    "\3\2\2\2\u0088\'\3\2\2\2\u0089\u008a\t\5\2\2\u008a)\3\2\2\2\u008b\u008c",
    "\7&\2\2\u008c\u008d\7\24\2\2\u008d\u008e\t\6\2\2\u008e+\3\2\2\2\u008f",
    "\u0091\7\6\2\2\u0090\u0092\7,\2\2\u0091\u0090\3\2\2\2\u0091\u0092\3",
    "\2\2\2\u0092-\3\2\2\2\13>EKR]gn\u0087\u0091"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'Map'", "'Namespace:'", "'TBD'", 
                     "'Target:'", "'maps to'", "'constrain'", "'fix'", "'to'", 
                     "'_Concept'", "'_Entry'", "'_Value'", "'.'", "'*'", 
                     "'['", "']'", "':'", "'..'", "'boolean'", "'integer'", 
                     "'string'", "'decimal'", "'uri'", "'base64Binary'", 
                     "'instant'", "'date'", "'dateTime'", "'time'", "'concept'", 
                     "'oid'", "'id'", "'markdown'", "'unsignedInt'", "'positiveInt'", 
                     "'xhtml'", 'null', 'null', 'null', 'null', 'null', 
                     'null', 'null', 'null', "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_MAP", "KW_NAMESPACE", 
                      "KW_TBD", "KW_TARGET", "KW_MAPS_TO", "KW_CONSTRAIN", 
                      "KW_FIX", "KW_TO", "KW_BAR_CONCEPT", "KW_BAR_ENTRY", 
                      "KW_BAR_VALUE", "DOT", "STAR", "OPEN_BRACKET", "CLOSE_BRACKET", 
                      "COLON", "RANGE", "KW_BOOLEAN", "KW_INTEGER", "KW_STRING", 
                      "KW_DECIMAL", "KW_URI", "KW_BASE64_BINARY", "KW_INSTANT", 
                      "KW_DATE", "KW_DATE_TIME", "KW_TIME", "KW_CONCEPT_CODE", 
                      "KW_OID", "KW_ID", "KW_MARKDOWN", "KW_UNSIGNED_INT", 
                      "KW_POSITIVE_INT", "KW_XHTML", "WHOLE_NUMBER", "ALL_CAPS", 
                      "UPPER_WORD", "LOWER_WORD", "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", 
                      "STRING", "WS", "NEWLINE", "COMMENT", "LINE_COMMENT", 
                      "TARGET_PHRASE", "WS2", "TARGET_WORD", "WS3", "TARGET_WORD_2", 
                      "TARGET_PHRASE_2", "WS4" ];

var ruleNames =  [ "doc", "docHeader", "targetStatement", "mappingDefs", 
                   "mappingDef", "mappingDefHeader", "mappingRule", "fieldMapping", 
                   "source", "sourcePart", "sourceWord", "cardMapping", 
                   "fixedMapping", "version", "namespace", "specialWord", 
                   "simpleName", "fullyQualifiedName", "simpleOrFQName", 
                   "primitive", "count", "tbd" ];

function SHRMapParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SHRMapParser.prototype = Object.create(antlr4.Parser.prototype);
SHRMapParser.prototype.constructor = SHRMapParser;

Object.defineProperty(SHRMapParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SHRMapParser.EOF = antlr4.Token.EOF;
SHRMapParser.KW_GRAMMAR = 1;
SHRMapParser.KW_G_MAP = 2;
SHRMapParser.KW_NAMESPACE = 3;
SHRMapParser.KW_TBD = 4;
SHRMapParser.KW_TARGET = 5;
SHRMapParser.KW_MAPS_TO = 6;
SHRMapParser.KW_CONSTRAIN = 7;
SHRMapParser.KW_FIX = 8;
SHRMapParser.KW_TO = 9;
SHRMapParser.KW_BAR_CONCEPT = 10;
SHRMapParser.KW_BAR_ENTRY = 11;
SHRMapParser.KW_BAR_VALUE = 12;
SHRMapParser.DOT = 13;
SHRMapParser.STAR = 14;
SHRMapParser.OPEN_BRACKET = 15;
SHRMapParser.CLOSE_BRACKET = 16;
SHRMapParser.COLON = 17;
SHRMapParser.RANGE = 18;
SHRMapParser.KW_BOOLEAN = 19;
SHRMapParser.KW_INTEGER = 20;
SHRMapParser.KW_STRING = 21;
SHRMapParser.KW_DECIMAL = 22;
SHRMapParser.KW_URI = 23;
SHRMapParser.KW_BASE64_BINARY = 24;
SHRMapParser.KW_INSTANT = 25;
SHRMapParser.KW_DATE = 26;
SHRMapParser.KW_DATE_TIME = 27;
SHRMapParser.KW_TIME = 28;
SHRMapParser.KW_CONCEPT_CODE = 29;
SHRMapParser.KW_OID = 30;
SHRMapParser.KW_ID = 31;
SHRMapParser.KW_MARKDOWN = 32;
SHRMapParser.KW_UNSIGNED_INT = 33;
SHRMapParser.KW_POSITIVE_INT = 34;
SHRMapParser.KW_XHTML = 35;
SHRMapParser.WHOLE_NUMBER = 36;
SHRMapParser.ALL_CAPS = 37;
SHRMapParser.UPPER_WORD = 38;
SHRMapParser.LOWER_WORD = 39;
SHRMapParser.DOT_SEPARATED_LW = 40;
SHRMapParser.DOT_SEPARATED_UW = 41;
SHRMapParser.STRING = 42;
SHRMapParser.WS = 43;
SHRMapParser.NEWLINE = 44;
SHRMapParser.COMMENT = 45;
SHRMapParser.LINE_COMMENT = 46;
SHRMapParser.TARGET_PHRASE = 47;
SHRMapParser.WS2 = 48;
SHRMapParser.TARGET_WORD = 49;
SHRMapParser.WS3 = 50;
SHRMapParser.TARGET_WORD_2 = 51;
SHRMapParser.TARGET_PHRASE_2 = 52;
SHRMapParser.WS4 = 53;

SHRMapParser.RULE_doc = 0;
SHRMapParser.RULE_docHeader = 1;
SHRMapParser.RULE_targetStatement = 2;
SHRMapParser.RULE_mappingDefs = 3;
SHRMapParser.RULE_mappingDef = 4;
SHRMapParser.RULE_mappingDefHeader = 5;
SHRMapParser.RULE_mappingRule = 6;
SHRMapParser.RULE_fieldMapping = 7;
SHRMapParser.RULE_source = 8;
SHRMapParser.RULE_sourcePart = 9;
SHRMapParser.RULE_sourceWord = 10;
SHRMapParser.RULE_cardMapping = 11;
SHRMapParser.RULE_fixedMapping = 12;
SHRMapParser.RULE_version = 13;
SHRMapParser.RULE_namespace = 14;
SHRMapParser.RULE_specialWord = 15;
SHRMapParser.RULE_simpleName = 16;
SHRMapParser.RULE_fullyQualifiedName = 17;
SHRMapParser.RULE_simpleOrFQName = 18;
SHRMapParser.RULE_primitive = 19;
SHRMapParser.RULE_count = 20;
SHRMapParser.RULE_tbd = 21;

function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.docHeader = function() {
    return this.getTypedRuleContext(DocHeaderContext,0);
};

DocContext.prototype.targetStatement = function() {
    return this.getTypedRuleContext(TargetStatementContext,0);
};

DocContext.prototype.mappingDefs = function() {
    return this.getTypedRuleContext(MappingDefsContext,0);
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitDoc(this);
	}
};

DocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.DocContext = DocContext;

SHRMapParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SHRMapParser.RULE_doc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.docHeader();
        this.state = 45;
        this.targetStatement();
        this.state = 46;
        this.mappingDefs();
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
    this.ruleIndex = SHRMapParser.RULE_docHeader;
    return this;
}

DocHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocHeaderContext.prototype.constructor = DocHeaderContext;

DocHeaderContext.prototype.KW_GRAMMAR = function() {
    return this.getToken(SHRMapParser.KW_GRAMMAR, 0);
};

DocHeaderContext.prototype.KW_G_MAP = function() {
    return this.getToken(SHRMapParser.KW_G_MAP, 0);
};

DocHeaderContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

DocHeaderContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRMapParser.KW_NAMESPACE, 0);
};

DocHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

DocHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterDocHeader(this);
	}
};

DocHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitDocHeader(this);
	}
};

DocHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitDocHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.DocHeaderContext = DocHeaderContext;

SHRMapParser.prototype.docHeader = function() {

    var localctx = new DocHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SHRMapParser.RULE_docHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 48;
        this.match(SHRMapParser.KW_GRAMMAR);
        this.state = 49;
        this.match(SHRMapParser.KW_G_MAP);
        this.state = 50;
        this.version();
        this.state = 51;
        this.match(SHRMapParser.KW_NAMESPACE);
        this.state = 52;
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

function TargetStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_targetStatement;
    return this;
}

TargetStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetStatementContext.prototype.constructor = TargetStatementContext;

TargetStatementContext.prototype.KW_TARGET = function() {
    return this.getToken(SHRMapParser.KW_TARGET, 0);
};

TargetStatementContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

TargetStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterTargetStatement(this);
	}
};

TargetStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitTargetStatement(this);
	}
};

TargetStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitTargetStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.TargetStatementContext = TargetStatementContext;

SHRMapParser.prototype.targetStatement = function() {

    var localctx = new TargetStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SHRMapParser.RULE_targetStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(SHRMapParser.KW_TARGET);
        this.state = 55;
        this.simpleName();
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

function MappingDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_mappingDefs;
    return this;
}

MappingDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingDefsContext.prototype.constructor = MappingDefsContext;

MappingDefsContext.prototype.mappingDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MappingDefContext);
    } else {
        return this.getTypedRuleContext(MappingDefContext,i);
    }
};

MappingDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterMappingDefs(this);
	}
};

MappingDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitMappingDefs(this);
	}
};

MappingDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitMappingDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.MappingDefsContext = MappingDefsContext;

SHRMapParser.prototype.mappingDefs = function() {

    var localctx = new MappingDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SHRMapParser.RULE_mappingDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRMapParser.ALL_CAPS || _la===SHRMapParser.UPPER_WORD) {
            this.state = 57;
            this.mappingDef();
            this.state = 62;
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

function MappingDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_mappingDef;
    return this;
}

MappingDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingDefContext.prototype.constructor = MappingDefContext;

MappingDefContext.prototype.mappingDefHeader = function() {
    return this.getTypedRuleContext(MappingDefHeaderContext,0);
};

MappingDefContext.prototype.mappingRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MappingRuleContext);
    } else {
        return this.getTypedRuleContext(MappingRuleContext,i);
    }
};

MappingDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterMappingDef(this);
	}
};

MappingDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitMappingDef(this);
	}
};

MappingDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitMappingDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.MappingDefContext = MappingDefContext;

SHRMapParser.prototype.mappingDef = function() {

    var localctx = new MappingDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SHRMapParser.RULE_mappingDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.mappingDefHeader();
        this.state = 67;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 64;
                this.mappingRule(); 
            }
            this.state = 69;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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

function MappingDefHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_mappingDefHeader;
    return this;
}

MappingDefHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingDefHeaderContext.prototype.constructor = MappingDefHeaderContext;

MappingDefHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

MappingDefHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRMapParser.COLON, 0);
};

MappingDefHeaderContext.prototype.KW_MAPS_TO = function() {
    return this.getToken(SHRMapParser.KW_MAPS_TO, 0);
};

MappingDefHeaderContext.prototype.TARGET_PHRASE = function() {
    return this.getToken(SHRMapParser.TARGET_PHRASE, 0);
};

MappingDefHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterMappingDefHeader(this);
	}
};

MappingDefHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitMappingDefHeader(this);
	}
};

MappingDefHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitMappingDefHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.MappingDefHeaderContext = MappingDefHeaderContext;

SHRMapParser.prototype.mappingDefHeader = function() {

    var localctx = new MappingDefHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SHRMapParser.RULE_mappingDefHeader);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.simpleName();
        this.state = 73;
        _la = this._input.LA(1);
        if(_la===SHRMapParser.KW_MAPS_TO) {
            this.state = 71;
            this.match(SHRMapParser.KW_MAPS_TO);
            this.state = 72;
            this.match(SHRMapParser.TARGET_PHRASE);
        }

        this.state = 75;
        this.match(SHRMapParser.COLON);
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

function MappingRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_mappingRule;
    return this;
}

MappingRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingRuleContext.prototype.constructor = MappingRuleContext;

MappingRuleContext.prototype.fieldMapping = function() {
    return this.getTypedRuleContext(FieldMappingContext,0);
};

MappingRuleContext.prototype.cardMapping = function() {
    return this.getTypedRuleContext(CardMappingContext,0);
};

MappingRuleContext.prototype.fixedMapping = function() {
    return this.getTypedRuleContext(FixedMappingContext,0);
};

MappingRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterMappingRule(this);
	}
};

MappingRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitMappingRule(this);
	}
};

MappingRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitMappingRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.MappingRuleContext = MappingRuleContext;

SHRMapParser.prototype.mappingRule = function() {

    var localctx = new MappingRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRMapParser.RULE_mappingRule);
    try {
        this.state = 80;
        switch(this._input.LA(1)) {
        case SHRMapParser.KW_TBD:
        case SHRMapParser.KW_BAR_CONCEPT:
        case SHRMapParser.KW_BAR_ENTRY:
        case SHRMapParser.KW_BAR_VALUE:
        case SHRMapParser.KW_BOOLEAN:
        case SHRMapParser.KW_INTEGER:
        case SHRMapParser.KW_STRING:
        case SHRMapParser.KW_DECIMAL:
        case SHRMapParser.KW_URI:
        case SHRMapParser.KW_BASE64_BINARY:
        case SHRMapParser.KW_INSTANT:
        case SHRMapParser.KW_DATE:
        case SHRMapParser.KW_DATE_TIME:
        case SHRMapParser.KW_TIME:
        case SHRMapParser.KW_CONCEPT_CODE:
        case SHRMapParser.KW_OID:
        case SHRMapParser.KW_ID:
        case SHRMapParser.KW_MARKDOWN:
        case SHRMapParser.KW_UNSIGNED_INT:
        case SHRMapParser.KW_POSITIVE_INT:
        case SHRMapParser.KW_XHTML:
        case SHRMapParser.ALL_CAPS:
        case SHRMapParser.UPPER_WORD:
        case SHRMapParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this.fieldMapping();
            break;
        case SHRMapParser.KW_CONSTRAIN:
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this.cardMapping();
            break;
        case SHRMapParser.KW_FIX:
            this.enterOuterAlt(localctx, 3);
            this.state = 79;
            this.fixedMapping();
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

function FieldMappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_fieldMapping;
    return this;
}

FieldMappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldMappingContext.prototype.constructor = FieldMappingContext;

FieldMappingContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

FieldMappingContext.prototype.KW_MAPS_TO = function() {
    return this.getToken(SHRMapParser.KW_MAPS_TO, 0);
};

FieldMappingContext.prototype.TARGET_PHRASE = function() {
    return this.getToken(SHRMapParser.TARGET_PHRASE, 0);
};

FieldMappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterFieldMapping(this);
	}
};

FieldMappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitFieldMapping(this);
	}
};

FieldMappingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitFieldMapping(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.FieldMappingContext = FieldMappingContext;

SHRMapParser.prototype.fieldMapping = function() {

    var localctx = new FieldMappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRMapParser.RULE_fieldMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.source();
        this.state = 83;
        this.match(SHRMapParser.KW_MAPS_TO);
        this.state = 84;
        this.match(SHRMapParser.TARGET_PHRASE);
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

function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.sourcePart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourcePartContext);
    } else {
        return this.getTypedRuleContext(SourcePartContext,i);
    }
};

SourceContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRMapParser.DOT);
    } else {
        return this.getToken(SHRMapParser.DOT, i);
    }
};


SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitSource(this);
	}
};

SourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.SourceContext = SourceContext;

SHRMapParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SHRMapParser.RULE_source);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.sourcePart();
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRMapParser.DOT) {
            this.state = 87;
            this.match(SHRMapParser.DOT);
            this.state = 88;
            this.sourcePart();
            this.state = 93;
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

function SourcePartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_sourcePart;
    return this;
}

SourcePartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourcePartContext.prototype.constructor = SourcePartContext;

SourcePartContext.prototype.sourceWord = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SourceWordContext);
    } else {
        return this.getTypedRuleContext(SourceWordContext,i);
    }
};

SourcePartContext.prototype.OPEN_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRMapParser.OPEN_BRACKET);
    } else {
        return this.getToken(SHRMapParser.OPEN_BRACKET, i);
    }
};


SourcePartContext.prototype.CLOSE_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRMapParser.CLOSE_BRACKET);
    } else {
        return this.getToken(SHRMapParser.CLOSE_BRACKET, i);
    }
};


SourcePartContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterSourcePart(this);
	}
};

SourcePartContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitSourcePart(this);
	}
};

SourcePartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitSourcePart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.SourcePartContext = SourcePartContext;

SHRMapParser.prototype.sourcePart = function() {

    var localctx = new SourcePartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SHRMapParser.RULE_sourcePart);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this.sourceWord();
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRMapParser.OPEN_BRACKET) {
            this.state = 95;
            this.match(SHRMapParser.OPEN_BRACKET);
            this.state = 96;
            this.sourceWord();
            this.state = 97;
            this.match(SHRMapParser.CLOSE_BRACKET);
            this.state = 103;
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

function SourceWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_sourceWord;
    return this;
}

SourceWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceWordContext.prototype.constructor = SourceWordContext;

SourceWordContext.prototype.specialWord = function() {
    return this.getTypedRuleContext(SpecialWordContext,0);
};

SourceWordContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

SourceWordContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

SourceWordContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

SourceWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterSourceWord(this);
	}
};

SourceWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitSourceWord(this);
	}
};

SourceWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitSourceWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.SourceWordContext = SourceWordContext;

SHRMapParser.prototype.sourceWord = function() {

    var localctx = new SourceWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SHRMapParser.RULE_sourceWord);
    try {
        this.state = 108;
        switch(this._input.LA(1)) {
        case SHRMapParser.KW_BAR_CONCEPT:
        case SHRMapParser.KW_BAR_ENTRY:
        case SHRMapParser.KW_BAR_VALUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.specialWord();
            break;
        case SHRMapParser.ALL_CAPS:
        case SHRMapParser.UPPER_WORD:
        case SHRMapParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 105;
            this.simpleOrFQName();
            break;
        case SHRMapParser.KW_BOOLEAN:
        case SHRMapParser.KW_INTEGER:
        case SHRMapParser.KW_STRING:
        case SHRMapParser.KW_DECIMAL:
        case SHRMapParser.KW_URI:
        case SHRMapParser.KW_BASE64_BINARY:
        case SHRMapParser.KW_INSTANT:
        case SHRMapParser.KW_DATE:
        case SHRMapParser.KW_DATE_TIME:
        case SHRMapParser.KW_TIME:
        case SHRMapParser.KW_CONCEPT_CODE:
        case SHRMapParser.KW_OID:
        case SHRMapParser.KW_ID:
        case SHRMapParser.KW_MARKDOWN:
        case SHRMapParser.KW_UNSIGNED_INT:
        case SHRMapParser.KW_POSITIVE_INT:
        case SHRMapParser.KW_XHTML:
            this.enterOuterAlt(localctx, 3);
            this.state = 106;
            this.primitive();
            break;
        case SHRMapParser.KW_TBD:
            this.enterOuterAlt(localctx, 4);
            this.state = 107;
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

function CardMappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_cardMapping;
    return this;
}

CardMappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CardMappingContext.prototype.constructor = CardMappingContext;

CardMappingContext.prototype.KW_CONSTRAIN = function() {
    return this.getToken(SHRMapParser.KW_CONSTRAIN, 0);
};

CardMappingContext.prototype.TARGET_WORD = function() {
    return this.getToken(SHRMapParser.TARGET_WORD, 0);
};

CardMappingContext.prototype.KW_TO = function() {
    return this.getToken(SHRMapParser.KW_TO, 0);
};

CardMappingContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

CardMappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterCardMapping(this);
	}
};

CardMappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitCardMapping(this);
	}
};

CardMappingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitCardMapping(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.CardMappingContext = CardMappingContext;

SHRMapParser.prototype.cardMapping = function() {

    var localctx = new CardMappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SHRMapParser.RULE_cardMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(SHRMapParser.KW_CONSTRAIN);
        this.state = 111;
        this.match(SHRMapParser.TARGET_WORD);
        this.state = 112;
        this.match(SHRMapParser.KW_TO);
        this.state = 113;
        this.count();
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

function FixedMappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_fixedMapping;
    return this;
}

FixedMappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FixedMappingContext.prototype.constructor = FixedMappingContext;

FixedMappingContext.prototype.KW_FIX = function() {
    return this.getToken(SHRMapParser.KW_FIX, 0);
};

FixedMappingContext.prototype.TARGET_WORD_2 = function() {
    return this.getToken(SHRMapParser.TARGET_WORD_2, 0);
};

FixedMappingContext.prototype.TARGET_PHRASE_2 = function() {
    return this.getToken(SHRMapParser.TARGET_PHRASE_2, 0);
};

FixedMappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterFixedMapping(this);
	}
};

FixedMappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitFixedMapping(this);
	}
};

FixedMappingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitFixedMapping(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.FixedMappingContext = FixedMappingContext;

SHRMapParser.prototype.fixedMapping = function() {

    var localctx = new FixedMappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRMapParser.RULE_fixedMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(SHRMapParser.KW_FIX);
        this.state = 116;
        this.match(SHRMapParser.TARGET_WORD_2);
        this.state = 117;
        this.match(SHRMapParser.TARGET_PHRASE_2);
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
    this.ruleIndex = SHRMapParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRMapParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRMapParser.WHOLE_NUMBER, i);
    }
};


VersionContext.prototype.DOT = function() {
    return this.getToken(SHRMapParser.DOT, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.VersionContext = VersionContext;

SHRMapParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SHRMapParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(SHRMapParser.WHOLE_NUMBER);
        this.state = 120;
        this.match(SHRMapParser.DOT);
        this.state = 121;
        this.match(SHRMapParser.WHOLE_NUMBER);
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
    this.ruleIndex = SHRMapParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRMapParser.LOWER_WORD, 0);
};

NamespaceContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRMapParser.DOT_SEPARATED_LW, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.NamespaceContext = NamespaceContext;

SHRMapParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SHRMapParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        _la = this._input.LA(1);
        if(!(_la===SHRMapParser.LOWER_WORD || _la===SHRMapParser.DOT_SEPARATED_LW)) {
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

function SpecialWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_specialWord;
    return this;
}

SpecialWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpecialWordContext.prototype.constructor = SpecialWordContext;

SpecialWordContext.prototype.KW_BAR_CONCEPT = function() {
    return this.getToken(SHRMapParser.KW_BAR_CONCEPT, 0);
};

SpecialWordContext.prototype.KW_BAR_ENTRY = function() {
    return this.getToken(SHRMapParser.KW_BAR_ENTRY, 0);
};

SpecialWordContext.prototype.KW_BAR_VALUE = function() {
    return this.getToken(SHRMapParser.KW_BAR_VALUE, 0);
};

SpecialWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterSpecialWord(this);
	}
};

SpecialWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitSpecialWord(this);
	}
};

SpecialWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitSpecialWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.SpecialWordContext = SpecialWordContext;

SHRMapParser.prototype.specialWord = function() {

    var localctx = new SpecialWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRMapParser.RULE_specialWord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRMapParser.KW_BAR_CONCEPT) | (1 << SHRMapParser.KW_BAR_ENTRY) | (1 << SHRMapParser.KW_BAR_VALUE))) !== 0))) {
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
    this.ruleIndex = SHRMapParser.RULE_simpleName;
    return this;
}

SimpleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleNameContext.prototype.constructor = SimpleNameContext;

SimpleNameContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRMapParser.UPPER_WORD, 0);
};

SimpleNameContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRMapParser.ALL_CAPS, 0);
};

SimpleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterSimpleName(this);
	}
};

SimpleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitSimpleName(this);
	}
};

SimpleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitSimpleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.SimpleNameContext = SimpleNameContext;

SHRMapParser.prototype.simpleName = function() {

    var localctx = new SimpleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SHRMapParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        _la = this._input.LA(1);
        if(!(_la===SHRMapParser.ALL_CAPS || _la===SHRMapParser.UPPER_WORD)) {
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

function FullyQualifiedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_fullyQualifiedName;
    return this;
}

FullyQualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedNameContext.prototype.constructor = FullyQualifiedNameContext;

FullyQualifiedNameContext.prototype.DOT_SEPARATED_UW = function() {
    return this.getToken(SHRMapParser.DOT_SEPARATED_UW, 0);
};

FullyQualifiedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitFullyQualifiedName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.FullyQualifiedNameContext = FullyQualifiedNameContext;

SHRMapParser.prototype.fullyQualifiedName = function() {

    var localctx = new FullyQualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SHRMapParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(SHRMapParser.DOT_SEPARATED_UW);
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

function SimpleOrFQNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_simpleOrFQName;
    return this;
}

SimpleOrFQNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleOrFQNameContext.prototype.constructor = SimpleOrFQNameContext;

SimpleOrFQNameContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

SimpleOrFQNameContext.prototype.fullyQualifiedName = function() {
    return this.getTypedRuleContext(FullyQualifiedNameContext,0);
};

SimpleOrFQNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitSimpleOrFQName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.SimpleOrFQNameContext = SimpleOrFQNameContext;

SHRMapParser.prototype.simpleOrFQName = function() {

    var localctx = new SimpleOrFQNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SHRMapParser.RULE_simpleOrFQName);
    try {
        this.state = 133;
        switch(this._input.LA(1)) {
        case SHRMapParser.ALL_CAPS:
        case SHRMapParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.simpleName();
            break;
        case SHRMapParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 132;
            this.fullyQualifiedName();
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

function PrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_primitive;
    return this;
}

PrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveContext.prototype.constructor = PrimitiveContext;

PrimitiveContext.prototype.KW_BOOLEAN = function() {
    return this.getToken(SHRMapParser.KW_BOOLEAN, 0);
};

PrimitiveContext.prototype.KW_INTEGER = function() {
    return this.getToken(SHRMapParser.KW_INTEGER, 0);
};

PrimitiveContext.prototype.KW_STRING = function() {
    return this.getToken(SHRMapParser.KW_STRING, 0);
};

PrimitiveContext.prototype.KW_DECIMAL = function() {
    return this.getToken(SHRMapParser.KW_DECIMAL, 0);
};

PrimitiveContext.prototype.KW_URI = function() {
    return this.getToken(SHRMapParser.KW_URI, 0);
};

PrimitiveContext.prototype.KW_BASE64_BINARY = function() {
    return this.getToken(SHRMapParser.KW_BASE64_BINARY, 0);
};

PrimitiveContext.prototype.KW_INSTANT = function() {
    return this.getToken(SHRMapParser.KW_INSTANT, 0);
};

PrimitiveContext.prototype.KW_DATE = function() {
    return this.getToken(SHRMapParser.KW_DATE, 0);
};

PrimitiveContext.prototype.KW_DATE_TIME = function() {
    return this.getToken(SHRMapParser.KW_DATE_TIME, 0);
};

PrimitiveContext.prototype.KW_TIME = function() {
    return this.getToken(SHRMapParser.KW_TIME, 0);
};

PrimitiveContext.prototype.KW_CONCEPT_CODE = function() {
    return this.getToken(SHRMapParser.KW_CONCEPT_CODE, 0);
};

PrimitiveContext.prototype.KW_OID = function() {
    return this.getToken(SHRMapParser.KW_OID, 0);
};

PrimitiveContext.prototype.KW_ID = function() {
    return this.getToken(SHRMapParser.KW_ID, 0);
};

PrimitiveContext.prototype.KW_MARKDOWN = function() {
    return this.getToken(SHRMapParser.KW_MARKDOWN, 0);
};

PrimitiveContext.prototype.KW_UNSIGNED_INT = function() {
    return this.getToken(SHRMapParser.KW_UNSIGNED_INT, 0);
};

PrimitiveContext.prototype.KW_POSITIVE_INT = function() {
    return this.getToken(SHRMapParser.KW_POSITIVE_INT, 0);
};

PrimitiveContext.prototype.KW_XHTML = function() {
    return this.getToken(SHRMapParser.KW_XHTML, 0);
};

PrimitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterPrimitive(this);
	}
};

PrimitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitPrimitive(this);
	}
};

PrimitiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitPrimitive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.PrimitiveContext = PrimitiveContext;

SHRMapParser.prototype.primitive = function() {

    var localctx = new PrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SHRMapParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        _la = this._input.LA(1);
        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (SHRMapParser.KW_BOOLEAN - 19)) | (1 << (SHRMapParser.KW_INTEGER - 19)) | (1 << (SHRMapParser.KW_STRING - 19)) | (1 << (SHRMapParser.KW_DECIMAL - 19)) | (1 << (SHRMapParser.KW_URI - 19)) | (1 << (SHRMapParser.KW_BASE64_BINARY - 19)) | (1 << (SHRMapParser.KW_INSTANT - 19)) | (1 << (SHRMapParser.KW_DATE - 19)) | (1 << (SHRMapParser.KW_DATE_TIME - 19)) | (1 << (SHRMapParser.KW_TIME - 19)) | (1 << (SHRMapParser.KW_CONCEPT_CODE - 19)) | (1 << (SHRMapParser.KW_OID - 19)) | (1 << (SHRMapParser.KW_ID - 19)) | (1 << (SHRMapParser.KW_MARKDOWN - 19)) | (1 << (SHRMapParser.KW_UNSIGNED_INT - 19)) | (1 << (SHRMapParser.KW_POSITIVE_INT - 19)) | (1 << (SHRMapParser.KW_XHTML - 19)))) !== 0))) {
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

function CountContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_count;
    return this;
}

CountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountContext.prototype.constructor = CountContext;

CountContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRMapParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRMapParser.WHOLE_NUMBER, i);
    }
};


CountContext.prototype.RANGE = function() {
    return this.getToken(SHRMapParser.RANGE, 0);
};

CountContext.prototype.STAR = function() {
    return this.getToken(SHRMapParser.STAR, 0);
};

CountContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterCount(this);
	}
};

CountContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitCount(this);
	}
};

CountContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitCount(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.CountContext = CountContext;

SHRMapParser.prototype.count = function() {

    var localctx = new CountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SHRMapParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(SHRMapParser.WHOLE_NUMBER);
        this.state = 138;
        this.match(SHRMapParser.RANGE);
        this.state = 139;
        _la = this._input.LA(1);
        if(!(_la===SHRMapParser.STAR || _la===SHRMapParser.WHOLE_NUMBER)) {
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

function TbdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRMapParser.RULE_tbd;
    return this;
}

TbdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TbdContext.prototype.constructor = TbdContext;

TbdContext.prototype.KW_TBD = function() {
    return this.getToken(SHRMapParser.KW_TBD, 0);
};

TbdContext.prototype.STRING = function() {
    return this.getToken(SHRMapParser.STRING, 0);
};

TbdContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.enterTbd(this);
	}
};

TbdContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRMapParserListener ) {
        listener.exitTbd(this);
	}
};

TbdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRMapParserVisitor ) {
        return visitor.visitTbd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRMapParser.TbdContext = TbdContext;

SHRMapParser.prototype.tbd = function() {

    var localctx = new TbdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SHRMapParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(SHRMapParser.KW_TBD);
        this.state = 143;
        _la = this._input.LA(1);
        if(_la===SHRMapParser.STRING) {
            this.state = 142;
            this.match(SHRMapParser.STRING);
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


exports.SHRMapParser = SHRMapParser;
