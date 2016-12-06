// Generated from SHRParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRParserListener = require('./SHRParserListener').SHRParserListener;
var SHRParserVisitor = require('./SHRParserVisitor').SHRParserVisitor;

var grammarFileName = "SHRParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3?\u01d5\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t",
    "8\49\t9\4:\t:\4;\t;\3\2\3\2\5\2y\n\2\3\3\3\3\5\3}\n\3\3\3\5\3\u0080",
    "\n\3\3\3\5\3\u0083\n\3\3\3\3\3\3\4\3\4\3\4\3\5\3\5\3\5\3\5\7\5\u008e",
    "\n\5\f\5\16\5\u0091\13\5\3\6\3\6\7\6\u0095\n\6\f\6\16\6\u0098\13\6\3",
    "\6\5\6\u009b\n\6\3\6\6\6\u009e\n\6\r\6\16\6\u009f\5\6\u00a2\n\6\3\7",
    "\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\6\t\u00ad\n\t\r\t\16\t\u00ae\3\n\3",
    "\n\3\n\3\n\3\n\3\13\7\13\u00b7\n\13\f\13\16\13\u00ba\13\13\3\f\3\f\5",
    "\f\u00be\n\f\3\r\3\r\5\r\u00c2\n\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17",
    "\5\17\u00cb\n\17\3\17\3\17\3\20\3\20\3\20\3\21\6\21\u00d3\n\21\r\21",
    "\16\21\u00d4\3\22\3\22\3\22\5\22\u00da\n\22\3\23\3\23\7\23\u00de\n\23",
    "\f\23\16\23\u00e1\13\23\3\23\5\23\u00e4\n\23\3\23\6\23\u00e7\n\23\r",
    "\23\16\23\u00e8\5\23\u00eb\n\23\3\24\3\24\3\24\5\24\u00f0\n\24\3\25",
    "\3\25\3\25\7\25\u00f5\n\25\f\25\16\25\u00f8\13\25\3\25\3\25\3\25\3\25",
    "\7\25\u00fe\n\25\f\25\16\25\u0101\13\25\3\25\3\25\5\25\u0105\n\25\3",
    "\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\7\26\u010f\n\26\f\26\16\26\u0112",
    "\13\26\3\26\3\26\5\26\u0116\n\26\3\27\3\27\3\27\3\27\3\27\3\27\5\27",
    "\u011e\n\27\3\30\3\30\3\30\7\30\u0123\n\30\f\30\16\30\u0126\13\30\3",
    "\31\3\31\3\31\3\31\3\31\3\31\7\31\u012e\n\31\f\31\16\31\u0131\13\31",
    "\3\31\3\31\5\31\u0135\n\31\3\32\3\32\3\32\5\32\u013a\n\32\3\33\3\33",
    "\3\33\3\34\3\34\3\34\5\34\u0142\n\34\3\35\3\35\3\35\7\35\u0147\n\35",
    "\f\35\16\35\u014a\13\35\3\36\3\36\3\36\3\37\3\37\5\37\u0151\n\37\3\37",
    "\5\37\u0154\n\37\3\37\5\37\u0157\n\37\3\37\3\37\3 \3 \3 \3!\7!\u015f",
    "\n!\f!\16!\u0162\13!\3\"\3\"\5\"\u0166\n\"\3\"\5\"\u0169\n\"\3#\3#\3",
    "#\3#\5#\u016f\n#\3$\6$\u0172\n$\r$\16$\u0173\3%\3%\3%\3%\5%\u017a\n",
    "%\3&\3&\5&\u017e\n&\3\'\3\'\3\'\3\'\7\'\u0184\n\'\f\'\16\'\u0187\13",
    "\'\3(\3(\3(\3)\6)\u018d\n)\r)\16)\u018e\3*\3*\5*\u0193\n*\3+\3+\3,\3",
    ",\3-\3-\3.\3.\5.\u019d\n.\3/\3/\3/\3/\3/\3\60\3\60\5\60\u01a6\n\60\3",
    "\61\3\61\3\61\3\62\3\62\3\62\3\63\3\63\3\63\7\63\u01b1\n\63\f\63\16",
    "\63\u01b4\13\63\3\63\3\63\3\64\3\64\3\64\5\64\u01bb\n\64\3\65\3\65\3",
    "\65\3\66\3\66\3\66\3\67\3\67\3\67\38\38\38\39\39\39\39\59\u01cd\n9\3",
    ":\3:\3;\3;\3;\3;\3;\2\2<\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$",
    "&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprt\2\b\4\2\61\61\63\63",
    "\3\289\3\2\66\67\3\2\'(\3\2\27&\4\2--\65\65\u01d9\2x\3\2\2\2\4z\3\2",
    "\2\2\6\u0086\3\2\2\2\b\u0089\3\2\2\2\n\u00a1\3\2\2\2\f\u00a3\3\2\2\2",
    "\16\u00a6\3\2\2\2\20\u00ac\3\2\2\2\22\u00b0\3\2\2\2\24\u00b8\3\2\2\2",
    "\26\u00bd\3\2\2\2\30\u00bf\3\2\2\2\32\u00c5\3\2\2\2\34\u00c8\3\2\2\2",
    "\36\u00ce\3\2\2\2 \u00d2\3\2\2\2\"\u00d9\3\2\2\2$\u00ea\3\2\2\2&\u00ec",
    "\3\2\2\2(\u0104\3\2\2\2*\u0115\3\2\2\2,\u011d\3\2\2\2.\u011f\3\2\2\2",
    "\60\u0127\3\2\2\2\62\u0139\3\2\2\2\64\u013b\3\2\2\2\66\u013e\3\2\2\2",
    "8\u0143\3\2\2\2:\u014b\3\2\2\2<\u014e\3\2\2\2>\u015a\3\2\2\2@\u0160",
    "\3\2\2\2B\u0163\3\2\2\2D\u016a\3\2\2\2F\u0171\3\2\2\2H\u0179\3\2\2\2",
    "J\u017b\3\2\2\2L\u017f\3\2\2\2N\u0188\3\2\2\2P\u018c\3\2\2\2R\u0192",
    "\3\2\2\2T\u0194\3\2\2\2V\u0196\3\2\2\2X\u0198\3\2\2\2Z\u019c\3\2\2\2",
    "\\\u019e\3\2\2\2^\u01a3\3\2\2\2`\u01a7\3\2\2\2b\u01aa\3\2\2\2d\u01ad",
    "\3\2\2\2f\u01ba\3\2\2\2h\u01bc\3\2\2\2j\u01bf\3\2\2\2l\u01c2\3\2\2\2",
    "n\u01c5\3\2\2\2p\u01cc\3\2\2\2r\u01ce\3\2\2\2t\u01d0\3\2\2\2vy\5\4\3",
    "\2wy\5<\37\2xv\3\2\2\2xw\3\2\2\2y\3\3\2\2\2z|\5\6\4\2{}\5\b\5\2|{\3",
    "\2\2\2|}\3\2\2\2}\177\3\2\2\2~\u0080\5\n\6\2\177~\3\2\2\2\177\u0080",
    "\3\2\2\2\u0080\u0082\3\2\2\2\u0081\u0083\5\20\t\2\u0082\u0081\3\2\2",
    "\2\u0082\u0083\3\2\2\2\u0083\u0084\3\2\2\2\u0084\u0085\5\24\13\2\u0085",
    "\5\3\2\2\2\u0086\u0087\7\3\2\2\u0087\u0088\5T+\2\u0088\7\3\2\2\2\u0089",
    "\u008a\7\4\2\2\u008a\u008f\5T+\2\u008b\u008c\7,\2\2\u008c\u008e\5T+",
    "\2\u008d\u008b\3\2\2\2\u008e\u0091\3\2\2\2\u008f\u008d\3\2\2\2\u008f",
    "\u0090\3\2\2\2\u0090\t\3\2\2\2\u0091\u008f\3\2\2\2\u0092\u0096\5\f\7",
    "\2\u0093\u0095\5\16\b\2\u0094\u0093\3\2\2\2\u0095\u0098\3\2\2\2\u0096",
    "\u0094\3\2\2\2\u0096\u0097\3\2\2\2\u0097\u00a2\3\2\2\2\u0098\u0096\3",
    "\2\2\2\u0099\u009b\5\f\7\2\u009a\u0099\3\2\2\2\u009a\u009b\3\2\2\2\u009b",
    "\u009d\3\2\2\2\u009c\u009e\5\16\b\2\u009d\u009c\3\2\2\2\u009e\u009f",
    "\3\2\2\2\u009f\u009d\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00a2\3\2\2\2",
    "\u00a1\u0092\3\2\2\2\u00a1\u009a\3\2\2\2\u00a2\13\3\2\2\2\u00a3\u00a4",
    "\7\5\2\2\u00a4\u00a5\7\61\2\2\u00a5\r\3\2\2\2\u00a6\u00a7\7\5\2\2\u00a7",
    "\u00a8\7\66\2\2\u00a8\u00a9\7+\2\2\u00a9\u00aa\7\61\2\2\u00aa\17\3\2",
    "\2\2\u00ab\u00ad\5\22\n\2\u00ac\u00ab\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae",
    "\u00ac\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\21\3\2\2\2\u00b0\u00b1\7\6",
    "\2\2\u00b1\u00b2\7\66\2\2\u00b2\u00b3\7+\2\2\u00b3\u00b4\t\2\2\2\u00b4",
    "\23\3\2\2\2\u00b5\u00b7\5\26\f\2\u00b6\u00b5\3\2\2\2\u00b7\u00ba\3\2",
    "\2\2\u00b8\u00b6\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\25\3\2\2\2\u00ba",
    "\u00b8\3\2\2\2\u00bb\u00be\5\30\r\2\u00bc\u00be\5\34\17\2\u00bd\u00bb",
    "\3\2\2\2\u00bd\u00bc\3\2\2\2\u00be\27\3\2\2\2\u00bf\u00c1\5\32\16\2",
    "\u00c0\u00c2\5 \21\2\u00c1\u00c0\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c3",
    "\3\2\2\2\u00c3\u00c4\5$\23\2\u00c4\31\3\2\2\2\u00c5\u00c6\7\7\2\2\u00c6",
    "\u00c7\5V,\2\u00c7\33\3\2\2\2\u00c8\u00ca\5\36\20\2\u00c9\u00cb\5 \21",
    "\2\u00ca\u00c9\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc",
    "\u00cd\5$\23\2\u00cd\35\3\2\2\2\u00ce\u00cf\7\b\2\2\u00cf\u00d0\5V,",
    "\2\u00d0\37\3\2\2\2\u00d1\u00d3\5\"\22\2\u00d2\u00d1\3\2\2\2\u00d3\u00d4",
    "\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d4\u00d5\3\2\2\2\u00d5!\3\2\2\2\u00d6",
    "\u00da\5\64\33\2\u00d7\u00da\5\66\34\2\u00d8\u00da\5:\36\2\u00d9\u00d6",
    "\3\2\2\2\u00d9\u00d7\3\2\2\2\u00d9\u00d8\3\2\2\2\u00da#\3\2\2\2\u00db",
    "\u00df\5&\24\2\u00dc\u00de\5.\30\2\u00dd\u00dc\3\2\2\2\u00de\u00e1\3",
    "\2\2\2\u00df\u00dd\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\u00eb\3\2\2\2\u00e1",
    "\u00df\3\2\2\2\u00e2\u00e4\5&\24\2\u00e3\u00e2\3\2\2\2\u00e3\u00e4\3",
    "\2\2\2\u00e4\u00e6\3\2\2\2\u00e5\u00e7\5.\30\2\u00e6\u00e5\3\2\2\2\u00e7",
    "\u00e8\3\2\2\2\u00e8\u00e6\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\u00eb\3",
    "\2\2\2\u00ea\u00db\3\2\2\2\u00ea\u00e3\3\2\2\2\u00eb%\3\2\2\2\u00ec",
    "\u00ef\7\n\2\2\u00ed\u00f0\5(\25\2\u00ee\u00f0\5*\26\2\u00ef\u00ed\3",
    "\2\2\2\u00ef\u00ee\3\2\2\2\u00f0\'\3\2\2\2\u00f1\u00f6\5,\27\2\u00f2",
    "\u00f3\7\23\2\2\u00f3\u00f5\5,\27\2\u00f4\u00f2\3\2\2\2\u00f5\u00f8",
    "\3\2\2\2\u00f6\u00f4\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7\u0105\3\2\2\2",
    "\u00f8\u00f6\3\2\2\2\u00f9\u00fa\7.\2\2\u00fa\u00ff\5,\27\2\u00fb\u00fc",
    "\7\23\2\2\u00fc\u00fe\5,\27\2\u00fd\u00fb\3\2\2\2\u00fe\u0101\3\2\2",
    "\2\u00ff\u00fd\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\u0102\3\2\2\2\u0101",
    "\u00ff\3\2\2\2\u0102\u0103\7/\2\2\u0103\u0105\3\2\2\2\u0104\u00f1\3",
    "\2\2\2\u0104\u00f9\3\2\2\2\u0105)\3\2\2\2\u0106\u0107\5t;\2\u0107\u0108",
    "\5,\27\2\u0108\u0116\3\2\2\2\u0109\u010a\5t;\2\u010a\u010b\7.\2\2\u010b",
    "\u0110\5,\27\2\u010c\u010d\7\23\2\2\u010d\u010f\5,\27\2\u010e\u010c",
    "\3\2\2\2\u010f\u0112\3\2\2\2\u0110\u010e\3\2\2\2\u0110\u0111\3\2\2\2",
    "\u0111\u0113\3\2\2\2\u0112\u0110\3\2\2\2\u0113\u0114\7/\2\2\u0114\u0116",
    "\3\2\2\2\u0115\u0106\3\2\2\2\u0115\u0109\3\2\2\2\u0116+\3\2\2\2\u0117",
    "\u011e\5Z.\2\u0118\u011e\5\\/\2\u0119\u011e\5r:\2\u011a\u011e\5b\62",
    "\2\u011b\u011e\5n8\2\u011c\u011e\7\26\2\2\u011d\u0117\3\2\2\2\u011d",
    "\u0118\3\2\2\2\u011d\u0119\3\2\2\2\u011d\u011a\3\2\2\2\u011d\u011b\3",
    "\2\2\2\u011d\u011c\3\2\2\2\u011e-\3\2\2\2\u011f\u0124\5\60\31\2\u0120",
    "\u0121\7\23\2\2\u0121\u0123\5\60\31\2\u0122\u0120\3\2\2\2\u0123\u0126",
    "\3\2\2\2\u0124\u0122\3\2\2\2\u0124\u0125\3\2\2\2\u0125/\3\2\2\2\u0126",
    "\u0124\3\2\2\2\u0127\u0134\5t;\2\u0128\u0135\5\62\32\2\u0129\u012a\7",
    ".\2\2\u012a\u012f\5\62\32\2\u012b\u012c\7\23\2\2\u012c\u012e\5\62\32",
    "\2\u012d\u012b\3\2\2\2\u012e\u0131\3\2\2\2\u012f\u012d\3\2\2\2\u012f",
    "\u0130\3\2\2\2\u0130\u0132\3\2\2\2\u0131\u012f\3\2\2\2\u0132\u0133\7",
    "/\2\2\u0133\u0135\3\2\2\2\u0134\u0128\3\2\2\2\u0134\u0129\3\2\2\2\u0135",
    "\61\3\2\2\2\u0136\u013a\5Z.\2\u0137\u013a\5\\/\2\u0138\u013a\5d\63\2",
    "\u0139\u0136\3\2\2\2\u0139\u0137\3\2\2\2\u0139\u0138\3\2\2\2\u013a\63",
    "\3\2\2\2\u013b\u013c\7\t\2\2\u013c\u013d\5Z.\2\u013d\65\3\2\2\2\u013e",
    "\u0141\7\20\2\2\u013f\u0142\7\26\2\2\u0140\u0142\58\35\2\u0141\u013f",
    "\3\2\2\2\u0141\u0140\3\2\2\2\u0142\67\3\2\2\2\u0143\u0148\5`\61\2\u0144",
    "\u0145\7,\2\2\u0145\u0147\5`\61\2\u0146\u0144\3\2\2\2\u0147\u014a\3",
    "\2\2\2\u0148\u0146\3\2\2\2\u0148\u0149\3\2\2\2\u01499\3\2\2\2\u014a",
    "\u0148\3\2\2\2\u014b\u014c\7\21\2\2\u014c\u014d\7;\2\2\u014d;\3\2\2",
    "\2\u014e\u0150\5> \2\u014f\u0151\5\b\5\2\u0150\u014f\3\2\2\2\u0150\u0151",
    "\3\2\2\2\u0151\u0153\3\2\2\2\u0152\u0154\5\n\6\2\u0153\u0152\3\2\2\2",
    "\u0153\u0154\3\2\2\2\u0154\u0156\3\2\2\2\u0155\u0157\5\20\t\2\u0156",
    "\u0155\3\2\2\2\u0156\u0157\3\2\2\2\u0157\u0158\3\2\2\2\u0158\u0159\5",
    "@!\2\u0159=\3\2\2\2\u015a\u015b\7\13\2\2\u015b\u015c\5T+\2\u015c?\3",
    "\2\2\2\u015d\u015f\5B\"\2\u015e\u015d\3\2\2\2\u015f\u0162\3\2\2\2\u0160",
    "\u015e\3\2\2\2\u0160\u0161\3\2\2\2\u0161A\3\2\2\2\u0162\u0160\3\2\2",
    "\2\u0163\u0165\5D#\2\u0164\u0166\5P)\2\u0165\u0164\3\2\2\2\u0165\u0166",
    "\3\2\2\2\u0166\u0168\3\2\2\2\u0167\u0169\5F$\2\u0168\u0167\3\2\2\2\u0168",
    "\u0169\3\2\2\2\u0169C\3\2\2\2\u016a\u016e\7\f\2\2\u016b\u016f\7\61\2",
    "\2\u016c\u016f\7\63\2\2\u016d\u016f\5V,\2\u016e\u016b\3\2\2\2\u016e",
    "\u016c\3\2\2\2\u016e\u016d\3\2\2\2\u016fE\3\2\2\2\u0170\u0172\5H%\2",
    "\u0171\u0170\3\2\2\2\u0172\u0173\3\2\2\2\u0173\u0171\3\2\2\2\u0173\u0174",
    "\3\2\2\2\u0174G\3\2\2\2\u0175\u017a\5`\61\2\u0176\u017a\5J&\2\u0177",
    "\u017a\5L\'\2\u0178\u017a\5N(\2\u0179\u0175\3\2\2\2\u0179\u0176\3\2",
    "\2\2\u0179\u0177\3\2\2\2\u0179\u0178\3\2\2\2\u017aI\3\2\2\2\u017b\u017d",
    "\7\64\2\2\u017c\u017e\7;\2\2\u017d\u017c\3\2\2\2\u017d\u017e\3\2\2\2",
    "\u017eK\3\2\2\2\u017f\u0180\7\16\2\2\u0180\u0185\5`\61\2\u0181\u0182",
    "\7\17\2\2\u0182\u0184\5`\61\2\u0183\u0181\3\2\2\2\u0184\u0187\3\2\2",
    "\2\u0185\u0183\3\2\2\2\u0185\u0186\3\2\2\2\u0186M\3\2\2\2\u0187\u0185",
    "\3\2\2\2\u0188\u0189\7\r\2\2\u0189\u018a\5`\61\2\u018aO\3\2\2\2\u018b",
    "\u018d\5R*\2\u018c\u018b\3\2\2\2\u018d\u018e\3\2\2\2\u018e\u018c\3\2",
    "\2\2\u018e\u018f\3\2\2\2\u018fQ\3\2\2\2\u0190\u0193\5\66\34\2\u0191",
    "\u0193\5:\36\2\u0192\u0190\3\2\2\2\u0192\u0191\3\2\2\2\u0193S\3\2\2",
    "\2\u0194\u0195\t\3\2\2\u0195U\3\2\2\2\u0196\u0197\t\4\2\2\u0197W\3\2",
    "\2\2\u0198\u0199\7:\2\2\u0199Y\3\2\2\2\u019a\u019d\5V,\2\u019b\u019d",
    "\5X-\2\u019c\u019a\3\2\2\2\u019c\u019b\3\2\2\2\u019d[\3\2\2\2\u019e",
    "\u019f\7\22\2\2\u019f\u01a0\7.\2\2\u01a0\u01a1\5Z.\2\u01a1\u01a2\7/",
    "\2\2\u01a2]\3\2\2\2\u01a3\u01a5\7\64\2\2\u01a4\u01a6\7;\2\2\u01a5\u01a4",
    "\3\2\2\2\u01a5\u01a6\3\2\2\2\u01a6_\3\2\2\2\u01a7\u01a8\7\66\2\2\u01a8",
    "\u01a9\5^\60\2\u01a9a\3\2\2\2\u01aa\u01ab\t\5\2\2\u01ab\u01ac\5p9\2",
    "\u01acc\3\2\2\2\u01ad\u01b2\5Z.\2\u01ae\u01af\7*\2\2\u01af\u01b1\5V",
    ",\2\u01b0\u01ae\3\2\2\2\u01b1\u01b4\3\2\2\2\u01b2\u01b0\3\2\2\2\u01b2",
    "\u01b3\3\2\2\2\u01b3\u01b5\3\2\2\2\u01b4\u01b2\3\2\2\2\u01b5\u01b6\5",
    "f\64\2\u01b6e\3\2\2\2\u01b7\u01bb\5h\65\2\u01b8\u01bb\5j\66\2\u01b9",
    "\u01bb\5l\67\2\u01ba\u01b7\3\2\2\2\u01ba\u01b8\3\2\2\2\u01ba\u01b9\3",
    "\2\2\2\u01bbg\3\2\2\2\u01bc\u01bd\7\24\2\2\u01bd\u01be\5b\62\2\u01be",
    "i\3\2\2\2\u01bf\u01c0\7\25\2\2\u01c0\u01c1\5`\61\2\u01c1k\3\2\2\2\u01c2",
    "\u01c3\7\25\2\2\u01c3\u01c4\5Z.\2\u01c4m\3\2\2\2\u01c5\u01c6\7)\2\2",
    "\u01c6\u01c7\5`\61\2\u01c7o\3\2\2\2\u01c8\u01cd\7\61\2\2\u01c9\u01cd",
    "\7\62\2\2\u01ca\u01cd\7\63\2\2\u01cb\u01cd\5V,\2\u01cc\u01c8\3\2\2\2",
    "\u01cc\u01c9\3\2\2\2\u01cc\u01ca\3\2\2\2\u01cc\u01cb\3\2\2\2\u01cdq",
    "\3\2\2\2\u01ce\u01cf\t\6\2\2\u01cfs\3\2\2\2\u01d0\u01d1\7\65\2\2\u01d1",
    "\u01d2\7\60\2\2\u01d2\u01d3\t\7\2\2\u01d3u\3\2\2\2\65x|\177\u0082\u008f",
    "\u0096\u009a\u009f\u00a1\u00ae\u00b8\u00bd\u00c1\u00ca\u00d4\u00d9\u00df",
    "\u00e3\u00e8\u00ea\u00ef\u00f6\u00ff\u0104\u0110\u0115\u011d\u0124\u012f",
    "\u0134\u0139\u0141\u0148\u0150\u0153\u0156\u0160\u0165\u0168\u016e\u0173",
    "\u0179\u017d\u0185\u018e\u0192\u019c\u01a5\u01b2\u01ba\u01cc"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'DataDefinitions:'", "'Uses:'", "'Path:'", 
                     "'Vocabulary:'", "'Element:'", "'EntryElement:'", "'BasedOn:'", 
                     "'Value:'", "'ValueSetDefinitions:'", "'ValueSet:'", 
                     "'Includes codes from'", "'Includes codes descending from'", 
                     "'and not descending from'", "'Concept:'", "'Description:'", 
                     "'ref'", "'or'", "'with'", "'is'", "'TBD'", "'boolean'", 
                     "'integer'", "'string'", "'decimal'", "'uri'", "'base64Binary'", 
                     "'instant'", "'date'", "'dateTime'", "'time'", "'code'", 
                     "'oid'", "'id'", "'markdown'", "'unsignedInt'", "'positiveInt'", 
                     "'code from'", "'Coding from'", "'Quantity with units'", 
                     "'.'", "'='", "','", "'*'", "'('", "')'", "'..'" ];

