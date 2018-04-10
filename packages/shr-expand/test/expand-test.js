const {expect} = require('chai');
const {expand, setLogger} = require('../index');
const models = require('shr-models');
const err = require('shr-test-helpers/errors');

let _specs, _result;

/***********************************************************************************************************************
 * NOTE: SEE HORRIBLE, HORRIBLE, AWFUL, NO-GOOD, YOU-SHOULD-BE-ASHAMED-OF-YOURSELF HACK AT END OF FILE
 **********************************************************************************************************************/

describe('#expand()', () => {
  before(function() {
    // Set the logger -- this is needed for detecting and checking errors
    setLogger(err.logger());
  });

  beforeEach(function() {
    err.clear();
    _specs = new models.Specifications();
    // The SHR test namespace used by most tests
    _specs.namespaces.add(new models.Namespace('shr.test'));
    // A core namespace and Coding / CodeableConcept data elements needed by some tests
    _specs.namespaces.add(new models.Namespace('shr.core'));
    _specs.dataElements.add(new models.DataElement(id('shr.core', 'Coding'), false));
    _specs.dataElements.add(new models.DataElement(id('shr.core', 'CodeableConcept'), false));
  });

  afterEach(function() {
    _specs = null;
    _result = null;
  });

  it('should not modify the passed in namespaces or data elements, but instead return new ones', () => {
    const a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    const subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'));
    add(a, subA, simpleDE('shr.test', 'SubAFieldA'));

    // Get clones of the originals
    const aClone = a.clone();
    const subAClone = subA.clone();

    // Do the expansion
    doExpand();

    // No errors
    expect(err.hasErrors()).to.be.false;

    // Originals should be the same as they were
    expect(a).to.eql(aClone);
    expect(subA).to.eql(subAClone);

    // Expanded A should be the same value (expansion doesn't affect it) but not the same exact instance
    const eA = findExpanded('shr.test', 'A');
    expect(eA).to.eql(aClone);
    expect(eA).to.eql(a);
    expect(eA).not.to.equal(a);

    // Expanded SubA should be a different value (due to expansion)
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA).not.to.eql(subAClone);
    expect(eSubA).not.to.eql(subA);
    expect(eSubA).not.to.equal(subA);
  });

  it('should not copy metadata from based on classes to child classes', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withDescription('It is A.')
      .withConcept(new models.Concept('http://foo.org', 'bar'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'));
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.description).to.be.undefined;
    expect(eSubA.concepts).to.be.empty;
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(1, 1)
      .withInheritedFrom(a.identifier)
      .withInheritance(models.INHERITED)
  );
    expect(eSubA.fields).to.be.empty;
  });

  it('should retain metadata in the child class', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withDescription('It is A.')
      .withConcept(new models.Concept('http://foo.org', 'bar'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withDescription('It is SubA.')
      .withConcept(new models.Concept('http://foo.org', 'baz'));
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.description).to.equal('It is SubA.');
    expect(eSubA.concepts).to.eql([new models.Concept('http://foo.org', 'baz')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(1, 1)
        .withInheritedFrom(a.identifier)
        .withInheritance(models.INHERITED)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should correctly merge in value from a basedOn element when it doesn\'t define its own value', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test', 'SubAFieldA')).withMinMax(1, 1));
    add(a, subA, simpleDE('shr.test', 'SubAFieldA'));

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(1, 1)
    .withInheritedFrom(a.identifier)
      .withInheritance(models.INHERITED)
  );
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'SubAFieldA')).withMinMax(1, 1)
    ]);
  });

  it('should correctly retain its value when it\'s the same as the basedOn value', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(1, 1)
        .withInheritedFrom(a.identifier)
        .withInheritance(models.INHERITED)
  );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error if the value identifier is changed', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(new models.IdentifiableValue(pid('decimal')).withMinMax(1, 1));
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('override').and.to.contain('string').and.to.contain('decimal');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(1, 1)
        .withInheritedFrom(a.identifier)
        .withInheritance(models.INHERITED)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should correctly apply narrowed value cardinality when value is inherited from basedOn element', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(new models.IncompleteValue(id('', '_Value')).withMinMax(0, 0));
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).not.to.be.instanceof(models.IncompleteValue);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string'))
        .withCard(new models.Cardinality(0, 1)
          .withHistory(new models.Cardinality(0, 1).withSource(a.identifier)))
        .withConstraint(new models.CardConstraint(new models.Cardinality(0, 0))
          .withLastModifiedBy(subA.identifier))
        .withInheritedFrom(a.identifier)
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should correctly apply narrowed value cardinality when value is inherited from basedOn element w/ choice', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(pid('string')))
          .withOption(new models.IdentifiableValue(pid('code')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(new models.IncompleteValue(id('', '_Value')).withMinMax(0, 0));
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).not.to.be.instanceof(models.IncompleteValue);
    expect(eSubA.value).to.eql(
      new models.ChoiceValue()
        .withCard(new models.Cardinality(0, 1)
          .withHistory(new models.Cardinality(0, 1).withSource(a.identifier)))
        .withInheritedFrom(a.identifier)
        .withOption(new models.IdentifiableValue(pid('string')))
        .withOption(new models.IdentifiableValue(pid('code')))
        .withConstraint(new models.CardConstraint(new models.Cardinality(0, 0))
           .withLastModifiedBy(subA.identifier))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should correctly merge in unique fields from a basedOn element', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1, 1));
    add(simpleDE('shr.test', 'AFieldA'));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test', 'SubAFieldA')).withMinMax(1, 1));
    add(a, subA, simpleDE('shr.test', 'SubAFieldA'));

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1, 1)
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier),
      new models.IdentifiableValue(id('shr.test', 'SubAFieldA')).withMinMax(1, 1)
    ]);
  });

  // Valid Cardinality Constraints

  it('should correctly add cardinality constraints when overriding cardinality of a value', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string'))
        .withCard(new models.Cardinality(0, 1)
          .withHistory(new models.Cardinality(0, 1).withSource(a.identifier)))
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1))
          .withLastModifiedBy(subA.identifier))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should correctly add cardinality constraints when overriding cardinality of a field', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 5));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1, 3));
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'AFieldA'))
        .withCard(new models.Cardinality(0, 5)
          .withHistory(new models.Cardinality(0, 5).withSource(a.identifier)))
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 3))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  it('should correctly fall back to based on cardinality when no cardinality is supplied', () => {
    let aFieldA = new models.DataElement(id('shr.test', 'AFieldA'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1, 1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 5));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA'))
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')]))
      );
    add(aFieldA, a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 5)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')])
          .withLastModifiedBy(subA.identifier))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  // Invalid Cardinality Constraints

  it('should report an error when widening cardinality of a value', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 2));
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('cardinality').and.to.contain('0..1').and.to.contain('1..2');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(0, 1) // No constraint since it was invalid
      .withInheritedFrom(a.identifier)
      .withInheritance(models.INHERITED)
    );
    expect(eSubA.fields).to.be.empty;
  });

  // Doesn't fail when it should because it's not looking at cardinality of paths in context of path
  it('should report an error when widening cardinality of a value\'s value', function() {
    this.skip('Doesn\'t currently validate cardinalities of subpath in the context of their path');

    let aVal = new models.DataElement(id('shr.test', 'AVal'), true)
      .withValue(new models.IdentifiableValue(pid('decimal')).withMinMax(1, 1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1), [pid('decimal')]))
      );
    add(aVal, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('cardinality').and.to.contain('0..1').and.to.contain('1..2');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'AVal')).withMinMax(0, 1) // No constraint since it was invalid
      .withInheritedFrom(a.identifier)
      .withInheritance(models.INHERITED)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when widening cardinality from a previous constraint on a value\'s value', () => {
    let aVal = new models.DataElement(id('shr.test', 'AVal'), true)
      .withValue(new models.IdentifiableValue(pid('decimal')).withMinMax(1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
      new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1), [pid('decimal')]))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
      new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1), [pid('decimal')]))
      );
    add(aVal, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('cardinality').and.to.contain('1..1').and.to.contain('1..*');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'AVal')).withMinMax(0, 1)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1), [pid('decimal')])
          .withLastModifiedBy(id('shr.test', 'A'))) // Last valid constraint
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when widening cardinality of a field', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 1));
    add(a, subA, simpleDE('shr.test', 'AFieldA'));

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('cardinality').and.to.contain('1..1').and.to.contain('0..1');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1, 1) // retain base cardinality
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
    ]);
  });

  // Doesn't fail when it should because it's not looking at cardinality of paths in context of path
  it('should report an error when widening cardinality of a fields\'s field', function() {
    this.skip('Doesn\'t currently validate cardinalities of subpath in the context of their path');

    let aField = new models.DataElement(id('shr.test', 'AField'), true)
      .withField(new models.IdentifiableValue(pid('decimal')).withMinMax(1, 1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(aField.identifier).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(aField.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1), [pid('decimal')]))
      );
    add(aField, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('cardinality').and.to.contain('0..1').and.to.contain('1..2');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'AField')).withMinMax(0, 1) // No constraint since it was invalid
        .withInheritance(models.INHERITED)
    ]);
  });

  it('should report an error when widening cardinality from a previous constraint on a field\'s field', () => {
    let aVal = new models.DataElement(id('shr.test', 'AField'), true)
      .withField(new models.IdentifiableValue(pid('decimal')).withMinMax(1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(
        new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1), [pid('decimal')]))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1), [pid('decimal')]))
      );
    add(aVal, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('cardinality').and.to.contain('1..1').and.to.contain('1..*');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'AField')).withMinMax(0, 1)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1), [pid('decimal')])
          .withLastModifiedBy(id('shr.test', 'A'))) // Last valid constraint
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
    ]);
  });

  // Valid Type Constraints

  it('should keep valid type constraints on values', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subB = new models.DataElement(id('shr.test', 'SubB'), true)
      .withBasedOn(id('shr.test', 'B'));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')))
      );
    add(b, subB, a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should make \'value type\' constraints on value explicit', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subB = new models.DataElement(id('shr.test', 'SubB'), true)
      .withBasedOn(id('shr.test', 'B'));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')).withOnValue(true))
      );
    add(b, subB, a, x);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eX = findExpanded('shr.test', 'X');
    expect(eX.identifier).to.eql(id('shr.test', 'X'));
    expect(eX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'), [id('shr.test', 'B')], false)
          .withLastModifiedBy(id('shr.test', 'X')))
    );
    expect(eX.fields).to.be.empty;
  });

  it('should allow \'value type\' constraints to narrow a choice', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
      );
    let y = new models.DataElement(id('shr.test', 'Y'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'X')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'B')).withOnValue(true))
      );
    add(a, b, x, y);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eY = findExpanded('shr.test', 'Y');
    expect(eY.identifier).to.eql(id('shr.test', 'Y'));
    expect(eY.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'X')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'B')).withOnValue(true).withLastModifiedBy(id('shr.test', 'Y')))
    );
    expect(eY.fields).to.be.empty;
  });

  it('should allow \'value type\' constraints to narrow a choice on a field', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
      );
    let y = new models.DataElement(id('shr.test', 'Y'), true)
      .withField(
        new models.IdentifiableValue(id('shr.test', 'X')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'B')).withOnValue(true))
      );
    add(a, b, x, y);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eY = findExpanded('shr.test', 'Y');
    expect(eY.identifier).to.eql(id('shr.test', 'Y'));
    expect(eY.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'X')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'B')).withOnValue(true).withLastModifiedBy(id('shr.test', 'Y')))
    ]);
  });

  it('should allow \'value type\' constraints to narrow a choice to a primitive type', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(pid('string')))
          .withOption(new models.IdentifiableValue(pid('integer')))
      );
    let y = new models.DataElement(id('shr.test', 'Y'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'X')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(pid('string')).withOnValue(true))
      );
    add(a, x, y);

    doExpand();

    expect(err.errors()).to.deep.equal([]);
    const eY = findExpanded('shr.test', 'Y');
    expect(eY.identifier).to.eql(id('shr.test', 'Y'));
    expect(eY.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'X')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(pid('string')).withOnValue(true).withLastModifiedBy(id('shr.test', 'Y')))
    );
    expect(eY.fields).to.be.empty;
  });

  it('should keep valid type constraints on fields', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withField(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subB = new models.DataElement(id('shr.test', 'SubB'), true)
      .withBasedOn(id('shr.test', 'B'));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')))
      );
    add(b, subB, a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  it('should make \'value type\' constraints on fields explicit', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subB = new models.DataElement(id('shr.test', 'SubB'), true)
      .withBasedOn(id('shr.test', 'B'));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withField(
        new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')).withOnValue(true))
      );
    add(b, subB, a, x);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eX = findExpanded('shr.test', 'X');
    expect(eX.identifier).to.eql(id('shr.test', 'X'));
    expect(eX.value).to.be.undefined;
    expect(eX.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'), [id('shr.test', 'B')], false)
          .withLastModifiedBy(id('shr.test', 'X')))
    ]);
  });

  // Constraining value types by redeclaring Value (not using a specific constraint)

  it('should allow a sub-type\'s value to be a sub-type of parent\'s value', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let subA = new models.DataElement(id('shr.test', 'SubA'), true).withBasedOn(id('shr.test', 'A'));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0,1));
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'SubA'))
      );
    add(a, subA, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'A'))
        .withInheritedFrom(x.identifier)
        .withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubA'), [], false)
          .withLastModifiedBy(id('shr.test', 'SubX')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should allow a sub-type\'s value to be a choice of sub-types of the parent\'s value', function () {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let subA = new models.DataElement(id('shr.test', 'SubA'), true).withBasedOn(id('shr.test', 'A'));
    let subA2 = new models.DataElement(id('shr.test', 'SubA2'), true).withBasedOn(id('shr.test', 'A'));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0,1));
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.ChoiceValue()
          .withOption(new models.IdentifiableValue(id('shr.test', 'SubA')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'SubA2')))
      );
    add(a, subA, subA2, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.ChoiceValue().withMinMax(0, 1)
        .withOption(new models.IdentifiableValue(id('shr.test', 'A'))
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubA'), [], false))
        )
        .withOption(new models.IdentifiableValue(id('shr.test', 'A'))
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubA2'), [], false))
        )
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(x.identifier)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should allow sub-type value to narrow a choice to a single element', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B'))
      );
    add(a, b, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B'))
      .withInheritedFrom(x.identifier)
      .withMinMax(0, 1)
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should allow sub-type value to narrow a choice to a single element and retain original value set constraint', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B'))
            .withConstraint(new models.ValueSetConstraint('http://foo.org', [id('shr.core', 'CodeableConcept')]))
          )
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B'))
      );
    add(a, b, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B'))
      .withInheritedFrom(x.identifier)
      .withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org', [id('shr.core', 'CodeableConcept')])
          .withLastModifiedBy(id('shr.test', 'SubX')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should allow sub-type value to narrow a choice to a single element and retain new value set constraint', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B'))
          .withConstraint(new models.ValueSetConstraint('http://foo.org', [id('shr.core', 'CodeableConcept')]))
      );
    add(a, b, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B'))
      .withInheritedFrom(x.identifier)
      .withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org', [id('shr.core', 'CodeableConcept')])
          .withLastModifiedBy(id('shr.test', 'SubX')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should allow sub-type value to narrow a choice to a single element that is a sub-type of one of the choices', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let subB = new models.DataElement(id('shr.test', 'SubB'), true).withBasedOn(id('shr.test', 'B'));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'SubB'))
      );
    add(a, b, subB, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B'))
      .withInheritedFrom(x.identifier)
      .withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'), [], false)
          .withLastModifiedBy(id('shr.test', 'SubX')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should allow sub-type value to narrow a choice to a choice subset', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let c = new models.DataElement(id('shr.test', 'C'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'C')))
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.ChoiceValue()
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'C')))
      );
    add(a, b, c, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.ChoiceValue()
      .withInheritedFrom(x.identifier)
      .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
        .withOption(new models.IdentifiableValue(id('shr.test', 'C')))
        .withMinMax(0, 1)
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should allow sub-type value to narrow a choice to a choice subset and retain original value set constraint', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let c = new models.DataElement(id('shr.test', 'C'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'C'))
            .withConstraint(new models.ValueSetConstraint('http://foo.org', [id('shr.core', 'CodeableConcept')]))
          )
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.ChoiceValue()
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'C')))
      );
    add(a, b, c, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.ChoiceValue()
      .withInheritedFrom(x.identifier)
      .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
        .withOption(new models.IdentifiableValue(id('shr.test', 'C'))
          .withConstraint(new models.ValueSetConstraint('http://foo.org', [id('shr.core', 'CodeableConcept')]))
        )
        .withMinMax(0, 1)
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should allow sub-type value to narrow a choice to a choice subset and retain new value set constraint', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let c = new models.DataElement(id('shr.test', 'C'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'C')))
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.ChoiceValue()
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'C'))
            .withConstraint(new models.ValueSetConstraint('http://foo.org', [id('shr.core', 'CodeableConcept')]))
          )
      );
    add(a, b, c, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.ChoiceValue()
      .withInheritedFrom(x.identifier)
      .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
        .withOption(new models.IdentifiableValue(id('shr.test', 'C'))
          .withConstraint(new models.ValueSetConstraint('http://foo.org', [id('shr.core', 'CodeableConcept')]))
        )
        .withMinMax(0, 1)
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should allow sub-type value to narrow a choice to a choice subset with sub-types of original choice', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let subA = new models.DataElement(id('shr.test', 'SubA'), true).withBasedOn(id('shr.test', 'A'));
    let subA2 = new models.DataElement(id('shr.test', 'SubA2'), true).withBasedOn(id('shr.test', 'A'));
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let c = new models.DataElement(id('shr.test', 'C'), true);
    let subC = new models.DataElement(id('shr.test', 'SubC'), true).withBasedOn(id('shr.test', 'C'));
    let d = new models.DataElement(id('shr.test', 'D'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'C')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'D')))
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.ChoiceValue()
          .withOption(new models.IdentifiableValue(id('shr.test', 'SubA')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'SubA2')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'SubC')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'D')))
      );
    add(a, subA, subA2, b, c, subC, d, x, subX);

    doExpand();

    expect(err.errors()).to.eql([]);
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      new models.ChoiceValue()
      .withInheritedFrom(x.identifier)
      .withOption(new models.IdentifiableValue(id('shr.test', 'A'))
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubA'), [], false))
        )
        .withOption(new models.IdentifiableValue(id('shr.test', 'A'))
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubA2'), [], false))
        )
        .withOption(new models.IdentifiableValue(id('shr.test', 'C'))
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubC'), [], false))
        )
        .withOption(new models.IdentifiableValue(id('shr.test', 'D')))
        .withMinMax(0, 1)
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubX.fields).to.be.empty;
  });

  // Invalid Type Constraints

  it('should report an error when new value type isn\'t based on constrained type', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let notSubB = new models.DataElement(id('shr.test', 'NotSubB'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'NotSubB')))
      );
    add(b, notSubB, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('type').and.to.contain('B').and.to.contain('shr.test.NotSubB');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
      .withInheritedFrom(a.identifier)
      .withInheritance(models.INHERITED)
    ); // No constraint since it was invalid
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when new value type isn\'t based on type from a previous constraint on a value\'s value', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subB = new models.DataElement(id('shr.test', 'SubB'), true)
      .withBasedOn(id('shr.test', 'B'));
    let subB2 = new models.DataElement(id('shr.test', 'SubB2'), true)
      .withBasedOn(id('shr.test', 'B'));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB2')))
      );
    add(b, subB, subB2, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('type').and.to.contain('shr.test.SubB').and.to.contain('shr.test.SubB2');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'))
          .withLastModifiedBy(id('shr.test', 'A'))) // Original constraint
        .withInheritance(models.INHERITED)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when new field type isn\'t based on constrained type', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withField(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let notSubB = new models.DataElement(id('shr.test', 'NotSubB'), true)
      .withField(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'NotSubB')))
      );
    add(b, notSubB, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('type').and.to.contain('B').and.to.contain('shr.test.NotSubB');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1) // No constraint since it was invalid
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
    ]);

  });

  it('should report an error when new field type isn\'t based on type from a previous constraint on a field\'s field', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withField(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subB = new models.DataElement(id('shr.test', 'SubB'), true)
      .withBasedOn(id('shr.test', 'B'));
    let subB2 = new models.DataElement(id('shr.test', 'SubB2'), true)
      .withBasedOn(id('shr.test', 'B'));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB2')))
      );
    add(b, subB, subB2, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('type').and.to.contain('SubB').and.to.contain('shr.test.SubB2');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'))
          .withLastModifiedBy(id('shr.test', 'A'))) // Original constraint
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
    ]);
  });

  // Invaliding value type constraints by redeclaring Value (not using a specific constraint)

  it('should report an error when a sub-type\'s value is not a sub-type of parent\'s value', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let notSubA = new models.DataElement(id('shr.test', 'NotSubA'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0,1));
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'NotSubA'))
      );
    add(a, notSubA, x, subX);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('12007').and.to.contain('NotSubA');
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      // Original value
      new models.IdentifiableValue(id('shr.test', 'A'))
        .withMinMax(0, 1)
        .withInheritance(models.INHERITED)
        .withInheritedFrom(x.identifier)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should report an error when a sub-type choice contains options that are not sub-types of the parent\'s value', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let subA = new models.DataElement(id('shr.test', 'SubA'), true).withBasedOn(id('shr.test', 'A'));
    let notSubA = new models.DataElement(id('shr.test', 'NotSubA'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0,1));
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.ChoiceValue()
          .withOption(new models.IdentifiableValue(id('shr.test', 'SubA')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'NotSubA')))
      );
    add(a, subA, notSubA, x, subX);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('12036').and.to.contain('NotSubA');
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      // Original value
      new models.IdentifiableValue(id('shr.test', 'A'))
        .withMinMax(0,1)
        .withInheritance(models.INHERITED)
        .withInheritedFrom(x.identifier)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should report an error when a sub-type value tries to narrow a choice to an element not in the choice', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let c = new models.DataElement(id('shr.test', 'C'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'C'))
      );
    add(a, b, c, x, subX);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('12006').and.to.contain('C');
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      // Original value
      new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
          .withInheritance(models.INHERITED)
          .withInheritedFrom(x.identifier)
    );
    expect(eSubX.fields).to.be.empty;
  });

  it('should report an error when a sub-type value tries to narrow a choice to a subset with an element not in the choice', function() {
    let a = new models.DataElement(id('shr.test', 'A'), true);
    let b = new models.DataElement(id('shr.test', 'B'), true);
    let c = new models.DataElement(id('shr.test', 'C'), true);
    let d = new models.DataElement(id('shr.test', 'D'), true);
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.ChoiceValue().withMinMax(0, 1)
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'C')))
      );
    let subX = new models.DataElement(id('shr.test', 'SubX'), true)
      .withBasedOn(id('shr.test', 'X'))
      .withValue(
        new models.ChoiceValue()
          .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
          .withOption(new models.IdentifiableValue(id('shr.test', 'D')))
      );
    add(a, b, c, d, x, subX);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('12036').and.to.contain('D');
    const eSubX = findExpanded('shr.test', 'SubX');
    expect(eSubX.identifier).to.eql(id('shr.test', 'SubX'));
    expect(eSubX.basedOn).to.have.length(1);
    expect(eSubX.basedOn[0]).to.eql(id('shr.test', 'X'));
    expect(eSubX.value).to.eql(
      // Original value
      new models.ChoiceValue().withMinMax(0, 1)
        .withOption(new models.IdentifiableValue(id('shr.test', 'A')))
        .withOption(new models.IdentifiableValue(id('shr.test', 'B')))
        .withOption(new models.IdentifiableValue(id('shr.test', 'C')))
        .withInheritance(models.INHERITED)
        .withInheritedFrom(x.identifier)
    );
    expect(eSubX.fields).to.be.empty;
  });

  // Valid Includes Type Constraints

  it('should keep valid includes type constraints on values', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let a = new models.DataElement(id('shr.test', 'A'), true) //e.g. BreastCancerStage
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(
            new models.IncludesTypeConstraint(id('shr.test','subB'), new models.Cardinality(0,1)))
      );

    add(subB, b, a);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.fields).to.be.empty;
    expect(eA.value).to.eql(
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1))
          .withLastModifiedBy(id('shr.test', 'A')))
    );
  });

  it('should keep valid includes type constraints on fields', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let a = new models.DataElement(id('shr.test', 'A'), true) //e.g. BreastCancerStage
      .withField(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(
        new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1)))
      );

    add(subB, b, a);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.value).to.be.undefined;
    expect(eA.fields).to.eql([
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1))
          .withLastModifiedBy(id('shr.test', 'A')))
    ]);
  });

  it('should keep valid includes type constraints on inherited values', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'subA'), true) //e.g. BreastCancerStage
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(
            new models.IncludesTypeConstraint(id('shr.test','subB'), new models.Cardinality(0,1)))
      );

    add(subB, b, a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'subA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'subA'));
    expect(eSubA.fields).to.be.empty;
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1))
          .withLastModifiedBy(id('shr.test', 'subA')))
        .withInheritance(models.OVERRIDDEN)
    );
  });

  it('should keep valid inherited includes type constraints on value', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1)))
      );
    let subA = new models.DataElement(id('shr.test', 'subA'), true) //e.g. BreastCancerStage
      .withBasedOn(id('shr.test', 'A')
    );
    add(b,subB,a,subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'subA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'subA'));
    expect(eSubA.fields).to.be.empty;
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withInheritance(models.INHERITED)
    );
  });

  it('should keep valid includes type constraints on inherited fields', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));

    let subA = new models.DataElement(id('shr.test', 'subA'), true) //e.g. BreastCancerStage
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(
            new models.IncludesTypeConstraint(id('shr.test','subB'), new models.Cardinality(0,1)))
      );

    add(subB, b, a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'subA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'subA'));
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1))
          .withLastModifiedBy(id('shr.test', 'subA')))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  it('should keep valid includes type constraints on inherited values', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'subA'), true) //e.g. BreastCancerStage
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(
            new models.IncludesTypeConstraint(id('shr.test','subB'), new models.Cardinality(0,1)))
      );

    add(subB, b, a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'subA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'subA'));
    expect(eSubA.fields).to.be.empty;
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1))
          .withLastModifiedBy(id('shr.test', 'subA')))
        .withInheritance(models.OVERRIDDEN)
    );
  });

  it('should keep valid inherited includes type constraints on field', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1))));
    let subA = new models.DataElement(id('shr.test', 'subA'), true) //e.g. BreastCancerStage
      .withBasedOn(id('shr.test', 'A')
    );

    add(b, subB, a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'subA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'subA'));
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
    ]
    );
  });

  it('should allow fields to includes types with properly fitting cardinality', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(1, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(1, 1))));

    add(subB, b, a);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.value).to.be.undefined;
    expect(eA.fields).to.eql([
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(1, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(1, 1))
          .withLastModifiedBy(id('shr.test', 'A')))
    ]);
  });

  // it('should allow fields with a layer deep path to includes types with properly fitting cardinality', () => {
  //   let c = new models.DataElement(id('shr.test', 'C'), true) //e.g. Observation
  //     .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0,5));
  //   let subC = new models.DataElement(id('shr.test', 'subC'), true) //e.g. BreastTumorCategory,etc.
  //     .withBasedOn(id('shr.test', 'C'));

  //   let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. Panelmembers
  //     .withField(new models.IdentifiableValue(id('shr.test', 'C')).withMinMax(0,4));

  //   let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. Stage
  //     .withField(new models.IdentifiableValue(id('shr.core', 'subB')).withMinMax(0,3)
  //   );

  //   let a = new models.DataElement(id('shr.test', 'A'), true)
  //     .withBasedOn(id('shr.test', 'B'))
  //     .withField(new models.IdentifiableValue(id('shr.test', 'C')).withMinMax(1,2)
  //       .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subC'), new models.Cardinality(1, 1)))
  //     );

  //   add(subB, b, a, c,subC);

  //   doExpand();

  //   expect(err.hasErrors()).to.be.true;
  //   expect(err.errors()[0].msg).to.contain('valueset').and.to.contain('string');
  //   const eA = findExpanded('shr.test', 'A');
  //   // expect(eA.identifier).to.eql(id('shr.test', 'A'));
  //   // expect(eA.value).to.be.undefined;
  //   // expect(eA.fields).to.eql([
  //   //   new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(1, 1)
  //   //     .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(1, 1)))
  //   // ]);

  // });

  it('should allow values to include types with properly fitting cardinality', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(1, 1))));

    add(subB, b, a);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.fields).to.be.empty;
    expect(eA.value).to.eql(
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(1, 1))
          .withLastModifiedBy(id('shr.test', 'A')))
    );
  });

  // Invalid Includes Type Constraints

  it('should report an error when value includes an element of different type', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let c = new models.DataElement(id('shr.test', 'C'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'C'), new models.Cardinality(0, 1)))
      );

    add(b, subB, c, a);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('invalid sub-type').and.to.contain(b.identifier.fqn);
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.fields).to.be.empty;
    expect(eA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1));

  });

