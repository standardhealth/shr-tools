// Generated from SHRParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRParserListener = require('./SHRParserListener').SHRParserListener;
var SHRParserVisitor = require('./SHRParserVisitor').SHRParserVisitor;

var grammarFileName = "SHRParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3T\u027d\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t",
    "8\49\t9\4:\t:\4;\t;\4<\t<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC",
    "\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\3",
    "\2\3\2\3\2\5\2\u00a0\n\2\3\3\3\3\5\3\u00a4\n\3\3\3\5\3\u00a7\n\3\3\3",
    "\5\3\u00aa\n\3\3\3\5\3\u00ad\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\5",
    "\3\5\3\5\3\5\7\5\u00bb\n\5\f\5\16\5\u00be\13\5\3\6\3\6\7\6\u00c2\n\6",
    "\f\6\16\6\u00c5\13\6\3\6\5\6\u00c8\n\6\3\6\6\6\u00cb\n\6\r\6\16\6\u00cc",
    "\5\6\u00cf\n\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\6\t\u00da\n\t\r\t",
    "\16\t\u00db\3\n\3\n\3\n\3\n\3\n\3\13\7\13\u00e4\n\13\f\13\16\13\u00e7",
    "\13\13\3\f\3\f\5\f\u00eb\n\f\3\r\3\r\5\r\u00ef\n\r\3\r\3\r\3\16\3\16",
    "\3\16\3\17\3\17\5\17\u00f8\n\17\3\17\3\17\3\20\3\20\3\20\3\21\6\21\u0100",
    "\n\21\r\21\16\21\u0101\3\22\3\22\3\22\5\22\u0107\n\22\3\23\5\23\u010a",
    "\n\23\3\23\7\23\u010d\n\23\f\23\16\23\u0110\13\23\3\24\3\24\3\24\5\24",
    "\u0115\n\24\3\25\3\25\3\25\7\25\u011a\n\25\f\25\16\25\u011d\13\25\3",
    "\25\3\25\3\25\3\25\7\25\u0123\n\25\f\25\16\25\u0126\13\25\3\25\3\25",
    "\5\25\u012a\n\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26\3\26\7\26\u0134",
    "\n\26\f\26\16\26\u0137\13\26\3\26\3\26\5\26\u013b\n\26\3\27\3\27\3\27",
    "\3\27\3\27\3\27\5\27\u0143\n\27\3\30\3\30\3\30\7\30\u0148\n\30\f\30",
    "\16\30\u014b\13\30\3\31\5\31\u014e\n\31\3\31\3\31\3\31\3\31\3\31\7\31",
    "\u0155\n\31\f\31\16\31\u0158\13\31\3\31\3\31\5\31\u015c\n\31\3\32\3",
    "\32\3\32\3\32\5\32\u0162\n\32\3\33\3\33\3\33\5\33\u0167\n\33\3\34\3",
    "\34\3\34\5\34\u016c\n\34\3\35\3\35\3\35\7\35\u0171\n\35\f\35\16\35\u0174",
    "\13\35\3\36\3\36\3\36\3\37\3\37\5\37\u017b\n\37\3\37\5\37\u017e\n\37",
    "\3\37\5\37\u0181\n\37\3\37\3\37\3 \3 \3 \3 \3 \3 \3!\7!\u018c\n!\f!",
    "\16!\u018f\13!\3\"\3\"\5\"\u0193\n\"\3\"\5\"\u0196\n\"\3#\3#\3#\3#\5",
    "#\u019c\n#\3$\6$\u019f\n$\r$\16$\u01a0\3%\3%\3%\3%\5%\u01a7\n%\3&\3",
    "&\5&\u01ab\n&\3\'\3\'\3\'\3\'\7\'\u01b1\n\'\f\'\16\'\u01b4\13\'\3(\3",
    "(\3(\3)\6)\u01ba\n)\r)\16)\u01bb\3*\3*\5*\u01c0\n*\3+\3+\3+\3+\3,\3",
    ",\3,\3,\3,\3,\3-\3-\3-\3.\7.\u01d0\n.\f.\16.\u01d3\13.\3/\3/\7/\u01d7",
    "\n/\f/\16/\u01da\13/\3\60\3\60\3\60\5\60\u01df\n\60\3\60\3\60\3\61\3",
    "\61\5\61\u01e5\n\61\3\62\3\62\3\62\3\62\3\63\3\63\3\63\7\63\u01ee\n",
    "\63\f\63\16\63\u01f1\13\63\3\64\3\64\3\64\3\64\3\64\7\64\u01f8\n\64",
    "\f\64\16\64\u01fb\13\64\3\65\3\65\3\65\5\65\u0200\n\65\3\66\3\66\3\66",
    "\3\66\3\66\3\67\3\67\3\67\3\67\38\38\39\39\3:\3:\3;\3;\5;\u0213\n;\3",
    "<\3<\3<\3<\3<\3=\3=\5=\u021c\n=\3>\3>\3>\5>\u0221\n>\3?\3?\5?\u0225",
    "\n?\3@\3@\3@\3A\3A\3A\5A\u022d\nA\3A\5A\u0230\nA\3B\3B\3B\6B\u0235\n",
    "B\rB\16B\u0236\3B\3B\5B\u023b\nB\3B\3B\7B\u023f\nB\fB\16B\u0242\13B",
    "\3B\3B\5B\u0246\nB\3C\3C\3C\3C\3C\3C\5C\u024e\nC\3D\3D\3D\3E\3E\3E\3",
    "F\3F\6F\u0258\nF\rF\16F\u0259\3G\3G\3G\3H\3H\3H\5H\u0262\nH\3I\3I\3",
    "I\3I\3J\3J\3J\3J\3J\5J\u026d\nJ\3K\3K\3L\3L\3L\3L\3M\3M\5M\u0277\nM",
    "\3N\3N\5N\u027b\nN\3N\2\2O\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"",
    "$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082",
    "\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a",
    "\2\n\4\2CCEF\3\2KL\3\2IJ\3\2\61\63\3\2\34\35\3\2\31\32\3\2 \60\4\2<",
    "<HH\u0289\2\u009f\3\2\2\2\4\u00a1\3\2\2\2\6\u00b0\3\2\2\2\b\u00b6\3",
    "\2\2\2\n\u00ce\3\2\2\2\f\u00d0\3\2\2\2\16\u00d3\3\2\2\2\20\u00d9\3\2",
    "\2\2\22\u00dd\3\2\2\2\24\u00e5\3\2\2\2\26\u00ea\3\2\2\2\30\u00ec\3\2",
    "\2\2\32\u00f2\3\2\2\2\34\u00f5\3\2\2\2\36\u00fb\3\2\2\2 \u00ff\3\2\2",
    "\2\"\u0106\3\2\2\2$\u0109\3\2\2\2&\u0111\3\2\2\2(\u0129\3\2\2\2*\u013a",
    "\3\2\2\2,\u0142\3\2\2\2.\u0144\3\2\2\2\60\u014d\3\2\2\2\62\u0161\3\2",
    "\2\2\64\u0163\3\2\2\2\66\u0168\3\2\2\28\u016d\3\2\2\2:\u0175\3\2\2\2",
    "<\u0178\3\2\2\2>\u0184\3\2\2\2@\u018d\3\2\2\2B\u0190\3\2\2\2D\u0197",
    "\3\2\2\2F\u019e\3\2\2\2H\u01a6\3\2\2\2J\u01a8\3\2\2\2L\u01ac\3\2\2\2",
    "N\u01b5\3\2\2\2P\u01b9\3\2\2\2R\u01bf\3\2\2\2T\u01c1\3\2\2\2V\u01c5",
    "\3\2\2\2X\u01cb\3\2\2\2Z\u01d1\3\2\2\2\\\u01d4\3\2\2\2^\u01db\3\2\2",
    "\2`\u01e4\3\2\2\2b\u01e6\3\2\2\2d\u01ea\3\2\2\2f\u01f2\3\2\2\2h\u01ff",
    "\3\2\2\2j\u0201\3\2\2\2l\u0206\3\2\2\2n\u020a\3\2\2\2p\u020c\3\2\2\2",
    "r\u020e\3\2\2\2t\u0212\3\2\2\2v\u0214\3\2\2\2x\u0219\3\2\2\2z\u0220",
    "\3\2\2\2|\u0224\3\2\2\2~\u0226\3\2\2\2\u0080\u022c\3\2\2\2\u0082\u0231",
    "\3\2\2\2\u0084\u024d\3\2\2\2\u0086\u024f\3\2\2\2\u0088\u0252\3\2\2\2",
    "\u008a\u0257\3\2\2\2\u008c\u025b\3\2\2\2\u008e\u025e\3\2\2\2\u0090\u0263",
    "\3\2\2\2\u0092\u026c\3\2\2\2\u0094\u026e\3\2\2\2\u0096\u0270\3\2\2\2",
    "\u0098\u0274\3\2\2\2\u009a\u0278\3\2\2\2\u009c\u00a0\5\4\3\2\u009d\u00a0",
    "\5<\37\2\u009e\u00a0\5T+\2\u009f\u009c\3\2\2\2\u009f\u009d\3\2\2\2\u009f",
    "\u009e\3\2\2\2\u00a0\3\3\2\2\2\u00a1\u00a3\5\6\4\2\u00a2\u00a4\5:\36",
    "\2\u00a3\u00a2\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00a6\3\2\2\2\u00a5",
    "\u00a7\5\b\5\2\u00a6\u00a5\3\2\2\2\u00a6\u00a7\3\2\2\2\u00a7\u00a9\3",
    "\2\2\2\u00a8\u00aa\5\n\6\2\u00a9\u00a8\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa",
    "\u00ac\3\2\2\2\u00ab\u00ad\5\20\t\2\u00ac\u00ab\3\2\2\2\u00ac\u00ad",
    "\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00af\5\24\13\2\u00af\5\3\2\2\2\u00b0",
    "\u00b1\7\3\2\2\u00b1\u00b2\7\4\2\2\u00b2\u00b3\5l\67\2\u00b3\u00b4\7",
    "\7\2\2\u00b4\u00b5\5n8\2\u00b5\7\3\2\2\2\u00b6\u00b7\7\b\2\2\u00b7\u00bc",
    "\5n8\2\u00b8\u00b9\7;\2\2\u00b9\u00bb\5n8\2\u00ba\u00b8\3\2\2\2\u00bb",
    "\u00be\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\t\3\2\2",
    "\2\u00be\u00bc\3\2\2\2\u00bf\u00c3\5\f\7\2\u00c0\u00c2\5\16\b\2\u00c1",
    "\u00c0\3\2\2\2\u00c2\u00c5\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c3\u00c4\3",
    "\2\2\2\u00c4\u00cf\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c6\u00c8\5\f\7\2\u00c7",
    "\u00c6\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00ca\3\2\2\2\u00c9\u00cb\5",
    "\16\b\2\u00ca\u00c9\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00ca\3\2\2\2",
    "\u00cc\u00cd\3\2\2\2\u00cd\u00cf\3\2\2\2\u00ce\u00bf\3\2\2\2\u00ce\u00c7",
    "\3\2\2\2\u00cf\13\3\2\2\2\u00d0\u00d1\7\t\2\2\u00d1\u00d2\7C\2\2\u00d2",
    "\r\3\2\2\2\u00d3\u00d4\7\t\2\2\u00d4\u00d5\7I\2\2\u00d5\u00d6\7:\2\2",
    "\u00d6\u00d7\7C\2\2\u00d7\17\3\2\2\2\u00d8\u00da\5\22\n\2\u00d9\u00d8",
    "\3\2\2\2\u00da\u00db\3\2\2\2\u00db\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2",
    "\u00dc\21\3\2\2\2\u00dd\u00de\7\n\2\2\u00de\u00df\7I\2\2\u00df\u00e0",
    "\7:\2\2\u00e0\u00e1\t\2\2\2\u00e1\23\3\2\2\2\u00e2\u00e4\5\26\f\2\u00e3",
    "\u00e2\3\2\2\2\u00e4\u00e7\3\2\2\2\u00e5\u00e3\3\2\2\2\u00e5\u00e6\3",
    "\2\2\2\u00e6\25\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e8\u00eb\5\30\r\2\u00e9",
    "\u00eb\5\34\17\2\u00ea\u00e8\3\2\2\2\u00ea\u00e9\3\2\2\2\u00eb\27\3",
    "\2\2\2\u00ec\u00ee\5\32\16\2\u00ed\u00ef\5 \21\2\u00ee\u00ed\3\2\2\2",
    "\u00ee\u00ef\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00f1\5$\23\2\u00f1\31",
    "\3\2\2\2\u00f2\u00f3\7\13\2\2\u00f3\u00f4\5p9\2\u00f4\33\3\2\2\2\u00f5",
    "\u00f7\5\36\20\2\u00f6\u00f8\5 \21\2\u00f7\u00f6\3\2\2\2\u00f7\u00f8",
    "\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fa\5$\23\2\u00fa\35\3\2\2\2\u00fb",
    "\u00fc\7\f\2\2\u00fc\u00fd\5p9\2\u00fd\37\3\2\2\2\u00fe\u0100\5\"\22",
    "\2\u00ff\u00fe\3\2\2\2\u0100\u0101\3\2\2\2\u0101\u00ff\3\2\2\2\u0101",
    "\u0102\3\2\2\2\u0102!\3\2\2\2\u0103\u0107\5\64\33\2\u0104\u0107\5\66",
    "\34\2\u0105\u0107\5:\36\2\u0106\u0103\3\2\2\2\u0106\u0104\3\2\2\2\u0106",
    "\u0105\3\2\2\2\u0107#\3\2\2\2\u0108\u010a\5&\24\2\u0109\u0108\3\2\2",
    "\2\u0109\u010a\3\2\2\2\u010a\u010e\3\2\2\2\u010b\u010d\5.\30\2\u010c",
    "\u010b\3\2\2\2\u010d\u0110\3\2\2\2\u010e\u010c\3\2\2\2\u010e\u010f\3",
    "\2\2\2\u010f%\3\2\2\2\u0110\u010e\3\2\2\2\u0111\u0114\7\16\2\2\u0112",
    "\u0115\5(\25\2\u0113\u0115\5*\26\2\u0114\u0112\3\2\2\2\u0114\u0113\3",
    "\2\2\2\u0115\'\3\2\2\2\u0116\u011b\5,\27\2\u0117\u0118\7\26\2\2\u0118",
    "\u011a\5,\27\2\u0119\u0117\3\2\2\2\u011a\u011d\3\2\2\2\u011b\u0119\3",
    "\2\2\2\u011b\u011c\3\2\2\2\u011c\u012a\3\2\2\2\u011d\u011b\3\2\2\2\u011e",
    "\u011f\7=\2\2\u011f\u0124\5,\27\2\u0120\u0121\7\26\2\2\u0121\u0123\5",
    ",\27\2\u0122\u0120\3\2\2\2\u0123\u0126\3\2\2\2\u0124\u0122\3\2\2\2\u0124",
    "\u0125\3\2\2\2\u0125\u0127\3\2\2\2\u0126\u0124\3\2\2\2\u0127\u0128\7",
    ">\2\2\u0128\u012a\3\2\2\2\u0129\u0116\3\2\2\2\u0129\u011e\3\2\2\2\u012a",
    ")\3\2\2\2\u012b\u012c\5\u0096L\2\u012c\u012d\5,\27\2\u012d\u013b\3\2",
    "\2\2\u012e\u012f\5\u0096L\2\u012f\u0130\7=\2\2\u0130\u0135\5,\27\2\u0131",
    "\u0132\7\26\2\2\u0132\u0134\5,\27\2\u0133\u0131\3\2\2\2\u0134\u0137",
    "\3\2\2\2\u0135\u0133\3\2\2\2\u0135\u0136\3\2\2\2\u0136\u0138\3\2\2\2",
    "\u0137\u0135\3\2\2\2\u0138\u0139\7>\2\2\u0139\u013b\3\2\2\2\u013a\u012b",
    "\3\2\2\2\u013a\u012e\3\2\2\2\u013b+\3\2\2\2\u013c\u0143\5t;\2\u013d",
    "\u0143\5v<\2\u013e\u0143\5\u0094K\2\u013f\u0143\5~@\2\u0140\u0143\5",
    "\u0080A\2\u0141\u0143\5\u0098M\2\u0142\u013c\3\2\2\2\u0142\u013d\3\2",
    "\2\2\u0142\u013e\3\2\2\2\u0142\u013f\3\2\2\2\u0142\u0140\3\2\2\2\u0142",
    "\u0141\3\2\2\2\u0143-\3\2\2\2\u0144\u0149\5\60\31\2\u0145\u0146\7\26",
    "\2\2\u0146\u0148\5\60\31\2\u0147\u0145\3\2\2\2\u0148\u014b\3\2\2\2\u0149",
    "\u0147\3\2\2\2\u0149\u014a\3\2\2\2\u014a/\3\2\2\2\u014b\u0149\3\2\2",
    "\2\u014c\u014e\5\u0096L\2\u014d\u014c\3\2\2\2\u014d\u014e\3\2\2\2\u014e",
    "\u015b\3\2\2\2\u014f\u015c\5\62\32\2\u0150\u0151\7=\2\2\u0151\u0156",
    "\5\62\32\2\u0152\u0153\7\26\2\2\u0153\u0155\5\62\32\2\u0154\u0152\3",
    "\2\2\2\u0155\u0158\3\2\2\2\u0156\u0154\3\2\2\2\u0156\u0157\3\2\2\2\u0157",
    "\u0159\3\2\2\2\u0158\u0156\3\2\2\2\u0159\u015a\7>\2\2\u015a\u015c\3",
    "\2\2\2\u015b\u014f\3\2\2\2\u015b\u0150\3\2\2\2\u015c\61\3\2\2\2\u015d",
    "\u0162\5t;\2\u015e\u0162\5v<\2\u015f\u0162\5\u0080A\2\u0160\u0162\5",
    "\u0098M\2\u0161\u015d\3\2\2\2\u0161\u015e\3\2\2\2\u0161\u015f\3\2\2",
    "\2\u0161\u0160\3\2\2\2\u0162\63\3\2\2\2\u0163\u0166\7\r\2\2\u0164\u0167",
    "\5t;\2\u0165\u0167\5\u0098M\2\u0166\u0164\3\2\2\2\u0166\u0165\3\2\2",
    "\2\u0167\65\3\2\2\2\u0168\u016b\7\23\2\2\u0169\u016c\5\u0098M\2\u016a",
    "\u016c\58\35\2\u016b\u0169\3\2\2\2\u016b\u016a\3\2\2\2\u016c\67\3\2",
    "\2\2\u016d\u0172\5z>\2\u016e\u016f\7;\2\2\u016f\u0171\5z>\2\u0170\u016e",
    "\3\2\2\2\u0171\u0174\3\2\2\2\u0172\u0170\3\2\2\2\u0172\u0173\3\2\2\2",
    "\u01739\3\2\2\2\u0174\u0172\3\2\2\2\u0175\u0176\7\24\2\2\u0176\u0177",
    "\7N\2\2\u0177;\3\2\2\2\u0178\u017a\5> \2\u0179\u017b\5\b\5\2\u017a\u0179",
    "\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u017d\3\2\2\2\u017c\u017e\5\n\6\2",
    "\u017d\u017c\3\2\2\2\u017d\u017e\3\2\2\2\u017e\u0180\3\2\2\2\u017f\u0181",
    "\5\20\t\2\u0180\u017f\3\2\2\2\u0180\u0181\3\2\2\2\u0181\u0182\3\2\2",
    "\2\u0182\u0183\5@!\2\u0183=\3\2\2\2\u0184\u0185\7\3\2\2\u0185\u0186",
    "\7\5\2\2\u0186\u0187\5l\67\2\u0187\u0188\7\7\2\2\u0188\u0189\5n8\2\u0189",
    "?\3\2\2\2\u018a\u018c\5B\"\2\u018b\u018a\3\2\2\2\u018c\u018f\3\2\2\2",
    "\u018d\u018b\3\2\2\2\u018d\u018e\3\2\2\2\u018eA\3\2\2\2\u018f\u018d",
    "\3\2\2\2\u0190\u0192\5D#\2\u0191\u0193\5P)\2\u0192\u0191\3\2\2\2\u0192",
    "\u0193\3\2\2\2\u0193\u0195\3\2\2\2\u0194\u0196\5F$\2\u0195\u0194\3\2",
    "\2\2\u0195\u0196\3\2\2\2\u0196C\3\2\2\2\u0197\u019b\7\17\2\2\u0198\u019c",
    "\7C\2\2\u0199\u019c\7E\2\2\u019a\u019c\5p9\2\u019b\u0198\3\2\2\2\u019b",
    "\u0199\3\2\2\2\u019b\u019a\3\2\2\2\u019cE\3\2\2\2\u019d\u019f\5H%\2",
    "\u019e\u019d\3\2\2\2\u019f\u01a0\3\2\2\2\u01a0\u019e\3\2\2\2\u01a0\u01a1",
    "\3\2\2\2\u01a1G\3\2\2\2\u01a2\u01a7\5z>\2\u01a3\u01a7\5J&\2\u01a4\u01a7",
    "\5L\'\2\u01a5\u01a7\5N(\2\u01a6\u01a2\3\2\2\2\u01a6\u01a3\3\2\2\2\u01a6",
    "\u01a4\3\2\2\2\u01a6\u01a5\3\2\2\2\u01a7I\3\2\2\2\u01a8\u01aa\7G\2\2",
    "\u01a9\u01ab\7N\2\2\u01aa\u01a9\3\2\2\2\u01aa\u01ab\3\2\2\2\u01abK\3",
    "\2\2\2\u01ac\u01ad\7\21\2\2\u01ad\u01b2\5z>\2\u01ae\u01af\7\22\2\2\u01af",
    "\u01b1\5z>\2\u01b0\u01ae\3\2\2\2\u01b1\u01b4\3\2\2\2\u01b2\u01b0\3\2",
    "\2\2\u01b2\u01b3\3\2\2\2\u01b3M\3\2\2\2\u01b4\u01b2\3\2\2\2\u01b5\u01b6",
    "\7\20\2\2\u01b6\u01b7\5z>\2\u01b7O\3\2\2\2\u01b8\u01ba\5R*\2\u01b9\u01b8",
    "\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bb\u01b9\3\2\2\2\u01bb\u01bc\3\2\2\2",
    "\u01bcQ\3\2\2\2\u01bd\u01c0\5\66\34\2\u01be\u01c0\5:\36\2\u01bf\u01bd",
    "\3\2\2\2\u01bf\u01be\3\2\2\2\u01c0S\3\2\2\2\u01c1\u01c2\5V,\2\u01c2",
    "\u01c3\5X-\2\u01c3\u01c4\5Z.\2\u01c4U\3\2\2\2\u01c5\u01c6\7\3\2\2\u01c6",
    "\u01c7\7\6\2\2\u01c7\u01c8\5l\67\2\u01c8\u01c9\7\7\2\2\u01c9\u01ca\5",
    "n8\2\u01caW\3\2\2\2\u01cb\u01cc\7\65\2\2\u01cc\u01cd\5p9\2\u01cdY\3",
    "\2\2\2\u01ce\u01d0\5\\/\2\u01cf\u01ce\3\2\2\2\u01d0\u01d3\3\2\2\2\u01d1",
    "\u01cf\3\2\2\2\u01d1\u01d2\3\2\2\2\u01d2[\3\2\2\2\u01d3\u01d1\3\2\2",
    "\2\u01d4\u01d8\5^\60\2\u01d5\u01d7\5`\61\2\u01d6\u01d5\3\2\2\2\u01d7",
    "\u01da\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9]\3\2\2",
    "\2\u01da\u01d8\3\2\2\2\u01db\u01de\5p9\2\u01dc\u01dd\7\66\2\2\u01dd",
    "\u01df\7S\2\2\u01de\u01dc\3\2\2\2\u01de\u01df\3\2\2\2\u01df\u01e0\3",
    "\2\2\2\u01e0\u01e1\7A\2\2\u01e1_\3\2\2\2\u01e2\u01e5\5b\62\2\u01e3\u01e5",
    "\5j\66\2\u01e4\u01e2\3\2\2\2\u01e4\u01e3\3\2\2\2\u01e5a\3\2\2\2\u01e6",
    "\u01e7\5d\63\2\u01e7\u01e8\7\66\2\2\u01e8\u01e9\7S\2\2\u01e9c\3\2\2",
    "\2\u01ea\u01ef\5f\64\2\u01eb\u01ec\79\2\2\u01ec\u01ee\5f\64\2\u01ed",
    "\u01eb\3\2\2\2\u01ee\u01f1\3\2\2\2\u01ef\u01ed\3\2\2\2\u01ef\u01f0\3",
    "\2\2\2\u01f0e\3\2\2\2\u01f1\u01ef\3\2\2\2\u01f2\u01f9\5h\65\2\u01f3",
    "\u01f4\7?\2\2\u01f4\u01f5\5h\65\2\u01f5\u01f6\7@\2\2\u01f6\u01f8\3\2",
    "\2\2\u01f7\u01f3\3\2\2\2\u01f8\u01fb\3\2\2\2\u01f9\u01f7\3\2\2\2\u01f9",
    "\u01fa\3\2\2\2\u01fag\3\2\2\2\u01fb\u01f9\3\2\2\2\u01fc\u0200\5t;\2",
    "\u01fd\u0200\5\u0094K\2\u01fe\u0200\5\u0098M\2\u01ff\u01fc\3\2\2\2\u01ff",
    "\u01fd\3\2\2\2\u01ff\u01fe\3\2\2\2\u0200i\3\2\2\2\u0201\u0202\7\67\2",
    "\2\u0202\u0203\7S\2\2\u0203\u0204\78\2\2\u0204\u0205\5\u0096L\2\u0205",
    "k\3\2\2\2\u0206\u0207\7H\2\2\u0207\u0208\79\2\2\u0208\u0209\7H\2\2\u0209",
    "m\3\2\2\2\u020a\u020b\t\3\2\2\u020bo\3\2\2\2\u020c\u020d\t\4\2\2\u020d",
    "q\3\2\2\2\u020e\u020f\7M\2\2\u020fs\3\2\2\2\u0210\u0213\5p9\2\u0211",
    "\u0213\5r:\2\u0212\u0210\3\2\2\2\u0212\u0211\3\2\2\2\u0213u\3\2\2\2",
    "\u0214\u0215\7\25\2\2\u0215\u0216\7=\2\2\u0216\u0217\5t;\2\u0217\u0218",
    "\7>\2\2\u0218w\3\2\2\2\u0219\u021b\7G\2\2\u021a\u021c\7N\2\2\u021b\u021a",
    "\3\2\2\2\u021b\u021c\3\2\2\2\u021cy\3\2\2\2\u021d\u021e\7I\2\2\u021e",
    "\u0221\5x=\2\u021f\u0221\5\u009aN\2\u0220\u021d\3\2\2\2\u0220\u021f",
    "\3\2\2\2\u0221{\3\2\2\2\u0222\u0225\5z>\2\u0223\u0225\5x=\2\u0224\u0222",
    "\3\2\2\2\u0224\u0223\3\2\2\2\u0225}\3\2\2\2\u0226\u0227\t\5\2\2\u0227",
    "\u0228\5\u0092J\2\u0228\177\3\2\2\2\u0229\u022d\5t;\2\u022a\u022d\5",
    "\u0082B\2\u022b\u022d\5\u0094K\2\u022c\u0229\3\2\2\2\u022c\u022a\3\2",
    "\2\2\u022c\u022b\3\2\2\2\u022d\u022f\3\2\2\2\u022e\u0230\5\u0084C\2",
    "\u022f\u022e\3\2\2\2\u022f\u0230\3\2\2\2\u0230\u0081\3\2\2\2\u0231\u0245",
    "\5t;\2\u0232\u0233\79\2\2\u0233\u0235\5p9\2\u0234\u0232\3\2\2\2\u0235",
    "\u0236\3\2\2\2\u0236\u0234\3\2\2\2\u0236\u0237\3\2\2\2\u0237\u023a\3",
    "\2\2\2\u0238\u0239\79\2\2\u0239\u023b\5\u0094K\2\u023a\u0238\3\2\2\2",
    "\u023a\u023b\3\2\2\2\u023b\u0246\3\2\2\2\u023c\u023d\79\2\2\u023d\u023f",
    "\5p9\2\u023e\u023c\3\2\2\2\u023f\u0242\3\2\2\2\u0240\u023e\3\2\2\2\u0240",
    "\u0241\3\2\2\2\u0241\u0243\3\2\2\2\u0242\u0240\3\2\2\2\u0243\u0244\7",
    "9\2\2\u0244\u0246\5\u0094K\2\u0245\u0234\3\2\2\2\u0245\u0240\3\2\2\2",
    "\u0246\u0083\3\2\2\2\u0247\u024e\5\u0086D\2\u0248\u024e\5\u0088E\2\u0249",
    "\u024e\5\u008aF\2\u024a\u024e\5\u008cG\2\u024b\u024e\5\u008eH\2\u024c",
    "\u024e\5\u0090I\2\u024d\u0247\3\2\2\2\u024d\u0248\3\2\2\2\u024d\u0249",
    "\3\2\2\2\u024d\u024a\3\2\2\2\u024d\u024b\3\2\2\2\u024d\u024c\3\2\2\2",
    "\u024e\u0085\3\2\2\2\u024f\u0250\7\27\2\2\u0250\u0251\5~@\2\u0251\u0087",
    "\3\2\2\2\u0252\u0253\7\30\2\2\u0253\u0254\5|?\2\u0254\u0089\3\2\2\2",
    "\u0255\u0256\7\33\2\2\u0256\u0258\5|?\2\u0257\u0255\3\2\2\2\u0258\u0259",
    "\3\2\2\2\u0259\u0257\3\2\2\2\u0259\u025a\3\2\2\2\u025a\u008b\3\2\2\2",
    "\u025b\u025c\7\30\2\2\u025c\u025d\t\6\2\2\u025d\u008d\3\2\2\2\u025e",
    "\u0261\t\7\2\2\u025f\u0262\5t;\2\u0260\u0262\5\u0098M\2\u0261\u025f",
    "\3\2\2\2\u0261\u0260\3\2\2\2\u0262\u008f\3\2\2\2\u0263\u0264\7\27\2",
    "\2\u0264\u0265\7\64\2\2\u0265\u0266\5z>\2\u0266\u0091\3\2\2\2\u0267",
    "\u026d\7C\2\2\u0268\u026d\7D\2\2\u0269\u026d\7E\2\2\u026a\u026d\5p9",
    "\2\u026b\u026d\5\u0098M\2\u026c\u0267\3\2\2\2\u026c\u0268\3\2\2\2\u026c",
    "\u0269\3\2\2\2\u026c\u026a\3\2\2\2\u026c\u026b\3\2\2\2\u026d\u0093\3",
    "\2\2\2\u026e\u026f\t\b\2\2\u026f\u0095\3\2\2\2\u0270\u0271\7H\2\2\u0271",
    "\u0272\7B\2\2\u0272\u0273\t\t\2\2\u0273\u0097\3\2\2\2\u0274\u0276\7",
    "\36\2\2\u0275\u0277\7N\2\2\u0276\u0275\3\2\2\2\u0276\u0277\3\2\2\2\u0277",
    "\u0099\3\2\2\2\u0278\u027a\7\37\2\2\u0279\u027b\7N\2\2\u027a\u0279\3",
    "\2\2\2\u027a\u027b\3\2\2\2\u027b\u009b\3\2\2\2H\u009f\u00a3\u00a6\u00a9",
    "\u00ac\u00bc\u00c3\u00c7\u00cc\u00ce\u00db\u00e5\u00ea\u00ee\u00f7\u0101",
    "\u0106\u0109\u010e\u0114\u011b\u0124\u0129\u0135\u013a\u0142\u0149\u014d",
    "\u0156\u015b\u0161\u0166\u016b\u0172\u017a\u017d\u0180\u018d\u0192\u0195",
    "\u019b\u01a0\u01a6\u01aa\u01b2\u01bb\u01bf\u01d1\u01d8\u01de\u01e4\u01ef",
    "\u01f9\u01ff\u0212\u021b\u0220\u0224\u022c\u022f\u0236\u023a\u0240\u0245",
    "\u024d\u0259\u0261\u026c\u0276\u027a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'DataElement'", "'ValueSet'", 
                     "'Map'", "'Namespace:'", "'Uses:'", "'Path:'", "'CodeSystem:'", 
                     "'Element:'", "'EntryElement:'", "'Based on:'", "'Value:'", 
                     "'ValueSet:'", "'Includes codes from'", "'Includes codes descending from'", 
                     "'and not descending from'", "'Concept:'", "'Description:'", 
                     "'ref'", "'or'", "'with'", "'is'", "'is type'", "'value is type'", 
                     "'includes'", "'true'", "'false'", "'TBD'", "'TBD#TBD'", 
                     "'boolean'", "'integer'", "'string'", "'decimal'", 
                     "'uri'", "'base64Binary'", "'instant'", "'date'", "'dateTime'", 
                     "'time'", "'code'", "'oid'", "'id'", "'markdown'", 
                     "'unsignedInt'", "'positiveInt'", "'xhtml'", "'code from'", 
                     "'Coding from'", "'CodeableConcept from'", "'units'", 
                     "'Target:'", "'maps to'", "'constrain'", "'to'", "'.'", 
                     "'='", "','", "'*'", "'('", "')'", "'['", "']'", "':'", 
                     "'..'", 'null', 'null', 'null', 'null', 'null', 'null', 
                     'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                     "'\n'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_DATA_ELEMENT", "KW_G_VALUE_SET", 
                      "KW_G_MAP", "KW_NAMESPACE", "KW_USES", "KW_PATH", 
                      "KW_VOCABULARY", "KW_ELEMENT", "KW_ENTRY_ELEMENT", 
                      "KW_BASED_ON", "KW_VALUE", "KW_VALUESET", "KW_INCLUDES_CODES_FROM", 
                      "KW_INCLUDES_CODES_DESCENDING_FROM", "KW_AND_NOT_DESCENDING_FROM", 
                      "KW_CONCEPT", "KW_DESCRIPTION", "KW_REF", "KW_OR", 
                      "KW_WITH", "KW_IS", "KW_IS_TYPE", "KW_VALUE_IS_TYPE", 
                      "KW_INCLUDES", "KW_TRUE", "KW_FALSE", "KW_TBD", "KW_TBD_CODE", 
                      "KW_BOOLEAN", "KW_INTEGER", "KW_STRING", "KW_DECIMAL", 
                      "KW_URI", "KW_BASE64_BINARY", "KW_INSTANT", "KW_DATE", 
                      "KW_DATE_TIME", "KW_TIME", "KW_CODE", "KW_OID", "KW_ID", 
                      "KW_MARKDOWN", "KW_UNSIGNED_INT", "KW_POSITIVE_INT", 
                      "KW_XHTML", "KW_CODE_FROM", "KW_CODING_FROM", "KW_CODEABLECONCEPT_FROM", 
                      "KW_UNITS", "KW_TARGET", "KW_MAPS_TO", "KW_CONSTRAIN", 
                      "KW_TO", "DOT", "EQUAL", "COMMA", "STAR", "OPEN_PAREN", 
                      "CLOSE_PAREN", "OPEN_BRACKET", "CLOSE_BRACKET", "COLON", 
                      "RANGE", "URL", "PATH_URL", "URN_OID", "URN", "CODE", 
                      "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", 
                      "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", "STRING", 
                      "WS", "NEWLINE", "COMMENT", "LINE_COMMENT", "TARGET_PHRASE", 
                      "WS2" ];

