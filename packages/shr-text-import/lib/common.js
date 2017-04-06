const {ErrorListener} = require('antlr4/error');

class SHRErrorListener extends ErrorListener {
  constructor(bunyanLogger) {
    super();
    this._logger = bunyanLogger;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this._logger.error({line, column}, msg);
  }
}

module.exports = {SHRErrorListener};