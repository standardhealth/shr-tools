/**
 * A coding representation.  This should only be used in the context of a Concept.
 */
export default class Coding {
  constructor(code, system, display) {
    this._code = code;
    this._system = system;
    this._display = display;
  }

  /**
   * Get the code.
   * @returns {string} The code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code.
   * @param {string} code - The code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the code and return 'this' for chaining.
   * @param {string} code - The code
   * @returns {Coding} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Get the system.
   * @returns {string} The system
   */
  get system() {
    return this._system;
  }

  /**
   * Set the system.
   * @param {string} system - The system
   */
  set system(system) {
    this._system = system;
  }

  /**
   * Set the system and return 'this' for chaining.
   * @param {string} system - The system
   * @returns {Coding} this.
   */
  withSystem(system) {
    this.system = system; return this;
  }

  /**
   * Get the display.
   * @returns {string} The display
   */
  get display() {
    return this._display;
  }

  /**
   * Set the display.
   * @param {string} display - The display
   */
  set display(display) {
    this._display = display;
  }

  /**
   * Set the display and return 'this' for chaining.
   * @param {string} display - The display
   * @returns {Coding} this.
   */
  withDisplay(display) {
    this.display = display; return this;
  }

  toJSON() {
    return {
      'code': this._code,
      'system': this._system,
      'display': this._display
    };
  }
}
