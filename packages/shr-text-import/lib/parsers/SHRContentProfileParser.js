// Generated from SHRContentProfileParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRContentProfileParserListener = require('./SHRContentProfileParserListener').SHRContentProfileParserListener;
var SHRContentProfileParserVisitor = require('./SHRContentProfileParserVisitor').SHRContentProfileParserVisitor;

var grammarFileName = "SHRContentProfileParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\25{\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t",
    "\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4",
    "\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3",
    "\4\3\4\3\4\7\4\63\n\4\f\4\16\4\66\13\4\3\5\3\5\3\5\5\5;\n\5\3\6\7\6",
    ">\n\6\f\6\16\6A\13\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7J\n\7\3\b\3\b\3",
    "\b\3\t\7\tP\n\t\f\t\16\tS\13\t\3\n\3\n\3\n\3\13\6\13Y\n\13\r\13\16\13",
    "Z\3\f\3\f\3\r\6\r`\n\r\r\r\16\ra\3\16\3\16\3\17\3\17\3\20\3\20\3\20",
    "\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\23\6\23s\n\23\r\23\16\23t\3\24",
    "\3\24\5\24y\n\24\3\24\2\2\25\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36",
    " \"$&\2\5\3\2\7\b\3\2\16\17\3\2\f\16q\2(\3\2\2\2\4+\3\2\2\2\6\64\3\2",
    "\2\2\b\67\3\2\2\2\n?\3\2\2\2\fI\3\2\2\2\16K\3\2\2\2\20Q\3\2\2\2\22T",
    "\3\2\2\2\24X\3\2\2\2\26\\\3\2\2\2\30_\3\2\2\2\32c\3\2\2\2\34e\3\2\2",
    "\2\36g\3\2\2\2 k\3\2\2\2\"m\3\2\2\2$o\3\2\2\2&x\3\2\2\2()\5\4\3\2)*",
    "\5\6\4\2*\3\3\2\2\2+,\7\3\2\2,-\7\4\2\2-.\5\36\20\2.\5\3\2\2\2/\60\5",
    "\b\5\2\60\61\5\n\6\2\61\63\3\2\2\2\62/\3\2\2\2\63\66\3\2\2\2\64\62\3",
    "\2\2\2\64\65\3\2\2\2\65\7\3\2\2\2\66\64\3\2\2\2\678\7\5\2\28:\5 \21",
    "\29;\5\34\17\2:9\3\2\2\2:;\3\2\2\2;\t\3\2\2\2<>\5\f\7\2=<\3\2\2\2>A",
    "\3\2\2\2?=\3\2\2\2?@\3\2\2\2@\13\3\2\2\2A?\3\2\2\2BC\5\16\b\2CD\5\20",
    "\t\2DJ\3\2\2\2EF\5\16\b\2FG\5\30\r\2GJ\3\2\2\2HJ\5\16\b\2IB\3\2\2\2",
    "IE\3\2\2\2IH\3\2\2\2J\r\3\2\2\2KL\5\"\22\2LM\7\n\2\2M\17\3\2\2\2NP\5",
    "\22\n\2ON\3\2\2\2PS\3\2\2\2QO\3\2\2\2QR\3\2\2\2R\21\3\2\2\2SQ\3\2\2",
    "\2TU\5&\24\2UV\5\24\13\2V\23\3\2\2\2WY\5\26\f\2XW\3\2\2\2YZ\3\2\2\2",
    "ZX\3\2\2\2Z[\3\2\2\2[\25\3\2\2\2\\]\7\6\2\2]\27\3\2\2\2^`\5\32\16\2",
    "_^\3\2\2\2`a\3\2\2\2a_\3\2\2\2ab\3\2\2\2b\31\3\2\2\2cd\7\7\2\2d\33\3",
    "\2\2\2ef\t\2\2\2f\35\3\2\2\2gh\7\13\2\2hi\7\t\2\2ij\7\13\2\2j\37\3\2",
    "\2\2kl\t\3\2\2l!\3\2\2\2mn\t\4\2\2n#\3\2\2\2or\5\"\22\2pq\7\t\2\2qs",
    "\5\"\22\2rp\3\2\2\2st\3\2\2\2tr\3\2\2\2tu\3\2\2\2u%\3\2\2\2vy\5\"\22",
    "\2wy\5$\23\2xv\3\2\2\2xw\3\2\2\2y\'\3\2\2\2\13\64:?IQZatx"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'ContentProfile'", "'Namespace:'", 
                     "'MS'", "'NP'", "'*'", "'.'", "':'", 'null', 'null', 
                     'null', 'null', 'null', 'null', 'null', 'null', "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_CONTENT_PROFILE", "KW_NAMESPACE", 
                      "KW_MUST_SUPPORT", "KW_NO_PROFILE", "KW_ALL_PRIMARY", 
                      "DOT", "COLON", "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", 
                      "LOWER_WORD", "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", 
                      "STRING", "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "doc", "docHeader", "contentsDefs", "namespaceHeader", 
                   "contentDefs", "contentDef", "contentHeader", "cpRules", 
                   "cpRule", "flags", "flag", "headerFlags", "headerFlag", 
                   "namespaceFlag", "version", "namespace", "simpleName", 
                   "pathName", "simpleOrPathName" ];

function SHRContentProfileParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SHRContentProfileParser.prototype = Object.create(antlr4.Parser.prototype);
SHRContentProfileParser.prototype.constructor = SHRContentProfileParser;

Object.defineProperty(SHRContentProfileParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SHRContentProfileParser.EOF = antlr4.Token.EOF;
SHRContentProfileParser.KW_GRAMMAR = 1;
SHRContentProfileParser.KW_G_CONTENT_PROFILE = 2;
SHRContentProfileParser.KW_NAMESPACE = 3;
SHRContentProfileParser.KW_MUST_SUPPORT = 4;
SHRContentProfileParser.KW_NO_PROFILE = 5;
SHRContentProfileParser.KW_ALL_PRIMARY = 6;
SHRContentProfileParser.DOT = 7;
SHRContentProfileParser.COLON = 8;
SHRContentProfileParser.WHOLE_NUMBER = 9;
SHRContentProfileParser.ALL_CAPS = 10;
SHRContentProfileParser.UPPER_WORD = 11;
SHRContentProfileParser.LOWER_WORD = 12;
SHRContentProfileParser.DOT_SEPARATED_LW = 13;
SHRContentProfileParser.DOT_SEPARATED_UW = 14;
SHRContentProfileParser.STRING = 15;
SHRContentProfileParser.WS = 16;
SHRContentProfileParser.NEWLINE = 17;
SHRContentProfileParser.COMMENT = 18;
SHRContentProfileParser.LINE_COMMENT = 19;

SHRContentProfileParser.RULE_doc = 0;
SHRContentProfileParser.RULE_docHeader = 1;
SHRContentProfileParser.RULE_contentsDefs = 2;
SHRContentProfileParser.RULE_namespaceHeader = 3;
SHRContentProfileParser.RULE_contentDefs = 4;
SHRContentProfileParser.RULE_contentDef = 5;
SHRContentProfileParser.RULE_contentHeader = 6;
SHRContentProfileParser.RULE_cpRules = 7;
SHRContentProfileParser.RULE_cpRule = 8;
SHRContentProfileParser.RULE_flags = 9;
SHRContentProfileParser.RULE_flag = 10;
SHRContentProfileParser.RULE_headerFlags = 11;
SHRContentProfileParser.RULE_headerFlag = 12;
SHRContentProfileParser.RULE_namespaceFlag = 13;
SHRContentProfileParser.RULE_version = 14;
SHRContentProfileParser.RULE_namespace = 15;
SHRContentProfileParser.RULE_simpleName = 16;
SHRContentProfileParser.RULE_pathName = 17;
SHRContentProfileParser.RULE_simpleOrPathName = 18;

function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.docHeader = function() {
    return this.getTypedRuleContext(DocHeaderContext,0);
};

DocContext.prototype.contentsDefs = function() {
    return this.getTypedRuleContext(ContentsDefsContext,0);
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitDoc(this);
	}
};

DocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.DocContext = DocContext;

SHRContentProfileParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SHRContentProfileParser.RULE_doc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.docHeader();
        this.state = 39;
        this.contentsDefs();
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
    this.ruleIndex = SHRContentProfileParser.RULE_docHeader;
    return this;
}

DocHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocHeaderContext.prototype.constructor = DocHeaderContext;

DocHeaderContext.prototype.KW_GRAMMAR = function() {
    return this.getToken(SHRContentProfileParser.KW_GRAMMAR, 0);
};

DocHeaderContext.prototype.KW_G_CONTENT_PROFILE = function() {
    return this.getToken(SHRContentProfileParser.KW_G_CONTENT_PROFILE, 0);
};

DocHeaderContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

DocHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterDocHeader(this);
	}
};

DocHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitDocHeader(this);
	}
};

DocHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitDocHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.DocHeaderContext = DocHeaderContext;

SHRContentProfileParser.prototype.docHeader = function() {

    var localctx = new DocHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SHRContentProfileParser.RULE_docHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(SHRContentProfileParser.KW_GRAMMAR);
        this.state = 42;
        this.match(SHRContentProfileParser.KW_G_CONTENT_PROFILE);
        this.state = 43;
        this.version();
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

function ContentsDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_contentsDefs;
    return this;
}

ContentsDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentsDefsContext.prototype.constructor = ContentsDefsContext;

ContentsDefsContext.prototype.namespaceHeader = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NamespaceHeaderContext);
    } else {
        return this.getTypedRuleContext(NamespaceHeaderContext,i);
    }
};

ContentsDefsContext.prototype.contentDefs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ContentDefsContext);
    } else {
        return this.getTypedRuleContext(ContentDefsContext,i);
    }
};

ContentsDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterContentsDefs(this);
	}
};

ContentsDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitContentsDefs(this);
	}
};

ContentsDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitContentsDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.ContentsDefsContext = ContentsDefsContext;

SHRContentProfileParser.prototype.contentsDefs = function() {

    var localctx = new ContentsDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SHRContentProfileParser.RULE_contentsDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRContentProfileParser.KW_NAMESPACE) {
            this.state = 45;
            this.namespaceHeader();
            this.state = 46;
            this.contentDefs();
            this.state = 52;
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

function NamespaceHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_namespaceHeader;
    return this;
}

NamespaceHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceHeaderContext.prototype.constructor = NamespaceHeaderContext;

NamespaceHeaderContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRContentProfileParser.KW_NAMESPACE, 0);
};

NamespaceHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

NamespaceHeaderContext.prototype.namespaceFlag = function() {
    return this.getTypedRuleContext(NamespaceFlagContext,0);
};

NamespaceHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterNamespaceHeader(this);
	}
};

NamespaceHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitNamespaceHeader(this);
	}
};

NamespaceHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitNamespaceHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.NamespaceHeaderContext = NamespaceHeaderContext;

SHRContentProfileParser.prototype.namespaceHeader = function() {

    var localctx = new NamespaceHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SHRContentProfileParser.RULE_namespaceHeader);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(SHRContentProfileParser.KW_NAMESPACE);
        this.state = 54;
        this.namespace();
        this.state = 56;
        _la = this._input.LA(1);
        if(_la===SHRContentProfileParser.KW_NO_PROFILE || _la===SHRContentProfileParser.KW_ALL_PRIMARY) {
            this.state = 55;
            this.namespaceFlag();
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

function ContentDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_contentDefs;
    return this;
}

ContentDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentDefsContext.prototype.constructor = ContentDefsContext;

