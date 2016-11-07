// Generated from SHRParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRParserListener = require('./SHRParserListener').SHRParserListener;
var SHRParserVisitor = require('./SHRParserVisitor').SHRParserVisitor;

var grammarFileName = "SHRParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\67\u010d\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b",
    "\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20",
    "\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4",
    "\27\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35",
    "\4\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'",
    "\t\'\4(\t(\4)\t)\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\4\3\4\3\5\6\5]\n\5\r",
    "\5\16\5^\3\6\3\6\3\6\3\6\3\6\5\6f\n\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3",
    "\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\5\nw\n\n\3\13\3\13\3\13\3\13\3\f\6\f",
    "~\n\f\r\f\16\f\177\3\r\3\r\3\r\3\r\3\r\5\r\u0087\n\r\3\16\3\16\5\16",
    "\u008b\n\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20\6\20\u0094\n\20\r\20",
    "\16\20\u0095\3\21\3\21\3\21\5\21\u009b\n\21\3\22\3\22\5\22\u009f\n\22",
    "\3\23\3\23\3\23\3\23\3\24\6\24\u00a6\n\24\r\24\16\24\u00a7\3\25\3\25",
    "\3\25\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\7\30\u00b8",
    "\n\30\f\30\16\30\u00bb\13\30\3\31\3\31\3\31\5\31\u00c0\n\31\3\32\3\32",
    "\3\32\3\32\3\33\3\33\3\33\3\33\3\34\3\34\5\34\u00cc\n\34\3\34\3\34\5",
    "\34\u00d0\n\34\3\34\3\34\3\34\3\34\5\34\u00d6\n\34\3\34\3\34\3\34\7",
    "\34\u00db\n\34\f\34\16\34\u00de\13\34\3\35\3\35\3\35\3\35\5\35\u00e4",
    "\n\35\3\36\3\36\3\37\3\37\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3#\3#\5#\u00f4",
    "\n#\3$\3$\3$\3$\3$\3%\3%\3%\3%\3&\3&\3\'\3\'\3\'\3\'\3(\6(\u0106\n(",
    "\r(\16(\u0107\3)\3)\3)\3)\2\3\66*\2\4\6\b\n\f\16\20\22\24\26\30\32\34",
    "\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP\2\t\3\2\60\61\3\2\6\7\3\2\7\b",
    "\5\2##,,\63\63\3\2./\3\2\23\"\4\2\'\'--\u0100\2R\3\2\2\2\4U\3\2\2\2",
    "\6Y\3\2\2\2\b\\\3\2\2\2\ne\3\2\2\2\fg\3\2\2\2\16m\3\2\2\2\20p\3\2\2",
    "\2\22t\3\2\2\2\24x\3\2\2\2\26}\3\2\2\2\30\u0086\3\2\2\2\32\u0088\3\2",
    "\2\2\34\u008e\3\2\2\2\36\u0093\3\2\2\2 \u009a\3\2\2\2\"\u009c\3\2\2",
    "\2$\u00a0\3\2\2\2&\u00a5\3\2\2\2(\u00a9\3\2\2\2*\u00ac\3\2\2\2,\u00b0",
    "\3\2\2\2.\u00b4\3\2\2\2\60\u00bf\3\2\2\2\62\u00c1\3\2\2\2\64\u00c5\3",
    "\2\2\2\66\u00d5\3\2\2\28\u00e3\3\2\2\2:\u00e5\3\2\2\2<\u00e7\3\2\2\2",
    ">\u00eb\3\2\2\2@\u00ed\3\2\2\2B\u00ef\3\2\2\2D\u00f3\3\2\2\2F\u00f5",
    "\3\2\2\2H\u00fa\3\2\2\2J\u00fe\3\2\2\2L\u0100\3\2\2\2N\u0105\3\2\2\2",
    "P\u0109\3\2\2\2RS\5\4\3\2ST\5\b\5\2T\3\3\2\2\2UV\7\3\2\2VW\7$\2\2WX",
    "\5\6\4\2X\5\3\2\2\2YZ\t\2\2\2Z\7\3\2\2\2[]\5\n\6\2\\[\3\2\2\2]^\3\2",
    "\2\2^\\\3\2\2\2^_\3\2\2\2_\t\3\2\2\2`f\5\f\7\2af\5\16\b\2bf\5\22\n\2",
    "cf\5\32\16\2df\5\"\22\2e`\3\2\2\2ea\3\2\2\2eb\3\2\2\2ec\3\2\2\2ed\3",
    "\2\2\2f\13\3\2\2\2gh\7\4\2\2hi\7$\2\2ij\7.\2\2jk\7%\2\2kl\7+\2\2l\r",
    "\3\2\2\2mn\5\20\t\2no\5N(\2o\17\3\2\2\2pq\7\5\2\2qr\7$\2\2rs\5@!\2s",
    "\21\3\2\2\2tv\5\24\13\2uw\5\26\f\2vu\3\2\2\2vw\3\2\2\2w\23\3\2\2\2x",
    "y\t\3\2\2yz\7$\2\2z{\5@!\2{\25\3\2\2\2|~\5\30\r\2}|\3\2\2\2~\177\3\2",
    "\2\2\177}\3\2\2\2\177\u0080\3\2\2\2\u0080\27\3\2\2\2\u0081\u0087\5*",
    "\26\2\u0082\u0087\5,\27\2\u0083\u0087\5\62\32\2\u0084\u0087\5\64\33",
    "\2\u0085\u0087\5<\37\2\u0086\u0081\3\2\2\2\u0086\u0082\3\2\2\2\u0086",
    "\u0083\3\2\2\2\u0086\u0084\3\2\2\2\u0086\u0085\3\2\2\2\u0087\31\3\2",
    "\2\2\u0088\u008a\5\34\17\2\u0089\u008b\5\36\20\2\u008a\u0089\3\2\2\2",
    "\u008a\u008b\3\2\2\2\u008b\u008c\3\2\2\2\u008c\u008d\5N(\2\u008d\33",
    "\3\2\2\2\u008e\u008f\t\4\2\2\u008f\u0090\7$\2\2\u0090\u0091\5@!\2\u0091",
    "\35\3\2\2\2\u0092\u0094\5 \21\2\u0093\u0092\3\2\2\2\u0094\u0095\3\2",
    "\2\2\u0095\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096\37\3\2\2\2\u0097",
    "\u009b\5*\26\2\u0098\u009b\5,\27\2\u0099\u009b\5\62\32\2\u009a\u0097",
    "\3\2\2\2\u009a\u0098\3\2\2\2\u009a\u0099\3\2\2\2\u009b!\3\2\2\2\u009c",
    "\u009e\5$\23\2\u009d\u009f\5&\24\2\u009e\u009d\3\2\2\2\u009e\u009f\3",
    "\2\2\2\u009f#\3\2\2\2\u00a0\u00a1\7\t\2\2\u00a1\u00a2\7$\2\2\u00a2\u00a3",
    "\7+\2\2\u00a3%\3\2\2\2\u00a4\u00a6\5(\25\2\u00a5\u00a4\3\2\2\2\u00a6",
    "\u00a7\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\'\3\2\2",
    "\2\u00a9\u00aa\7,\2\2\u00aa\u00ab\7\63\2\2\u00ab)\3\2\2\2\u00ac\u00ad",
    "\7\n\2\2\u00ad\u00ae\7$\2\2\u00ae\u00af\5D#\2\u00af+\3\2\2\2\u00b0\u00b1",
    "\7\13\2\2\u00b1\u00b2\7$\2\2\u00b2\u00b3\5.\30\2\u00b3-\3\2\2\2\u00b4",
    "\u00b9\5\60\31\2\u00b5\u00b6\7&\2\2\u00b6\u00b8\5\60\31\2\u00b7\u00b5",
    "\3\2\2\2\u00b8\u00bb\3\2\2\2\u00b9\u00b7\3\2\2\2\u00b9\u00ba\3\2\2\2",
    "\u00ba/\3\2\2\2\u00bb\u00b9\3\2\2\2\u00bc\u00c0\7\22\2\2\u00bd\u00be",
    "\7.\2\2\u00be\u00c0\7,\2\2\u00bf\u00bc\3\2\2\2\u00bf\u00bd\3\2\2\2\u00c0",
    "\61\3\2\2\2\u00c1\u00c2\7\f\2\2\u00c2\u00c3\7$\2\2\u00c3\u00c4\7\63",
    "\2\2\u00c4\63\3\2\2\2\u00c5\u00c6\7\r\2\2\u00c6\u00c7\7$\2\2\u00c7\u00c8",
    "\5\66\34\2\u00c8\65\3\2\2\2\u00c9\u00cb\b\34\1\2\u00ca\u00cc\5L\'\2",
    "\u00cb\u00ca\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00cd\3\2\2\2\u00cd\u00d6",
    "\58\35\2\u00ce\u00d0\5L\'\2\u00cf\u00ce\3\2\2\2\u00cf\u00d0\3\2\2\2",
    "\u00d0\u00d1\3\2\2\2\u00d1\u00d2\7(\2\2\u00d2\u00d3\5\66\34\2\u00d3",
    "\u00d4\7)\2\2\u00d4\u00d6\3\2\2\2\u00d5\u00c9\3\2\2\2\u00d5\u00cf\3",
    "\2\2\2\u00d6\u00dc\3\2\2\2\u00d7\u00d8\f\3\2\2\u00d8\u00d9\7\21\2\2",
    "\u00d9\u00db\5\66\34\4\u00da\u00d7\3\2\2\2\u00db\u00de\3\2\2\2\u00dc",
    "\u00da\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\67\3\2\2\2\u00de\u00dc\3\2",
    "\2\2\u00df\u00e4\5D#\2\u00e0\u00e4\5F$\2\u00e1\u00e4\5H%\2\u00e2\u00e4",
    "\5J&\2\u00e3\u00df\3\2\2\2\u00e3\u00e0\3\2\2\2\u00e3\u00e1\3\2\2\2\u00e3",
    "\u00e2\3\2\2\2\u00e49\3\2\2\2\u00e5\u00e6\7+\2\2\u00e6;\3\2\2\2\u00e7",
    "\u00e8\7\16\2\2\u00e8\u00e9\7$\2\2\u00e9\u00ea\5> \2\u00ea=\3\2\2\2",
    "\u00eb\u00ec\t\5\2\2\u00ec?\3\2\2\2\u00ed\u00ee\t\6\2\2\u00eeA\3\2\2",
    "\2\u00ef\u00f0\7\62\2\2\u00f0C\3\2\2\2\u00f1\u00f4\5@!\2\u00f2\u00f4",
    "\5B\"\2\u00f3\u00f1\3\2\2\2\u00f3\u00f2\3\2\2\2\u00f4E\3\2\2\2\u00f5",
    "\u00f6\7\17\2\2\u00f6\u00f7\7(\2\2\u00f7\u00f8\5D#\2\u00f8\u00f9\7)",
    "\2\2\u00f9G\3\2\2\2\u00fa\u00fb\7\35\2\2\u00fb\u00fc\7\20\2\2\u00fc",
    "\u00fd\5:\36\2\u00fdI\3\2\2\2\u00fe\u00ff\t\7\2\2\u00ffK\3\2\2\2\u0100",
    "\u0101\7-\2\2\u0101\u0102\7*\2\2\u0102\u0103\t\b\2\2\u0103M\3\2\2\2",
    "\u0104\u0106\5P)\2\u0105\u0104\3\2\2\2\u0106\u0107\3\2\2\2\u0107\u0105",
    "\3\2\2\2\u0107\u0108\3\2\2\2\u0108O\3\2\2\2\u0109\u010a\5L\'\2\u010a",
    "\u010b\5D#\2\u010bQ\3\2\2\2\25^ev\177\u0086\u008a\u0095\u009a\u009e",
    "\u00a7\u00b9\u00bf\u00cb\u00cf\u00d5\u00dc\u00e3\u00f3\u0107"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Namespace'", "'Vocabulary'", "'Section'", 
                     "'DataElement'", "'Entry'", "'Group'", "'ValueSetDefinition'", 
                     "'Extends'", "'Concept'", "'Description'", "'Value'", 
                     "'Default'", "'ref'", "'from'", "'or'", "'TBD'", "'boolean'", 
                     "'integer'", "'string'", "'decimal'", "'uri'", "'base64Binary'", 
                     "'instant'", "'date'", "'dateTime'", "'time'", "'code'", 
                     "'oid'", "'id'", "'markdown'", "'unsignedInt'", "'positiveInt'", 
                     'null', "':'", "'='", "','", "'*'", "'('", "')'", "'..'" ];

