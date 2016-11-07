const fs = require('fs');
const path = require('path');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRLexer} = require('./parsers/SHRLexer');
const {SHRParser} = require('./parsers/SHRParser');
const {Importer} = require('./listener');

function importFromFilePath(filePath) {
  const importer = new Importer();
  processPath(importer, filePath);
  return importer.namespaces();
}

function processPath(importer, filePath) {
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      if (file.endsWith('.txt' || file.endsWith('.shr'))) {
        processPath(importer, path.join(filePath, file));
      }
    }
  } else {
    const chars = new FileStream(filePath);
    const lexer = new SHRLexer(chars);
    const tokens  = new CommonTokenStream(lexer);
    const parser = new SHRParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.shr();
    const walker = new ParseTreeWalker();
    walker.walk(importer, tree);
  }
}

module.exports = {importFromFilePath};