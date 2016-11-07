const {expect} = require('chai');
const {importFromFilePath} = require('../../lib/text/import');
const {Namespace, Section, DataElement, Group, Value, CodeValue, RefValue, OrValues, QuantifiedValue, PrimitiveIdentifier} = require('../../lib/models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple data element', () => {
    const results = importFixture('simpleDataElement');
    const simple = expectAndGetSingleElement(results, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple data element');
    expectPrimitiveValue(simple.value, 'string');
  });

  it('should correctly import a coded data element', () => {
    const results = importFixture('CodedDataElement');
    const coded = expectAndGetSingleElement(results, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded data element');
    expectCodeValue(coded.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import a reference to simple data element', () => {
    const results = importFixture('simpleReferenceDataElement');
    const simple = expectAndGetSingleElement(results, 'shr.test', 'SimpleReference');
    expect(simple.description).to.equal('It is a reference to a simple data element');
    expectRefValue(simple.value, 'shr.test', 'Simple');
  });

  it('should correctly import a data element with list value', () => {
    const results = importFixture('multiStringDataElement');
    const simple = expectAndGetSingleElement(results, 'shr.test', 'MultiString');
    expect(simple.description).to.equal('It is a multi-string data element');
    expectMinMax(simple.value, 1);
    expectPrimitiveValue(simple.value.value, 'string');
  });

  it('should correctly import a choice data element', () => {
    const results = importFixture('ChoiceDataElement');
    const choice = expectAndGetSingleElement(results, 'shr.test', 'Choice');
    expect(choice.description).to.equal('It is a data element with a choice');
    expectOrValues(choice.value, 3);
    expectOrValue(choice.value, 0, 'primitive', 'date');
    expectOrValue(choice.value, 1, 'other.ns', 'Period');
    expectOrValue(choice.value, 2, 'shr.test', 'Simple');
  });

  it('should correctly import a complex choice data element', () => {
    const results = importFixture('ComplexChoiceDataElement');
    const choice = expectAndGetSingleElement(results, 'shr.test', 'ComplexChoice');
    expect(choice.description).to.equal('It is a data element with a complex choice');
    expectMinMax(choice.value, 1, 2);
    const or = choice.value.value;
    expectOrValues(or, 2);
    const or0 = or.values[0];
    expectMinMax(or0, 3, 4);
    expectOrValues(or0.value, 2);
    expectOrValue(or0.value, 0, 'primitive', 'date');
    expectOrValue(or0.value, 1, 'other.ns', 'Period');
    const or1 = or.values[1];
    expectMinMax(or1, 5, 6);
    expectValue(or1.value, 'shr.test', 'Simple');
  });

  it('should correctly import a group', () => {
    const results = importFixture('GroupDataElement');
    const simple = expectAndGetSingleElement(results, 'shr.test', 'SimpleGroup', Group);
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expectConcept(simple.concepts[1], 'http://boo.org', 'far');
    expectConcept(simple.concepts[2], 'ZOO', 'bear');
    expect(simple.description).to.equal('It is a group data element');
    expect(simple.elements).to.have.length(4);
    expectGroupElement(simple, 0, 'shr.test', 'Simple', 0, 1);
    expectGroupElement(simple, 1, 'shr.test', 'Coded', 0);
    expectGroupElement(simple, 2, 'shr.test', 'Simple', 1);
    expectGroupElement(simple, 3, 'other.ns', 'Thing', 1, 1);
  });

  it('should correctly import a section', () => {
    const results = importFixture('SimpleSection');
    const namespace = expectAndGetNamespace(results, 0, 'shr.test');
    expect(namespace.sections).to.have.length(1);
    const section = namespace.sections[0];
    expect(section).to.be.instanceof(Section);
    expect(section.identifier.namespace).to.equal('shr.test');
    expect(section.identifier.name).to.equal('SimpleSection');
    expect(section.entries).to.have.length(3);
    expectSectionEntry(section, 0, 'shr.test', 'Simple', 1);
    expectSectionEntry(section, 1, 'shr.test', 'Coded', 1, 1);
    expectSectionEntry(section, 2, 'shr.test', 'GroupOfThings', 0, 3);
  });

  it('should correctly import multiple elements in a single namespace', () => {
    const results = importFixture('MultipleElements');
    expect(results).to.have.length(1);
    const ns = expectAndGetNamespace(results, 0, 'shr.test');

    const simple = expectAndGetElement(ns, 0, 'SimpleDate');
    expect(simple.description).to.equal('It is a simple date data element');
    expectPrimitiveValue(simple.value, 'date');

    const coded = expectAndGetElement(ns, 1, 'Coded');
    expect(coded.description).to.equal('It is a coded data element');
    expectCodeValue(coded.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });
});

function expectAndGetNamespace(results, namespaceIndex, expectedNamespace) {
  const ns = results[namespaceIndex];
  expect(ns).to.be.instanceof(Namespace);
  expect(ns.namespace).to.equal(expectedNamespace);
  return ns;
}

function expectAndGetElement(namespace, defIndex, expectedName, expectedClass=DataElement) {
  const def = namespace.definitions[defIndex];
  expect(def).to.be.instanceof(expectedClass);
  expect(def.identifier.namespace).to.equal(namespace.namespace);
  expect(def.identifier.name).to.equal(expectedName);
  return def;
}

function expectAndGetSingleElement(results, expectedNamespace, expectedName, expectedClass=DataElement) {
  expect(results).to.have.length(1);
  const ns = expectAndGetNamespace(results, 0, expectedNamespace);
  return expectAndGetElement(ns, 0, expectedName, expectedClass);
}

function expectValue(value, expectedNamespace, expectedName) {
  expect(value).to.be.instanceof(Value);
  expect(value.identifier.namespace).to.equal(expectedNamespace);
  expect(value.identifier.name).to.equal(expectedName);
}

function expectPrimitiveValue(value, expectedName) {
  expect(value).to.be.instanceof(Value);
  expect(value.identifier).to.be.instanceof(PrimitiveIdentifier);
  expect(value.identifier.namespace).to.equal('primitive');
  expect(value.identifier.name).to.equal(expectedName);
}

function expectCodeValue(value, expectedValueset) {
  expect(value).to.be.instanceof(CodeValue);
  expect(value.identifier).to.be.instanceof(PrimitiveIdentifier);
  expect(value.identifier.namespace).to.equal('primitive');
  expect(value.identifier.name).to.equal('code');
  expect(value.valueset).to.equal('http://standardhealthrecord.org/test/vs/Coded');
}

function expectRefValue(value, expectedNamespace, expectedName) {
  expect(value).to.be.instanceof(RefValue);
  expect(value.identifier.namespace).to.equal(expectedNamespace);
  expect(value.identifier.name).to.equal(expectedName);
}

function expectOrValues(value, size) {
  expect(value).to.be.instanceof(OrValues);
  expect(value.values).to.have.length(size);
}

function expectMinMax(quantifiedValue, expectedMin, expectedMax) {
  expect(quantifiedValue).to.be.instanceof(QuantifiedValue);
  expect(quantifiedValue.min).to.equal(expectedMin);
  if (typeof quantifiedValue.max != 'undefined') {
    expect(quantifiedValue.max).to.equal(expectedMax);
    expect(quantifiedValue.isMaxUnbounded()).to.be.false;
  } else {
    expect(quantifiedValue.max).to.be.undefined;
    expect(quantifiedValue.isMaxUnbounded()).to.be.true;
  }
}

function expectOrValue(or, componentIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  let value = or.values[componentIndex];
  if (typeof expectedMin != 'undefined') {
    expectMinMax(value, expectedMin, expectedMax);
    value = value.value;
  }
  expectValue(value, expectedNamespace, expectedName);
}

function expectGroupElement(group, elementIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  const element = group.elements[elementIndex];
  expectMinMax(element, expectedMin, expectedMax);
  expectValue(element.value, expectedNamespace, expectedName);
}

function expectSectionEntry(section, sectionIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  const entry = section.entries[sectionIndex];
  expectMinMax(entry, expectedMin, expectedMax);
  expectValue(entry.value, expectedNamespace, expectedName);
}

function expectConcept(concept, codesystem, code) {
  expect(concept.codesystem).equals(codesystem);
  expect(concept.code).equals(code);
}

function importFixture(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}.txt`);
}
