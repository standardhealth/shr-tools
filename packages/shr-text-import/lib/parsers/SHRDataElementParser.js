// Generated from SHRDataElementParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRDataElementParserListener = require('./SHRDataElementParserListener').SHRDataElementParserListener;
var SHRDataElementParserVisitor = require('./SHRDataElementParserVisitor').SHRDataElementParserVisitor;

var grammarFileName = "SHRDataElementParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3J\u01ad\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\3\2\3\2\5\2m\n\2\3\2\5\2",
    "p\n\2\3\2\5\2s\n\2\3\2\5\2v\n\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4",
    "\3\4\3\4\3\4\7\4\u0084\n\4\f\4\16\4\u0087\13\4\3\5\6\5\u008a\n\5\r\5",
    "\16\5\u008b\3\6\3\6\3\6\3\6\3\6\3\7\6\7\u0094\n\7\r\7\16\7\u0095\3\b",
    "\3\b\3\b\3\b\3\b\3\t\7\t\u009e\n\t\f\t\16\t\u00a1\13\t\3\n\3\n\5\n\u00a5",
    "\n\n\3\13\3\13\5\13\u00a9\n\13\3\13\3\13\3\f\5\f\u00ae\n\f\3\f\3\f\3",
    "\f\3\r\3\r\5\r\u00b5\n\r\3\r\3\r\3\16\3\16\3\16\3\17\6\17\u00bd\n\17",
    "\r\17\16\17\u00be\3\20\3\20\3\20\5\20\u00c4\n\20\3\21\5\21\u00c7\n\21",
    "\3\21\7\21\u00ca\n\21\f\21\16\21\u00cd\13\21\3\22\3\22\5\22\u00d1\n",
    "\22\3\22\5\22\u00d4\n\22\3\22\3\22\3\22\7\22\u00d9\n\22\f\22\16\22\u00dc",
    "\13\22\3\22\5\22\u00df\n\22\3\23\3\23\3\23\3\23\3\23\5\23\u00e6\n\23",
    "\3\24\5\24\u00e9\n\24\3\24\5\24\u00ec\n\24\3\24\3\24\3\24\7\24\u00f1",
    "\n\24\f\24\16\24\u00f4\13\24\3\24\5\24\u00f7\n\24\3\25\3\25\3\25\3\25",
    "\3\25\5\25\u00fe\n\25\3\26\3\26\3\26\5\26\u0103\n\26\3\27\3\27\3\27",
    "\5\27\u0108\n\27\3\30\3\30\3\30\7\30\u010d\n\30\f\30\16\30\u0110\13",
    "\30\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35",
    "\3\36\3\36\3\37\3\37\5\37\u0123\n\37\3 \3 \3 \3 \3 \3!\3!\5!\u012c\n",
    "!\3\"\3\"\3\"\5\"\u0131\n\"\3#\3#\5#\u0135\n#\3$\3$\3%\3%\3%\3%\3%\5",
    "%\u013e\n%\3&\3&\3&\3&\5&\u0144\n&\3&\5&\u0147\n&\3\'\3\'\5\'\u014b",
    "\n\'\3\'\3\'\6\'\u014f\n\'\r\'\16\'\u0150\3\'\3\'\5\'\u0155\n\'\3\'",
    "\3\'\7\'\u0159\n\'\f\'\16\'\u015c\13\'\3\'\3\'\5\'\u0160\n\'\3(\3(\3",
    "(\3(\3(\3(\3(\5(\u0169\n(\3)\3)\3)\5)\u016e\n)\3*\5*\u0171\n*\3*\5*",
    "\u0174\n*\3*\3*\3*\5*\u0179\n*\3+\3+\3+\3,\3,\6,\u0180\n,\r,\16,\u0181",
    "\3-\3-\3-\3.\3.\3.\3.\3.\5.\u018c\n.\3/\3/\6/\u0190\n/\r/\16/\u0191",
    "\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\5\61\u019d\n\61\3\62\3",
    "\62\3\63\3\63\3\63\3\63\3\64\3\64\5\64\u01a7\n\64\3\65\3\65\5\65\u01ab",
    "\n\65\3\65\2\2\66\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60",
    "\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfh\2\13\4\2**,-\3\2CD\3\2!\"\3\2AC",
    "\3\2\23\25\3\2\35\36\3\2\32\33\3\2/?\4\2&&@@\u01c1\2j\3\2\2\2\4y\3\2",
    "\2\2\6\177\3\2\2\2\b\u0089\3\2\2\2\n\u008d\3\2\2\2\f\u0093\3\2\2\2\16",
    "\u0097\3\2\2\2\20\u009f\3\2\2\2\22\u00a4\3\2\2\2\24\u00a6\3\2\2\2\26",
    "\u00ad\3\2\2\2\30\u00b2\3\2\2\2\32\u00b8\3\2\2\2\34\u00bc\3\2\2\2\36",
    "\u00c3\3\2\2\2 \u00c6\3\2\2\2\"\u00ce\3\2\2\2$\u00e5\3\2\2\2&\u00e8",
    "\3\2\2\2(\u00fd\3\2\2\2*\u00ff\3\2\2\2,\u0104\3\2\2\2.\u0109\3\2\2\2",
    "\60\u0111\3\2\2\2\62\u0114\3\2\2\2\64\u0118\3\2\2\2\66\u011a\3\2\2\2",
    "8\u011c\3\2\2\2:\u011e\3\2\2\2<\u0122\3\2\2\2>\u0124\3\2\2\2@\u0129",
    "\3\2\2\2B\u0130\3\2\2\2D\u0134\3\2\2\2F\u0136\3\2\2\2H\u0138\3\2\2\2",
    "J\u0143\3\2\2\2L\u014a\3\2\2\2N\u0168\3\2\2\2P\u016a\3\2\2\2R\u0170",
    "\3\2\2\2T\u017a\3\2\2\2V\u017f\3\2\2\2X\u0183\3\2\2\2Z\u0186\3\2\2\2",
    "\\\u018f\3\2\2\2^\u0193\3\2\2\2`\u019c\3\2\2\2b\u019e\3\2\2\2d\u01a0",
    "\3\2\2\2f\u01a4\3\2\2\2h\u01a8\3\2\2\2jl\5\4\3\2km\5\60\31\2lk\3\2\2",
    "\2lm\3\2\2\2mo\3\2\2\2np\5\6\4\2on\3\2\2\2op\3\2\2\2pr\3\2\2\2qs\5\b",
    "\5\2rq\3\2\2\2rs\3\2\2\2su\3\2\2\2tv\5\f\7\2ut\3\2\2\2uv\3\2\2\2vw\3",
    "\2\2\2wx\5\20\t\2x\3\3\2\2\2yz\7\3\2\2z{\7\4\2\2{|\5\62\32\2|}\7\5\2",
    "\2}~\5\64\33\2~\5\3\2\2\2\177\u0080\7\6\2\2\u0080\u0085\5\64\33\2\u0081",
    "\u0082\7%\2\2\u0082\u0084\5\64\33\2\u0083\u0081\3\2\2\2\u0084\u0087",
    "\3\2\2\2\u0085\u0083\3\2\2\2\u0085\u0086\3\2\2\2\u0086\7\3\2\2\2\u0087",
    "\u0085\3\2\2\2\u0088\u008a\5\n\6\2\u0089\u0088\3\2\2\2\u008a\u008b\3",
    "\2\2\2\u008b\u0089\3\2\2\2\u008b\u008c\3\2\2\2\u008c\t\3\2\2\2\u008d",
    "\u008e\7\7\2\2\u008e\u008f\7A\2\2\u008f\u0090\7$\2\2\u0090\u0091\7*",
    "\2\2\u0091\13\3\2\2\2\u0092\u0094\5\16\b\2\u0093\u0092\3\2\2\2\u0094",
    "\u0095\3\2\2\2\u0095\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096\r\3\2\2",
    "\2\u0097\u0098\7\b\2\2\u0098\u0099\7A\2\2\u0099\u009a\7$\2\2\u009a\u009b",
    "\t\2\2\2\u009b\17\3\2\2\2\u009c\u009e\5\22\n\2\u009d\u009c\3\2\2\2\u009e",
    "\u00a1\3\2\2\2\u009f\u009d\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\21\3\2",
    "\2\2\u00a1\u009f\3\2\2\2\u00a2\u00a5\5\24\13\2\u00a3\u00a5\5\30\r\2",
    "\u00a4\u00a2\3\2\2\2\u00a4\u00a3\3\2\2\2\u00a5\23\3\2\2\2\u00a6\u00a8",
    "\5\26\f\2\u00a7\u00a9\5\34\17\2\u00a8\u00a7\3\2\2\2\u00a8\u00a9\3\2",
    "\2\2\u00a9\u00aa\3\2\2\2\u00aa\u00ab\5 \21\2\u00ab\25\3\2\2\2\u00ac",
    "\u00ae\7\t\2\2\u00ad\u00ac\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00af\3",
    "\2\2\2\u00af\u00b0\7\n\2\2\u00b0\u00b1\58\35\2\u00b1\27\3\2\2\2\u00b2",
    "\u00b4\5\32\16\2\u00b3\u00b5\5\34\17\2\u00b4\u00b3\3\2\2\2\u00b4\u00b5",
    "\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b7\5 \21\2\u00b7\31\3\2\2\2\u00b8",
    "\u00b9\7\13\2\2\u00b9\u00ba\58\35\2\u00ba\33\3\2\2\2\u00bb\u00bd\5\36",
    "\20\2\u00bc\u00bb\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00bc\3\2\2\2\u00be",
    "\u00bf\3\2\2\2\u00bf\35\3\2\2\2\u00c0\u00c4\5*\26\2\u00c1\u00c4\5,\27",
    "\2\u00c2\u00c4\5\60\31\2\u00c3\u00c0\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c3",
    "\u00c2\3\2\2\2\u00c4\37\3\2\2\2\u00c5\u00c7\5\"\22\2\u00c6\u00c5\3\2",
    "\2\2\u00c6\u00c7\3\2\2\2\u00c7\u00cb\3\2\2\2\u00c8\u00ca\5&\24\2\u00c9",
    "\u00c8\3\2\2\2\u00ca\u00cd\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cb\u00cc\3",
    "\2\2\2\u00cc!\3\2\2\2\u00cd\u00cb\3\2\2\2\u00ce\u00d0\7\r\2\2\u00cf",
    "\u00d1\5d\63\2\u00d0\u00cf\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1\u00d3\3",
    "\2\2\2\u00d2\u00d4\7\'\2\2\u00d3\u00d2\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4",
    "\u00d5\3\2\2\2\u00d5\u00da\5$\23\2\u00d6\u00d7\7\21\2\2\u00d7\u00d9",
    "\5$\23\2\u00d8\u00d6\3\2\2\2\u00d9\u00dc\3\2\2\2\u00da\u00d8\3\2\2\2",
    "\u00da\u00db\3\2\2\2\u00db\u00de\3\2\2\2\u00dc\u00da\3\2\2\2\u00dd\u00df",
    "\7(\2\2\u00de\u00dd\3\2\2\2\u00de\u00df\3\2\2\2\u00df#\3\2\2\2\u00e0",
    "\u00e6\5<\37\2\u00e1\u00e6\5> \2\u00e2\u00e6\5b\62\2\u00e3\u00e6\5J",
    "&\2\u00e4\u00e6\5f\64\2\u00e5\u00e0\3\2\2\2\u00e5\u00e1\3\2\2\2\u00e5",
    "\u00e2\3\2\2\2\u00e5\u00e3\3\2\2\2\u00e5\u00e4\3\2\2\2\u00e6%\3\2\2",
    "\2\u00e7\u00e9\5d\63\2\u00e8\u00e7\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9",
    "\u00eb\3\2\2\2\u00ea\u00ec\7\'\2\2\u00eb\u00ea\3\2\2\2\u00eb\u00ec\3",
    "\2\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00f2\5(\25\2\u00ee\u00ef\7\21\2\2",
    "\u00ef\u00f1\5(\25\2\u00f0\u00ee\3\2\2\2\u00f1\u00f4\3\2\2\2\u00f2\u00f0",
    "\3\2\2\2\u00f2\u00f3\3\2\2\2\u00f3\u00f6\3\2\2\2\u00f4\u00f2\3\2\2\2",
    "\u00f5\u00f7\7(\2\2\u00f6\u00f5\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7\'",
    "\3\2\2\2\u00f8\u00fe\5\66\34\2\u00f9\u00fe\5<\37\2\u00fa\u00fe\5> \2",
    "\u00fb\u00fe\5J&\2\u00fc\u00fe\5f\64\2\u00fd\u00f8\3\2\2\2\u00fd\u00f9",
    "\3\2\2\2\u00fd\u00fa\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fd\u00fc\3\2\2\2",
    "\u00fe)\3\2\2\2\u00ff\u0102\7\f\2\2\u0100\u0103\5<\37\2\u0101\u0103",
    "\5f\64\2\u0102\u0100\3\2\2\2\u0102\u0101\3\2\2\2\u0103+\3\2\2\2\u0104",
    "\u0107\7\16\2\2\u0105\u0108\5.\30\2\u0106\u0108\5f\64\2\u0107\u0105",
    "\3\2\2\2\u0107\u0106\3\2\2\2\u0108-\3\2\2\2\u0109\u010e\5B\"\2\u010a",
    "\u010b\7%\2\2\u010b\u010d\5B\"\2\u010c\u010a\3\2\2\2\u010d\u0110\3\2",
    "\2\2\u010e\u010c\3\2\2\2\u010e\u010f\3\2\2\2\u010f/\3\2\2\2\u0110\u010e",
    "\3\2\2\2\u0111\u0112\7\17\2\2\u0112\u0113\7F\2\2\u0113\61\3\2\2\2\u0114",
    "\u0115\7@\2\2\u0115\u0116\7#\2\2\u0116\u0117\7@\2\2\u0117\63\3\2\2\2",
    "\u0118\u0119\t\3\2\2\u0119\65\3\2\2\2\u011a\u011b\t\4\2\2\u011b\67\3",
    "\2\2\2\u011c\u011d\t\5\2\2\u011d9\3\2\2\2\u011e\u011f\7E\2\2\u011f;",
    "\3\2\2\2\u0120\u0123\58\35\2\u0121\u0123\5:\36\2\u0122\u0120\3\2\2\2",
    "\u0122\u0121\3\2\2\2\u0123=\3\2\2\2\u0124\u0125\7\20\2\2\u0125\u0126",
    "\7\'\2\2\u0126\u0127\5<\37\2\u0127\u0128\7(\2\2\u0128?\3\2\2\2\u0129",
    "\u012b\7.\2\2\u012a\u012c\7F\2\2\u012b\u012a\3\2\2\2\u012b\u012c\3\2",
    "\2\2\u012cA\3\2\2\2\u012d\u012e\7A\2\2\u012e\u0131\5@!\2\u012f\u0131",
    "\5h\65\2\u0130\u012d\3\2\2\2\u0130\u012f\3\2\2\2\u0131C\3\2\2\2\u0132",
    "\u0135\5B\"\2\u0133\u0135\5@!\2\u0134\u0132\3\2\2\2\u0134\u0133\3\2",
    "\2\2\u0135E\3\2\2\2\u0136\u0137\t\6\2\2\u0137G\3\2\2\2\u0138\u013d\5",
    "d\63\2\u0139\u013e\5<\37\2\u013a\u013e\5> \2\u013b\u013e\5b\62\2\u013c",
    "\u013e\5f\64\2\u013d\u0139\3\2\2\2\u013d\u013a\3\2\2\2\u013d\u013b\3",
    "\2\2\2\u013d\u013c\3\2\2\2\u013eI\3\2\2\2\u013f\u0144\5\66\34\2\u0140",
    "\u0144\5<\37\2\u0141\u0144\5L\'\2\u0142\u0144\5b\62\2\u0143\u013f\3",
    "\2\2\2\u0143\u0140\3\2\2\2\u0143\u0141\3\2\2\2\u0143\u0142\3\2\2\2\u0144",
    "\u0146\3\2\2\2\u0145\u0147\5N(\2\u0146\u0145\3\2\2\2\u0146\u0147\3\2",
    "\2\2\u0147K\3\2\2\2\u0148\u014b\5\66\34\2\u0149\u014b\5<\37\2\u014a",
    "\u0148\3\2\2\2\u014a\u0149\3\2\2\2\u014b\u015f\3\2\2\2\u014c\u014d\7",
    "#\2\2\u014d\u014f\58\35\2\u014e\u014c\3\2\2\2\u014f\u0150\3\2\2\2\u0150",
    "\u014e\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0154\3\2\2\2\u0152\u0153\7",
    "#\2\2\u0153\u0155\5b\62\2\u0154\u0152\3\2\2\2\u0154\u0155\3\2\2\2\u0155",
    "\u0160\3\2\2\2\u0156\u0157\7#\2\2\u0157\u0159\58\35\2\u0158\u0156\3",
    "\2\2\2\u0159\u015c\3\2\2\2\u015a\u0158\3\2\2\2\u015a\u015b\3\2\2\2\u015b",
    "\u015d\3\2\2\2\u015c\u015a\3\2\2\2\u015d\u015e\7#\2\2\u015e\u0160\5",
    "b\62\2\u015f\u014e\3\2\2\2\u015f\u015a\3\2\2\2\u0160M\3\2\2\2\u0161",
    "\u0169\5R*\2\u0162\u0169\5T+\2\u0163\u0169\5V,\2\u0164\u0169\5X-\2\u0165",
    "\u0169\5Z.\2\u0166\u0169\5\\/\2\u0167\u0169\5^\60\2\u0168\u0161\3\2",
    "\2\2\u0168\u0162\3\2\2\2\u0168\u0163\3\2\2\2\u0168\u0164\3\2\2\2\u0168",
    "\u0165\3\2\2\2\u0168\u0166\3\2\2\2\u0168\u0167\3\2\2\2\u0169O\3\2\2",
    "\2\u016a\u016d\7\22\2\2\u016b\u016e\79\2\2\u016c\u016e\5<\37\2\u016d",
    "\u016b\3\2\2\2\u016d\u016c\3\2\2\2\u016eQ\3\2\2\2\u016f\u0171\5P)\2",
    "\u0170\u016f\3\2\2\2\u0170\u0171\3\2\2\2\u0171\u0173\3\2\2\2\u0172\u0174",
    "\5F$\2\u0173\u0172\3\2\2\2\u0173\u0174\3\2\2\2\u0174\u0175\3\2\2\2\u0175",
    "\u0176\7\27\2\2\u0176\u0178\5`\61\2\u0177\u0179\7\26\2\2\u0178\u0177",
    "\3\2\2\2\u0178\u0179\3\2\2\2\u0179S\3\2\2\2\u017a\u017b\7\31\2\2\u017b",
    "\u017c\5D#\2\u017cU\3\2\2\2\u017d\u017e\7\34\2\2\u017e\u0180\5D#\2\u017f",
    "\u017d\3\2\2\2\u0180\u0181\3\2\2\2\u0181\u017f\3\2\2\2\u0181\u0182\3",
    "\2\2\2\u0182W\3\2\2\2\u0183\u0184\7\31\2\2\u0184\u0185\t\7\2\2\u0185",
    "Y\3\2\2\2\u0186\u018b\t\b\2\2\u0187\u018c\5<\37\2\u0188\u018c\5> \2",
    "\u0189\u018c\5b\62\2\u018a\u018c\5f\64\2\u018b\u0187\3\2\2\2\u018b\u0188",
    "\3\2\2\2\u018b\u0189\3\2\2\2\u018b\u018a\3\2\2\2\u018c[\3\2\2\2\u018d",
    "\u018e\7\34\2\2\u018e\u0190\5H%\2\u018f\u018d\3\2\2\2\u0190\u0191\3",
    "\2\2\2\u0191\u018f\3\2\2\2\u0191\u0192\3\2\2\2\u0192]\3\2\2\2\u0193",
    "\u0194\7\22\2\2\u0194\u0195\7\30\2\2\u0195\u0196\5B\"\2\u0196_\3\2\2",
    "\2\u0197\u019d\7*\2\2\u0198\u019d\7+\2\2\u0199\u019d\7,\2\2\u019a\u019d",
    "\58\35\2\u019b\u019d\5f\64\2\u019c\u0197\3\2\2\2\u019c\u0198\3\2\2\2",
    "\u019c\u0199\3\2\2\2\u019c\u019a\3\2\2\2\u019c\u019b\3\2\2\2\u019da",
    "\3\2\2\2\u019e\u019f\t\t\2\2\u019fc\3\2\2\2\u01a0\u01a1\7@\2\2\u01a1",
    "\u01a2\7)\2\2\u01a2\u01a3\t\n\2\2\u01a3e\3\2\2\2\u01a4\u01a6\7\37\2",
    "\2\u01a5\u01a7\7F\2\2\u01a6\u01a5\3\2\2\2\u01a6\u01a7\3\2\2\2\u01a7",
    "g\3\2\2\2\u01a8\u01aa\7 \2\2\u01a9\u01ab\7F\2\2\u01aa\u01a9\3\2\2\2",
    "\u01aa\u01ab\3\2\2\2\u01abi\3\2\2\2\66loru\u0085\u008b\u0095\u009f\u00a4",
    "\u00a8\u00ad\u00b4\u00be\u00c3\u00c6\u00cb\u00d0\u00d3\u00da\u00de\u00e5",
    "\u00e8\u00eb\u00f2\u00f6\u00fd\u0102\u0107\u010e\u0122\u012b\u0130\u0134",
    "\u013d\u0143\u0146\u014a\u0150\u0154\u015a\u015f\u0168\u016d\u0170\u0173",
    "\u0178\u0181\u018b\u0191\u019c\u01a6\u01aa"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'DataElement'", "'Namespace:'", 
                     "'Uses:'", "'Path:'", "'CodeSystem:'", "'Abstract'", 
                     "'Element:'", "'EntryElement:'", "'Based on:'", "'Value:'", 
                     "'Concept:'", "'Description:'", "'ref'", "'or'", "'with'", 
                     "'must be'", "'should be'", "'could be'", "'if covered'", 
                     "'from'", "'units'", "'is'", "'is type'", "'value is type'", 
                     "'includes'", "'true'", "'false'", "'TBD'", "'TBD#TBD'", 
                     "'_Entry'", "'_Value'", "'.'", "'='", "','", "'*'", 
                     "'('", "')'", "'..'", 'null', 'null', 'null', 'null', 
                     'null', "'boolean'", "'integer'", "'string'", "'decimal'", 
                     "'uri'", "'base64Binary'", "'instant'", "'date'", "'dateTime'", 
                     "'time'", "'code'", "'oid'", "'id'", "'markdown'", 
                     "'unsignedInt'", "'positiveInt'", "'xhtml'", 'null', 
                     'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                     "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_DATA_ELEMENT", "KW_NAMESPACE", 
                      "KW_USES", "KW_PATH", "KW_VOCABULARY", "KW_ABSTRACT", 
                      "KW_ELEMENT", "KW_ENTRY_ELEMENT", "KW_BASED_ON", "KW_VALUE", 
                      "KW_CONCEPT", "KW_DESCRIPTION", "KW_REF", "KW_OR", 
                      "KW_WITH", "KW_MUST_BE", "KW_SHOULD_BE", "KW_COULD_BE", 
                      "KW_IF_COVERED", "KW_FROM", "KW_UNITS", "KW_IS", "KW_IS_TYPE", 
                      "KW_VALUE_IS_TYPE", "KW_INCLUDES", "KW_TRUE", "KW_FALSE", 
                      "KW_TBD", "KW_TBD_CODE", "KW_BAR_ENTRY", "KW_BAR_VALUE", 
                      "DOT", "EQUAL", "COMMA", "STAR", "OPEN_PAREN", "CLOSE_PAREN", 
                      "RANGE", "URL", "PATH_URL", "URN_OID", "URN", "CODE", 
                      "KW_BOOLEAN", "KW_INTEGER", "KW_STRING", "KW_DECIMAL", 
                      "KW_URI", "KW_BASE64_BINARY", "KW_INSTANT", "KW_DATE", 
                      "KW_DATE_TIME", "KW_TIME", "KW_CODE", "KW_OID", "KW_ID", 
                      "KW_MARKDOWN", "KW_UNSIGNED_INT", "KW_POSITIVE_INT", 
                      "KW_XHTML", "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", 
                      "LOWER_WORD", "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", 
                      "STRING", "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "doc", "docHeader", "usesStatement", "pathDefs", "pathDef", 
                   "vocabularyDefs", "vocabularyDef", "dataDefs", "dataDef", 
                   "elementDef", "elementHeader", "entryDef", "entryHeader", 
                   "elementProps", "elementProp", "values", "value", "valueType", 
                   "field", "fieldType", "basedOnProp", "conceptProp", "concepts", 
                   "descriptionProp", "version", "namespace", "specialWord", 
                   "simpleName", "fullyQualifiedName", "simpleOrFQName", 
                   "ref", "code", "fullyQualifiedCode", "codeOrFQCode", 
                   "bindingInfix", "typeConstraint", "elementWithConstraint", 
                   "elementPath", "elementConstraint", "legacyWithCode", 
                   "elementCodeVSConstraint", "elementCodeValueConstraint", 
                   "elementIncludesCodeValueConstraint", "elementBooleanConstraint", 
                   "elementTypeConstraint", "elementIncludesTypeConstraint", 
                   "elementWithUnitsConstraint", "valueset", "primitive", 
                   "count", "tbd", "tbdCode" ];

function SHRDataElementParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SHRDataElementParser.prototype = Object.create(antlr4.Parser.prototype);
SHRDataElementParser.prototype.constructor = SHRDataElementParser;

Object.defineProperty(SHRDataElementParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SHRDataElementParser.EOF = antlr4.Token.EOF;
SHRDataElementParser.KW_GRAMMAR = 1;
SHRDataElementParser.KW_G_DATA_ELEMENT = 2;
SHRDataElementParser.KW_NAMESPACE = 3;
SHRDataElementParser.KW_USES = 4;
SHRDataElementParser.KW_PATH = 5;
SHRDataElementParser.KW_VOCABULARY = 6;
SHRDataElementParser.KW_ABSTRACT = 7;
SHRDataElementParser.KW_ELEMENT = 8;
SHRDataElementParser.KW_ENTRY_ELEMENT = 9;
SHRDataElementParser.KW_BASED_ON = 10;
SHRDataElementParser.KW_VALUE = 11;
SHRDataElementParser.KW_CONCEPT = 12;
SHRDataElementParser.KW_DESCRIPTION = 13;
SHRDataElementParser.KW_REF = 14;
SHRDataElementParser.KW_OR = 15;
SHRDataElementParser.KW_WITH = 16;
SHRDataElementParser.KW_MUST_BE = 17;
SHRDataElementParser.KW_SHOULD_BE = 18;
SHRDataElementParser.KW_COULD_BE = 19;
SHRDataElementParser.KW_IF_COVERED = 20;
SHRDataElementParser.KW_FROM = 21;
SHRDataElementParser.KW_UNITS = 22;
SHRDataElementParser.KW_IS = 23;
SHRDataElementParser.KW_IS_TYPE = 24;
SHRDataElementParser.KW_VALUE_IS_TYPE = 25;
SHRDataElementParser.KW_INCLUDES = 26;
SHRDataElementParser.KW_TRUE = 27;
SHRDataElementParser.KW_FALSE = 28;
SHRDataElementParser.KW_TBD = 29;
SHRDataElementParser.KW_TBD_CODE = 30;
SHRDataElementParser.KW_BAR_ENTRY = 31;
SHRDataElementParser.KW_BAR_VALUE = 32;
SHRDataElementParser.DOT = 33;
SHRDataElementParser.EQUAL = 34;
SHRDataElementParser.COMMA = 35;
SHRDataElementParser.STAR = 36;
SHRDataElementParser.OPEN_PAREN = 37;
SHRDataElementParser.CLOSE_PAREN = 38;
SHRDataElementParser.RANGE = 39;
SHRDataElementParser.URL = 40;
SHRDataElementParser.PATH_URL = 41;
SHRDataElementParser.URN_OID = 42;
SHRDataElementParser.URN = 43;
SHRDataElementParser.CODE = 44;
SHRDataElementParser.KW_BOOLEAN = 45;
SHRDataElementParser.KW_INTEGER = 46;
SHRDataElementParser.KW_STRING = 47;
SHRDataElementParser.KW_DECIMAL = 48;
SHRDataElementParser.KW_URI = 49;
SHRDataElementParser.KW_BASE64_BINARY = 50;
SHRDataElementParser.KW_INSTANT = 51;
SHRDataElementParser.KW_DATE = 52;
SHRDataElementParser.KW_DATE_TIME = 53;
SHRDataElementParser.KW_TIME = 54;
SHRDataElementParser.KW_CODE = 55;
SHRDataElementParser.KW_OID = 56;
SHRDataElementParser.KW_ID = 57;
SHRDataElementParser.KW_MARKDOWN = 58;
SHRDataElementParser.KW_UNSIGNED_INT = 59;
SHRDataElementParser.KW_POSITIVE_INT = 60;
SHRDataElementParser.KW_XHTML = 61;
SHRDataElementParser.WHOLE_NUMBER = 62;
SHRDataElementParser.ALL_CAPS = 63;
SHRDataElementParser.UPPER_WORD = 64;
SHRDataElementParser.LOWER_WORD = 65;
SHRDataElementParser.DOT_SEPARATED_LW = 66;
SHRDataElementParser.DOT_SEPARATED_UW = 67;
SHRDataElementParser.STRING = 68;
SHRDataElementParser.WS = 69;
SHRDataElementParser.NEWLINE = 70;
SHRDataElementParser.COMMENT = 71;
SHRDataElementParser.LINE_COMMENT = 72;

SHRDataElementParser.RULE_doc = 0;
SHRDataElementParser.RULE_docHeader = 1;
SHRDataElementParser.RULE_usesStatement = 2;
SHRDataElementParser.RULE_pathDefs = 3;
SHRDataElementParser.RULE_pathDef = 4;
SHRDataElementParser.RULE_vocabularyDefs = 5;
SHRDataElementParser.RULE_vocabularyDef = 6;
SHRDataElementParser.RULE_dataDefs = 7;
SHRDataElementParser.RULE_dataDef = 8;
SHRDataElementParser.RULE_elementDef = 9;
SHRDataElementParser.RULE_elementHeader = 10;
SHRDataElementParser.RULE_entryDef = 11;
SHRDataElementParser.RULE_entryHeader = 12;
SHRDataElementParser.RULE_elementProps = 13;
SHRDataElementParser.RULE_elementProp = 14;
SHRDataElementParser.RULE_values = 15;
SHRDataElementParser.RULE_value = 16;
SHRDataElementParser.RULE_valueType = 17;
SHRDataElementParser.RULE_field = 18;
SHRDataElementParser.RULE_fieldType = 19;
SHRDataElementParser.RULE_basedOnProp = 20;
SHRDataElementParser.RULE_conceptProp = 21;
SHRDataElementParser.RULE_concepts = 22;
SHRDataElementParser.RULE_descriptionProp = 23;
SHRDataElementParser.RULE_version = 24;
SHRDataElementParser.RULE_namespace = 25;
SHRDataElementParser.RULE_specialWord = 26;
SHRDataElementParser.RULE_simpleName = 27;
SHRDataElementParser.RULE_fullyQualifiedName = 28;
SHRDataElementParser.RULE_simpleOrFQName = 29;
SHRDataElementParser.RULE_ref = 30;
SHRDataElementParser.RULE_code = 31;
SHRDataElementParser.RULE_fullyQualifiedCode = 32;
SHRDataElementParser.RULE_codeOrFQCode = 33;
SHRDataElementParser.RULE_bindingInfix = 34;
SHRDataElementParser.RULE_typeConstraint = 35;
SHRDataElementParser.RULE_elementWithConstraint = 36;
SHRDataElementParser.RULE_elementPath = 37;
SHRDataElementParser.RULE_elementConstraint = 38;
SHRDataElementParser.RULE_legacyWithCode = 39;
SHRDataElementParser.RULE_elementCodeVSConstraint = 40;
SHRDataElementParser.RULE_elementCodeValueConstraint = 41;
SHRDataElementParser.RULE_elementIncludesCodeValueConstraint = 42;
SHRDataElementParser.RULE_elementBooleanConstraint = 43;
SHRDataElementParser.RULE_elementTypeConstraint = 44;
SHRDataElementParser.RULE_elementIncludesTypeConstraint = 45;
SHRDataElementParser.RULE_elementWithUnitsConstraint = 46;
SHRDataElementParser.RULE_valueset = 47;
SHRDataElementParser.RULE_primitive = 48;
SHRDataElementParser.RULE_count = 49;
SHRDataElementParser.RULE_tbd = 50;
SHRDataElementParser.RULE_tbdCode = 51;

function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.docHeader = function() {
    return this.getTypedRuleContext(DocHeaderContext,0);
};

DocContext.prototype.dataDefs = function() {
    return this.getTypedRuleContext(DataDefsContext,0);
};

DocContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
};

