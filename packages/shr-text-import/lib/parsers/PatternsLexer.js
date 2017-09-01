// Generated from PatternsLexer.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\2\tc\b\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\3",
    "\2\6\2\23\n\2\r\2\16\2\24\3\3\3\3\7\3\31\n\3\f\3\16\3\34\13\3\3\4\3",
    "\4\7\4 \n\4\f\4\16\4#\13\4\3\5\3\5\7\5\'\n\5\f\5\16\5*\13\5\3\6\3\6",
    "\7\6.\n\6\f\6\16\6\61\13\6\3\6\3\6\3\6\7\6\66\n\6\f\6\16\69\13\6\6\6",
    ";\n\6\r\6\16\6<\3\7\3\7\7\7A\n\7\f\7\16\7D\13\7\3\7\3\7\3\7\7\7I\n\7",
    "\f\7\16\7L\13\7\7\7N\n\7\f\7\16\7Q\13\7\3\7\3\7\3\7\7\7V\n\7\f\7\16",
    "\7Y\13\7\3\b\3\b\7\b]\n\b\f\b\16\b`\13\b\3\b\3\b\2\2\t\3\3\5\4\7\5\t",
    "\6\13\7\r\b\17\t\3\2\n\3\2\62;\3\2C\\\5\2\62;C\\aa\7\2//\62;C\\aac|",
    "\3\2c|\6\2//\62;C\\c|\5\2//\62;C|\4\2$$^^n\2\3\3\2\2\2\2\5\3\2\2\2\2",
    "\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\3\22\3",
    "\2\2\2\5\26\3\2\2\2\7\35\3\2\2\2\t$\3\2\2\2\13+\3\2\2\2\r>\3\2\2\2\17",
    "Z\3\2\2\2\21\23\t\2\2\2\22\21\3\2\2\2\23\24\3\2\2\2\24\22\3\2\2\2\24",
    "\25\3\2\2\2\25\4\3\2\2\2\26\32\t\3\2\2\27\31\t\4\2\2\30\27\3\2\2\2\31",
    "\34\3\2\2\2\32\30\3\2\2\2\32\33\3\2\2\2\33\6\3\2\2\2\34\32\3\2\2\2\35",
    "!\t\3\2\2\36 \t\5\2\2\37\36\3\2\2\2 #\3\2\2\2!\37\3\2\2\2!\"\3\2\2\2",
    "\"\b\3\2\2\2#!\3\2\2\2$(\t\6\2\2%\'\t\7\2\2&%\3\2\2\2\'*\3\2\2\2(&\3",
    "\2\2\2()\3\2\2\2)\n\3\2\2\2*(\3\2\2\2+/\t\6\2\2,.\t\7\2\2-,\3\2\2\2",
    ".\61\3\2\2\2/-\3\2\2\2/\60\3\2\2\2\60:\3\2\2\2\61/\3\2\2\2\62\63\7\60",
    "\2\2\63\67\t\6\2\2\64\66\t\b\2\2\65\64\3\2\2\2\669\3\2\2\2\67\65\3\2",
    "\2\2\678\3\2\2\28;\3\2\2\29\67\3\2\2\2:\62\3\2\2\2;<\3\2\2\2<:\3\2\2",
    "\2<=\3\2\2\2=\f\3\2\2\2>B\t\6\2\2?A\t\7\2\2@?\3\2\2\2AD\3\2\2\2B@\3",
    "\2\2\2BC\3\2\2\2CO\3\2\2\2DB\3\2\2\2EF\7\60\2\2FJ\t\6\2\2GI\t\b\2\2",
    "HG\3\2\2\2IL\3\2\2\2JH\3\2\2\2JK\3\2\2\2KN\3\2\2\2LJ\3\2\2\2ME\3\2\2",
    "\2NQ\3\2\2\2OM\3\2\2\2OP\3\2\2\2PR\3\2\2\2QO\3\2\2\2RS\7\60\2\2SW\t",
    "\3\2\2TV\t\b\2\2UT\3\2\2\2VY\3\2\2\2WU\3\2\2\2WX\3\2\2\2X\16\3\2\2\2",
    "YW\3\2\2\2Z^\7$\2\2[]\n\t\2\2\\[\3\2\2\2]`\3\2\2\2^\\\3\2\2\2^_\3\2",
    "\2\2_a\3\2\2\2`^\3\2\2\2ab\7$\2\2b\20\3\2\2\2\17\2\24\32!(/\67<BJOW",
    "^\2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function PatternsLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

PatternsLexer.prototype = Object.create(antlr4.Lexer.prototype);
PatternsLexer.prototype.constructor = PatternsLexer;

PatternsLexer.EOF = antlr4.Token.EOF;
PatternsLexer.WHOLE_NUMBER = 1;
PatternsLexer.ALL_CAPS = 2;
PatternsLexer.UPPER_WORD = 3;
PatternsLexer.LOWER_WORD = 4;
PatternsLexer.DOT_SEPARATED_LW = 5;
PatternsLexer.DOT_SEPARATED_UW = 6;
PatternsLexer.STRING = 7;


PatternsLexer.modeNames = [ "DEFAULT_MODE" ];

PatternsLexer.literalNames = [  ];

PatternsLexer.symbolicNames = [ 'null', "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", 
                                "LOWER_WORD", "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", 
                                "STRING" ];

PatternsLexer.ruleNames = [ "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", 
                            "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", "STRING" ];

PatternsLexer.grammarFileName = "PatternsLexer.g4";



exports.PatternsLexer = PatternsLexer;

