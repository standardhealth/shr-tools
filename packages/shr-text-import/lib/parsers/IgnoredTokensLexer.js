// Generated from IgnoredTokensLexer.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\6,\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\3\2\3\2\3\2\3\2\3\3\3\3\3",
    "\3\3\3\3\4\3\4\3\4\3\4\7\4\30\n\4\f\4\16\4\33\13\4\3\4\3\4\3\4\3\4\3",
    "\4\3\5\3\5\3\5\3\5\7\5&\n\5\f\5\16\5)\13\5\3\5\3\5\3\31\2\6\3\3\5\4",
    "\7\5\t\6\3\2\4\5\2\13\13\17\17\"\"\4\2\f\f\17\17-\2\3\3\2\2\2\2\5\3",
    "\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\3\13\3\2\2\2\5\17\3\2\2\2\7\23\3\2\2",
    "\2\t!\3\2\2\2\13\f\t\2\2\2\f\r\3\2\2\2\r\16\b\2\2\2\16\4\3\2\2\2\17",
    "\20\7\f\2\2\20\21\3\2\2\2\21\22\b\3\2\2\22\6\3\2\2\2\23\24\7\61\2\2",
    "\24\25\7,\2\2\25\31\3\2\2\2\26\30\13\2\2\2\27\26\3\2\2\2\30\33\3\2\2",
    "\2\31\32\3\2\2\2\31\27\3\2\2\2\32\34\3\2\2\2\33\31\3\2\2\2\34\35\7,",
    "\2\2\35\36\7\61\2\2\36\37\3\2\2\2\37 \b\4\3\2 \b\3\2\2\2!\"\7\61\2\2",
    "\"#\7\61\2\2#\'\3\2\2\2$&\n\3\2\2%$\3\2\2\2&)\3\2\2\2\'%\3\2\2\2\'(",
    "\3\2\2\2(*\3\2\2\2)\'\3\2\2\2*+\b\5\3\2+\n\3\2\2\2\5\2\31\'\4\2\3\2",
    "\b\2\2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function IgnoredTokensLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

IgnoredTokensLexer.prototype = Object.create(antlr4.Lexer.prototype);
IgnoredTokensLexer.prototype.constructor = IgnoredTokensLexer;

IgnoredTokensLexer.EOF = antlr4.Token.EOF;
IgnoredTokensLexer.WS = 1;
IgnoredTokensLexer.NEWLINE = 2;
IgnoredTokensLexer.COMMENT = 3;
IgnoredTokensLexer.LINE_COMMENT = 4;


IgnoredTokensLexer.modeNames = [ "DEFAULT_MODE" ];

IgnoredTokensLexer.literalNames = [ 'null', 'null', "'\n'" ];

IgnoredTokensLexer.symbolicNames = [ 'null', "WS", "NEWLINE", "COMMENT", 
                                     "LINE_COMMENT" ];

IgnoredTokensLexer.ruleNames = [ "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

IgnoredTokensLexer.grammarFileName = "IgnoredTokensLexer.g4";



exports.IgnoredTokensLexer = IgnoredTokensLexer;