ContentDefsContext.prototype.contentDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ContentDefContext);
    } else {
        return this.getTypedRuleContext(ContentDefContext,i);
    }
};

ContentDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterContentDefs(this);
	}
};

ContentDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitContentDefs(this);
	}
};

ContentDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitContentDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.ContentDefsContext = ContentDefsContext;

SHRContentProfileParser.prototype.contentDefs = function() {

    var localctx = new ContentDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SHRContentProfileParser.RULE_contentDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRContentProfileParser.ALL_CAPS) | (1 << SHRContentProfileParser.UPPER_WORD) | (1 << SHRContentProfileParser.LOWER_WORD))) !== 0)) {
            this.state = 58;
            this.contentDef();
            this.state = 63;
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

function ContentDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_contentDef;
    return this;
}

ContentDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentDefContext.prototype.constructor = ContentDefContext;

ContentDefContext.prototype.contentHeader = function() {
    return this.getTypedRuleContext(ContentHeaderContext,0);
};

ContentDefContext.prototype.cpRules = function() {
    return this.getTypedRuleContext(CpRulesContext,0);
};

ContentDefContext.prototype.headerFlags = function() {
    return this.getTypedRuleContext(HeaderFlagsContext,0);
};

ContentDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterContentDef(this);
	}
};

ContentDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitContentDef(this);
	}
};

ContentDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitContentDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.ContentDefContext = ContentDefContext;

SHRContentProfileParser.prototype.contentDef = function() {

    var localctx = new ContentDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SHRContentProfileParser.RULE_contentDef);
    try {
        this.state = 71;
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 64;
            this.contentHeader();
            this.state = 65;
            this.cpRules();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
            this.contentHeader();
            this.state = 68;
            this.headerFlags();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 70;
            this.contentHeader();
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

function ContentHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_contentHeader;
    return this;
}

ContentHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContentHeaderContext.prototype.constructor = ContentHeaderContext;

ContentHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ContentHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRContentProfileParser.COLON, 0);
};

ContentHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterContentHeader(this);
	}
};

ContentHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitContentHeader(this);
	}
};

ContentHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitContentHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.ContentHeaderContext = ContentHeaderContext;

SHRContentProfileParser.prototype.contentHeader = function() {

    var localctx = new ContentHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRContentProfileParser.RULE_contentHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.simpleName();
        this.state = 74;
        this.match(SHRContentProfileParser.COLON);
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

function CpRulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_cpRules;
    return this;
}

CpRulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CpRulesContext.prototype.constructor = CpRulesContext;

CpRulesContext.prototype.cpRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CpRuleContext);
    } else {
        return this.getTypedRuleContext(CpRuleContext,i);
    }
};

CpRulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterCpRules(this);
	}
};

CpRulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitCpRules(this);
	}
};

CpRulesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitCpRules(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.CpRulesContext = CpRulesContext;

SHRContentProfileParser.prototype.cpRules = function() {

    var localctx = new CpRulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRContentProfileParser.RULE_cpRules);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 76;
                this.cpRule(); 
            }
            this.state = 81;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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

function CpRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_cpRule;
    return this;
}

CpRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CpRuleContext.prototype.constructor = CpRuleContext;

CpRuleContext.prototype.simpleOrPathName = function() {
    return this.getTypedRuleContext(SimpleOrPathNameContext,0);
};

CpRuleContext.prototype.flags = function() {
    return this.getTypedRuleContext(FlagsContext,0);
};

CpRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterCpRule(this);
	}
};

CpRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitCpRule(this);
	}
};

CpRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitCpRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.CpRuleContext = CpRuleContext;

SHRContentProfileParser.prototype.cpRule = function() {

    var localctx = new CpRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SHRContentProfileParser.RULE_cpRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.simpleOrPathName();
        this.state = 83;
        this.flags();
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

function FlagsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_flags;
    return this;
}

FlagsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlagsContext.prototype.constructor = FlagsContext;

