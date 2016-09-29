const {expect} = require('chai');
const {importFromFilePath} = require('../../lib/text/import');
const {Namespace, DataElement, Entry} = require('../../lib/models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple entry', () => {
    let results = importFixture('simpleEntry');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'Simple', Entry);
    expect(simple.description).to.equal('It is a simple entry');
    expectSingleAnswer(simple, 'primitive', 'date');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;
  });

  it('should correctly import a simple data element', () => {
    let results = importFixture('simpleDataElement');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'simple');
    expect(simple.description).to.equal('It is a simple data element');
    expectSingleAnswer(simple, 'primitive', 'string');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;
  });

  it('should correctly import a coded data element', () => {
    let results = importFixture('codedDataElement');
    let coded = expectAndGetSingleElement(results, 'shr.test', 'coded');
    expect(coded.description).to.equal('It is a coded data element');
    expectSingleAnswer(coded, 'primitive', 'code');
    expect(coded.valueset).to.equal('http://standardhealthrecord.org/test/vs/coded');
    expect(coded.components).to.be.empty;
  });

  it('should correctly import a choice data element', () => {
    let results = importFixture('choiceDataElement');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'choice');
    expect(simple.description).to.equal('It is a data element with a choice');
    expect(simple.answers).to.have.length(3);
    expectAnswer(simple, 0, 'primitive', 'date');
    expectAnswer(simple, 1, 'other.ns', 'period');
    expectAnswer(simple, 2, 'shr.test', 'simple');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;
  });

  it('should correctly import a composition', () => {
    let results = importFixture('compositionDataElement');
    let simple = expectAndGetSingleElement(results, 'shr.test', 'composition');
    expect(simple.description).to.equal('It is a composition data element');
    expect(simple.answers).to.be.empty;
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.have.length(4);
    expectComponent(simple, 0, 'shr.test', 'simple', 0, 1);
    expectComponent(simple, 1, 'shr.test', 'coded', 0);
    expectComponent(simple, 2, 'shr.test', 'Simple', 1);
    expectComponent(simple, 3, 'other.ns', 'thing', 1, 1);
  });

  it('should correctly import multiple elements in a single namespace', () => {
    let results = importFixture('multipleElements');
    expect(results).to.have.length(1);
    let ns = expectAndGetNamespace(results, 0, 'shr.test');

    let simple = expectAndGetElement(ns, 0, 'Simple', Entry);
    expect(simple.description).to.equal('It is a simple entry');
    expectSingleAnswer(simple, 'primitive', 'date');
    expect(simple.valueset).to.be.undefined;
    expect(simple.components).to.be.empty;

    let coded = expectAndGetElement(ns, 1, 'coded');
    expect(coded.description).to.equal('It is a coded data element');
    expectSingleAnswer(coded, 'primitive', 'code');
    expect(coded.valueset).to.equal('http://standardhealthrecord.org/test/vs/coded');
    expect(coded.components).to.be.empty;
  });
});

function expectAndGetNamespace(results, namespaceIndex, expectedNamespace) {
  let ns = results[namespaceIndex];
  expect(ns).to.be.instanceof(Namespace);
  expect(ns.namespace).to.equal(expectedNamespace);

  return ns;
}

function expectAndGetElement(namespace, elementIndex, expectedName, expectedClass=DataElement) {
  let element = namespace.elements[elementIndex];
  expect(element).to.be.instanceof(expectedClass);
  expect(element.identifier.namespace).to.equal(namespace.namespace);
  expect(element.identifier.name).to.equal(expectedName);

  return element;
}

function expectAndGetSingleElement(results, expectedNamespace, expectedName, expectedClass=DataElement) {
  expect(results).to.have.length(1);

  let ns = expectAndGetNamespace(results, 0, expectedNamespace);
  return expectAndGetElement(ns, 0, expectedName, expectedClass);
}

function expectAnswer(element, answerIndex, expectedNamespace, expectedName) {
  expect(element.answers[answerIndex].namespace).to.equal(expectedNamespace);
  expect(element.answers[answerIndex].name).to.equal(expectedName);
}

function expectSingleAnswer(element, expectedNamespace, expectedName) {
  expect(element.answers).to.have.length(1);
  expectAnswer(element, 0, expectedNamespace, expectedName);
}

function expectComponent(element, componentIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  expect(element.components[componentIndex].namespace).to.equal(expectedNamespace);
  expect(element.components[componentIndex].name).to.equal(expectedName);
  expect(element.components[componentIndex].min).to.equal(expectedMin);
  if (typeof expectedMax != 'undefined') {
    expect(element.components[componentIndex].max).to.equal(expectedMax);
    expect(element.components[componentIndex].isMaxUnbounded()).to.be.false;
  } else {
    expect(element.components[componentIndex].max).to.be.undefined;
    expect(element.components[componentIndex].isMaxUnbounded()).to.be.true;
  }
}

function importFixture(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}.txt`);
}