var symbolicNames = [ 'null', "KW_DATA_DEFINITIONS", "KW_USES", "KW_PATH", 
                      "KW_VOCABULARY", "KW_ELEMENT", "KW_ENTRY_ELEMENT", 
                      "KW_BASED_ON", "KW_VALUE", "KW_VALUESET_DEFINITIONS", 
                      "KW_VALUESET", "KW_INCLUDES_CODES_FROM", "KW_INCLUDES_CODES_DESCENDING_FROM", 
                      "KW_AND_NOT_DESCENDING_FROM", "KW_CONCEPT", "KW_DESCRIPTION", 
                      "KW_REF", "KW_OR", "KW_WITH", "KW_IS", "KW_TBD", "KW_BOOLEAN", 
                      "KW_INTEGER", "KW_STRING", "KW_DECIMAL", "KW_URI", 
                      "KW_BASE64_BINARY", "KW_INSTANT", "KW_DATE", "KW_DATE_TIME", 
                      "KW_TIME", "KW_CODE", "KW_OID", "KW_ID", "KW_MARKDOWN", 
                      "KW_UNSIGNED_INT", "KW_POSITIVE_INT", "KW_CODE_FROM", 
                      "KW_CODING_FROM", "KW_QUANTITY_WITH_UNITS", "DOT", 
                      "EQUAL", "COMMA", "STAR", "OPEN_PAREN", "CLOSE_PAREN", 
                      "RANGE", "URL", "PATH_URL", "URN_OID", "CODE", "WHOLE_NUMBER", 
                      "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", "DOT_SEPARATED_LW", 
                      "DOT_SEPARATED_UW", "STRING", "WS", "NEWLINE", "COMMENT", 
                      "LINE_COMMENT" ];

