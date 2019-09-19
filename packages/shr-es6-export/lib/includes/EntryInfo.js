/**
 * Entry information (shr id, entry id, entry type).
 */
export default class EntryInfo {
  constructor(shrId, entryId, entryType) {
    this._shrId = shrId;
    this._entryId = entryId;
    this._entryType = entryType;
  }

  /**
   * Get the SHR ID.
   * @returns {string} The SHR ID
   */
  get shrId() {
    return this._shrId;
  }

  /**
   * Set the SHR ID.
   * @param {string} shrId - The SHR ID
   */
  set shrId(shrId) {
    this._shrId = shrId;
  }

  /**
   * Set the SHR ID and return 'this' for chaining.
   * @param {string} shrId - The SHR ID
   * @returns {EntryInfo} this.
   */
  withShrId(shrId) {
    this.shrId = shrId; return this;
  }

  /**
   * Get the entry ID.
   * @returns {string} The entry ID
   */
  get entryId() {
    return this._entryId;
  }

  /**
   * Set the entry ID.
   * @param {string} entryId - The entry ID
   */
  set entryId(entryId) {
    this._entryId = entryId;
  }

  /**
   * Set the Entry ID and return 'this' for chaining.
   * @param {string} entryId - The entry ID
   * @returns {EntryInfo} this.
   */
  withEntryId(entryId) {
    this.entryId = entryId; return this;
  }

  /**
   * Get the entry type.
   * @returns {string} The entry type
   */
  get entryType() {
    return this._entryType;
  }

  /**
   * Set the entry type.
   * @param {string} entryType - The entry type
   */
  set entryType(entryType) {
    this._entryType = entryType;
  }

  /**
   * Set the entry type and return 'this' for chaining.
   * @param {string} entryType - The entry type
   * @returns {EntryInfo} this.
   */
  withEntryType(entryType) {
    this.entryType = entryType; return this;
  }

  toJSON() {
    return {
      'shrId': this._shrId,
      'entryId': this._entryId,
      'entryType': this._entryType
    };
  }

  toFHIR() {
    return this._entryId;
  }
}