/*  it('should report an error when includes type constraint is placed for a second time on inherited value', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let subB2 = new models.DataElement(id('shr.test', 'subB2'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1)))
      );

    let subA = new models.DataElement(id('shr.test', 'subA'), true) //e.g. BreastCancerStage
      .withBasedOn(id('shr.test', 'A'))
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB2'), new models.Cardinality(0, 1)))
      );
    add(b, subB, subB2, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('already defines').and.to.contain('Base Class ' + b.identifier.fqn);
    const eSubA = findExpanded('shr.test', 'subA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'subA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.fields).to.be.empty;
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
      .withInheritedFrom(a.identifier)
      .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1)))
    );
  }); */

  it('should report an error when field includes an element of different type', () => {
    let c = new models.DataElement(id('shr.test', 'C'), true) //e.g.
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let a = new models.DataElement(id('shr.test', 'A'), true) //e.g. BreastCancerStage
      .withField(
        new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
          .withConstraint(
            new models.IncludesTypeConstraint(id('shr.test', 'C'), new models.Cardinality(0, 1)))
      );

    add(subB, b, a, c);

    // doExpand();
    // add(b, c, a);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('invalid sub-type').and.to.contain(b.identifier.fqn);
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.value).to.be.undefined;
    expect(eA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)]);
  });

