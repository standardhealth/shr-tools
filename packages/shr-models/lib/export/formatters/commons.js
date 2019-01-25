/**
 * @file
 * Common functions and variables for CIMPL 5 Formatters.
 *
 * All formatters are constructed with the same methology. Every
 * component of the file is separated into separate functions, and is
 * constructed piece by piece into individual units of FileHeaders,
 * DataElements, Mappings, and ValueSets, which are then constructed
 * together once more. This file assists is formatting and common
 *
 */
/*
  /$$$$$$$$                                            /$$     /$$
 | $$_____/                                           | $$    | $$
 | $$     /$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$ /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$$
 | $$$$$ /$$__  $$ /$$__  $$| $$_  $$_  $$ |____  $$|_  $$_/|_  $$_/   /$$__  $$ /$$__  $$ /$$_____/
 | $$__/| $$  \ $$| $$  \__/| $$ \ $$ \ $$  /$$$$$$$  | $$    | $$    | $$$$$$$$| $$  \__/|  $$$$$$
 | $$   | $$  | $$| $$      | $$ | $$ | $$ /$$__  $$  | $$ /$$| $$ /$$| $$_____/| $$       \____  $$
 | $$   |  $$$$$$/| $$      | $$ | $$ | $$|  $$$$$$$  |  $$$$/|  $$$$/|  $$$$$$$| $$       /$$$$$$$/
 |__/    \______/ |__/      |__/ |__/ |__/ \_______/   \___/   \___/   \_______/|__/      |_______/
*/

const models = require('../../models');

// const VERSION = new Version(5, 2, 3);
const GRAMMAR_VERSION = new models.Version(5, 0, 1);
const shorthands = {
  'https://sdt.cap.org': 'CAP',
  'http://www.dsm5.org/': 'DSM',
  'https://evs.nci.nih.gov/ftp1/CDISC/SDTM/': 'NCI',
  'http://www.genenames.org': 'HGNC',
  'http://hl7.org/fhir/quantity-comparator': 'UGLY',
  'http://hl7.org/fhir/sid/cvx': 'CVX',
  'http://hl7.org/fhir/allergy-verification-status': 'AVS',
  'http://hl7.org/fhir/observation-status': 'OBS',
  'http://hl7.org/fhir/ValueSet/allergy-intolerance-category': 'AIC',
  'http://hl7.org/fhir/ValueSet/allergy-intolerance-type': 'AIT',
  'http://hl7.org/fhir/observation-category': 'OBSCAT',
  'http://hl7.org/fhir/v3/ActReason': 'V3',
  'http://loinc.org': 'LNC',
  'http://www.meddra.org': 'MDR',
  'http://www.nationsonline.org/oneworld/country_code_list': 'CC',
  'https://www.ncbi.nlm.nih.gov/refseq': 'REFSEQ',
  'http://ncimeta.nci.nih.gov': 'MTH',
  'https://ncit.nci.nih.gov/ncitbrowser/ConceptReport.jsp?dictionary=NCI_Thesaurus': 'NCIT',
  'http://www.nlm.nih.gov/research/umls/rxnorm': 'RXN',
  'http://snomed.info/sct': 'SCT',
  'http://unitsofmeasure.org': 'UCUM',
  'http://uts.nlm.nih.gov/metathesaurus': 'MTS',
  'urn:iso:std:iso:4217': 'CURRENCY',
  'urn:tbd:': 'TBD',
  'urn:tbd': 'TBD'
};

/**
 * Array prototype extension
 *
 * Ensures array only consistents of unique objects.
 */
Array.prototype.pushNew = function (obj) {
  if (!this.find(o => o == obj)) {
    this.push(obj);
  }
};


/**
 * Pad text on the right with whitespace
 *
 * Used for aligning text blocks across separate lines, e.g.
 * Element:       RightPad
 * Description:   "Ensures equal padding across lines."
 *
 * @param {string} text - the text being padded
 * @param {int} max - maximum tab width, including padded text
 */
function rightPad(text, numSpaces) {
  return `${text}${' '.repeat(numSpaces)}`;
}

/**
 * Identifier from FQN
 *
 * Converts a fully qualified name into an Identifier object.
 *
 * @param {string} fqn - Fully Qualified Name
 * @returns {Identifier} An identifier object that matches the input FQN.
 */
function idFromFQN(fqn) {
  const parts = fqn.split('.');
  if (parts.length == 1) {
    if (fqn.match(/^TBD\(.*\)$/)) {
      return new models.TBD(fqn.replace(/^TBD\((.*)\)$/, '$1'));
    }
    return new models.PrimitiveIdentifier(fqn);
  }

  const name = parts.pop();
  let namespace = parts.join('.');

  return new models.Identifier(namespace, name);
}

/**
 * Concept from components
 *
 * Constructs a Concept object from component details.
 *
 * @param {string} code - the code component of a Concept Code
 * @param {uri} system - the code system component of a Concept Code
 * @param {string} display - descriptive display text to show alongside the Concept Code
 * @returns {Concept} A Concept object that matches the input components.
 */
function constructCode(code, system, display) {
  const codeObj = new models.Concept(system, code, display);
  return codeObj;
}

/**
 * Converts a code system URI to a shorthand symbol.
 *
 * This contains popularly used shorthands. For other code systems,
 * it will generate a generic shorthand.
 *
 * For URI's that match the project's URL, we omit a shorthand as
 * that is unnecessary in CIMPL 5.
 *
 * @todo Aggregate generic shorthands
 * @todo Convert shr.org to config project URL
 *
 * @param {uri} cs - the code system's URI
 * @returns {string} Shorthand symbol for code system URI
 */
function shorthandFromCodesystem(cs) {
  if (!cs) {
    return '';
  }

  if (shorthands[cs]) {
    return shorthands[cs];
  } else if (cs.match(/http:\/\/standardhealthrecord.org\/shr\/[A-Za-z]*\/cs\/(#[A-Za-z]*CS)/)) {
    return '';
  } else {
    return cs;
  }
}

/**
 * Outputs concept code text fragment
 *
 * @param {Concept} concept
 * @returns {string} - formatted concept code text fragment
 */
function formattedCodeFromConcept(concept) {
  var formattedConceptCode = `${shorthandFromCodesystem(concept.system)}#${concept.code}`;
  if (concept.display) {
    formattedConceptCode = `${formattedConceptCode} "${concept.display}"`;
  } else if (concept.description) {
    formattedConceptCode = `${formattedConceptCode} "${concept.description}"`;
  }

  return formattedConceptCode;
}

module.exports = { idFromFQN, constructCode, formattedCodeFromConcept, rightPad, shorthandFromCodesystem, GRAMMAR_VERSION, shorthands };