var ruleNames =  [ "shr", "dataDefsDoc", "dataDefsHeader", "usesStatement", 
                   "pathDefs", "defaultPathDef", "pathDef", "vocabularyDefs", 
                   "vocabularyDef", "dataDefs", "dataDef", "elementDef", 
                   "elementHeader", "entryDef", "entryHeader", "elementProps", 
                   "elementProp", "values", "value", "uncountedValue", "countedValue", 
                   "valueType", "supportingValue", "countedSupportingValue", 
                   "supportingValueType", "basedOnProp", "conceptProp", 
                   "concepts", "descriptionProp", "valuesetDefsDoc", "valuesetDefsHeader", 
                   "valuesetDefs", "valuesetDef", "valuesetHeader", "valuesetValues", 
                   "valuesetValue", "valuesetInlineValue", "valuesetDescendingFrom", 
                   "valuesetFrom", "valuesetProps", "valuesetProp", "namespace", 
                   "simpleName", "fullyQualifiedName", "simpleOrFQName", 
                   "ref", "code", "fullyQualifiedCode", "codeFromVS", "elementWithConstraint", 
                   "elementConstraint", "elementCodeVSConstraint", "elementCodeValueConstraint", 
                   "elementTypeConstraint", "quantityWithUnits", "valueset", 
                   "primitive", "count" ];

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
SHRParser.KW_DATA_DEFINITIONS = 1;
SHRParser.KW_USES = 2;
SHRParser.KW_PATH = 3;
SHRParser.KW_VOCABULARY = 4;
SHRParser.KW_ELEMENT = 5;
SHRParser.KW_ENTRY_ELEMENT = 6;
SHRParser.KW_BASED_ON = 7;
SHRParser.KW_VALUE = 8;
SHRParser.KW_VALUESET_DEFINITIONS = 9;
SHRParser.KW_VALUESET = 10;
SHRParser.KW_INCLUDES_CODES_FROM = 11;
SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM = 12;
SHRParser.KW_AND_NOT_DESCENDING_FROM = 13;
SHRParser.KW_CONCEPT = 14;
SHRParser.KW_DESCRIPTION = 15;
SHRParser.KW_REF = 16;
SHRParser.KW_OR = 17;
SHRParser.KW_WITH = 18;
SHRParser.KW_IS = 19;
SHRParser.KW_TBD = 20;
SHRParser.KW_BOOLEAN = 21;
SHRParser.KW_INTEGER = 22;
SHRParser.KW_STRING = 23;
SHRParser.KW_DECIMAL = 24;
SHRParser.KW_URI = 25;
SHRParser.KW_BASE64_BINARY = 26;
SHRParser.KW_INSTANT = 27;
SHRParser.KW_DATE = 28;
SHRParser.KW_DATE_TIME = 29;
SHRParser.KW_TIME = 30;
SHRParser.KW_CODE = 31;
SHRParser.KW_OID = 32;
SHRParser.KW_ID = 33;
SHRParser.KW_MARKDOWN = 34;
SHRParser.KW_UNSIGNED_INT = 35;
SHRParser.KW_POSITIVE_INT = 36;
SHRParser.KW_CODE_FROM = 37;
SHRParser.KW_CODING_FROM = 38;
SHRParser.KW_QUANTITY_WITH_UNITS = 39;
SHRParser.DOT = 40;
SHRParser.EQUAL = 41;
SHRParser.COMMA = 42;
SHRParser.STAR = 43;
SHRParser.OPEN_PAREN = 44;
SHRParser.CLOSE_PAREN = 45;
SHRParser.RANGE = 46;
SHRParser.URL = 47;
SHRParser.PATH_URL = 48;
SHRParser.URN_OID = 49;
SHRParser.CODE = 50;
SHRParser.WHOLE_NUMBER = 51;
SHRParser.ALL_CAPS = 52;
SHRParser.UPPER_WORD = 53;
SHRParser.LOWER_WORD = 54;
SHRParser.DOT_SEPARATED_LW = 55;
SHRParser.DOT_SEPARATED_UW = 56;
SHRParser.STRING = 57;
SHRParser.WS = 58;
SHRParser.NEWLINE = 59;
SHRParser.COMMENT = 60;
SHRParser.LINE_COMMENT = 61;

