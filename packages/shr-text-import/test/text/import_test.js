const {expect} = require('chai');
const {importFromFilePath} = require('../../lib/text/import');
const {Namespace, DataElement, Group, Concept, Value, CodeFromValueSetValue, CodeFromAncestorValue, RefValue, OrValues, QuantifiedValue, PrimitiveIdentifier} = require('../../lib/models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple entry', () => {
    const {namespaces, errors} = importFixture('Simple');
    expect(errors).is.empty;
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expectPrimitiveValue(simple.value, 'string');
  });

  it('should correctly import a simple element', () => {
    const {namespaces, errors} = importFixture('SimpleElement');
    expect(errors).is.empty;
    const simple = expectAndGetSingleElement(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectPrimitiveValue(simple.value, 'string');
  });

  it('should correctly import a coded entry', () => {
    const {namespaces, errors} = importFixture('Coded');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded entry');
    expectCodeValue(coded.value);
  });

  it('should correctly import an entry with a code from a valueset', () => {
    const {namespaces, errors} = importFixture('CodedFromValueSet');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'CodedFromValueSet');
    expect(coded.description).to.equal('It is a coded entry');
    expectCodeValue(coded.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a code descending from a concept', () => {
    const {namespaces, errors} = importFixture('CodedDescendent');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'CodedDescendent');
    expect(coded.description).to.equal('It is a coded entry');
    expectCodeValue(coded.value, 'http://standardhealthrecord.org/test/vs/Coded', 'grandpa', 'Grandfather');
  });

  it('should correctly import a reference to simple element', () => {
    const {namespaces, errors} = importFixture('SimpleReference');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const simple = expectAndGetEntry(ns, 0, 'SimpleReference');
    expect(simple.description).to.equal('It is a reference to a simple element');
    expectRefValue(simple.value, 'shr.test', 'Simple');
  });

  it('should correctly import an entry with a list value', () => {
    const {namespaces, errors} = importFixture('MultiString');
    expect(errors).is.empty;
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'MultiString');
    expect(simple.description).to.equal('It is a multi-string entry');
    expectMinMax(simple.value, 1);
    expectPrimitiveValue(simple.value.value, 'string');
  });

  it('should correctly import a choice entry', () => {
    const {namespaces, errors} = importFixtureFolder('choice');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const choice = expectAndGetEntry(ns, 0, 'Choice');
    expect(choice.description).to.equal('It is an entry with a choice');
    expectOrValues(choice.value, 3);
    expectOrValue(choice.value, 0, 'primitive', 'date');
    expectOrValue(choice.value, 1, 'other.ns', 'Period');
    expectOrValue(choice.value, 2, 'shr.test', 'Simple');
  });

  it('should correctly import a complex choice entry', () => {
    const {namespaces, errors} = importFixtureFolder('complexChoice');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const choice = expectAndGetEntry(ns, 0, 'ComplexChoice');
    expect(choice.description).to.equal('It is an entry with a complex choice');
    const or = choice.value;
    expectOrValues(or, 2);
    const or0 = or.values[0];
    expectMinMax(or0, 1, 2);
    expectOrValues(or0.value, 2);
    expectOrValue(or0.value, 0, 'primitive', 'date');
    expectOrValue(or0.value, 1, 'other.ns', 'Period');
    const or1 = or.values[1];
    expectMinMax(or1, 3, 4);
    expectValue(or1.value, 'shr.test', 'Simple');
  });

  it('should correctly import a group entry', () => {
    const {namespaces, errors} = importFixtureFolder('group');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const group = expectAndGetEntry(ns, 0, 'SimpleGroup', Group);
    expect(group.concepts).to.have.length(3);
    expectConcept(group.concepts[0], 'http://foo.org', 'bar');
    expectConcept(group.concepts[1], 'http://boo.org', 'far');
    expectConcept(group.concepts[2], 'http://zoo.org', 'bear');
    expect(group.description).to.equal('It is a group entry');
    expect(group.elements).to.have.length(4);
    expectGroupElement(group, 0, 'shr.test', 'Simple', 0, 1);
    expectGroupElement(group, 1, 'shr.test', 'Coded', 0);
    expectGroupElement(group, 2, 'shr.test', 'Simple2', 1);
    expectGroupElement(group, 3, 'other.ns', 'Thing', 1, 1);
  });

  it('should correctly import a group element', () => {
    const {namespaces, errors} = importFixtureFolder('groupElement');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const group = expectAndGetElement(ns, 0, 'SimpleGroup', Group);
    expect(group.concepts).to.have.length(3);
    expectConcept(group.concepts[0], 'http://foo.org', 'bar');
    expectConcept(group.concepts[1], 'http://boo.org', 'far');
    expectConcept(group.concepts[2], 'http://zoo.org', 'bear');
    expect(group.description).to.equal('It is a group element');
    expect(group.elements).to.have.length(4);
    expectGroupElement(group, 0, 'shr.test', 'Simple', 0, 1);
    expectGroupElement(group, 1, 'shr.test', 'Coded', 0);
    expectGroupElement(group, 2, 'shr.test', 'Simple2', 1);
    expectGroupElement(group, 3, 'other.ns', 'Thing', 1, 1);
  });

  it('should correctly import multiple elements in a single namespace', () => {
    const {namespaces, errors} = importFixture('MultipleElementNamespace');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(1);
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');

    const simple = expectAndGetEntry(ns, 0, 'SimpleDate');
    expect(simple.description).to.equal('It is a simple date entry');
    expectPrimitiveValue(simple.value, 'date');

    const coded = expectAndGetElement(ns, 1, 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectCodeValue(coded.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly resolve elements and vocabularies from other namespaces', () => {
    const {namespaces, errors} = importFixtureFolder('uses');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(3);

    const ns1 = expectAndGetNamespace(namespaces, 0, 'shr.test.one');
    expect(ns1.definitions).to.have.length(1);
    const one = expectAndGetEntry(ns1, 0, 'One');
    expect(one.concepts).to.have.length(2);
    expectConcept(one.concepts[0], 'http://foo.org', 'bar');
    expectConcept(one.concepts[1], 'http://moo.org', 'car');
    expect(one.description).to.equal('It is an entry that uses other namespaces');
    expectValue(one.value, 'shr.test.two', 'Two');

    const ns2 = expectAndGetNamespace(namespaces, 1, 'shr.test.two');
    expect(ns2.definitions).to.have.length(1);
    const two = expectAndGetEntry(ns2, 0, 'Two');
    expect(two.concepts).to.have.length(1);
    expectConcept(two.concepts[0], 'http://zoo.org', 'bear');
    expect(two.description).to.equal('It is an entry that uses other namespaces too');
    expectPrimitiveValue(two.value, 'string');

    const ns3 = expectAndGetNamespace(namespaces, 2, 'shr.test.three');
    expect(ns3.definitions).to.have.length(0);
  });

  it('should return errors when there are invalid vocabulary references', () => {
    const {namespaces, errors} = importFixture('InvalidVocabularyReference');
    expect(errors).has.length(1);
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'ZOO', 'bear'); // Defaults to vocabulary alias
    expect(simple.description).to.equal('It is a simple entry with invalid vocab');
    expectPrimitiveValue(simple.value, 'string');
  });

  it('should return errors when there are invalid element references', () => {
    const {namespaces, errors} = importFixture('InvalidElementReference');
    expect(errors).has.length(1);
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid element reference');
    expectValue(simple.value, 'shr.test', 'Complex'); // Defaults to current namespace
  });

  it('should return errors when there are invalid fully qualified element references', () => {
    const {namespaces, errors} = importFixture('InvalidFQElementReference');
    expect(errors).has.length(1);
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid fully qualified element reference');
    expectValue(simple.value, 'other.ns', 'Complex'); // Defaults to current namespace
  });

  it('should return errors when there are ambiguous element references', () => {
    const {namespaces, errors} = importFixtureFolder('ambiguousResolution');
    expect(errors).has.length(1);
    const ns1 = expectAndGetNamespace(namespaces, 0, 'shr.test.one');
    expect(ns1.definitions).to.have.length(1);
    const amb = expectAndGetEntry(ns1, 0, 'Ambiguous');
    expect(amb.concepts).to.be.empty;
    expect(amb.description).to.equal('It is an entry that uses an ambiguous reference');
    expectValue(amb.value, 'shr.test.two', 'Foo'); // Defaults to first encountered namespace
  });

  it('should return errors when there are conflicting vocab references', () => {
    const {namespaces, errors} = importFixtureFolder('conflictingVocab');
    expect(errors).to.have.length(1);
    expect(errors[0]).to.contain('FOO');
    expect(errors[0]).to.not.contain('MOO');
    expect(namespaces).to.have.length(2);

    const ns1 = expectAndGetNamespace(namespaces, 0, 'shr.test.one');
    expect(ns1.definitions).to.have.length(1);
    const conflicting = expectAndGetEntry(ns1, 0, 'Conflicting');
    expect(conflicting.concepts).to.have.length(2);
    expectConcept(conflicting.concepts[0], 'http://foo.org', 'bar'); // Default to the first encountered vocab
    expectConcept(conflicting.concepts[1], 'http://moo.org', 'car');
    expect(conflicting.description).to.equal('It is an entry that uses a conflicting vocab reference');
    expectPrimitiveValue(conflicting.value, 'string');
  });
});