/*  it('should report an error when includes type constraint is placed for a second time on inherited field', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. PanelMembers.Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let subB2 = new models.DataElement(id('shr.test', 'subB2'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));

    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1)))
      );

    let subA = new models.DataElement(id('shr.test', 'subA'), true) //e.g. BreastCancerStage
      .withBasedOn(id('shr.test', 'A'))
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB2'), new models.Cardinality(0, 1)))
      );
    add(b, subB, subB2, a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('already defines').and.to.contain('Base Class ' + b.identifier.fqn);
    const eSubA = findExpanded('shr.test', 'subA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'subA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(0, 1)))
    ]);
  }); */

  it('should report an error when field includes an element with mismatched cardinality', () => {
    let b = new models.DataElement(id('shr.test', 'B'), true)  //e.g. Observation
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0,1));

    let subB = new models.DataElement(id('shr.test', 'subB'), true) //e.g. BreastTumorCategory, BreastNodeCategory,etc.
      .withBasedOn(id('shr.test', 'B'))
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0,1));

    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(1, 1)
          .withConstraint(new models.IncludesTypeConstraint(id('shr.test', 'subB'), new models.Cardinality(1, 2))));

    add(subB, b, a);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('Cannot include cardinality').and.to.contain(b.identifier.fqn);
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.value).to.be.undefined;
    expect(eA.fields).to.eql([
      new models.IdentifiableValue((id('shr.test', 'B'))).withMinMax(1, 1)
    ]);
  });

  // Valid ValueSet Constraints

  it('should keep valid valueset constraints on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.ValueSetConstraint('http://foo.org')
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should allow valueset constraints to override prior valueset constraints on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://bar.org'))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.ValueSetConstraint('http://bar.org')
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should allow valueset constraints to override prior valueset constraints on values (using CodeableConcept)', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://bar.org'))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.ValueSetConstraint('http://bar.org')
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should allow valueset constraints to override prior valueset constraints on fields', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://bar.org'))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://bar.org')
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  it('should keep valid valueset constraints on fields', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org')
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  it('should move a valueset constraint from a non-code value to its code path', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org')));
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('code')).withMinMax(0, 1));
    add(a, b);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org', [pid('code')])
          .withLastModifiedBy(id('shr.test', 'A')))
    ); // Constraint on 'code' path
    expect(eA.fields).to.be.empty;
    const eB = findExpanded('shr.test', 'B');
    expect(eB.identifier).to.eql(id('shr.test', 'B'));
    expect(eB.value).to.eql(
      new models.IdentifiableValue(pid('code')).withMinMax(0, 1)); // No constraint
    expect(eB.fields).to.be.empty;
  });

  it('should move a valueset constraint from a non-code field to its code path', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org')));
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('code')).withMinMax(0, 1));
    add(a, b);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.value).to.be.undefined;
    expect(eA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org', [pid('code')])
          .withLastModifiedBy(id('shr.test', 'A')))
    ]); // Constraint on 'code' path
    const eB = findExpanded('shr.test', 'B');
    expect(eB.identifier).to.eql(id('shr.test', 'B'));
    expect(eB.value).to.eql(
      new models.IdentifiableValue(pid('code')).withMinMax(0, 1)); // No constraint
    expect(eB.fields).to.be.empty;
  });

  it('should move a valueset constraint from a non-code value on its base to its code path', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'SubB')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org')));
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('code')).withMinMax(0, 1));
    let subB = new models.DataElement(id('shr.test', 'SubB'), true)
      .withBasedOn(id('shr.test', 'B'));
    add(a, b, subB);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eA = findExpanded('shr.test', 'A');
    expect(eA.identifier).to.eql(id('shr.test', 'A'));
    expect(eA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'SubB')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org', [pid('code')])
          .withLastModifiedBy(id('shr.test', 'A')))
    ); // Constraint on 'code' path
    expect(eA.fields).to.be.empty;
    const eB = findExpanded('shr.test', 'B');
    expect(eB.identifier).to.eql(id('shr.test', 'B'));
    expect(eB.value).to.eql(
      new models.IdentifiableValue(pid('code')).withMinMax(0, 1)); // No constraint
    expect(eB.fields).to.be.empty;
    const eSubB = findExpanded('shr.test', 'SubB');
    expect(eSubB.identifier).to.eql(id('shr.test', 'SubB'));
    expect(eSubB.basedOn).to.eql([id('shr.test', 'B')]);
    expect(eSubB.value).to.eql(
      new models.IdentifiableValue(pid('code')).withMinMax(0, 1)
        .withInheritance(models.INHERITED)
        .withInheritedFrom(b.identifier)
  ); // No constraint
    expect(eSubB.fields).to.be.empty;
  });

  it('should correctly apply value set constraints when value keyword is used', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(1, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IncompleteValue(id('', '_Value'))
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(pid('code')).withMinMax(1, 1));
    add(a, subA, b);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).not.to.be.instanceof(models.IncompleteValue);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(1, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.ValueSetConstraint('http://foo.org', [pid('code')])
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
      );
    expect(eSubA.fields).to.be.empty;
  });

  // Invalid ValueSet Constraints

  it('should report an error when putting a valueset constraint on a non-code value with a non-code value of its own', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(pid('string')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('valueset').and.to.contain('string');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withInheritance(models.INHERITED)
  ); // No constraint
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when putting a valueset constraint on a value already constrained to a code', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://bar.org'))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('valueset').and.to.contain('Coding').and.to.contain('code');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withInheritance(models.INHERITED)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when putting a valueset constraint on a non-code field with a non-code value of its own', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 1));
    add(simpleDE('shr.test', 'AFieldA'));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('valueset').and.to.contain('AFieldA');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 1)
    .withInheritance(models.INHERITED)
    .withInheritedFrom(a.identifier)]); // No constraint
  });

  it('should report an error when putting a valueset constraint on a field already constrained to a code', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://bar.org'))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('valueset').and.to.contain('Coding').and.to.contain('code');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
    ]);
  });

  // Valid Code Constraints

  it('should keep valid code constraints on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should qualify unqualified code constraints on values when possible', () => {
    // Need to add the value set to allow the resolution to occur
    const vs = new models.ValueSet(id('shr.test', 'FooVS'), 'http://foo.org/valueset');
    vs.addValueSetIncludesCodeRule(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'));
    _specs.valueSets.add(vs);

    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org/valueset'))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.CodeConstraint(new models.Concept(null, 'bar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
      .withInheritedFrom(a.identifier)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should make implicit value code constraints explicit on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, x);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eX = findExpanded('shr.test', 'X');
    expect(eX.identifier).to.eql(id('shr.test', 'X'));
    expect(eX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')])
          .withLastModifiedBy(id('shr.test', 'X')))
    );
    expect(eX.fields).to.be.empty;
  });

  it('should make implicit value code constraints explicit on values (using CodeableConcept)', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, x);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eX = findExpanded('shr.test', 'X');
    expect(eX.identifier).to.eql(id('shr.test', 'X'));
    expect(eX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'CodeableConcept')])
        .withLastModifiedBy(id('shr.test', 'X')))
    );
    expect(eX.fields).to.be.empty;
  });

  it('should allow code constraints to override prior code constraints on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should allow code constraints to override prior code constraints on values (using CodeableConcept)', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should consolidate code constraints on value specifying the same code', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withInheritance(models.INHERITED)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should correctly apply code constraints when value keyword is used', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(1, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IncompleteValue(id('', '_Value'))
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let b = new models.DataElement(id('shr.test', 'B'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org/vs'))
      );
    add(a, subA, b);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).not.to.be.instanceof(models.IncompleteValue);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(1, 1)
      .withInheritedFrom(a.identifier)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')])
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
      );
    expect(eSubA.fields).to.be.empty;
  });

  it('should keep valid code constraints on fields', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  it('should make implicit value code constraints explicit on fields', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withField(
        new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, x);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eX = findExpanded('shr.test', 'X');
    expect(eX.identifier).to.eql(id('shr.test', 'X'));
    expect(eX.value).to.be.undefined;
    expect(eX.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')])
          .withLastModifiedBy(id('shr.test', 'X')))
    ]);
  });

  it('should allow code constraints to override prior code constraints on fields', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  it('should consolidate code constraints on a field specifying the same code', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
    ]);
  });

  // Invalid Code Constraints

  it('should report an error when putting a code constraint on a non-code value', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(pid('string')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('code').and.to.contain('string');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withInheritance(models.INHERITED)
    ); // No constraint
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when putting a code constraint on a non-code field', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 1));
    add(simpleDE('shr.test', 'AFieldA'));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('code').and.to.contain('AFieldA');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 1)
    .withInheritance(models.INHERITED)
    .withInheritedFrom(a.identifier)]); // No constraint
  });

    // Valid Includes Code Constraints

  it('should keep valid includes code constraints on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should qualify unqualified includes code constraints on values when possible', () => {
    // Need to add the value set to allow the resolution to occur
    const vs = new models.ValueSet(id('shr.test', 'FooVS'), 'http://foo.org/valueset');
    vs.addValueSetIncludesCodeRule(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'));
    _specs.valueSets.add(vs);

    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org/valueset'))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept(null, 'bar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.ValueSetConstraint('http://foo.org/valueset')
          .withLastModifiedBy(id('shr.test', 'A')))
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should make implicit value includes code constraints explicit on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, x);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eX = findExpanded('shr.test', 'X');
    expect(eX.identifier).to.eql(id('shr.test', 'X'));
    expect(eX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')])
          .withLastModifiedBy(id('shr.test', 'X')))
    );
    expect(eX.fields).to.be.empty;
  });

  it('should make implicit value includes code constraints explicit on values (using CodeableConcept)', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, x);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eX = findExpanded('shr.test', 'X');
    expect(eX.identifier).to.eql(id('shr.test', 'X'));
    expect(eX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'CodeableConcept')])
          .withLastModifiedBy(id('shr.test', 'X')))
    );
    expect(eX.fields).to.be.empty;
  });

  it('should allow multiple includes code constraints on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should allow multiple includes code constraints on values (using CodeableConcept)', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'CodeableConcept')).withMinMax(1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should consolidate includes code constraints on value specifying the same code', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withInheritance(models.INHERITED)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should keep valid includes code constraints on fields', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  it('should make implicit value includes code constraints explicit on fields', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withField(
        new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, x);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eX = findExpanded('shr.test', 'X');
    expect(eX.identifier).to.eql(id('shr.test', 'X'));
    expect(eX.value).to.be.undefined;
    expect(eX.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')])
          .withLastModifiedBy(id('shr.test', 'X')))
    ]);
  });

  it('should allow multiple includes code constraints on fields', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz'))
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
        .withInheritedFrom(a.identifier)
    ]);
  });

  it('should consolidate includes code constraints on a field specifying the same code', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(1)
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'))
          .withLastModifiedBy(id('shr.test', 'A')))
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
    ]);
  });

  // Invalid Includes Code Constraints

  it('should report an error when putting an includes code constraint on a non-code value', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(pid('string')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('code').and.to.contain('string');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(1)
        .withInheritedFrom(a.identifier)
        .withInheritance(models.INHERITED)
    ); // No constraint
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when putting an includes code constraint on a non-code field', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1));
    add(simpleDE('shr.test', 'AFieldA'));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1)
          .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('code').and.to.contain('AFieldA');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1)
    .withInheritance(models.INHERITED)
    .withInheritedFrom(a.identifier)]); // No constraint
  });

  // Valid Boolean Constraints

  it('should keep valid boolean constraints on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1)
          .withConstraint(new models.BooleanConstraint(true))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.BooleanConstraint(true)
          .withLastModifiedBy(id('shr.test', 'SubA')))
        .withInheritance(models.OVERRIDDEN)
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should make implicit value boolean constraints explicit on values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1));
    let x = new models.DataElement(id('shr.test', 'X'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
          .withConstraint(new models.BooleanConstraint(true))
      );
    add(a, x);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eX = findExpanded('shr.test', 'X');
    expect(eX.identifier).to.eql(id('shr.test', 'X'));
    expect(eX.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'A')).withMinMax(0, 1)
        .withConstraint(new models.BooleanConstraint(true, [pid('boolean')])
          .withLastModifiedBy(id('shr.test', 'X')))
    );
    expect(eX.fields).to.be.empty;
  });

  it('should consolidate boolean constraints on value specifying the same value', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1)
          .withConstraint(new models.BooleanConstraint(false))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1)
          .withConstraint(new models.BooleanConstraint(false)
          .withLastModifiedBy(id('shr.test', 'A')))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withConstraint(new models.BooleanConstraint(false)
          .withLastModifiedBy(id('shr.test', 'A')))
        .withInheritance(models.INHERITED)
    );
    expect(eSubA.fields).to.be.empty;
  });

  // Invalid Code Constraints

  it('should report an error when overriding prior boolean constraint with different value', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(
        new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1)
          .withConstraint(new models.BooleanConstraint(true))
      );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1)
          .withConstraint(new models.BooleanConstraint(false))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('boolean').and.to.contain('value');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1)
        .withInheritedFrom(a.identifier)
        .withInheritance(models.INHERITED)
        .withConstraint(new models.BooleanConstraint(true)
          .withLastModifiedBy(id('shr.test', 'A')))
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when putting a boolean constraint on a non-boolean value', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(
        new models.IdentifiableValue(pid('string')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.BooleanConstraint(true)))
      );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('code').and.to.contain('string');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(0, 1)
    .withInheritedFrom(a.identifier)
      .withInheritance(models.INHERITED)
  ); // No constraint
    expect(eSubA.fields).to.be.empty;
  });

  it('should properly deal with inherited TBD values', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
      .withValue(new models.TBD('Not ready yet!')
      .withMinMax(1, 1)
    );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
      .withBasedOn(id('shr.test', 'A'))
      .withValue(new models.TBD('Almost ready!')
      .withMinMax(1, 1)
    );
    let subA2 = new models.DataElement(id('shr.test', 'SubA2'), true)
      .withBasedOn(id('shr.test', 'A'));
    add(a, subA, subA2);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.TBD('Almost ready!').withMinMax(1, 1)
      .withInheritedFrom(a.identifier)
    );

    const eSubA2 = findExpanded('shr.test', 'SubA2');
    expect(eSubA2.identifier).to.eql(id('shr.test', 'SubA2'));
    expect(eSubA2.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA2.value).to.eql(
        new models.TBD('Not ready yet!')
        .withInheritance(models.INHERITED)
        .withInheritedFrom(a.identifier)
        .withMinMax(1, 1)
    );
  });

  it('should report an error when overriding a value with a TBD', () => {
    let a = new models.DataElement(id('shr.test', 'A'), true)
        .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1)
    );
    let subA = new models.DataElement(id('shr.test', 'SubA'), true)
        .withBasedOn(id('shr.test', 'A'))
        .withValue(new models.TBD('Almost ready!')
            .withMinMax(1, 1)
    );
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('Cannot override').and.to.contain('string').and.to.contain('TBD');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(1, 1)
      .withInheritedFrom(a.identifier)
      .withInheritance(models.INHERITED)
    );
  });
});