DocContext.prototype.usesStatement = function() {
    return this.getTypedRuleContext(UsesStatementContext,0);
};

DocContext.prototype.pathDefs = function() {
    return this.getTypedRuleContext(PathDefsContext,0);
};

DocContext.prototype.vocabularyDefs = function() {
    return this.getTypedRuleContext(VocabularyDefsContext,0);
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDoc(this);
	}
};

DocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DocContext = DocContext;

SHRDataElementParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SHRDataElementParser.RULE_doc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.docHeader();
        this.state = 106;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_DESCRIPTION) {
            this.state = 105;
            this.descriptionProp();
        }

        this.state = 109;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_USES) {
            this.state = 108;
            this.usesStatement();
        }

        this.state = 112;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_PATH) {
            this.state = 111;
            this.pathDefs();
        }

        this.state = 115;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_VOCABULARY) {
            this.state = 114;
            this.vocabularyDefs();
        }

        this.state = 117;
        this.dataDefs();
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
    this.ruleIndex = SHRDataElementParser.RULE_docHeader;
    return this;
}

DocHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocHeaderContext.prototype.constructor = DocHeaderContext;

DocHeaderContext.prototype.KW_GRAMMAR = function() {
    return this.getToken(SHRDataElementParser.KW_GRAMMAR, 0);
};

