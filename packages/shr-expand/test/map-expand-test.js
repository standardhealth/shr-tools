const {expect} = require('chai');
const {expand} = require('../index');
const models = require('shr-models');

let _specs, _result;

describe('#expandMap()', () => {
  beforeEach(function() {
    _specs = new models.Specifications();
    // The SHR test namespace used by most tests
    _specs.namespaces.add(new models.Namespace('shr.core'));
    // A core namespace and Coding data element needed by some tests
    _specs.namespaces.add(new models.Namespace('shr.core'));
    _specs.dataElements.add(new models.DataElement(id('shr.core', 'Coding'), false));
  });

  afterEach(function() {
    _specs = null;
    _result = null;
  });

  it('should not modify the passed in mapping, but instead return a new one', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.b', 'B')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.c', 'C')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('B')], 'b')
      .withFieldMappingRule([sid('C')], 'http://test.org/c')
      .withFieldMappingRule([sid('string')], 'str');
    add(a, ma);

    // Get clone of the original
    const maClone = ma.clone();

    // Do the expansion
    doExpand();

    // No errors
    expect(errors()).to.be.empty;

    // Original should be the same as it was
    expect(ma).to.eql(maClone);

    // Expanded ma should be a different value (due to expansion)
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    expect(eMa).not.to.eql(maClone);
    expect(eMa).not.to.eql(maClone);
    expect(eMa).not.to.equal(maClone);
  });

  it('should resolve path identifiers in a simple mapping', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.b', 'B')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.c', 'C')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.d', 'D')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('B')], 'b')
      .withFieldMappingRule([sid('C')], 'http://test.org/c')
      .withFieldMappingRule([sid('string')], 'str')
      .withFieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d');
    add(a, ma);

    doExpand();

    expect(errors()).to.be.empty;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    expect(eMa).to.eql(
      new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
        .withFieldMappingRule([id('shr.test.c', 'C')], 'http://test.org/c')
        .withFieldMappingRule([pid('string')], 'str')
        .withFieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d')
    );
  });

  it('should resolve deep path identifiers in a mapping', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test.b', 'B')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.z', 'Z')).withMinMax(1, 1));
    const b = new models.DataElement(id('shr.test.b', 'B'), true)
      .withValue(new models.IdentifiableValue(id('shr.test.c', 'C')).withMinMax(1, 1));
    const c = new models.DataElement(id('shr.test.c', 'C'), true)
      .withField(new models.IdentifiableValue(id('shr.test.d', 'D')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.e', 'E')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('Z')], 'z')
      .withFieldMappingRule([sid('B'), sid('C'), sid('E')], 'b.c.e');
    add(a, b, c, ma);

    doExpand();

    expect(errors()).to.be.empty;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    expect(eMa).to.eql(
      new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.z', 'Z')], 'z')
        .withFieldMappingRule([id('shr.test.b', 'B'), id('shr.test.c', 'C'), id('shr.test.e', 'E')], 'b.c.e')
    );
  });

  it('should support cardinality rules', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.b', 'B')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.c', 'C')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.d', 'D')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('B')], 'b')
      .withCardinalityMappingRule('z', new models.Cardinality(1, 2));
    add(a, ma);

    doExpand();

    expect(errors()).to.be.empty;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    expect(eMa).to.eql(
      new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
        .withCardinalityMappingRule('z', new models.Cardinality(1, 2))
    );
  });


  it('should inherit mappings from based on elements', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.b', 'B')).withMinMax(1, 1));
    const a2 = new models.DataElement(id('shr.test', 'A2'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test.c', 'C')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.d', 'D')).withMinMax(1, 1));
    const a3 = new models.DataElement(id('shr.test', 'A3'), true)
      .withBasedOn(id('shr.test', 'A2'))
      .withField(new models.IdentifiableValue(id('shr.test.e', 'E')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.f', 'F')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('B')], 'b');
    const ma2 = new models.ElementMapping(id('shr.test', 'A2'), 'TEST')
      .withFieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d')
      .withCardinalityMappingRule('z', new models.Cardinality(1, 2));
    const ma3 = new models.ElementMapping(id('shr.test', 'A3'), 'TEST')
      .withFieldMappingRule([sid('E')], 'e');
    add(a, a2, a3, ma, ma2, ma3);

    doExpand();

    expect(errors()).to.be.empty;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    expect(eMa).to.eql(
      new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
    );
    const eMa2 = findExpanded('TEST', 'shr.test', 'A2');
    expect(eMa2).to.eql(
      new models.ElementMapping(id('shr.test', 'A2'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
        .withFieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d')
        .withCardinalityMappingRule('z', new models.Cardinality(1, 2))
    );
    const eMa3 = findExpanded('TEST', 'shr.test', 'A3');
    expect(eMa3).to.eql(
      new models.ElementMapping(id('shr.test', 'A3'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
        .withFieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d')
        .withCardinalityMappingRule('z', new models.Cardinality(1, 2))
        .withFieldMappingRule([id('shr.test.e', 'E')], 'e')
    );
  });

  it('should override mappings from based on elements', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.b', 'B')).withMinMax(1, 1));
    const a2 = new models.DataElement(id('shr.test', 'A2'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test.c', 'C')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.d', 'D')).withMinMax(1, 1));
    const a3 = new models.DataElement(id('shr.test', 'A3'), true)
      .withBasedOn(id('shr.test', 'A2'))
      .withField(new models.IdentifiableValue(id('shr.test.e', 'E')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.f', 'F')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('B')], 'b');
    const ma2 = new models.ElementMapping(id('shr.test', 'A2'), 'TEST')
      .withFieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d');
    const ma3 = new models.ElementMapping(id('shr.test', 'A3'), 'TEST')
      .withFieldMappingRule([sid('B')], 'b+')
      .withFieldMappingRule([sid('E')], 'e');
    add(a, a2, a3, ma, ma2, ma3);

    doExpand();

    expect(errors()).to.be.empty;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    expect(eMa).to.eql(
      new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
    );
    const eMa2 = findExpanded('TEST', 'shr.test', 'A2');
    expect(eMa2).to.eql(
      new models.ElementMapping(id('shr.test', 'A2'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
        .withFieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d')
    );
    const eMa3 = findExpanded('TEST', 'shr.test', 'A3');
    expect(eMa3).to.eql(
      new models.ElementMapping(id('shr.test', 'A3'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b+')
        .withFieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d')
        .withFieldMappingRule([id('shr.test.e', 'E')], 'e')
    );
  });

  it('should report an error when there is an invalid path element and remove that rule', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.b', 'B')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.c', 'C')).withMinMax(1, 1));
    add(a);
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('B')], 'b')
      .withFieldMappingRule([sid('Z')], 'http://test.org/z');
    add(ma);

    doExpand();

    expect(errors()).to.have.length(1);
    expect(errors()[0].message).to.contain('shr.test.A').and.to.contain('Z');
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    expect(eMa).to.eql(
      new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
    );
  });

  it('should report an error when there is an invalid deep path element and remove that rule', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test.b', 'B')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.z', 'Z')).withMinMax(1, 1));
    const b = new models.DataElement(id('shr.test.b', 'B'), true)
      .withValue(new models.IdentifiableValue(id('shr.test.c', 'C')).withMinMax(1, 1));
    const c = new models.DataElement(id('shr.test.c', 'C'), true)
      .withField(new models.IdentifiableValue(id('shr.test.d', 'D')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.e', 'E')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('Z')], 'z')
      .withFieldMappingRule([sid('B'), sid('X'), sid('E')], 'b.x.e');
    add(a, b, c, ma);

    doExpand();

    expect(errors()).to.have.length(1);
    expect(errors()[0].message).to.contain('shr.test.A').and.to.contain('X');
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    expect(eMa).to.eql(
      new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.z', 'Z')], 'z')
    );
  });

  it('should report a warning when a based on class has a different target than the mapping class, and should take on its mappings', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.b', 'B')).withMinMax(1, 1));
    const a2 = new models.DataElement(id('shr.test', 'A2'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test.c', 'C')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test.d', 'D')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('B')], 'b');
    const ma2 = new models.ElementMapping(id('shr.test', 'A2'), 'TEST', 'a2')
      .withFieldMappingRule([sid('string')], 'str')
      .withFieldMappingRule([sid('D')], 'http://test.org/d');
    add(a, a2, ma, ma2);

    doExpand();

    expect(errors()).to.have.length(1);
    expect(errors()[0].message).to.contain('shr.test.A2').and.to.contain('a2').and.to.contain('shr.test.A').and.to.contain('a');
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    expect(eMa).to.eql(
      new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
    );
    const eMa2 = findExpanded('TEST', 'shr.test', 'A2');
    expect(eMa2).to.eql(
      new models.ElementMapping(id('shr.test', 'A2'), 'TEST', 'a2')
        .withFieldMappingRule([id('shr.test.b', 'B')], 'b')
        .withFieldMappingRule([pid('string')], 'str')
        .withFieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d')
    );
  });
});

// Shorthand Identifier constructor for more concise code
function id(namespace, name) {
  return new models.Identifier(namespace, name);
}

// Shorthand "short" Identifier constructor for more concise code
function sid(name) {
  return new models.Identifier(null, name);
}

// Shorthand PrimitiveIdentifier constructor for more concise code
function pid(name) {
  return new models.PrimitiveIdentifier(name);
}

// Adds data elements or mappings to the specs, for use in the test case
function add(...things) {
  for (const thing of things) {
    if (thing instanceof models.DataElement) {
      _specs.dataElements.add(thing);
    } else if (thing instanceof models.ElementMapping) {
      _specs.maps.add(thing);
    }
  }
}

// Expands the current specs and stores results in _result
function doExpand() {
  _result = expand(_specs);
}

function findExpanded(targetSpec, namespace, name) {
  return _result.specifications.maps.find(targetSpec, namespace, name);
}

function errors() {
  return _result.errors;
}