SHRParser.RULE_shr = 0;
SHRParser.RULE_dataDefsDoc = 1;
SHRParser.RULE_dataDefsHeader = 2;
SHRParser.RULE_usesStatement = 3;
SHRParser.RULE_pathDefs = 4;
SHRParser.RULE_defaultPathDef = 5;
SHRParser.RULE_pathDef = 6;
SHRParser.RULE_vocabularyDefs = 7;
SHRParser.RULE_vocabularyDef = 8;
SHRParser.RULE_dataDefs = 9;
SHRParser.RULE_dataDef = 10;
SHRParser.RULE_elementDef = 11;
SHRParser.RULE_elementHeader = 12;
SHRParser.RULE_entryDef = 13;
SHRParser.RULE_entryHeader = 14;
SHRParser.RULE_elementProps = 15;
SHRParser.RULE_elementProp = 16;
SHRParser.RULE_values = 17;
SHRParser.RULE_value = 18;
SHRParser.RULE_uncountedValue = 19;
SHRParser.RULE_countedValue = 20;
SHRParser.RULE_valueType = 21;
SHRParser.RULE_supportingValue = 22;
SHRParser.RULE_countedSupportingValue = 23;
SHRParser.RULE_supportingValueType = 24;
SHRParser.RULE_basedOnProp = 25;
SHRParser.RULE_conceptProp = 26;
SHRParser.RULE_concepts = 27;
SHRParser.RULE_descriptionProp = 28;
SHRParser.RULE_valuesetDefsDoc = 29;
SHRParser.RULE_valuesetDefsHeader = 30;
SHRParser.RULE_valuesetDefs = 31;
SHRParser.RULE_valuesetDef = 32;
SHRParser.RULE_valuesetHeader = 33;
SHRParser.RULE_valuesetValues = 34;
SHRParser.RULE_valuesetValue = 35;
SHRParser.RULE_valuesetInlineValue = 36;
SHRParser.RULE_valuesetDescendingFrom = 37;
SHRParser.RULE_valuesetFrom = 38;
SHRParser.RULE_valuesetProps = 39;
SHRParser.RULE_valuesetProp = 40;
SHRParser.RULE_namespace = 41;
SHRParser.RULE_simpleName = 42;
SHRParser.RULE_fullyQualifiedName = 43;
SHRParser.RULE_simpleOrFQName = 44;
SHRParser.RULE_ref = 45;
SHRParser.RULE_code = 46;
SHRParser.RULE_fullyQualifiedCode = 47;
SHRParser.RULE_codeFromVS = 48;
SHRParser.RULE_elementWithConstraint = 49;
SHRParser.RULE_elementConstraint = 50;
SHRParser.RULE_elementCodeVSConstraint = 51;
SHRParser.RULE_elementCodeValueConstraint = 52;
SHRParser.RULE_elementTypeConstraint = 53;
SHRParser.RULE_quantityWithUnits = 54;
SHRParser.RULE_valueset = 55;
SHRParser.RULE_primitive = 56;
SHRParser.RULE_count = 57;

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

ShrContext.prototype.dataDefsDoc = function() {
    return this.getTypedRuleContext(DataDefsDocContext,0);
};

ShrContext.prototype.valuesetDefsDoc = function() {
    return this.getTypedRuleContext(ValuesetDefsDocContext,0);
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
        this.state = 118;
        switch(this._input.LA(1)) {
        case SHRParser.KW_DATA_DEFINITIONS:
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.dataDefsDoc();
            break;
        case SHRParser.KW_VALUESET_DEFINITIONS:
            this.enterOuterAlt(localctx, 2);
            this.state = 117;
            this.valuesetDefsDoc();
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

function DataDefsDocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataDefsDoc;
    return this;
}

DataDefsDocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefsDocContext.prototype.constructor = DataDefsDocContext;

DataDefsDocContext.prototype.dataDefsHeader = function() {
    return this.getTypedRuleContext(DataDefsHeaderContext,0);
};

DataDefsDocContext.prototype.dataDefs = function() {
    return this.getTypedRuleContext(DataDefsContext,0);
};

DataDefsDocContext.prototype.usesStatement = function() {
    return this.getTypedRuleContext(UsesStatementContext,0);
};

DataDefsDocContext.prototype.pathDefs = function() {
    return this.getTypedRuleContext(PathDefsContext,0);
};

DataDefsDocContext.prototype.vocabularyDefs = function() {
    return this.getTypedRuleContext(VocabularyDefsContext,0);
};

DataDefsDocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataDefsDoc(this);
	}
};

DataDefsDocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataDefsDoc(this);
	}
};

DataDefsDocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataDefsDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataDefsDocContext = DataDefsDocContext;

SHRParser.prototype.dataDefsDoc = function() {

    var localctx = new DataDefsDocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SHRParser.RULE_dataDefsDoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        this.dataDefsHeader();
        this.state = 122;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_USES) {
            this.state = 121;
            this.usesStatement();
        }

        this.state = 125;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_PATH) {
            this.state = 124;
            this.pathDefs();
        }

        this.state = 128;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VOCABULARY) {
            this.state = 127;
            this.vocabularyDefs();
        }

        this.state = 130;
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

function DataDefsHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataDefsHeader;
    return this;
}

DataDefsHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefsHeaderContext.prototype.constructor = DataDefsHeaderContext;

DataDefsHeaderContext.prototype.KW_DATA_DEFINITIONS = function() {
    return this.getToken(SHRParser.KW_DATA_DEFINITIONS, 0);
};

DataDefsHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

DataDefsHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataDefsHeader(this);
	}
};

DataDefsHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataDefsHeader(this);
	}
};

DataDefsHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataDefsHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataDefsHeaderContext = DataDefsHeaderContext;

SHRParser.prototype.dataDefsHeader = function() {

    var localctx = new DataDefsHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SHRParser.RULE_dataDefsHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.match(SHRParser.KW_DATA_DEFINITIONS);
        this.state = 133;
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
    this.ruleIndex = SHRParser.RULE_usesStatement;
    return this;
}

UsesStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsesStatementContext.prototype.constructor = UsesStatementContext;

UsesStatementContext.prototype.KW_USES = function() {
    return this.getToken(SHRParser.KW_USES, 0);
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
        return this.getTokens(SHRParser.COMMA);
    } else {
        return this.getToken(SHRParser.COMMA, i);
    }
};


UsesStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterUsesStatement(this);
	}
};

UsesStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitUsesStatement(this);
	}
};

UsesStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitUsesStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.UsesStatementContext = UsesStatementContext;

SHRParser.prototype.usesStatement = function() {

    var localctx = new UsesStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SHRParser.RULE_usesStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.match(SHRParser.KW_USES);
        this.state = 136;
        this.namespace();
        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 137;
            this.match(SHRParser.COMMA);
            this.state = 138;
            this.namespace();
            this.state = 143;
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
    this.ruleIndex = SHRParser.RULE_pathDefs;
    return this;
}

PathDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathDefsContext.prototype.constructor = PathDefsContext;

PathDefsContext.prototype.defaultPathDef = function() {
    return this.getTypedRuleContext(DefaultPathDefContext,0);
};

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
    if(listener instanceof SHRParserListener ) {
        listener.enterPathDefs(this);
	}
};

PathDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitPathDefs(this);
	}
};

PathDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitPathDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.PathDefsContext = PathDefsContext;