var ruleNames =  [ "shr", "dataDefsDoc", "dataDefsHeader", "usesStatement", 
                   "pathDefs", "defaultPathDef", "pathDef", "vocabularyDefs", 
                   "vocabularyDef", "dataDefs", "dataDef", "elementDef", 
                   "elementHeader", "entryDef", "entryHeader", "elementProps", 
                   "elementProp", "values", "value", "uncountedValue", "countedValue", 
                   "valueType", "field", "countedField", "fieldType", "basedOnProp", 
                   "conceptProp", "concepts", "descriptionProp", "valuesetDefsDoc", 
                   "valuesetDefsHeader", "valuesetDefs", "valuesetDef", 
                   "valuesetHeader", "valuesetValues", "valuesetValue", 
                   "valuesetInlineValue", "valuesetDescendingFrom", "valuesetFrom", 
                   "valuesetProps", "valuesetProp", "mappingsDoc", "mappingsHeader", 
                   "targetStatement", "mappingDefs", "mappingDef", "mappingDefHeader", 
                   "mappingRule", "fieldMapping", "source", "sourcePart", 
                   "sourceWord", "cardMapping", "version", "namespace", 
                   "simpleName", "fullyQualifiedName", "simpleOrFQName", 
                   "ref", "code", "fullyQualifiedCode", "codeOrFQCode", 
                   "codeFromVS", "elementWithConstraint", "elementPath", 
                   "elementConstraint", "elementCodeVSConstraint", "elementCodeValueConstraint", 
                   "elementIncludesCodeValueConstraint", "elementBooleanConstraint", 
                   "elementTypeConstraint", "elementWithUnitsConstraint", 
                   "valueset", "primitive", "count", "tbd", "tbdCode" ];

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
SHRParser.KW_GRAMMAR = 1;
SHRParser.KW_G_DATA_ELEMENT = 2;
SHRParser.KW_G_VALUE_SET = 3;
SHRParser.KW_G_MAP = 4;
SHRParser.KW_NAMESPACE = 5;
SHRParser.KW_USES = 6;
SHRParser.KW_PATH = 7;
SHRParser.KW_VOCABULARY = 8;
SHRParser.KW_ELEMENT = 9;
SHRParser.KW_ENTRY_ELEMENT = 10;
SHRParser.KW_BASED_ON = 11;
SHRParser.KW_VALUE = 12;
SHRParser.KW_VALUESET = 13;
SHRParser.KW_INCLUDES_CODES_FROM = 14;
SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM = 15;
SHRParser.KW_AND_NOT_DESCENDING_FROM = 16;
SHRParser.KW_CONCEPT = 17;
SHRParser.KW_DESCRIPTION = 18;
SHRParser.KW_REF = 19;
SHRParser.KW_OR = 20;
SHRParser.KW_WITH = 21;
SHRParser.KW_IS = 22;
SHRParser.KW_IS_TYPE = 23;
SHRParser.KW_VALUE_IS_TYPE = 24;
SHRParser.KW_INCLUDES = 25;
SHRParser.KW_TRUE = 26;
SHRParser.KW_FALSE = 27;
SHRParser.KW_TBD = 28;
SHRParser.KW_TBD_CODE = 29;
SHRParser.KW_BOOLEAN = 30;
SHRParser.KW_INTEGER = 31;
SHRParser.KW_STRING = 32;
SHRParser.KW_DECIMAL = 33;
SHRParser.KW_URI = 34;
SHRParser.KW_BASE64_BINARY = 35;
SHRParser.KW_INSTANT = 36;
SHRParser.KW_DATE = 37;
SHRParser.KW_DATE_TIME = 38;
SHRParser.KW_TIME = 39;
SHRParser.KW_CODE = 40;
SHRParser.KW_OID = 41;
SHRParser.KW_ID = 42;
SHRParser.KW_MARKDOWN = 43;
SHRParser.KW_UNSIGNED_INT = 44;
SHRParser.KW_POSITIVE_INT = 45;
SHRParser.KW_XHTML = 46;
SHRParser.KW_CODE_FROM = 47;
SHRParser.KW_CODING_FROM = 48;
SHRParser.KW_CODEABLECONCEPT_FROM = 49;
SHRParser.KW_UNITS = 50;
SHRParser.KW_TARGET = 51;
SHRParser.KW_MAPS_TO = 52;
SHRParser.KW_CONSTRAIN = 53;
SHRParser.KW_TO = 54;
SHRParser.DOT = 55;
SHRParser.EQUAL = 56;
SHRParser.COMMA = 57;
SHRParser.STAR = 58;
SHRParser.OPEN_PAREN = 59;
SHRParser.CLOSE_PAREN = 60;
SHRParser.OPEN_BRACKET = 61;
SHRParser.CLOSE_BRACKET = 62;
SHRParser.COLON = 63;
SHRParser.RANGE = 64;
SHRParser.URL = 65;
SHRParser.PATH_URL = 66;
SHRParser.URN_OID = 67;
SHRParser.URN = 68;
SHRParser.CODE = 69;
SHRParser.WHOLE_NUMBER = 70;
SHRParser.ALL_CAPS = 71;
SHRParser.UPPER_WORD = 72;
SHRParser.LOWER_WORD = 73;
SHRParser.DOT_SEPARATED_LW = 74;
SHRParser.DOT_SEPARATED_UW = 75;
SHRParser.STRING = 76;
SHRParser.WS = 77;
SHRParser.NEWLINE = 78;
SHRParser.COMMENT = 79;
SHRParser.LINE_COMMENT = 80;
SHRParser.TARGET_PHRASE = 81;
SHRParser.WS2 = 82;

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
SHRParser.RULE_field = 22;
SHRParser.RULE_countedField = 23;
SHRParser.RULE_fieldType = 24;
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
SHRParser.RULE_mappingsDoc = 41;
SHRParser.RULE_mappingsHeader = 42;
SHRParser.RULE_targetStatement = 43;
SHRParser.RULE_mappingDefs = 44;
SHRParser.RULE_mappingDef = 45;
SHRParser.RULE_mappingDefHeader = 46;
SHRParser.RULE_mappingRule = 47;
SHRParser.RULE_fieldMapping = 48;
SHRParser.RULE_source = 49;
SHRParser.RULE_sourcePart = 50;
SHRParser.RULE_sourceWord = 51;
SHRParser.RULE_cardMapping = 52;
SHRParser.RULE_version = 53;
SHRParser.RULE_namespace = 54;
SHRParser.RULE_simpleName = 55;
SHRParser.RULE_fullyQualifiedName = 56;
SHRParser.RULE_simpleOrFQName = 57;
SHRParser.RULE_ref = 58;
SHRParser.RULE_code = 59;
SHRParser.RULE_fullyQualifiedCode = 60;
SHRParser.RULE_codeOrFQCode = 61;
SHRParser.RULE_codeFromVS = 62;
SHRParser.RULE_elementWithConstraint = 63;
SHRParser.RULE_elementPath = 64;
SHRParser.RULE_elementConstraint = 65;
SHRParser.RULE_elementCodeVSConstraint = 66;
SHRParser.RULE_elementCodeValueConstraint = 67;
SHRParser.RULE_elementIncludesCodeValueConstraint = 68;
SHRParser.RULE_elementBooleanConstraint = 69;
SHRParser.RULE_elementTypeConstraint = 70;
SHRParser.RULE_elementWithUnitsConstraint = 71;
SHRParser.RULE_valueset = 72;
SHRParser.RULE_primitive = 73;
SHRParser.RULE_count = 74;
SHRParser.RULE_tbd = 75;
SHRParser.RULE_tbdCode = 76;

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

