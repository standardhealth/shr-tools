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
const { DataElementFormatterCimpl6 } = require('./dataElementFormatterCimpl6');
const { MappingFormatter } = require('./mappingFormatter');
const { ValueSetFormatter } = require('./valueSetFormatter');
const DEFAULT_MAX_PLACE = 20;

class NamespaceFormatterCimpl6 {
  constructor(ns, specs, nsDataElements, nsValueSets, nsMappings) {

    this.ns = ns;

    this.specs = specs;

    this.nsDataElements = nsDataElements;
    this.nsValueSets = nsValueSets;
    this.nsMappings = nsMappings;

    this.headerFormatter = new FileHeaderFormatter(specs);
    this.dataElementFormatter = new DataElementFormatterCimpl6(specs);
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

  formatDataElementFile(substituteHash) {
    this.dataElementFormatter.reset();

    const formattedDataElements = [];
    for (const de of this.nsDataElements) {
      const formattedDE = this.dataElementFormatter.formatDataElement(de, substituteHash);
      formattedDataElements.push(formattedDE);
    }

    const fileHeader = this.formatHeader('DataElement');

    return [fileHeader, ...formattedDataElements].join('\r\n\r\n');
  }

  formatValueSetFile() {
    this.valueSetFormatter.reset();

    const formattedValueSets = [];
    for (const vs of this.nsValueSets) {
      const formattedVS = this.valueSetFormatter.formatValueSet(vs);
      formattedValueSets.push(formattedVS);
    }

    const fileHeader = this.formatHeader('ValueSet');

    return [fileHeader, ...formattedValueSets].join('\r\n\r\n');
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

    return [fileHeader, ...formattedMappings].join('\r\n\r\n');
  }
}

// Formats the top of each CIMPL File.
//
//
// Example
//
// Grammar:   DataElement 6.0
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
    ].filter(l => l.length > 0).join('\r\n');
  }

  formatFileDeclaration(fileType, ns, target, maxRightPad = 4) {
    const formattedDeclaration = [
      `${rightPad('Grammar:', DEFAULT_MAX_PLACE - 9)}${fileType} 6.0`,
      `${rightPad('Namespace:', DEFAULT_MAX_PLACE -11)}${ns.namespace.trim()}`,
    ];

    if (fileType === 'DataElement') {
      if (ns.description) {
        formattedDeclaration.push(`${rightPad('Description:', DEFAULT_MAX_PLACE - 13)}"${ns.description.trim()}"`);
      }
    } else if (fileType === 'Map' && target) {
      formattedDeclaration.push(`${rightPad('Target:', DEFAULT_MAX_PLACE - 7)}${target}`);
    }

    return formattedDeclaration;
  }

  formatUses(uses, maxRightPad) {
    return `${rightPad('Uses:', DEFAULT_MAX_PLACE - 6)}${uses.join(', ')}`;
  }

  formatCodeSystem(cs, maxRightPad) {
    return `${rightPad('CodeSystem:', DEFAULT_MAX_PLACE - 12)}${shorthandFromCodesystem(cs)} = ${cs.trim()}`;
  }

  formatPath(path, maxRightPad) {
    return `${rightPad('Path:', DEFAULT_MAX_PLACE - 6)}${path.shorthand} = ${path.url.trim()}`;
  }
}

module.exports = { NamespaceFormatterCimpl6 };
