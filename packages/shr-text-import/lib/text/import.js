const fs = require('fs');
const path = require('path');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {ErrorListener} = require('antlr4/error');
const {SHRLexer} = require('./parsers/SHRLexer');
const {SHRParser} = require('./parsers/SHRParser');
const {Preprocessor} = require('./preprocessor');
const {Importer} = require('./listener');

function importFromFilePath(filePath) {
  const preprocessor = new Preprocessor();
  preprocessPath(filePath, preprocessor);
  const importer = new Importer(preprocessor.data);
  processPath(filePath, importer);
  return {
    namespaces: importer.namespaces(),
    errors: importer.errors
  };
}

function processPath(filePath, importer) {
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      if (file.endsWith('.txt') && !file.endsWith('_cp.txt')) {
        processPath(path.join(filePath, file), importer);
      }
    }
  } else {
    const errListener = new SHRErrorListener(filePath);
    const chars = new FileStream(filePath);
    const lexer = new SHRLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(errListener);
    const tokens  = new CommonTokenStream(lexer);
    const parser = new SHRParser(tokens);
    parser.removeErrorListeners();
    parser.addErrorListener(errListener);
    parser.buildParseTrees = true;
    const tree = parser.shr();
    const walker = new ParseTreeWalker();
    importer.currentFile = filePath;
    walker.walk(importer, tree);
    importer.currentFile = '';
  }
}

function preprocessPath(filePath, preprocessor) {
  const stats = fs.statSync(filePath);
  if (stats.isDirectory()) {
    const files = fs.readdirSync(filePath);
    for (const file of files) {
      if (file.endsWith('.txt') && !file.endsWith('_cp.txt')) {
        preprocessPath(path.join(filePath, file), preprocessor);
      }
    }
  } else {
    const chars = new FileStream(filePath);
    const lexer = new SHRLexer(chars);
    lexer.removeErrorListeners();
    const tokens  = new CommonTokenStream(lexer);
    const parser = new SHRParser(tokens);
    parser.removeErrorListeners();
    parser.buildParseTrees = true;
    const tree = parser.shr();
    preprocessor.visitShr(tree);
  }
}

class SHRErrorListener extends ErrorListener {
  constructor(filePath) {
    super();
    this._fp = filePath;
    this._first = true;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    if (this._first) {
      console.error(this._fp);
      this._first = false;
    }
    console.error(`    line ${line}: ${column} ${msg}`);
  }
}

module.exports = {importFromFilePath};