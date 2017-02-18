const fs = require('fs');
const path = require('path');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {ErrorListener} = require('antlr4/error');
const {SHRLexer} = require('./parsers/SHRLexer');
const {SHRParser} = require('./parsers/SHRParser');
const {Preprocessor, VERSION, GRAMMAR_VERSION} = require('./preprocessor');
const {Importer} = require('./listener');

function importFromFilePath(filePath) {
  const preprocessor = new Preprocessor();
  preprocessPath(filePath, preprocessor);
  const importer = new Importer(preprocessor.data);
  processData(preprocessor.data, importer);
  return {
    specifications: importer.specifications(),
    errors: preprocessor.errors.concat(importer.errors)
  };
}

function processData(preprocessedData, importer) {
  for (const filePath of preprocessedData.files) {
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
      if (file.endsWith('.txt') && !file.endsWith('_cp.txt') && !file.endsWith('_map.txt')) {
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
    preprocessor.currentFile = filePath;
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

module.exports = {importFromFilePath, VERSION, GRAMMAR_VERSION};