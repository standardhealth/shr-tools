const {ErrorListener} = require('antlr4/error');

class SHRErrorListener extends ErrorListener {
  constructor(bunyanLogger) {
    super();
    this._logger = bunyanLogger;
  }

  codeMessage(msg) {
    var code;

    if (msg.match(/^extraneous input .+ expecting/)) {
      code = 11023;
    } else if (msg.match(/^mismatched input .+ expecting/)) {
      code = 11016;
    } else if (msg.match(/^token recognition error at: '.+'/)) {
      code = 11015;
    } else {
      return msg;
    }
    
    msg = `${msg}. ERROR_CODE:${code}`;
    return msg;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this._logger.error({line, column}, this.codeMessage(msg));
  }
}

module.exports = {SHRErrorListener};