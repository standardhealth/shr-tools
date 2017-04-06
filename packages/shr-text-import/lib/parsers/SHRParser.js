// Generated from SHRParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRParserListener = require('./SHRParserListener').SHRParserListener;
var SHRParserVisitor = require('./SHRParserVisitor').SHRParserVisitor;

var grammarFileName = "SHRParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3V\u0283\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t",
    "8\49\t9\4:\t:\4;\t;\4<\t<\4=\t=\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC",
    "\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4",
    "O\tO\3\2\3\2\3\2\5\2\u00a2\n\2\3\3\3\3\5\3\u00a6\n\3\3\3\5\3\u00a9\n",
    "\3\3\3\5\3\u00ac\n\3\3\3\5\3\u00af\n\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3",
    "\4\3\5\3\5\3\5\3\5\7\5\u00bd\n\5\f\5\16\5\u00c0\13\5\3\6\3\6\7\6\u00c4",
    "\n\6\f\6\16\6\u00c7\13\6\3\6\5\6\u00ca\n\6\3\6\6\6\u00cd\n\6\r\6\16",
    "\6\u00ce\5\6\u00d1\n\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\6\t\u00dc",
    "\n\t\r\t\16\t\u00dd\3\n\3\n\3\n\3\n\3\n\3\13\7\13\u00e6\n\13\f\13\16",
    "\13\u00e9\13\13\3\f\3\f\5\f\u00ed\n\f\3\r\3\r\5\r\u00f1\n\r\3\r\3\r",
    "\3\16\3\16\3\16\3\17\3\17\5\17\u00fa\n\17\3\17\3\17\3\20\3\20\3\20\3",
    "\21\6\21\u0102\n\21\r\21\16\21\u0103\3\22\3\22\3\22\5\22\u0109\n\22",
    "\3\23\5\23\u010c\n\23\3\23\7\23\u010f\n\23\f\23\16\23\u0112\13\23\3",
    "\24\3\24\3\24\5\24\u0117\n\24\3\25\3\25\3\25\7\25\u011c\n\25\f\25\16",
    "\25\u011f\13\25\3\25\3\25\3\25\3\25\7\25\u0125\n\25\f\25\16\25\u0128",
    "\13\25\3\25\3\25\5\25\u012c\n\25\3\26\3\26\3\26\3\26\3\26\3\26\3\26",
    "\3\26\7\26\u0136\n\26\f\26\16\26\u0139\13\26\3\26\3\26\5\26\u013d\n",
    "\26\3\27\3\27\3\27\3\27\3\27\3\27\5\27\u0145\n\27\3\30\3\30\3\30\7\30",
    "\u014a\n\30\f\30\16\30\u014d\13\30\3\31\5\31\u0150\n\31\3\31\3\31\3",
    "\31\3\31\3\31\7\31\u0157\n\31\f\31\16\31\u015a\13\31\3\31\3\31\5\31",
    "\u015e\n\31\3\32\3\32\3\32\3\32\5\32\u0164\n\32\3\33\3\33\3\33\5\33",
    "\u0169\n\33\3\34\3\34\3\34\5\34\u016e\n\34\3\35\3\35\3\35\7\35\u0173",
    "\n\35\f\35\16\35\u0176\13\35\3\36\3\36\3\36\3\37\3\37\5\37\u017d\n\37",
    "\3\37\5\37\u0180\n\37\3\37\5\37\u0183\n\37\3\37\3\37\3 \3 \3 \3 \3 ",
    "\3 \3!\7!\u018e\n!\f!\16!\u0191\13!\3\"\3\"\5\"\u0195\n\"\3\"\5\"\u0198",
    "\n\"\3#\3#\3#\3#\5#\u019e\n#\3$\6$\u01a1\n$\r$\16$\u01a2\3%\3%\3%\3",
    "%\3%\5%\u01aa\n%\3&\3&\5&\u01ae\n&\3\'\3\'\3\'\3\'\7\'\u01b4\n\'\f\'",
    "\16\'\u01b7\13\'\3(\3(\3(\3)\3)\3)\3*\6*\u01c0\n*\r*\16*\u01c1\3+\3",
    "+\5+\u01c6\n+\3,\3,\3,\3,\3-\3-\3-\3-\3-\3-\3.\3.\3.\3/\7/\u01d6\n/",
    "\f/\16/\u01d9\13/\3\60\3\60\7\60\u01dd\n\60\f\60\16\60\u01e0\13\60\3",
    "\61\3\61\3\61\5\61\u01e5\n\61\3\61\3\61\3\62\3\62\5\62\u01eb\n\62\3",
    "\63\3\63\3\63\3\63\3\64\3\64\3\64\7\64\u01f4\n\64\f\64\16\64\u01f7\13",
    "\64\3\65\3\65\3\65\3\65\3\65\7\65\u01fe\n\65\f\65\16\65\u0201\13\65",
    "\3\66\3\66\3\66\5\66\u0206\n\66\3\67\3\67\3\67\3\67\3\67\38\38\38\3",
    "8\39\39\3:\3:\3;\3;\3<\3<\5<\u0219\n<\3=\3=\3=\3=\3=\3>\3>\5>\u0222",
    "\n>\3?\3?\3?\5?\u0227\n?\3@\3@\5@\u022b\n@\3A\3A\3A\3B\3B\3B\5B\u0233",
    "\nB\3B\5B\u0236\nB\3C\3C\3C\6C\u023b\nC\rC\16C\u023c\3C\3C\5C\u0241",
    "\nC\3C\3C\7C\u0245\nC\fC\16C\u0248\13C\3C\3C\5C\u024c\nC\3D\3D\3D\3",
    "D\3D\3D\5D\u0254\nD\3E\3E\3E\3F\3F\3F\3G\3G\6G\u025e\nG\rG\16G\u025f",
    "\3H\3H\3H\3I\3I\3I\5I\u0268\nI\3J\3J\3J\3J\3K\3K\3K\3K\3K\5K\u0273\n",
    "K\3L\3L\3M\3M\3M\3M\3N\3N\5N\u027d\nN\3O\3O\5O\u0281\nO\3O\2\2P\2\4",
    "\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJL",
    "NPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c",
    "\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c\2\n\4\2CCEF\3\2KL\3",
    "\2IJ\3\2\61\63\3\2\34\35\3\2\31\32\3\2 \60\4\2<<HH\u028f\2\u00a1\3\2",
    "\2\2\4\u00a3\3\2\2\2\6\u00b2\3\2\2\2\b\u00b8\3\2\2\2\n\u00d0\3\2\2\2",
    "\f\u00d2\3\2\2\2\16\u00d5\3\2\2\2\20\u00db\3\2\2\2\22\u00df\3\2\2\2",
    "\24\u00e7\3\2\2\2\26\u00ec\3\2\2\2\30\u00ee\3\2\2\2\32\u00f4\3\2\2\2",
    "\34\u00f7\3\2\2\2\36\u00fd\3\2\2\2 \u0101\3\2\2\2\"\u0108\3\2\2\2$\u010b",
    "\3\2\2\2&\u0113\3\2\2\2(\u012b\3\2\2\2*\u013c\3\2\2\2,\u0144\3\2\2\2",
    ".\u0146\3\2\2\2\60\u014f\3\2\2\2\62\u0163\3\2\2\2\64\u0165\3\2\2\2\66",
    "\u016a\3\2\2\28\u016f\3\2\2\2:\u0177\3\2\2\2<\u017a\3\2\2\2>\u0186\3",
    "\2\2\2@\u018f\3\2\2\2B\u0192\3\2\2\2D\u0199\3\2\2\2F\u01a0\3\2\2\2H",
    "\u01a9\3\2\2\2J\u01ab\3\2\2\2L\u01af\3\2\2\2N\u01b8\3\2\2\2P\u01bb\3",
    "\2\2\2R\u01bf\3\2\2\2T\u01c5\3\2\2\2V\u01c7\3\2\2\2X\u01cb\3\2\2\2Z",
    "\u01d1\3\2\2\2\\\u01d7\3\2\2\2^\u01da\3\2\2\2`\u01e1\3\2\2\2b\u01ea",
    "\3\2\2\2d\u01ec\3\2\2\2f\u01f0\3\2\2\2h\u01f8\3\2\2\2j\u0205\3\2\2\2",
    "l\u0207\3\2\2\2n\u020c\3\2\2\2p\u0210\3\2\2\2r\u0212\3\2\2\2t\u0214",
    "\3\2\2\2v\u0218\3\2\2\2x\u021a\3\2\2\2z\u021f\3\2\2\2|\u0226\3\2\2\2",
    "~\u022a\3\2\2\2\u0080\u022c\3\2\2\2\u0082\u0232\3\2\2\2\u0084\u0237",
    "\3\2\2\2\u0086\u0253\3\2\2\2\u0088\u0255\3\2\2\2\u008a\u0258\3\2\2\2",
    "\u008c\u025d\3\2\2\2\u008e\u0261\3\2\2\2\u0090\u0264\3\2\2\2\u0092\u0269",
    "\3\2\2\2\u0094\u0272\3\2\2\2\u0096\u0274\3\2\2\2\u0098\u0276\3\2\2\2",
    "\u009a\u027a\3\2\2\2\u009c\u027e\3\2\2\2\u009e\u00a2\5\4\3\2\u009f\u00a2",
    "\5<\37\2\u00a0\u00a2\5V,\2\u00a1\u009e\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1",
    "\u00a0\3\2\2\2\u00a2\3\3\2\2\2\u00a3\u00a5\5\6\4\2\u00a4\u00a6\5:\36",
    "\2\u00a5\u00a4\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6\u00a8\3\2\2\2\u00a7",
    "\u00a9\5\b\5\2\u00a8\u00a7\3\2\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00ab\3",
    "\2\2\2\u00aa\u00ac\5\n\6\2\u00ab\u00aa\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac",
    "\u00ae\3\2\2\2\u00ad\u00af\5\20\t\2\u00ae\u00ad\3\2\2\2\u00ae\u00af",
    "\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0\u00b1\5\24\13\2\u00b1\5\3\2\2\2\u00b2",
    "\u00b3\7\3\2\2\u00b3\u00b4\7\4\2\2\u00b4\u00b5\5n8\2\u00b5\u00b6\7\7",
    "\2\2\u00b6\u00b7\5p9\2\u00b7\7\3\2\2\2\u00b8\u00b9\7\b\2\2\u00b9\u00be",
    "\5p9\2\u00ba\u00bb\7;\2\2\u00bb\u00bd\5p9\2\u00bc\u00ba\3\2\2\2\u00bd",
    "\u00c0\3\2\2\2\u00be\u00bc\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf\t\3\2\2",
    "\2\u00c0\u00be\3\2\2\2\u00c1\u00c5\5\f\7\2\u00c2\u00c4\5\16\b\2\u00c3",
    "\u00c2\3\2\2\2\u00c4\u00c7\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c5\u00c6\3",
    "\2\2\2\u00c6\u00d1\3\2\2\2\u00c7\u00c5\3\2\2\2\u00c8\u00ca\5\f\7\2\u00c9",
    "\u00c8\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca\u00cc\3\2\2\2\u00cb\u00cd\5",
    "\16\b\2\u00cc\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00cc\3\2\2\2",
    "\u00ce\u00cf\3\2\2\2\u00cf\u00d1\3\2\2\2\u00d0\u00c1\3\2\2\2\u00d0\u00c9",
    "\3\2\2\2\u00d1\13\3\2\2\2\u00d2\u00d3\7\t\2\2\u00d3\u00d4\7C\2\2\u00d4",
    "\r\3\2\2\2\u00d5\u00d6\7\t\2\2\u00d6\u00d7\7I\2\2\u00d7\u00d8\7:\2\2",
    "\u00d8\u00d9\7C\2\2\u00d9\17\3\2\2\2\u00da\u00dc\5\22\n\2\u00db\u00da",
    "\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00db\3\2\2\2\u00dd\u00de\3\2\2\2",
    "\u00de\21\3\2\2\2\u00df\u00e0\7\n\2\2\u00e0\u00e1\7I\2\2\u00e1\u00e2",
    "\7:\2\2\u00e2\u00e3\t\2\2\2\u00e3\23\3\2\2\2\u00e4\u00e6\5\26\f\2\u00e5",
    "\u00e4\3\2\2\2\u00e6\u00e9\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e7\u00e8\3",
    "\2\2\2\u00e8\25\3\2\2\2\u00e9\u00e7\3\2\2\2\u00ea\u00ed\5\30\r\2\u00eb",
    "\u00ed\5\34\17\2\u00ec\u00ea\3\2\2\2\u00ec\u00eb\3\2\2\2\u00ed\27\3",
    "\2\2\2\u00ee\u00f0\5\32\16\2\u00ef\u00f1\5 \21\2\u00f0\u00ef\3\2\2\2",
    "\u00f0\u00f1\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\u00f3\5$\23\2\u00f3\31",
    "\3\2\2\2\u00f4\u00f5\7\13\2\2\u00f5\u00f6\5r:\2\u00f6\33\3\2\2\2\u00f7",
    "\u00f9\5\36\20\2\u00f8\u00fa\5 \21\2\u00f9\u00f8\3\2\2\2\u00f9\u00fa",
    "\3\2\2\2\u00fa\u00fb\3\2\2\2\u00fb\u00fc\5$\23\2\u00fc\35\3\2\2\2\u00fd",
    "\u00fe\7\f\2\2\u00fe\u00ff\5r:\2\u00ff\37\3\2\2\2\u0100\u0102\5\"\22",
    "\2\u0101\u0100\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0101\3\2\2\2\u0103",
    "\u0104\3\2\2\2\u0104!\3\2\2\2\u0105\u0109\5\64\33\2\u0106\u0109\5\66",
    "\34\2\u0107\u0109\5:\36\2\u0108\u0105\3\2\2\2\u0108\u0106\3\2\2\2\u0108",
    "\u0107\3\2\2\2\u0109#\3\2\2\2\u010a\u010c\5&\24\2\u010b\u010a\3\2\2",
    "\2\u010b\u010c\3\2\2\2\u010c\u0110\3\2\2\2\u010d\u010f\5.\30\2\u010e",
    "\u010d\3\2\2\2\u010f\u0112\3\2\2\2\u0110\u010e\3\2\2\2\u0110\u0111\3",
    "\2\2\2\u0111%\3\2\2\2\u0112\u0110\3\2\2\2\u0113\u0116\7\16\2\2\u0114",
    "\u0117\5(\25\2\u0115\u0117\5*\26\2\u0116\u0114\3\2\2\2\u0116\u0115\3",
    "\2\2\2\u0117\'\3\2\2\2\u0118\u011d\5,\27\2\u0119\u011a\7\26\2\2\u011a",
    "\u011c\5,\27\2\u011b\u0119\3\2\2\2\u011c\u011f\3\2\2\2\u011d\u011b\3",
    "\2\2\2\u011d\u011e\3\2\2\2\u011e\u012c\3\2\2\2\u011f\u011d\3\2\2\2\u0120",
    "\u0121\7=\2\2\u0121\u0126\5,\27\2\u0122\u0123\7\26\2\2\u0123\u0125\5",
    ",\27\2\u0124\u0122\3\2\2\2\u0125\u0128\3\2\2\2\u0126\u0124\3\2\2\2\u0126",
    "\u0127\3\2\2\2\u0127\u0129\3\2\2\2\u0128\u0126\3\2\2\2\u0129\u012a\7",
    ">\2\2\u012a\u012c\3\2\2\2\u012b\u0118\3\2\2\2\u012b\u0120\3\2\2\2\u012c",
    ")\3\2\2\2\u012d\u012e\5\u0098M\2\u012e\u012f\5,\27\2\u012f\u013d\3\2",
    "\2\2\u0130\u0131\5\u0098M\2\u0131\u0132\7=\2\2\u0132\u0137\5,\27\2\u0133",
    "\u0134\7\26\2\2\u0134\u0136\5,\27\2\u0135\u0133\3\2\2\2\u0136\u0139",
    "\3\2\2\2\u0137\u0135\3\2\2\2\u0137\u0138\3\2\2\2\u0138\u013a\3\2\2\2",
    "\u0139\u0137\3\2\2\2\u013a\u013b\7>\2\2\u013b\u013d\3\2\2\2\u013c\u012d",
    "\3\2\2\2\u013c\u0130\3\2\2\2\u013d+\3\2\2\2\u013e\u0145\5v<\2\u013f",
    "\u0145\5x=\2\u0140\u0145\5\u0096L\2\u0141\u0145\5\u0080A\2\u0142\u0145",
    "\5\u0082B\2\u0143\u0145\5\u009aN\2\u0144\u013e\3\2\2\2\u0144\u013f\3",
    "\2\2\2\u0144\u0140\3\2\2\2\u0144\u0141\3\2\2\2\u0144\u0142\3\2\2\2\u0144",
    "\u0143\3\2\2\2\u0145-\3\2\2\2\u0146\u014b\5\60\31\2\u0147\u0148\7\26",
    "\2\2\u0148\u014a\5\60\31\2\u0149\u0147\3\2\2\2\u014a\u014d\3\2\2\2\u014b",
    "\u0149\3\2\2\2\u014b\u014c\3\2\2\2\u014c/\3\2\2\2\u014d\u014b\3\2\2",
    "\2\u014e\u0150\5\u0098M\2\u014f\u014e\3\2\2\2\u014f\u0150\3\2\2\2\u0150",
    "\u015d\3\2\2\2\u0151\u015e\5\62\32\2\u0152\u0153\7=\2\2\u0153\u0158",
    "\5\62\32\2\u0154\u0155\7\26\2\2\u0155\u0157\5\62\32\2\u0156\u0154\3",
    "\2\2\2\u0157\u015a\3\2\2\2\u0158\u0156\3\2\2\2\u0158\u0159\3\2\2\2\u0159",
    "\u015b\3\2\2\2\u015a\u0158\3\2\2\2\u015b\u015c\7>\2\2\u015c\u015e\3",
    "\2\2\2\u015d\u0151\3\2\2\2\u015d\u0152\3\2\2\2\u015e\61\3\2\2\2\u015f",
    "\u0164\5v<\2\u0160\u0164\5x=\2\u0161\u0164\5\u0082B\2\u0162\u0164\5",
    "\u009aN\2\u0163\u015f\3\2\2\2\u0163\u0160\3\2\2\2\u0163\u0161\3\2\2",
    "\2\u0163\u0162\3\2\2\2\u0164\63\3\2\2\2\u0165\u0168\7\r\2\2\u0166\u0169",
    "\5v<\2\u0167\u0169\5\u009aN\2\u0168\u0166\3\2\2\2\u0168\u0167\3\2\2",
    "\2\u0169\65\3\2\2\2\u016a\u016d\7\23\2\2\u016b\u016e\5\u009aN\2\u016c",
    "\u016e\58\35\2\u016d\u016b\3\2\2\2\u016d\u016c\3\2\2\2\u016e\67\3\2",
    "\2\2\u016f\u0174\5|?\2\u0170\u0171\7;\2\2\u0171\u0173\5|?\2\u0172\u0170",
    "\3\2\2\2\u0173\u0176\3\2\2\2\u0174\u0172\3\2\2\2\u0174\u0175\3\2\2\2",
    "\u01759\3\2\2\2\u0176\u0174\3\2\2\2\u0177\u0178\7\24\2\2\u0178\u0179",
    "\7N\2\2\u0179;\3\2\2\2\u017a\u017c\5> \2\u017b\u017d\5\b\5\2\u017c\u017b",
    "\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u017f\3\2\2\2\u017e\u0180\5\n\6\2",
    "\u017f\u017e\3\2\2\2\u017f\u0180\3\2\2\2\u0180\u0182\3\2\2\2\u0181\u0183",
    "\5\20\t\2\u0182\u0181\3\2\2\2\u0182\u0183\3\2\2\2\u0183\u0184\3\2\2",
    "\2\u0184\u0185\5@!\2\u0185=\3\2\2\2\u0186\u0187\7\3\2\2\u0187\u0188",
    "\7\5\2\2\u0188\u0189\5n8\2\u0189\u018a\7\7\2\2\u018a\u018b\5p9\2\u018b",
    "?\3\2\2\2\u018c\u018e\5B\"\2\u018d\u018c\3\2\2\2\u018e\u0191\3\2\2\2",
    "\u018f\u018d\3\2\2\2\u018f\u0190\3\2\2\2\u0190A\3\2\2\2\u0191\u018f",
    "\3\2\2\2\u0192\u0194\5D#\2\u0193\u0195\5R*\2\u0194\u0193\3\2\2\2\u0194",
    "\u0195\3\2\2\2\u0195\u0197\3\2\2\2\u0196\u0198\5F$\2\u0197\u0196\3\2",
    "\2\2\u0197\u0198\3\2\2\2\u0198C\3\2\2\2\u0199\u019d\7\17\2\2\u019a\u019e",
    "\7C\2\2\u019b\u019e\7E\2\2\u019c\u019e\5r:\2\u019d\u019a\3\2\2\2\u019d",
    "\u019b\3\2\2\2\u019d\u019c\3\2\2\2\u019eE\3\2\2\2\u019f\u01a1\5H%\2",
    "\u01a0\u019f\3\2\2\2\u01a1\u01a2\3\2\2\2\u01a2\u01a0\3\2\2\2\u01a2\u01a3",
    "\3\2\2\2\u01a3G\3\2\2\2\u01a4\u01aa\5|?\2\u01a5\u01aa\5J&\2\u01a6\u01aa",
    "\5L\'\2\u01a7\u01aa\5P)\2\u01a8\u01aa\5N(\2\u01a9\u01a4\3\2\2\2\u01a9",
    "\u01a5\3\2\2\2\u01a9\u01a6\3\2\2\2\u01a9\u01a7\3\2\2\2\u01a9\u01a8\3",
    "\2\2\2\u01aaI\3\2\2\2\u01ab\u01ad\7G\2\2\u01ac\u01ae\7N\2\2\u01ad\u01ac",
    "\3\2\2\2\u01ad\u01ae\3\2\2\2\u01aeK\3\2\2\2\u01af\u01b0\7\21\2\2\u01b0",
    "\u01b5\5|?\2\u01b1\u01b2\7\22\2\2\u01b2\u01b4\5|?\2\u01b3\u01b1\3\2",
    "\2\2\u01b4\u01b7\3\2\2\2\u01b5\u01b3\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6",
    "M\3\2\2\2\u01b7\u01b5\3\2\2\2\u01b8\u01b9\7\20\2\2\u01b9\u01ba\7I\2",
    "\2\u01baO\3\2\2\2\u01bb\u01bc\7\20\2\2\u01bc\u01bd\5|?\2\u01bdQ\3\2",
    "\2\2\u01be\u01c0\5T+\2\u01bf\u01be\3\2\2\2\u01c0\u01c1\3\2\2\2\u01c1",
    "\u01bf\3\2\2\2\u01c1\u01c2\3\2\2\2\u01c2S\3\2\2\2\u01c3\u01c6\5\66\34",
    "\2\u01c4\u01c6\5:\36\2\u01c5\u01c3\3\2\2\2\u01c5\u01c4\3\2\2\2\u01c6",
    "U\3\2\2\2\u01c7\u01c8\5X-\2\u01c8\u01c9\5Z.\2\u01c9\u01ca\5\\/\2\u01ca",
    "W\3\2\2\2\u01cb\u01cc\7\3\2\2\u01cc\u01cd\7\6\2\2\u01cd\u01ce\5n8\2",
    "\u01ce\u01cf\7\7\2\2\u01cf\u01d0\5p9\2\u01d0Y\3\2\2\2\u01d1\u01d2\7",
    "\65\2\2\u01d2\u01d3\5r:\2\u01d3[\3\2\2\2\u01d4\u01d6\5^\60\2\u01d5\u01d4",
    "\3\2\2\2\u01d6\u01d9\3\2\2\2\u01d7\u01d5\3\2\2\2\u01d7\u01d8\3\2\2\2",
    "\u01d8]\3\2\2\2\u01d9\u01d7\3\2\2\2\u01da\u01de\5`\61\2\u01db\u01dd",
    "\5b\62\2\u01dc\u01db\3\2\2\2\u01dd\u01e0\3\2\2\2\u01de\u01dc\3\2\2\2",
    "\u01de\u01df\3\2\2\2\u01df_\3\2\2\2\u01e0\u01de\3\2\2\2\u01e1\u01e4",
    "\5r:\2\u01e2\u01e3\7\66\2\2\u01e3\u01e5\7S\2\2\u01e4\u01e2\3\2\2\2\u01e4",
    "\u01e5\3\2\2\2\u01e5\u01e6\3\2\2\2\u01e6\u01e7\7A\2\2\u01e7a\3\2\2\2",
    "\u01e8\u01eb\5d\63\2\u01e9\u01eb\5l\67\2\u01ea\u01e8\3\2\2\2\u01ea\u01e9",
    "\3\2\2\2\u01ebc\3\2\2\2\u01ec\u01ed\5f\64\2\u01ed\u01ee\7\66\2\2\u01ee",
    "\u01ef\7S\2\2\u01efe\3\2\2\2\u01f0\u01f5\5h\65\2\u01f1\u01f2\79\2\2",
    "\u01f2\u01f4\5h\65\2\u01f3\u01f1\3\2\2\2\u01f4\u01f7\3\2\2\2\u01f5\u01f3",
    "\3\2\2\2\u01f5\u01f6\3\2\2\2\u01f6g\3\2\2\2\u01f7\u01f5\3\2\2\2\u01f8",
    "\u01ff\5j\66\2\u01f9\u01fa\7?\2\2\u01fa\u01fb\5j\66\2\u01fb\u01fc\7",
    "@\2\2\u01fc\u01fe\3\2\2\2\u01fd\u01f9\3\2\2\2\u01fe\u0201\3\2\2\2\u01ff",
    "\u01fd\3\2\2\2\u01ff\u0200\3\2\2\2\u0200i\3\2\2\2\u0201\u01ff\3\2\2",
    "\2\u0202\u0206\5v<\2\u0203\u0206\5\u0096L\2\u0204\u0206\5\u009aN\2\u0205",
    "\u0202\3\2\2\2\u0205\u0203\3\2\2\2\u0205\u0204\3\2\2\2\u0206k\3\2\2",
    "\2\u0207\u0208\7\67\2\2\u0208\u0209\7U\2\2\u0209\u020a\78\2\2\u020a",
    "\u020b\5\u0098M\2\u020bm\3\2\2\2\u020c\u020d\7H\2\2\u020d\u020e\79\2",
    "\2\u020e\u020f\7H\2\2\u020fo\3\2\2\2\u0210\u0211\t\3\2\2\u0211q\3\2",
    "\2\2\u0212\u0213\t\4\2\2\u0213s\3\2\2\2\u0214\u0215\7M\2\2\u0215u\3",
    "\2\2\2\u0216\u0219\5r:\2\u0217\u0219\5t;\2\u0218\u0216\3\2\2\2\u0218",
    "\u0217\3\2\2\2\u0219w\3\2\2\2\u021a\u021b\7\25\2\2\u021b\u021c\7=\2",
    "\2\u021c\u021d\5v<\2\u021d\u021e\7>\2\2\u021ey\3\2\2\2\u021f\u0221\7",
    "G\2\2\u0220\u0222\7N\2\2\u0221\u0220\3\2\2\2\u0221\u0222\3\2\2\2\u0222",
    "{\3\2\2\2\u0223\u0224\7I\2\2\u0224\u0227\5z>\2\u0225\u0227\5\u009cO",
    "\2\u0226\u0223\3\2\2\2\u0226\u0225\3\2\2\2\u0227}\3\2\2\2\u0228\u022b",
    "\5|?\2\u0229\u022b\5z>\2\u022a\u0228\3\2\2\2\u022a\u0229\3\2\2\2\u022b",
    "\177\3\2\2\2\u022c\u022d\t\5\2\2\u022d\u022e\5\u0094K\2\u022e\u0081",
    "\3\2\2\2\u022f\u0233\5v<\2\u0230\u0233\5\u0084C\2\u0231\u0233\5\u0096",
    "L\2\u0232\u022f\3\2\2\2\u0232\u0230\3\2\2\2\u0232\u0231\3\2\2\2\u0233",
    "\u0235\3\2\2\2\u0234\u0236\5\u0086D\2\u0235\u0234\3\2\2\2\u0235\u0236",
    "\3\2\2\2\u0236\u0083\3\2\2\2\u0237\u024b\5v<\2\u0238\u0239\79\2\2\u0239",
    "\u023b\5r:\2\u023a\u0238\3\2\2\2\u023b\u023c\3\2\2\2\u023c\u023a\3\2",
    "\2\2\u023c\u023d\3\2\2\2\u023d\u0240\3\2\2\2\u023e\u023f\79\2\2\u023f",
    "\u0241\5\u0096L\2\u0240\u023e\3\2\2\2\u0240\u0241\3\2\2\2\u0241\u024c",
    "\3\2\2\2\u0242\u0243\79\2\2\u0243\u0245\5r:\2\u0244\u0242\3\2\2\2\u0245",
    "\u0248\3\2\2\2\u0246\u0244\3\2\2\2\u0246\u0247\3\2\2\2\u0247\u0249\3",
    "\2\2\2\u0248\u0246\3\2\2\2\u0249\u024a\79\2\2\u024a\u024c\5\u0096L\2",
    "\u024b\u023a\3\2\2\2\u024b\u0246\3\2\2\2\u024c\u0085\3\2\2\2\u024d\u0254",
    "\5\u0088E\2\u024e\u0254\5\u008aF\2\u024f\u0254\5\u008cG\2\u0250\u0254",
    "\5\u008eH\2\u0251\u0254\5\u0090I\2\u0252\u0254\5\u0092J\2\u0253\u024d",
    "\3\2\2\2\u0253\u024e\3\2\2\2\u0253\u024f\3\2\2\2\u0253\u0250\3\2\2\2",
    "\u0253\u0251\3\2\2\2\u0253\u0252\3\2\2\2\u0254\u0087\3\2\2\2\u0255\u0256",
    "\7\27\2\2\u0256\u0257\5\u0080A\2\u0257\u0089\3\2\2\2\u0258\u0259\7\30",
    "\2\2\u0259\u025a\5~@\2\u025a\u008b\3\2\2\2\u025b\u025c\7\33\2\2\u025c",
    "\u025e\5~@\2\u025d\u025b\3\2\2\2\u025e\u025f\3\2\2\2\u025f\u025d\3\2",
    "\2\2\u025f\u0260\3\2\2\2\u0260\u008d\3\2\2\2\u0261\u0262\7\30\2\2\u0262",
    "\u0263\t\6\2\2\u0263\u008f\3\2\2\2\u0264\u0267\t\7\2\2\u0265\u0268\5",
    "v<\2\u0266\u0268\5\u009aN\2\u0267\u0265\3\2\2\2\u0267\u0266\3\2\2\2",
    "\u0268\u0091\3\2\2\2\u0269\u026a\7\27\2\2\u026a\u026b\7\64\2\2\u026b",
    "\u026c\5|?\2\u026c\u0093\3\2\2\2\u026d\u0273\7C\2\2\u026e\u0273\7D\2",
    "\2\u026f\u0273\7E\2\2\u0270\u0273\5r:\2\u0271\u0273\5\u009aN\2\u0272",
    "\u026d\3\2\2\2\u0272\u026e\3\2\2\2\u0272\u026f\3\2\2\2\u0272\u0270\3",
    "\2\2\2\u0272\u0271\3\2\2\2\u0273\u0095\3\2\2\2\u0274\u0275\t\b\2\2\u0275",
    "\u0097\3\2\2\2\u0276\u0277\7H\2\2\u0277\u0278\7B\2\2\u0278\u0279\t\t",
    "\2\2\u0279\u0099\3\2\2\2\u027a\u027c\7\36\2\2\u027b\u027d\7N\2\2\u027c",
    "\u027b\3\2\2\2\u027c\u027d\3\2\2\2\u027d\u009b\3\2\2\2\u027e\u0280\7",
    "\37\2\2\u027f\u0281\7N\2\2\u0280\u027f\3\2\2\2\u0280\u0281\3\2\2\2\u0281",
    "\u009d\3\2\2\2H\u00a1\u00a5\u00a8\u00ab\u00ae\u00be\u00c5\u00c9\u00ce",
    "\u00d0\u00dd\u00e7\u00ec\u00f0\u00f9\u0103\u0108\u010b\u0110\u0116\u011d",
    "\u0126\u012b\u0137\u013c\u0144\u014b\u014f\u0158\u015d\u0163\u0168\u016d",
    "\u0174\u017c\u017f\u0182\u018f\u0194\u0197\u019d\u01a2\u01a9\u01ad\u01b5",
    "\u01c1\u01c5\u01d7\u01de\u01e4\u01ea\u01f5\u01ff\u0205\u0218\u0221\u0226",
    "\u022a\u0232\u0235\u023c\u0240\u0246\u024b\u0253\u025f\u0267\u0272\u027c",
    "\u0280"].join("");


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
                      "WS2", "TARGET_WORD", "WS3" ];

