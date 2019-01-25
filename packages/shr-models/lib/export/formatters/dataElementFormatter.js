//  /$$$$$$$              /$$               /$$$$$$$$ /$$                                               /$$
// | $$__  $$            | $$              | $$_____/| $$                                              | $$
// | $$  \ $$  /$$$$$$  /$$$$$$    /$$$$$$ | $$      | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
// | $$  | $$ |____  $$|_  $$_/   |____  $$| $$$$$   | $$ /$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
// | $$  | $$  /$$$$$$$  | $$      /$$$$$$$| $$__/   | $$| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
// | $$  | $$ /$$__  $$  | $$ /$$ /$$__  $$| $$      | $$| $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
// | $$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$| $$$$$$$$| $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
// |_______/  \_______/   \___/   \_______/|________/|__/ \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |_______/



const { rightPad, idFromFQN } = require('./commons');

const DEFAULT_MAX_RIGHT_PAD = 4;

class DataElementFormatter {
  constructor(specs) {
    this._specs = specs;
    this._codesystems = [];
    this._uses = [];
    // this._namespaces = namespaces;
    // this._elements = elements;
    // this._valuesets = valuesets;
    this._codesystems = [];
    this._maxRightPad = DEFAULT_MAX_RIGHT_PAD;
  }

  get specs() { return this._specs; }

  get codesystems() { return this._codesystems; }
  get uses() { return this._uses; }
  get maxRightPad() { return this._maxRightPad; }
  set maxRightPad(maxRightPad) { this._maxRightPad = maxRightPad; }

  reset() {
    this._codesystems = [];
    this._paths = [];
    this._maxRightPad = DEFAULT_MAX_RIGHT_PAD;
  }

