const {ErrorListener} = require('antlr4/error');

class SHRErrorListener extends ErrorListener {
  constructor(bunyanLogger) {
    super();
    this._logger = bunyanLogger;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    if (msg.match(/^extraneous input .+ expecting/)) {
      this._logger.error({message: msg}, '11023');
    } else if (msg.match(/^mismatched input .+ expecting/)) {
      this._logger.error({message: msg}, '11016');
    } else if (msg.match(/^token recognition error at: '.+'/)) {
      this._logger.error({message: msg}, '11015');
    } else {
      this._logger.error({message: msg}, '11017');
    }
  }
}

module.exports = {SHRErrorListener};