//  /$$    /$$          /$$                      /$$$$$$              /$$
// | $$   | $$         | $$                     /$$__  $$            | $$
// | $$   | $$ /$$$$$$ | $$ /$$   /$$  /$$$$$$ | $$  \__/  /$$$$$$  /$$$$$$   /$$$$$$$
// |  $$ / $$/|____  $$| $$| $$  | $$ /$$__  $$|  $$$$$$  /$$__  $$|_  $$_/  /$$_____/
//  \  $$ $$/  /$$$$$$$| $$| $$  | $$| $$$$$$$$ \____  $$| $$$$$$$$  | $$   |  $$$$$$
//   \  $$$/  /$$__  $$| $$| $$  | $$| $$_____/ /$$  \ $$| $$_____/  | $$ /$$\____  $$
//    \  $/  |  $$$$$$$| $$|  $$$$$$/|  $$$$$$$|  $$$$$$/|  $$$$$$$  |  $$$$//$$$$$$$/
//     \_/    \_______/|__/ \______/  \_______/ \______/  \_______/   \___/ |_______/


const { rightPad } = require('./commons');

class ValueSetFormatter {
  constructor() {
    this._codesystems = [];
  }

  get codesystems() { return this._codesystems; }

  reset() {
    this._codesystems = [];
    this._paths = [];
  }

  shFromCodeSystem(cs) {
    //TODO Make this config specific
    if (cs.match(/http:\/\/standardhealthrecord.org\/(.*\/)?cs\/(#[A-Za-z0-9]*CS)/)) {
      return '';
    }

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
      'urn:tbd': 'TBD'
    };

    if (shorthands[cs]) {
      if (cs != 'urn:tbd') {
        this._codesystems.pushNew(cs);
      }

      return shorthands[cs];
    } else {
      return `${cs} `;
    }
  }

  formattedCodeFromCncpt(concept) {
    var formattedConceptCode = `${this.shFromCodeSystem(concept.system)}#${concept.code}`;
    if (concept.display) {
      formattedConceptCode = `${formattedConceptCode} "${concept.display}"`;
    } else if (concept.description) {
      formattedConceptCode = `${formattedConceptCode} "${concept.description}"`;
    }

    return formattedConceptCode;
  }

  formatValueSet(valueSet) {
    var concepts, description, rules;
    let outputs = [];

    const declaration = this.formatDeclaration(valueSet);
    outputs.push(declaration);

    if (valueSet.concepts.length > 0) {
      concepts = this.formatConcepts(valueSet);
      outputs.push(concepts);
    }

    if (valueSet.description) {
      description = this.formatDescription(valueSet);
      outputs.push(description);
    }

    if (valueSet.rules.length > 0) {
      rules = this.formatRules(valueSet);
      outputs.push(rules);
    }

    return outputs.join('\n');
  }

  formatDeclaration(vs) {
    const formattedTitle = `${rightPad('ValueSet:')}${vs.identifier.name}`;
    return formattedTitle;
  }

  formatConcepts(vs) {
    const formattedConcepts = [];
    for (const concept of vs.concepts) {
      const formattedConcept = `${this.formattedCodeFromCncpt(concept)}`;
      formattedConcepts.push(formattedConcept);
    }
    return `${rightPad('Concept:')}${formattedConcepts.join(', ')}`;
  }

  formatDescription(vs) {
    const formattedDesc = `${rightPad('Description:')}"${vs.description}"`;
    return formattedDesc;
  }

  formatRules(vs) {
    const formattedRules = [];

    for (const rule of vs.rulesFilter.includesFromCodeSystem.rules) {
      formattedRules.push(this.formatRuleByType(rule));
    }

    for (const rule of vs.rulesFilter.includesFromCode.rules) {
      formattedRules.push(this.formatRuleByType(rule));
    }

    if (vs.rulesFilter.includesDescendents.hasRules) {
      const excludesDescendentsRules = vs.rulesFilter.excludesDescendents.rules;
      for (const rule of vs.rulesFilter.includesDescendents.rules) {
        let formattedRule = this.formatRuleByType(rule);
        while (excludesDescendentsRules.length > 0) {
          formattedRule = `${formattedRule} ${this.formatRuleByType(excludesDescendentsRules.pop())}`;
        }
        formattedRules.push(formattedRule);
      }
    }

    for (const rule of vs.rulesFilter.includesCode.rules) {
      formattedRules.push(this.formatRuleByType(rule));
    }

    return formattedRules.join('\n');
  }

  formatRuleByType(rule) {
    switch (rule.constructor.name) {
    case 'ValueSetIncludesCodeRule':
      return this.formatIncludesCodeRule(rule);
    case 'ValueSetIncludesFromCodeRule':
      return this.formatIncludesFromCodeRule(rule);
    case 'ValueSetIncludesFromCodeSystemRule':
      return this.formatIncludesFromCodeSystemRule(rule);
    case 'ValueSetIncludesDescendentsRule':
      return this.formatIncludesDescendentsRule(rule);
    case 'ValueSetExcludesDescendentsRule':
      return this.formatExcludesDescendentsRule(rule);
    default:
      console.log('Unknown rule type: %s', rule.constructor.name);
      return;
    }
  }

  formatIncludesCodeRule(rule) {
    const formattedCode = `${this.shFromCodeSystem(rule.code.system)}#${rule.code.code}`;
    const formattedDesc = (rule.code.display != null) ? `"${rule.code.display}"` : '';
    return `${rightPad(formattedCode)}${formattedDesc}`;
  }

  formatIncludesFromCodeRule(rule) {
    const formattedCode = this.formattedCodeFromCncpt(rule.code);
    return `Includes codes from ${formattedCode} `;
  }

  formatIncludesFromCodeSystemRule(rule) {
    const formattedCodeSystem = this.shFromCodeSystem(rule.system);
    return `Includes codes from ${formattedCodeSystem} `;
  }

  formatIncludesDescendentsRule(rule) {
    const formattedCode = this.formattedCodeFromCncpt(rule.code);
    return `Includes codes descending from ${formattedCode}`;
  }

  formatExcludesDescendentsRule(rule) {
    const formattedCode = this.formattedCodeFromCncpt(rule.code);
    return `Includes codes descending from ${this.formattedCodeFromCncpt(formattedCode)}`;
  }
}

module.exports = { ValueSetFormatter };