var symbolicNames = [ 'null', "KW_NAMESPACE", "KW_VOCABULARY", "KW_SECTION", 
                      "KW_DATA_ELEMENT", "KW_ENTRY", "KW_GROUP", "KW_VALUESET_DEFINITION", 
                      "KW_EXTENDS", "KW_CONCEPT", "KW_DESCRIPTION", "KW_VALUE", 
                      "KW_DEFAULT", "KW_REF", "KW_FROM", "KW_OR", "KW_TBD", 
                      "KW_BOOLEAN", "KW_INTEGER", "KW_STRING", "KW_DECIMAL", 
                      "KW_URI", "KW_BASE64_BINARY", "KW_INSTANT", "KW_DATE", 
                      "KW_DATE_TIME", "KW_TIME", "KW_CODE", "KW_OID", "KW_ID", 
                      "KW_MARKDOWN", "KW_UNSIGNED_INT", "KW_POSITIVE_INT", 
                      "KW_BOOLEAN_VALUE", "COLON", "EQUAL", "COMMA", "STAR", 
                      "OPEN_PAREN", "CLOSE_PAREN", "RANGE", "URL", "CODE", 
                      "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", 
                      "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", "STRING", 
                      "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "shr", "namespaceDef", "namespace", "definitions", "definition", 
                   "vocabularyDef", "sectionDef", "sectionHeader", "dataElementDef", 
                   "dataElementHeader", "dataElementProps", "dataElementProp", 
                   "groupDef", "groupHeader", "groupProps", "groupProp", 
                   "valuesetDef", "valuesetHeader", "valuesetValues", "valuesetValue", 
                   "extendsProp", "conceptProp", "concepts", "concept", 
                   "descriptionProp", "valueProp", "values", "value", "valueset", 
                   "defaultProp", "defaultValue", "simpleName", "fullyQualifiedName", 
                   "simpleOrFQName", "ref", "codeFromValueset", "primitive", 
                   "count", "countedElements", "countedElement" ];

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
SHRParser.KW_SECTION = 3;
SHRParser.KW_DATA_ELEMENT = 4;
SHRParser.KW_ENTRY = 5;
SHRParser.KW_GROUP = 6;
SHRParser.KW_VALUESET_DEFINITION = 7;
SHRParser.KW_EXTENDS = 8;
SHRParser.KW_CONCEPT = 9;
SHRParser.KW_DESCRIPTION = 10;
SHRParser.KW_VALUE = 11;
SHRParser.KW_DEFAULT = 12;
SHRParser.KW_REF = 13;
SHRParser.KW_FROM = 14;
SHRParser.KW_OR = 15;
SHRParser.KW_TBD = 16;
SHRParser.KW_BOOLEAN = 17;
SHRParser.KW_INTEGER = 18;
SHRParser.KW_STRING = 19;
SHRParser.KW_DECIMAL = 20;
SHRParser.KW_URI = 21;
SHRParser.KW_BASE64_BINARY = 22;
SHRParser.KW_INSTANT = 23;
SHRParser.KW_DATE = 24;
SHRParser.KW_DATE_TIME = 25;
SHRParser.KW_TIME = 26;
SHRParser.KW_CODE = 27;
SHRParser.KW_OID = 28;
SHRParser.KW_ID = 29;
SHRParser.KW_MARKDOWN = 30;
SHRParser.KW_UNSIGNED_INT = 31;
SHRParser.KW_POSITIVE_INT = 32;
SHRParser.KW_BOOLEAN_VALUE = 33;
SHRParser.COLON = 34;
SHRParser.EQUAL = 35;
SHRParser.COMMA = 36;
SHRParser.STAR = 37;
SHRParser.OPEN_PAREN = 38;
SHRParser.CLOSE_PAREN = 39;
SHRParser.RANGE = 40;
SHRParser.URL = 41;
SHRParser.CODE = 42;
SHRParser.WHOLE_NUMBER = 43;
SHRParser.ALL_CAPS = 44;
SHRParser.UPPER_WORD = 45;
SHRParser.LOWER_WORD = 46;
SHRParser.DOT_SEPARATED_LW = 47;
SHRParser.DOT_SEPARATED_UW = 48;
SHRParser.STRING = 49;
SHRParser.WS = 50;
SHRParser.NEWLINE = 51;
SHRParser.COMMENT = 52;
SHRParser.LINE_COMMENT = 53;

