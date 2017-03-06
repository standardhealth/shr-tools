const {ErrorListener} = require('antlr4/error');

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

module.exports = {SHRErrorListener};