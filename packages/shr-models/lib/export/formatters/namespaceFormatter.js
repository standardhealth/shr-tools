//  /$$   /$$
// | $$$ | $$
// | $$$$| $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$
// | $$ $$ $$ |____  $$| $$_  $$_  $$ /$$__  $$ /$$_____/ /$$__  $$ |____  $$ /$$_____/ /$$__  $$
// | $$  $$$$  /$$$$$$$| $$ \ $$ \ $$| $$$$$$$$|  $$$$$$ | $$  \ $$  /$$$$$$$| $$      | $$$$$$$$
// | $$\  $$$ /$$__  $$| $$ | $$ | $$| $$_____/ \____  $$| $$  | $$ /$$__  $$| $$      | $$_____/
// | $$ \  $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$ /$$$$$$$/| $$$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$
// |__/  \__/ \_______/|__/ |__/ |__/ \_______/|_______/ | $$____/  \_______/ \_______/ \_______/
//                                                       | $$
//                                                       | $$
//                                                       |__/

//const models = require('shr-models');
const { rightPad, shorthandFromCodesystem } = require('./commons');
const { DataElementFormatter } = require('./dataElementFormatter');
const { MappingFormatter } = require('./mappingFormatter');
const { ValueSetFormatter } = require('./valueSetFormatter');

class NamespaceFormatter {
  constructor(ns, specs, nsDataElements, nsValueSets, nsMappings) {

    this.ns = ns;

    this.specs = specs;

    this.nsDataElements = nsDataElements;
    this.nsValueSets = nsValueSets;
    this.nsMappings = nsMappings;

    this.headerFormatter = new FileHeaderFormatter(specs);
    this.dataElementFormatter = new DataElementFormatter(specs);
    this.valueSetFormatter = new ValueSetFormatter(specs);
    this.mappingFormatter = new MappingFormatter(specs);
  }

  formatHeader(fileType) {
    switch (fileType) {
    case 'DataElement': {
      return this.headerFormatter.formatDataElementFileHeader(this.ns, this.dataElementFormatter.uses, this.dataElementFormatter._codesystems);
    }
    case 'ValueSet': {
      return this.headerFormatter.formatValueSetFileHeader(this.ns, this.valueSetFormatter.codesystems);
    }
    case 'Map': {
      return this.headerFormatter.formatMappingFileHeader(this.ns, this.mappingFormatter.target);
    }
    default:
      return;
    }
  }

  formatDataElementFile() {
    this.dataElementFormatter.reset();

    const formattedDataElements = [];
    for (const de of this.nsDataElements) {
      const formattedDE = this.dataElementFormatter.formatDataElement(de);
      formattedDataElements.push(formattedDE);
    }

    const fileHeader = this.formatHeader('DataElement');

    return [fileHeader, ...formattedDataElements].join('\n\n');
  }

  formatValueSetFile() {
    this.valueSetFormatter.reset();

    const formattedValueSets = [];
    for (const vs of this.nsValueSets) {
      const formattedVS = this.valueSetFormatter.formatValueSet(vs);
      formattedValueSets.push(formattedVS);
    }

    const fileHeader = this.formatHeader('ValueSet');

    return [fileHeader, ...formattedValueSets].join('\n\n');
  }

  formatMappingsFile(target) {
    this.mappingFormatter.target = target;

    const formattedMappings = [];
    for (const map of this.nsMappings[target]) {
      if (map.inheritance != 'inherited') {
        const formattedMap = this.mappingFormatter.formatMapping(map);
        formattedMappings.push(formattedMap);
      }
    }

    const fileHeader = this.formatHeader('Map');

    return [fileHeader, ...formattedMappings].join('\n\n');
  }
}

// Formats the top of each CIMPL File.
//
//
// Example
//
// Grammar:   DataElement 5.0
// Namespace:   shr.core
// Description:	"The SHR Core domain contains definitions for a variety of general-purpose elements that are used widely in SHR. These include definitions for coding, expressions of time, quantities, addresses, names, and more."
// Uses:			shr.entity, shr.base, shr.finding

// Path:			FHIR = http://hl7.org/fhir/ValueSet
// CodeSystem:     CC = http://www.nationsonline.org/oneworld/country_code_list
// CodeSystem:     LNC = http://loinc.org
// CodeSystem:     SCT = http://snomed.info/sct
// CodeSystem:     MTH = http://ncimeta.nci.nih.gov
// CodeSystem:		NCI = https://evs.nci.nih.gov/ftp1/CDISC/SDTM/
// CodeSystem:     UCUM = http://unitsofmeasure.org
class FileHeaderFormatter {
  constructor(namespaces, elements, valuesets, mappings) {
    this._namespaces = namespaces;
    this._elements = elements;
    this._valuesets = valuesets;
    this._mappings = mappings;
  }

  get namespaces() { return this._namespaces; }
  get elements() { return this._elements; }
  get valuesets() { return this._valuesets; }
  get mappings() { return this._mappings; }

  formatDataElementFileHeader(namespace, uses, codesystems, paths) {
    if (uses) {
      uses = uses.filter(ns => ns != namespace.namespace);
    }
    return this.formatHeader('DataElement', namespace, uses, codesystems, paths);
  }

  formatValueSetFileHeader(namespace, codesystems) {
    return this.formatHeader('ValueSet', namespace, undefined, codesystems);
  }

  formatMappingFileHeader(namespace, target) {
    return this.formatHeader('Map', namespace, undefined, undefined, undefined, target, 3);
  }

  formatHeader(fileType, namespace, uses = [], codesystems = [], paths = [], target, maxRightPad = 4) {
    const formattedFileDeclaration = this.formatFileDeclaration(fileType, namespace, target, maxRightPad);
    const formattedUses = (uses && uses.length > 0) ? this.formatUses(uses, maxRightPad) : '';
    const formattedCS = codesystems.map(cs => this.formatCodeSystem(cs, maxRightPad));
    const formattedPaths = paths.map(p => this.formatPath(p, maxRightPad));

    return [
      ...formattedFileDeclaration,
      formattedUses,
      ...formattedPaths,
      ...formattedCS
    ].filter(l => l.length > 0).join('\n');
  }

  formatFileDeclaration(fileType, ns, target, maxRightPad = 4) {
    const formattedDeclaration = [
      `${rightPad('Grammar:', maxRightPad)}${fileType} 5.0`,
      `${rightPad('Namespace:', maxRightPad)}${ns.namespace}`,
    ];

    if (fileType === 'DataElement') {
      if (ns.description) {
        formattedDeclaration.push(`${rightPad('Description:', maxRightPad)}"${ns.description}"`);
      }
    } else if (fileType === 'Map' && target) {
      formattedDeclaration.push(`${rightPad('Target:', maxRightPad)}${target}`);
    }

    return formattedDeclaration;
  }

  formatUses(uses, maxRightPad) {
    return `${rightPad('Uses:', maxRightPad)}${uses.join(', ')}`;
  }

  formatCodeSystem(cs, maxRightPad) {
    return `${rightPad('CodeSystem:', maxRightPad)}${shorthandFromCodesystem(cs)} = ${cs}`;
  }

  formatPath(path, maxRightPad) {
    return `${rightPad('Path:', maxRightPad)}${path.shorthand} = ${path.url}`;
  }
}

module.exports = { NamespaceFormatter };