SHRParser.RULE_shr = 0;
SHRParser.RULE_namespaceDef = 1;
SHRParser.RULE_namespace = 2;
SHRParser.RULE_definitions = 3;
SHRParser.RULE_definition = 4;
SHRParser.RULE_vocabularyDef = 5;
SHRParser.RULE_sectionDef = 6;
SHRParser.RULE_sectionHeader = 7;
SHRParser.RULE_dataElementDef = 8;
SHRParser.RULE_dataElementHeader = 9;
SHRParser.RULE_dataElementProps = 10;
SHRParser.RULE_dataElementProp = 11;
SHRParser.RULE_groupDef = 12;
SHRParser.RULE_groupHeader = 13;
SHRParser.RULE_groupProps = 14;
SHRParser.RULE_groupProp = 15;
SHRParser.RULE_valuesetDef = 16;
SHRParser.RULE_valuesetHeader = 17;
SHRParser.RULE_valuesetValues = 18;
SHRParser.RULE_valuesetValue = 19;
SHRParser.RULE_extendsProp = 20;
SHRParser.RULE_conceptProp = 21;
SHRParser.RULE_concepts = 22;
SHRParser.RULE_concept = 23;
SHRParser.RULE_descriptionProp = 24;
SHRParser.RULE_valueProp = 25;
SHRParser.RULE_values = 26;
SHRParser.RULE_value = 27;
SHRParser.RULE_valueset = 28;
SHRParser.RULE_defaultProp = 29;
SHRParser.RULE_defaultValue = 30;
SHRParser.RULE_simpleName = 31;
SHRParser.RULE_fullyQualifiedName = 32;
SHRParser.RULE_simpleOrFQName = 33;
SHRParser.RULE_ref = 34;
SHRParser.RULE_codeFromValueset = 35;
SHRParser.RULE_primitive = 36;
SHRParser.RULE_count = 37;
SHRParser.RULE_countedElements = 38;
SHRParser.RULE_countedElement = 39;

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
        this.state = 80;
        this.namespaceDef();
        this.state = 81;
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
        this.state = 83;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 84;
        this.match(SHRParser.COLON);
        this.state = 85;
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
        this.state = 87;
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
        this.state = 90; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 89;
            this.definition();
            this.state = 92; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_VOCABULARY) | (1 << SHRParser.KW_SECTION) | (1 << SHRParser.KW_DATA_ELEMENT) | (1 << SHRParser.KW_ENTRY) | (1 << SHRParser.KW_GROUP) | (1 << SHRParser.KW_VALUESET_DEFINITION))) !== 0));
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