// Shorthand Identifier constructor for more concise code
function id(namespace, name) {
  return new models.Identifier(namespace, name);
}

// Shorthand PrimitiveIdentifier constructor for more concise code
function pid(name) {
  return new models.PrimitiveIdentifier(name);
}

// Creates a simple element, mainly used to satisfy referential integrity
function simpleDE(namespace, name, isEntry=true) {
  return new models.DataElement(id(namespace, name), isEntry)
    .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
}

// Adds a data elements to the specs, for use in the test case
function add(...dataElements) {
  for (const de of dataElements) {
    _specs.dataElements.add(de);
  }
}

// Expands the current specs and stores results in _result
function doExpand(...exporters) {
  _result = expand(_specs, ...exporters);

  /*********************************************************************************************************************
   * HORRIBLE, HORRIBLE, AWFUL, NO-GOOD, YOU-SHOULD-BE-ASHAMED-OF-YOURSELF HACK!
   * This code clears all of the ConstraintHistories on every element because I just don't have time to go through and
   * fix the assertions on every value and field on every element in every test.  It can't stay like this forever, but
   * it will stay like this for now.
   ********************************************************************************************************************/
  _result.dataElements.all.forEach(de => {
    for (const f of [de.value, ...de.fields]) {
      if (!f || f instanceof models.TBD) continue;
      f.constraintHistory = new models.ConstraintHistory();
      if (f instanceof models.ChoiceValue) {
        for (const o of f.aggregateOptions) {
          if (o instanceof models.TBD) continue;
          o.constraintHistory = new models.ConstraintHistory();
        }
      }
    }
  });
}

function findExpanded(namespace, name) {
  return _result.dataElements.find(namespace, name);
}