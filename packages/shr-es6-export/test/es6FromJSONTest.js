const fs = require('fs');
const {expect} = require('chai');
const Ajv = require('ajv');
const setup = require('./setup');
require('babel-register')({
  presets: [ 'es2015' ]
});

setup('./test/fixtures/spec', './build/test', true);
const ajv = setupAjv('./build/test/schema');

describe('#StringValueEntryClass()', () => {
  const StringValueEntry = importResult('shr/simple/StringValueEntry');
  it('should deserialize a JSON instance', () => {
    const json = getJSON('StringValueEntry');
    const entry = StringValueEntry.fromJSON(json);
    expect(entry).instanceOf(StringValueEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/StringValueEntry');
    expectStringValue(entry, 'Hello World!');
  });
});

describe('#CodeValueEntryClass()', () => {
  const CodeValueEntry = importResult('shr/simple/CodeValueEntry');
  it('should deserialize a JSON instance with a string code', () => {
    const json = getJSON('CodeStringValueEntry');
    const entry = CodeValueEntry.fromJSON(json);
    expect(entry).instanceOf(CodeValueEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/CodeValueEntry');
    expectCodeValue(entry, 'foo');
  });
  it('should deserialize a JSON instance with an object code', () => {
    const json = getJSON('CodeObjectValueEntry');
    const entry = CodeValueEntry.fromJSON(json);
    expect(entry).instanceOf(CodeValueEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/CodeValueEntry');
    expectCodeValue(entry, 'foo');
  });
});

describe('#CodingValueEntryClass()', () => {
  const CodingValueEntry = importResult('shr/simple/CodingValueEntry');
  it('should deserialize a JSON instance with a string code', () => {
    const json = getJSON('CodingStringValueEntry');
    const entry = CodingValueEntry.fromJSON(json);
    expect(entry).instanceOf(CodingValueEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/CodingValueEntry');
    expectCodingValue(entry, { code: 'foo', codeSystem: 'http://foo.org/bar', displayText: 'Foo' });
  });
  it('should deserialize a JSON instance with an object code', () => {
    const json = getJSON('CodingObjectValueEntry');
    const entry = CodingValueEntry.fromJSON(json);
    expect(entry).instanceOf(CodingValueEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/CodingValueEntry');
    expectCodingValue(entry, { code: 'foo', codeSystem: 'http://foo.org/bar', displayText: 'Foo' });
  });
});

describe('#CodeableConceptValueEntryClass()', () => {
  const CodeableConceptValueEntry = importResult('shr/simple/CodeableConceptValueEntry');
  it('should deserialize a JSON instance with a string code', () => {
    const json = getJSON('CodeableConceptStringValueEntry');
    const entry = CodeableConceptValueEntry.fromJSON(json);
    expect(entry).instanceOf(CodeableConceptValueEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/CodeableConceptValueEntry');
    expectCodeableConceptValue(entry,
      [
        { code: 'foo', codeSystem: 'http://foo.org/bar', displayText: 'Foo' },
        { code: 'bar', codeSystem: 'http://foo.org/bar', displayText: 'Bar' }
      ],
      'FooBar'
    );
  });
  it('should deserialize a JSON instance with an object code', () => {
    const json = getJSON('CodeableConceptObjectValueEntry');
    const entry = CodeableConceptValueEntry.fromJSON(json);
    expect(entry).instanceOf(CodeableConceptValueEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/CodeableConceptValueEntry');
    expectCodeableConceptValue(entry,
      [
        { code: 'foo', codeSystem: 'http://foo.org/bar', displayText: 'Foo' },
        { code: 'bar', codeSystem: 'http://foo.org/bar', displayText: 'Bar' }
      ],
      'FooBar'
    );
  });
});

describe('#ElementValueEntryClass()', () => {
  const ElementValueEntry = importResult('shr/simple/ElementValueEntry');
  it('should deserialize a JSON instance', () => {
    const json = getJSON('ElementValueEntry');
    const entry = ElementValueEntry.fromJSON(json);
    expect(entry).instanceOf(ElementValueEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/ElementValueEntry');
    expectInstanceOf(entry.value, 'shr/simple/StringValue');
    expectStringValue(entry.value, 'Hello Cleveland!');
  });
});

describe('#RecursiveEntryClass()', () => {
  const RecursiveEntry = importResult('shr/simple/RecursiveEntry');
  it('should deserialize a JSON instance', () => {
    const json = getJSON('RecursiveEntry');
    const entry = RecursiveEntry.fromJSON(json);
    expect(entry).instanceOf(RecursiveEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/RecursiveEntry');
    expect(entry.recursiveEntry).to.have.length(2);
    expectIntegerValue(entry, 1);
    // Recursive child 1
    const child1 = entry.recursiveEntry[0];
    expect(child1).instanceOf(RecursiveEntry);
    expectStandardEntryInfoValues(child1, 'http://standardhealthrecord.org/spec/shr/simple/RecursiveEntry');
    expect(child1.recursiveEntry).to.have.length(1);
    expectIntegerValue(child1, 10);
    // Recursive grandchild 1
    const grandchild1 = child1.recursiveEntry[0];
    expect(grandchild1).instanceOf(RecursiveEntry);
    expectStandardEntryInfoValues(grandchild1, 'http://standardhealthrecord.org/spec/shr/simple/RecursiveEntry');
    expect(grandchild1.recursiveEntry).to.be.empty;
    expectIntegerValue(grandchild1, 11);
    // Recursive child 2
    const child2 = entry.recursiveEntry[1];
    expect(child2).instanceOf(RecursiveEntry);
    expectStandardEntryInfoValues(child2, 'http://standardhealthrecord.org/spec/shr/simple/RecursiveEntry');
    expect(child2.recursiveEntry).to.be.empty;
    expectIntegerValue(child2, 20);
  });
});

describe('#ReferenceEntryClass()', () => {
  const ReferenceEntry = importResult('shr/simple/ReferenceEntry');
  it('should deserialize a JSON instance', () => {
    const json = getJSON('ReferenceEntry');
    const entry = ReferenceEntry.fromJSON(json);
    expect(entry).instanceOf(ReferenceEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/ReferenceEntry');
    expectReferenceValue(entry, {
      shrId: '1',
      entryId: '1-2',
      entryType: 'http://standardhealthrecord.org/spec/shr/simple/StringValueEntry'
    }, 'stringValueEntry');
    const cveRefs = entry.codeValueEntry;
    expect(cveRefs).to.have.length(2);
    expectReference(cveRefs[0], {
      shrId: '1',
      entryId: '1-3',
      entryType: 'http://standardhealthrecord.org/spec/shr/simple/CodeValueEntry'
    });
    expectReference(cveRefs[1], {
      shrId: '1',
      entryId: '1-4',
      entryType: 'http://standardhealthrecord.org/spec/shr/simple/CodeValueEntry'
    });
  });
});

describe('#BasedOnIntegerValueElementEntryClass()', () => {
  const BasedOnIntegerValueElementEntry = importResult('shr/simple/BasedOnIntegerValueElementEntry');
  it('should deserialize a JSON instance', () => {
    const json = getJSON('BasedOnIntegerValueElementEntry');
    const entry = BasedOnIntegerValueElementEntry.fromJSON(json);
    expect(entry).instanceOf(BasedOnIntegerValueElementEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/BasedOnIntegerValueElementEntry');
    expectIntegerValue(entry, 43);
    expectInstanceOf(entry.stringValue, 'shr/simple/StringValue');
    expectStringValue(entry.stringValue, 'Hello!');
  });
});

describe('#OverrideBasedOnIntegerValueElementEntryClass()', () => {
  const OverrideBasedOnIntegerValueElementEntry = importResult('shr/simple/OverrideBasedOnIntegerValueElementEntry');
  it('should deserialize a JSON instance', () => {
    const json = getJSON('OverrideBasedOnIntegerValueElementEntry');
    const entry = OverrideBasedOnIntegerValueElementEntry.fromJSON(json);
    expect(entry).instanceOf(OverrideBasedOnIntegerValueElementEntry);
    expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/OverrideBasedOnIntegerValueElementEntry');
    expectIntegerValue(entry, 43);
    expectInstanceOf(entry.stringValue, 'shr/simple/StringValueChild');
    expectStringValue(entry.stringValue, 'Hello!');
  });
});

function expectInstanceOf(inst, fqn) {
  const fqnAsPath = fqn.split('.').join('/');
  expect(inst).to.be.instanceOf(importResult(fqnAsPath));
}

function expectStandardEntryInfoValues(entry, type) {
  expectEntryInfo(entry, {
    shrId: '1',
    entryId: '1-1',
    entryType: type,
    creationTime: '2017-11-30T12:34:56Z',
    lastUpdated: '2017-12-05T23:45:01Z'
  });
}

function expectEntryInfo(entry, expected) {
  const entryInfo = entry.entryInfo;
  expectInstanceOf(entryInfo, 'shr/base/Entry');
  expectInstanceOf(entryInfo.shrId, 'shr/base/ShrId');
  expectIdValue(entryInfo.shrId, expected.shrId);
  expectInstanceOf(entryInfo.entryId, 'shr/base/EntryId');
  expectIdValue(entryInfo.entryId, expected.entryId);
  expectInstanceOf(entryInfo.entryType, 'shr/base/EntryType');
  expectUriValue(entryInfo.entryType, expected.entryType);
  expectInstanceOf(entryInfo.creationTime, 'shr/core/CreationTime');
  expectDateTimeValue(entryInfo.creationTime, expected.creationTime);
  expectInstanceOf(entryInfo.lastUpdated, 'shr/base/LastUpdated');
  expectInstantValue(entryInfo.lastUpdated, expected.lastUpdated);
}

function expectStringValue(element, string) {
  expect(element.value).to.equal(string);
  expect(element.string).to.equal(string);
}

function expectCodeValue(element, code) {
  expect(element.value).to.equal(code);
  expect(element.code).to.equal(code);
}

function expectIdValue(element, id) {
  expect(element.value).to.equal(id);
  expect(element.id).to.equal(id);
}

function expectUriValue(element, uri) {
  expect(element.value).to.equal(uri);
  expect(element.uri).to.equal(uri);
}

function expectIntegerValue(element, integer) {
  expect(element.value).to.equal(integer);
  expect(element.integer).to.equal(integer);
}


function expectDateTimeValue(element, dateTime) {
  expect(element.value).to.equal(dateTime);
  expect(element.dateTime).to.equal(dateTime);
}

function expectInstantValue(element, instant) {
  expect(element.value).to.equal(instant);
  expect(element.instant).to.equal(instant);
}

function expectCoding(coding, expected) {
  expectInstanceOf(coding, 'shr/core/Coding');
  expectCodeValue(coding, expected.code);
  expectInstanceOf(coding.codeSystem, 'shr/core/CodeSystem');
  expectUriValue(coding.codeSystem, expected.codeSystem);
  expectInstanceOf(coding.displayText, 'shr/core/DisplayText');
  expectStringValue(coding.displayText, expected.displayText);
}

function expectCodingValue(element, expected) {
  expectCoding(element.value, expected);
  expect(element.coding).to.equal(element.value);
}

function expectCodeableConcept(concept, codings, display) {
  expectInstanceOf(concept, 'shr/core/CodeableConcept');
  expect(concept.coding).to.have.length(codings.length);
  for (let i=0; i < codings.length; i++) {
    expectCoding(concept.coding[i], codings[i]);
  }
  expectInstanceOf(concept.displayText, 'shr/core/DisplayText');
  expectStringValue(concept.displayText, display);
}

function expectCodeableConceptValue(element, codings, display) {
  expectCodeableConcept(element.value, codings, display);
  expect(element.codeableConcept).to.equal(element.value);
}

function expectReference(reference, expected) {
  const Reference = importResult('Reference');
  expect(reference).to.be.instanceOf(Reference);
  expect(reference.shrId).to.equal(expected.shrId);
  expect(reference.entryId).to.equal(expected.entryId);
  expect(reference.entryType).to.equal(expected.entryType);
}

function expectReferenceValue(entry, expected, alias) {
  expectReference(entry.value, expected);
  if (alias) {
    expect(entry[alias]).to.equal(entry.value);
  }
}

function getJSON(name, validate=true) {
  const json = require(`./fixtures/instances/${name}.json`);
  if (!json) {
    throw new Error(`No JSON found for ${name}`);
  }
  if (validate) {
    if (!json['shr.base.EntryType'] || !json['shr.base.EntryType'].Value) {
      throw new Error(`Couldn't find entry type for ${name}`);
    }
    const entryType = json['shr.base.EntryType'].Value;
    const matches = entryType.match(/^http:\/\/standardhealthrecord\.org\/spec\/(.*)\/[^/]+$/);
    if (!matches) {
      throw new Error(`${name}'s entry type does not match expected format: ${entryType}`);
    }
    const schema = `${matches[1].split('/').join('.')}.schema.json`;
    const valid = ajv.validate(schema, json);
    expect(valid, ajv.errorsText()).to.be.true;
  }
  return json;
}

function importResult(path) {
  return require(`../build/test/es6/${path}`).default;
}

function setupAjv(schemaPath='./build/test/schema') {
  const ajv = new Ajv();
  // Add the JSON Schema DRAFT-04 meta schema
  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'));
  // Add the generated schemas
  for (const file of fs.readdirSync(schemaPath)) {
    if (file.endsWith('schema.json')) {
      ajv.addSchema(require(`../${schemaPath}/${file}`), file);
    }
  }
  return ajv;
}