SHRParser.prototype.pathDefs = function() {

    var localctx = new PathDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SHRParser.RULE_pathDefs);
    var _la = 0; // Token type
    try {
        this.state = 159;
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 144;
            this.defaultPathDef();
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_PATH) {
                this.state = 145;
                this.pathDef();
                this.state = 150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 152;
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            if(la_===1) {
                this.state = 151;
                this.defaultPathDef();

            }
            this.state = 155; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 154;
                this.pathDef();
                this.state = 157; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===SHRParser.KW_PATH);
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

function DefaultPathDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_defaultPathDef;
    return this;
}

DefaultPathDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefaultPathDefContext.prototype.constructor = DefaultPathDefContext;

DefaultPathDefContext.prototype.KW_PATH = function() {
    return this.getToken(SHRParser.KW_PATH, 0);
};

DefaultPathDefContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

DefaultPathDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDefaultPathDef(this);
	}
};

DefaultPathDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDefaultPathDef(this);
	}
};

DefaultPathDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDefaultPathDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DefaultPathDefContext = DefaultPathDefContext;

SHRParser.prototype.defaultPathDef = function() {

    var localctx = new DefaultPathDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SHRParser.RULE_defaultPathDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(SHRParser.KW_PATH);
        this.state = 162;
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

function PathDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_pathDef;
    return this;
}

PathDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathDefContext.prototype.constructor = PathDefContext;

PathDefContext.prototype.KW_PATH = function() {
    return this.getToken(SHRParser.KW_PATH, 0);
};

PathDefContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

PathDefContext.prototype.EQUAL = function() {
    return this.getToken(SHRParser.EQUAL, 0);
};

PathDefContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

PathDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterPathDef(this);
	}
};

PathDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitPathDef(this);
	}
};

PathDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitPathDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.PathDefContext = PathDefContext;

SHRParser.prototype.pathDef = function() {

    var localctx = new PathDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRParser.RULE_pathDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(SHRParser.KW_PATH);
        this.state = 165;
        this.match(SHRParser.ALL_CAPS);
        this.state = 166;
        this.match(SHRParser.EQUAL);
        this.state = 167;
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

function VocabularyDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_vocabularyDefs;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterVocabularyDefs(this);
	}
};

VocabularyDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitVocabularyDefs(this);
	}
};

VocabularyDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitVocabularyDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.VocabularyDefsContext = VocabularyDefsContext;

SHRParser.prototype.vocabularyDefs = function() {

    var localctx = new VocabularyDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRParser.RULE_vocabularyDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 169;
            this.vocabularyDef();
            this.state = 172; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.KW_VOCABULARY);
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

VocabularyDefContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

VocabularyDefContext.prototype.EQUAL = function() {
    return this.getToken(SHRParser.EQUAL, 0);
};

VocabularyDefContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

VocabularyDefContext.prototype.URN_OID = function() {
    return this.getToken(SHRParser.URN_OID, 0);
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
    this.enterRule(localctx, 16, SHRParser.RULE_vocabularyDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(SHRParser.KW_VOCABULARY);
        this.state = 175;
        this.match(SHRParser.ALL_CAPS);
        this.state = 176;
        this.match(SHRParser.EQUAL);
        this.state = 177;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.URL || _la===SHRParser.URN_OID)) {
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
    this.ruleIndex = SHRParser.RULE_dataDefs;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterDataDefs(this);
	}
};

DataDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataDefs(this);
	}
};

DataDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataDefsContext = DataDefsContext;

SHRParser.prototype.dataDefs = function() {

    var localctx = new DataDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SHRParser.RULE_dataDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_ELEMENT || _la===SHRParser.KW_ENTRY_ELEMENT) {
            this.state = 179;
            this.dataDef();
            this.state = 184;
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
    this.ruleIndex = SHRParser.RULE_dataDef;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterDataDef(this);
	}
};

DataDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataDef(this);
	}
};

DataDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataDefContext = DataDefContext;

SHRParser.prototype.dataDef = function() {

    var localctx = new DataDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SHRParser.RULE_dataDef);
    try {
        this.state = 187;
        switch(this._input.LA(1)) {
        case SHRParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 185;
            this.elementDef();
            break;
        case SHRParser.KW_ENTRY_ELEMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 186;
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
    this.ruleIndex = SHRParser.RULE_elementDef;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterElementDef(this);
	}
};

ElementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementDef(this);
	}
};

ElementDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementDefContext = ElementDefContext;

SHRParser.prototype.elementDef = function() {

    var localctx = new ElementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SHRParser.RULE_elementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.elementHeader();
        this.state = 191;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BASED_ON) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 190;
            this.elementProps();
        }

        this.state = 193;
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
    this.ruleIndex = SHRParser.RULE_elementHeader;
    return this;
}

ElementHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementHeaderContext.prototype.constructor = ElementHeaderContext;

ElementHeaderContext.prototype.KW_ELEMENT = function() {
    return this.getToken(SHRParser.KW_ELEMENT, 0);
};

ElementHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ElementHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementHeader(this);
	}
};

ElementHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementHeader(this);
	}
};

ElementHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementHeaderContext = ElementHeaderContext;

SHRParser.prototype.elementHeader = function() {

    var localctx = new ElementHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRParser.RULE_elementHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(SHRParser.KW_ELEMENT);
        this.state = 196;
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
    this.ruleIndex = SHRParser.RULE_entryDef;
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
    this.enterRule(localctx, 26, SHRParser.RULE_entryDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.entryHeader();
        this.state = 200;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BASED_ON) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 199;
            this.elementProps();
        }

        this.state = 202;
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
    this.ruleIndex = SHRParser.RULE_entryHeader;
    return this;
}

EntryHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryHeaderContext.prototype.constructor = EntryHeaderContext;

EntryHeaderContext.prototype.KW_ENTRY_ELEMENT = function() {
    return this.getToken(SHRParser.KW_ENTRY_ELEMENT, 0);
};

EntryHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
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
    this.enterRule(localctx, 28, SHRParser.RULE_entryHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(SHRParser.KW_ENTRY_ELEMENT);
        this.state = 205;
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
    this.ruleIndex = SHRParser.RULE_elementProps;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterElementProps(this);
	}
};

ElementPropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementProps(this);
	}
};

ElementPropsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementProps(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementPropsContext = ElementPropsContext;

SHRParser.prototype.elementProps = function() {

    var localctx = new ElementPropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRParser.RULE_elementProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 207;
            this.elementProp();
            this.state = 210; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BASED_ON) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0));
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
    this.ruleIndex = SHRParser.RULE_elementProp;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterElementProp(this);
	}
};

ElementPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementProp(this);
	}
};

ElementPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementPropContext = ElementPropContext;

SHRParser.prototype.elementProp = function() {

    var localctx = new ElementPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SHRParser.RULE_elementProp);
    try {
        this.state = 215;
        switch(this._input.LA(1)) {
        case SHRParser.KW_BASED_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 212;
            this.basedOnProp();
            break;
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 213;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 214;
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
    this.ruleIndex = SHRParser.RULE_values;
    return this;
}

ValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesContext.prototype.constructor = ValuesContext;

ValuesContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ValuesContext.prototype.supportingValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SupportingValueContext);
    } else {
        return this.getTypedRuleContext(SupportingValueContext,i);
    }
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




SHRParser.ValuesContext = ValuesContext;

SHRParser.prototype.values = function() {

    var localctx = new ValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SHRParser.RULE_values);
    var _la = 0; // Token type
    try {
        this.state = 232;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.value();
            this.state = 221;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.WHOLE_NUMBER) {
                this.state = 218;
                this.supportingValue();
                this.state = 223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 225;
            _la = this._input.LA(1);
            if(_la===SHRParser.KW_VALUE) {
                this.state = 224;
                this.value();
            }

            this.state = 228; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 227;
                this.supportingValue();
                this.state = 230; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===SHRParser.WHOLE_NUMBER);
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

ValueContext.prototype.KW_VALUE = function() {
    return this.getToken(SHRParser.KW_VALUE, 0);
};

ValueContext.prototype.uncountedValue = function() {
    return this.getTypedRuleContext(UncountedValueContext,0);
};

ValueContext.prototype.countedValue = function() {
    return this.getTypedRuleContext(CountedValueContext,0);
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
    this.enterRule(localctx, 36, SHRParser.RULE_value);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        this.match(SHRParser.KW_VALUE);
        this.state = 237;
        switch(this._input.LA(1)) {
        case SHRParser.KW_REF:
        case SHRParser.KW_TBD:
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
        case SHRParser.KW_CODE_FROM:
        case SHRParser.KW_CODING_FROM:
        case SHRParser.KW_QUANTITY_WITH_UNITS:
        case SHRParser.OPEN_PAREN:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 235;
            this.uncountedValue();
            break;
        case SHRParser.WHOLE_NUMBER:
            this.state = 236;
            this.countedValue();
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

function UncountedValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_uncountedValue;
    return this;
}

UncountedValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UncountedValueContext.prototype.constructor = UncountedValueContext;

UncountedValueContext.prototype.valueType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueTypeContext);
    } else {
        return this.getTypedRuleContext(ValueTypeContext,i);
    }
};

UncountedValueContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


UncountedValueContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRParser.OPEN_PAREN, 0);
};

UncountedValueContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRParser.CLOSE_PAREN, 0);
};

UncountedValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterUncountedValue(this);
	}
};

UncountedValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitUncountedValue(this);
	}
};

UncountedValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitUncountedValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.UncountedValueContext = UncountedValueContext;

