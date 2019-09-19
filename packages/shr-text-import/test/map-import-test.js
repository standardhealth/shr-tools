const {expect} = require('chai');
const {importFromFilePath, setLogger} = require('../index');
const mdls = require('shr-models');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

describe('#importMapping', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Map1: should correctly import a simple mapping', () => {
    const specifications =  importFixture('SimpleMapping');
    expectVersions(specifications, new mdls.Version(4,1));
    expectTargets(specifications, 'TEST');
    const s = getAndExpect(specifications, 'shr.test', 'A', 'TEST', 'B');
    expect(s.rules).to.eql([
      new mdls.FieldMappingRule([sid('X')], 'testX'),
      new mdls.FieldMappingRule([sid('Y')], 'http://test.org/y'),
      new mdls.CardinalityMappingRule('z', new mdls.Cardinality(0, 0))
    ]);
  });

  it('Map2: should correctly import a mapping with deep paths', () => {
    const specifications =  importFixture('DeepPathMapping');
    expectVersions(specifications, new mdls.Version(4,1));
    expectTargets(specifications, 'TEST');
    const s = getAndExpect(specifications, 'shr.test', 'A', 'TEST', 'B');
    expect(s.rules).to.eql([
      new mdls.FieldMappingRule([sid('C'), sid('D'), sid('E')], 'c.d.e'),
      new mdls.FieldMappingRule([sid('F'), sid('G'), sid('H')], 'http://test.org/fgh'),
      new mdls.CardinalityMappingRule('i.j.k', new mdls.Cardinality(1, 2))
    ]);
  });

  it('Map3: should correctly import a mapping with special words', () => {
    const specifications =  importFixture('SpecialWordMapping');
    expectVersions(specifications, new mdls.Version(5,1));
    expectTargets(specifications, 'TEST');
    let s = getAndExpect(specifications, 'shr.test', 'A', 'TEST', 'B');
    expect(s.rules).to.eql([
      new mdls.FieldMappingRule([id('', '_Concept')], 'testW'),
      new mdls.FieldMappingRule([id('', '_Value')], 'testY'),
      new mdls.FieldMappingRule([sid('C'), id('', '_Value')], 'testZ')
    ]);
    s = getAndExpect(specifications, 'shr.test', 'A2', 'TEST', 'B2');
    expect(s.rules).to.eql([
      new mdls.FieldMappingRule([id('', '_Concept')], 'testW'),
      new mdls.FieldMappingRule([id('', '_Value')], 'testY'),
      new mdls.FieldMappingRule([sid('C'), id('', '_Value')], 'testZ')
    ]);
  });

  it('Map4: should correctly import a mapping with paths and choices', () => {
    const specifications =  importFixture('ChoicePathMapping');
    expectVersions(specifications, new mdls.Version(4,1));
    expectTargets(specifications, 'TEST');
    const s = getAndExpect(specifications, 'shr.test', 'A', 'TEST', 'B');
    expect(s.rules).to.eql([
      new mdls.FieldMappingRule([sid('C'), sid('D'), sid('F')], 'c.d.f'),
      new mdls.FieldMappingRule([sid('G'), sid('H'), sid('J')], 'http://test.org/ghj'),
      new mdls.CardinalityMappingRule('k.l.m', new mdls.Cardinality(1))
    ]);
  });
});

// Shorthand Identifier constructor for more concise code
function id(namespace, name) {
  return new mdls.Identifier(namespace, name);
}

// Shorthand "short" Identifier constructor for more concise code
function sid(name) {
  return new mdls.Identifier(null, name);
}

function expectVersions(specs, ...versions) {
  expect(specs.maps.grammarVersions).to.eql(versions);
}

function expectTargets(specs, ...targets) {
  expect(specs.maps.targets).to.eql(targets);
}

function getAndExpect(specs, namespace, name, targetSpec, targetItem) {
  const m = specs.maps.find(targetSpec, namespace, name);
  expect(m).to.be.instanceof(mdls.ElementMapping);
  expect(m.identifier).to.eql(id(namespace, name));
  expect(m.targetSpec).to.equal(targetSpec);
  expect(m.targetItem).to.equal(targetItem);
  return m;
}

function importFixture(name) {
  const specifications = importFromFilePath(`${__dirname}/fixtures/map/${name}_map.txt`);
  expect(err.hasErrors()).to.be.false;
  return specifications;
}
