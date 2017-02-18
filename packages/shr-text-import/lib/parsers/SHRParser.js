// Generated from SHRParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRParserListener = require('./SHRParserListener').SHRParserListener;
var SHRParserVisitor = require('./SHRParserVisitor').SHRParserVisitor;

var grammarFileName = "SHRParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3N\u0296\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t",
    "8\49\t9\4:\t:\4;\t;\4<\t<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC",
    "\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4",
    "O\tO\4P\tP\3\2\3\2\3\2\5\2\u00a4\n\2\3\3\3\3\5\3\u00a8\n\3\3\3\5\3\u00ab",
    "\n\3\3\3\5\3\u00ae\n\3\3\3\5\3\u00b1\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4",
    "\3\4\3\5\3\5\3\5\3\5\7\5\u00bf\n\5\f\5\16\5\u00c2\13\5\3\6\3\6\7\6\u00c6",
    "\n\6\f\6\16\6\u00c9\13\6\3\6\5\6\u00cc\n\6\3\6\6\6\u00cf\n\6\r\6\16",
    "\6\u00d0\5\6\u00d3\n\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\6\t\u00de",
    "\n\t\r\t\16\t\u00df\3\n\3\n\3\n\3\n\3\n\3\13\7\13\u00e8\n\13\f\13\16",
    "\13\u00eb\13\13\3\f\3\f\5\f\u00ef\n\f\3\r\3\r\5\r\u00f3\n\r\3\r\3\r",
    "\3\16\3\16\3\16\3\17\3\17\5\17\u00fc\n\17\3\17\3\17\3\20\3\20\3\20\3",
    "\21\6\21\u0104\n\21\r\21\16\21\u0105\3\22\3\22\3\22\5\22\u010b\n\22",
    "\3\23\5\23\u010e\n\23\3\23\7\23\u0111\n\23\f\23\16\23\u0114\13\23\3",
    "\24\3\24\3\24\5\24\u0119\n\24\3\25\3\25\3\25\7\25\u011e\n\25\f\25\16",
    "\25\u0121\13\25\3\25\3\25\3\25\3\25\7\25\u0127\n\25\f\25\16\25\u012a",
    "\13\25\3\25\3\25\5\25\u012e\n\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26",
    "\3\26\7\26\u0138\n\26\f\26\16\26\u013b\13\26\3\26\3\26\5\26\u013f\n",
    "\26\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u0147\n\27\3\30\3\30\3\30\7\30",
    "\u014c\n\30\f\30\16\30\u014f\13\30\3\31\5\31\u0152\n\31\3\31\3\31\3",
    "\31\3\31\3\31\7\31\u0159\n\31\f\31\16\31\u015c\13\31\3\31\3\31\5\31",
    "\u0160\n\31\3\32\3\32\3\32\3\32\5\32\u0166\n\32\3\33\3\33\3\33\5\33",
    "\u016b\n\33\3\34\3\34\3\34\5\34\u0170\n\34\3\35\3\35\3\35\7\35\u0175",
    "\n\35\f\35\16\35\u0178\13\35\3\36\3\36\3\36\3\37\3\37\5\37\u017f\n\37",
    "\3\37\5\37\u0182\n\37\3\37\5\37\u0185\n\37\3\37\3\37\3 \3 \3 \3 \3 ",
    "\3 \3!\7!\u0190\n!\f!\16!\u0193\13!\3\"\3\"\5\"\u0197\n\"\3\"\5\"\u019a",
    "\n\"\3#\3#\3#\3#\5#\u01a0\n#\3$\6$\u01a3\n$\r$\16$\u01a4\3%\3%\3%\3",
    "%\5%\u01ab\n%\3&\3&\5&\u01af\n&\3\'\3\'\3\'\3\'\7\'\u01b5\n\'\f\'\16",
    "\'\u01b8\13\'\3(\3(\3(\3)\6)\u01be\n)\r)\16)\u01bf\3*\3*\5*\u01c4\n",
    "*\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3-\3-\3-\3.\7.\u01d4\n.\f.\16.\u01d7",
    "\13.\3/\3/\7/\u01db\n/\f/\16/\u01de\13/\3\60\3\60\3\60\5\60\u01e3\n",
    "\60\3\60\3\60\3\61\3\61\3\61\5\61\u01ea\n\61\3\62\3\62\3\62\3\62\3\63",
    "\3\63\3\63\7\63\u01f3\n\63\f\63\16\63\u01f6\13\63\3\63\3\63\3\63\3\63",
    "\5\63\u01fc\n\63\3\64\3\64\3\64\5\64\u0201\n\64\3\65\3\65\3\65\7\65",
    "\u0206\n\65\f\65\16\65\u0209\13\65\3\65\3\65\3\65\3\65\5\65\u020f\n",
    "\65\3\66\3\66\3\66\3\66\3\66\5\66\u0216\n\66\3\67\3\67\3\67\3\67\38",
    "\38\38\38\39\39\39\39\3:\3:\3;\3;\3<\3<\3=\3=\5=\u022c\n=\3>\3>\3>\3",
    ">\3>\3?\3?\5?\u0235\n?\3@\3@\3@\5@\u023a\n@\3A\3A\5A\u023e\nA\3B\3B",
    "\3B\3C\3C\3C\5C\u0246\nC\3C\5C\u0249\nC\3D\3D\3D\6D\u024e\nD\rD\16D",
    "\u024f\3D\3D\5D\u0254\nD\3D\3D\7D\u0258\nD\fD\16D\u025b\13D\3D\3D\5",
    "D\u025f\nD\3E\3E\3E\3E\3E\3E\5E\u0267\nE\3F\3F\3F\3G\3G\3G\3H\3H\6H",
    "\u0271\nH\rH\16H\u0272\3I\3I\3I\3J\3J\3J\5J\u027b\nJ\3K\3K\3K\3K\3L",
    "\3L\3L\3L\3L\5L\u0286\nL\3M\3M\3N\3N\3N\3N\3O\3O\5O\u0290\nO\3P\3P\5",
    "P\u0294\nP\3P\2\2Q\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60",
    "\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086",
    "\u0088\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e",
    "\2\n\4\2??AB\3\2GH\3\2EF\3\2\62\63\3\2\36\37\3\2\33\34\3\2\"\61\4\2",
    "88DD\u02a7\2\u00a3\3\2\2\2\4\u00a5\3\2\2\2\6\u00b4\3\2\2\2\b\u00ba\3",
    "\2\2\2\n\u00d2\3\2\2\2\f\u00d4\3\2\2\2\16\u00d7\3\2\2\2\20\u00dd\3\2",
    "\2\2\22\u00e1\3\2\2\2\24\u00e9\3\2\2\2\26\u00ee\3\2\2\2\30\u00f0\3\2",
    "\2\2\32\u00f6\3\2\2\2\34\u00f9\3\2\2\2\36\u00ff\3\2\2\2 \u0103\3\2\2",
    "\2\"\u010a\3\2\2\2$\u010d\3\2\2\2&\u0115\3\2\2\2(\u012d\3\2\2\2*\u013e",
    "\3\2\2\2,\u0146\3\2\2\2.\u0148\3\2\2\2\60\u0151\3\2\2\2\62\u0165\3\2",
    "\2\2\64\u0167\3\2\2\2\66\u016c\3\2\2\28\u0171\3\2\2\2:\u0179\3\2\2\2",
    "<\u017c\3\2\2\2>\u0188\3\2\2\2@\u0191\3\2\2\2B\u0194\3\2\2\2D\u019b",
    "\3\2\2\2F\u01a2\3\2\2\2H\u01aa\3\2\2\2J\u01ac\3\2\2\2L\u01b0\3\2\2\2",
    "N\u01b9\3\2\2\2P\u01bd\3\2\2\2R\u01c3\3\2\2\2T\u01c5\3\2\2\2V\u01c9",
    "\3\2\2\2X\u01cf\3\2\2\2Z\u01d5\3\2\2\2\\\u01d8\3\2\2\2^\u01df\3\2\2",
    "\2`\u01e9\3\2\2\2b\u01eb\3\2\2\2d\u01ef\3\2\2\2f\u0200\3\2\2\2h\u0202",
    "\3\2\2\2j\u0215\3\2\2\2l\u0217\3\2\2\2n\u021b\3\2\2\2p\u021f\3\2\2\2",
    "r\u0223\3\2\2\2t\u0225\3\2\2\2v\u0227\3\2\2\2x\u022b\3\2\2\2z\u022d",
    "\3\2\2\2|\u0232\3\2\2\2~\u0239\3\2\2\2\u0080\u023d\3\2\2\2\u0082\u023f",
    "\3\2\2\2\u0084\u0245\3\2\2\2\u0086\u024a\3\2\2\2\u0088\u0266\3\2\2\2",
    "\u008a\u0268\3\2\2\2\u008c\u026b\3\2\2\2\u008e\u0270\3\2\2\2\u0090\u0274",
    "\3\2\2\2\u0092\u0277\3\2\2\2\u0094\u027c\3\2\2\2\u0096\u0285\3\2\2\2",
    "\u0098\u0287\3\2\2\2\u009a\u0289\3\2\2\2\u009c\u028d\3\2\2\2\u009e\u0291",
    "\3\2\2\2\u00a0\u00a4\5\4\3\2\u00a1\u00a4\5<\37\2\u00a2\u00a4\5T+\2\u00a3",
    "\u00a0\3\2\2\2\u00a3\u00a1\3\2\2\2\u00a3\u00a2\3\2\2\2\u00a4\3\3\2\2",
    "\2\u00a5\u00a7\5\6\4\2\u00a6\u00a8\5:\36\2\u00a7\u00a6\3\2\2\2\u00a7",
    "\u00a8\3\2\2\2\u00a8\u00aa\3\2\2\2\u00a9\u00ab\5\b\5\2\u00aa\u00a9\3",
    "\2\2\2\u00aa\u00ab\3\2\2\2\u00ab\u00ad\3\2\2\2\u00ac\u00ae\5\n\6\2\u00ad",
    "\u00ac\3\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00b0\3\2\2\2\u00af\u00b1\5",
    "\20\t\2\u00b0\u00af\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\u00b2\3\2\2\2",
    "\u00b2\u00b3\5\24\13\2\u00b3\5\3\2\2\2\u00b4\u00b5\7\3\2\2\u00b5\u00b6",
    "\7\4\2\2\u00b6\u00b7\5p9\2\u00b7\u00b8\7\7\2\2\u00b8\u00b9\5r:\2\u00b9",
    "\7\3\2\2\2\u00ba\u00bb\7\b\2\2\u00bb\u00c0\5r:\2\u00bc\u00bd\7\67\2",
    "\2\u00bd\u00bf\5r:\2\u00be\u00bc\3\2\2\2\u00bf\u00c2\3\2\2\2\u00c0\u00be",
    "\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1\t\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c3",
    "\u00c7\5\f\7\2\u00c4\u00c6\5\16\b\2\u00c5\u00c4\3\2\2\2\u00c6\u00c9",
    "\3\2\2\2\u00c7\u00c5\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00d3\3\2\2\2",
    "\u00c9\u00c7\3\2\2\2\u00ca\u00cc\5\f\7\2\u00cb\u00ca\3\2\2\2\u00cb\u00cc",
    "\3\2\2\2\u00cc\u00ce\3\2\2\2\u00cd\u00cf\5\16\b\2\u00ce\u00cd\3\2\2",
    "\2\u00cf\u00d0\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1",
    "\u00d3\3\2\2\2\u00d2\u00c3\3\2\2\2\u00d2\u00cb\3\2\2\2\u00d3\13\3\2",
    "\2\2\u00d4\u00d5\7\t\2\2\u00d5\u00d6\7?\2\2\u00d6\r\3\2\2\2\u00d7\u00d8",
    "\7\t\2\2\u00d8\u00d9\7E\2\2\u00d9\u00da\7\66\2\2\u00da\u00db\7?\2\2",
    "\u00db\17\3\2\2\2\u00dc\u00de\5\22\n\2\u00dd\u00dc\3\2\2\2\u00de\u00df",
    "\3\2\2\2\u00df\u00dd\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\21\3\2\2\2\u00e1",
    "\u00e2\7\n\2\2\u00e2\u00e3\7E\2\2\u00e3\u00e4\7\66\2\2\u00e4\u00e5\t",
    "\2\2\2\u00e5\23\3\2\2\2\u00e6\u00e8\5\26\f\2\u00e7\u00e6\3\2\2\2\u00e8",
    "\u00eb\3\2\2\2\u00e9\u00e7\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\25\3\2",
    "\2\2\u00eb\u00e9\3\2\2\2\u00ec\u00ef\5\30\r\2\u00ed\u00ef\5\34\17\2",
    "\u00ee\u00ec\3\2\2\2\u00ee\u00ed\3\2\2\2\u00ef\27\3\2\2\2\u00f0\u00f2",
    "\5\32\16\2\u00f1\u00f3\5 \21\2\u00f2\u00f1\3\2\2\2\u00f2\u00f3\3\2\2",
    "\2\u00f3\u00f4\3\2\2\2\u00f4\u00f5\5$\23\2\u00f5\31\3\2\2\2\u00f6\u00f7",
    "\7\13\2\2\u00f7\u00f8\5t;\2\u00f8\33\3\2\2\2\u00f9\u00fb\5\36\20\2\u00fa",
    "\u00fc\5 \21\2\u00fb\u00fa\3\2\2\2\u00fb\u00fc\3\2\2\2\u00fc\u00fd\3",
    "\2\2\2\u00fd\u00fe\5$\23\2\u00fe\35\3\2\2\2\u00ff\u0100\7\f\2\2\u0100",
    "\u0101\5t;\2\u0101\37\3\2\2\2\u0102\u0104\5\"\22\2\u0103\u0102\3\2\2",
    "\2\u0104\u0105\3\2\2\2\u0105\u0103\3\2\2\2\u0105\u0106\3\2\2\2\u0106",
    "!\3\2\2\2\u0107\u010b\5\64\33\2\u0108\u010b\5\66\34\2\u0109\u010b\5",
    ":\36\2\u010a\u0107\3\2\2\2\u010a\u0108\3\2\2\2\u010a\u0109\3\2\2\2\u010b",
    "#\3\2\2\2\u010c\u010e\5&\24\2\u010d\u010c\3\2\2\2\u010d\u010e\3\2\2",
    "\2\u010e\u0112\3\2\2\2\u010f\u0111\5.\30\2\u0110\u010f\3\2\2\2\u0111",
    "\u0114\3\2\2\2\u0112\u0110\3\2\2\2\u0112\u0113\3\2\2\2\u0113%\3\2\2",
    "\2\u0114\u0112\3\2\2\2\u0115\u0118\7\16\2\2\u0116\u0119\5(\25\2\u0117",
    "\u0119\5*\26\2\u0118\u0116\3\2\2\2\u0118\u0117\3\2\2\2\u0119\'\3\2\2",
    "\2\u011a\u011f\5,\27\2\u011b\u011c\7\30\2\2\u011c\u011e\5,\27\2\u011d",
    "\u011b\3\2\2\2\u011e\u0121\3\2\2\2\u011f\u011d\3\2\2\2\u011f\u0120\3",
    "\2\2\2\u0120\u012e\3\2\2\2\u0121\u011f\3\2\2\2\u0122\u0123\79\2\2\u0123",
    "\u0128\5,\27\2\u0124\u0125\7\30\2\2\u0125\u0127\5,\27\2\u0126\u0124",
    "\3\2\2\2\u0127\u012a\3\2\2\2\u0128\u0126\3\2\2\2\u0128\u0129\3\2\2\2",
    "\u0129\u012b\3\2\2\2\u012a\u0128\3\2\2\2\u012b\u012c\7:\2\2\u012c\u012e",
    "\3\2\2\2\u012d\u011a\3\2\2\2\u012d\u0122\3\2\2\2\u012e)\3\2\2\2\u012f",
    "\u0130\5\u009aN\2\u0130\u0131\5,\27\2\u0131\u013f\3\2\2\2\u0132\u0133",
    "\5\u009aN\2\u0133\u0134\79\2\2\u0134\u0139\5,\27\2\u0135\u0136\7\30",
    "\2\2\u0136\u0138\5,\27\2\u0137\u0135\3\2\2\2\u0138\u013b\3\2\2\2\u0139",
    "\u0137\3\2\2\2\u0139\u013a\3\2\2\2\u013a\u013c\3\2\2\2\u013b\u0139\3",
    "\2\2\2\u013c\u013d\7:\2\2\u013d\u013f\3\2\2\2\u013e\u012f\3\2\2\2\u013e",
    "\u0132\3\2\2\2\u013f+\3\2\2\2\u0140\u0147\5x=\2\u0141\u0147\5z>\2\u0142",
    "\u0147\5\u0098M\2\u0143\u0147\5\u0082B\2\u0144\u0147\5\u0084C\2\u0145",
    "\u0147\5\u009cO\2\u0146\u0140\3\2\2\2\u0146\u0141\3\2\2\2\u0146\u0142",
    "\3\2\2\2\u0146\u0143\3\2\2\2\u0146\u0144\3\2\2\2\u0146\u0145\3\2\2\2",
    "\u0147-\3\2\2\2\u0148\u014d\5\60\31\2\u0149\u014a\7\30\2\2\u014a\u014c",
    "\5\60\31\2\u014b\u0149\3\2\2\2\u014c\u014f\3\2\2\2\u014d\u014b\3\2\2",
    "\2\u014d\u014e\3\2\2\2\u014e/\3\2\2\2\u014f\u014d\3\2\2\2\u0150\u0152",
    "\5\u009aN\2\u0151\u0150\3\2\2\2\u0151\u0152\3\2\2\2\u0152\u015f\3\2",
    "\2\2\u0153\u0160\5\62\32\2\u0154\u0155\79\2\2\u0155\u015a\5\62\32\2",
    "\u0156\u0157\7\30\2\2\u0157\u0159\5\62\32\2\u0158\u0156\3\2\2\2\u0159",
    "\u015c\3\2\2\2\u015a\u0158\3\2\2\2\u015a\u015b\3\2\2\2\u015b\u015d\3",
    "\2\2\2\u015c\u015a\3\2\2\2\u015d\u015e\7:\2\2\u015e\u0160\3\2\2\2\u015f",
    "\u0153\3\2\2\2\u015f\u0154\3\2\2\2\u0160\61\3\2\2\2\u0161\u0166\5x=",
    "\2\u0162\u0166\5z>\2\u0163\u0166\5\u0084C\2\u0164\u0166\5\u009cO\2\u0165",
    "\u0161\3\2\2\2\u0165\u0162\3\2\2\2\u0165\u0163\3\2\2\2\u0165\u0164\3",
    "\2\2\2\u0166\63\3\2\2\2\u0167\u016a\7\r\2\2\u0168\u016b\5x=\2\u0169",
    "\u016b\5\u009cO\2\u016a\u0168\3\2\2\2\u016a\u0169\3\2\2\2\u016b\65\3",
    "\2\2\2\u016c\u016f\7\25\2\2\u016d\u0170\5\u009cO\2\u016e\u0170\58\35",
    "\2\u016f\u016d\3\2\2\2\u016f\u016e\3\2\2\2\u0170\67\3\2\2\2\u0171\u0176",
    "\5~@\2\u0172\u0173\7\67\2\2\u0173\u0175\5~@\2\u0174\u0172\3\2\2\2\u0175",
    "\u0178\3\2\2\2\u0176\u0174\3\2\2\2\u0176\u0177\3\2\2\2\u01779\3\2\2",
    "\2\u0178\u0176\3\2\2\2\u0179\u017a\7\26\2\2\u017a\u017b\7J\2\2\u017b",
    ";\3\2\2\2\u017c\u017e\5> \2\u017d\u017f\5\b\5\2\u017e\u017d\3\2\2\2",
    "\u017e\u017f\3\2\2\2\u017f\u0181\3\2\2\2\u0180\u0182\5\n\6\2\u0181\u0180",
    "\3\2\2\2\u0181\u0182\3\2\2\2\u0182\u0184\3\2\2\2\u0183\u0185\5\20\t",
    "\2\u0184\u0183\3\2\2\2\u0184\u0185\3\2\2\2\u0185\u0186\3\2\2\2\u0186",
    "\u0187\5@!\2\u0187=\3\2\2\2\u0188\u0189\7\3\2\2\u0189\u018a\7\5\2\2",
    "\u018a\u018b\5p9\2\u018b\u018c\7\7\2\2\u018c\u018d\5r:\2\u018d?\3\2",
    "\2\2\u018e\u0190\5B\"\2\u018f\u018e\3\2\2\2\u0190\u0193\3\2\2\2\u0191",
    "\u018f\3\2\2\2\u0191\u0192\3\2\2\2\u0192A\3\2\2\2\u0193\u0191\3\2\2",
    "\2\u0194\u0196\5D#\2\u0195\u0197\5P)\2\u0196\u0195\3\2\2\2\u0196\u0197",
    "\3\2\2\2\u0197\u0199\3\2\2\2\u0198\u019a\5F$\2\u0199\u0198\3\2\2\2\u0199",
    "\u019a\3\2\2\2\u019aC\3\2\2\2\u019b\u019f\7\17\2\2\u019c\u01a0\7?\2",
    "\2\u019d\u01a0\7A\2\2\u019e\u01a0\5t;\2\u019f\u019c\3\2\2\2\u019f\u019d",
    "\3\2\2\2\u019f\u019e\3\2\2\2\u01a0E\3\2\2\2\u01a1\u01a3\5H%\2\u01a2",
    "\u01a1\3\2\2\2\u01a3\u01a4\3\2\2\2\u01a4\u01a2\3\2\2\2\u01a4\u01a5\3",
    "\2\2\2\u01a5G\3\2\2\2\u01a6\u01ab\5~@\2\u01a7\u01ab\5J&\2\u01a8\u01ab",
    "\5L\'\2\u01a9\u01ab\5N(\2\u01aa\u01a6\3\2\2\2\u01aa\u01a7\3\2\2\2\u01aa",
    "\u01a8\3\2\2\2\u01aa\u01a9\3\2\2\2\u01abI\3\2\2\2\u01ac\u01ae\7C\2\2",
    "\u01ad\u01af\7J\2\2\u01ae\u01ad\3\2\2\2\u01ae\u01af\3\2\2\2\u01afK\3",
    "\2\2\2\u01b0\u01b1\7\21\2\2\u01b1\u01b6\5~@\2\u01b2\u01b3\7\22\2\2\u01b3",
    "\u01b5\5~@\2\u01b4\u01b2\3\2\2\2\u01b5\u01b8\3\2\2\2\u01b6\u01b4\3\2",
    "\2\2\u01b6\u01b7\3\2\2\2\u01b7M\3\2\2\2\u01b8\u01b6\3\2\2\2\u01b9\u01ba",
    "\7\20\2\2\u01ba\u01bb\5~@\2\u01bbO\3\2\2\2\u01bc\u01be\5R*\2\u01bd\u01bc",
    "\3\2\2\2\u01be\u01bf\3\2\2\2\u01bf\u01bd\3\2\2\2\u01bf\u01c0\3\2\2\2",
    "\u01c0Q\3\2\2\2\u01c1\u01c4\5\66\34\2\u01c2\u01c4\5:\36\2\u01c3\u01c1",
    "\3\2\2\2\u01c3\u01c2\3\2\2\2\u01c4S\3\2\2\2\u01c5\u01c6\5V,\2\u01c6",
    "\u01c7\5X-\2\u01c7\u01c8\5Z.\2\u01c8U\3\2\2\2\u01c9\u01ca\7\3\2\2\u01ca",
    "\u01cb\7\6\2\2\u01cb\u01cc\5p9\2\u01cc\u01cd\7\7\2\2\u01cd\u01ce\5r",
    ":\2\u01ceW\3\2\2\2\u01cf\u01d0\7\23\2\2\u01d0\u01d1\5t;\2\u01d1Y\3\2",
    "\2\2\u01d2\u01d4\5\\/\2\u01d3\u01d2\3\2\2\2\u01d4\u01d7\3\2\2\2\u01d5",
    "\u01d3\3\2\2\2\u01d5\u01d6\3\2\2\2\u01d6[\3\2\2\2\u01d7\u01d5\3\2\2",
    "\2\u01d8\u01dc\5^\60\2\u01d9\u01db\5`\61\2\u01da\u01d9\3\2\2\2\u01db",
    "\u01de\3\2\2\2\u01dc\u01da\3\2\2\2\u01dc\u01dd\3\2\2\2\u01dd]\3\2\2",
    "\2\u01de\u01dc\3\2\2\2\u01df\u01e2\5t;\2\u01e0\u01e1\7\24\2\2\u01e1",
    "\u01e3\5t;\2\u01e2\u01e0\3\2\2\2\u01e2\u01e3\3\2\2\2\u01e3\u01e4\3\2",
    "\2\2\u01e4\u01e5\7=\2\2\u01e5_\3\2\2\2\u01e6\u01ea\5b\62\2\u01e7\u01ea",
    "\5l\67\2\u01e8\u01ea\5n8\2\u01e9\u01e6\3\2\2\2\u01e9\u01e7\3\2\2\2\u01e9",
    "\u01e8\3\2\2\2\u01eaa\3\2\2\2\u01eb\u01ec\5d\63\2\u01ec\u01ed\7\24\2",
    "\2\u01ed\u01ee\5h\65\2\u01eec\3\2\2\2\u01ef\u01f4\5f\64\2\u01f0\u01f1",
    "\7\65\2\2\u01f1\u01f3\5f\64\2\u01f2\u01f0\3\2\2\2\u01f3\u01f6\3\2\2",
    "\2\u01f4\u01f2\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5\u01fb\3\2\2\2\u01f6",
    "\u01f4\3\2\2\2\u01f7\u01f8\7;\2\2\u01f8\u01f9\5d\63\2\u01f9\u01fa\7",
    "<\2\2\u01fa\u01fc\3\2\2\2\u01fb\u01f7\3\2\2\2\u01fb\u01fc\3\2\2\2\u01fc",
    "e\3\2\2\2\u01fd\u0201\5x=\2\u01fe\u0201\5\u0098M\2\u01ff\u0201\5\u009c",
    "O\2\u0200\u01fd\3\2\2\2\u0200\u01fe\3\2\2\2\u0200\u01ff\3\2\2\2\u0201",
    "g\3\2\2\2\u0202\u0207\5j\66\2\u0203\u0204\7\65\2\2\u0204\u0206\5j\66",
    "\2\u0205\u0203\3\2\2\2\u0206\u0209\3\2\2\2\u0207\u0205\3\2\2\2\u0207",
    "\u0208\3\2\2\2\u0208\u020e\3\2\2\2\u0209\u0207\3\2\2\2\u020a\u020b\7",
    ";\2\2\u020b\u020c\5h\65\2\u020c\u020d\7<\2\2\u020d\u020f\3\2\2\2\u020e",
    "\u020a\3\2\2\2\u020e\u020f\3\2\2\2\u020fi\3\2\2\2\u0210\u0216\7G\2\2",
    "\u0211\u0216\7H\2\2\u0212\u0216\7F\2\2\u0213\u0216\7E\2\2\u0214\u0216",
    "\5\u0098M\2\u0215\u0210\3\2\2\2\u0215\u0211\3\2\2\2\u0215\u0212\3\2",
    "\2\2\u0215\u0213\3\2\2\2\u0215\u0214\3\2\2\2\u0216k\3\2\2\2\u0217\u0218",
    "\5d\63\2\u0218\u0219\7\24\2\2\u0219\u021a\7?\2\2\u021am\3\2\2\2\u021b",
    "\u021c\5j\66\2\u021c\u021d\7\32\2\2\u021d\u021e\5\u009aN\2\u021eo\3",
    "\2\2\2\u021f\u0220\7D\2\2\u0220\u0221\7\65\2\2\u0221\u0222\7D\2\2\u0222",
    "q\3\2\2\2\u0223\u0224\t\3\2\2\u0224s\3\2\2\2\u0225\u0226\t\4\2\2\u0226",
    "u\3\2\2\2\u0227\u0228\7I\2\2\u0228w\3\2\2\2\u0229\u022c\5t;\2\u022a",
    "\u022c\5v<\2\u022b\u0229\3\2\2\2\u022b\u022a\3\2\2\2\u022cy\3\2\2\2",
    "\u022d\u022e\7\27\2\2\u022e\u022f\79\2\2\u022f\u0230\5x=\2\u0230\u0231",
    "\7:\2\2\u0231{\3\2\2\2\u0232\u0234\7C\2\2\u0233\u0235\7J\2\2\u0234\u0233",
    "\3\2\2\2\u0234\u0235\3\2\2\2\u0235}\3\2\2\2\u0236\u0237\7E\2\2\u0237",
    "\u023a\5|?\2\u0238\u023a\5\u009eP\2\u0239\u0236\3\2\2\2\u0239\u0238",
    "\3\2\2\2\u023a\177\3\2\2\2\u023b\u023e\5~@\2\u023c\u023e\5|?\2\u023d",
    "\u023b\3\2\2\2\u023d\u023c\3\2\2\2\u023e\u0081\3\2\2\2\u023f\u0240\t",
    "\5\2\2\u0240\u0241\5\u0096L\2\u0241\u0083\3\2\2\2\u0242\u0246\5x=\2",
    "\u0243\u0246\5\u0086D\2\u0244\u0246\5\u0098M\2\u0245\u0242\3\2\2\2\u0245",
    "\u0243\3\2\2\2\u0245\u0244\3\2\2\2\u0246\u0248\3\2\2\2\u0247\u0249\5",
    "\u0088E\2\u0248\u0247\3\2\2\2\u0248\u0249\3\2\2\2\u0249\u0085\3\2\2",
    "\2\u024a\u025e\5x=\2\u024b\u024c\7\65\2\2\u024c\u024e\5t;\2\u024d\u024b",
    "\3\2\2\2\u024e\u024f\3\2\2\2\u024f\u024d\3\2\2\2\u024f\u0250\3\2\2\2",
    "\u0250\u0253\3\2\2\2\u0251\u0252\7\65\2\2\u0252\u0254\5\u0098M\2\u0253",
    "\u0251\3\2\2\2\u0253\u0254\3\2\2\2\u0254\u025f\3\2\2\2\u0255\u0256\7",
    "\65\2\2\u0256\u0258\5t;\2\u0257\u0255\3\2\2\2\u0258\u025b\3\2\2\2\u0259",
    "\u0257\3\2\2\2\u0259\u025a\3\2\2\2\u025a\u025c\3\2\2\2\u025b\u0259\3",
    "\2\2\2\u025c\u025d\7\65\2\2\u025d\u025f\5\u0098M\2\u025e\u024d\3\2\2",
    "\2\u025e\u0259\3\2\2\2\u025f\u0087\3\2\2\2\u0260\u0267\5\u008aF\2\u0261",
    "\u0267\5\u008cG\2\u0262\u0267\5\u008eH\2\u0263\u0267\5\u0090I\2\u0264",
    "\u0267\5\u0092J\2\u0265\u0267\5\u0094K\2\u0266\u0260\3\2\2\2\u0266\u0261",
    "\3\2\2\2\u0266\u0262\3\2\2\2\u0266\u0263\3\2\2\2\u0266\u0264\3\2\2\2",
    "\u0266\u0265\3\2\2\2\u0267\u0089\3\2\2\2\u0268\u0269\7\31\2\2\u0269",
    "\u026a\5\u0082B\2\u026a\u008b\3\2\2\2\u026b\u026c\7\32\2\2\u026c\u026d",
    "\5\u0080A\2\u026d\u008d\3\2\2\2\u026e\u026f\7\35\2\2\u026f\u0271\5\u0080",
    "A\2\u0270\u026e\3\2\2\2\u0271\u0272\3\2\2\2\u0272\u0270\3\2\2\2\u0272",
    "\u0273\3\2\2\2\u0273\u008f\3\2\2\2\u0274\u0275\7\32\2\2\u0275\u0276",
    "\t\6\2\2\u0276\u0091\3\2\2\2\u0277\u027a\t\7\2\2\u0278\u027b\5x=\2\u0279",
    "\u027b\5\u009cO\2\u027a\u0278\3\2\2\2\u027a\u0279\3\2\2\2\u027b\u0093",
    "\3\2\2\2\u027c\u027d\7\31\2\2\u027d\u027e\7\64\2\2\u027e\u027f\5~@\2",
    "\u027f\u0095\3\2\2\2\u0280\u0286\7?\2\2\u0281\u0286\7@\2\2\u0282\u0286",
    "\7A\2\2\u0283\u0286\5t;\2\u0284\u0286\5\u009cO\2\u0285\u0280\3\2\2\2",
    "\u0285\u0281\3\2\2\2\u0285\u0282\3\2\2\2\u0285\u0283\3\2\2\2\u0285\u0284",
    "\3\2\2\2\u0286\u0097\3\2\2\2\u0287\u0288\t\b\2\2\u0288\u0099\3\2\2\2",
    "\u0289\u028a\7D\2\2\u028a\u028b\7>\2\2\u028b\u028c\t\t\2\2\u028c\u009b",
    "\3\2\2\2\u028d\u028f\7 \2\2\u028e\u0290\7J\2\2\u028f\u028e\3\2\2\2\u028f",
    "\u0290\3\2\2\2\u0290\u009d\3\2\2\2\u0291\u0293\7!\2\2\u0292\u0294\7",
    "J\2\2\u0293\u0292\3\2\2\2\u0293\u0294\3\2\2\2\u0294\u009f\3\2\2\2K\u00a3",
    "\u00a7\u00aa\u00ad\u00b0\u00c0\u00c7\u00cb\u00d0\u00d2\u00df\u00e9\u00ee",
    "\u00f2\u00fb\u0105\u010a\u010d\u0112\u0118\u011f\u0128\u012d\u0139\u013e",
    "\u0146\u014d\u0151\u015a\u015f\u0165\u016a\u016f\u0176\u017e\u0181\u0184",
    "\u0191\u0196\u0199\u019f\u01a4\u01aa\u01ae\u01b6\u01bf\u01c3\u01d5\u01dc",
    "\u01e2\u01e9\u01f4\u01fb\u0200\u0207\u020e\u0215\u022b\u0234\u0239\u023d",
    "\u0245\u0248\u024f\u0253\u0259\u025e\u0266\u0272\u027a\u0285\u028f\u0293"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'Grammar:'", "'DataElement'", "'ValueSet'", 
                     "'Map'", "'Namespace:'", "'Uses:'", "'Path:'", "'CodeSystem:'", 
                     "'Element:'", "'EntryElement:'", "'Based on:'", "'Value:'", 
                     "'ValueSet:'", "'Includes codes from'", "'Includes codes descending from'", 
                     "'and not descending from'", "'Target:'", "'maps to'", 
                     "'Concept:'", "'Description:'", "'ref'", "'or'", "'with'", 
                     "'is'", "'is type'", "'value is type'", "'includes'", 
                     "'true'", "'false'", "'TBD'", "'TBD#TBD'", "'boolean'", 
                     "'integer'", "'string'", "'decimal'", "'uri'", "'base64Binary'", 
                     "'instant'", "'date'", "'dateTime'", "'time'", "'code'", 
                     "'oid'", "'id'", "'markdown'", "'unsignedInt'", "'positiveInt'", 
                     "'code from'", "'Coding from'", "'units'", "'.'", "'='", 
                     "','", "'*'", "'('", "')'", "'['", "']'", "':'", "'..'" ];