SHRParser.prototype.uncountedValue = function() {

    var localctx = new UncountedValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SHRParser.RULE_uncountedValue);
    var _la = 0; // Token type
    try {
        this.state = 258;
        switch(this._input.LA(1)) {
        case SHRParser.KW_REF:
        case SHRParser.KW_TBD:
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
        case SHRParser.KW_CODE_FROM:
        case SHRParser.KW_CODING_FROM:
        case SHRParser.KW_QUANTITY_WITH_UNITS:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 239;
            this.valueType();
            this.state = 244;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 240;
                this.match(SHRParser.KW_OR);
                this.state = 241;
                this.valueType();
                this.state = 246;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case SHRParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 247;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 248;
            this.valueType();
            this.state = 253;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 249;
                this.match(SHRParser.KW_OR);
                this.state = 250;
                this.valueType();
                this.state = 255;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 256;
            this.match(SHRParser.CLOSE_PAREN);
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

function CountedValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedValue;
    return this;
}

CountedValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedValueContext.prototype.constructor = CountedValueContext;

CountedValueContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

CountedValueContext.prototype.valueType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueTypeContext);
    } else {
        return this.getTypedRuleContext(ValueTypeContext,i);
    }
};

CountedValueContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRParser.OPEN_PAREN, 0);
};

CountedValueContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRParser.CLOSE_PAREN, 0);
};

CountedValueContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


CountedValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedValue(this);
	}
};

CountedValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedValue(this);
	}
};

CountedValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedValueContext = CountedValueContext;

SHRParser.prototype.countedValue = function() {

    var localctx = new CountedValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SHRParser.RULE_countedValue);
    var _la = 0; // Token type
    try {
        this.state = 275;
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 260;
            this.count();
            this.state = 261;
            this.valueType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 263;
            this.count();
            this.state = 264;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 265;
            this.valueType();
            this.state = 270;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 266;
                this.match(SHRParser.KW_OR);
                this.state = 267;
                this.valueType();
                this.state = 272;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 273;
            this.match(SHRParser.CLOSE_PAREN);
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

function ValueTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valueType;
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

ValueTypeContext.prototype.codeFromVS = function() {
    return this.getTypedRuleContext(CodeFromVSContext,0);
};

ValueTypeContext.prototype.quantityWithUnits = function() {
    return this.getTypedRuleContext(QuantityWithUnitsContext,0);
};

ValueTypeContext.prototype.KW_TBD = function() {
    return this.getToken(SHRParser.KW_TBD, 0);
};

ValueTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValueType(this);
	}
};

ValueTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValueType(this);
	}
};

ValueTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValueType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValueTypeContext = ValueTypeContext;

SHRParser.prototype.valueType = function() {

    var localctx = new ValueTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SHRParser.RULE_valueType);
    try {
        this.state = 283;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 277;
            this.simpleOrFQName();
            break;
        case SHRParser.KW_REF:
            this.enterOuterAlt(localctx, 2);
            this.state = 278;
            this.ref();
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
            this.state = 279;
            this.primitive();
            break;
        case SHRParser.KW_CODE_FROM:
        case SHRParser.KW_CODING_FROM:
            this.enterOuterAlt(localctx, 4);
            this.state = 280;
            this.codeFromVS();
            break;
        case SHRParser.KW_QUANTITY_WITH_UNITS:
            this.enterOuterAlt(localctx, 5);
            this.state = 281;
            this.quantityWithUnits();
            break;
        case SHRParser.KW_TBD:
            this.enterOuterAlt(localctx, 6);
            this.state = 282;
            this.match(SHRParser.KW_TBD);
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

function SupportingValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_supportingValue;
    return this;
}

SupportingValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SupportingValueContext.prototype.constructor = SupportingValueContext;

SupportingValueContext.prototype.countedSupportingValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CountedSupportingValueContext);
    } else {
        return this.getTypedRuleContext(CountedSupportingValueContext,i);
    }
};

SupportingValueContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


SupportingValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSupportingValue(this);
	}
};

SupportingValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSupportingValue(this);
	}
};

SupportingValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSupportingValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SupportingValueContext = SupportingValueContext;

SHRParser.prototype.supportingValue = function() {

    var localctx = new SupportingValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SHRParser.RULE_supportingValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.countedSupportingValue();
        this.state = 290;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_OR) {
            this.state = 286;
            this.match(SHRParser.KW_OR);
            this.state = 287;
            this.countedSupportingValue();
            this.state = 292;
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

function CountedSupportingValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedSupportingValue;
    return this;
}

CountedSupportingValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedSupportingValueContext.prototype.constructor = CountedSupportingValueContext;

CountedSupportingValueContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

CountedSupportingValueContext.prototype.supportingValueType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SupportingValueTypeContext);
    } else {
        return this.getTypedRuleContext(SupportingValueTypeContext,i);
    }
};

CountedSupportingValueContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRParser.OPEN_PAREN, 0);
};

CountedSupportingValueContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRParser.CLOSE_PAREN, 0);
};

CountedSupportingValueContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


CountedSupportingValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedSupportingValue(this);
	}
};

CountedSupportingValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedSupportingValue(this);
	}
};

CountedSupportingValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedSupportingValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedSupportingValueContext = CountedSupportingValueContext;

SHRParser.prototype.countedSupportingValue = function() {

    var localctx = new CountedSupportingValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SHRParser.RULE_countedSupportingValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.count();
        this.state = 306;
        switch(this._input.LA(1)) {
        case SHRParser.KW_REF:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 294;
            this.supportingValueType();
            break;
        case SHRParser.OPEN_PAREN:
            this.state = 295;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 296;
            this.supportingValueType();
            this.state = 301;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 297;
                this.match(SHRParser.KW_OR);
                this.state = 298;
                this.supportingValueType();
                this.state = 303;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 304;
            this.match(SHRParser.CLOSE_PAREN);
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

function SupportingValueTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_supportingValueType;
    return this;
}

SupportingValueTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SupportingValueTypeContext.prototype.constructor = SupportingValueTypeContext;

SupportingValueTypeContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

SupportingValueTypeContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

SupportingValueTypeContext.prototype.elementWithConstraint = function() {
    return this.getTypedRuleContext(ElementWithConstraintContext,0);
};

SupportingValueTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSupportingValueType(this);
	}
};

SupportingValueTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSupportingValueType(this);
	}
};

SupportingValueTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSupportingValueType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SupportingValueTypeContext = SupportingValueTypeContext;

SHRParser.prototype.supportingValueType = function() {

    var localctx = new SupportingValueTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SHRParser.RULE_supportingValueType);
    try {
        this.state = 311;
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 308;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 309;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 310;
            this.elementWithConstraint();
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
    this.ruleIndex = SHRParser.RULE_basedOnProp;
    return this;
}

BasedOnPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasedOnPropContext.prototype.constructor = BasedOnPropContext;

BasedOnPropContext.prototype.KW_BASED_ON = function() {
    return this.getToken(SHRParser.KW_BASED_ON, 0);
};

BasedOnPropContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

BasedOnPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterBasedOnProp(this);
	}
};

BasedOnPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitBasedOnProp(this);
	}
};

BasedOnPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitBasedOnProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.BasedOnPropContext = BasedOnPropContext;

SHRParser.prototype.basedOnProp = function() {

    var localctx = new BasedOnPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SHRParser.RULE_basedOnProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this.match(SHRParser.KW_BASED_ON);
        this.state = 314;
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

ConceptPropContext.prototype.KW_TBD = function() {
    return this.getToken(SHRParser.KW_TBD, 0);
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
    this.enterRule(localctx, 52, SHRParser.RULE_conceptProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this.match(SHRParser.KW_CONCEPT);
        this.state = 319;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD:
            this.state = 317;
            this.match(SHRParser.KW_TBD);
            break;
        case SHRParser.ALL_CAPS:
            this.state = 318;
            this.concepts();
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
    this.ruleIndex = SHRParser.RULE_concepts;
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
    this.enterRule(localctx, 54, SHRParser.RULE_concepts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this.fullyQualifiedCode();
        this.state = 326;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 322;
            this.match(SHRParser.COMMA);
            this.state = 323;
            this.fullyQualifiedCode();
            this.state = 328;
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
    this.ruleIndex = SHRParser.RULE_descriptionProp;
    return this;
}

DescriptionPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionPropContext.prototype.constructor = DescriptionPropContext;

DescriptionPropContext.prototype.KW_DESCRIPTION = function() {
    return this.getToken(SHRParser.KW_DESCRIPTION, 0);
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
    this.enterRule(localctx, 56, SHRParser.RULE_descriptionProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        this.match(SHRParser.KW_DESCRIPTION);
        this.state = 330;
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

function ValuesetDefsDocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetDefsDoc;
    return this;
}

ValuesetDefsDocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefsDocContext.prototype.constructor = ValuesetDefsDocContext;

ValuesetDefsDocContext.prototype.valuesetDefsHeader = function() {
    return this.getTypedRuleContext(ValuesetDefsHeaderContext,0);
};

ValuesetDefsDocContext.prototype.valuesetDefs = function() {
    return this.getTypedRuleContext(ValuesetDefsContext,0);
};

ValuesetDefsDocContext.prototype.usesStatement = function() {
    return this.getTypedRuleContext(UsesStatementContext,0);
};

ValuesetDefsDocContext.prototype.pathDefs = function() {
    return this.getTypedRuleContext(PathDefsContext,0);
};

ValuesetDefsDocContext.prototype.vocabularyDefs = function() {
    return this.getTypedRuleContext(VocabularyDefsContext,0);
};

ValuesetDefsDocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetDefsDoc(this);
	}
};

ValuesetDefsDocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetDefsDoc(this);
	}
};

ValuesetDefsDocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetDefsDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetDefsDocContext = ValuesetDefsDocContext;

SHRParser.prototype.valuesetDefsDoc = function() {

    var localctx = new ValuesetDefsDocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SHRParser.RULE_valuesetDefsDoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.valuesetDefsHeader();
        this.state = 334;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_USES) {
            this.state = 333;
            this.usesStatement();
        }

        this.state = 337;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_PATH) {
            this.state = 336;
            this.pathDefs();
        }

        this.state = 340;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VOCABULARY) {
            this.state = 339;
            this.vocabularyDefs();
        }

        this.state = 342;
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

function ValuesetDefsHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetDefsHeader;
    return this;
}

ValuesetDefsHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefsHeaderContext.prototype.constructor = ValuesetDefsHeaderContext;

ValuesetDefsHeaderContext.prototype.KW_VALUESET_DEFINITIONS = function() {
    return this.getToken(SHRParser.KW_VALUESET_DEFINITIONS, 0);
};

ValuesetDefsHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

ValuesetDefsHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetDefsHeader(this);
	}
};

ValuesetDefsHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetDefsHeader(this);
	}
};

ValuesetDefsHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetDefsHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetDefsHeaderContext = ValuesetDefsHeaderContext;

SHRParser.prototype.valuesetDefsHeader = function() {

    var localctx = new ValuesetDefsHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SHRParser.RULE_valuesetDefsHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        this.match(SHRParser.KW_VALUESET_DEFINITIONS);
        this.state = 345;
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

function ValuesetDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetDefs;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetDefs(this);
	}
};

ValuesetDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetDefs(this);
	}
};

ValuesetDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetDefsContext = ValuesetDefsContext;

SHRParser.prototype.valuesetDefs = function() {

    var localctx = new ValuesetDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SHRParser.RULE_valuesetDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_VALUESET) {
            this.state = 347;
            this.valuesetDef();
            this.state = 352;
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
    this.ruleIndex = SHRParser.RULE_valuesetDef;
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
    this.enterRule(localctx, 64, SHRParser.RULE_valuesetDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 353;
        this.valuesetHeader();
        this.state = 355;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_CONCEPT || _la===SHRParser.KW_DESCRIPTION) {
            this.state = 354;
            this.valuesetProps();
        }

        this.state = 358;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_INCLUDES_CODES_FROM || _la===SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM || _la===SHRParser.CODE || _la===SHRParser.ALL_CAPS) {
            this.state = 357;
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

ValuesetHeaderContext.prototype.KW_VALUESET = function() {
    return this.getToken(SHRParser.KW_VALUESET, 0);
};

ValuesetHeaderContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

ValuesetHeaderContext.prototype.URN_OID = function() {
    return this.getToken(SHRParser.URN_OID, 0);
};

ValuesetHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
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
    this.enterRule(localctx, 66, SHRParser.RULE_valuesetHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 360;
        this.match(SHRParser.KW_VALUESET);
        this.state = 364;
        switch(this._input.LA(1)) {
        case SHRParser.URL:
            this.state = 361;
            this.match(SHRParser.URL);
            break;
        case SHRParser.URN_OID:
            this.state = 362;
            this.match(SHRParser.URN_OID);
            break;
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.state = 363;
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
    this.enterRule(localctx, 68, SHRParser.RULE_valuesetValues);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 366;
            this.valuesetValue();
            this.state = 369; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.KW_INCLUDES_CODES_FROM || _la===SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM || _la===SHRParser.CODE || _la===SHRParser.ALL_CAPS);
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

ValuesetValueContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

ValuesetValueContext.prototype.valuesetInlineValue = function() {
    return this.getTypedRuleContext(ValuesetInlineValueContext,0);
};

ValuesetValueContext.prototype.valuesetDescendingFrom = function() {
    return this.getTypedRuleContext(ValuesetDescendingFromContext,0);
};

ValuesetValueContext.prototype.valuesetFrom = function() {
    return this.getTypedRuleContext(ValuesetFromContext,0);
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
    this.enterRule(localctx, 70, SHRParser.RULE_valuesetValue);
    try {
        this.state = 375;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 371;
            this.fullyQualifiedCode();
            break;
        case SHRParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 372;
            this.valuesetInlineValue();
            break;
        case SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM:
            this.enterOuterAlt(localctx, 3);
            this.state = 373;
            this.valuesetDescendingFrom();
            break;
        case SHRParser.KW_INCLUDES_CODES_FROM:
            this.enterOuterAlt(localctx, 4);
            this.state = 374;
            this.valuesetFrom();
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

function ValuesetInlineValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetInlineValue;
    return this;
}

ValuesetInlineValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetInlineValueContext.prototype.constructor = ValuesetInlineValueContext;

ValuesetInlineValueContext.prototype.CODE = function() {
    return this.getToken(SHRParser.CODE, 0);
};

ValuesetInlineValueContext.prototype.STRING = function() {
    return this.getToken(SHRParser.STRING, 0);
};

ValuesetInlineValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetInlineValue(this);
	}
};

ValuesetInlineValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetInlineValue(this);
	}
};

ValuesetInlineValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetInlineValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetInlineValueContext = ValuesetInlineValueContext;

SHRParser.prototype.valuesetInlineValue = function() {

    var localctx = new ValuesetInlineValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SHRParser.RULE_valuesetInlineValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        this.match(SHRParser.CODE);
        this.state = 379;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 378;
            this.match(SHRParser.STRING);
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

function ValuesetDescendingFromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetDescendingFrom;
    return this;
}

ValuesetDescendingFromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDescendingFromContext.prototype.constructor = ValuesetDescendingFromContext;

ValuesetDescendingFromContext.prototype.KW_INCLUDES_CODES_DESCENDING_FROM = function() {
    return this.getToken(SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM, 0);
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
        return this.getTokens(SHRParser.KW_AND_NOT_DESCENDING_FROM);
    } else {
        return this.getToken(SHRParser.KW_AND_NOT_DESCENDING_FROM, i);
    }
};


ValuesetDescendingFromContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetDescendingFrom(this);
	}
};

ValuesetDescendingFromContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetDescendingFrom(this);
	}
};

ValuesetDescendingFromContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetDescendingFrom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetDescendingFromContext = ValuesetDescendingFromContext;

SHRParser.prototype.valuesetDescendingFrom = function() {

    var localctx = new ValuesetDescendingFromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SHRParser.RULE_valuesetDescendingFrom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 381;
        this.match(SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM);
        this.state = 382;
        this.fullyQualifiedCode();
        this.state = 387;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_AND_NOT_DESCENDING_FROM) {
            this.state = 383;
            this.match(SHRParser.KW_AND_NOT_DESCENDING_FROM);
            this.state = 384;
            this.fullyQualifiedCode();
            this.state = 389;
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

function ValuesetFromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetFrom;
    return this;
}

ValuesetFromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetFromContext.prototype.constructor = ValuesetFromContext;

ValuesetFromContext.prototype.KW_INCLUDES_CODES_FROM = function() {
    return this.getToken(SHRParser.KW_INCLUDES_CODES_FROM, 0);
};

ValuesetFromContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

ValuesetFromContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetFrom(this);
	}
};

ValuesetFromContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetFrom(this);
	}
};

ValuesetFromContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetFrom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetFromContext = ValuesetFromContext;

SHRParser.prototype.valuesetFrom = function() {

    var localctx = new ValuesetFromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SHRParser.RULE_valuesetFrom);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.match(SHRParser.KW_INCLUDES_CODES_FROM);
        this.state = 391;
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
    this.ruleIndex = SHRParser.RULE_valuesetProps;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetProps(this);
	}
};

ValuesetPropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetProps(this);
	}
};

ValuesetPropsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetProps(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetPropsContext = ValuesetPropsContext;

SHRParser.prototype.valuesetProps = function() {

    var localctx = new ValuesetPropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SHRParser.RULE_valuesetProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 393;
            this.valuesetProp();
            this.state = 396; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.KW_CONCEPT || _la===SHRParser.KW_DESCRIPTION);
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

ValuesetPropContext.prototype.conceptProp = function() {
    return this.getTypedRuleContext(ConceptPropContext,0);
};

ValuesetPropContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
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
    this.enterRule(localctx, 80, SHRParser.RULE_valuesetProp);
    try {
        this.state = 400;
        switch(this._input.LA(1)) {
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 1);
            this.state = 398;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 399;
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
    this.enterRule(localctx, 82, SHRParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
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
    this.enterRule(localctx, 84, SHRParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
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
    this.enterRule(localctx, 86, SHRParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
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
    this.enterRule(localctx, 88, SHRParser.RULE_simpleOrFQName);
    try {
        this.state = 410;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 408;
            this.simpleName();
            break;
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 409;
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
    this.enterRule(localctx, 90, SHRParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.match(SHRParser.KW_REF);
        this.state = 413;
        this.match(SHRParser.OPEN_PAREN);
        this.state = 414;
        this.simpleOrFQName();
        this.state = 415;
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

function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.CODE = function() {
    return this.getToken(SHRParser.CODE, 0);
};

CodeContext.prototype.STRING = function() {
    return this.getToken(SHRParser.STRING, 0);
};

CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CodeContext = CodeContext;

SHRParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SHRParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        this.match(SHRParser.CODE);
        this.state = 419;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 418;
            this.match(SHRParser.STRING);
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
    this.ruleIndex = SHRParser.RULE_fullyQualifiedCode;
    return this;
}

FullyQualifiedCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedCodeContext.prototype.constructor = FullyQualifiedCodeContext;

FullyQualifiedCodeContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

FullyQualifiedCodeContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

FullyQualifiedCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitFullyQualifiedCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.FullyQualifiedCodeContext = FullyQualifiedCodeContext;

SHRParser.prototype.fullyQualifiedCode = function() {

    var localctx = new FullyQualifiedCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SHRParser.RULE_fullyQualifiedCode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 421;
        this.match(SHRParser.ALL_CAPS);
        this.state = 422;
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

function CodeFromVSContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_codeFromVS;
    return this;
}

CodeFromVSContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeFromVSContext.prototype.constructor = CodeFromVSContext;

CodeFromVSContext.prototype.valueset = function() {
    return this.getTypedRuleContext(ValuesetContext,0);
};

CodeFromVSContext.prototype.KW_CODE_FROM = function() {
    return this.getToken(SHRParser.KW_CODE_FROM, 0);
};

CodeFromVSContext.prototype.KW_CODING_FROM = function() {
    return this.getToken(SHRParser.KW_CODING_FROM, 0);
};

CodeFromVSContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCodeFromVS(this);
	}
};

CodeFromVSContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCodeFromVS(this);
	}
};

CodeFromVSContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCodeFromVS(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CodeFromVSContext = CodeFromVSContext;

SHRParser.prototype.codeFromVS = function() {

    var localctx = new CodeFromVSContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SHRParser.RULE_codeFromVS);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.KW_CODE_FROM || _la===SHRParser.KW_CODING_FROM)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 425;
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

function ElementWithConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_elementWithConstraint;
    return this;
}

ElementWithConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementWithConstraintContext.prototype.constructor = ElementWithConstraintContext;

ElementWithConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementWithConstraintContext.prototype.elementConstraint = function() {
    return this.getTypedRuleContext(ElementConstraintContext,0);
};

ElementWithConstraintContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.DOT);
    } else {
        return this.getToken(SHRParser.DOT, i);
    }
};


ElementWithConstraintContext.prototype.simpleName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SimpleNameContext);
    } else {
        return this.getTypedRuleContext(SimpleNameContext,i);
    }
};

ElementWithConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementWithConstraint(this);
	}
};

ElementWithConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementWithConstraint(this);
	}
};

ElementWithConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementWithConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementWithConstraintContext = ElementWithConstraintContext;

SHRParser.prototype.elementWithConstraint = function() {

    var localctx = new ElementWithConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, SHRParser.RULE_elementWithConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 427;
        this.simpleOrFQName();
        this.state = 432;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.DOT) {
            this.state = 428;
            this.match(SHRParser.DOT);
            this.state = 429;
            this.simpleName();
            this.state = 434;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 435;
        this.elementConstraint();
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
    this.ruleIndex = SHRParser.RULE_elementConstraint;
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

ElementConstraintContext.prototype.elementTypeConstraint = function() {
    return this.getTypedRuleContext(ElementTypeConstraintContext,0);
};

ElementConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementConstraint(this);
	}
};

ElementConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementConstraint(this);
	}
};

ElementConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementConstraintContext = ElementConstraintContext;

SHRParser.prototype.elementConstraint = function() {

    var localctx = new ElementConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, SHRParser.RULE_elementConstraint);
    try {
        this.state = 440;
        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 437;
            this.elementCodeVSConstraint();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 438;
            this.elementCodeValueConstraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 439;
            this.elementTypeConstraint();
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

function ElementCodeVSConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_elementCodeVSConstraint;
    return this;
}

ElementCodeVSConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementCodeVSConstraintContext.prototype.constructor = ElementCodeVSConstraintContext;

ElementCodeVSConstraintContext.prototype.KW_WITH = function() {
    return this.getToken(SHRParser.KW_WITH, 0);
};

ElementCodeVSConstraintContext.prototype.codeFromVS = function() {
    return this.getTypedRuleContext(CodeFromVSContext,0);
};

ElementCodeVSConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementCodeVSConstraint(this);
	}
};

ElementCodeVSConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementCodeVSConstraint(this);
	}
};

ElementCodeVSConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementCodeVSConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementCodeVSConstraintContext = ElementCodeVSConstraintContext;

SHRParser.prototype.elementCodeVSConstraint = function() {

    var localctx = new ElementCodeVSConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, SHRParser.RULE_elementCodeVSConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 442;
        this.match(SHRParser.KW_WITH);
        this.state = 443;
        this.codeFromVS();
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
    this.ruleIndex = SHRParser.RULE_elementCodeValueConstraint;
    return this;
}

ElementCodeValueConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementCodeValueConstraintContext.prototype.constructor = ElementCodeValueConstraintContext;

ElementCodeValueConstraintContext.prototype.KW_IS = function() {
    return this.getToken(SHRParser.KW_IS, 0);
};

ElementCodeValueConstraintContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

ElementCodeValueConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementCodeValueConstraint(this);
	}
};

ElementCodeValueConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementCodeValueConstraint(this);
	}
};

ElementCodeValueConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementCodeValueConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementCodeValueConstraintContext = ElementCodeValueConstraintContext;

SHRParser.prototype.elementCodeValueConstraint = function() {

    var localctx = new ElementCodeValueConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, SHRParser.RULE_elementCodeValueConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445;
        this.match(SHRParser.KW_IS);
        this.state = 446;
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

function ElementTypeConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_elementTypeConstraint;
    return this;
}

ElementTypeConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementTypeConstraintContext.prototype.constructor = ElementTypeConstraintContext;

ElementTypeConstraintContext.prototype.KW_IS = function() {
    return this.getToken(SHRParser.KW_IS, 0);
};

ElementTypeConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementTypeConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementTypeConstraint(this);
	}
};

ElementTypeConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementTypeConstraint(this);
	}
};

ElementTypeConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementTypeConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementTypeConstraintContext = ElementTypeConstraintContext;

SHRParser.prototype.elementTypeConstraint = function() {

    var localctx = new ElementTypeConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, SHRParser.RULE_elementTypeConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 448;
        this.match(SHRParser.KW_IS);
        this.state = 449;
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

function QuantityWithUnitsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_quantityWithUnits;
    return this;
}

QuantityWithUnitsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantityWithUnitsContext.prototype.constructor = QuantityWithUnitsContext;

QuantityWithUnitsContext.prototype.KW_QUANTITY_WITH_UNITS = function() {
    return this.getToken(SHRParser.KW_QUANTITY_WITH_UNITS, 0);
};

QuantityWithUnitsContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

QuantityWithUnitsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterQuantityWithUnits(this);
	}
};

QuantityWithUnitsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitQuantityWithUnits(this);
	}
};

QuantityWithUnitsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitQuantityWithUnits(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.QuantityWithUnitsContext = QuantityWithUnitsContext;

SHRParser.prototype.quantityWithUnits = function() {

    var localctx = new QuantityWithUnitsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, SHRParser.RULE_quantityWithUnits);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.match(SHRParser.KW_QUANTITY_WITH_UNITS);
        this.state = 452;
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
    this.ruleIndex = SHRParser.RULE_valueset;
    return this;
}

ValuesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetContext.prototype.constructor = ValuesetContext;

ValuesetContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

ValuesetContext.prototype.PATH_URL = function() {
    return this.getToken(SHRParser.PATH_URL, 0);
};

ValuesetContext.prototype.URN_OID = function() {
    return this.getToken(SHRParser.URN_OID, 0);
};

ValuesetContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
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
    this.enterRule(localctx, 110, SHRParser.RULE_valueset);
    try {
        this.state = 458;
        switch(this._input.LA(1)) {
        case SHRParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 454;
            this.match(SHRParser.URL);
            break;
        case SHRParser.PATH_URL:
            this.enterOuterAlt(localctx, 2);
            this.state = 455;
            this.match(SHRParser.PATH_URL);
            break;
        case SHRParser.URN_OID:
            this.enterOuterAlt(localctx, 3);
            this.state = 456;
            this.match(SHRParser.URN_OID);
            break;
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 4);
            this.state = 457;
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
    this.enterRule(localctx, 112, SHRParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 460;
        _la = this._input.LA(1);
        if(!(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (SHRParser.KW_BOOLEAN - 21)) | (1 << (SHRParser.KW_INTEGER - 21)) | (1 << (SHRParser.KW_STRING - 21)) | (1 << (SHRParser.KW_DECIMAL - 21)) | (1 << (SHRParser.KW_URI - 21)) | (1 << (SHRParser.KW_BASE64_BINARY - 21)) | (1 << (SHRParser.KW_INSTANT - 21)) | (1 << (SHRParser.KW_DATE - 21)) | (1 << (SHRParser.KW_DATE_TIME - 21)) | (1 << (SHRParser.KW_TIME - 21)) | (1 << (SHRParser.KW_CODE - 21)) | (1 << (SHRParser.KW_OID - 21)) | (1 << (SHRParser.KW_ID - 21)) | (1 << (SHRParser.KW_MARKDOWN - 21)) | (1 << (SHRParser.KW_UNSIGNED_INT - 21)) | (1 << (SHRParser.KW_POSITIVE_INT - 21)))) !== 0))) {
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
    this.enterRule(localctx, 114, SHRParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 462;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 463;
        this.match(SHRParser.RANGE);
        this.state = 464;
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


exports.SHRParser = SHRParser;
