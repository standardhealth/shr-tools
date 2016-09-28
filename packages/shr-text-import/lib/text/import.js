const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRLexer} = require('./parsers/SHRLexer');
const {SHRParser} = require('./parsers/SHRParser');
const {Importer} = require('./listener');

function importFromFilePath(path) {
    const chars = new FileStream(path);
    const lexer = new SHRLexer(chars);
    const tokens  = new CommonTokenStream(lexer);
    const parser = new SHRParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.shr();

    const walker = new ParseTreeWalker();
    const importer = new Importer();
    walker.walk(importer, tree);

    return importer.namespaces();
}

module.exports = {importFromFilePath};