  shFromCodeSystem(cs) {
    // const shorthand = shorthan,dFromCodesystem(cs);
    if (!cs) return '';

    if (cs.match(/http:\/\/standardhealthrecord.org\/shr\/[A-Za-z]*\/cs\/(#[A-Za-z]*CS)/)) {
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
      return cs;
    }
  }

  getIdFromFqnAndTrackUsed(fqn) {
    const id = idFromFQN(fqn);
    if (id.namespace != 'primitive') {
      this.uses.pushNew(id.namespace);
    }

    return id;
  }

  getVSFromURIAndTrackUsed(vs) {
    const ns = vs.match(/standardhealthrecord\.org\/(.*)\/vs\/#[A-Za-z0-9]*/)[1].replace('/', '.');
    this.uses.pushNew(ns);

    const name = vs.split('/').pop().replace('#', '');
    return name;
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

  formatDataElement(de) {
    var declaration, concepts, basedOns, description, value;
    let outputs = [];

    declaration = this.formatDeclaration(de);
    outputs.push(declaration);

    if ('basedOn' in de && de.basedOn.length > 0) {
      basedOns = this.formatBasedOns(de);
      outputs.push(basedOns);
    }

    if ('concepts' in de && de.concepts.length > 0) {
      concepts = this.formatConcepts(de);
      outputs.push(concepts);
    }

    if (de.description) {
      description = this.formatDescription(de);
      outputs.push(description);
    }

    if (de.value && de.value.inheritance != 'inherited') {
      value = this.formatValue(de.value, de, false);
      outputs.push(value);
    }

    if ('fields' in de && de.fields.length > 0) {
      const fields = this.formatFields(de);
      if (fields.length > 0) outputs.push(...fields);
    }

    return outputs.join('\n');
  }

  formatDeclaration(de) {
    let formattedModifier = '';
    if (de.isEntry) {
      formattedModifier = 'Entry';
    } else if (de.isAbstract) {
      formattedModifier = 'Abstract ';
      this.maxRightPad = 5; //prettify the padding, purely aesthetic
    }

    const formattedTitle = `${rightPad(`${formattedModifier}Element:`, this.maxRightPad)}${de.identifier.name}`;
    return formattedTitle;
  }

  formatBasedOns(de) {
    const formattedBasedOns = [];
    for (const basedOn of de.basedOn) {

      const formattedBasedOn = this.getIdFromFqnAndTrackUsed(basedOn.fqn).name;
      formattedBasedOns.push(formattedBasedOn);
    }
    return `${rightPad('Based on:', this.maxRightPad)}${formattedBasedOns.join(', ')}`;
  }

  formatConcepts(de) {
    const formattedConcepts = [];
    for (const concept of de.concepts) {
      const formattedConcept = `${this.formattedCodeFromCncpt(concept)}`;
      formattedConcepts.push(formattedConcept);
    }
    return `${rightPad('Concept:', this.maxRightPad)}${formattedConcepts.join(', ')}`;
  }

  formatDescription(de) {
    const formattedDesc = `${rightPad('Description:', this.maxRightPad)}"${de.description}"`;
    return formattedDesc;
  }

  arrangeValuesByConstraintPaths(value, de) {
    var constraintsByPaths = value.constraints.reduce((out, constraint, i) => {
      if (constraint.lastModifiedBy.fqn != de.identifier.fqn) {
        return out;
      }

      let combinedPaths = [];

      if (constraint.path.length > 0) {

        let pathsClone = [...constraint.path];

        while (pathsClone.length > 0) {
          const p = pathsClone.shift();

          if (p.fqn) this.getIdFromFqnAndTrackUsed(p.fqn);

          if (p.name == 'Units' && pathsClone.length > 1 && pathsClone[1].name == 'Coding') {
            pathsClone.shift();
            continue;
          }

          if (['code', 'Coding'].includes(p.name)) {
            continue;
          }

          combinedPaths.push(p.name);
        }
      }

      let combinedPath = (combinedPaths.length > 0) ? combinedPaths.join('.') : 'root';

      if (!out[combinedPath]) out[combinedPath] = [];
      out[combinedPath].push(constraint);

      return out;
    }, {});

    // if (!value.inheritance && Object.keys(out).filter(key=>key!='root').length > 0) {

    // }

    if (Object.keys(constraintsByPaths).length && Object.keys(constraintsByPaths)[0] == 'CodeableConcept') {
      constraintsByPaths = {'root':constraintsByPaths['CodeableConcept']};
    }

    return constraintsByPaths;
  }

  formatFields(de) {
    const formattedFields = [];
    for (const f of de.fields) {
      if (f.inheritance != 'inherited') {

        const constraintsByPaths = this.arrangeValuesByConstraintPaths(f, de);

        if (Object.keys(constraintsByPaths).length > 0) {
          for (const path in constraintsByPaths) {
            const fClone = f.clone();
            fClone.constraints = constraintsByPaths[path];

            formattedFields.push(this.formatValue(fClone, de, true, path));
          }
        } else {
          formattedFields.push(this.formatValue(f, de, true));
        }
      }
    }

    return formattedFields;
  }

  formatValue(value, de, formatAsField, path) {
    let formattedValue = this.formatValueByType(value, de);

    //first do card
    if ('card' in value) {
      if (value.effectiveCard.max == 0) {
        if (!formatAsField) {
          formatAsField = true;
          return `${rightPad('0..0', this.maxRightPad)}Value`;
        } else {
          return `${rightPad('0..0', this.maxRightPad)}${formattedValue}`;
        }
      }

      formattedValue = this.formatValueWithCard(formattedValue, value, formatAsField);
    }

    //then do path
    if (path && path !== 'root' && value.inheritance) {
      formattedValue = `${formattedValue}.${path}`;
    }

    // then try the mess that is constraints
    if ('constraints' in value && value.constraints.length > 0) {
      if (!formatAsField && value.constructor.name == 'RefValue' && value.constraints.length == 1 && value.constraints[0].constructor.name == 'TypeConstraint') {
        formatAsField = true;
        formattedValue = `${rightPad('',this.maxRightPad)}Value`;
      }

      formattedValue = this.formatValueWithConstraints(formattedValue, value, de, formatAsField);
    }

    if (!formatAsField) return `${rightPad('Value:',this.maxRightPad)}${formattedValue}`;

    return formattedValue;

  }

  formatValueByType(value, de) {
    if (value.identifier && value.identifier.fqn) {
      this.getIdFromFqnAndTrackUsed(value.identifier.fqn);
    }

    switch (value.constructor.name) {
    case 'IdentifiableValue':
      return value.identifier.name;
    case 'RefValue':
      return `ref(${value.identifier.name})`;
    case 'ChoiceValue': {
      let choiceStrings = [];
      for (const opt of value.options) {
        var choiceStr = this.formatValueByType(opt, de, true);
        // formatValueWithConstraints(formattedByPath, value, de, formatAsField);
        choiceStr = this.formatValueWithConstraints(choiceStr, opt, de, false);

        // choiceStr = this.formatValueWithConstraints(choiceStr, opt, de, true)
        choiceStrings.push(choiceStr);
      }
      return choiceStrings.join(' or ');
        // return 'learn how to format choices'
    }
    case 'TBD':
      return `TBD "${value.text}"`;
    default:
      return;
    }
  }

  formatValueWithPath(formattedValue, paths) {
    let pathsClone = [...paths];

    while (pathsClone.length > 0) {
      const p = pathsClone.shift();
      if (p.name == 'Units' && pathsClone.length > 1 && pathsClone[1].name == 'Coding') {
        pathsClone.shift();
        continue;
      }

      if (['code', 'CodeableConcept', 'Coding'].includes(p.name)) {
        continue;
      }

      formattedValue = `${formattedValue}.${p.name}`;
    }

    return formattedValue;
  }

  formatValueWithCard(formattedValue, value, formatAsField) {
    if (!formatAsField && value.effectiveCard.min == 1 && value.effectiveCard.max == 1) {
      return formattedValue;
    }

    if (formatAsField && value.inheritedFrom) { //handled in formatbyConstrainttype
      return `${ rightPad('', this.maxRightPad) }${formattedValue}`;
    }

    if (value.constructor.name == 'ChoiceValue') {
      formattedValue = `(${formattedValue})`;
    }

    let cardString = `${value.effectiveCard.toString()} `;

    if (formatAsField) cardString = rightPad(cardString, this.maxRightPad);

    return `${cardString}${formattedValue}`;
  }

  formatValueWithConstraints(formattedByPath, value, de, formatAsField) {
    let formattedWithConstraint = formattedByPath;
    for (const con of value.constraints) {
      if (con.lastModifiedBy.fqn == de.identifier.fqn) {
        formattedWithConstraint = this.formatValueByConstraintType(formattedWithConstraint, con, formatAsField, value);
      }
    }
    return formattedWithConstraint;
  }

  formatValueByConstraintType(formattedValue, constraint, formatAsField, value) {
    switch (constraint.constructor.name) {
    case 'TypeConstraint': {
      if (formatAsField && !value.inheritance && !constraint.onValue) {
        constraint.onValue = true;
      }

      return this.formatValueWithTypeConstraint(formattedValue, constraint);
    }
    case 'ValueSetConstraint': {
      if (!formatAsField && constraint.path.length >= 2 && constraint.path[0].name == 'Units' && constraint.path[1].name == 'Coding') {
        return [
          formattedValue,
          `${rightPad('', this.maxRightPad)}${this.formatValueWithValueSetConstraint(`${formattedValue.replace(/.*\s([^\s]*)/,'$1')}.Units`, constraint)}`,
        ].join('\n');
      }

      return this.formatValueWithValueSetConstraint(formattedValue, constraint);
    }
    case 'CardConstraint': {
      if (formatAsField) {
        return this.formatValueWithCardConstraint(formattedValue, constraint);
      } else {
        return formattedValue;
      }
    }
    case 'IncludesTypeConstraint':
      return this.formatValueWithIncludesTypeConstraint(formattedValue, constraint);
    case 'IncludesCodeConstraint':
      return this.formatValueWithIncludesCodeConstraint(formattedValue, constraint);
    case 'BooleanConstraint':
      return this.formatValueWithBooleanConstraint(formattedValue, constraint);
    case 'CodeConstraint':
      return this.formatValueWithCodeConstraint(formattedValue, constraint);
    default:
      console.log('learn to deal with this %s', constraint.constructor.name);
      return formattedValue;
    }
  }

  formatValueWithTypeConstraint(formattedValue, constraint) {
    if (constraint.isA.fqn) {
      this.getIdFromFqnAndTrackUsed(constraint.isA.fqn);
    }

    if (constraint.onValue) {
      return `${formattedValue} value is type ${constraint.isA.name}`;
    } else {
      return `${formattedValue} is type ${constraint.isA.name}`;
    }
  }

  formatValueWithValueSetConstraint(formattedValue, constraint) {
    let vs = constraint.valueSet;

    if (vs.identifier && vs.identifier.fqn) {
      this.getIdFromFqnAndTrackUsed(vs.identifier.fqn);
    }


    if (vs.startsWith('http://standardhealthrecord.org')) {
      vs = this.getVSFromURIAndTrackUsed(vs);
    } else if (vs.startsWith('urn:tbd:')) {
      vs = `TBD "${vs.replace('urn:tbd:', '')}"`;
    }


    switch (constraint.bindingStrength) {
    case 'REQUIRED':
      return `${formattedValue} from ${vs}`;
    case 'EXTENSIBLE':
      return `${formattedValue} from ${vs} if covered`;
    case 'PREFERRED':
      return `${formattedValue} should be from ${vs}`;
    case 'EXAMPLE':
      return `${formattedValue} could be from ${vs}`;
    default:
      return formattedValue;
    }
  }

  formatValueWithCardConstraint(formattedValue, constraint, formatAsField) {
    let formattedConstraint = `${constraint.card.toString()}${formattedValue.replace('\t','')}`;
    return formattedConstraint;
    // return value;
  }

  formatValueWithBooleanConstraint(formattedValue, constraint) {
    return `${formattedValue} is ${constraint.value}`;
  }

  formatValueWithCodeConstraint(formattedValue, constraint) {
    let shorthand = this.shFromCodeSystem(constraint.code.system);
    if (!shorthand) {
      shorthand = '';
    }

    var formattedDisplay = '';
    if (constraint.code.display) {
      formattedDisplay = ` "${constraint.code.display}"`;
    }

    var formattedCode = `${shorthand}#${constraint.code.code}${formattedDisplay}`;

    if (constraint.path.length >= 2 && constraint.path[0].name == 'Units' && constraint.path[1].name == 'Coding') {
      return `${formattedValue} with units ${formattedCode}`;
    }

    return `${formattedValue} is ${formattedCode}`;
  }

  formatValueWithIncludesTypeConstraint(formattedValue, constraint) {
    let formattedConstraint = `${rightPad('\t',this.maxRightPad)}includes ${constraint.card.toString()} ${constraint.isA.name}`;
    return [formattedValue, formattedConstraint].join('\n');
  }

  formatValueWithIncludesCodeConstraint(formattedValue, constraint) {
    let shorthand = this.shFromCodeSystem(constraint.code.system);
    if (!shorthand) {
      shorthand = '';
    }

    var formattedDisplay = '';
    if (constraint.code.display) {
      formattedDisplay = ` "${constraint.code.display}"`;
    }

    var formattedCode = `${shorthand}#${constraint.code.code}${formattedDisplay}`;

    let formattedConstraint = `${rightPad('\t',this.maxRightPad)}includes ${formattedCode}`;
    return [formattedValue, formattedConstraint].join('\n');
  }
}

module.exports = { DataElementFormatter };
