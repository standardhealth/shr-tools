/**
 * A concept representation.  A single concept may have multple codes to possibily
 * represent it, hence the array of Codings.
 */
export default class Concept {
  constructor(coding = []) {
    this._coding = coding;
  }

  /**
   * Get the coding array.
   * @returns {Array<Coding>} The coding array
   */
  get coding() {
    return this._coding;
  }

  /**
   * Set the coding array.
   * @param {Array<Coding>} coding - The coding
   */
  set coding(coding) {
    this._coding = coding;
  }

  /**
   * Set the Coding array and return 'this' for chaining.
   * @param {Array<Coding>} coding - The coding array
   * @returns {Concept} this.
   */
  withCoding(coding) {
    this.coding = coding; return this;
  }

  toJSON() {
    return {
      'coding': this._coding ? this._coding.map(c => c.toJSON()) : []
    };
  }

  toFHIR() {
    return this._entryId;
  }
}