DefinitionContext.prototype.sectionDef = function() {
    return this.getTypedRuleContext(SectionDefContext,0);
};

DefinitionContext.prototype.dataElementDef = function() {
    return this.getTypedRuleContext(DataElementDefContext,0);
};

DefinitionContext.prototype.groupDef = function() {
    return this.getTypedRuleContext(GroupDefContext,0);
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
        this.state = 99;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.vocabularyDef();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 95;
            this.sectionDef();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 96;
            this.dataElementDef();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 97;
            this.groupDef();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 98;
            this.valuesetDef();
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
        this.state = 101;
        this.match(SHRParser.KW_VOCABULARY);
        this.state = 102;
        this.match(SHRParser.COLON);
        this.state = 103;
        this.match(SHRParser.ALL_CAPS);
        this.state = 104;
        this.match(SHRParser.EQUAL);
        this.state = 105;
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

function SectionDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_sectionDef;
    return this;
}

SectionDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SectionDefContext.prototype.constructor = SectionDefContext;

SectionDefContext.prototype.sectionHeader = function() {
    return this.getTypedRuleContext(SectionHeaderContext,0);
};

SectionDefContext.prototype.countedElements = function() {
    return this.getTypedRuleContext(CountedElementsContext,0);
};

SectionDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSectionDef(this);
	}
};

SectionDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSectionDef(this);
	}
};

SectionDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSectionDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SectionDefContext = SectionDefContext;

SHRParser.prototype.sectionDef = function() {

    var localctx = new SectionDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRParser.RULE_sectionDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this.sectionHeader();
        this.state = 108;
        this.countedElements();
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

function SectionHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_sectionHeader;
    return this;
}

SectionHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SectionHeaderContext.prototype.constructor = SectionHeaderContext;

SectionHeaderContext.prototype.KW_SECTION = function() {
    return this.getToken(SHRParser.KW_SECTION, 0);
};

SectionHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

SectionHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

SectionHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSectionHeader(this);
	}
};

SectionHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSectionHeader(this);
	}
};

SectionHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSectionHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SectionHeaderContext = SectionHeaderContext;

SHRParser.prototype.sectionHeader = function() {

    var localctx = new SectionHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRParser.RULE_sectionHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.match(SHRParser.KW_SECTION);
        this.state = 111;
        this.match(SHRParser.COLON);
        this.state = 112;
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
    this.enterRule(localctx, 16, SHRParser.RULE_dataElementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.dataElementHeader();
        this.state = 116;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_EXTENDS) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION) | (1 << SHRParser.KW_VALUE) | (1 << SHRParser.KW_DEFAULT))) !== 0)) {
            this.state = 115;
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

DataElementHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

DataElementHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

DataElementHeaderContext.prototype.KW_DATA_ELEMENT = function() {
    return this.getToken(SHRParser.KW_DATA_ELEMENT, 0);
};

DataElementHeaderContext.prototype.KW_ENTRY = function() {
    return this.getToken(SHRParser.KW_ENTRY, 0);
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
    this.enterRule(localctx, 18, SHRParser.RULE_dataElementHeader);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.KW_DATA_ELEMENT || _la===SHRParser.KW_ENTRY)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 119;
        this.match(SHRParser.COLON);
        this.state = 120;
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
    this.enterRule(localctx, 20, SHRParser.RULE_dataElementProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 122;
            this.dataElementProp();
            this.state = 125; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_EXTENDS) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION) | (1 << SHRParser.KW_VALUE) | (1 << SHRParser.KW_DEFAULT))) !== 0));
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

DataElementPropContext.prototype.valueProp = function() {
    return this.getTypedRuleContext(ValuePropContext,0);
};

DataElementPropContext.prototype.defaultProp = function() {
    return this.getTypedRuleContext(DefaultPropContext,0);
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
    this.enterRule(localctx, 22, SHRParser.RULE_dataElementProp);
    try {
        this.state = 132;
        switch(this._input.LA(1)) {
        case SHRParser.KW_EXTENDS:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.extendsProp();
            break;
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 129;
            this.descriptionProp();
            break;
        case SHRParser.KW_VALUE:
            this.enterOuterAlt(localctx, 4);
            this.state = 130;
            this.valueProp();
            break;
        case SHRParser.KW_DEFAULT:
            this.enterOuterAlt(localctx, 5);
            this.state = 131;
            this.defaultProp();
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

function GroupDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_groupDef;
    return this;
}

GroupDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupDefContext.prototype.constructor = GroupDefContext;

GroupDefContext.prototype.groupHeader = function() {
    return this.getTypedRuleContext(GroupHeaderContext,0);
};

GroupDefContext.prototype.countedElements = function() {
    return this.getTypedRuleContext(CountedElementsContext,0);
};

GroupDefContext.prototype.groupProps = function() {
    return this.getTypedRuleContext(GroupPropsContext,0);
};

GroupDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterGroupDef(this);
	}
};

GroupDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitGroupDef(this);
	}
};

GroupDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitGroupDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.GroupDefContext = GroupDefContext;

SHRParser.prototype.groupDef = function() {

    var localctx = new GroupDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRParser.RULE_groupDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.groupHeader();
        this.state = 136;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_EXTENDS) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 135;
            this.groupProps();
        }

        this.state = 138;
        this.countedElements();
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

function GroupHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_groupHeader;
    return this;
}

GroupHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupHeaderContext.prototype.constructor = GroupHeaderContext;

GroupHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

GroupHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

GroupHeaderContext.prototype.KW_GROUP = function() {
    return this.getToken(SHRParser.KW_GROUP, 0);
};

GroupHeaderContext.prototype.KW_ENTRY = function() {
    return this.getToken(SHRParser.KW_ENTRY, 0);
};

GroupHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterGroupHeader(this);
	}
};

GroupHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitGroupHeader(this);
	}
};

GroupHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitGroupHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.GroupHeaderContext = GroupHeaderContext;

