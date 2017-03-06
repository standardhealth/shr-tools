const {expect} = require('chai');
const {importFromFilePath} = require('../index');
const mdls = require('shr-models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple mapping', () => {
    const {specifications, errors} = importFixture('SimpleMapping');
    expect(errors).is.empty;
    expectVersions(specifications, new mdls.Version(4));
    expectTargets(specifications, 'TEST');
    const s = getAndExpect(specifications, 'shr.test', 'A', 'TEST', 'B');
    expect(s.rules).to.eql([
      new mdls.FieldMappingRule([sid('X')], 'testX'),
      new mdls.FieldMappingRule([sid('Y')], 'http://test.org/y'),
      new mdls.CardinalityMappingRule('z', new mdls.Cardinality(0, 0))
    ]);
  });

  it('should correctly import a mapping with deep paths', () => {
    const {specifications, errors} = importFixture('DeepPathMapping');
    expect(errors).is.empty;
    expectVersions(specifications, new mdls.Version(4));
    expectTargets(specifications, 'TEST');
    const s = getAndExpect(specifications, 'shr.test', 'A', 'TEST', 'B');
    expect(s.rules).to.eql([
      new mdls.FieldMappingRule([sid('C'), sid('D'), sid('E')], 'c.d.e'),
      new mdls.FieldMappingRule([sid('F'), sid('G'), sid('H')], 'http://test.org/fgh'),
      new mdls.CardinalityMappingRule('i.j.k', new mdls.Cardinality(1, 2))
    ]);
  });

  it('should correctly import a mapping with paths and choices', () => {
    const {specifications, errors} = importFixture('ChoicePathMapping');
    expect(errors).is.empty;
    expectVersions(specifications, new mdls.Version(4));
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
  return importFromFilePath(`${__dirname}/fixtures/map/${name}_map.txt`);
}
/*
function importFixtureFolder(name) {
  return importFromFilePath(`${__dirname}/fixtures/map/${name}`);
}
*/