var symbolicNames = [ 'null', "KW_GRAMMAR", "KW_G_DATA_ELEMENT", "KW_G_VALUE_SET", 
                      "KW_G_MAP", "KW_NAMESPACE", "KW_USES", "KW_PATH", 
                      "KW_VOCABULARY", "KW_ELEMENT", "KW_ENTRY_ELEMENT", 
                      "KW_BASED_ON", "KW_VALUE", "KW_VALUESET", "KW_INCLUDES_CODES_FROM", 
                      "KW_INCLUDES_CODES_DESCENDING_FROM", "KW_AND_NOT_DESCENDING_FROM", 
                      "KW_TARGET", "KW_MAPS_TO", "KW_CONCEPT", "KW_DESCRIPTION", 
                      "KW_REF", "KW_OR", "KW_WITH", "KW_IS", "KW_IS_TYPE", 
                      "KW_VALUE_IS_TYPE", "KW_INCLUDES", "KW_TRUE", "KW_FALSE", 
                      "KW_TBD", "KW_TBD_CODE", "KW_BOOLEAN", "KW_INTEGER", 
                      "KW_STRING", "KW_DECIMAL", "KW_URI", "KW_BASE64_BINARY", 
                      "KW_INSTANT", "KW_DATE", "KW_DATE_TIME", "KW_TIME", 
                      "KW_CODE", "KW_OID", "KW_ID", "KW_MARKDOWN", "KW_UNSIGNED_INT", 
                      "KW_POSITIVE_INT", "KW_CODE_FROM", "KW_CODING_FROM", 
                      "KW_UNITS", "DOT", "EQUAL", "COMMA", "STAR", "OPEN_PAREN", 
                      "CLOSE_PAREN", "OPEN_BRACKET", "CLOSE_BRACKET", "COLON", 
                      "RANGE", "URL", "PATH_URL", "URN_OID", "URN", "CODE", 
                      "WHOLE_NUMBER", "ALL_CAPS", "UPPER_WORD", "LOWER_WORD", 
                      "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", "STRING", 
                      "WS", "NEWLINE", "COMMENT", "LINE_COMMENT" ];

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
                   "fieldMapping", "fieldToFieldMapping", "source", "sourcePart", 
                   "target", "targetPart", "urlMapping", "cardMapping", 
                   "version", "namespace", "simpleName", "fullyQualifiedName", 
                   "simpleOrFQName", "ref", "code", "fullyQualifiedCode", 
                   "codeOrFQCode", "codeFromVS", "elementWithConstraint", 
                   "elementPath", "elementConstraint", "elementCodeVSConstraint", 
                   "elementCodeValueConstraint", "elementIncludesCodeValueConstraint", 
                   "elementBooleanConstraint", "elementTypeConstraint", 
                   "elementWithUnitsConstraint", "valueset", "primitive", 
                   "count", "tbd", "tbdCode" ];

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
SHRParser.KW_TARGET = 17;
SHRParser.KW_MAPS_TO = 18;
SHRParser.KW_CONCEPT = 19;
SHRParser.KW_DESCRIPTION = 20;
SHRParser.KW_REF = 21;
SHRParser.KW_OR = 22;
SHRParser.KW_WITH = 23;
SHRParser.KW_IS = 24;
SHRParser.KW_IS_TYPE = 25;
SHRParser.KW_VALUE_IS_TYPE = 26;
SHRParser.KW_INCLUDES = 27;
SHRParser.KW_TRUE = 28;
SHRParser.KW_FALSE = 29;
SHRParser.KW_TBD = 30;
SHRParser.KW_TBD_CODE = 31;
SHRParser.KW_BOOLEAN = 32;
SHRParser.KW_INTEGER = 33;
SHRParser.KW_STRING = 34;
SHRParser.KW_DECIMAL = 35;
SHRParser.KW_URI = 36;
SHRParser.KW_BASE64_BINARY = 37;
SHRParser.KW_INSTANT = 38;
SHRParser.KW_DATE = 39;
SHRParser.KW_DATE_TIME = 40;
SHRParser.KW_TIME = 41;
SHRParser.KW_CODE = 42;
SHRParser.KW_OID = 43;
SHRParser.KW_ID = 44;
SHRParser.KW_MARKDOWN = 45;
SHRParser.KW_UNSIGNED_INT = 46;
SHRParser.KW_POSITIVE_INT = 47;
SHRParser.KW_CODE_FROM = 48;
SHRParser.KW_CODING_FROM = 49;
SHRParser.KW_UNITS = 50;
SHRParser.DOT = 51;
SHRParser.EQUAL = 52;
SHRParser.COMMA = 53;
SHRParser.STAR = 54;
SHRParser.OPEN_PAREN = 55;
SHRParser.CLOSE_PAREN = 56;
SHRParser.OPEN_BRACKET = 57;
SHRParser.CLOSE_BRACKET = 58;
SHRParser.COLON = 59;
SHRParser.RANGE = 60;
SHRParser.URL = 61;
SHRParser.PATH_URL = 62;
SHRParser.URN_OID = 63;
SHRParser.URN = 64;
SHRParser.CODE = 65;
SHRParser.WHOLE_NUMBER = 66;
SHRParser.ALL_CAPS = 67;
SHRParser.UPPER_WORD = 68;
SHRParser.LOWER_WORD = 69;
SHRParser.DOT_SEPARATED_LW = 70;
SHRParser.DOT_SEPARATED_UW = 71;
SHRParser.STRING = 72;
SHRParser.WS = 73;
SHRParser.NEWLINE = 74;
SHRParser.COMMENT = 75;
SHRParser.LINE_COMMENT = 76;

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
SHRParser.RULE_fieldMapping = 47;
SHRParser.RULE_fieldToFieldMapping = 48;
SHRParser.RULE_source = 49;
SHRParser.RULE_sourcePart = 50;
SHRParser.RULE_target = 51;
SHRParser.RULE_targetPart = 52;
SHRParser.RULE_urlMapping = 53;
SHRParser.RULE_cardMapping = 54;
SHRParser.RULE_version = 55;
SHRParser.RULE_namespace = 56;
SHRParser.RULE_simpleName = 57;
SHRParser.RULE_fullyQualifiedName = 58;
SHRParser.RULE_simpleOrFQName = 59;
SHRParser.RULE_ref = 60;
SHRParser.RULE_code = 61;
SHRParser.RULE_fullyQualifiedCode = 62;
SHRParser.RULE_codeOrFQCode = 63;
SHRParser.RULE_codeFromVS = 64;
SHRParser.RULE_elementWithConstraint = 65;
SHRParser.RULE_elementPath = 66;
SHRParser.RULE_elementConstraint = 67;
SHRParser.RULE_elementCodeVSConstraint = 68;
SHRParser.RULE_elementCodeValueConstraint = 69;
SHRParser.RULE_elementIncludesCodeValueConstraint = 70;
SHRParser.RULE_elementBooleanConstraint = 71;
SHRParser.RULE_elementTypeConstraint = 72;
SHRParser.RULE_elementWithUnitsConstraint = 73;
SHRParser.RULE_valueset = 74;
SHRParser.RULE_primitive = 75;
SHRParser.RULE_count = 76;
SHRParser.RULE_tbd = 77;
SHRParser.RULE_tbdCode = 78;

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
        this.state = 161;
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 158;
            this.dataDefsDoc();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
            this.valuesetDefsDoc();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 160;
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
        this.state = 163;
        this.dataDefsHeader();
        this.state = 165;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_DESCRIPTION) {
            this.state = 164;
            this.descriptionProp();
        }

        this.state = 168;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_USES) {
            this.state = 167;
            this.usesStatement();
        }

        this.state = 171;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_PATH) {
            this.state = 170;
            this.pathDefs();
        }

        this.state = 174;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VOCABULARY) {
            this.state = 173;
            this.vocabularyDefs();
        }

        this.state = 176;
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
        this.state = 178;
        this.match(SHRParser.KW_GRAMMAR);
        this.state = 179;
        this.match(SHRParser.KW_G_DATA_ELEMENT);
        this.state = 180;
        this.version();
        this.state = 181;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 182;
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
        this.state = 184;
        this.match(SHRParser.KW_USES);
        this.state = 185;
        this.namespace();
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 186;
            this.match(SHRParser.COMMA);
            this.state = 187;
            this.namespace();
            this.state = 192;
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
        this.state = 208;
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.defaultPathDef();
            this.state = 197;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_PATH) {
                this.state = 194;
                this.pathDef();
                this.state = 199;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 201;
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 200;
                this.defaultPathDef();

            }
            this.state = 204; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 203;
                this.pathDef();
                this.state = 206; 
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
        this.state = 210;
        this.match(SHRParser.KW_PATH);
        this.state = 211;
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
        this.state = 213;
        this.match(SHRParser.KW_PATH);
        this.state = 214;
        this.match(SHRParser.ALL_CAPS);
        this.state = 215;
        this.match(SHRParser.EQUAL);
        this.state = 216;
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
        this.state = 219; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 218;
            this.vocabularyDef();
            this.state = 221; 
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
        this.state = 223;
        this.match(SHRParser.KW_VOCABULARY);
        this.state = 224;
        this.match(SHRParser.ALL_CAPS);
        this.state = 225;
        this.match(SHRParser.EQUAL);
        this.state = 226;
        _la = this._input.LA(1);
        if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (SHRParser.URL - 61)) | (1 << (SHRParser.URN_OID - 61)) | (1 << (SHRParser.URN - 61)))) !== 0))) {
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
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_ELEMENT || _la===SHRParser.KW_ENTRY_ELEMENT) {
            this.state = 228;
            this.dataDef();
            this.state = 233;
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
        this.state = 236;
        switch(this._input.LA(1)) {
        case SHRParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 234;
            this.elementDef();
            break;
        case SHRParser.KW_ENTRY_ELEMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 235;
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
        this.state = 238;
        this.elementHeader();
        this.state = 240;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BASED_ON) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 239;
            this.elementProps();
        }

        this.state = 242;
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
        this.state = 244;
        this.match(SHRParser.KW_ELEMENT);
        this.state = 245;
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
        this.state = 247;
        this.entryHeader();
        this.state = 249;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BASED_ON) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 248;
            this.elementProps();
        }

        this.state = 251;
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
        this.state = 253;
        this.match(SHRParser.KW_ENTRY_ELEMENT);
        this.state = 254;
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
        this.state = 257; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 256;
            this.elementProp();
            this.state = 259; 
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
        this.state = 264;
        switch(this._input.LA(1)) {
        case SHRParser.KW_BASED_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 261;
            this.basedOnProp();
            break;
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 262;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 263;
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
        this.state = 267;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VALUE) {
            this.state = 266;
            this.value();
        }

        this.state = 272;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 21)) & ~0x1f) == 0 && ((1 << (_la - 21)) & ((1 << (SHRParser.KW_REF - 21)) | (1 << (SHRParser.KW_TBD - 21)) | (1 << (SHRParser.KW_BOOLEAN - 21)) | (1 << (SHRParser.KW_INTEGER - 21)) | (1 << (SHRParser.KW_STRING - 21)) | (1 << (SHRParser.KW_DECIMAL - 21)) | (1 << (SHRParser.KW_URI - 21)) | (1 << (SHRParser.KW_BASE64_BINARY - 21)) | (1 << (SHRParser.KW_INSTANT - 21)) | (1 << (SHRParser.KW_DATE - 21)) | (1 << (SHRParser.KW_DATE_TIME - 21)) | (1 << (SHRParser.KW_TIME - 21)) | (1 << (SHRParser.KW_CODE - 21)) | (1 << (SHRParser.KW_OID - 21)) | (1 << (SHRParser.KW_ID - 21)) | (1 << (SHRParser.KW_MARKDOWN - 21)) | (1 << (SHRParser.KW_UNSIGNED_INT - 21)) | (1 << (SHRParser.KW_POSITIVE_INT - 21)))) !== 0) || ((((_la - 55)) & ~0x1f) == 0 && ((1 << (_la - 55)) & ((1 << (SHRParser.OPEN_PAREN - 55)) | (1 << (SHRParser.WHOLE_NUMBER - 55)) | (1 << (SHRParser.ALL_CAPS - 55)) | (1 << (SHRParser.UPPER_WORD - 55)) | (1 << (SHRParser.DOT_SEPARATED_UW - 55)))) !== 0)) {
            this.state = 269;
            this.field();
            this.state = 274;
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
        this.state = 275;
        this.match(SHRParser.KW_VALUE);
        this.state = 278;
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
        case SHRParser.OPEN_PAREN:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 276;
            this.uncountedValue();
            break;
        case SHRParser.WHOLE_NUMBER:
            this.state = 277;
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
        this.state = 299;
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
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 280;
            this.valueType();
            this.state = 285;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 281;
                this.match(SHRParser.KW_OR);
                this.state = 282;
                this.valueType();
                this.state = 287;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case SHRParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 288;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 289;
            this.valueType();
            this.state = 294;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 290;
                this.match(SHRParser.KW_OR);
                this.state = 291;
                this.valueType();
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 297;
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
        this.state = 316;
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 301;
            this.count();
            this.state = 302;
            this.valueType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 304;
            this.count();
            this.state = 305;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 306;
            this.valueType();
            this.state = 311;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 307;
                this.match(SHRParser.KW_OR);
                this.state = 308;
                this.valueType();
                this.state = 313;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 314;
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
        this.state = 324;
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 318;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 319;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 320;
            this.primitive();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 321;
            this.codeFromVS();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 322;
            this.elementWithConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 323;
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
        this.state = 326;
        this.countedField();
        this.state = 331;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_OR) {
            this.state = 327;
            this.match(SHRParser.KW_OR);
            this.state = 328;
            this.countedField();
            this.state = 333;
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
        this.state = 335;
        _la = this._input.LA(1);
        if(_la===SHRParser.WHOLE_NUMBER) {
            this.state = 334;
            this.count();
        }

        this.state = 349;
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
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 337;
            this.fieldType();
            break;
        case SHRParser.OPEN_PAREN:
            this.state = 338;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 339;
            this.fieldType();
            this.state = 344;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 340;
                this.match(SHRParser.KW_OR);
                this.state = 341;
                this.fieldType();
                this.state = 346;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 347;
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
        this.state = 355;
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 351;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 352;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 353;
            this.elementWithConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 354;
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
        this.state = 357;
        this.match(SHRParser.KW_BASED_ON);
        this.state = 360;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 358;
            this.simpleOrFQName();
            break;
        case SHRParser.KW_TBD:
            this.state = 359;
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
        this.state = 362;
        this.match(SHRParser.KW_CONCEPT);
        this.state = 365;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD:
            this.state = 363;
            this.tbd();
            break;
        case SHRParser.KW_TBD_CODE:
        case SHRParser.ALL_CAPS:
            this.state = 364;
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
        this.state = 367;
        this.fullyQualifiedCode();
        this.state = 372;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 368;
            this.match(SHRParser.COMMA);
            this.state = 369;
            this.fullyQualifiedCode();
            this.state = 374;
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
        this.state = 375;
        this.match(SHRParser.KW_DESCRIPTION);
        this.state = 376;
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
        this.state = 378;
        this.valuesetDefsHeader();
        this.state = 380;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_USES) {
            this.state = 379;
            this.usesStatement();
        }

        this.state = 383;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_PATH) {
            this.state = 382;
            this.pathDefs();
        }

        this.state = 386;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VOCABULARY) {
            this.state = 385;
            this.vocabularyDefs();
        }

        this.state = 388;
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
        this.state = 390;
        this.match(SHRParser.KW_GRAMMAR);
        this.state = 391;
        this.match(SHRParser.KW_G_VALUE_SET);
        this.state = 392;
        this.version();
        this.state = 393;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 394;
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
        this.state = 399;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_VALUESET) {
            this.state = 396;
            this.valuesetDef();
            this.state = 401;
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
        this.state = 402;
        this.valuesetHeader();
        this.state = 404;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_CONCEPT || _la===SHRParser.KW_DESCRIPTION) {
            this.state = 403;
            this.valuesetProps();
        }

        this.state = 407;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_INCLUDES_CODES_FROM) | (1 << SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM) | (1 << SHRParser.KW_TBD_CODE))) !== 0) || _la===SHRParser.CODE || _la===SHRParser.ALL_CAPS) {
            this.state = 406;
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
        this.state = 409;
        this.match(SHRParser.KW_VALUESET);
        this.state = 413;
        switch(this._input.LA(1)) {
        case SHRParser.URL:
            this.state = 410;
            this.match(SHRParser.URL);
            break;
        case SHRParser.URN_OID:
            this.state = 411;
            this.match(SHRParser.URN_OID);
            break;
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.state = 412;
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
        this.state = 416; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 415;
            this.valuesetValue();
            this.state = 418; 
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
        this.state = 424;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD_CODE:
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 420;
            this.fullyQualifiedCode();
            break;
        case SHRParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 421;
            this.valuesetInlineValue();
            break;
        case SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM:
            this.enterOuterAlt(localctx, 3);
            this.state = 422;
            this.valuesetDescendingFrom();
            break;
        case SHRParser.KW_INCLUDES_CODES_FROM:
            this.enterOuterAlt(localctx, 4);
            this.state = 423;
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
        this.state = 426;
        this.match(SHRParser.CODE);
        this.state = 428;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 427;
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
        this.state = 430;
        this.match(SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM);
        this.state = 431;
        this.fullyQualifiedCode();
        this.state = 436;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_AND_NOT_DESCENDING_FROM) {
            this.state = 432;
            this.match(SHRParser.KW_AND_NOT_DESCENDING_FROM);
            this.state = 433;
            this.fullyQualifiedCode();
            this.state = 438;
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
        this.state = 439;
        this.match(SHRParser.KW_INCLUDES_CODES_FROM);
        this.state = 440;
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
        this.state = 443; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 442;
            this.valuesetProp();
            this.state = 445; 
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
        this.state = 449;
        switch(this._input.LA(1)) {
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 1);
            this.state = 447;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 448;
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
        this.state = 451;
        this.mappingsHeader();
        this.state = 452;
        this.targetStatement();
        this.state = 453;
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
        this.state = 455;
        this.match(SHRParser.KW_GRAMMAR);
        this.state = 456;
        this.match(SHRParser.KW_G_MAP);
        this.state = 457;
        this.version();
        this.state = 458;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 459;
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
        this.state = 461;
        this.match(SHRParser.KW_TARGET);
        this.state = 462;
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
        this.state = 467;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.ALL_CAPS || _la===SHRParser.UPPER_WORD) {
            this.state = 464;
            this.mappingDef();
            this.state = 469;
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

MappingDefContext.prototype.fieldMapping = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldMappingContext);
    } else {
        return this.getTypedRuleContext(FieldMappingContext,i);
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
        this.state = 470;
        this.mappingDefHeader();
        this.state = 474;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 471;
                this.fieldMapping(); 
            }
            this.state = 476;
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