var ruleNames =  [ "shr", "dataDefsDoc", "dataDefsHeader", "usesStatement", 
                   "pathDefs", "defaultPathDef", "pathDef", "vocabularyDefs", 
                   "vocabularyDef", "dataDefs", "dataDef", "elementDef", 
                   "elementHeader", "entryDef", "entryHeader", "elementProps", 
                   "elementProp", "values", "value", "uncountedValue", "countedValue", 
                   "valueType", "field", "countedField", "fieldType", "basedOnProp", 
                   "conceptProp", "concepts", "descriptionProp", "valuesetDefsDoc", 
                   "valuesetDefsHeader", "valuesetDefs", "valuesetDef", 
                   "valuesetHeader", "valuesetValues", "valuesetValue", 
                   "valuesetInlineValue", "valuesetDescendingFrom", "valuesetFromCodeSystem", 
                   "valuesetFromCode", "valuesetProps", "valuesetProp", 
                   "mappingsDoc", "mappingsHeader", "targetStatement", "mappingDefs", 
                   "mappingDef", "mappingDefHeader", "mappingRule", "fieldMapping", 
                   "source", "sourcePart", "sourceWord", "cardMapping", 
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
SHRParser.TARGET_WORD = 83;
SHRParser.WS3 = 84;

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
SHRParser.RULE_valuesetFromCodeSystem = 38;
SHRParser.RULE_valuesetFromCode = 39;
SHRParser.RULE_valuesetProps = 40;
SHRParser.RULE_valuesetProp = 41;
SHRParser.RULE_mappingsDoc = 42;
SHRParser.RULE_mappingsHeader = 43;
SHRParser.RULE_targetStatement = 44;
SHRParser.RULE_mappingDefs = 45;
SHRParser.RULE_mappingDef = 46;
SHRParser.RULE_mappingDefHeader = 47;
SHRParser.RULE_mappingRule = 48;
SHRParser.RULE_fieldMapping = 49;
SHRParser.RULE_source = 50;
SHRParser.RULE_sourcePart = 51;
SHRParser.RULE_sourceWord = 52;
SHRParser.RULE_cardMapping = 53;
SHRParser.RULE_version = 54;
SHRParser.RULE_namespace = 55;
SHRParser.RULE_simpleName = 56;
SHRParser.RULE_fullyQualifiedName = 57;
SHRParser.RULE_simpleOrFQName = 58;
SHRParser.RULE_ref = 59;
SHRParser.RULE_code = 60;
SHRParser.RULE_fullyQualifiedCode = 61;
SHRParser.RULE_codeOrFQCode = 62;
SHRParser.RULE_codeFromVS = 63;
SHRParser.RULE_elementWithConstraint = 64;
SHRParser.RULE_elementPath = 65;
SHRParser.RULE_elementConstraint = 66;
SHRParser.RULE_elementCodeVSConstraint = 67;
SHRParser.RULE_elementCodeValueConstraint = 68;
SHRParser.RULE_elementIncludesCodeValueConstraint = 69;
SHRParser.RULE_elementBooleanConstraint = 70;
SHRParser.RULE_elementTypeConstraint = 71;
SHRParser.RULE_elementWithUnitsConstraint = 72;
SHRParser.RULE_valueset = 73;
SHRParser.RULE_primitive = 74;
SHRParser.RULE_count = 75;
SHRParser.RULE_tbd = 76;
SHRParser.RULE_tbdCode = 77;

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
        this.state = 159;
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 156;
            this.dataDefsDoc();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 157;
            this.valuesetDefsDoc();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 158;
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
        this.state = 161;
        this.dataDefsHeader();
        this.state = 163;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_DESCRIPTION) {
            this.state = 162;
            this.descriptionProp();
        }

        this.state = 166;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_USES) {
            this.state = 165;
            this.usesStatement();
        }

        this.state = 169;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_PATH) {
            this.state = 168;
            this.pathDefs();
        }

        this.state = 172;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VOCABULARY) {
            this.state = 171;
            this.vocabularyDefs();
        }

        this.state = 174;
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
        this.state = 176;
        this.match(SHRParser.KW_GRAMMAR);
        this.state = 177;
        this.match(SHRParser.KW_G_DATA_ELEMENT);
        this.state = 178;
        this.version();
        this.state = 179;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 180;
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
        this.state = 182;
        this.match(SHRParser.KW_USES);
        this.state = 183;
        this.namespace();
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 184;
            this.match(SHRParser.COMMA);
            this.state = 185;
            this.namespace();
            this.state = 190;
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
        this.state = 206;
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 191;
            this.defaultPathDef();
            this.state = 195;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_PATH) {
                this.state = 192;
                this.pathDef();
                this.state = 197;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 199;
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            if(la_===1) {
                this.state = 198;
                this.defaultPathDef();

            }
            this.state = 202; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 201;
                this.pathDef();
                this.state = 204; 
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
        this.state = 208;
        this.match(SHRParser.KW_PATH);
        this.state = 209;
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
        this.state = 211;
        this.match(SHRParser.KW_PATH);
        this.state = 212;
        this.match(SHRParser.ALL_CAPS);
        this.state = 213;
        this.match(SHRParser.EQUAL);
        this.state = 214;
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
        this.state = 217; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 216;
            this.vocabularyDef();
            this.state = 219; 
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
        this.state = 221;
        this.match(SHRParser.KW_VOCABULARY);
        this.state = 222;
        this.match(SHRParser.ALL_CAPS);
        this.state = 223;
        this.match(SHRParser.EQUAL);
        this.state = 224;
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
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_ELEMENT || _la===SHRParser.KW_ENTRY_ELEMENT) {
            this.state = 226;
            this.dataDef();
            this.state = 231;
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
        this.state = 234;
        switch(this._input.LA(1)) {
        case SHRParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            this.elementDef();
            break;
        case SHRParser.KW_ENTRY_ELEMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 233;
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
        this.state = 236;
        this.elementHeader();
        this.state = 238;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BASED_ON) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 237;
            this.elementProps();
        }

        this.state = 240;
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
        this.state = 242;
        this.match(SHRParser.KW_ELEMENT);
        this.state = 243;
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
        this.state = 245;
        this.entryHeader();
        this.state = 247;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BASED_ON) | (1 << SHRParser.KW_CONCEPT) | (1 << SHRParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 246;
            this.elementProps();
        }

        this.state = 249;
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
        this.state = 251;
        this.match(SHRParser.KW_ENTRY_ELEMENT);
        this.state = 252;
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
        this.state = 255; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 254;
            this.elementProp();
            this.state = 257; 
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
        this.state = 262;
        switch(this._input.LA(1)) {
        case SHRParser.KW_BASED_ON:
            this.enterOuterAlt(localctx, 1);
            this.state = 259;
            this.basedOnProp();
            break;
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 2);
            this.state = 260;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 261;
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
        this.state = 265;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VALUE) {
            this.state = 264;
            this.value();
        }

        this.state = 270;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (SHRParser.KW_REF - 19)) | (1 << (SHRParser.KW_TBD - 19)) | (1 << (SHRParser.KW_BOOLEAN - 19)) | (1 << (SHRParser.KW_INTEGER - 19)) | (1 << (SHRParser.KW_STRING - 19)) | (1 << (SHRParser.KW_DECIMAL - 19)) | (1 << (SHRParser.KW_URI - 19)) | (1 << (SHRParser.KW_BASE64_BINARY - 19)) | (1 << (SHRParser.KW_INSTANT - 19)) | (1 << (SHRParser.KW_DATE - 19)) | (1 << (SHRParser.KW_DATE_TIME - 19)) | (1 << (SHRParser.KW_TIME - 19)) | (1 << (SHRParser.KW_CODE - 19)) | (1 << (SHRParser.KW_OID - 19)) | (1 << (SHRParser.KW_ID - 19)) | (1 << (SHRParser.KW_MARKDOWN - 19)) | (1 << (SHRParser.KW_UNSIGNED_INT - 19)) | (1 << (SHRParser.KW_POSITIVE_INT - 19)) | (1 << (SHRParser.KW_XHTML - 19)))) !== 0) || ((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (SHRParser.OPEN_PAREN - 59)) | (1 << (SHRParser.WHOLE_NUMBER - 59)) | (1 << (SHRParser.ALL_CAPS - 59)) | (1 << (SHRParser.UPPER_WORD - 59)) | (1 << (SHRParser.DOT_SEPARATED_UW - 59)))) !== 0)) {
            this.state = 267;
            this.field();
            this.state = 272;
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
        this.state = 273;
        this.match(SHRParser.KW_VALUE);
        this.state = 276;
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
            this.state = 274;
            this.uncountedValue();
            break;
        case SHRParser.WHOLE_NUMBER:
            this.state = 275;
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
        this.state = 297;
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
            this.state = 278;
            this.valueType();
            this.state = 283;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 279;
                this.match(SHRParser.KW_OR);
                this.state = 280;
                this.valueType();
                this.state = 285;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case SHRParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 286;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 287;
            this.valueType();
            this.state = 292;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 288;
                this.match(SHRParser.KW_OR);
                this.state = 289;
                this.valueType();
                this.state = 294;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 295;
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
        this.state = 314;
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 299;
            this.count();
            this.state = 300;
            this.valueType();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 302;
            this.count();
            this.state = 303;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 304;
            this.valueType();
            this.state = 309;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 305;
                this.match(SHRParser.KW_OR);
                this.state = 306;
                this.valueType();
                this.state = 311;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 312;
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
        this.state = 322;
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 316;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 317;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 318;
            this.primitive();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 319;
            this.codeFromVS();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 320;
            this.elementWithConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 321;
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
        this.state = 324;
        this.countedField();
        this.state = 329;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_OR) {
            this.state = 325;
            this.match(SHRParser.KW_OR);
            this.state = 326;
            this.countedField();
            this.state = 331;
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
        this.state = 333;
        _la = this._input.LA(1);
        if(_la===SHRParser.WHOLE_NUMBER) {
            this.state = 332;
            this.count();
        }

        this.state = 347;
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
            this.state = 335;
            this.fieldType();
            break;
        case SHRParser.OPEN_PAREN:
            this.state = 336;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 337;
            this.fieldType();
            this.state = 342;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 338;
                this.match(SHRParser.KW_OR);
                this.state = 339;
                this.fieldType();
                this.state = 344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 345;
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
        this.state = 353;
        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 349;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 350;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 351;
            this.elementWithConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 352;
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
        this.state = 355;
        this.match(SHRParser.KW_BASED_ON);
        this.state = 358;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 356;
            this.simpleOrFQName();
            break;
        case SHRParser.KW_TBD:
            this.state = 357;
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
        this.state = 360;
        this.match(SHRParser.KW_CONCEPT);
        this.state = 363;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD:
            this.state = 361;
            this.tbd();
            break;
        case SHRParser.KW_TBD_CODE:
        case SHRParser.ALL_CAPS:
            this.state = 362;
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
        this.state = 365;
        this.fullyQualifiedCode();
        this.state = 370;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 366;
            this.match(SHRParser.COMMA);
            this.state = 367;
            this.fullyQualifiedCode();
            this.state = 372;
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
        this.state = 373;
        this.match(SHRParser.KW_DESCRIPTION);
        this.state = 374;
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
        this.state = 376;
        this.valuesetDefsHeader();
        this.state = 378;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_USES) {
            this.state = 377;
            this.usesStatement();
        }

        this.state = 381;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_PATH) {
            this.state = 380;
            this.pathDefs();
        }

        this.state = 384;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_VOCABULARY) {
            this.state = 383;
            this.vocabularyDefs();
        }

        this.state = 386;
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
        this.state = 388;
        this.match(SHRParser.KW_GRAMMAR);
        this.state = 389;
        this.match(SHRParser.KW_G_VALUE_SET);
        this.state = 390;
        this.version();
        this.state = 391;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 392;
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
        this.state = 397;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_VALUESET) {
            this.state = 394;
            this.valuesetDef();
            this.state = 399;
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
        this.state = 400;
        this.valuesetHeader();
        this.state = 402;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_CONCEPT || _la===SHRParser.KW_DESCRIPTION) {
            this.state = 401;
            this.valuesetProps();
        }

        this.state = 405;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_INCLUDES_CODES_FROM) | (1 << SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM) | (1 << SHRParser.KW_TBD_CODE))) !== 0) || _la===SHRParser.CODE || _la===SHRParser.ALL_CAPS) {
            this.state = 404;
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
        this.state = 407;
        this.match(SHRParser.KW_VALUESET);
        this.state = 411;
        switch(this._input.LA(1)) {
        case SHRParser.URL:
            this.state = 408;
            this.match(SHRParser.URL);
            break;
        case SHRParser.URN_OID:
            this.state = 409;
            this.match(SHRParser.URN_OID);
            break;
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.state = 410;
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
        this.state = 414; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 413;
            this.valuesetValue();
            this.state = 416; 
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

ValuesetValueContext.prototype.valuesetFromCode = function() {
    return this.getTypedRuleContext(ValuesetFromCodeContext,0);
};

ValuesetValueContext.prototype.valuesetFromCodeSystem = function() {
    return this.getTypedRuleContext(ValuesetFromCodeSystemContext,0);
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
        this.state = 423;
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 418;
            this.fullyQualifiedCode();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 419;
            this.valuesetInlineValue();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 420;
            this.valuesetDescendingFrom();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 421;
            this.valuesetFromCode();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 422;
            this.valuesetFromCodeSystem();
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
        this.state = 425;
        this.match(SHRParser.CODE);
        this.state = 427;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 426;
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
        this.state = 429;
        this.match(SHRParser.KW_INCLUDES_CODES_DESCENDING_FROM);
        this.state = 430;
        this.fullyQualifiedCode();
        this.state = 435;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_AND_NOT_DESCENDING_FROM) {
            this.state = 431;
            this.match(SHRParser.KW_AND_NOT_DESCENDING_FROM);
            this.state = 432;
            this.fullyQualifiedCode();
            this.state = 437;
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

function ValuesetFromCodeSystemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetFromCodeSystem;
    return this;
}

ValuesetFromCodeSystemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetFromCodeSystemContext.prototype.constructor = ValuesetFromCodeSystemContext;

ValuesetFromCodeSystemContext.prototype.KW_INCLUDES_CODES_FROM = function() {
    return this.getToken(SHRParser.KW_INCLUDES_CODES_FROM, 0);
};

ValuesetFromCodeSystemContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

ValuesetFromCodeSystemContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetFromCodeSystem(this);
	}
};

ValuesetFromCodeSystemContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetFromCodeSystem(this);
	}
};

ValuesetFromCodeSystemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetFromCodeSystem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetFromCodeSystemContext = ValuesetFromCodeSystemContext;

SHRParser.prototype.valuesetFromCodeSystem = function() {

    var localctx = new ValuesetFromCodeSystemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SHRParser.RULE_valuesetFromCodeSystem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
        this.match(SHRParser.KW_INCLUDES_CODES_FROM);
        this.state = 439;
        this.match(SHRParser.ALL_CAPS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetFromCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetFromCode;
    return this;
}

ValuesetFromCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetFromCodeContext.prototype.constructor = ValuesetFromCodeContext;

ValuesetFromCodeContext.prototype.KW_INCLUDES_CODES_FROM = function() {
    return this.getToken(SHRParser.KW_INCLUDES_CODES_FROM, 0);
};

ValuesetFromCodeContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

ValuesetFromCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetFromCode(this);
	}
};

ValuesetFromCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetFromCode(this);
	}
};

ValuesetFromCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetFromCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetFromCodeContext = ValuesetFromCodeContext;

SHRParser.prototype.valuesetFromCode = function() {

    var localctx = new ValuesetFromCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SHRParser.RULE_valuesetFromCode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 441;
        this.match(SHRParser.KW_INCLUDES_CODES_FROM);
        this.state = 442;
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
    this.enterRule(localctx, 80, SHRParser.RULE_valuesetProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 445; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 444;
            this.valuesetProp();
            this.state = 447; 
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
    this.enterRule(localctx, 82, SHRParser.RULE_valuesetProp);
    try {
        this.state = 451;
        switch(this._input.LA(1)) {
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 1);
            this.state = 449;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 450;
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
    this.enterRule(localctx, 84, SHRParser.RULE_mappingsDoc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 453;
        this.mappingsHeader();
        this.state = 454;
        this.targetStatement();
        this.state = 455;
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
    this.enterRule(localctx, 86, SHRParser.RULE_mappingsHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 457;
        this.match(SHRParser.KW_GRAMMAR);
        this.state = 458;
        this.match(SHRParser.KW_G_MAP);
        this.state = 459;
        this.version();
        this.state = 460;
        this.match(SHRParser.KW_NAMESPACE);
        this.state = 461;
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
    this.enterRule(localctx, 88, SHRParser.RULE_targetStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 463;
        this.match(SHRParser.KW_TARGET);
        this.state = 464;
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
    this.enterRule(localctx, 90, SHRParser.RULE_mappingDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.ALL_CAPS || _la===SHRParser.UPPER_WORD) {
            this.state = 466;
            this.mappingDef();
            this.state = 471;
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
    this.enterRule(localctx, 92, SHRParser.RULE_mappingDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 472;
        this.mappingDefHeader();
        this.state = 476;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 473;
                this.mappingRule(); 
            }
            this.state = 478;
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
    this.enterRule(localctx, 94, SHRParser.RULE_mappingDefHeader);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 479;
        this.simpleName();
        this.state = 482;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_MAPS_TO) {
            this.state = 480;
            this.match(SHRParser.KW_MAPS_TO);
            this.state = 481;
            this.match(SHRParser.TARGET_PHRASE);
        }

        this.state = 484;
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
    this.enterRule(localctx, 96, SHRParser.RULE_mappingRule);
    try {
        this.state = 488;
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
            this.state = 486;
            this.fieldMapping();
            break;
        case SHRParser.KW_CONSTRAIN:
            this.enterOuterAlt(localctx, 2);
            this.state = 487;
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
    this.enterRule(localctx, 98, SHRParser.RULE_fieldMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 490;
        this.source();
        this.state = 491;
        this.match(SHRParser.KW_MAPS_TO);
        this.state = 492;
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
    this.enterRule(localctx, 100, SHRParser.RULE_source);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this.sourcePart();
        this.state = 499;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.DOT) {
            this.state = 495;
            this.match(SHRParser.DOT);
            this.state = 496;
            this.sourcePart();
            this.state = 501;
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
    this.enterRule(localctx, 102, SHRParser.RULE_sourcePart);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 502;
        this.sourceWord();
        this.state = 509;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.OPEN_BRACKET) {
            this.state = 503;
            this.match(SHRParser.OPEN_BRACKET);
            this.state = 504;
            this.sourceWord();
            this.state = 505;
            this.match(SHRParser.CLOSE_BRACKET);
            this.state = 511;
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
    this.enterRule(localctx, 104, SHRParser.RULE_sourceWord);
    try {
        this.state = 515;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 512;
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
            this.state = 513;
            this.primitive();
            break;
        case SHRParser.KW_TBD:
            this.enterOuterAlt(localctx, 3);
            this.state = 514;
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

CardMappingContext.prototype.TARGET_WORD = function() {
    return this.getToken(SHRParser.TARGET_WORD, 0);
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
    this.enterRule(localctx, 106, SHRParser.RULE_cardMapping);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 517;
        this.match(SHRParser.KW_CONSTRAIN);
        this.state = 518;
        this.match(SHRParser.TARGET_WORD);
        this.state = 519;
        this.match(SHRParser.KW_TO);
        this.state = 520;
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
    this.enterRule(localctx, 108, SHRParser.RULE_version);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 522;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 523;
        this.match(SHRParser.DOT);
        this.state = 524;
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
    this.enterRule(localctx, 110, SHRParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 526;
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
    this.enterRule(localctx, 112, SHRParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 528;
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
    this.enterRule(localctx, 114, SHRParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530;
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
    this.enterRule(localctx, 116, SHRParser.RULE_simpleOrFQName);
    try {
        this.state = 534;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 532;
            this.simpleName();
            break;
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 533;
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
    this.enterRule(localctx, 118, SHRParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 536;
        this.match(SHRParser.KW_REF);
        this.state = 537;
        this.match(SHRParser.OPEN_PAREN);
        this.state = 538;
        this.simpleOrFQName();
        this.state = 539;
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
    this.enterRule(localctx, 120, SHRParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 541;
        this.match(SHRParser.CODE);
        this.state = 543;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 542;
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
    this.enterRule(localctx, 122, SHRParser.RULE_fullyQualifiedCode);
    try {
        this.state = 548;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 545;
            this.match(SHRParser.ALL_CAPS);
            this.state = 546;
            this.code();
            break;
        case SHRParser.KW_TBD_CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 547;
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
    this.enterRule(localctx, 124, SHRParser.RULE_codeOrFQCode);
    try {
        this.state = 552;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD_CODE:
        case SHRParser.ALL_CAPS:
            this.enterOuterAlt(localctx, 1);
            this.state = 550;
            this.fullyQualifiedCode();
            break;
        case SHRParser.CODE:
            this.enterOuterAlt(localctx, 2);
            this.state = 551;
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
    this.enterRule(localctx, 126, SHRParser.RULE_codeFromVS);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 554;
        _la = this._input.LA(1);
        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (SHRParser.KW_CODE_FROM - 47)) | (1 << (SHRParser.KW_CODING_FROM - 47)) | (1 << (SHRParser.KW_CODEABLECONCEPT_FROM - 47)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 555;
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
    this.enterRule(localctx, 128, SHRParser.RULE_elementWithConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 560;
        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
        switch(la_) {
        case 1:
            this.state = 557;
            this.simpleOrFQName();
            break;

        case 2:
            this.state = 558;
            this.elementPath();
            break;

        case 3:
            this.state = 559;
            this.primitive();
            break;

        }
        this.state = 563;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_WITH) | (1 << SHRParser.KW_IS) | (1 << SHRParser.KW_IS_TYPE) | (1 << SHRParser.KW_VALUE_IS_TYPE) | (1 << SHRParser.KW_INCLUDES))) !== 0)) {
            this.state = 562;
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
    this.enterRule(localctx, 130, SHRParser.RULE_elementPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 565;
        this.simpleOrFQName();
        this.state = 585;
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        switch(la_) {
        case 1:
            this.state = 568; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 566;
            		this.match(SHRParser.DOT);
            		this.state = 567;
            		this.simpleName();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 570; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,60, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 574;
            _la = this._input.LA(1);
            if(_la===SHRParser.DOT) {
                this.state = 572;
                this.match(SHRParser.DOT);
                this.state = 573;
                this.primitive();
            }

            break;

        case 2:
            this.state = 580;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,62,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 576;
                    this.match(SHRParser.DOT);
                    this.state = 577;
                    this.simpleName(); 
                }
                this.state = 582;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,62,this._ctx);
            }

            this.state = 583;
            this.match(SHRParser.DOT);
            this.state = 584;
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
    this.enterRule(localctx, 132, SHRParser.RULE_elementConstraint);
    try {
        this.state = 593;
        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 587;
            this.elementCodeVSConstraint();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 588;
            this.elementCodeValueConstraint();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 589;
            this.elementIncludesCodeValueConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 590;
            this.elementBooleanConstraint();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 591;
            this.elementTypeConstraint();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 592;
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
    this.enterRule(localctx, 134, SHRParser.RULE_elementCodeVSConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 595;
        this.match(SHRParser.KW_WITH);
        this.state = 596;
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
    this.enterRule(localctx, 136, SHRParser.RULE_elementCodeValueConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 598;
        this.match(SHRParser.KW_IS);
        this.state = 599;
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
    this.enterRule(localctx, 138, SHRParser.RULE_elementIncludesCodeValueConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 603; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 601;
            this.match(SHRParser.KW_INCLUDES);
            this.state = 602;
            this.codeOrFQCode();
            this.state = 605; 
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
    this.enterRule(localctx, 140, SHRParser.RULE_elementBooleanConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 607;
        this.match(SHRParser.KW_IS);
        this.state = 608;
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
    this.enterRule(localctx, 142, SHRParser.RULE_elementTypeConstraint);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 610;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.KW_IS_TYPE || _la===SHRParser.KW_VALUE_IS_TYPE)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 613;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.state = 611;
            this.simpleOrFQName();
            break;
        case SHRParser.KW_TBD:
            this.state = 612;
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
    this.enterRule(localctx, 144, SHRParser.RULE_elementWithUnitsConstraint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 615;
        this.match(SHRParser.KW_WITH);
        this.state = 616;
        this.match(SHRParser.KW_UNITS);
        this.state = 617;
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
    this.enterRule(localctx, 146, SHRParser.RULE_valueset);
    try {
        this.state = 624;
        switch(this._input.LA(1)) {
        case SHRParser.URL:
            this.enterOuterAlt(localctx, 1);
            this.state = 619;
            this.match(SHRParser.URL);
            break;
        case SHRParser.PATH_URL:
            this.enterOuterAlt(localctx, 2);
            this.state = 620;
            this.match(SHRParser.PATH_URL);
            break;
        case SHRParser.URN_OID:
            this.enterOuterAlt(localctx, 3);
            this.state = 621;
            this.match(SHRParser.URN_OID);
            break;
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 4);
            this.state = 622;
            this.simpleName();
            break;
        case SHRParser.KW_TBD:
            this.enterOuterAlt(localctx, 5);
            this.state = 623;
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
    this.enterRule(localctx, 148, SHRParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 626;
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
    this.enterRule(localctx, 150, SHRParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 628;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 629;
        this.match(SHRParser.RANGE);
        this.state = 630;
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
    this.enterRule(localctx, 152, SHRParser.RULE_tbd);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 632;
        this.match(SHRParser.KW_TBD);
        this.state = 634;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 633;
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
    this.enterRule(localctx, 154, SHRParser.RULE_tbdCode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 636;
        this.match(SHRParser.KW_TBD_CODE);
        this.state = 638;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 637;
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