DocHeaderContext.prototype.KW_G_DATA_ELEMENT = function() {
    return this.getToken(SHRDataElementParser.KW_G_DATA_ELEMENT, 0);
};

DocHeaderContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

DocHeaderContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRDataElementParser.KW_NAMESPACE, 0);
};

DocHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

DocHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDocHeader(this);
	}
};

DocHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDocHeader(this);
	}
};

DocHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDocHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DocHeaderContext = DocHeaderContext;

SHRDataElementParser.prototype.docHeader = function() {

    var localctx = new DocHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SHRDataElementParser.RULE_docHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(SHRDataElementParser.KW_GRAMMAR);
        this.state = 120;
        this.match(SHRDataElementParser.KW_G_DATA_ELEMENT);
        this.state = 121;
        this.version();
        this.state = 122;
        this.match(SHRDataElementParser.KW_NAMESPACE);
        this.state = 123;
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

function UsesStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_usesStatement;
    return this;
}

UsesStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsesStatementContext.prototype.constructor = UsesStatementContext;

UsesStatementContext.prototype.KW_USES = function() {
    return this.getToken(SHRDataElementParser.KW_USES, 0);
};

UsesStatementContext.prototype.namespace = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NamespaceContext);
    } else {
        return this.getTypedRuleContext(NamespaceContext,i);
    }
};

UsesStatementContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.COMMA);
    } else {
        return this.getToken(SHRDataElementParser.COMMA, i);
    }
};


UsesStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterUsesStatement(this);
	}
};

UsesStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitUsesStatement(this);
	}
};

UsesStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitUsesStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.UsesStatementContext = UsesStatementContext;

SHRDataElementParser.prototype.usesStatement = function() {

    var localctx = new UsesStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SHRDataElementParser.RULE_usesStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 125;
        this.match(SHRDataElementParser.KW_USES);
        this.state = 126;
        this.namespace();
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 127;
            this.match(SHRDataElementParser.COMMA);
            this.state = 128;
            this.namespace();
            this.state = 133;
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

function PathDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_pathDefs;
    return this;
}

PathDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathDefsContext.prototype.constructor = PathDefsContext;

PathDefsContext.prototype.pathDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PathDefContext);
    } else {
        return this.getTypedRuleContext(PathDefContext,i);
    }
};

PathDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterPathDefs(this);
	}
};

PathDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitPathDefs(this);
	}
};

PathDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitPathDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.PathDefsContext = PathDefsContext;

SHRDataElementParser.prototype.pathDefs = function() {

    var localctx = new PathDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SHRDataElementParser.RULE_pathDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 134;
            this.pathDef();
            this.state = 137; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRDataElementParser.KW_PATH);
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

function PathDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_pathDef;
    return this;
}

PathDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathDefContext.prototype.constructor = PathDefContext;

PathDefContext.prototype.KW_PATH = function() {
    return this.getToken(SHRDataElementParser.KW_PATH, 0);
};

PathDefContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRDataElementParser.ALL_CAPS, 0);
};

PathDefContext.prototype.EQUAL = function() {
    return this.getToken(SHRDataElementParser.EQUAL, 0);
};

PathDefContext.prototype.URL = function() {
    return this.getToken(SHRDataElementParser.URL, 0);
};

PathDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterPathDef(this);
	}
};

PathDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitPathDef(this);
	}
};

PathDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitPathDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.PathDefContext = PathDefContext;

SHRDataElementParser.prototype.pathDef = function() {

    var localctx = new PathDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SHRDataElementParser.RULE_pathDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(SHRDataElementParser.KW_PATH);
        this.state = 140;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 141;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 142;
        this.match(SHRDataElementParser.URL);
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
    this.ruleIndex = SHRDataElementParser.RULE_vocabularyDefs;
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
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterVocabularyDefs(this);
	}
};

VocabularyDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitVocabularyDefs(this);
	}
};

VocabularyDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitVocabularyDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.VocabularyDefsContext = VocabularyDefsContext;

SHRDataElementParser.prototype.vocabularyDefs = function() {

    var localctx = new VocabularyDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SHRDataElementParser.RULE_vocabularyDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 144;
            this.vocabularyDef();
            this.state = 147; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRDataElementParser.KW_VOCABULARY);
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
    this.ruleIndex = SHRDataElementParser.RULE_vocabularyDef;
    return this;
}

VocabularyDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VocabularyDefContext.prototype.constructor = VocabularyDefContext;

VocabularyDefContext.prototype.KW_VOCABULARY = function() {
    return this.getToken(SHRDataElementParser.KW_VOCABULARY, 0);
};

VocabularyDefContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRDataElementParser.ALL_CAPS, 0);
};

VocabularyDefContext.prototype.EQUAL = function() {
    return this.getToken(SHRDataElementParser.EQUAL, 0);
};

VocabularyDefContext.prototype.URL = function() {
    return this.getToken(SHRDataElementParser.URL, 0);
};

VocabularyDefContext.prototype.URN_OID = function() {
    return this.getToken(SHRDataElementParser.URN_OID, 0);
};

VocabularyDefContext.prototype.URN = function() {
    return this.getToken(SHRDataElementParser.URN, 0);
};

VocabularyDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitVocabularyDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.VocabularyDefContext = VocabularyDefContext;

SHRDataElementParser.prototype.vocabularyDef = function() {

    var localctx = new VocabularyDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRDataElementParser.RULE_vocabularyDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(SHRDataElementParser.KW_VOCABULARY);
        this.state = 150;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 151;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 152;
        _la = this._input.LA(1);
        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (SHRDataElementParser.URL - 40)) | (1 << (SHRDataElementParser.URN_OID - 40)) | (1 << (SHRDataElementParser.URN - 40)))) !== 0))) {
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

function DataDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_dataDefs;
    return this;
}

DataDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefsContext.prototype.constructor = DataDefsContext;

DataDefsContext.prototype.dataDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataDefContext);
    } else {
        return this.getTypedRuleContext(DataDefContext,i);
    }
};

DataDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDataDefs(this);
	}
};

DataDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDataDefs(this);
	}
};

DataDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDataDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DataDefsContext = DataDefsContext;

SHRDataElementParser.prototype.dataDefs = function() {

    var localctx = new DataDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRDataElementParser.RULE_dataDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_ABSTRACT) | (1 << SHRDataElementParser.KW_ELEMENT) | (1 << SHRDataElementParser.KW_ENTRY_ELEMENT))) !== 0)) {
            this.state = 154;
            this.dataDef();
            this.state = 159;
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

function DataDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_dataDef;
    return this;
}

DataDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefContext.prototype.constructor = DataDefContext;

DataDefContext.prototype.elementDef = function() {
    return this.getTypedRuleContext(ElementDefContext,0);
};

DataDefContext.prototype.entryDef = function() {
    return this.getTypedRuleContext(EntryDefContext,0);
};

DataDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDataDef(this);
	}
};

DataDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDataDef(this);
	}
};

DataDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDataDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DataDefContext = DataDefContext;

SHRDataElementParser.prototype.dataDef = function() {

    var localctx = new DataDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SHRDataElementParser.RULE_dataDef);
    try {
        this.state = 162;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_ABSTRACT:
        case SHRDataElementParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 160;
            this.elementDef();
            break;
        case SHRDataElementParser.KW_ENTRY_ELEMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 161;
            this.entryDef();
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

function ElementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementDef;
    return this;
}

ElementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementDefContext.prototype.constructor = ElementDefContext;

ElementDefContext.prototype.elementHeader = function() {
    return this.getTypedRuleContext(ElementHeaderContext,0);
};

ElementDefContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

ElementDefContext.prototype.elementProps = function() {
    return this.getTypedRuleContext(ElementPropsContext,0);
};

ElementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementDef(this);
	}
};

ElementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementDef(this);
	}
};

ElementDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementDefContext = ElementDefContext;

SHRDataElementParser.prototype.elementDef = function() {

    var localctx = new ElementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SHRDataElementParser.RULE_elementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.elementHeader();
        this.state = 166;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_BASED_ON) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 165;
            this.elementProps();
        }

        this.state = 168;
        this.values();
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

function ElementHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementHeader;
    return this;
}

ElementHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementHeaderContext.prototype.constructor = ElementHeaderContext;

ElementHeaderContext.prototype.KW_ELEMENT = function() {
    return this.getToken(SHRDataElementParser.KW_ELEMENT, 0);
};

ElementHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ElementHeaderContext.prototype.KW_ABSTRACT = function() {
    return this.getToken(SHRDataElementParser.KW_ABSTRACT, 0);
};

ElementHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementHeader(this);
	}
};

ElementHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementHeader(this);
	}
};

ElementHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementHeaderContext = ElementHeaderContext;

SHRDataElementParser.prototype.elementHeader = function() {

    var localctx = new ElementHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SHRDataElementParser.RULE_elementHeader);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_ABSTRACT) {
            this.state = 170;
            this.match(SHRDataElementParser.KW_ABSTRACT);
        }

        this.state = 173;
        this.match(SHRDataElementParser.KW_ELEMENT);
        this.state = 174;
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

function EntryDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_entryDef;
    return this;
}

EntryDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryDefContext.prototype.constructor = EntryDefContext;

EntryDefContext.prototype.entryHeader = function() {
    return this.getTypedRuleContext(EntryHeaderContext,0);
};

EntryDefContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

EntryDefContext.prototype.elementProps = function() {
    return this.getTypedRuleContext(ElementPropsContext,0);
};

EntryDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterEntryDef(this);
	}
};

EntryDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitEntryDef(this);
	}
};

EntryDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitEntryDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.EntryDefContext = EntryDefContext;

SHRDataElementParser.prototype.entryDef = function() {

    var localctx = new EntryDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SHRDataElementParser.RULE_entryDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.entryHeader();
        this.state = 178;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_BASED_ON) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 177;
            this.elementProps();
        }

        this.state = 180;
        this.values();
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
    this.ruleIndex = SHRDataElementParser.RULE_entryHeader;
    return this;
}

EntryHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryHeaderContext.prototype.constructor = EntryHeaderContext;

EntryHeaderContext.prototype.KW_ENTRY_ELEMENT = function() {
    return this.getToken(SHRDataElementParser.KW_ENTRY_ELEMENT, 0);
};

EntryHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

EntryHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterEntryHeader(this);
	}
};

EntryHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitEntryHeader(this);
	}
};

EntryHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitEntryHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.EntryHeaderContext = EntryHeaderContext;

SHRDataElementParser.prototype.entryHeader = function() {

    var localctx = new EntryHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRDataElementParser.RULE_entryHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(SHRDataElementParser.KW_ENTRY_ELEMENT);
        this.state = 183;
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

function ElementPropsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementProps;
    return this;
}

ElementPropsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementPropsContext.prototype.constructor = ElementPropsContext;

ElementPropsContext.prototype.elementProp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementPropContext);
    } else {
        return this.getTypedRuleContext(ElementPropContext,i);
    }
};

ElementPropsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementProps(this);
	}
};

ElementPropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementProps(this);
	}
};

ElementPropsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementProps(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementPropsContext = ElementPropsContext;

SHRDataElementParser.prototype.elementProps = function() {

    var localctx = new ElementPropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SHRDataElementParser.RULE_elementProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 185;
            this.elementProp();
            this.state = 188; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_BASED_ON) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0));
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

function ElementPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementProp;
    return this;
}

ElementPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementPropContext.prototype.constructor = ElementPropContext;

ElementPropContext.prototype.basedOnProp = function() {
    return this.getTypedRuleContext(BasedOnPropContext,0);
};

ElementPropContext.prototype.conceptProp = function() {
    return this.getTypedRuleContext(ConceptPropContext,0);
};

ElementPropContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
};

ElementPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementProp(this);
	}
};

ElementPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementProp(this);
	}
};

ElementPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementPropContext = ElementPropContext;

SHRDataElementParser.prototype.elementProp = function() {

    var localctx = new ElementPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SHRDataElementParser.RULE_elementProp);
    try {
        this.state = 193;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_BASED_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 190;
            this.basedOnProp();
            break;
        case SHRDataElementParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 191;
            this.conceptProp();
            break;
        case SHRDataElementParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 192;
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

function ValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_values;
    return this;
}

ValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesContext.prototype.constructor = ValuesContext;

ValuesContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ValuesContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

ValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterValues(this);
	}
};

ValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitValues(this);
	}
};

ValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ValuesContext = ValuesContext;

SHRDataElementParser.prototype.values = function() {

    var localctx = new ValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRDataElementParser.RULE_values);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_VALUE) {
            this.state = 195;
            this.value();
        }

        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 14)) & ~0x1f) == 0 && ((1 << (_la - 14)) & ((1 << (SHRDataElementParser.KW_REF - 14)) | (1 << (SHRDataElementParser.KW_TBD - 14)) | (1 << (SHRDataElementParser.KW_BAR_ENTRY - 14)) | (1 << (SHRDataElementParser.KW_BAR_VALUE - 14)) | (1 << (SHRDataElementParser.OPEN_PAREN - 14)) | (1 << (SHRDataElementParser.KW_BOOLEAN - 14)))) !== 0) || ((((_la - 46)) & ~0x1f) == 0 && ((1 << (_la - 46)) & ((1 << (SHRDataElementParser.KW_INTEGER - 46)) | (1 << (SHRDataElementParser.KW_STRING - 46)) | (1 << (SHRDataElementParser.KW_DECIMAL - 46)) | (1 << (SHRDataElementParser.KW_URI - 46)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 46)) | (1 << (SHRDataElementParser.KW_INSTANT - 46)) | (1 << (SHRDataElementParser.KW_DATE - 46)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 46)) | (1 << (SHRDataElementParser.KW_TIME - 46)) | (1 << (SHRDataElementParser.KW_CODE - 46)) | (1 << (SHRDataElementParser.KW_OID - 46)) | (1 << (SHRDataElementParser.KW_ID - 46)) | (1 << (SHRDataElementParser.KW_MARKDOWN - 46)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 46)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 46)) | (1 << (SHRDataElementParser.KW_XHTML - 46)) | (1 << (SHRDataElementParser.WHOLE_NUMBER - 46)) | (1 << (SHRDataElementParser.ALL_CAPS - 46)) | (1 << (SHRDataElementParser.UPPER_WORD - 46)) | (1 << (SHRDataElementParser.LOWER_WORD - 46)) | (1 << (SHRDataElementParser.DOT_SEPARATED_UW - 46)))) !== 0)) {
            this.state = 198;
            this.field();
            this.state = 203;
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

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.KW_VALUE = function() {
    return this.getToken(SHRDataElementParser.KW_VALUE, 0);
};

ValueContext.prototype.valueType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueTypeContext);
    } else {
        return this.getTypedRuleContext(ValueTypeContext,i);
    }
};

ValueContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

ValueContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRDataElementParser.OPEN_PAREN, 0);
};

ValueContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.KW_OR);
    } else {
        return this.getToken(SHRDataElementParser.KW_OR, i);
    }
};


ValueContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRDataElementParser.CLOSE_PAREN, 0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ValueContext = ValueContext;

SHRDataElementParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SHRDataElementParser.RULE_value);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(SHRDataElementParser.KW_VALUE);
        this.state = 206;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.WHOLE_NUMBER) {
            this.state = 205;
            this.count();
        }

        this.state = 209;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.OPEN_PAREN) {
            this.state = 208;
            this.match(SHRDataElementParser.OPEN_PAREN);
        }

        this.state = 211;
        this.valueType();
        this.state = 216;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_OR) {
            this.state = 212;
            this.match(SHRDataElementParser.KW_OR);
            this.state = 213;
            this.valueType();
            this.state = 218;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 220;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.CLOSE_PAREN) {
            this.state = 219;
            this.match(SHRDataElementParser.CLOSE_PAREN);
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

function ValueTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_valueType;
    return this;
}

ValueTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueTypeContext.prototype.constructor = ValueTypeContext;

ValueTypeContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ValueTypeContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

ValueTypeContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ValueTypeContext.prototype.elementWithConstraint = function() {
    return this.getTypedRuleContext(ElementWithConstraintContext,0);
};

ValueTypeContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ValueTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterValueType(this);
	}
};

ValueTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitValueType(this);
	}
};

ValueTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitValueType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ValueTypeContext = ValueTypeContext;

SHRDataElementParser.prototype.valueType = function() {

    var localctx = new ValueTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SHRDataElementParser.RULE_valueType);
    try {
        this.state = 227;
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 222;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 223;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 224;
            this.primitive();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 225;
            this.elementWithConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 226;
            this.tbd();
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

function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.fieldType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldTypeContext);
    } else {
        return this.getTypedRuleContext(FieldTypeContext,i);
    }
};

FieldContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

FieldContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRDataElementParser.OPEN_PAREN, 0);
};

FieldContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.KW_OR);
    } else {
        return this.getToken(SHRDataElementParser.KW_OR, i);
    }
};


FieldContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRDataElementParser.CLOSE_PAREN, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.FieldContext = FieldContext;

SHRDataElementParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SHRDataElementParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.WHOLE_NUMBER) {
            this.state = 229;
            this.count();
        }

        this.state = 233;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.OPEN_PAREN) {
            this.state = 232;
            this.match(SHRDataElementParser.OPEN_PAREN);
        }

        this.state = 235;
        this.fieldType();
        this.state = 240;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_OR) {
            this.state = 236;
            this.match(SHRDataElementParser.KW_OR);
            this.state = 237;
            this.fieldType();
            this.state = 242;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 244;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.CLOSE_PAREN) {
            this.state = 243;
            this.match(SHRDataElementParser.CLOSE_PAREN);
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

function FieldTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_fieldType;
    return this;
}

FieldTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldTypeContext.prototype.constructor = FieldTypeContext;

FieldTypeContext.prototype.specialWord = function() {
    return this.getTypedRuleContext(SpecialWordContext,0);
};

FieldTypeContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

FieldTypeContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

FieldTypeContext.prototype.elementWithConstraint = function() {
    return this.getTypedRuleContext(ElementWithConstraintContext,0);
};

FieldTypeContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

FieldTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterFieldType(this);
	}
};

FieldTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitFieldType(this);
	}
};

FieldTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitFieldType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.FieldTypeContext = FieldTypeContext;

SHRDataElementParser.prototype.fieldType = function() {

    var localctx = new FieldTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SHRDataElementParser.RULE_fieldType);
    try {
        this.state = 251;
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 246;
            this.specialWord();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 247;
            this.simpleOrFQName();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 248;
            this.ref();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 249;
            this.elementWithConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 250;
            this.tbd();
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

function BasedOnPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_basedOnProp;
    return this;
}

BasedOnPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasedOnPropContext.prototype.constructor = BasedOnPropContext;

BasedOnPropContext.prototype.KW_BASED_ON = function() {
    return this.getToken(SHRDataElementParser.KW_BASED_ON, 0);
};

BasedOnPropContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

BasedOnPropContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

BasedOnPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterBasedOnProp(this);
	}
};

BasedOnPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitBasedOnProp(this);
	}
};

BasedOnPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitBasedOnProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.BasedOnPropContext = BasedOnPropContext;

SHRDataElementParser.prototype.basedOnProp = function() {

    var localctx = new BasedOnPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SHRDataElementParser.RULE_basedOnProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(SHRDataElementParser.KW_BASED_ON);
        this.state = 256;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 254;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 255;
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

function ConceptPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_conceptProp;
    return this;
}

ConceptPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptPropContext.prototype.constructor = ConceptPropContext;

ConceptPropContext.prototype.KW_CONCEPT = function() {
    return this.getToken(SHRDataElementParser.KW_CONCEPT, 0);
};

ConceptPropContext.prototype.concepts = function() {
    return this.getTypedRuleContext(ConceptsContext,0);
};

ConceptPropContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ConceptPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterConceptProp(this);
	}
};

ConceptPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitConceptProp(this);
	}
};

ConceptPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitConceptProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ConceptPropContext = ConceptPropContext;

SHRDataElementParser.prototype.conceptProp = function() {

    var localctx = new ConceptPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SHRDataElementParser.RULE_conceptProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(SHRDataElementParser.KW_CONCEPT);
        this.state = 261;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.state = 259;
            this.concepts();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 260;
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
    this.ruleIndex = SHRDataElementParser.RULE_concepts;
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
        return this.getTokens(SHRDataElementParser.COMMA);
    } else {
        return this.getToken(SHRDataElementParser.COMMA, i);
    }
};


ConceptsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterConcepts(this);
	}
};

ConceptsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitConcepts(this);
	}
};

ConceptsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitConcepts(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ConceptsContext = ConceptsContext;

SHRDataElementParser.prototype.concepts = function() {

    var localctx = new ConceptsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SHRDataElementParser.RULE_concepts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.fullyQualifiedCode();
        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 264;
            this.match(SHRDataElementParser.COMMA);
            this.state = 265;
            this.fullyQualifiedCode();
            this.state = 270;
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
    this.ruleIndex = SHRDataElementParser.RULE_descriptionProp;
    return this;
}

DescriptionPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionPropContext.prototype.constructor = DescriptionPropContext;

DescriptionPropContext.prototype.KW_DESCRIPTION = function() {
    return this.getToken(SHRDataElementParser.KW_DESCRIPTION, 0);
};

DescriptionPropContext.prototype.STRING = function() {
    return this.getToken(SHRDataElementParser.STRING, 0);
};

DescriptionPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitDescriptionProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.DescriptionPropContext = DescriptionPropContext;

SHRDataElementParser.prototype.descriptionProp = function() {

    var localctx = new DescriptionPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SHRDataElementParser.RULE_descriptionProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(SHRDataElementParser.KW_DESCRIPTION);
        this.state = 272;
        this.match(SHRDataElementParser.STRING);
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
    this.ruleIndex = SHRDataElementParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRDataElementParser.WHOLE_NUMBER, i);
    }
};


VersionContext.prototype.DOT = function() {
    return this.getToken(SHRDataElementParser.DOT, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.VersionContext = VersionContext;

SHRDataElementParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SHRDataElementParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 275;
        this.match(SHRDataElementParser.DOT);
        this.state = 276;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
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
    this.ruleIndex = SHRDataElementParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRDataElementParser.LOWER_WORD, 0);
};

NamespaceContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRDataElementParser.DOT_SEPARATED_LW, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.NamespaceContext = NamespaceContext;

SHRDataElementParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SHRDataElementParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.LOWER_WORD || _la===SHRDataElementParser.DOT_SEPARATED_LW)) {
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
    this.ruleIndex = SHRDataElementParser.RULE_specialWord;
    return this;
}

SpecialWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpecialWordContext.prototype.constructor = SpecialWordContext;

SpecialWordContext.prototype.KW_BAR_ENTRY = function() {
    return this.getToken(SHRDataElementParser.KW_BAR_ENTRY, 0);
};

SpecialWordContext.prototype.KW_BAR_VALUE = function() {
    return this.getToken(SHRDataElementParser.KW_BAR_VALUE, 0);
};

SpecialWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterSpecialWord(this);
	}
};

SpecialWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitSpecialWord(this);
	}
};

SpecialWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitSpecialWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.SpecialWordContext = SpecialWordContext;

SHRDataElementParser.prototype.specialWord = function() {

    var localctx = new SpecialWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SHRDataElementParser.RULE_specialWord);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.KW_BAR_ENTRY || _la===SHRDataElementParser.KW_BAR_VALUE)) {
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
    this.ruleIndex = SHRDataElementParser.RULE_simpleName;
    return this;
}

SimpleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleNameContext.prototype.constructor = SimpleNameContext;

SimpleNameContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRDataElementParser.UPPER_WORD, 0);
};

SimpleNameContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRDataElementParser.ALL_CAPS, 0);
};

SimpleNameContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRDataElementParser.LOWER_WORD, 0);
};

SimpleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterSimpleName(this);
	}
};

SimpleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitSimpleName(this);
	}
};

SimpleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitSimpleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.SimpleNameContext = SimpleNameContext;

SHRDataElementParser.prototype.simpleName = function() {

    var localctx = new SimpleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SHRDataElementParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        _la = this._input.LA(1);
        if(!(((((_la - 63)) & ~0x1f) == 0 && ((1 << (_la - 63)) & ((1 << (SHRDataElementParser.ALL_CAPS - 63)) | (1 << (SHRDataElementParser.UPPER_WORD - 63)) | (1 << (SHRDataElementParser.LOWER_WORD - 63)))) !== 0))) {
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
    this.ruleIndex = SHRDataElementParser.RULE_fullyQualifiedName;
    return this;
}

FullyQualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedNameContext.prototype.constructor = FullyQualifiedNameContext;

FullyQualifiedNameContext.prototype.DOT_SEPARATED_UW = function() {
    return this.getToken(SHRDataElementParser.DOT_SEPARATED_UW, 0);
};

FullyQualifiedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitFullyQualifiedName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.FullyQualifiedNameContext = FullyQualifiedNameContext;

SHRDataElementParser.prototype.fullyQualifiedName = function() {

    var localctx = new FullyQualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SHRDataElementParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.match(SHRDataElementParser.DOT_SEPARATED_UW);
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
    this.ruleIndex = SHRDataElementParser.RULE_simpleOrFQName;
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
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitSimpleOrFQName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.SimpleOrFQNameContext = SimpleOrFQNameContext;

SHRDataElementParser.prototype.simpleOrFQName = function() {

    var localctx = new SimpleOrFQNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SHRDataElementParser.RULE_simpleOrFQName);
    try {
        this.state = 288;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 286;
            this.simpleName();
            break;
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 287;
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
    this.ruleIndex = SHRDataElementParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.KW_REF = function() {
    return this.getToken(SHRDataElementParser.KW_REF, 0);
};

RefContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRDataElementParser.OPEN_PAREN, 0);
};

RefContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

RefContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRDataElementParser.CLOSE_PAREN, 0);
};

RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitRef(this);
	}
};

RefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.RefContext = RefContext;

SHRDataElementParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SHRDataElementParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(SHRDataElementParser.KW_REF);
        this.state = 291;
        this.match(SHRDataElementParser.OPEN_PAREN);
        this.state = 292;
        this.simpleOrFQName();
        this.state = 293;
        this.match(SHRDataElementParser.CLOSE_PAREN);
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
    this.ruleIndex = SHRDataElementParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.CODE = function() {
    return this.getToken(SHRDataElementParser.CODE, 0);
};

CodeContext.prototype.STRING = function() {
    return this.getToken(SHRDataElementParser.STRING, 0);
};

CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.CodeContext = CodeContext;

SHRDataElementParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SHRDataElementParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(SHRDataElementParser.CODE);
        this.state = 297;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 296;
            this.match(SHRDataElementParser.STRING);
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
    this.ruleIndex = SHRDataElementParser.RULE_fullyQualifiedCode;
    return this;
}

FullyQualifiedCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedCodeContext.prototype.constructor = FullyQualifiedCodeContext;

FullyQualifiedCodeContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRDataElementParser.ALL_CAPS, 0);
};

FullyQualifiedCodeContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

FullyQualifiedCodeContext.prototype.tbdCode = function() {
    return this.getTypedRuleContext(TbdCodeContext,0);
};

FullyQualifiedCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitFullyQualifiedCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.FullyQualifiedCodeContext = FullyQualifiedCodeContext;

SHRDataElementParser.prototype.fullyQualifiedCode = function() {

    var localctx = new FullyQualifiedCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SHRDataElementParser.RULE_fullyQualifiedCode);
    try {
        this.state = 302;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 299;
            this.match(SHRDataElementParser.ALL_CAPS);
            this.state = 300;
            this.code();
            break;
        case SHRDataElementParser.KW_TBD_CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 301;
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

function CodeOrFQCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_codeOrFQCode;
    return this;
}

CodeOrFQCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeOrFQCodeContext.prototype.constructor = CodeOrFQCodeContext;

CodeOrFQCodeContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

CodeOrFQCodeContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

CodeOrFQCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterCodeOrFQCode(this);
	}
};

CodeOrFQCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitCodeOrFQCode(this);
	}
};

CodeOrFQCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitCodeOrFQCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.CodeOrFQCodeContext = CodeOrFQCodeContext;

SHRDataElementParser.prototype.codeOrFQCode = function() {

    var localctx = new CodeOrFQCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SHRDataElementParser.RULE_codeOrFQCode);
    try {
        this.state = 306;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 304;
            this.fullyQualifiedCode();
            break;
        case SHRDataElementParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 305;
            this.code();
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

function BindingInfixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_bindingInfix;
    return this;
}

BindingInfixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindingInfixContext.prototype.constructor = BindingInfixContext;

BindingInfixContext.prototype.KW_MUST_BE = function() {
    return this.getToken(SHRDataElementParser.KW_MUST_BE, 0);
};

BindingInfixContext.prototype.KW_SHOULD_BE = function() {
    return this.getToken(SHRDataElementParser.KW_SHOULD_BE, 0);
};

BindingInfixContext.prototype.KW_COULD_BE = function() {
    return this.getToken(SHRDataElementParser.KW_COULD_BE, 0);
};

BindingInfixContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterBindingInfix(this);
	}
};

BindingInfixContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitBindingInfix(this);
	}
};

BindingInfixContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitBindingInfix(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.BindingInfixContext = BindingInfixContext;

SHRDataElementParser.prototype.bindingInfix = function() {

    var localctx = new BindingInfixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SHRDataElementParser.RULE_bindingInfix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_MUST_BE) | (1 << SHRDataElementParser.KW_SHOULD_BE) | (1 << SHRDataElementParser.KW_COULD_BE))) !== 0))) {
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

function TypeConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_typeConstraint;
    return this;
}

TypeConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeConstraintContext.prototype.constructor = TypeConstraintContext;

TypeConstraintContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

TypeConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

TypeConstraintContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

TypeConstraintContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

TypeConstraintContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

TypeConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterTypeConstraint(this);
	}
};

TypeConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitTypeConstraint(this);
	}
};

TypeConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitTypeConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.TypeConstraintContext = TypeConstraintContext;

SHRDataElementParser.prototype.typeConstraint = function() {

    var localctx = new TypeConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SHRDataElementParser.RULE_typeConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this.count();
        this.state = 315;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 311;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_REF:
            this.state = 312;
            this.ref();
            break;
        case SHRDataElementParser.KW_BOOLEAN:
        case SHRDataElementParser.KW_INTEGER:
        case SHRDataElementParser.KW_STRING:
        case SHRDataElementParser.KW_DECIMAL:
        case SHRDataElementParser.KW_URI:
        case SHRDataElementParser.KW_BASE64_BINARY:
        case SHRDataElementParser.KW_INSTANT:
        case SHRDataElementParser.KW_DATE:
        case SHRDataElementParser.KW_DATE_TIME:
        case SHRDataElementParser.KW_TIME:
        case SHRDataElementParser.KW_CODE:
        case SHRDataElementParser.KW_OID:
        case SHRDataElementParser.KW_ID:
        case SHRDataElementParser.KW_MARKDOWN:
        case SHRDataElementParser.KW_UNSIGNED_INT:
        case SHRDataElementParser.KW_POSITIVE_INT:
        case SHRDataElementParser.KW_XHTML:
            this.state = 313;
            this.primitive();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 314;
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

function ElementWithConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementWithConstraint;
    return this;
}

ElementWithConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementWithConstraintContext.prototype.constructor = ElementWithConstraintContext;

ElementWithConstraintContext.prototype.specialWord = function() {
    return this.getTypedRuleContext(SpecialWordContext,0);
};

ElementWithConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementWithConstraintContext.prototype.elementPath = function() {
    return this.getTypedRuleContext(ElementPathContext,0);
};

ElementWithConstraintContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ElementWithConstraintContext.prototype.elementConstraint = function() {
    return this.getTypedRuleContext(ElementConstraintContext,0);
};

ElementWithConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementWithConstraint(this);
	}
};

ElementWithConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementWithConstraint(this);
	}
};

ElementWithConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementWithConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementWithConstraintContext = ElementWithConstraintContext;

SHRDataElementParser.prototype.elementWithConstraint = function() {

    var localctx = new ElementWithConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SHRDataElementParser.RULE_elementWithConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.state = 317;
            this.specialWord();
            break;

        case 2:
            this.state = 318;
            this.simpleOrFQName();
            break;

        case 3:
            this.state = 319;
            this.elementPath();
            break;

        case 4:
            this.state = 320;
            this.primitive();
            break;

        }
        this.state = 324;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_WITH) | (1 << SHRDataElementParser.KW_MUST_BE) | (1 << SHRDataElementParser.KW_SHOULD_BE) | (1 << SHRDataElementParser.KW_COULD_BE) | (1 << SHRDataElementParser.KW_FROM) | (1 << SHRDataElementParser.KW_IS) | (1 << SHRDataElementParser.KW_IS_TYPE) | (1 << SHRDataElementParser.KW_VALUE_IS_TYPE) | (1 << SHRDataElementParser.KW_INCLUDES))) !== 0)) {
            this.state = 323;
            this.elementConstraint();
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

function ElementPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementPath;
    return this;
}

ElementPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementPathContext.prototype.constructor = ElementPathContext;

ElementPathContext.prototype.specialWord = function() {
    return this.getTypedRuleContext(SpecialWordContext,0);
};

ElementPathContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementPathContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.DOT);
    } else {
        return this.getToken(SHRDataElementParser.DOT, i);
    }
};


ElementPathContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ElementPathContext.prototype.simpleName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SimpleNameContext);
    } else {
        return this.getTypedRuleContext(SimpleNameContext,i);
    }
};

ElementPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementPath(this);
	}
};

ElementPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementPath(this);
	}
};

ElementPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementPathContext = ElementPathContext;

SHRDataElementParser.prototype.elementPath = function() {

    var localctx = new ElementPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SHRDataElementParser.RULE_elementPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_BAR_ENTRY:
        case SHRDataElementParser.KW_BAR_VALUE:
            this.state = 326;
            this.specialWord();
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 327;
            this.simpleOrFQName();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 349;
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.state = 332; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 330;
            		this.match(SHRDataElementParser.DOT);
            		this.state = 331;
            		this.simpleName();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 334; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,37, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 338;
            _la = this._input.LA(1);
            if(_la===SHRDataElementParser.DOT) {
                this.state = 336;
                this.match(SHRDataElementParser.DOT);
                this.state = 337;
                this.primitive();
            }

            break;

        case 2:
            this.state = 344;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 340;
                    this.match(SHRDataElementParser.DOT);
                    this.state = 341;
                    this.simpleName(); 
                }
                this.state = 346;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
            }

            this.state = 347;
            this.match(SHRDataElementParser.DOT);
            this.state = 348;
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

function ElementConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementConstraint;
    return this;
}

ElementConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementConstraintContext.prototype.constructor = ElementConstraintContext;

ElementConstraintContext.prototype.elementCodeVSConstraint = function() {
    return this.getTypedRuleContext(ElementCodeVSConstraintContext,0);
};

ElementConstraintContext.prototype.elementCodeValueConstraint = function() {
    return this.getTypedRuleContext(ElementCodeValueConstraintContext,0);
};

ElementConstraintContext.prototype.elementIncludesCodeValueConstraint = function() {
    return this.getTypedRuleContext(ElementIncludesCodeValueConstraintContext,0);
};

ElementConstraintContext.prototype.elementBooleanConstraint = function() {
    return this.getTypedRuleContext(ElementBooleanConstraintContext,0);
};

ElementConstraintContext.prototype.elementTypeConstraint = function() {
    return this.getTypedRuleContext(ElementTypeConstraintContext,0);
};

ElementConstraintContext.prototype.elementIncludesTypeConstraint = function() {
    return this.getTypedRuleContext(ElementIncludesTypeConstraintContext,0);
};

ElementConstraintContext.prototype.elementWithUnitsConstraint = function() {
    return this.getTypedRuleContext(ElementWithUnitsConstraintContext,0);
};

ElementConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementConstraint(this);
	}
};

ElementConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementConstraint(this);
	}
};

ElementConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementConstraintContext = ElementConstraintContext;

SHRDataElementParser.prototype.elementConstraint = function() {

    var localctx = new ElementConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SHRDataElementParser.RULE_elementConstraint);
    try {
        this.state = 358;
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 351;
            this.elementCodeVSConstraint();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 352;
            this.elementCodeValueConstraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 353;
            this.elementIncludesCodeValueConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 354;
            this.elementBooleanConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 355;
            this.elementTypeConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 356;
            this.elementIncludesTypeConstraint();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 357;
            this.elementWithUnitsConstraint();
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

function LegacyWithCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_legacyWithCode;
    return this;
}

LegacyWithCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LegacyWithCodeContext.prototype.constructor = LegacyWithCodeContext;

LegacyWithCodeContext.prototype.KW_WITH = function() {
    return this.getToken(SHRDataElementParser.KW_WITH, 0);
};

LegacyWithCodeContext.prototype.KW_CODE = function() {
    return this.getToken(SHRDataElementParser.KW_CODE, 0);
};

LegacyWithCodeContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

LegacyWithCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterLegacyWithCode(this);
	}
};

LegacyWithCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitLegacyWithCode(this);
	}
};

LegacyWithCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitLegacyWithCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.LegacyWithCodeContext = LegacyWithCodeContext;

SHRDataElementParser.prototype.legacyWithCode = function() {

    var localctx = new LegacyWithCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SHRDataElementParser.RULE_legacyWithCode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 360;
        this.match(SHRDataElementParser.KW_WITH);
        this.state = 363;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_CODE:
            this.state = 361;
            this.match(SHRDataElementParser.KW_CODE);
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 362;
            this.simpleOrFQName();
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

function ElementCodeVSConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementCodeVSConstraint;
    return this;
}

ElementCodeVSConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementCodeVSConstraintContext.prototype.constructor = ElementCodeVSConstraintContext;

ElementCodeVSConstraintContext.prototype.KW_FROM = function() {
    return this.getToken(SHRDataElementParser.KW_FROM, 0);
};

ElementCodeVSConstraintContext.prototype.valueset = function() {
    return this.getTypedRuleContext(ValuesetContext,0);
};

ElementCodeVSConstraintContext.prototype.legacyWithCode = function() {
    return this.getTypedRuleContext(LegacyWithCodeContext,0);
};

ElementCodeVSConstraintContext.prototype.bindingInfix = function() {
    return this.getTypedRuleContext(BindingInfixContext,0);
};

ElementCodeVSConstraintContext.prototype.KW_IF_COVERED = function() {
    return this.getToken(SHRDataElementParser.KW_IF_COVERED, 0);
};

ElementCodeVSConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementCodeVSConstraint(this);
	}
};

ElementCodeVSConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementCodeVSConstraint(this);
	}
};

ElementCodeVSConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementCodeVSConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementCodeVSConstraintContext = ElementCodeVSConstraintContext;

SHRDataElementParser.prototype.elementCodeVSConstraint = function() {

    var localctx = new ElementCodeVSConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SHRDataElementParser.RULE_elementCodeVSConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_WITH) {
            this.state = 365;
            this.legacyWithCode();
        }

        this.state = 369;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_MUST_BE) | (1 << SHRDataElementParser.KW_SHOULD_BE) | (1 << SHRDataElementParser.KW_COULD_BE))) !== 0)) {
            this.state = 368;
            this.bindingInfix();
        }

        this.state = 371;
        this.match(SHRDataElementParser.KW_FROM);
        this.state = 372;
        this.valueset();
        this.state = 374;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_IF_COVERED) {
            this.state = 373;
            this.match(SHRDataElementParser.KW_IF_COVERED);
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

function ElementCodeValueConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementCodeValueConstraint;
    return this;
}

ElementCodeValueConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementCodeValueConstraintContext.prototype.constructor = ElementCodeValueConstraintContext;

ElementCodeValueConstraintContext.prototype.KW_IS = function() {
    return this.getToken(SHRDataElementParser.KW_IS, 0);
};

ElementCodeValueConstraintContext.prototype.codeOrFQCode = function() {
    return this.getTypedRuleContext(CodeOrFQCodeContext,0);
};

ElementCodeValueConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementCodeValueConstraint(this);
	}
};

ElementCodeValueConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementCodeValueConstraint(this);
	}
};

ElementCodeValueConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementCodeValueConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementCodeValueConstraintContext = ElementCodeValueConstraintContext;

SHRDataElementParser.prototype.elementCodeValueConstraint = function() {

    var localctx = new ElementCodeValueConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SHRDataElementParser.RULE_elementCodeValueConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(SHRDataElementParser.KW_IS);
        this.state = 377;
        this.codeOrFQCode();
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

function ElementIncludesCodeValueConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementIncludesCodeValueConstraint;
    return this;
}

ElementIncludesCodeValueConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementIncludesCodeValueConstraintContext.prototype.constructor = ElementIncludesCodeValueConstraintContext;

ElementIncludesCodeValueConstraintContext.prototype.KW_INCLUDES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.KW_INCLUDES);
    } else {
        return this.getToken(SHRDataElementParser.KW_INCLUDES, i);
    }
};


ElementIncludesCodeValueConstraintContext.prototype.codeOrFQCode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CodeOrFQCodeContext);
    } else {
        return this.getTypedRuleContext(CodeOrFQCodeContext,i);
    }
};

ElementIncludesCodeValueConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementIncludesCodeValueConstraint(this);
	}
};

ElementIncludesCodeValueConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementIncludesCodeValueConstraint(this);
	}
};

ElementIncludesCodeValueConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementIncludesCodeValueConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementIncludesCodeValueConstraintContext = ElementIncludesCodeValueConstraintContext;

SHRDataElementParser.prototype.elementIncludesCodeValueConstraint = function() {

    var localctx = new ElementIncludesCodeValueConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SHRDataElementParser.RULE_elementIncludesCodeValueConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 379;
            this.match(SHRDataElementParser.KW_INCLUDES);
            this.state = 380;
            this.codeOrFQCode();
            this.state = 383; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRDataElementParser.KW_INCLUDES);
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

function ElementBooleanConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementBooleanConstraint;
    return this;
}

ElementBooleanConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementBooleanConstraintContext.prototype.constructor = ElementBooleanConstraintContext;

ElementBooleanConstraintContext.prototype.KW_IS = function() {
    return this.getToken(SHRDataElementParser.KW_IS, 0);
};

ElementBooleanConstraintContext.prototype.KW_TRUE = function() {
    return this.getToken(SHRDataElementParser.KW_TRUE, 0);
};

ElementBooleanConstraintContext.prototype.KW_FALSE = function() {
    return this.getToken(SHRDataElementParser.KW_FALSE, 0);
};

ElementBooleanConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementBooleanConstraint(this);
	}
};

ElementBooleanConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementBooleanConstraint(this);
	}
};

ElementBooleanConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementBooleanConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementBooleanConstraintContext = ElementBooleanConstraintContext;

SHRDataElementParser.prototype.elementBooleanConstraint = function() {

    var localctx = new ElementBooleanConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SHRDataElementParser.RULE_elementBooleanConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this.match(SHRDataElementParser.KW_IS);
        this.state = 386;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.KW_TRUE || _la===SHRDataElementParser.KW_FALSE)) {
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

function ElementTypeConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementTypeConstraint;
    return this;
}

ElementTypeConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementTypeConstraintContext.prototype.constructor = ElementTypeConstraintContext;

ElementTypeConstraintContext.prototype.KW_IS_TYPE = function() {
    return this.getToken(SHRDataElementParser.KW_IS_TYPE, 0);
};

ElementTypeConstraintContext.prototype.KW_VALUE_IS_TYPE = function() {
    return this.getToken(SHRDataElementParser.KW_VALUE_IS_TYPE, 0);
};

ElementTypeConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementTypeConstraintContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

ElementTypeConstraintContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ElementTypeConstraintContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ElementTypeConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementTypeConstraint(this);
	}
};

ElementTypeConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementTypeConstraint(this);
	}
};

ElementTypeConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementTypeConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementTypeConstraintContext = ElementTypeConstraintContext;

