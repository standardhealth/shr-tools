// Generated from SHRDataElementParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRDataElementParserListener = require('./SHRDataElementParserListener').SHRDataElementParserListener;
var SHRDataElementParserVisitor = require('./SHRDataElementParserVisitor').SHRDataElementParserVisitor;

var grammarFileName = "SHRDataElementParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3H\u01a2\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\3\2\3\2\5\2k\n\2\3\2\5\2n\n\2\3\2",
    "\5\2q\n\2\3\2\5\2t\n\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3",
    "\4\7\4\u0082\n\4\f\4\16\4\u0085\13\4\3\5\6\5\u0088\n\5\r\5\16\5\u0089",
    "\3\6\3\6\3\6\3\6\3\6\3\7\6\7\u0092\n\7\r\7\16\7\u0093\3\b\3\b\3\b\3",
    "\b\3\b\3\t\7\t\u009c\n\t\f\t\16\t\u009f\13\t\3\n\3\n\5\n\u00a3\n\n\3",
    "\13\3\13\5\13\u00a7\n\13\3\13\3\13\3\f\5\f\u00ac\n\f\3\f\3\f\3\f\3\r",
    "\3\r\5\r\u00b3\n\r\3\r\3\r\3\16\3\16\3\16\3\17\6\17\u00bb\n\17\r\17",
    "\16\17\u00bc\3\20\3\20\3\20\5\20\u00c2\n\20\3\21\5\21\u00c5\n\21\3\21",
    "\7\21\u00c8\n\21\f\21\16\21\u00cb\13\21\3\22\3\22\5\22\u00cf\n\22\3",
    "\22\5\22\u00d2\n\22\3\22\3\22\3\22\7\22\u00d7\n\22\f\22\16\22\u00da",
    "\13\22\3\22\5\22\u00dd\n\22\3\23\3\23\3\23\3\23\3\23\5\23\u00e4\n\23",
    "\3\24\5\24\u00e7\n\24\3\24\5\24\u00ea\n\24\3\24\3\24\3\24\7\24\u00ef",
    "\n\24\f\24\16\24\u00f2\13\24\3\24\5\24\u00f5\n\24\3\25\3\25\3\25\3\25",
    "\5\25\u00fb\n\25\3\26\3\26\3\26\5\26\u0100\n\26\3\27\3\27\3\27\5\27",
    "\u0105\n\27\3\30\3\30\3\30\7\30\u010a\n\30\f\30\16\30\u010d\13\30\3",
    "\31\3\31\3\31\3\32\3\32\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36",
    "\3\36\5\36\u011e\n\36\3\37\3\37\3\37\3\37\3\37\3 \3 \5 \u0127\n \3!",
    "\3!\3!\5!\u012c\n!\3\"\3\"\5\"\u0130\n\"\3#\3#\3$\3$\3$\3$\5$\u0138",
    "\n$\3%\3%\3%\5%\u013d\n%\3%\5%\u0140\n%\3&\3&\3&\6&\u0145\n&\r&\16&",
    "\u0146\3&\3&\5&\u014b\n&\3&\3&\7&\u014f\n&\f&\16&\u0152\13&\3&\3&\5",
    "&\u0156\n&\3\'\3\'\3\'\3\'\3\'\3\'\3\'\5\'\u015f\n\'\3(\3(\3(\5(\u0164",
    "\n(\3)\5)\u0167\n)\3)\5)\u016a\n)\3)\3)\3)\5)\u016f\n)\3*\3*\3*\3+\3",
    "+\6+\u0176\n+\r+\16+\u0177\3,\3,\3,\3-\3-\3-\3-\5-\u0181\n-\3.\3.\6",
    ".\u0185\n.\r.\16.\u0186\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3\60\5\60\u0192",
    "\n\60\3\61\3\61\3\62\3\62\3\62\3\62\3\63\3\63\5\63\u019c\n\63\3\64\3",
    "\64\5\64\u01a0\n\64\3\64\2\2\65\2\4\6\b\n\f\16\20\22\24\26\30\32\34",
    "\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdf\2\n\4\2((*+\3\2AB",
    "\3\2?A\3\2\23\25\3\2\35\36\3\2\32\33\3\2-=\4\2$$>>\u01b2\2h\3\2\2\2",
    "\4w\3\2\2\2\6}\3\2\2\2\b\u0087\3\2\2\2\n\u008b\3\2\2\2\f\u0091\3\2\2",
    "\2\16\u0095\3\2\2\2\20\u009d\3\2\2\2\22\u00a2\3\2\2\2\24\u00a4\3\2\2",
    "\2\26\u00ab\3\2\2\2\30\u00b0\3\2\2\2\32\u00b6\3\2\2\2\34\u00ba\3\2\2",
    "\2\36\u00c1\3\2\2\2 \u00c4\3\2\2\2\"\u00cc\3\2\2\2$\u00e3\3\2\2\2&\u00e6",
    "\3\2\2\2(\u00fa\3\2\2\2*\u00fc\3\2\2\2,\u0101\3\2\2\2.\u0106\3\2\2\2",
    "\60\u010e\3\2\2\2\62\u0111\3\2\2\2\64\u0115\3\2\2\2\66\u0117\3\2\2\2",
    "8\u0119\3\2\2\2:\u011d\3\2\2\2<\u011f\3\2\2\2>\u0124\3\2\2\2@\u012b",
    "\3\2\2\2B\u012f\3\2\2\2D\u0131\3\2\2\2F\u0133\3\2\2\2H\u013c\3\2\2\2",
    "J\u0141\3\2\2\2L\u015e\3\2\2\2N\u0160\3\2\2\2P\u0166\3\2\2\2R\u0170",
    "\3\2\2\2T\u0175\3\2\2\2V\u0179\3\2\2\2X\u017c\3\2\2\2Z\u0184\3\2\2\2",
    "\\\u0188\3\2\2\2^\u0191\3\2\2\2`\u0193\3\2\2\2b\u0195\3\2\2\2d\u0199",
    "\3\2\2\2f\u019d\3\2\2\2hj\5\4\3\2ik\5\60\31\2ji\3\2\2\2jk\3\2\2\2km",
    "\3\2\2\2ln\5\6\4\2ml\3\2\2\2mn\3\2\2\2np\3\2\2\2oq\5\b\5\2po\3\2\2\2",
    "pq\3\2\2\2qs\3\2\2\2rt\5\f\7\2sr\3\2\2\2st\3\2\2\2tu\3\2\2\2uv\5\20",
    "\t\2v\3\3\2\2\2wx\7\3\2\2xy\7\4\2\2yz\5\62\32\2z{\7\5\2\2{|\5\64\33",
    "\2|\5\3\2\2\2}~\7\6\2\2~\u0083\5\64\33\2\177\u0080\7#\2\2\u0080\u0082",
    "\5\64\33\2\u0081\177\3\2\2\2\u0082\u0085\3\2\2\2\u0083\u0081\3\2\2\2",
    "\u0083\u0084\3\2\2\2\u0084\7\3\2\2\2\u0085\u0083\3\2\2\2\u0086\u0088",
    "\5\n\6\2\u0087\u0086\3\2\2\2\u0088\u0089\3\2\2\2\u0089\u0087\3\2\2\2",
    "\u0089\u008a\3\2\2\2\u008a\t\3\2\2\2\u008b\u008c\7\7\2\2\u008c\u008d",
    "\7?\2\2\u008d\u008e\7\"\2\2\u008e\u008f\7(\2\2\u008f\13\3\2\2\2\u0090",
    "\u0092\5\16\b\2\u0091\u0090\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0091",
    "\3\2\2\2\u0093\u0094\3\2\2\2\u0094\r\3\2\2\2\u0095\u0096\7\b\2\2\u0096",
    "\u0097\7?\2\2\u0097\u0098\7\"\2\2\u0098\u0099\t\2\2\2\u0099\17\3\2\2",
    "\2\u009a\u009c\5\22\n\2\u009b\u009a\3\2\2\2\u009c\u009f\3\2\2\2\u009d",
    "\u009b\3\2\2\2\u009d\u009e\3\2\2\2\u009e\21\3\2\2\2\u009f\u009d\3\2",
    "\2\2\u00a0\u00a3\5\24\13\2\u00a1\u00a3\5\30\r\2\u00a2\u00a0\3\2\2\2",
    "\u00a2\u00a1\3\2\2\2\u00a3\23\3\2\2\2\u00a4\u00a6\5\26\f\2\u00a5\u00a7",
    "\5\34\17\2\u00a6\u00a5\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a8\3\2\2",
    "\2\u00a8\u00a9\5 \21\2\u00a9\25\3\2\2\2\u00aa\u00ac\7\t\2\2\u00ab\u00aa",
    "\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00ae\7\n\2\2",
    "\u00ae\u00af\5\66\34\2\u00af\27\3\2\2\2\u00b0\u00b2\5\32\16\2\u00b1",
    "\u00b3\5\34\17\2\u00b2\u00b1\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b4",
    "\3\2\2\2\u00b4\u00b5\5 \21\2\u00b5\31\3\2\2\2\u00b6\u00b7\7\13\2\2\u00b7",
    "\u00b8\5\66\34\2\u00b8\33\3\2\2\2\u00b9\u00bb\5\36\20\2\u00ba\u00b9",
    "\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bc\u00bd\3\2\2\2",
    "\u00bd\35\3\2\2\2\u00be\u00c2\5*\26\2\u00bf\u00c2\5,\27\2\u00c0\u00c2",
    "\5\60\31\2\u00c1\u00be\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c1\u00c0\3\2\2",
    "\2\u00c2\37\3\2\2\2\u00c3\u00c5\5\"\22\2\u00c4\u00c3\3\2\2\2\u00c4\u00c5",
    "\3\2\2\2\u00c5\u00c9\3\2\2\2\u00c6\u00c8\5&\24\2\u00c7\u00c6\3\2\2\2",
    "\u00c8\u00cb\3\2\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca!",
    "\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cc\u00ce\7\r\2\2\u00cd\u00cf\5b\62\2",
    "\u00ce\u00cd\3\2\2\2\u00ce\u00cf\3\2\2\2\u00cf\u00d1\3\2\2\2\u00d0\u00d2",
    "\7%\2\2\u00d1\u00d0\3\2\2\2\u00d1\u00d2\3\2\2\2\u00d2\u00d3\3\2\2\2",
    "\u00d3\u00d8\5$\23\2\u00d4\u00d5\7\21\2\2\u00d5\u00d7\5$\23\2\u00d6",
    "\u00d4\3\2\2\2\u00d7\u00da\3\2\2\2\u00d8\u00d6\3\2\2\2\u00d8\u00d9\3",
    "\2\2\2\u00d9\u00dc\3\2\2\2\u00da\u00d8\3\2\2\2\u00db\u00dd\7&\2\2\u00dc",
    "\u00db\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd#\3\2\2\2\u00de\u00e4\5:\36",
    "\2\u00df\u00e4\5<\37\2\u00e0\u00e4\5`\61\2\u00e1\u00e4\5H%\2\u00e2\u00e4",
    "\5d\63\2\u00e3\u00de\3\2\2\2\u00e3\u00df\3\2\2\2\u00e3\u00e0\3\2\2\2",
    "\u00e3\u00e1\3\2\2\2\u00e3\u00e2\3\2\2\2\u00e4%\3\2\2\2\u00e5\u00e7",
    "\5b\62\2\u00e6\u00e5\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e9\3\2\2\2",
    "\u00e8\u00ea\7%\2\2\u00e9\u00e8\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\u00eb",
    "\3\2\2\2\u00eb\u00f0\5(\25\2\u00ec\u00ed\7\21\2\2\u00ed\u00ef\5(\25",
    "\2\u00ee\u00ec\3\2\2\2\u00ef\u00f2\3\2\2\2\u00f0\u00ee\3\2\2\2\u00f0",
    "\u00f1\3\2\2\2\u00f1\u00f4\3\2\2\2\u00f2\u00f0\3\2\2\2\u00f3\u00f5\7",
    "&\2\2\u00f4\u00f3\3\2\2\2\u00f4\u00f5\3\2\2\2\u00f5\'\3\2\2\2\u00f6",
    "\u00fb\5:\36\2\u00f7\u00fb\5<\37\2\u00f8\u00fb\5H%\2\u00f9\u00fb\5d",
    "\63\2\u00fa\u00f6\3\2\2\2\u00fa\u00f7\3\2\2\2\u00fa\u00f8\3\2\2\2\u00fa",
    "\u00f9\3\2\2\2\u00fb)\3\2\2\2\u00fc\u00ff\7\f\2\2\u00fd\u0100\5:\36",
    "\2\u00fe\u0100\5d\63\2\u00ff\u00fd\3\2\2\2\u00ff\u00fe\3\2\2\2\u0100",
    "+\3\2\2\2\u0101\u0104\7\16\2\2\u0102\u0105\5.\30\2\u0103\u0105\5d\63",
    "\2\u0104\u0102\3\2\2\2\u0104\u0103\3\2\2\2\u0105-\3\2\2\2\u0106\u010b",
    "\5@!\2\u0107\u0108\7#\2\2\u0108\u010a\5@!\2\u0109\u0107\3\2\2\2\u010a",
    "\u010d\3\2\2\2\u010b\u0109\3\2\2\2\u010b\u010c\3\2\2\2\u010c/\3\2\2",
    "\2\u010d\u010b\3\2\2\2\u010e\u010f\7\17\2\2\u010f\u0110\7D\2\2\u0110",
    "\61\3\2\2\2\u0111\u0112\7>\2\2\u0112\u0113\7!\2\2\u0113\u0114\7>\2\2",
    "\u0114\63\3\2\2\2\u0115\u0116\t\3\2\2\u0116\65\3\2\2\2\u0117\u0118\t",
    "\4\2\2\u0118\67\3\2\2\2\u0119\u011a\7C\2\2\u011a9\3\2\2\2\u011b\u011e",
    "\5\66\34\2\u011c\u011e\58\35\2\u011d\u011b\3\2\2\2\u011d\u011c\3\2\2",
    "\2\u011e;\3\2\2\2\u011f\u0120\7\20\2\2\u0120\u0121\7%\2\2\u0121\u0122",
    "\5:\36\2\u0122\u0123\7&\2\2\u0123=\3\2\2\2\u0124\u0126\7,\2\2\u0125",
    "\u0127\7D\2\2\u0126\u0125\3\2\2\2\u0126\u0127\3\2\2\2\u0127?\3\2\2\2",
    "\u0128\u0129\7?\2\2\u0129\u012c\5> \2\u012a\u012c\5f\64\2\u012b\u0128",
    "\3\2\2\2\u012b\u012a\3\2\2\2\u012cA\3\2\2\2\u012d\u0130\5@!\2\u012e",
    "\u0130\5> \2\u012f\u012d\3\2\2\2\u012f\u012e\3\2\2\2\u0130C\3\2\2\2",
    "\u0131\u0132\t\5\2\2\u0132E\3\2\2\2\u0133\u0137\5b\62\2\u0134\u0138",
    "\5:\36\2\u0135\u0138\5<\37\2\u0136\u0138\5d\63\2\u0137\u0134\3\2\2\2",
    "\u0137\u0135\3\2\2\2\u0137\u0136\3\2\2\2\u0138G\3\2\2\2\u0139\u013d",
    "\5:\36\2\u013a\u013d\5J&\2\u013b\u013d\5`\61\2\u013c\u0139\3\2\2\2\u013c",
    "\u013a\3\2\2\2\u013c\u013b\3\2\2\2\u013d\u013f\3\2\2\2\u013e\u0140\5",
    "L\'\2\u013f\u013e\3\2\2\2\u013f\u0140\3\2\2\2\u0140I\3\2\2\2\u0141\u0155",
    "\5:\36\2\u0142\u0143\7!\2\2\u0143\u0145\5\66\34\2\u0144\u0142\3\2\2",
    "\2\u0145\u0146\3\2\2\2\u0146\u0144\3\2\2\2\u0146\u0147\3\2\2\2\u0147",
    "\u014a\3\2\2\2\u0148\u0149\7!\2\2\u0149\u014b\5`\61\2\u014a\u0148\3",
    "\2\2\2\u014a\u014b\3\2\2\2\u014b\u0156\3\2\2\2\u014c\u014d\7!\2\2\u014d",
    "\u014f\5\66\34\2\u014e\u014c\3\2\2\2\u014f\u0152\3\2\2\2\u0150\u014e",
    "\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0153\3\2\2\2\u0152\u0150\3\2\2\2",
    "\u0153\u0154\7!\2\2\u0154\u0156\5`\61\2\u0155\u0144\3\2\2\2\u0155\u0150",
    "\3\2\2\2\u0156K\3\2\2\2\u0157\u015f\5P)\2\u0158\u015f\5R*\2\u0159\u015f",
    "\5T+\2\u015a\u015f\5V,\2\u015b\u015f\5X-\2\u015c\u015f\5Z.\2\u015d\u015f",
    "\5\\/\2\u015e\u0157\3\2\2\2\u015e\u0158\3\2\2\2\u015e\u0159\3\2\2\2",
    "\u015e\u015a\3\2\2\2\u015e\u015b\3\2\2\2\u015e\u015c\3\2\2\2\u015e\u015d",
    "\3\2\2\2\u015fM\3\2\2\2\u0160\u0163\7\22\2\2\u0161\u0164\7\67\2\2\u0162",
    "\u0164\5:\36\2\u0163\u0161\3\2\2\2\u0163\u0162\3\2\2\2\u0164O\3\2\2",
    "\2\u0165\u0167\5N(\2\u0166\u0165\3\2\2\2\u0166\u0167\3\2\2\2\u0167\u0169",
    "\3\2\2\2\u0168\u016a\5D#\2\u0169\u0168\3\2\2\2\u0169\u016a\3\2\2\2\u016a",
    "\u016b\3\2\2\2\u016b\u016c\7\27\2\2\u016c\u016e\5^\60\2\u016d\u016f",
    "\7\26\2\2\u016e\u016d\3\2\2\2\u016e\u016f\3\2\2\2\u016fQ\3\2\2\2\u0170",
    "\u0171\7\31\2\2\u0171\u0172\5B\"\2\u0172S\3\2\2\2\u0173\u0174\7\34\2",
    "\2\u0174\u0176\5B\"\2\u0175\u0173\3\2\2\2\u0176\u0177\3\2\2\2\u0177",
    "\u0175\3\2\2\2\u0177\u0178\3\2\2\2\u0178U\3\2\2\2\u0179\u017a\7\31\2",
    "\2\u017a\u017b\t\6\2\2\u017bW\3\2\2\2\u017c\u0180\t\7\2\2\u017d\u0181",
    "\5:\36\2\u017e\u0181\5<\37\2\u017f\u0181\5d\63\2\u0180\u017d\3\2\2\2",
    "\u0180\u017e\3\2\2\2\u0180\u017f\3\2\2\2\u0181Y\3\2\2\2\u0182\u0183",
    "\7\34\2\2\u0183\u0185\5F$\2\u0184\u0182\3\2\2\2\u0185\u0186\3\2\2\2",
    "\u0186\u0184\3\2\2\2\u0186\u0187\3\2\2\2\u0187[\3\2\2\2\u0188\u0189",
    "\7\22\2\2\u0189\u018a\7\30\2\2\u018a\u018b\5@!\2\u018b]\3\2\2\2\u018c",
    "\u0192\7(\2\2\u018d\u0192\7)\2\2\u018e\u0192\7*\2\2\u018f\u0192\5\66",
    "\34\2\u0190\u0192\5d\63\2\u0191\u018c\3\2\2\2\u0191\u018d\3\2\2\2\u0191",
    "\u018e\3\2\2\2\u0191\u018f\3\2\2\2\u0191\u0190\3\2\2\2\u0192_\3\2\2",
    "\2\u0193\u0194\t\b\2\2\u0194a\3\2\2\2\u0195\u0196\7>\2\2\u0196\u0197",
    "\7\'\2\2\u0197\u0198\t\t\2\2\u0198c\3\2\2\2\u0199\u019b\7\37\2\2\u019a",
    "\u019c\7D\2\2\u019b\u019a\3\2\2\2\u019b\u019c\3\2\2\2\u019ce\3\2\2\2",
    "\u019d\u019f\7 \2\2\u019e\u01a0\7D\2\2\u019f\u019e\3\2\2\2\u019f\u01a0",
    "\3\2\2\2\u01a0g\3\2\2\2\65jmps\u0083\u0089\u0093\u009d\u00a2\u00a6\u00ab",
    "\u00b2\u00bc\u00c1\u00c4\u00c9\u00ce\u00d1\u00d8\u00dc\u00e3\u00e6\u00e9",
    "\u00f0\u00f4\u00fa\u00ff\u0104\u010b\u011d\u0126\u012b\u012f\u0137\u013c",
    "\u013f\u0146\u014a\u0150\u0155\u015e\u0163\u0166\u0169\u016e\u0177\u0180",
    "\u0186\u0191\u019b\u019f"].join("");


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
                     "'.'", "'='", "','", "'*'", "'('", "')'", "'..'", 'null', 
                     'null', 'null', 'null', 'null', "'boolean'", "'integer'", 
                     "'string'", "'decimal'", "'uri'", "'base64Binary'", 
                     "'instant'", "'date'", "'dateTime'", "'time'", "'code'", 
                     "'oid'", "'id'", "'markdown'", "'unsignedInt'", "'positiveInt'", 
                     "'xhtml'", 'null', 'null', 'null', 'null', 'null', 
                     'null', 'null', 'null', "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_DATA_ELEMENT", "KW_NAMESPACE", 
                      "KW_USES", "KW_PATH", "KW_VOCABULARY", "KW_ABSTRACT", 
                      "KW_ELEMENT", "KW_ENTRY_ELEMENT", "KW_BASED_ON", "KW_VALUE", 
                      "KW_CONCEPT", "KW_DESCRIPTION", "KW_REF", "KW_OR", 
                      "KW_WITH", "KW_MUST_BE", "KW_SHOULD_BE", "KW_COULD_BE", 
                      "KW_IF_COVERED", "KW_FROM", "KW_UNITS", "KW_IS", "KW_IS_TYPE", 
                      "KW_VALUE_IS_TYPE", "KW_INCLUDES", "KW_TRUE", "KW_FALSE", 
                      "KW_TBD", "KW_TBD_CODE", "DOT", "EQUAL", "COMMA", 
                      "STAR", "OPEN_PAREN", "CLOSE_PAREN", "RANGE", "URL", 
                      "PATH_URL", "URN_OID", "URN", "CODE", "KW_BOOLEAN", 
                      "KW_INTEGER", "KW_STRING", "KW_DECIMAL", "KW_URI", 
                      "KW_BASE64_BINARY", "KW_INSTANT", "KW_DATE", "KW_DATE_TIME", 
                      "KW_TIME", "KW_CODE", "KW_OID", "KW_ID", "KW_MARKDOWN", 
                      "KW_UNSIGNED_INT", "KW_POSITIVE_INT", "KW_XHTML", 
                      "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", 
                      "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", "STRING", 
                      "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "doc", "docHeader", "usesStatement", "pathDefs", "pathDef", 
                   "vocabularyDefs", "vocabularyDef", "dataDefs", "dataDef", 
                   "elementDef", "elementHeader", "entryDef", "entryHeader", 
                   "elementProps", "elementProp", "values", "value", "valueType", 
                   "field", "fieldType", "basedOnProp", "conceptProp", "concepts", 
                   "descriptionProp", "version", "namespace", "simpleName", 
                   "fullyQualifiedName", "simpleOrFQName", "ref", "code", 
                   "fullyQualifiedCode", "codeOrFQCode", "bindingInfix", 
                   "typeConstraint", "elementWithConstraint", "elementPath", 
                   "elementConstraint", "legacyWithCode", "elementCodeVSConstraint", 
                   "elementCodeValueConstraint", "elementIncludesCodeValueConstraint", 
                   "elementBooleanConstraint", "elementTypeConstraint", 
                   "elementIncludesTypeConstraint", "elementWithUnitsConstraint", 
                   "valueset", "primitive", "count", "tbd", "tbdCode" ];

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
SHRDataElementParser.DOT = 31;
SHRDataElementParser.EQUAL = 32;
SHRDataElementParser.COMMA = 33;
SHRDataElementParser.STAR = 34;
SHRDataElementParser.OPEN_PAREN = 35;
SHRDataElementParser.CLOSE_PAREN = 36;
SHRDataElementParser.RANGE = 37;
SHRDataElementParser.URL = 38;
SHRDataElementParser.PATH_URL = 39;
SHRDataElementParser.URN_OID = 40;
SHRDataElementParser.URN = 41;
SHRDataElementParser.CODE = 42;
SHRDataElementParser.KW_BOOLEAN = 43;
SHRDataElementParser.KW_INTEGER = 44;
SHRDataElementParser.KW_STRING = 45;
SHRDataElementParser.KW_DECIMAL = 46;
SHRDataElementParser.KW_URI = 47;
SHRDataElementParser.KW_BASE64_BINARY = 48;
SHRDataElementParser.KW_INSTANT = 49;
SHRDataElementParser.KW_DATE = 50;
SHRDataElementParser.KW_DATE_TIME = 51;
SHRDataElementParser.KW_TIME = 52;
SHRDataElementParser.KW_CODE = 53;
SHRDataElementParser.KW_OID = 54;
SHRDataElementParser.KW_ID = 55;
SHRDataElementParser.KW_MARKDOWN = 56;
SHRDataElementParser.KW_UNSIGNED_INT = 57;
SHRDataElementParser.KW_POSITIVE_INT = 58;
SHRDataElementParser.KW_XHTML = 59;
SHRDataElementParser.WHOLE_NUMBER = 60;
SHRDataElementParser.ALL_CAPS = 61;
SHRDataElementParser.UPPER_WORD = 62;
SHRDataElementParser.LOWER_WORD = 63;
SHRDataElementParser.DOT_SEPARATED_LW = 64;
SHRDataElementParser.DOT_SEPARATED_UW = 65;
SHRDataElementParser.STRING = 66;
SHRDataElementParser.WS = 67;
SHRDataElementParser.NEWLINE = 68;
SHRDataElementParser.COMMENT = 69;
SHRDataElementParser.LINE_COMMENT = 70;

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
SHRDataElementParser.RULE_simpleName = 26;
SHRDataElementParser.RULE_fullyQualifiedName = 27;
SHRDataElementParser.RULE_simpleOrFQName = 28;
SHRDataElementParser.RULE_ref = 29;
SHRDataElementParser.RULE_code = 30;
SHRDataElementParser.RULE_fullyQualifiedCode = 31;
SHRDataElementParser.RULE_codeOrFQCode = 32;
SHRDataElementParser.RULE_bindingInfix = 33;
SHRDataElementParser.RULE_typeConstraint = 34;
SHRDataElementParser.RULE_elementWithConstraint = 35;
SHRDataElementParser.RULE_elementPath = 36;
SHRDataElementParser.RULE_elementConstraint = 37;
SHRDataElementParser.RULE_legacyWithCode = 38;
SHRDataElementParser.RULE_elementCodeVSConstraint = 39;
SHRDataElementParser.RULE_elementCodeValueConstraint = 40;
SHRDataElementParser.RULE_elementIncludesCodeValueConstraint = 41;
SHRDataElementParser.RULE_elementBooleanConstraint = 42;
SHRDataElementParser.RULE_elementTypeConstraint = 43;
SHRDataElementParser.RULE_elementIncludesTypeConstraint = 44;
SHRDataElementParser.RULE_elementWithUnitsConstraint = 45;
SHRDataElementParser.RULE_valueset = 46;
SHRDataElementParser.RULE_primitive = 47;
SHRDataElementParser.RULE_count = 48;
SHRDataElementParser.RULE_tbd = 49;
SHRDataElementParser.RULE_tbdCode = 50;

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
        this.state = 102;
        this.docHeader();
        this.state = 104;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_DESCRIPTION) {
            this.state = 103;
            this.descriptionProp();
        }

        this.state = 107;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_USES) {
            this.state = 106;
            this.usesStatement();
        }

        this.state = 110;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_PATH) {
            this.state = 109;
            this.pathDefs();
        }

        this.state = 113;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_VOCABULARY) {
            this.state = 112;
            this.vocabularyDefs();
        }

        this.state = 115;
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
        this.state = 117;
        this.match(SHRDataElementParser.KW_GRAMMAR);
        this.state = 118;
        this.match(SHRDataElementParser.KW_G_DATA_ELEMENT);
        this.state = 119;
        this.version();
        this.state = 120;
        this.match(SHRDataElementParser.KW_NAMESPACE);
        this.state = 121;
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
        this.state = 123;
        this.match(SHRDataElementParser.KW_USES);
        this.state = 124;
        this.namespace();
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 125;
            this.match(SHRDataElementParser.COMMA);
            this.state = 126;
            this.namespace();
            this.state = 131;
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
        this.state = 133; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 132;
            this.pathDef();
            this.state = 135; 
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
        this.state = 137;
        this.match(SHRDataElementParser.KW_PATH);
        this.state = 138;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 139;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 140;
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
        this.state = 143; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 142;
            this.vocabularyDef();
            this.state = 145; 
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
        this.state = 147;
        this.match(SHRDataElementParser.KW_VOCABULARY);
        this.state = 148;
        this.match(SHRDataElementParser.ALL_CAPS);
        this.state = 149;
        this.match(SHRDataElementParser.EQUAL);
        this.state = 150;
        _la = this._input.LA(1);
        if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (SHRDataElementParser.URL - 38)) | (1 << (SHRDataElementParser.URN_OID - 38)) | (1 << (SHRDataElementParser.URN - 38)))) !== 0))) {
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
        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_ABSTRACT) | (1 << SHRDataElementParser.KW_ELEMENT) | (1 << SHRDataElementParser.KW_ENTRY_ELEMENT))) !== 0)) {
            this.state = 152;
            this.dataDef();
            this.state = 157;
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
        this.state = 160;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_ABSTRACT:
        case SHRDataElementParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 158;
            this.elementDef();
            break;
        case SHRDataElementParser.KW_ENTRY_ELEMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
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
        this.state = 162;
        this.elementHeader();
        this.state = 164;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_BASED_ON) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 163;
            this.elementProps();
        }

        this.state = 166;
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
        this.state = 169;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_ABSTRACT) {
            this.state = 168;
            this.match(SHRDataElementParser.KW_ABSTRACT);
        }

        this.state = 171;
        this.match(SHRDataElementParser.KW_ELEMENT);
        this.state = 172;
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
        this.state = 174;
        this.entryHeader();
        this.state = 176;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_BASED_ON) | (1 << SHRDataElementParser.KW_CONCEPT) | (1 << SHRDataElementParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 175;
            this.elementProps();
        }

        this.state = 178;
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
        this.state = 180;
        this.match(SHRDataElementParser.KW_ENTRY_ELEMENT);
        this.state = 181;
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
        this.state = 184; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 183;
            this.elementProp();
            this.state = 186; 
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
        this.state = 191;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_BASED_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 188;
            this.basedOnProp();
            break;
        case SHRDataElementParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 189;
            this.conceptProp();
            break;
        case SHRDataElementParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 190;
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
        this.state = 194;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_VALUE) {
            this.state = 193;
            this.value();
        }

        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_REF || _la===SHRDataElementParser.KW_TBD || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (SHRDataElementParser.OPEN_PAREN - 35)) | (1 << (SHRDataElementParser.KW_BOOLEAN - 35)) | (1 << (SHRDataElementParser.KW_INTEGER - 35)) | (1 << (SHRDataElementParser.KW_STRING - 35)) | (1 << (SHRDataElementParser.KW_DECIMAL - 35)) | (1 << (SHRDataElementParser.KW_URI - 35)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 35)) | (1 << (SHRDataElementParser.KW_INSTANT - 35)) | (1 << (SHRDataElementParser.KW_DATE - 35)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 35)) | (1 << (SHRDataElementParser.KW_TIME - 35)) | (1 << (SHRDataElementParser.KW_CODE - 35)) | (1 << (SHRDataElementParser.KW_OID - 35)) | (1 << (SHRDataElementParser.KW_ID - 35)) | (1 << (SHRDataElementParser.KW_MARKDOWN - 35)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 35)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 35)) | (1 << (SHRDataElementParser.KW_XHTML - 35)) | (1 << (SHRDataElementParser.WHOLE_NUMBER - 35)) | (1 << (SHRDataElementParser.ALL_CAPS - 35)) | (1 << (SHRDataElementParser.UPPER_WORD - 35)) | (1 << (SHRDataElementParser.LOWER_WORD - 35)) | (1 << (SHRDataElementParser.DOT_SEPARATED_UW - 35)))) !== 0)) {
            this.state = 196;
            this.field();
            this.state = 201;
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
        this.state = 202;
        this.match(SHRDataElementParser.KW_VALUE);
        this.state = 204;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.WHOLE_NUMBER) {
            this.state = 203;
            this.count();
        }

        this.state = 207;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.OPEN_PAREN) {
            this.state = 206;
            this.match(SHRDataElementParser.OPEN_PAREN);
        }

        this.state = 209;
        this.valueType();
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_OR) {
            this.state = 210;
            this.match(SHRDataElementParser.KW_OR);
            this.state = 211;
            this.valueType();
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 218;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.CLOSE_PAREN) {
            this.state = 217;
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
        this.state = 225;
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 220;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 221;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 222;
            this.primitive();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 223;
            this.elementWithConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 224;
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
        this.state = 228;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.WHOLE_NUMBER) {
            this.state = 227;
            this.count();
        }

        this.state = 231;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.OPEN_PAREN) {
            this.state = 230;
            this.match(SHRDataElementParser.OPEN_PAREN);
        }

        this.state = 233;
        this.fieldType();
        this.state = 238;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.KW_OR) {
            this.state = 234;
            this.match(SHRDataElementParser.KW_OR);
            this.state = 235;
            this.fieldType();
            this.state = 240;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 242;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.CLOSE_PAREN) {
            this.state = 241;
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
        this.state = 248;
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 244;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 245;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 246;
            this.elementWithConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 247;
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
        this.state = 250;
        this.match(SHRDataElementParser.KW_BASED_ON);
        this.state = 253;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 251;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 252;
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
        this.state = 255;
        this.match(SHRDataElementParser.KW_CONCEPT);
        this.state = 258;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.state = 256;
            this.concepts();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 257;
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
        this.state = 260;
        this.fullyQualifiedCode();
        this.state = 265;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRDataElementParser.COMMA) {
            this.state = 261;
            this.match(SHRDataElementParser.COMMA);
            this.state = 262;
            this.fullyQualifiedCode();
            this.state = 267;
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
        this.state = 268;
        this.match(SHRDataElementParser.KW_DESCRIPTION);
        this.state = 269;
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
        this.state = 271;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 272;
        this.match(SHRDataElementParser.DOT);
        this.state = 273;
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
        this.state = 275;
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
    this.enterRule(localctx, 52, SHRDataElementParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        _la = this._input.LA(1);
        if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (SHRDataElementParser.ALL_CAPS - 61)) | (1 << (SHRDataElementParser.UPPER_WORD - 61)) | (1 << (SHRDataElementParser.LOWER_WORD - 61)))) !== 0))) {
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
    this.enterRule(localctx, 54, SHRDataElementParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
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
    this.enterRule(localctx, 56, SHRDataElementParser.RULE_simpleOrFQName);
    try {
        this.state = 283;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 281;
            this.simpleName();
            break;
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 282;
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
    this.enterRule(localctx, 58, SHRDataElementParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.match(SHRDataElementParser.KW_REF);
        this.state = 286;
        this.match(SHRDataElementParser.OPEN_PAREN);
        this.state = 287;
        this.simpleOrFQName();
        this.state = 288;
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
    this.enterRule(localctx, 60, SHRDataElementParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(SHRDataElementParser.CODE);
        this.state = 292;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 291;
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
    this.enterRule(localctx, 62, SHRDataElementParser.RULE_fullyQualifiedCode);
    try {
        this.state = 297;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 294;
            this.match(SHRDataElementParser.ALL_CAPS);
            this.state = 295;
            this.code();
            break;
        case SHRDataElementParser.KW_TBD_CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 296;
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
    this.enterRule(localctx, 64, SHRDataElementParser.RULE_codeOrFQCode);
    try {
        this.state = 301;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_TBD_CODE:
        case SHRDataElementParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 299;
            this.fullyQualifiedCode();
            break;
        case SHRDataElementParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 300;
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
    this.enterRule(localctx, 66, SHRDataElementParser.RULE_bindingInfix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
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
    this.enterRule(localctx, 68, SHRDataElementParser.RULE_typeConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.count();
        this.state = 309;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 306;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_REF:
            this.state = 307;
            this.ref();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 308;
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
    this.enterRule(localctx, 70, SHRDataElementParser.RULE_elementWithConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.state = 311;
            this.simpleOrFQName();
            break;

        case 2:
            this.state = 312;
            this.elementPath();
            break;

        case 3:
            this.state = 313;
            this.primitive();
            break;

        }
        this.state = 317;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_WITH) | (1 << SHRDataElementParser.KW_MUST_BE) | (1 << SHRDataElementParser.KW_SHOULD_BE) | (1 << SHRDataElementParser.KW_COULD_BE) | (1 << SHRDataElementParser.KW_FROM) | (1 << SHRDataElementParser.KW_IS) | (1 << SHRDataElementParser.KW_IS_TYPE) | (1 << SHRDataElementParser.KW_VALUE_IS_TYPE) | (1 << SHRDataElementParser.KW_INCLUDES))) !== 0)) {
            this.state = 316;
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
    this.enterRule(localctx, 72, SHRDataElementParser.RULE_elementPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this.simpleOrFQName();
        this.state = 339;
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        switch(la_) {
        case 1:
            this.state = 322; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 320;
            		this.match(SHRDataElementParser.DOT);
            		this.state = 321;
            		this.simpleName();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 324; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,36, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 328;
            _la = this._input.LA(1);
            if(_la===SHRDataElementParser.DOT) {
                this.state = 326;
                this.match(SHRDataElementParser.DOT);
                this.state = 327;
                this.primitive();
            }

            break;

        case 2:
            this.state = 334;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 330;
                    this.match(SHRDataElementParser.DOT);
                    this.state = 331;
                    this.simpleName(); 
                }
                this.state = 336;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
            }

            this.state = 337;
            this.match(SHRDataElementParser.DOT);
            this.state = 338;
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
    this.enterRule(localctx, 74, SHRDataElementParser.RULE_elementConstraint);
    try {
        this.state = 348;
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 341;
            this.elementCodeVSConstraint();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 342;
            this.elementCodeValueConstraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 343;
            this.elementIncludesCodeValueConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 344;
            this.elementBooleanConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 345;
            this.elementTypeConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 346;
            this.elementIncludesTypeConstraint();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 347;
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
    this.enterRule(localctx, 76, SHRDataElementParser.RULE_legacyWithCode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(SHRDataElementParser.KW_WITH);
        this.state = 353;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.KW_CODE:
            this.state = 351;
            this.match(SHRDataElementParser.KW_CODE);
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 352;
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
    this.enterRule(localctx, 78, SHRDataElementParser.RULE_elementCodeVSConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_WITH) {
            this.state = 355;
            this.legacyWithCode();
        }

        this.state = 359;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRDataElementParser.KW_MUST_BE) | (1 << SHRDataElementParser.KW_SHOULD_BE) | (1 << SHRDataElementParser.KW_COULD_BE))) !== 0)) {
            this.state = 358;
            this.bindingInfix();
        }

        this.state = 361;
        this.match(SHRDataElementParser.KW_FROM);
        this.state = 362;
        this.valueset();
        this.state = 364;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.KW_IF_COVERED) {
            this.state = 363;
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
    this.enterRule(localctx, 80, SHRDataElementParser.RULE_elementCodeValueConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        this.match(SHRDataElementParser.KW_IS);
        this.state = 367;
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
    this.enterRule(localctx, 82, SHRDataElementParser.RULE_elementIncludesCodeValueConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 369;
            this.match(SHRDataElementParser.KW_INCLUDES);
            this.state = 370;
            this.codeOrFQCode();
            this.state = 373; 
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
    this.enterRule(localctx, 84, SHRDataElementParser.RULE_elementBooleanConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 375;
        this.match(SHRDataElementParser.KW_IS);
        this.state = 376;
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
    this.enterRule(localctx, 86, SHRDataElementParser.RULE_elementTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        _la = this._input.LA(1);
        if(!(_la===SHRDataElementParser.KW_IS_TYPE || _la===SHRDataElementParser.KW_VALUE_IS_TYPE)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 382;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
        case SHRDataElementParser.DOT_SEPARATED_UW:
            this.state = 379;
            this.simpleOrFQName();
            break;
        case SHRDataElementParser.KW_REF:
            this.state = 380;
            this.ref();
            break;
        case SHRDataElementParser.KW_TBD:
            this.state = 381;
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
    this.enterRule(localctx, 88, SHRDataElementParser.RULE_elementIncludesTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 384;
            this.match(SHRDataElementParser.KW_INCLUDES);
            this.state = 385;
            this.typeConstraint();
            this.state = 388; 
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
    this.enterRule(localctx, 90, SHRDataElementParser.RULE_elementWithUnitsConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.match(SHRDataElementParser.KW_WITH);
        this.state = 391;
        this.match(SHRDataElementParser.KW_UNITS);
        this.state = 392;
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
    this.enterRule(localctx, 92, SHRDataElementParser.RULE_valueset);
    try {
        this.state = 399;
        switch(this._input.LA(1)) {
        case SHRDataElementParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 394;
            this.match(SHRDataElementParser.URL);
            break;
        case SHRDataElementParser.PATH_URL:
            this.enterOuterAlt(localctx, 2);
            this.state = 395;
            this.match(SHRDataElementParser.PATH_URL);
            break;
        case SHRDataElementParser.URN_OID:
            this.enterOuterAlt(localctx, 3);
            this.state = 396;
            this.match(SHRDataElementParser.URN_OID);
            break;
        case SHRDataElementParser.ALL_CAPS:
        case SHRDataElementParser.UPPER_WORD:
        case SHRDataElementParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 4);
            this.state = 397;
            this.simpleName();
            break;
        case SHRDataElementParser.KW_TBD:
            this.enterOuterAlt(localctx, 5);
            this.state = 398;
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
    this.enterRule(localctx, 94, SHRDataElementParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        _la = this._input.LA(1);
        if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (SHRDataElementParser.KW_BOOLEAN - 43)) | (1 << (SHRDataElementParser.KW_INTEGER - 43)) | (1 << (SHRDataElementParser.KW_STRING - 43)) | (1 << (SHRDataElementParser.KW_DECIMAL - 43)) | (1 << (SHRDataElementParser.KW_URI - 43)) | (1 << (SHRDataElementParser.KW_BASE64_BINARY - 43)) | (1 << (SHRDataElementParser.KW_INSTANT - 43)) | (1 << (SHRDataElementParser.KW_DATE - 43)) | (1 << (SHRDataElementParser.KW_DATE_TIME - 43)) | (1 << (SHRDataElementParser.KW_TIME - 43)) | (1 << (SHRDataElementParser.KW_CODE - 43)) | (1 << (SHRDataElementParser.KW_OID - 43)) | (1 << (SHRDataElementParser.KW_ID - 43)) | (1 << (SHRDataElementParser.KW_MARKDOWN - 43)) | (1 << (SHRDataElementParser.KW_UNSIGNED_INT - 43)) | (1 << (SHRDataElementParser.KW_POSITIVE_INT - 43)) | (1 << (SHRDataElementParser.KW_XHTML - 43)))) !== 0))) {
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
    this.enterRule(localctx, 96, SHRDataElementParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 403;
        this.match(SHRDataElementParser.WHOLE_NUMBER);
        this.state = 404;
        this.match(SHRDataElementParser.RANGE);
        this.state = 405;
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
    this.enterRule(localctx, 98, SHRDataElementParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 407;
        this.match(SHRDataElementParser.KW_TBD);
        this.state = 409;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 408;
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
    this.enterRule(localctx, 100, SHRDataElementParser.RULE_tbdCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 411;
        this.match(SHRDataElementParser.KW_TBD_CODE);
        this.state = 413;
        _la = this._input.LA(1);
        if(_la===SHRDataElementParser.STRING) {
            this.state = 412;
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
