const {expect} = require('chai');
//const Concept = require('../lib/includes/Concept');
const setup = require('./setup');
require('babel-register')({
  presets: [ 'es2015' ]
});

let context;

describe('#FromJSON', () => {

  before(function() {
    this.timeout(5000);
    context = setup('./test/fixtures/spec', 'config_stu3.json', './build/test', true);
    context.setupAjvJson('./build/test/schema');
  });

  describe('#StringValueEntryClass()', () => {

    let StringValueEntry;
    before(() => StringValueEntry = context.importResult('shr/simple/StringValueEntry'));

    it('should deserialize a JSON instance', () => {
      const json = context.getJSON('StringValueEntry');
      const entry = StringValueEntry.fromJSON(json);
      expect(entry).instanceOf(StringValueEntry);
      expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/StringValueEntry');
      expectStringValue(entry, 'Hello World!');
    });
  });

  describe('#ConceptValueEntryClass()', () => {

    let ConceptValueEntry;
    before(() => ConceptValueEntry = context.importResult('shr/simple/ConceptValueEntry'));

    it('should deserialize a JSON instance with an object code', () => {
      const json = context.getJSON('ConceptValueEntry');
      const entry = ConceptValueEntry.fromJSON(json);
      expect(entry).instanceOf(ConceptValueEntry);
      expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/ConceptValueEntry');
      expectConceptValue(entry, [{ code: 'foo', system: 'http://foo.org/bar', display: 'Foo' }]);
    });
  });

  describe('#MultiConceptValueEntryClass()', () => {

    let MultiConceptValueEntry;
    before(() => MultiConceptValueEntry = context.importResult('shr/simple/MultiConceptValueEntry'));

    it('should deserialize a JSON instance with an object code', () => {
      const json = context.getJSON('MultiConceptValueEntry');
      const entry = MultiConceptValueEntry.fromJSON(json);
      expect(entry).instanceOf(MultiConceptValueEntry);
      expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/MultiConceptValueEntry');
      expectConceptValue(entry,
        [
          { code: 'foo', system: 'http://foo.org/bar', display: 'Foo' },
          { code: 'bar', system: 'http://foo.org/bar', display: 'Bar' }
        ]
      );
    });
  });

  describe('#ElementValueEntryClass()', () => {

    let ElementValueEntry;
    before(() => ElementValueEntry = context.importResult('shr/simple/ElementValueEntry'));

    it('should deserialize a JSON instance', () => {
      const json = context.getJSON('ElementValueEntry');
      const entry = ElementValueEntry.fromJSON(json);
      expect(entry).instanceOf(ElementValueEntry);
      expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/ElementValueEntry');
      expectInstanceOf(entry.value, 'shr/simple/StringValue');
      expectStringValue(entry.value, 'Hello Cleveland!');
    });
  });

  describe('#RecursiveEntryClass()', () => {

    let RecursiveEntry;
    before(() => RecursiveEntry = context.importResult('shr/simple/RecursiveEntry'));

    it('should deserialize a JSON instance', () => {
      const json = context.getJSON('RecursiveEntry');
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

    let ReferenceEntry;
    before(() => ReferenceEntry = context.importResult('shr/simple/ReferenceEntry'));

    it('should deserialize a JSON instance', () => {
      const json = context.getJSON('ReferenceEntry');
      const entry = ReferenceEntry.fromJSON(json);
      expect(entry).instanceOf(ReferenceEntry);
      expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/ReferenceEntry');
      expectReferenceValue(entry, {
        shrId: '1',
        entryId: '1-2',
        entryType: 'http://standardhealthrecord.org/spec/shr/simple/StringValueEntry'
      }, 'stringValueEntry');
      const cveRefs = entry.conceptValueEntry;
      expect(cveRefs).to.have.length(2);
      expectReference(cveRefs[0], {
        shrId: '1',
        entryId: '1-3',
        entryType: 'http://standardhealthrecord.org/spec/shr/simple/ConceptValueEntry'
      });
      expectReference(cveRefs[1], {
        shrId: '1',
        entryId: '1-4',
        entryType: 'http://standardhealthrecord.org/spec/shr/simple/ConceptValueEntry'
      });
    });
  });

  describe('#BasedOnIntegerValueElementEntryClass()', () => {

    let BasedOnIntegerValueElementEntry;
    before(() => BasedOnIntegerValueElementEntry = context.importResult('shr/simple/BasedOnIntegerValueElementEntry'));

    it('should deserialize a JSON instance', () => {
      const json = context.getJSON('BasedOnIntegerValueElementEntry');
      const entry = BasedOnIntegerValueElementEntry.fromJSON(json);
      expect(entry).instanceOf(BasedOnIntegerValueElementEntry);
      expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/BasedOnIntegerValueElementEntry');
      expectIntegerValue(entry, 43);
      expectInstanceOf(entry.stringValue, 'shr/simple/StringValue');
      expectStringValue(entry.stringValue, 'Hello!');
    });
  });

  describe('#InheritBasedOnIntegerValueElementEntryClass()', () => {

    let BasedOnIntegerValueElementEntry, InheritBasedOnIntegerValueElementEntry;
    before(() => {
      BasedOnIntegerValueElementEntry = context.importResult('shr/simple/InheritBasedOnIntegerValueElementEntry');
      InheritBasedOnIntegerValueElementEntry = context.importResult('shr/simple/InheritBasedOnIntegerValueElementEntry');
    });

    it('should deserialize a JSON instance', () => {
      const json = context.getJSON('InheritBasedOnIntegerValueElementEntry');
      const entry = InheritBasedOnIntegerValueElementEntry.fromJSON(json);
      expect(entry).instanceOf(InheritBasedOnIntegerValueElementEntry);
      expect(entry).instanceOf(BasedOnIntegerValueElementEntry);
      expectIntegerValue(entry, 43);
      expectInstanceOf(entry.stringValue, 'shr/simple/StringValue');
      expectStringValue(entry.stringValue, 'Hello!');
    });
  });

  describe('#OverrideBasedOnIntegerValueElementEntryClass()', () => {

    let OverrideBasedOnIntegerValueElementEntry;
    before(() => OverrideBasedOnIntegerValueElementEntry = context.importResult('shr/simple/OverrideBasedOnIntegerValueElementEntry'));

    it('should deserialize a JSON instance', () => {
      const json = context.getJSON('OverrideBasedOnIntegerValueElementEntry');
      const entry = OverrideBasedOnIntegerValueElementEntry.fromJSON(json);
      expect(entry).instanceOf(OverrideBasedOnIntegerValueElementEntry);
      expectStandardEntryInfoValues(entry, 'http://standardhealthrecord.org/spec/shr/simple/OverrideBasedOnIntegerValueElementEntry');
      expectIntegerValue(entry, 43);
      expectInstanceOf(entry.stringValue, 'shr/simple/StringValueChild');
      expectStringValue(entry.stringValue, 'Hello!');
    });
  });

  describe('#ChoiceValueEntryClass()', () => {

    let ChoiceValueEntry;
    before(() => ChoiceValueEntry = context.importResult('shr/simple/ChoiceValueEntry'));

    it('should deserialize a JSON instance with a string', () => {
      const json = context.getJSON('ChoiceValueStringEntry');
      const entry = ChoiceValueEntry.fromJSON(json);
      expect(entry).instanceOf(ChoiceValueEntry);
      expect(entry.value).to.equal('Hello!');
    });

    it('should deserialize a JSON instance with an integer', () => {
      const json = context.getJSON('ChoiceValueIntEntry');
      const entry = ChoiceValueEntry.fromJSON(json);
      expect(entry).instanceOf(ChoiceValueEntry);
      expect(entry.value).to.equal(35);
    });
  });

});

function expectInstanceOf(inst, fqn) {
  const fqnAsPath = fqn.split('.').join('/');
  expect(inst).to.be.instanceOf(context.importResult(fqnAsPath));
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
  expectInstanceOf(coding, 'Coding');
  expect(coding.code).to.equal(expected.code);
  expect(coding.system).to.equal(expected.system);
  expect(coding.display).to.equal(expected.display);
}

function expectConcept(concept, coding) {
  expectInstanceOf(concept, 'Concept');
  expect(concept.coding).to.have.length(coding.length);
  for (let i=0; i < coding.length; i++) {
    expectCoding(concept.coding[i], coding[i]);
  }
}

function expectConceptValue(element, coding) {
  expectConcept(element.value, coding);
  expect(element.concept).to.equal(element.value);
}

function expectReference(reference, expected) {
  const Reference = context.importResult('Reference');
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