SHRParser.prototype.groupHeader = function() {

    var localctx = new GroupHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SHRParser.RULE_groupHeader);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.KW_ENTRY || _la===SHRParser.KW_GROUP)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 141;
        this.match(SHRParser.COLON);
        this.state = 142;
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

function GroupPropsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_groupProps;
    return this;
}

GroupPropsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupPropsContext.prototype.constructor = GroupPropsContext;

GroupPropsContext.prototype.groupProp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GroupPropContext);
    } else {
        return this.getTypedRuleContext(GroupPropContext,i);
    }
};

GroupPropsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterGroupProps(this);
	}
};

GroupPropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitGroupProps(this);
	}
};

GroupPropsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitGroupProps(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.GroupPropsContext = GroupPropsContext;

SHRParser.prototype.groupProps = function() {

    var localctx = new GroupPropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SHRParser.RULE_groupProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 144;
            this.groupProp();
            this.state = 147; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_EXTENDS) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0));
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

function GroupPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_groupProp;
    return this;
}

GroupPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupPropContext.prototype.constructor = GroupPropContext;

GroupPropContext.prototype.extendsProp = function() {
    return this.getTypedRuleContext(ExtendsPropContext,0);
};

GroupPropContext.prototype.conceptProp = function() {
    return this.getTypedRuleContext(ConceptPropContext,0);
};

GroupPropContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
};

GroupPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterGroupProp(this);
	}
};

GroupPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitGroupProp(this);
	}
};

GroupPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitGroupProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.GroupPropContext = GroupPropContext;

SHRParser.prototype.groupProp = function() {

    var localctx = new GroupPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRParser.RULE_groupProp);
    try {
        this.state = 152;
        switch(this._input.LA(1)) {
        case SHRParser.KW_EXTENDS:
            this.enterOuterAlt(localctx, 1);
            this.state = 149;
            this.extendsProp();
            break;
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 150;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 151;
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
    this.enterRule(localctx, 32, SHRParser.RULE_valuesetDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.valuesetHeader();
        this.state = 156;
        _la = this._input.LA(1);
        if(_la===SHRParser.CODE) {
            this.state = 155;
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
    this.enterRule(localctx, 34, SHRParser.RULE_valuesetHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(SHRParser.KW_VALUESET_DEFINITION);
        this.state = 159;
        this.match(SHRParser.COLON);
        this.state = 160;
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
    this.enterRule(localctx, 36, SHRParser.RULE_valuesetValues);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 162;
            this.valuesetValue();
            this.state = 165; 
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
    this.enterRule(localctx, 38, SHRParser.RULE_valuesetValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(SHRParser.CODE);
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

ExtendsPropContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
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
    this.enterRule(localctx, 40, SHRParser.RULE_extendsProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(SHRParser.KW_EXTENDS);
        this.state = 171;
        this.match(SHRParser.COLON);

        this.state = 172;
        this.simpleOrFQName();
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
    this.enterRule(localctx, 42, SHRParser.RULE_conceptProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(SHRParser.KW_CONCEPT);
        this.state = 175;
        this.match(SHRParser.COLON);
        this.state = 176;
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
    this.enterRule(localctx, 44, SHRParser.RULE_concepts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.concept();
        this.state = 183;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 179;
            this.match(SHRParser.COMMA);
            this.state = 180;
            this.concept();
            this.state = 185;
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

ConceptContext.prototype.KW_TBD = function() {
    return this.getToken(SHRParser.KW_TBD, 0);
};

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
    this.enterRule(localctx, 46, SHRParser.RULE_concept);
    try {
        this.state = 189;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD:
            this.enterOuterAlt(localctx, 1);
            this.state = 186;
            this.match(SHRParser.KW_TBD);
            break;
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 2);
            this.state = 187;
            this.match(SHRParser.ALL_CAPS);
            this.state = 188;
            this.match(SHRParser.CODE);
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
    this.enterRule(localctx, 48, SHRParser.RULE_descriptionProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(SHRParser.KW_DESCRIPTION);
        this.state = 192;
        this.match(SHRParser.COLON);
        this.state = 193;
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

function ValuePropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valueProp;
    return this;
}

ValuePropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuePropContext.prototype.constructor = ValuePropContext;

ValuePropContext.prototype.KW_VALUE = function() {
    return this.getToken(SHRParser.KW_VALUE, 0);
};

ValuePropContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

ValuePropContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

ValuePropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValueProp(this);
	}
};

ValuePropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValueProp(this);
	}
};

ValuePropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValueProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuePropContext = ValuePropContext;

SHRParser.prototype.valueProp = function() {

    var localctx = new ValuePropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SHRParser.RULE_valueProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(SHRParser.KW_VALUE);
        this.state = 196;
        this.match(SHRParser.COLON);
        this.state = 197;
        this.values(0);
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

function ValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_values;
    return this;
}

ValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesContext.prototype.constructor = ValuesContext;

ValuesContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ValuesContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

ValuesContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRParser.OPEN_PAREN, 0);
};

ValuesContext.prototype.values = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValuesContext);
    } else {
        return this.getTypedRuleContext(ValuesContext,i);
    }
};

ValuesContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRParser.CLOSE_PAREN, 0);
};

ValuesContext.prototype.KW_OR = function() {
    return this.getToken(SHRParser.KW_OR, 0);
};

ValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValues(this);
	}
};

ValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValues(this);
	}
};

ValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};



SHRParser.prototype.values = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ValuesContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 52;
    this.enterRecursionRule(localctx, 52, SHRParser.RULE_values, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.state = 201;
            _la = this._input.LA(1);
            if(_la===SHRParser.WHOLE_NUMBER) {
                this.state = 200;
                this.count();
            }

            this.state = 203;
            this.value();
            break;

        case 2:
            this.state = 205;
            _la = this._input.LA(1);
            if(_la===SHRParser.WHOLE_NUMBER) {
                this.state = 204;
                this.count();
            }

            this.state = 207;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 208;
            this.values(0);
            this.state = 209;
            this.match(SHRParser.CLOSE_PAREN);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 218;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ValuesContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, SHRParser.RULE_values);
                this.state = 213;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 214;
                this.match(SHRParser.KW_OR);
                this.state = 215;
                this.values(2); 
            }
            this.state = 220;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ValueContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

ValueContext.prototype.codeFromValueset = function() {
    return this.getTypedRuleContext(CodeFromValuesetContext,0);
};

ValueContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValueContext = ValueContext;

SHRParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SHRParser.RULE_value);
    try {
        this.state = 225;
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 221;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 222;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 223;
            this.codeFromValueset();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 224;
            this.primitive();
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

function ValuesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valueset;
    return this;
}

ValuesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetContext.prototype.constructor = ValuesetContext;

ValuesetContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

ValuesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValueset(this);
	}
};

ValuesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValueset(this);
	}
};

ValuesetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValueset(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetContext = ValuesetContext;

SHRParser.prototype.valueset = function() {

    var localctx = new ValuesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SHRParser.RULE_valueset);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
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

function DefaultPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_defaultProp;
    return this;
}

DefaultPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultPropContext.prototype.constructor = DefaultPropContext;

DefaultPropContext.prototype.KW_DEFAULT = function() {
    return this.getToken(SHRParser.KW_DEFAULT, 0);
};

DefaultPropContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

DefaultPropContext.prototype.defaultValue = function() {
    return this.getTypedRuleContext(DefaultValueContext,0);
};

DefaultPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDefaultProp(this);
	}
};

DefaultPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDefaultProp(this);
	}
};

DefaultPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDefaultProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DefaultPropContext = DefaultPropContext;

SHRParser.prototype.defaultProp = function() {

    var localctx = new DefaultPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SHRParser.RULE_defaultProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(SHRParser.KW_DEFAULT);
        this.state = 230;
        this.match(SHRParser.COLON);
        this.state = 231;
        this.defaultValue();
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

function DefaultValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_defaultValue;
    return this;
}

DefaultValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultValueContext.prototype.constructor = DefaultValueContext;

DefaultValueContext.prototype.KW_BOOLEAN_VALUE = function() {
    return this.getToken(SHRParser.KW_BOOLEAN_VALUE, 0);
};

DefaultValueContext.prototype.STRING = function() {
    return this.getToken(SHRParser.STRING, 0);
};

DefaultValueContext.prototype.CODE = function() {
    return this.getToken(SHRParser.CODE, 0);
};

DefaultValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDefaultValue(this);
	}
};

DefaultValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDefaultValue(this);
	}
};

DefaultValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDefaultValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DefaultValueContext = DefaultValueContext;

SHRParser.prototype.defaultValue = function() {

    var localctx = new DefaultValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SHRParser.RULE_defaultValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (SHRParser.KW_BOOLEAN_VALUE - 33)) | (1 << (SHRParser.CODE - 33)) | (1 << (SHRParser.STRING - 33)))) !== 0))) {
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
    this.ruleIndex = SHRParser.RULE_simpleName;
    return this;
}

SimpleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleNameContext.prototype.constructor = SimpleNameContext;

SimpleNameContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRParser.UPPER_WORD, 0);
};

SimpleNameContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

SimpleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSimpleName(this);
	}
};

SimpleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSimpleName(this);
	}
};

SimpleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSimpleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SimpleNameContext = SimpleNameContext;

SHRParser.prototype.simpleName = function() {

    var localctx = new SimpleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SHRParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
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

function FullyQualifiedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_fullyQualifiedName;
    return this;
}

FullyQualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedNameContext.prototype.constructor = FullyQualifiedNameContext;

FullyQualifiedNameContext.prototype.DOT_SEPARATED_UW = function() {
    return this.getToken(SHRParser.DOT_SEPARATED_UW, 0);
};

FullyQualifiedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitFullyQualifiedName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.FullyQualifiedNameContext = FullyQualifiedNameContext;