ShrContext.prototype.mappingsDoc = function() {
    return this.getTypedRuleContext(MappingsDocContext,0);
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
        this.state = 157;
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 154;
            this.dataDefsDoc();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 155;
            this.valuesetDefsDoc();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 156;
            this.mappingsDoc();
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

DataDefsDocContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
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
        this.state = 159;
        this.dataDefsHeader();
        this.state = 161;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_DESCRIPTION) {
            this.state = 160;
            this.descriptionProp();
        }

        this.state = 164;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_USES) {
            this.state = 163;
            this.usesStatement();
        }

        this.state = 167;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_PATH) {
            this.state = 166;
            this.pathDefs();
        }

        this.state = 170;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VOCABULARY) {
            this.state = 169;
            this.vocabularyDefs();
        }

        this.state = 172;
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

DataDefsHeaderContext.prototype.KW_GRAMMAR = function() {
    return this.getToken(SHRParser.KW_GRAMMAR, 0);
};

DataDefsHeaderContext.prototype.KW_G_DATA_ELEMENT = function() {
    return this.getToken(SHRParser.KW_G_DATA_ELEMENT, 0);
};

DataDefsHeaderContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

DataDefsHeaderContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRParser.KW_NAMESPACE, 0);
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
        this.state = 174;
        this.match(SHRParser.KW_GRAMMAR);
        this.state = 175;
        this.match(SHRParser.KW_G_DATA_ELEMENT);
        this.state = 176;
        this.version();
        this.state = 177;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 178;
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
        this.state = 180;
        this.match(SHRParser.KW_USES);
        this.state = 181;
        this.namespace();
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 182;
            this.match(SHRParser.COMMA);
            this.state = 183;
            this.namespace();
            this.state = 188;
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
        this.state = 204;
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 189;
            this.defaultPathDef();
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_PATH) {
                this.state = 190;
                this.pathDef();
                this.state = 195;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 197;
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 196;
                this.defaultPathDef();

            }
            this.state = 200; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 199;
                this.pathDef();
                this.state = 202; 
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
        this.state = 206;
        this.match(SHRParser.KW_PATH);
        this.state = 207;
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
        this.state = 209;
        this.match(SHRParser.KW_PATH);
        this.state = 210;
        this.match(SHRParser.ALL_CAPS);
        this.state = 211;
        this.match(SHRParser.EQUAL);
        this.state = 212;
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
        this.state = 215; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 214;
            this.vocabularyDef();
            this.state = 217; 
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