MappingDefHeaderContext.prototype.simpleName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SimpleNameContext);
    } else {
        return this.getTypedRuleContext(SimpleNameContext,i);
    }
};

MappingDefHeaderContext.prototype.COLON = function() {
    return this.getToken(SHRParser.COLON, 0);
};

MappingDefHeaderContext.prototype.KW_MAPS_TO = function() {
    return this.getToken(SHRParser.KW_MAPS_TO, 0);
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
        this.state = 477;
        this.simpleName();
        this.state = 480;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_MAPS_TO) {
            this.state = 478;
            this.match(SHRParser.KW_MAPS_TO);
            this.state = 479;
            this.simpleName();
        }

        this.state = 482;
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

FieldMappingContext.prototype.fieldToFieldMapping = function() {
    return this.getTypedRuleContext(FieldToFieldMappingContext,0);
};

FieldMappingContext.prototype.urlMapping = function() {
    return this.getTypedRuleContext(UrlMappingContext,0);
};

FieldMappingContext.prototype.cardMapping = function() {
    return this.getTypedRuleContext(CardMappingContext,0);
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
    this.enterRule(localctx, 94, SHRParser.RULE_fieldMapping);
    try {
        this.state = 487;
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 484;
            this.fieldToFieldMapping();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 485;
            this.urlMapping();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 486;
            this.cardMapping();
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

function FieldToFieldMappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_fieldToFieldMapping;
    return this;
}

FieldToFieldMappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldToFieldMappingContext.prototype.constructor = FieldToFieldMappingContext;

FieldToFieldMappingContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

FieldToFieldMappingContext.prototype.KW_MAPS_TO = function() {
    return this.getToken(SHRParser.KW_MAPS_TO, 0);
};

FieldToFieldMappingContext.prototype.target = function() {
    return this.getTypedRuleContext(TargetContext,0);
};

FieldToFieldMappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterFieldToFieldMapping(this);
	}
};

FieldToFieldMappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitFieldToFieldMapping(this);
	}
};

FieldToFieldMappingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitFieldToFieldMapping(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.FieldToFieldMappingContext = FieldToFieldMappingContext;

SHRParser.prototype.fieldToFieldMapping = function() {

    var localctx = new FieldToFieldMappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, SHRParser.RULE_fieldToFieldMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 489;
        this.source();
        this.state = 490;
        this.match(SHRParser.KW_MAPS_TO);
        this.state = 491;
        this.target();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
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


SourceContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(SHRParser.OPEN_BRACKET, 0);
};

SourceContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

SourceContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(SHRParser.CLOSE_BRACKET, 0);
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
        this.state = 493;
        this.sourcePart();
        this.state = 498;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.DOT) {
            this.state = 494;
            this.match(SHRParser.DOT);
            this.state = 495;
            this.sourcePart();
            this.state = 500;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 505;
        _la = this._input.LA(1);
        if(_la===SHRParser.OPEN_BRACKET) {
            this.state = 501;
            this.match(SHRParser.OPEN_BRACKET);
            this.state = 502;
            this.source();
            this.state = 503;
            this.match(SHRParser.CLOSE_BRACKET);
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

SourcePartContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

SourcePartContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

SourcePartContext.prototype.tbd = function() {
    return this.getTypedRuleContext(TbdContext,0);
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
    try {
        this.state = 510;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 507;
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
            this.enterOuterAlt(localctx, 2);
            this.state = 508;
            this.primitive();
            break;
        case SHRParser.KW_TBD:
            this.enterOuterAlt(localctx, 3);
            this.state = 509;
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

function TargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_target;
    return this;
}

TargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetContext.prototype.constructor = TargetContext;

TargetContext.prototype.targetPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TargetPartContext);
    } else {
        return this.getTypedRuleContext(TargetPartContext,i);
    }
};

TargetContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.DOT);
    } else {
        return this.getToken(SHRParser.DOT, i);
    }
};


TargetContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(SHRParser.OPEN_BRACKET, 0);
};

TargetContext.prototype.target = function() {
    return this.getTypedRuleContext(TargetContext,0);
};

TargetContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(SHRParser.CLOSE_BRACKET, 0);
};

TargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterTarget(this);
	}
};

TargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitTarget(this);
	}
};

TargetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitTarget(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.TargetContext = TargetContext;

SHRParser.prototype.target = function() {

    var localctx = new TargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, SHRParser.RULE_target);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 512;
        this.targetPart();
        this.state = 517;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.DOT) {
            this.state = 513;
            this.match(SHRParser.DOT);
            this.state = 514;
            this.targetPart();
            this.state = 519;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 524;
        _la = this._input.LA(1);
        if(_la===SHRParser.OPEN_BRACKET) {
            this.state = 520;
            this.match(SHRParser.OPEN_BRACKET);
            this.state = 521;
            this.target();
            this.state = 522;
            this.match(SHRParser.CLOSE_BRACKET);
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

function TargetPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_targetPart;
    return this;
}

TargetPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetPartContext.prototype.constructor = TargetPartContext;

TargetPartContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRParser.LOWER_WORD, 0);
};

TargetPartContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRParser.DOT_SEPARATED_LW, 0);
};

TargetPartContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRParser.UPPER_WORD, 0);
};

TargetPartContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

TargetPartContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

TargetPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterTargetPart(this);
	}
};

TargetPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitTargetPart(this);
	}
};

TargetPartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitTargetPart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.TargetPartContext = TargetPartContext;

SHRParser.prototype.targetPart = function() {

    var localctx = new TargetPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, SHRParser.RULE_targetPart);
    try {
        this.state = 531;
        switch(this._input.LA(1)) {
        case SHRParser.LOWER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 526;
            this.match(SHRParser.LOWER_WORD);
            break;
        case SHRParser.DOT_SEPARATED_LW:
            this.enterOuterAlt(localctx, 2);
            this.state = 527;
            this.match(SHRParser.DOT_SEPARATED_LW);
            break;
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 3);
            this.state = 528;
            this.match(SHRParser.UPPER_WORD);
            break;
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 4);
            this.state = 529;
            this.match(SHRParser.ALL_CAPS);
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
            this.enterOuterAlt(localctx, 5);
            this.state = 530;
            this.primitive();
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

function UrlMappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_urlMapping;
    return this;
}

UrlMappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UrlMappingContext.prototype.constructor = UrlMappingContext;

UrlMappingContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

UrlMappingContext.prototype.KW_MAPS_TO = function() {
    return this.getToken(SHRParser.KW_MAPS_TO, 0);
};

UrlMappingContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

UrlMappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterUrlMapping(this);
	}
};

UrlMappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitUrlMapping(this);
	}
};

UrlMappingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitUrlMapping(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.UrlMappingContext = UrlMappingContext;

SHRParser.prototype.urlMapping = function() {

    var localctx = new UrlMappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, SHRParser.RULE_urlMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 533;
        this.source();
        this.state = 534;
        this.match(SHRParser.KW_MAPS_TO);
        this.state = 535;
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

CardMappingContext.prototype.targetPart = function() {
    return this.getTypedRuleContext(TargetPartContext,0);
};

CardMappingContext.prototype.KW_IS = function() {
    return this.getToken(SHRParser.KW_IS, 0);
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
    this.enterRule(localctx, 108, SHRParser.RULE_cardMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 537;
        this.targetPart();
        this.state = 538;
        this.match(SHRParser.KW_IS);
        this.state = 539;
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
    this.enterRule(localctx, 110, SHRParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 541;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 542;
        this.match(SHRParser.DOT);
        this.state = 543;
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
    this.enterRule(localctx, 112, SHRParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 545;
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
    this.enterRule(localctx, 114, SHRParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 547;
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
    this.enterRule(localctx, 116, SHRParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 549;
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
    this.enterRule(localctx, 118, SHRParser.RULE_simpleOrFQName);
    try {
        this.state = 553;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 551;
            this.simpleName();
            break;
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 552;
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
    this.enterRule(localctx, 120, SHRParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 555;
        this.match(SHRParser.KW_REF);
        this.state = 556;
        this.match(SHRParser.OPEN_PAREN);
        this.state = 557;
        this.simpleOrFQName();
        this.state = 558;
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
    this.enterRule(localctx, 122, SHRParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 560;
        this.match(SHRParser.CODE);
        this.state = 562;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 561;
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
    this.enterRule(localctx, 124, SHRParser.RULE_fullyQualifiedCode);
    try {
        this.state = 567;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 564;
            this.match(SHRParser.ALL_CAPS);
            this.state = 565;
            this.code();
            break;
        case SHRParser.KW_TBD_CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 566;
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
    this.enterRule(localctx, 126, SHRParser.RULE_codeOrFQCode);
    try {
        this.state = 571;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD_CODE:
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 569;
            this.fullyQualifiedCode();
            break;
        case SHRParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 570;
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
    this.enterRule(localctx, 128, SHRParser.RULE_codeFromVS);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 573;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.KW_CODE_FROM || _la===SHRParser.KW_CODING_FROM)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 574;
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
    this.enterRule(localctx, 130, SHRParser.RULE_elementWithConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 579;
        var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
        switch(la_) {
        case 1:
            this.state = 576;
            this.simpleOrFQName();
            break;

        case 2:
            this.state = 577;
            this.elementPath();
            break;

        case 3:
            this.state = 578;
            this.primitive();
            break;

        }
        this.state = 582;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_WITH) | (1 << SHRParser.KW_IS) | (1 << SHRParser.KW_IS_TYPE) | (1 << SHRParser.KW_VALUE_IS_TYPE) | (1 << SHRParser.KW_INCLUDES))) !== 0)) {
            this.state = 581;
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
    this.enterRule(localctx, 132, SHRParser.RULE_elementPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 584;
        this.simpleOrFQName();
        this.state = 604;
        var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
        switch(la_) {
        case 1:
            this.state = 587; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 585;
            		this.match(SHRParser.DOT);
            		this.state = 586;
            		this.simpleName();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 589; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,63, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 593;
            _la = this._input.LA(1);
            if(_la===SHRParser.DOT) {
                this.state = 591;
                this.match(SHRParser.DOT);
                this.state = 592;
                this.primitive();
            }

            break;

        case 2:
            this.state = 599;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,65,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 595;
                    this.match(SHRParser.DOT);
                    this.state = 596;
                    this.simpleName(); 
                }
                this.state = 601;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,65,this._ctx);
            }

            this.state = 602;
            this.match(SHRParser.DOT);
            this.state = 603;
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
    this.enterRule(localctx, 134, SHRParser.RULE_elementConstraint);
    try {
        this.state = 612;
        var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 606;
            this.elementCodeVSConstraint();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 607;
            this.elementCodeValueConstraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 608;
            this.elementIncludesCodeValueConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 609;
            this.elementBooleanConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 610;
            this.elementTypeConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 611;
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
    this.enterRule(localctx, 136, SHRParser.RULE_elementCodeVSConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 614;
        this.match(SHRParser.KW_WITH);
        this.state = 615;
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
    this.enterRule(localctx, 138, SHRParser.RULE_elementCodeValueConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 617;
        this.match(SHRParser.KW_IS);
        this.state = 618;
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
    this.enterRule(localctx, 140, SHRParser.RULE_elementIncludesCodeValueConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 622; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 620;
            this.match(SHRParser.KW_INCLUDES);
            this.state = 621;
            this.codeOrFQCode();
            this.state = 624; 
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
    this.enterRule(localctx, 142, SHRParser.RULE_elementBooleanConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 626;
        this.match(SHRParser.KW_IS);
        this.state = 627;
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
    this.enterRule(localctx, 144, SHRParser.RULE_elementTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 629;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.KW_IS_TYPE || _la===SHRParser.KW_VALUE_IS_TYPE)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 632;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 630;
            this.simpleOrFQName();
            break;
        case SHRParser.KW_TBD:
            this.state = 631;
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
    this.enterRule(localctx, 146, SHRParser.RULE_elementWithUnitsConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 634;
        this.match(SHRParser.KW_WITH);
        this.state = 635;
        this.match(SHRParser.KW_UNITS);
        this.state = 636;
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
    this.enterRule(localctx, 148, SHRParser.RULE_valueset);
    try {
        this.state = 643;
        switch(this._input.LA(1)) {
        case SHRParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 638;
            this.match(SHRParser.URL);
            break;
        case SHRParser.PATH_URL:
            this.enterOuterAlt(localctx, 2);
            this.state = 639;
            this.match(SHRParser.PATH_URL);
            break;
        case SHRParser.URN_OID:
            this.enterOuterAlt(localctx, 3);
            this.state = 640;
            this.match(SHRParser.URN_OID);
            break;
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 4);
            this.state = 641;
            this.simpleName();
            break;
        case SHRParser.KW_TBD:
            this.enterOuterAlt(localctx, 5);
            this.state = 642;
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
    this.enterRule(localctx, 150, SHRParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 645;
        _la = this._input.LA(1);
        if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (SHRParser.KW_BOOLEAN - 32)) | (1 << (SHRParser.KW_INTEGER - 32)) | (1 << (SHRParser.KW_STRING - 32)) | (1 << (SHRParser.KW_DECIMAL - 32)) | (1 << (SHRParser.KW_URI - 32)) | (1 << (SHRParser.KW_BASE64_BINARY - 32)) | (1 << (SHRParser.KW_INSTANT - 32)) | (1 << (SHRParser.KW_DATE - 32)) | (1 << (SHRParser.KW_DATE_TIME - 32)) | (1 << (SHRParser.KW_TIME - 32)) | (1 << (SHRParser.KW_CODE - 32)) | (1 << (SHRParser.KW_OID - 32)) | (1 << (SHRParser.KW_ID - 32)) | (1 << (SHRParser.KW_MARKDOWN - 32)) | (1 << (SHRParser.KW_UNSIGNED_INT - 32)) | (1 << (SHRParser.KW_POSITIVE_INT - 32)))) !== 0))) {
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
    this.enterRule(localctx, 152, SHRParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 647;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 648;
        this.match(SHRParser.RANGE);
        this.state = 649;
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
    this.enterRule(localctx, 154, SHRParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 651;
        this.match(SHRParser.KW_TBD);
        this.state = 653;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 652;
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
    this.enterRule(localctx, 156, SHRParser.RULE_tbdCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 655;
        this.match(SHRParser.KW_TBD_CODE);
        this.state = 657;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 656;
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
