//const models = require('shr-models');
const { rightPad, shorthandFromCodesystem } = require('./commons');
const { DataElementFormatterCimpl6 } = require('./dataElementFormatterCimpl6');
const DEFAULT_MAX_PLACE = 20;

class FileFormatterCimpl6 {
  constructor(specs, nsValueSets, nsMappings) {
    this.specs = specs;

    this.nsValueSets = nsValueSets;
    this.nsMappings = nsMappings;
    this._namespaces = specs.namespaces.all;

    this.headerFormatter = new FileHeaderFormatter(specs);
    this.dataElementFormatter = new DataElementFormatterCimpl6(specs);
  }

  get namespaces() { return this._namespaces; }

  formatHeader(fileType, file_ns, file_uses, file_cs) {
    switch (fileType) {
    case 'DataElement': {
      return this.headerFormatter.formatDataElementFileHeader(file_ns, file_uses, file_cs);
    }
    default:
      return;
    }
  }


  formatDataElementFile(substituteHash) {
    this.dataElementFormatter.reset();

    const formattedDataElementsHash = {};
    this.specs.dataElements.files.forEach(f => {
      let h = f.substr(f.lastIndexOf('\\') + 1);
      formattedDataElementsHash[h] = [];
      const fileDataElements = [];
      let c = 0;
      let currentNamespace;
      this.specs.dataElements.byFile(f).forEach(de => {
        const formattedDE = this.dataElementFormatter.formatDataElement(de, substituteHash);
        fileDataElements.push(formattedDE);
        //Get the namespace of the file by getting the namespace of the first data element declared in the file.
        if (c == 0) {
          currentNamespace = this.namespaces.find(ns => ns.namespace == de.identifier.namespace);
        }
        //Increment the variable c so that the namespace will only needed to be found once per file.
        c += 1;
      });
      const header = this.formatHeader('DataElement', currentNamespace, this.dataElementFormatter.uses, this.dataElementFormatter.codesystems);
      formattedDataElementsHash[h].push([header, ...fileDataElements].join('\r\n\r\n'));
      this.dataElementFormatter.reset();
    });
    return formattedDataElementsHash;
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

module.exports = { FileFormatterCimpl6 };