VocabularyDefContext.prototype.URN = function() {
    return this.getToken(SHRParser.URN, 0);
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
        this.state = 219;
        this.match(SHRParser.KW_VOCABULARY);
        this.state = 220;
        this.match(SHRParser.ALL_CAPS);
        this.state = 221;
        this.match(SHRParser.EQUAL);
        this.state = 222;
        _la = this._input.LA(1);
        if(!(((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (SHRParser.URL - 65)) | (1 << (SHRParser.URN_OID - 65)) | (1 << (SHRParser.URN - 65)))) !== 0))) {
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
        this.state = 227;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_ELEMENT || _la===SHRParser.KW_ENTRY_ELEMENT) {
            this.state = 224;
            this.dataDef();
            this.state = 229;
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
        this.state = 232;
        switch(this._input.LA(1)) {
        case SHRParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 230;
            this.elementDef();
            break;
        case SHRParser.KW_ENTRY_ELEMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 231;
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
        this.state = 234;
        this.elementHeader();
        this.state = 236;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BASED_ON) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 235;
            this.elementProps();
        }

        this.state = 238;
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
        this.state = 240;
        this.match(SHRParser.KW_ELEMENT);
        this.state = 241;
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
        this.state = 243;
        this.entryHeader();
        this.state = 245;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BASED_ON) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 244;
            this.elementProps();
        }

        this.state = 247;
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
        this.state = 249;
        this.match(SHRParser.KW_ENTRY_ELEMENT);
        this.state = 250;
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
        this.state = 253; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 252;
            this.elementProp();
            this.state = 255; 
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
        this.state = 260;
        switch(this._input.LA(1)) {
        case SHRParser.KW_BASED_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 257;
            this.basedOnProp();
            break;
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 258;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 259;
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
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VALUE) {
            this.state = 262;
            this.value();
        }

        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (SHRParser.KW_REF - 19)) | (1 << (SHRParser.KW_TBD - 19)) | (1 << (SHRParser.KW_BOOLEAN - 19)) | (1 << (SHRParser.KW_INTEGER - 19)) | (1 << (SHRParser.KW_STRING - 19)) | (1 << (SHRParser.KW_DECIMAL - 19)) | (1 << (SHRParser.KW_URI - 19)) | (1 << (SHRParser.KW_BASE64_BINARY - 19)) | (1 << (SHRParser.KW_INSTANT - 19)) | (1 << (SHRParser.KW_DATE - 19)) | (1 << (SHRParser.KW_DATE_TIME - 19)) | (1 << (SHRParser.KW_TIME - 19)) | (1 << (SHRParser.KW_CODE - 19)) | (1 << (SHRParser.KW_OID - 19)) | (1 << (SHRParser.KW_ID - 19)) | (1 << (SHRParser.KW_MARKDOWN - 19)) | (1 << (SHRParser.KW_UNSIGNED_INT - 19)) | (1 << (SHRParser.KW_POSITIVE_INT - 19)) | (1 << (SHRParser.KW_XHTML - 19)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SHRParser.OPEN_PAREN - 59)) | (1 << (SHRParser.WHOLE_NUMBER - 59)) | (1 << (SHRParser.ALL_CAPS - 59)) | (1 << (SHRParser.UPPER_WORD - 59)) | (1 << (SHRParser.DOT_SEPARATED_UW - 59)))) !== 0)) {
            this.state = 265;
            this.field();
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
        this.state = 271;
        this.match(SHRParser.KW_VALUE);
        this.state = 274;
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
        case SHRParser.KW_XHTML:
        case SHRParser.KW_CODE_FROM:
        case SHRParser.KW_CODING_FROM:
        case SHRParser.KW_CODEABLECONCEPT_FROM:
        case SHRParser.OPEN_PAREN:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 272;
            this.uncountedValue();
            break;
        case SHRParser.WHOLE_NUMBER:
            this.state = 273;
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
        this.state = 295;
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
        case SHRParser.KW_XHTML:
        case SHRParser.KW_CODE_FROM:
        case SHRParser.KW_CODING_FROM:
        case SHRParser.KW_CODEABLECONCEPT_FROM:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 276;
            this.valueType();
            this.state = 281;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 277;
                this.match(SHRParser.KW_OR);
                this.state = 278;
                this.valueType();
                this.state = 283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case SHRParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 284;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 285;
            this.valueType();
            this.state = 290;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 286;
                this.match(SHRParser.KW_OR);
                this.state = 287;
                this.valueType();
                this.state = 292;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 293;
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
        this.state = 312;
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 297;
            this.count();
            this.state = 298;
            this.valueType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 300;
            this.count();
            this.state = 301;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 302;
            this.valueType();
            this.state = 307;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 303;
                this.match(SHRParser.KW_OR);
                this.state = 304;
                this.valueType();
                this.state = 309;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 310;
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

ValueTypeContext.prototype.elementWithConstraint = function() {
    return this.getTypedRuleContext(ElementWithConstraintContext,0);
};

ValueTypeContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
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
        this.state = 320;
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 314;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 315;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 316;
            this.primitive();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 317;
            this.codeFromVS();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 318;
            this.elementWithConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 319;
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
    this.ruleIndex = SHRParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.countedField = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CountedFieldContext);
    } else {
        return this.getTypedRuleContext(CountedFieldContext,i);
    }
};

FieldContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitField(this);
	}
};

FieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.FieldContext = FieldContext;

SHRParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SHRParser.RULE_field);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 322;
        this.countedField();
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_OR) {
            this.state = 323;
            this.match(SHRParser.KW_OR);
            this.state = 324;
            this.countedField();
            this.state = 329;
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

function CountedFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedField;
    return this;
}

CountedFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedFieldContext.prototype.constructor = CountedFieldContext;

CountedFieldContext.prototype.fieldType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldTypeContext);
    } else {
        return this.getTypedRuleContext(FieldTypeContext,i);
    }
};

CountedFieldContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRParser.OPEN_PAREN, 0);
};

CountedFieldContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRParser.CLOSE_PAREN, 0);
};

CountedFieldContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

CountedFieldContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


CountedFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedField(this);
	}
};

CountedFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedField(this);
	}
};

CountedFieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedFieldContext = CountedFieldContext;

SHRParser.prototype.countedField = function() {

    var localctx = new CountedFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SHRParser.RULE_countedField);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 331;
        _la = this._input.LA(1);
        if(_la===SHRParser.WHOLE_NUMBER) {
            this.state = 330;
            this.count();
        }

        this.state = 345;
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
        case SHRParser.KW_XHTML:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 333;
            this.fieldType();
            break;
        case SHRParser.OPEN_PAREN:
            this.state = 334;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 335;
            this.fieldType();
            this.state = 340;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 336;
                this.match(SHRParser.KW_OR);
                this.state = 337;
                this.fieldType();
                this.state = 342;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 343;
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

function FieldTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_fieldType;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterFieldType(this);
	}
};

FieldTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitFieldType(this);
	}
};

FieldTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitFieldType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.FieldTypeContext = FieldTypeContext;

SHRParser.prototype.fieldType = function() {

    var localctx = new FieldTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SHRParser.RULE_fieldType);
    try {
        this.state = 351;
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 347;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 348;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 349;
            this.elementWithConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 350;
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

BasedOnPropContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
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
        this.state = 353;
        this.match(SHRParser.KW_BASED_ON);
        this.state = 356;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 354;
            this.simpleOrFQName();
            break;
        case SHRParser.KW_TBD:
            this.state = 355;
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
    this.ruleIndex = SHRParser.RULE_conceptProp;
    return this;
}

ConceptPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptPropContext.prototype.constructor = ConceptPropContext;

ConceptPropContext.prototype.KW_CONCEPT = function() {
    return this.getToken(SHRParser.KW_CONCEPT, 0);
};

ConceptPropContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
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
        this.state = 358;
        this.match(SHRParser.KW_CONCEPT);
        this.state = 361;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD:
            this.state = 359;
            this.tbd();
            break;
        case SHRParser.KW_TBD_CODE:
        case SHRParser.ALL_CAPS:
            this.state = 360;
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
        this.state = 363;
        this.fullyQualifiedCode();
        this.state = 368;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 364;
            this.match(SHRParser.COMMA);
            this.state = 365;
            this.fullyQualifiedCode();
            this.state = 370;
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
        this.state = 371;
        this.match(SHRParser.KW_DESCRIPTION);
        this.state = 372;
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
        this.state = 374;
        this.valuesetDefsHeader();
        this.state = 376;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_USES) {
            this.state = 375;
            this.usesStatement();
        }

        this.state = 379;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_PATH) {
            this.state = 378;
            this.pathDefs();
        }

        this.state = 382;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VOCABULARY) {
            this.state = 381;
            this.vocabularyDefs();
        }

        this.state = 384;
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

ValuesetDefsHeaderContext.prototype.KW_GRAMMAR = function() {
    return this.getToken(SHRParser.KW_GRAMMAR, 0);
};

ValuesetDefsHeaderContext.prototype.KW_G_VALUE_SET = function() {
    return this.getToken(SHRParser.KW_G_VALUE_SET, 0);
};

ValuesetDefsHeaderContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

ValuesetDefsHeaderContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRParser.KW_NAMESPACE, 0);
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
        this.state = 386;
        this.match(SHRParser.KW_GRAMMAR);
        this.state = 387;
        this.match(SHRParser.KW_G_VALUE_SET);
        this.state = 388;
        this.version();
        this.state = 389;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 390;
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
        this.state = 395;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_VALUESET) {
            this.state = 392;
            this.valuesetDef();
            this.state = 397;
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
        this.state = 398;
        this.valuesetHeader();
        this.state = 400;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_CONCEPT || _la===SHRParser.KW_DESCRIPTION) {
            this.state = 399;
            this.valuesetProps();
        }

        this.state = 403;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_INCLUDES_CODES_FROM) | (1 << SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM) | (1 << SHRParser.KW_TBD_CODE))) !== 0) || _la===SHRParser.CODE || _la===SHRParser.ALL_CAPS) {
            this.state = 402;
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
        this.state = 405;
        this.match(SHRParser.KW_VALUESET);
        this.state = 409;
        switch(this._input.LA(1)) {
        case SHRParser.URL:
            this.state = 406;
            this.match(SHRParser.URL);
            break;
        case SHRParser.URN_OID:
            this.state = 407;
            this.match(SHRParser.URN_OID);
            break;
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.state = 408;
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
        this.state = 412; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 411;
            this.valuesetValue();
            this.state = 414; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_INCLUDES_CODES_FROM) | (1 << SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM) | (1 << SHRParser.KW_TBD_CODE))) !== 0) || _la===SHRParser.CODE || _la===SHRParser.ALL_CAPS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
        this.state = 420;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD_CODE:
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 416;
            this.fullyQualifiedCode();
            break;
        case SHRParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 417;
            this.valuesetInlineValue();
            break;
        case SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM:
            this.enterOuterAlt(localctx, 3);
            this.state = 418;
            this.valuesetDescendingFrom();
            break;
        case SHRParser.KW_INCLUDES_CODES_FROM:
            this.enterOuterAlt(localctx, 4);
            this.state = 419;
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
        this.state = 422;
        this.match(SHRParser.CODE);
        this.state = 424;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 423;
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
        this.state = 426;
        this.match(SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM);
        this.state = 427;
        this.fullyQualifiedCode();
        this.state = 432;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_AND_NOT_DESCENDING_FROM) {
            this.state = 428;
            this.match(SHRParser.KW_AND_NOT_DESCENDING_FROM);
            this.state = 429;
            this.fullyQualifiedCode();
            this.state = 434;
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
        this.state = 435;
        this.match(SHRParser.KW_INCLUDES_CODES_FROM);
        this.state = 436;
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
        this.state = 439; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 438;
            this.valuesetProp();
            this.state = 441; 
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
        this.state = 445;
        switch(this._input.LA(1)) {
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 1);
            this.state = 443;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 444;
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

function MappingsDocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_mappingsDoc;
    return this;
}

MappingsDocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingsDocContext.prototype.constructor = MappingsDocContext;

MappingsDocContext.prototype.mappingsHeader = function() {
    return this.getTypedRuleContext(MappingsHeaderContext,0);
};

MappingsDocContext.prototype.targetStatement = function() {
    return this.getTypedRuleContext(TargetStatementContext,0);
};

MappingsDocContext.prototype.mappingDefs = function() {
    return this.getTypedRuleContext(MappingDefsContext,0);
};

MappingsDocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterMappingsDoc(this);
	}
};

MappingsDocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitMappingsDoc(this);
	}
};

MappingsDocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitMappingsDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.MappingsDocContext = MappingsDocContext;

SHRParser.prototype.mappingsDoc = function() {

    var localctx = new MappingsDocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SHRParser.RULE_mappingsDoc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 447;
        this.mappingsHeader();
        this.state = 448;
        this.targetStatement();
        this.state = 449;
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

function MappingsHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_mappingsHeader;
    return this;
}

MappingsHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingsHeaderContext.prototype.constructor = MappingsHeaderContext;

MappingsHeaderContext.prototype.KW_GRAMMAR = function() {
    return this.getToken(SHRParser.KW_GRAMMAR, 0);
};

MappingsHeaderContext.prototype.KW_G_MAP = function() {
    return this.getToken(SHRParser.KW_G_MAP, 0);
};

MappingsHeaderContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

MappingsHeaderContext.prototype.KW_NAMESPACE = function() {
    return this.getToken(SHRParser.KW_NAMESPACE, 0);
};

MappingsHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

MappingsHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterMappingsHeader(this);
	}
};

MappingsHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitMappingsHeader(this);
	}
};

MappingsHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitMappingsHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.MappingsHeaderContext = MappingsHeaderContext;

SHRParser.prototype.mappingsHeader = function() {

    var localctx = new MappingsHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SHRParser.RULE_mappingsHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        this.match(SHRParser.KW_GRAMMAR);
        this.state = 452;
        this.match(SHRParser.KW_G_MAP);
        this.state = 453;
        this.version();
        this.state = 454;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 455;
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
    this.ruleIndex = SHRParser.RULE_targetStatement;
    return this;
}

TargetStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetStatementContext.prototype.constructor = TargetStatementContext;

TargetStatementContext.prototype.KW_TARGET = function() {
    return this.getToken(SHRParser.KW_TARGET, 0);
};

TargetStatementContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

TargetStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterTargetStatement(this);
	}
};

TargetStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitTargetStatement(this);
	}
};

TargetStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitTargetStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.TargetStatementContext = TargetStatementContext;

SHRParser.prototype.targetStatement = function() {

    var localctx = new TargetStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SHRParser.RULE_targetStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 457;
        this.match(SHRParser.KW_TARGET);
        this.state = 458;
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
    this.ruleIndex = SHRParser.RULE_mappingDefs;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterMappingDefs(this);
	}
};

MappingDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitMappingDefs(this);
	}
};

MappingDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitMappingDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.MappingDefsContext = MappingDefsContext;

SHRParser.prototype.mappingDefs = function() {

    var localctx = new MappingDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SHRParser.RULE_mappingDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.ALL_CAPS || _la===SHRParser.UPPER_WORD) {
            this.state = 460;
            this.mappingDef();
            this.state = 465;
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
    this.ruleIndex = SHRParser.RULE_mappingDef;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterMappingDef(this);
	}
};

MappingDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitMappingDef(this);
	}
};

MappingDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitMappingDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.MappingDefContext = MappingDefContext;

SHRParser.prototype.mappingDef = function() {

    var localctx = new MappingDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SHRParser.RULE_mappingDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 466;
        this.mappingDefHeader();
        this.state = 470;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 467;
                this.mappingRule(); 
            }
            this.state = 472;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
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
    this.ruleIndex = SHRParser.RULE_mappingDefHeader;
    return this;
}

MappingDefHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingDefHeaderContext.prototype.constructor = MappingDefHeaderContext;

MappingDefHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

MappingDefHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

MappingDefHeaderContext.prototype.KW_MAPS_TO = function() {
    return this.getToken(SHRParser.KW_MAPS_TO, 0);
};

MappingDefHeaderContext.prototype.TARGET_PHRASE = function() {
    return this.getToken(SHRParser.TARGET_PHRASE, 0);
};

MappingDefHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterMappingDefHeader(this);
	}
};

MappingDefHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitMappingDefHeader(this);
	}
};

MappingDefHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitMappingDefHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.MappingDefHeaderContext = MappingDefHeaderContext;

SHRParser.prototype.mappingDefHeader = function() {

    var localctx = new MappingDefHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SHRParser.RULE_mappingDefHeader);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 473;
        this.simpleName();
        this.state = 476;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_MAPS_TO) {
            this.state = 474;
            this.match(SHRParser.KW_MAPS_TO);
            this.state = 475;
            this.match(SHRParser.TARGET_PHRASE);
        }

        this.state = 478;
        this.match(SHRParser.COLON);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = SHRParser.RULE_mappingRule;
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

MappingRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterMappingRule(this);
	}
};

MappingRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitMappingRule(this);
	}
};

MappingRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitMappingRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.MappingRuleContext = MappingRuleContext;

SHRParser.prototype.mappingRule = function() {

    var localctx = new MappingRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SHRParser.RULE_mappingRule);
    try {
        this.state = 482;
        switch(this._input.LA(1)) {
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
        case SHRParser.KW_XHTML:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 480;
            this.fieldMapping();
            break;
        case SHRParser.KW_CONSTRAIN:
            this.enterOuterAlt(localctx, 2);
            this.state = 481;
            this.cardMapping();
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
    this.ruleIndex = SHRParser.RULE_fieldMapping;
    return this;
}

FieldMappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldMappingContext.prototype.constructor = FieldMappingContext;

FieldMappingContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

FieldMappingContext.prototype.KW_MAPS_TO = function() {
    return this.getToken(SHRParser.KW_MAPS_TO, 0);
};

FieldMappingContext.prototype.TARGET_PHRASE = function() {
    return this.getToken(SHRParser.TARGET_PHRASE, 0);
};

FieldMappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterFieldMapping(this);
	}
};

FieldMappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitFieldMapping(this);
	}
};

FieldMappingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitFieldMapping(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.FieldMappingContext = FieldMappingContext;

SHRParser.prototype.fieldMapping = function() {

    var localctx = new FieldMappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SHRParser.RULE_fieldMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 484;
        this.source();
        this.state = 485;
        this.match(SHRParser.KW_MAPS_TO);
        this.state = 486;
        this.match(SHRParser.TARGET_PHRASE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = SHRParser.RULE_source;
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
        return this.getTokens(SHRParser.DOT);
    } else {
        return this.getToken(SHRParser.DOT, i);
    }
};


SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSource(this);
	}
};

SourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SourceContext = SourceContext;

SHRParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, SHRParser.RULE_source);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 488;
        this.sourcePart();
        this.state = 493;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.DOT) {
            this.state = 489;
            this.match(SHRParser.DOT);
            this.state = 490;
            this.sourcePart();
            this.state = 495;
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
    this.ruleIndex = SHRParser.RULE_sourcePart;
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
        return this.getTokens(SHRParser.OPEN_BRACKET);
    } else {
        return this.getToken(SHRParser.OPEN_BRACKET, i);
    }
};


SourcePartContext.prototype.CLOSE_BRACKET = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.CLOSE_BRACKET);
    } else {
        return this.getToken(SHRParser.CLOSE_BRACKET, i);
    }
};


SourcePartContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSourcePart(this);
	}
};

SourcePartContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSourcePart(this);
	}
};

SourcePartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSourcePart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SourcePartContext = SourcePartContext;

SHRParser.prototype.sourcePart = function() {

    var localctx = new SourcePartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, SHRParser.RULE_sourcePart);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 496;
        this.sourceWord();
        this.state = 503;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.OPEN_BRACKET) {
            this.state = 497;
            this.match(SHRParser.OPEN_BRACKET);
            this.state = 498;
            this.sourceWord();
            this.state = 499;
            this.match(SHRParser.CLOSE_BRACKET);
            this.state = 505;
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
    this.ruleIndex = SHRParser.RULE_sourceWord;
    return this;
}

SourceWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceWordContext.prototype.constructor = SourceWordContext;

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
    if(listener instanceof SHRParserListener ) {
        listener.enterSourceWord(this);
	}
};

SourceWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSourceWord(this);
	}
};

SourceWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSourceWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SourceWordContext = SourceWordContext;

SHRParser.prototype.sourceWord = function() {

    var localctx = new SourceWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, SHRParser.RULE_sourceWord);
    try {
        this.state = 509;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 506;
            this.simpleOrFQName();
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
        case SHRParser.KW_XHTML:
            this.enterOuterAlt(localctx, 2);
            this.state = 507;
            this.primitive();
            break;
        case SHRParser.KW_TBD:
            this.enterOuterAlt(localctx, 3);
            this.state = 508;
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
    this.ruleIndex = SHRParser.RULE_cardMapping;
    return this;
}

CardMappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CardMappingContext.prototype.constructor = CardMappingContext;

CardMappingContext.prototype.KW_CONSTRAIN = function() {
    return this.getToken(SHRParser.KW_CONSTRAIN, 0);
};

CardMappingContext.prototype.TARGET_PHRASE = function() {
    return this.getToken(SHRParser.TARGET_PHRASE, 0);
};

CardMappingContext.prototype.KW_TO = function() {
    return this.getToken(SHRParser.KW_TO, 0);
};

CardMappingContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

CardMappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCardMapping(this);
	}
};

CardMappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCardMapping(this);
	}
};

CardMappingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCardMapping(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CardMappingContext = CardMappingContext;

SHRParser.prototype.cardMapping = function() {

    var localctx = new CardMappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, SHRParser.RULE_cardMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 511;
        this.match(SHRParser.KW_CONSTRAIN);
        this.state = 512;
        this.match(SHRParser.TARGET_PHRASE);
        this.state = 513;
        this.match(SHRParser.KW_TO);
        this.state = 514;
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

function VersionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRParser.WHOLE_NUMBER, i);
    }
};


VersionContext.prototype.DOT = function() {
    return this.getToken(SHRParser.DOT, 0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitVersion(this);
	}
};

VersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.VersionContext = VersionContext;

SHRParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, SHRParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 516;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 517;
        this.match(SHRParser.DOT);
        this.state = 518;
        this.match(SHRParser.WHOLE_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.enterRule(localctx, 108, SHRParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 520;
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
    this.enterRule(localctx, 110, SHRParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 522;
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
    this.enterRule(localctx, 112, SHRParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 524;
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
    this.enterRule(localctx, 114, SHRParser.RULE_simpleOrFQName);
    try {
        this.state = 528;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 526;
            this.simpleName();
            break;
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 527;
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
    this.enterRule(localctx, 116, SHRParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530;
        this.match(SHRParser.KW_REF);
        this.state = 531;
        this.match(SHRParser.OPEN_PAREN);
        this.state = 532;
        this.simpleOrFQName();
        this.state = 533;
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
    this.enterRule(localctx, 118, SHRParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 535;
        this.match(SHRParser.CODE);
        this.state = 537;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 536;
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

FullyQualifiedCodeContext.prototype.tbdCode = function() {
    return this.getTypedRuleContext(TbdCodeContext,0);
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
    this.enterRule(localctx, 120, SHRParser.RULE_fullyQualifiedCode);
    try {
        this.state = 542;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 539;
            this.match(SHRParser.ALL_CAPS);
            this.state = 540;
            this.code();
            break;
        case SHRParser.KW_TBD_CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 541;
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
    this.ruleIndex = SHRParser.RULE_codeOrFQCode;
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
    if(listener instanceof SHRParserListener ) {
        listener.enterCodeOrFQCode(this);
	}
};

CodeOrFQCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCodeOrFQCode(this);
	}
};

CodeOrFQCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCodeOrFQCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CodeOrFQCodeContext = CodeOrFQCodeContext;

SHRParser.prototype.codeOrFQCode = function() {

    var localctx = new CodeOrFQCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, SHRParser.RULE_codeOrFQCode);
    try {
        this.state = 546;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD_CODE:
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 544;
            this.fullyQualifiedCode();
            break;
        case SHRParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 545;
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

CodeFromVSContext.prototype.KW_CODEABLECONCEPT_FROM = function() {
    return this.getToken(SHRParser.KW_CODEABLECONCEPT_FROM, 0);
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
    this.enterRule(localctx, 124, SHRParser.RULE_codeFromVS);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 548;
        _la = this._input.LA(1);
        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (SHRParser.KW_CODE_FROM - 47)) | (1 << (SHRParser.KW_CODING_FROM - 47)) | (1 << (SHRParser.KW_CODEABLECONCEPT_FROM - 47)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 549;
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
    this.enterRule(localctx, 126, SHRParser.RULE_elementWithConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 554;
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        switch(la_) {
        case 1:
            this.state = 551;
            this.simpleOrFQName();
            break;

        case 2:
            this.state = 552;
            this.elementPath();
            break;

        case 3:
            this.state = 553;
            this.primitive();
            break;

        }
        this.state = 557;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_WITH) | (1 << SHRParser.KW_IS) | (1 << SHRParser.KW_IS_TYPE) | (1 << SHRParser.KW_VALUE_IS_TYPE) | (1 << SHRParser.KW_INCLUDES))) !== 0)) {
            this.state = 556;
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
    this.ruleIndex = SHRParser.RULE_elementPath;
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
        return this.getTokens(SHRParser.DOT);
    } else {
        return this.getToken(SHRParser.DOT, i);
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
    if(listener instanceof SHRParserListener ) {
        listener.enterElementPath(this);
	}
};

ElementPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementPath(this);
	}
};

ElementPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementPathContext = ElementPathContext;

SHRParser.prototype.elementPath = function() {

    var localctx = new ElementPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, SHRParser.RULE_elementPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 559;
        this.simpleOrFQName();
        this.state = 579;
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        switch(la_) {
        case 1:
            this.state = 562; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 560;
            		this.match(SHRParser.DOT);
            		this.state = 561;
            		this.simpleName();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 564; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,60, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 568;
            _la = this._input.LA(1);
            if(_la===SHRParser.DOT) {
                this.state = 566;
                this.match(SHRParser.DOT);
                this.state = 567;
                this.primitive();
            }

            break;

        case 2:
            this.state = 574;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,62,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 570;
                    this.match(SHRParser.DOT);
                    this.state = 571;
                    this.simpleName(); 
                }
                this.state = 576;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,62,this._ctx);
            }

            this.state = 577;
            this.match(SHRParser.DOT);
            this.state = 578;
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

ElementConstraintContext.prototype.elementIncludesCodeValueConstraint = function() {
    return this.getTypedRuleContext(ElementIncludesCodeValueConstraintContext,0);
};

ElementConstraintContext.prototype.elementBooleanConstraint = function() {
    return this.getTypedRuleContext(ElementBooleanConstraintContext,0);
};

ElementConstraintContext.prototype.elementTypeConstraint = function() {
    return this.getTypedRuleContext(ElementTypeConstraintContext,0);
};

ElementConstraintContext.prototype.elementWithUnitsConstraint = function() {
    return this.getTypedRuleContext(ElementWithUnitsConstraintContext,0);
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
    this.enterRule(localctx, 130, SHRParser.RULE_elementConstraint);
    try {
        this.state = 587;
        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 581;
            this.elementCodeVSConstraint();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 582;
            this.elementCodeValueConstraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 583;
            this.elementIncludesCodeValueConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 584;
            this.elementBooleanConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 585;
            this.elementTypeConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 586;
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
    this.enterRule(localctx, 132, SHRParser.RULE_elementCodeVSConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 589;
        this.match(SHRParser.KW_WITH);
        this.state = 590;
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

ElementCodeValueConstraintContext.prototype.codeOrFQCode = function() {
    return this.getTypedRuleContext(CodeOrFQCodeContext,0);
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
    this.enterRule(localctx, 134, SHRParser.RULE_elementCodeValueConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 592;
        this.match(SHRParser.KW_IS);
        this.state = 593;
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
    this.ruleIndex = SHRParser.RULE_elementIncludesCodeValueConstraint;
    return this;
}

ElementIncludesCodeValueConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementIncludesCodeValueConstraintContext.prototype.constructor = ElementIncludesCodeValueConstraintContext;

ElementIncludesCodeValueConstraintContext.prototype.KW_INCLUDES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_INCLUDES);
    } else {
        return this.getToken(SHRParser.KW_INCLUDES, i);
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
    if(listener instanceof SHRParserListener ) {
        listener.enterElementIncludesCodeValueConstraint(this);
	}
};

ElementIncludesCodeValueConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementIncludesCodeValueConstraint(this);
	}
};

ElementIncludesCodeValueConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementIncludesCodeValueConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementIncludesCodeValueConstraintContext = ElementIncludesCodeValueConstraintContext;

SHRParser.prototype.elementIncludesCodeValueConstraint = function() {

    var localctx = new ElementIncludesCodeValueConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 136, SHRParser.RULE_elementIncludesCodeValueConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 597; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 595;
            this.match(SHRParser.KW_INCLUDES);
            this.state = 596;
            this.codeOrFQCode();
            this.state = 599; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.KW_INCLUDES);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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
    this.ruleIndex = SHRParser.RULE_elementBooleanConstraint;
    return this;
}

ElementBooleanConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementBooleanConstraintContext.prototype.constructor = ElementBooleanConstraintContext;

ElementBooleanConstraintContext.prototype.KW_IS = function() {
    return this.getToken(SHRParser.KW_IS, 0);
};

ElementBooleanConstraintContext.prototype.KW_TRUE = function() {
    return this.getToken(SHRParser.KW_TRUE, 0);
};

ElementBooleanConstraintContext.prototype.KW_FALSE = function() {
    return this.getToken(SHRParser.KW_FALSE, 0);
};

ElementBooleanConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementBooleanConstraint(this);
	}
};

ElementBooleanConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementBooleanConstraint(this);
	}
};

ElementBooleanConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementBooleanConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementBooleanConstraintContext = ElementBooleanConstraintContext;

SHRParser.prototype.elementBooleanConstraint = function() {

    var localctx = new ElementBooleanConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 138, SHRParser.RULE_elementBooleanConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 601;
        this.match(SHRParser.KW_IS);
        this.state = 602;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.KW_TRUE || _la===SHRParser.KW_FALSE)) {
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
    this.ruleIndex = SHRParser.RULE_elementTypeConstraint;
    return this;
}

ElementTypeConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementTypeConstraintContext.prototype.constructor = ElementTypeConstraintContext;

ElementTypeConstraintContext.prototype.KW_IS_TYPE = function() {
    return this.getToken(SHRParser.KW_IS_TYPE, 0);
};

ElementTypeConstraintContext.prototype.KW_VALUE_IS_TYPE = function() {
    return this.getToken(SHRParser.KW_VALUE_IS_TYPE, 0);
};

ElementTypeConstraintContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementTypeConstraintContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
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
    this.enterRule(localctx, 140, SHRParser.RULE_elementTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 604;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.KW_IS_TYPE || _la===SHRParser.KW_VALUE_IS_TYPE)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 607;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 605;
            this.simpleOrFQName();
            break;
        case SHRParser.KW_TBD:
            this.state = 606;
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

function ElementWithUnitsConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_elementWithUnitsConstraint;
    return this;
}

ElementWithUnitsConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementWithUnitsConstraintContext.prototype.constructor = ElementWithUnitsConstraintContext;

ElementWithUnitsConstraintContext.prototype.KW_WITH = function() {
    return this.getToken(SHRParser.KW_WITH, 0);
};

ElementWithUnitsConstraintContext.prototype.KW_UNITS = function() {
    return this.getToken(SHRParser.KW_UNITS, 0);
};

ElementWithUnitsConstraintContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

ElementWithUnitsConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementWithUnitsConstraint(this);
	}
};

ElementWithUnitsConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementWithUnitsConstraint(this);
	}
};

ElementWithUnitsConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementWithUnitsConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementWithUnitsConstraintContext = ElementWithUnitsConstraintContext;

SHRParser.prototype.elementWithUnitsConstraint = function() {

    var localctx = new ElementWithUnitsConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 142, SHRParser.RULE_elementWithUnitsConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 609;
        this.match(SHRParser.KW_WITH);
        this.state = 610;
        this.match(SHRParser.KW_UNITS);
        this.state = 611;
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

ValuesetContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
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
    this.enterRule(localctx, 144, SHRParser.RULE_valueset);
    try {
        this.state = 618;
        switch(this._input.LA(1)) {
        case SHRParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 613;
            this.match(SHRParser.URL);
            break;
        case SHRParser.PATH_URL:
            this.enterOuterAlt(localctx, 2);
            this.state = 614;
            this.match(SHRParser.PATH_URL);
            break;
        case SHRParser.URN_OID:
            this.enterOuterAlt(localctx, 3);
            this.state = 615;
            this.match(SHRParser.URN_OID);
            break;
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 4);
            this.state = 616;
            this.simpleName();
            break;
        case SHRParser.KW_TBD:
            this.enterOuterAlt(localctx, 5);
            this.state = 617;
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

PrimitiveContext.prototype.KW_XHTML = function() {
    return this.getToken(SHRParser.KW_XHTML, 0);
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
    this.enterRule(localctx, 146, SHRParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 620;
        _la = this._input.LA(1);
        if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (SHRParser.KW_BOOLEAN - 30)) | (1 << (SHRParser.KW_INTEGER - 30)) | (1 << (SHRParser.KW_STRING - 30)) | (1 << (SHRParser.KW_DECIMAL - 30)) | (1 << (SHRParser.KW_URI - 30)) | (1 << (SHRParser.KW_BASE64_BINARY - 30)) | (1 << (SHRParser.KW_INSTANT - 30)) | (1 << (SHRParser.KW_DATE - 30)) | (1 << (SHRParser.KW_DATE_TIME - 30)) | (1 << (SHRParser.KW_TIME - 30)) | (1 << (SHRParser.KW_CODE - 30)) | (1 << (SHRParser.KW_OID - 30)) | (1 << (SHRParser.KW_ID - 30)) | (1 << (SHRParser.KW_MARKDOWN - 30)) | (1 << (SHRParser.KW_UNSIGNED_INT - 30)) | (1 << (SHRParser.KW_POSITIVE_INT - 30)) | (1 << (SHRParser.KW_XHTML - 30)))) !== 0))) {
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
    this.enterRule(localctx, 148, SHRParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 622;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 623;
        this.match(SHRParser.RANGE);
        this.state = 624;
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

function TbdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_tbd;
    return this;
}

TbdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TbdContext.prototype.constructor = TbdContext;

TbdContext.prototype.KW_TBD = function() {
    return this.getToken(SHRParser.KW_TBD, 0);
};

TbdContext.prototype.STRING = function() {
    return this.getToken(SHRParser.STRING, 0);
};

TbdContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterTbd(this);
	}
};

TbdContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitTbd(this);
	}
};

TbdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitTbd(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.TbdContext = TbdContext;

SHRParser.prototype.tbd = function() {

    var localctx = new TbdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 150, SHRParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 626;
        this.match(SHRParser.KW_TBD);
        this.state = 628;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 627;
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

function TbdCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_tbdCode;
    return this;
}

TbdCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TbdCodeContext.prototype.constructor = TbdCodeContext;

TbdCodeContext.prototype.KW_TBD_CODE = function() {
    return this.getToken(SHRParser.KW_TBD_CODE, 0);
};

TbdCodeContext.prototype.STRING = function() {
    return this.getToken(SHRParser.STRING, 0);
};

TbdCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterTbdCode(this);
	}
};

TbdCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitTbdCode(this);
	}
};

TbdCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitTbdCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.TbdCodeContext = TbdCodeContext;

SHRParser.prototype.tbdCode = function() {

    var localctx = new TbdCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 152, SHRParser.RULE_tbdCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 630;
        this.match(SHRParser.KW_TBD_CODE);
        this.state = 632;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 631;
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


exports.SHRParser = SHRParser;