function expectAndGetNamespace(results, namespaceIndex, expectedNamespace) {
  const ns = results[namespaceIndex];
  expect(ns).to.be.instanceof(Namespace);
  expect(ns.namespace).to.equal(expectedNamespace);
  return ns;
}

function expectAndGetElement(namespace, defIndex, expectedName, expectedClass=DataElement) {
  return expectAndGetBaseElement(namespace, defIndex, expectedName, expectedClass, false);
}

function expectAndGetEntry(namespace, defIndex, expectedName, expectedClass=DataElement) {
  return expectAndGetBaseElement(namespace, defIndex, expectedName, expectedClass, true);
}

function expectAndGetBaseElement(namespace, defIndex, expectedName, expectedClass, isEntry) {
  const def = namespace.definitions[defIndex];
  expect(def).to.be.instanceof(expectedClass);
  expect(def.isEntry).to.equal(isEntry);
  expect(def.identifier.namespace).to.equal(namespace.namespace);
  expect(def.identifier.name).to.equal(expectedName);
  return def;
}

function expectAndGetSingleElement(results, expectedNamespace, expectedName, expectedClass=DataElement) {
  return expectAndGetSingleBaseElement(results, expectedNamespace, expectedName, expectedClass, false);
}

function expectAndGetSingleEntry(results, expectedNamespace, expectedName, expectedClass=DataElement) {
  return expectAndGetSingleBaseElement(results, expectedNamespace, expectedName, expectedClass, true);
}