SHRDataElementParser.prototype.elementTypeConstraint = function() {

    var localctx = new ElementTypeConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SHRDataElementParser.RULE_elementTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.KW_IS_TYPE || _la===SHRDataElementParser.KW_VALUE_IS_TYPE)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 393;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 389;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_REF:
            this.state = 390;
            this.ref();
            break;
        case SHRDataElementParser.KW_BOOLEAN:
        case SHRDataElementParser.KW_INTEGER:
        case SHRDataElementParser.KW_STRING:
        case SHRDataElementParser.KW_DECIMAL:
        case SHRDataElementParser.KW_URI:
        case SHRDataElementParser.KW_BASE64_BINARY:
        case SHRDataElementParser.KW_INSTANT:
        case SHRDataElementParser.KW_DATE:
        case SHRDataElementParser.KW_DATE_TIME:
        case SHRDataElementParser.KW_TIME:
        case SHRDataElementParser.KW_CODE:
        case SHRDataElementParser.KW_OID:
        case SHRDataElementParser.KW_ID:
        case SHRDataElementParser.KW_MARKDOWN:
        case SHRDataElementParser.KW_UNSIGNED_INT:
        case SHRDataElementParser.KW_POSITIVE_INT:
        case SHRDataElementParser.KW_XHTML:
            this.state = 391;
            this.primitive();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 392;
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

function ElementIncludesTypeConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementIncludesTypeConstraint;
    return this;
}

ElementIncludesTypeConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementIncludesTypeConstraintContext.prototype.constructor = ElementIncludesTypeConstraintContext;

ElementIncludesTypeConstraintContext.prototype.KW_INCLUDES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.KW_INCLUDES);
    } else {
        return this.getToken(SHRDataElementParser.KW_INCLUDES, i);
    }
};


ElementIncludesTypeConstraintContext.prototype.typeConstraint = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeConstraintContext);
    } else {
        return this.getTypedRuleContext(TypeConstraintContext,i);
    }
};

ElementIncludesTypeConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementIncludesTypeConstraint(this);
	}
};

ElementIncludesTypeConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementIncludesTypeConstraint(this);
	}
};

ElementIncludesTypeConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementIncludesTypeConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementIncludesTypeConstraintContext = ElementIncludesTypeConstraintContext;

SHRDataElementParser.prototype.elementIncludesTypeConstraint = function() {

    var localctx = new ElementIncludesTypeConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SHRDataElementParser.RULE_elementIncludesTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 397; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 395;
            this.match(SHRDataElementParser.KW_INCLUDES);
            this.state = 396;
            this.typeConstraint();
            this.state = 399; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRDataElementParser.KW_INCLUDES);
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

function ElementWithUnitsConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_elementWithUnitsConstraint;
    return this;
}

ElementWithUnitsConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementWithUnitsConstraintContext.prototype.constructor = ElementWithUnitsConstraintContext;

ElementWithUnitsConstraintContext.prototype.KW_WITH = function() {
    return this.getToken(SHRDataElementParser.KW_WITH, 0);
};

ElementWithUnitsConstraintContext.prototype.KW_UNITS = function() {
    return this.getToken(SHRDataElementParser.KW_UNITS, 0);
};

ElementWithUnitsConstraintContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

ElementWithUnitsConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterElementWithUnitsConstraint(this);
	}
};

ElementWithUnitsConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitElementWithUnitsConstraint(this);
	}
};

ElementWithUnitsConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitElementWithUnitsConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ElementWithUnitsConstraintContext = ElementWithUnitsConstraintContext;

SHRDataElementParser.prototype.elementWithUnitsConstraint = function() {

    var localctx = new ElementWithUnitsConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SHRDataElementParser.RULE_elementWithUnitsConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        this.match(SHRDataElementParser.KW_WITH);
        this.state = 402;
        this.match(SHRDataElementParser.KW_UNITS);
        this.state = 403;
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

function ValuesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_valueset;
    return this;
}

ValuesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetContext.prototype.constructor = ValuesetContext;

ValuesetContext.prototype.URL = function() {
    return this.getToken(SHRDataElementParser.URL, 0);
};

ValuesetContext.prototype.PATH_URL = function() {
    return this.getToken(SHRDataElementParser.PATH_URL, 0);
};

ValuesetContext.prototype.URN_OID = function() {
    return this.getToken(SHRDataElementParser.URN_OID, 0);
};

ValuesetContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ValuesetContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
};

ValuesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterValueset(this);
	}
};

ValuesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitValueset(this);
	}
};

ValuesetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitValueset(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.ValuesetContext = ValuesetContext;

SHRDataElementParser.prototype.valueset = function() {

    var localctx = new ValuesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SHRDataElementParser.RULE_valueset);
    try {
        this.state = 410;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 405;
            this.match(SHRDataElementParser.URL);
            break;
        case SHRDataElementParser.PATH_URL:
            this.enterOuterAlt(localctx, 2);
            this.state = 406;
            this.match(SHRDataElementParser.PATH_URL);
            break;
        case SHRDataElementParser.URN_OID:
            this.enterOuterAlt(localctx, 3);
            this.state = 407;
            this.match(SHRDataElementParser.URN_OID);
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 4);
            this.state = 408;
            this.simpleName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.enterOuterAlt(localctx, 5);
            this.state = 409;
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

function PrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRDataElementParser.RULE_primitive;
    return this;
}

PrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveContext.prototype.constructor = PrimitiveContext;

PrimitiveContext.prototype.KW_BOOLEAN = function() {
    return this.getToken(SHRDataElementParser.KW_BOOLEAN, 0);
};

PrimitiveContext.prototype.KW_INTEGER = function() {
    return this.getToken(SHRDataElementParser.KW_INTEGER, 0);
};

PrimitiveContext.prototype.KW_STRING = function() {
    return this.getToken(SHRDataElementParser.KW_STRING, 0);
};

PrimitiveContext.prototype.KW_DECIMAL = function() {
    return this.getToken(SHRDataElementParser.KW_DECIMAL, 0);
};

PrimitiveContext.prototype.KW_URI = function() {
    return this.getToken(SHRDataElementParser.KW_URI, 0);
};

PrimitiveContext.prototype.KW_BASE64_BINARY = function() {
    return this.getToken(SHRDataElementParser.KW_BASE64_BINARY, 0);
};

PrimitiveContext.prototype.KW_INSTANT = function() {
    return this.getToken(SHRDataElementParser.KW_INSTANT, 0);
};

PrimitiveContext.prototype.KW_DATE = function() {
    return this.getToken(SHRDataElementParser.KW_DATE, 0);
};

PrimitiveContext.prototype.KW_DATE_TIME = function() {
    return this.getToken(SHRDataElementParser.KW_DATE_TIME, 0);
};

PrimitiveContext.prototype.KW_TIME = function() {
    return this.getToken(SHRDataElementParser.KW_TIME, 0);
};

PrimitiveContext.prototype.KW_CODE = function() {
    return this.getToken(SHRDataElementParser.KW_CODE, 0);
};

PrimitiveContext.prototype.KW_OID = function() {
    return this.getToken(SHRDataElementParser.KW_OID, 0);
};

PrimitiveContext.prototype.KW_ID = function() {
    return this.getToken(SHRDataElementParser.KW_ID, 0);
};

PrimitiveContext.prototype.KW_MARKDOWN = function() {
    return this.getToken(SHRDataElementParser.KW_MARKDOWN, 0);
};

PrimitiveContext.prototype.KW_UNSIGNED_INT = function() {
    return this.getToken(SHRDataElementParser.KW_UNSIGNED_INT, 0);
};

PrimitiveContext.prototype.KW_POSITIVE_INT = function() {
    return this.getToken(SHRDataElementParser.KW_POSITIVE_INT, 0);
};

PrimitiveContext.prototype.KW_XHTML = function() {
    return this.getToken(SHRDataElementParser.KW_XHTML, 0);
};

PrimitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterPrimitive(this);
	}
};

PrimitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitPrimitive(this);
	}
};

PrimitiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitPrimitive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.PrimitiveContext = PrimitiveContext;

SHRDataElementParser.prototype.primitive = function() {

    var localctx = new PrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SHRDataElementParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (SHRDataElementParser.KW_BOOLEAN - 45)) | (1 << (SHRDataElementParser.KW_INTEGER - 45)) | (1 << (SHRDataElementParser.KW_STRING - 45)) | (1 << (SHRDataElementParser.KW_DECIMAL - 45)) | (1 << (SHRDataElementParser.KW_URI - 45)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 45)) | (1 << (SHRDataElementParser.KW_INSTANT - 45)) | (1 << (SHRDataElementParser.KW_DATE - 45)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 45)) | (1 << (SHRDataElementParser.KW_TIME - 45)) | (1 << (SHRDataElementParser.KW_CODE - 45)) | (1 << (SHRDataElementParser.KW_OID - 45)) | (1 << (SHRDataElementParser.KW_ID - 45)) | (1 << (SHRDataElementParser.KW_MARKDOWN - 45)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 45)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 45)) | (1 << (SHRDataElementParser.KW_XHTML - 45)))) !== 0))) {
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
    this.ruleIndex = SHRDataElementParser.RULE_count;
    return this;
}

CountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountContext.prototype.constructor = CountContext;

CountContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRDataElementParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRDataElementParser.WHOLE_NUMBER, i);
    }
};


CountContext.prototype.RANGE = function() {
    return this.getToken(SHRDataElementParser.RANGE, 0);
};

CountContext.prototype.STAR = function() {
    return this.getToken(SHRDataElementParser.STAR, 0);
};

CountContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterCount(this);
	}
};

CountContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitCount(this);
	}
};

CountContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitCount(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.CountContext = CountContext;

SHRDataElementParser.prototype.count = function() {

    var localctx = new CountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, SHRDataElementParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 414;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 415;
        this.match(SHRDataElementParser.RANGE);
        this.state = 416;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.STAR || _la===SHRDataElementParser.WHOLE_NUMBER)) {
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
    this.ruleIndex = SHRDataElementParser.RULE_tbd;
    return this;
}

TbdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TbdContext.prototype.constructor = TbdContext;

TbdContext.prototype.KW_TBD = function() {
    return this.getToken(SHRDataElementParser.KW_TBD, 0);
};

TbdContext.prototype.STRING = function() {
    return this.getToken(SHRDataElementParser.STRING, 0);
};

TbdContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterTbd(this);
	}
};

TbdContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitTbd(this);
	}
};

TbdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitTbd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.TbdContext = TbdContext;

SHRDataElementParser.prototype.tbd = function() {

    var localctx = new TbdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, SHRDataElementParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 418;
        this.match(SHRDataElementParser.KW_TBD);
        this.state = 420;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 419;
            this.match(SHRDataElementParser.STRING);
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
    this.ruleIndex = SHRDataElementParser.RULE_tbdCode;
    return this;
}

TbdCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TbdCodeContext.prototype.constructor = TbdCodeContext;

TbdCodeContext.prototype.KW_TBD_CODE = function() {
    return this.getToken(SHRDataElementParser.KW_TBD_CODE, 0);
};

TbdCodeContext.prototype.STRING = function() {
    return this.getToken(SHRDataElementParser.STRING, 0);
};

TbdCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.enterTbdCode(this);
	}
};

TbdCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRDataElementParserListener ) {
        listener.exitTbdCode(this);
	}
};

TbdCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRDataElementParserVisitor ) {
        return visitor.visitTbdCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRDataElementParser.TbdCodeContext = TbdCodeContext;

SHRDataElementParser.prototype.tbdCode = function() {

    var localctx = new TbdCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, SHRDataElementParser.RULE_tbdCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 422;
        this.match(SHRDataElementParser.KW_TBD_CODE);
        this.state = 424;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 423;
            this.match(SHRDataElementParser.STRING);
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


exports.SHRDataElementParser = SHRDataElementParser;
