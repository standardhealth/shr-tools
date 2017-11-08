/**
 * A class to assist with generating code, managing indents, blocks, and comments.
 */
module.exports = class CodeWriter {
  constructor(indentLevel = 0) {
    this._indentLevel = 0;
    this._inBlComment = false;
    this._lines = [];
  }

  /**
   * Generates a single line of code, adding a newline character at the end.
   * @param {string} str - The line of code to generate
   */
  ln(str = '') {
    if (this._inBlComment) {
      str = ` * ${str}`;
    }
    if (str.length > 0 && this._indentLevel > 0) {
      const theIndent = '  '.repeat(this._indentLevel);
      this._lines.push(`${theIndent}${str}`);
    } else {
      this._lines.push(str);
    }
    return this;
  }

  /**
   * Generates a code block (e.g., class definitions, function definitions, if blocks)
   * @param {string} declaration - The declaration before the block of code (e.g., 'export default class Foo')
   * @param {string|function} body - The body of the block.  For a single-line body, pass a string.  For a multi-line
   *    body, pass a no-arg function that makes calls to the codewriter to write lines within the body.
   */
  bl(declaration, body = '') {
    this.ln(`${declaration} {`).indent();
    if (typeof body === 'function') {
      body.call();
    } else {
      this.ln(body);
    }
    return this.outdent().ln('}');
  }

  /**
   * Generates a block comment (e.g., JSDoc for generated classes)
   * @param {string|function} comments - The comments inside the block.  For a single-line comment, pass a string. For
   *    a multi-line comment, pass a no-arg function that makes calls to the codewriter to write lines in the comment.
   */
  blComment(comments) {
    this.ln('/**');
    this._inBlComment = true;
    if (typeof comments === 'function') {
      comments.call();
    } else {
      this.ln(comments);
    }
    this._inBlComment = false;
    return this.ln(' */');
  }

  /**
   * Indicates that future lines should be indented (until `outdent` is called).
   */
  indent() {
    this._indentLevel++;
    return this;
  }

  /**
   * Indicates that the current level of indenting should be decremented by one indent level.
   */
  outdent() {
    this._indentLevel--;
    return this;
  }

  /**
   * Produces the string representing the generated code
   */
  toString() {
    return `${this._lines.join('\n')}\n`;
  }
};