FlagsContext.prototype.flag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FlagContext);
    } else {
        return this.getTypedRuleContext(FlagContext,i);
    }
};

FlagsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterFlags(this);
	}
};

FlagsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitFlags(this);
	}
};

FlagsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitFlags(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.FlagsContext = FlagsContext;

SHRContentProfileParser.prototype.flags = function() {

    var localctx = new FlagsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SHRContentProfileParser.RULE_flags);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 85;
            this.flag();
            this.state = 88; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRContentProfileParser.KW_MUST_SUPPORT);
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

function FlagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_flag;
    return this;
}

FlagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlagContext.prototype.constructor = FlagContext;

FlagContext.prototype.KW_MUST_SUPPORT = function() {
    return this.getToken(SHRContentProfileParser.KW_MUST_SUPPORT, 0);
};

FlagContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterFlag(this);
	}
};

FlagContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitFlag(this);
	}
};

FlagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitFlag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.FlagContext = FlagContext;

SHRContentProfileParser.prototype.flag = function() {

    var localctx = new FlagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SHRContentProfileParser.RULE_flag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(SHRContentProfileParser.KW_MUST_SUPPORT);
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

function HeaderFlagsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_headerFlags;
    return this;
}

HeaderFlagsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderFlagsContext.prototype.constructor = HeaderFlagsContext;

HeaderFlagsContext.prototype.headerFlag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(HeaderFlagContext);
    } else {
        return this.getTypedRuleContext(HeaderFlagContext,i);
    }
};

HeaderFlagsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterHeaderFlags(this);
	}
};

HeaderFlagsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitHeaderFlags(this);
	}
};

HeaderFlagsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitHeaderFlags(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.HeaderFlagsContext = HeaderFlagsContext;

SHRContentProfileParser.prototype.headerFlags = function() {

    var localctx = new HeaderFlagsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SHRContentProfileParser.RULE_headerFlags);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 92;
            this.headerFlag();
            this.state = 95; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRContentProfileParser.KW_NO_PROFILE);
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

function HeaderFlagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_headerFlag;
    return this;
}

HeaderFlagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderFlagContext.prototype.constructor = HeaderFlagContext;

HeaderFlagContext.prototype.KW_NO_PROFILE = function() {
    return this.getToken(SHRContentProfileParser.KW_NO_PROFILE, 0);
};

HeaderFlagContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterHeaderFlag(this);
	}
};

HeaderFlagContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitHeaderFlag(this);
	}
};

HeaderFlagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitHeaderFlag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.HeaderFlagContext = HeaderFlagContext;

SHRContentProfileParser.prototype.headerFlag = function() {

    var localctx = new HeaderFlagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRContentProfileParser.RULE_headerFlag);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(SHRContentProfileParser.KW_NO_PROFILE);
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

function NamespaceFlagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_namespaceFlag;
    return this;
}

NamespaceFlagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceFlagContext.prototype.constructor = NamespaceFlagContext;

NamespaceFlagContext.prototype.KW_NO_PROFILE = function() {
    return this.getToken(SHRContentProfileParser.KW_NO_PROFILE, 0);
};

NamespaceFlagContext.prototype.KW_ALL_PRIMARY = function() {
    return this.getToken(SHRContentProfileParser.KW_ALL_PRIMARY, 0);
};

NamespaceFlagContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterNamespaceFlag(this);
	}
};

NamespaceFlagContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitNamespaceFlag(this);
	}
};

NamespaceFlagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitNamespaceFlag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.NamespaceFlagContext = NamespaceFlagContext;

SHRContentProfileParser.prototype.namespaceFlag = function() {

    var localctx = new NamespaceFlagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SHRContentProfileParser.RULE_namespaceFlag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        _la = this._input.LA(1);
        if(!(_la===SHRContentProfileParser.KW_NO_PROFILE || _la===SHRContentProfileParser.KW_ALL_PRIMARY)) {
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

function VersionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRContentProfileParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRContentProfileParser.WHOLE_NUMBER, i);
    }
};


