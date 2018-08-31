const {expect} = require('chai');
const {expand, setLogger} = require('../index');
const models = require('shr-models');
const err = require('shr-test-helpers/errors');

let _specs, _result;

describe('#expandMap()', () => {
  before(function() {
    // Set the logger -- this is needed for detecting and checking errors
    setLogger(err.logger('warn'));
  });

  beforeEach(function() {
    err.clear();
    _specs = new models.Specifications();
    // The SHR test namespace used by most tests
    _specs.namespaces.add(new models.Namespace('shr.test'));
    // A core namespace and Coding data element needed by some tests
    _specs.namespaces.add(new models.Namespace('shr.core'));
    _specs.dataElements.add(new models.DataElement(id('shr.core', 'Coding'), false));
    // A degenerate shr.base.Entry is needed to avoid warnings, which are considered illegal in this test.
    _specs.namespaces.add(new models.Namespace('shr.base'));
    _specs.dataElements.add(new models.DataElement(id('shr.base', 'Entry'), false)
      .withField(new models.IdentifiableValue(id('shr.base', 'EntryId')).withMinMax(1,1)));
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
    expect(err.hasErrors()).to.be.false;

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

    expect(err.hasErrors()).to.be.false;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    const expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.c', 'C')], 'http://test.org/c').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([pid('string')], 'str').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d').withLastModifiedBy(id('shr.test', 'A')));

    expect(eMa).to.eql(expected);
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

    expect(err.hasErrors()).to.be.false;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    const expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test.z', 'Z')], 'z').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B'), id('shr.test.c', 'C'), id('shr.test.e', 'E')], 'b.c.e').withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);
  });

  it('should support mapping _Concept, _Entry, and _Value', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([id('', '_Concept')], 'c')
      .withFieldMappingRule([id('', '_Entry'), id('shr.base', 'EntryId')], 'e')
      .withFieldMappingRule([id('', '_Value')], 'v');
    add(a, ma);

    doExpand();

    expectNoErrors();
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    const expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('', '_Concept')], 'c').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([id('', '_Entry'), id('shr.base', 'EntryId')], 'e').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([pid('string')], 'v').withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);
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

    expect(err.hasErrors()).to.be.false;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    const expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.CardinalityMappingRule('z', new models.Cardinality(1, 2)).withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);
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

    expect(err.hasErrors()).to.be.false;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    let expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);

    const eMa2 = findExpanded('TEST', 'shr.test', 'A2');
    expected = new models.ElementMapping(id('shr.test', 'A2'), 'TEST', 'a')
      .withInheritance(models.OVERRIDDEN)
      .withInheritedFrom(id('shr.test', 'A'));
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d').withLastModifiedBy(id('shr.test', 'A2')));
    expected.addRule(new models.CardinalityMappingRule('z', new models.Cardinality(1, 2)).withLastModifiedBy(id('shr.test', 'A2')));
    expect(eMa2).to.eql(expected);

    const eMa3 = findExpanded('TEST', 'shr.test', 'A3');
    expected = new models.ElementMapping(id('shr.test', 'A3'), 'TEST', 'a')
      .withInheritance(models.OVERRIDDEN)
      .withInheritedFrom(id('shr.test', 'A2'));
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d').withLastModifiedBy(id('shr.test', 'A2')));
    expected.addRule(new models.CardinalityMappingRule('z', new models.Cardinality(1, 2)).withLastModifiedBy(id('shr.test', 'A2')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.e', 'E')], 'e').withLastModifiedBy(id('shr.test', 'A3')));
    expect(eMa3).to.eql(expected);
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

    expect(err.hasErrors()).to.be.false;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    let expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);

    const eMa2 = findExpanded('TEST', 'shr.test', 'A2');
    expected = new models.ElementMapping(id('shr.test', 'A2'), 'TEST', 'a')
      .withInheritance(models.OVERRIDDEN)
      .withInheritedFrom(id('shr.test', 'A'));
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d').withLastModifiedBy(id('shr.test', 'A2')));
    expect(eMa2).to.eql(expected);

    const eMa3 = findExpanded('TEST', 'shr.test', 'A3');
    expected = new models.ElementMapping(id('shr.test', 'A3'), 'TEST', 'a')
      .withInheritance(models.OVERRIDDEN)
      .withInheritedFrom(id('shr.test', 'A2'));
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b+').withLastModifiedBy(id('shr.test', 'A3')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d').withLastModifiedBy(id('shr.test', 'A2')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.e', 'E')], 'e').withLastModifiedBy(id('shr.test', 'A3')));
    expect(eMa3).to.eql(expected);
  });

  it('should override mappings from based on elements when new mapping is on type constraint', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(1, 1));
    const a2 = new models.DataElement(id('shr.test', 'A2'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test', 'B'))
        .withConstraint(new models.TypeConstraint(id('shr.test', 'B2'))));
    const b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    const b2 = new models.DataElement(id('shr.test', 'B2'), true)
      .withBasedOn(id('shr.test', 'B'))
      .withField(new models.IdentifiableValue(id('shr.test', 'C')).withMinMax(1, 1));
    const ma = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a')
      .withFieldMappingRule([sid('B')], 'b');
    const ma2 = new models.ElementMapping(id('shr.test', 'A2'), 'TEST')
      .withFieldMappingRule([sid('B2')], 'b2');
    add(a, a2, b, b2, ma, ma2);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    let expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);

    const eMa2 = findExpanded('TEST', 'shr.test', 'A2');
    expected = new models.ElementMapping(id('shr.test', 'A2'), 'TEST', 'a')
      .withInheritance(models.OVERRIDDEN)
      .withInheritedFrom(id('shr.test', 'A'));
    expected.addRule(new models.FieldMappingRule([id('shr.test', 'B2')], 'b2').withLastModifiedBy(id('shr.test', 'A2')));
    expect(eMa2).to.eql(expected);
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

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].shrId).to.equal('shr.test.A');
    expect(err.errors()[0].msg).to.contain('Z');
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    const expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);
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

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].shrId).to.equal('shr.test.A');
    expect(err.errors()[0].msg).to.contain('X');
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    const expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test.z', 'Z')], 'z').withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);
  });

  it('should allow a based on class to have a different target than the mapping class, as long as that target is a super-type of the mapping class\'s target', () => {
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

    // make a dummy expander to confirm that target a2 is based on target a
    //const isTargetBasedOn = (target, baseTarget) => target === 'a2' && baseTarget === 'a';
    const isTargetBasedOn = (target, baseTarget) => true;
    doExpand({ TARGET: 'TEST', isTargetBasedOn });

    expect(err.errors()).to.have.length(0);
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    let expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);

    const eMa2 = findExpanded('TEST', 'shr.test', 'A2');
    expected = new models.ElementMapping(id('shr.test', 'A2'), 'TEST', 'a2')
      .withInheritance(models.OVERRIDDEN)
      .withInheritedFrom(id('shr.test', 'A'));
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expected.addRule(new models.FieldMappingRule([pid('string')], 'str').withLastModifiedBy(id('shr.test', 'A2')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d').withLastModifiedBy(id('shr.test', 'A2')));
    expect(eMa2).to.eql(expected);
  });

  it('should not inherit mappings when a based on class has a different target than the mapping class, and that target is not a super-type of the mapping class\'s target', () => {
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

    // make a dummy expander to deny any relationship between the targets
    const isTargetBasedOn = (target, baseTarget) => false;
    doExpand({ TARGET: 'TEST', isTargetBasedOn });

    expect(err.errors()).to.have.length(0);
    const eMa = findExpanded('TEST', 'shr.test', 'A');
    let expected = new models.ElementMapping(id('shr.test', 'A'), 'TEST', 'a');
    expected.addRule(new models.FieldMappingRule([id('shr.test.b', 'B')], 'b').withLastModifiedBy(id('shr.test', 'A')));
    expect(eMa).to.eql(expected);

    const eMa2 = findExpanded('TEST', 'shr.test', 'A2');
    expected = new models.ElementMapping(id('shr.test', 'A2'), 'TEST', 'a2');
    expected.addRule(new models.FieldMappingRule([pid('string')], 'str').withLastModifiedBy(id('shr.test', 'A2')));
    expected.addRule(new models.FieldMappingRule([id('shr.test.d', 'D')], 'http://test.org/d').withLastModifiedBy(id('shr.test', 'A2')));
    expect(eMa2).to.eql(expected);
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
function doExpand(...exporters) {
  _result = expand(_specs, ...exporters);
}

function findExpanded(targetSpec, namespace, name) {
  return _result.maps.find(targetSpec, namespace, name);
}

function expectNoErrors() {
  const message = `Expand Errors: ${err.errors().map(e => e.msg).join('; ')}`;
  expect(err.hasErrors(), message).to.be.false;
}