SHRParser.prototype.fullyQualifiedName = function() {

    var localctx = new FullyQualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SHRParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(SHRParser.DOT_SEPARATED_UW);
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
    this.ruleIndex = SHRParser.RULE_simpleOrFQName;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSimpleOrFQName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SimpleOrFQNameContext = SimpleOrFQNameContext;

SHRParser.prototype.simpleOrFQName = function() {

    var localctx = new SimpleOrFQNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SHRParser.RULE_simpleOrFQName);
    try {
        this.state = 241;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 239;
            this.simpleName();
            break;
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 240;
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

function RefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.KW_REF = function() {
    return this.getToken(SHRParser.KW_REF, 0);
};

RefContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRParser.OPEN_PAREN, 0);
};

RefContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

RefContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRParser.CLOSE_PAREN, 0);
};

RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitRef(this);
	}
};

RefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.RefContext = RefContext;

SHRParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SHRParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(SHRParser.KW_REF);
        this.state = 244;
        this.match(SHRParser.OPEN_PAREN);
        this.state = 245;
        this.simpleOrFQName();
        this.state = 246;
        this.match(SHRParser.CLOSE_PAREN);
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

function CodeFromValuesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_codeFromValueset;
    return this;
}

CodeFromValuesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeFromValuesetContext.prototype.constructor = CodeFromValuesetContext;

CodeFromValuesetContext.prototype.KW_CODE = function() {
    return this.getToken(SHRParser.KW_CODE, 0);
};

CodeFromValuesetContext.prototype.KW_FROM = function() {
    return this.getToken(SHRParser.KW_FROM, 0);
};

CodeFromValuesetContext.prototype.valueset = function() {
    return this.getTypedRuleContext(ValuesetContext,0);
};

CodeFromValuesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCodeFromValueset(this);
	}
};

CodeFromValuesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCodeFromValueset(this);
	}
};

CodeFromValuesetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCodeFromValueset(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CodeFromValuesetContext = CodeFromValuesetContext;

SHRParser.prototype.codeFromValueset = function() {

    var localctx = new CodeFromValuesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SHRParser.RULE_codeFromValueset);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this.match(SHRParser.KW_CODE);
        this.state = 249;
        this.match(SHRParser.KW_FROM);
        this.state = 250;
        this.valueset();
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
    this.enterRule(localctx, 72, SHRParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        _la = this._input.LA(1);
        if(!(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (SHRParser.KW_BOOLEAN - 17)) | (1 << (SHRParser.KW_INTEGER - 17)) | (1 << (SHRParser.KW_STRING - 17)) | (1 << (SHRParser.KW_DECIMAL - 17)) | (1 << (SHRParser.KW_URI - 17)) | (1 << (SHRParser.KW_BASE64_BINARY - 17)) | (1 << (SHRParser.KW_INSTANT - 17)) | (1 << (SHRParser.KW_DATE - 17)) | (1 << (SHRParser.KW_DATE_TIME - 17)) | (1 << (SHRParser.KW_TIME - 17)) | (1 << (SHRParser.KW_CODE - 17)) | (1 << (SHRParser.KW_OID - 17)) | (1 << (SHRParser.KW_ID - 17)) | (1 << (SHRParser.KW_MARKDOWN - 17)) | (1 << (SHRParser.KW_UNSIGNED_INT - 17)) | (1 << (SHRParser.KW_POSITIVE_INT - 17)))) !== 0))) {
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
    this.ruleIndex = SHRParser.RULE_count;
    return this;
}

CountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountContext.prototype.constructor = CountContext;

CountContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRParser.WHOLE_NUMBER, i);
    }
};


CountContext.prototype.RANGE = function() {
    return this.getToken(SHRParser.RANGE, 0);
};

CountContext.prototype.STAR = function() {
    return this.getToken(SHRParser.STAR, 0);
};

CountContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCount(this);
	}
};

CountContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCount(this);
	}
};

CountContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCount(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountContext = CountContext;

SHRParser.prototype.count = function() {

    var localctx = new CountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SHRParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 255;
        this.match(SHRParser.RANGE);
        this.state = 256;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.STAR || _la===SHRParser.WHOLE_NUMBER)) {
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

function CountedElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedElements;
    return this;
}

CountedElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedElementsContext.prototype.constructor = CountedElementsContext;

CountedElementsContext.prototype.countedElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CountedElementContext);
    } else {
        return this.getTypedRuleContext(CountedElementContext,i);
    }
};

CountedElementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedElements(this);
	}
};

CountedElementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedElements(this);
	}
};

CountedElementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedElements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedElementsContext = CountedElementsContext;

SHRParser.prototype.countedElements = function() {

    var localctx = new CountedElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SHRParser.RULE_countedElements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 258;
            this.countedElement();
            this.state = 261; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.WHOLE_NUMBER);
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

function CountedElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedElement;
    return this;
}

CountedElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedElementContext.prototype.constructor = CountedElementContext;

CountedElementContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

CountedElementContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

CountedElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedElement(this);
	}
};

CountedElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedElement(this);
	}
};

CountedElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedElementContext = CountedElementContext;

SHRParser.prototype.countedElement = function() {

    var localctx = new CountedElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SHRParser.RULE_countedElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.count();
        this.state = 264;
        this.simpleOrFQName();
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


SHRParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 26:
			return this.values_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

SHRParser.prototype.values_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.SHRParser = SHRParser;