function expectAndGetSingleBaseElement(results, expectedNamespace, expectedName, expectedClass, isEntry) {
  expect(results).to.have.length(1);
  const ns = expectAndGetNamespace(results, 0, expectedNamespace);
  expect(ns.definitions).to.have.length(1);
  return expectAndGetBaseElement(ns, 0, expectedName, expectedClass, isEntry);
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

function expectCodeValue(value, expectedUrl, expectedAncestor, expectedLabel) {
  if (typeof expectedUrl == 'undefined') {
    expect(value).to.be.instanceof(Value);
    expect(value.valueset).to.be.undefined;
  } else if (typeof expectedAncestor == 'undefined') {
    expect(value).to.be.instanceof(CodeFromValueSetValue);
    expect(value.valueset).to.equal(expectedUrl);
  } else {
    expect(value).to.be.instanceof(CodeFromAncestorValue);
    expectConcept(value.ancestor, expectedUrl, expectedAncestor, expectedLabel);
  }
  expect(value.identifier).to.be.instanceof(PrimitiveIdentifier);
  expect(value.identifier.namespace).to.equal('primitive');
  expect(value.identifier.name).to.equal('code');
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

function expectConcept(concept, codesystem, code, label) {
  expect(concept.codesystem).equals(codesystem);
  expect(concept.code).equals(code);
  expect(concept.label).equals(label);
}

function importFixture(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}.txt`);
}

function importFixtureFolder(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}`);
}