VersionContext.prototype.DOT = function() {
    return this.getToken(SHRContentProfileParser.DOT, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.VersionContext = VersionContext;

SHRContentProfileParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SHRContentProfileParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(SHRContentProfileParser.WHOLE_NUMBER);
        this.state = 102;
        this.match(SHRContentProfileParser.DOT);
        this.state = 103;
        this.match(SHRContentProfileParser.WHOLE_NUMBER);
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
    this.ruleIndex = SHRContentProfileParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRContentProfileParser.LOWER_WORD, 0);
};

NamespaceContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRContentProfileParser.DOT_SEPARATED_LW, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.NamespaceContext = NamespaceContext;

SHRContentProfileParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRContentProfileParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        _la = this._input.LA(1);
        if(!(_la===SHRContentProfileParser.LOWER_WORD || _la===SHRContentProfileParser.DOT_SEPARATED_LW)) {
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
    this.ruleIndex = SHRContentProfileParser.RULE_simpleName;
    return this;
}

SimpleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleNameContext.prototype.constructor = SimpleNameContext;

SimpleNameContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRContentProfileParser.UPPER_WORD, 0);
};

SimpleNameContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRContentProfileParser.ALL_CAPS, 0);
};

SimpleNameContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRContentProfileParser.LOWER_WORD, 0);
};

SimpleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterSimpleName(this);
	}
};

SimpleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitSimpleName(this);
	}
};

SimpleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitSimpleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.SimpleNameContext = SimpleNameContext;

SHRContentProfileParser.prototype.simpleName = function() {

    var localctx = new SimpleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SHRContentProfileParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRContentProfileParser.ALL_CAPS) | (1 << SHRContentProfileParser.UPPER_WORD) | (1 << SHRContentProfileParser.LOWER_WORD))) !== 0))) {
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

function PathNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_pathName;
    return this;
}

PathNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathNameContext.prototype.constructor = PathNameContext;

PathNameContext.prototype.simpleName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SimpleNameContext);
    } else {
        return this.getTypedRuleContext(SimpleNameContext,i);
    }
};

PathNameContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRContentProfileParser.DOT);
    } else {
        return this.getToken(SHRContentProfileParser.DOT, i);
    }
};


PathNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterPathName(this);
	}
};

PathNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitPathName(this);
	}
};

PathNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitPathName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.PathNameContext = PathNameContext;

SHRContentProfileParser.prototype.pathName = function() {

    var localctx = new PathNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SHRContentProfileParser.RULE_pathName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this.simpleName();
        this.state = 112; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 110;
            this.match(SHRContentProfileParser.DOT);
            this.state = 111;
            this.simpleName();
            this.state = 114; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRContentProfileParser.DOT);
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

function SimpleOrPathNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRContentProfileParser.RULE_simpleOrPathName;
    return this;
}

SimpleOrPathNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleOrPathNameContext.prototype.constructor = SimpleOrPathNameContext;

SimpleOrPathNameContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

SimpleOrPathNameContext.prototype.pathName = function() {
    return this.getTypedRuleContext(PathNameContext,0);
};

SimpleOrPathNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.enterSimpleOrPathName(this);
	}
};

SimpleOrPathNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRContentProfileParserListener ) {
        listener.exitSimpleOrPathName(this);
	}
};

SimpleOrPathNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRContentProfileParserVisitor ) {
        return visitor.visitSimpleOrPathName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRContentProfileParser.SimpleOrPathNameContext = SimpleOrPathNameContext;

SHRContentProfileParser.prototype.simpleOrPathName = function() {

    var localctx = new SimpleOrPathNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SHRContentProfileParser.RULE_simpleOrPathName);
    try {
        this.state = 118;
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.simpleName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 117;
            this.pathName();
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


exports.SHRContentProfileParser = SHRContentProfileParser;
