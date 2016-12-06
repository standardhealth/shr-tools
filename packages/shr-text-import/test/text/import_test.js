const {expect} = require('chai');
const {importFromFilePath} = require('../../lib/text/import');
const {Namespace, DataElement, Value, CodeValue, RefValue, ChoiceValue, QuantifiedValue, Identifier, PrimitiveIdentifier} = require('../../lib/models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple entry', () => {
    const {namespaces, errors} = importFixture('Simple');
    expect(errors).is.empty;
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expectMinMax(simple.value, 1, 1);
    expectPrimitiveValue(simple.value.value, 'string');
  });

  it('should correctly import a simple element', () => {
    const {namespaces, errors} = importFixture('SimpleElement');
    expect(errors).is.empty;
    const simple = expectAndGetSingleElement(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectMinMax(simple.value, 1, 1);
    expectPrimitiveValue(simple.value.value, 'string');
  });

  it('should correctly import a coded entry', () => {
    const {namespaces, errors} = importFixture('Coded');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded entry');
    expectMinMax(coded.value, 1, 1);
    expectCodeValue(coded.value.value);
  });

  it('should correctly import an entry with a code from a valueset', () => {
    const {namespaces, errors} = importFixture('CodedFromValueSet');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'CodedFromValueSet');
    expect(coded.description).to.equal('It is a coded entry');
    expectMinMax(coded.value, 1, 1);
    expectCodeValue(coded.value.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a code from a valueset using a path', () => {
    const {namespaces, errors} = importFixture('CodedFromPathValueSet');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'CodedFromPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a path');
    expectMinMax(coded.value, 1, 1);
    expectCodeValue(coded.value.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a code from a valueset using a default path', () => {
    const {namespaces, errors} = importFixture('CodedFromDefaultPathValueSet');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'CodedFromDefaultPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a default path');
    expectMinMax(coded.value, 1, 1);
    expectCodeValue(coded.value.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a Coding from a valueset', () => {
    const {namespaces, errors} = importFixtureFolder('codingFromValueSet');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 1, 'shr.test');
    const codingFromVS = expectAndGetEntry(ns, 0, 'CodingFromValueSet');
    expect(codingFromVS.description).to.equal('It is a coded entry with Coding');
    expectMinMax(codingFromVS.value, 1, 1);
    expectCodingValue(codingFromVS.value.value, 'http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import a reference to simple element', () => {
    const {namespaces, errors} = importFixture('SimpleReference');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const simple = expectAndGetEntry(ns, 0, 'SimpleReference');
    expect(simple.description).to.equal('It is a reference to a simple element');
    expectMinMax(simple.value, 1, 1);
    expectRefValue(simple.value.value, 'shr.test', 'Simple');
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
    expectMinMax(choice.value, 1, 1);
    expectChoiceValue(choice.value.value, 3);
    expectChoiceOption(choice.value.value, 0, 'primitive', 'date');
    expectChoiceOption(choice.value.value, 1, 'other.ns', 'Period');
    expectChoiceOption(choice.value.value, 2, 'shr.test', 'Simple');
  });

  /* Not currently supported by grammar, but maybe it should be?
  it('should correctly import a complex choice entry', () => {
    const {namespaces, errors} = importFixtureFolder('complexChoice');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const choice = expectAndGetEntry(ns, 0, 'ComplexChoice');
    expect(choice.description).to.equal('It is an entry with a complex choice');
    expectMinMax(choice.value, 1, 1);
    const option = choice.value.value;
    expectChoiceValue(option, 2);
    const option0 = option.values[0];
    expectMinMax(option0, 1, 2);
    expectChoiceValue(option0.value, 2);
    expectChoiceOption(option0.value, 0, 'primitive', 'date');
    expectChoiceOption(option0.value, 1, 'other.ns', 'Period');
    const option1 = option.values[1];
    expectMinMax(option1, 3, 4);
    expectValue(option1.value, 'shr.test', 'Simple');
  });
  */

  it('should correctly import a group entry with a code value', () => {
    const {namespaces, errors} = importFixtureFolder('group');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const group = expectAndGetEntry(ns, 0, 'SimpleGroup');
    expect(group.concepts).to.have.length(3);
    expectConcept(group.concepts[0], 'http://foo.org', 'bar');
    expectConcept(group.concepts[1], 'http://boo.org', 'far');
    expectConcept(group.concepts[2], 'http://zoo.org', 'bear');
    expect(group.description).to.equal('It is a group entry with a code value');
    expectMinMax(group.value, 1, 1);
    expectPrimitiveValue(group.value.value, 'code');
    expect(group.elements).to.have.length(4);
    expectSupportingElement(group, 0, 'shr.test', 'Simple', 0, 1);
    expectSupportingElement(group, 1, 'shr.test', 'Coded', 0);
    expectSupportingElement(group, 2, 'shr.test', 'Simple2', 1);
    expectSupportingElement(group, 3, 'other.ns', 'Thing', 1, 1);
  });

  it('should correctly import a group element', () => {
    const {namespaces, errors} = importFixtureFolder('groupElement');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const group = expectAndGetElement(ns, 0, 'SimpleGroup');
    expect(group.concepts).to.have.length(3);
    expectConcept(group.concepts[0], 'http://foo.org', 'bar');
    expectConcept(group.concepts[1], 'http://boo.org', 'far');
    expectConcept(group.concepts[2], 'http://zoo.org', 'bear');
    expect(group.description).to.equal('It is a group element');
    expect(group.elements).to.have.length(4);
    expectSupportingElement(group, 0, 'shr.test', 'Simple', 0, 1);
    expectSupportingElement(group, 1, 'shr.test', 'Coded', 0);
    expectSupportingElement(group, 2, 'shr.test', 'Simple2', 1);
    expectSupportingElement(group, 3, 'other.ns', 'Thing', 1, 1);
  });

  it('should correctly import an entry based on an element', () => {
    const {namespaces, errors} = importFixture('BasedOn');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const basedOn = expectAndGetEntry(ns, 0, 'SimpleBasedOn');
    expect(basedOn.basedOn).to.have.length(1);
    expect(basedOn.basedOn[0].namespace).to.equal('shr.test');
    expect(basedOn.basedOn[0].name).to.equal('SimpleBase');
    expect(basedOn.concepts).to.have.length(1);
    expectConcept(basedOn.concepts[0], 'http://foo.org', 'bar');
    expect(basedOn.description).to.equal('It is a simple definition based on SimpleBase');
    expectMinMax(basedOn.value, 1, 1);
    expectValue(basedOn.value.value, 'shr.test', 'Simple');

    // TODO: Actually pull in the fields from the base
  });

  it('should correctly import multiple elements in a single namespace', () => {
    const {namespaces, errors} = importFixture('MultipleElementNamespace');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(1);
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');

    const simple = expectAndGetEntry(ns, 0, 'SimpleDate');
    expect(simple.description).to.equal('It is a simple date entry');
    expectMinMax(simple.value, 1, 1);
    expectPrimitiveValue(simple.value.value, 'date');

    const coded = expectAndGetElement(ns, 1, 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectMinMax(coded.value, 1, 1);
    expectCodeValue(coded.value.value, 'http://standardhealthrecord.org/test/vs/Coded');
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
    expectMinMax(one.value, 1, 1);
    expectValue(one.value.value, 'shr.test.two', 'Two');

    const ns2 = expectAndGetNamespace(namespaces, 1, 'shr.test.two');
    expect(ns2.definitions).to.have.length(1);
    const two = expectAndGetEntry(ns2, 0, 'Two');
    expect(two.concepts).to.have.length(1);
    expectConcept(two.concepts[0], 'http://zoo.org', 'bear');
    expect(two.description).to.equal('It is an entry that uses other namespaces too');
    expectMinMax(two.value, 1, 1);
    expectPrimitiveValue(two.value.value, 'string');

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
    expectMinMax(simple.value, 1, 1);
    expectPrimitiveValue(simple.value.value, 'string');
  });

  it('should return errors when there are invalid element references', () => {
    const {namespaces, errors} = importFixture('InvalidElementReference');
    expect(errors).has.length(1);
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid element reference');
    expectMinMax(simple.value, 1, 1);
    expectValue(simple.value.value, 'shr.test', 'Complex'); // Defaults to current namespace
  });

  it('should return errors when there are invalid fully qualified element references', () => {
    const {namespaces, errors} = importFixture('InvalidFQElementReference');
    expect(errors).has.length(1);
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid fully qualified element reference');
    expectMinMax(simple.value, 1, 1);
    expectValue(simple.value.value, 'other.ns', 'Complex'); // Defaults to current namespace
  });

  it('should return errors when there are ambiguous element references', () => {
    const {namespaces, errors} = importFixtureFolder('ambiguousResolution');
    expect(errors).has.length(1);
    const ns1 = expectAndGetNamespace(namespaces, 0, 'shr.test.one');
    expect(ns1.definitions).to.have.length(1);
    const amb = expectAndGetEntry(ns1, 0, 'Ambiguous');
    expect(amb.concepts).to.be.empty;
    expect(amb.description).to.equal('It is an entry that uses an ambiguous reference');
    expectMinMax(amb.value, 1, 1);
    expectValue(amb.value.value, 'shr.test.two', 'Foo'); // Defaults to first encountered namespace
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
    expectMinMax(conflicting.value, 1, 1);
    expectPrimitiveValue(conflicting.value.value, 'string');
  });
});

function expectAndGetNamespace(results, namespaceIndex, expectedNamespace) {
  const ns = results[namespaceIndex];
  expect(ns).to.be.instanceof(Namespace);
  expect(ns.namespace).to.equal(expectedNamespace);
  return ns;
}

function expectAndGetElement(namespace, defIndex, expectedName) {
  return expectAndGetDataElement(namespace, defIndex, expectedName, false);
}

function expectAndGetEntry(namespace, defIndex, expectedName) {
  return expectAndGetDataElement(namespace, defIndex, expectedName, true);
}

function expectAndGetDataElement(namespace, defIndex, expectedName, isEntry) {
  const def = namespace.definitions[defIndex];
  expect(def).to.be.instanceof(DataElement);
  expect(def.isEntry).to.equal(isEntry);
  expect(def.identifier.namespace).to.equal(namespace.namespace);
  expect(def.identifier.name).to.equal(expectedName);
  return def;
}

function expectAndGetSingleElement(results, expectedNamespace, expectedName) {
  return expectAndGetSingleDataElement(results, expectedNamespace, expectedName, false);
}

function expectAndGetSingleEntry(results, expectedNamespace, expectedName) {
  return expectAndGetSingleDataElement(results, expectedNamespace, expectedName, true);
}

function expectAndGetSingleDataElement(results, expectedNamespace, expectedName, isEntry) {
  expect(results).to.have.length(1);
  const ns = expectAndGetNamespace(results, 0, expectedNamespace);
  expect(ns.definitions).to.have.length(1);
  return expectAndGetDataElement(ns, 0, expectedName, isEntry);
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

function expectCodeValue(value, expectedUrl, expectedLabel) {
  expectCodedValue(value, expectedUrl, expectedLabel);
  expect(value.identifier).to.be.instanceof(PrimitiveIdentifier);
  expect(value.identifier.namespace).to.equal('primitive');
  expect(value.identifier.name).to.equal('code');
}

function expectCodingValue(value, expectedUrl, expectedLabel) {
  expectCodedValue(value, expectedUrl, expectedLabel);
  expect(value.identifier).to.be.instanceof(Identifier);
  expect(value.identifier.namespace).to.equal('shr.core');
  expect(value.identifier.name).to.equal('Coding');
}

function expectCodedValue(value, expectedUrl, expectedLabel) {
  if (typeof expectedUrl == 'undefined') {
    expect(value).to.be.instanceof(Value);
    expect(value.valueset).to.be.undefined;
  } else {
    expect(value).to.be.instanceof(CodeValue);
    expect(value.valueset).to.equal(expectedUrl);
  }
}

function expectRefValue(value, expectedNamespace, expectedName) {
  expect(value).to.be.instanceof(RefValue);
  expect(value.identifier.namespace).to.equal(expectedNamespace);
  expect(value.identifier.name).to.equal(expectedName);
}

function expectChoiceValue(value, size) {
  expect(value).to.be.instanceof(ChoiceValue);
  expect(value.options).to.have.length(size);
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

function expectChoiceOption(choice, optionIndex, expectedNamespace, expectedName, expectedMin=1, expectedMax=1) {
  let option = choice.options[optionIndex];
  expectMinMax(option, expectedMin, expectedMax);
  expectValue(option.value, expectedNamespace, expectedName);
}

function expectSupportingElement(element, supportingIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  const sptEl = element.elements[supportingIndex];
  expectMinMax(sptEl, expectedMin, expectedMax);
  expectValue(sptEl.value, expectedNamespace, expectedName);
}

function expectConcept(concept, system, code, display) {
  expect(concept.system).equals(system);
  expect(concept.code).equals(code);
  expect(concept.display).equals(display);
}

function importFixture(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}.txt`);
}

function importFixtureFolder(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}`);
}
