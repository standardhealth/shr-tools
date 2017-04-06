const {expect} = require('chai');
const {expand, setLogger} = require('../index');
const models = require('shr-models');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

let _specs, _result;

describe('#expand()', () => {
  beforeEach(function() {
    err.clear();
    _specs = new models.Specifications();
    // The SHR test namespace used by most tests
    _specs.namespaces.add(new models.Namespace('shr.core'));
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
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
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
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
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
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
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
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
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
    expect(eSubA.value).to.be.eql(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
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
      new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1, 1),
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
      new models.IdentifiableValue(pid('string')).withMinMax(0, 1)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1)))
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
      new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 5)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 3)))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')]))
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
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('cardinality').and.to.contain('1..1').and.to.contain('1..*');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'AVal')).withMinMax(0, 1)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1), [pid('decimal')])) // Last valid constraint
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
    add(a, subA);

    doExpand();

    expect(err.errors()).to.have.length(1);
    expect(err.errors()[0].msg).to.contain('cardinality').and.to.contain('1..1').and.to.contain('1..*');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'AField')).withMinMax(0, 1)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1), [pid('decimal')])) // Last valid constraint
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
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')))
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
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'), [id('shr.test', 'B')], false))
    );
    expect(eX.fields).to.be.empty;
  });

  it('should allow \'value type\' constraints to narrow a choice', function() {
    this.skip('Doesn\'t currently support narrowing choices like this.  May require new constraint type.');
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
        .withConstraint(new models.TypeConstraint(id('shr.test', 'B'), true))
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
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')))
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
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'), [id('shr.test', 'B')], false))
    ]);
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
    expect(err.errors()[0].msg).to.contain('type').and.to.contain('shr.test.B').and.to.contain('shr.test.NotSubB');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)); // No constraint since it was invalid
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
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'))) // Original constraint
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
    expect(err.errors()[0].msg).to.contain('type').and.to.contain('shr.test.B').and.to.contain('shr.test.NotSubB');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1) // No constraint since it was invalid
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
    expect(err.errors()[0].msg).to.contain('type').and.to.contain('shr.test.SubB').and.to.contain('shr.test.SubB2');
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB'))) // Original constraint
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
        .withConstraint(new models.ValueSetConstraint('http://foo.org'))
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
        .withConstraint(new models.ValueSetConstraint('http://bar.org'))
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
        .withConstraint(new models.ValueSetConstraint('http://bar.org'))
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
        .withConstraint(new models.ValueSetConstraint('http://bar.org'))
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
        .withConstraint(new models.ValueSetConstraint('http://foo.org'))
    ]);
  });

  // Invalid ValueSet Constraints

  it('should report an error when putting a valueset constraint on a non-code value', () => {
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
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(0, 1)); // No constraint
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when putting a valueset constraint on a non-code field', () => {
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
    expect(eSubA.fields).to.eql([new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 1)]); // No constraint
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
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
        .withConstraint(new models.ValueSetConstraint('http://foo.org/valueset'))
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar')))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')]))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'CodeableConcept')]))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')]))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
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
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
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
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(0, 1)); // No constraint
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
    expect(eSubA.fields).to.eql([new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 1)]); // No constraint
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
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
        .withConstraint(new models.ValueSetConstraint('http://foo.org/valueset'))
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar')))
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')]))
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'CodeableConcept')]))
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar'), [id('shr.core', 'Coding')]))
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'baz', 'FooBaz')))
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
        .withConstraint(new models.IncludesCodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
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
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(1)); // No constraint
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
    expect(eSubA.fields).to.eql([new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(1)]); // No constraint
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
        .withConstraint(new models.BooleanConstraint(true))
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
        .withConstraint(new models.BooleanConstraint(true, [pid('boolean')]))
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
          .withConstraint(new models.BooleanConstraint(false))
      );
    add(a, subA);

    doExpand();

    expect(err.hasErrors()).to.be.false;
    const eSubA = findExpanded('shr.test', 'SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('boolean')).withMinMax(0, 1)
        .withConstraint(new models.BooleanConstraint(false))
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
        .withConstraint(new models.BooleanConstraint(true))
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
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(0, 1)); // No constraint
    expect(eSubA.fields).to.be.empty;
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
function doExpand() {
  _result = expand(_specs);
}

function findExpanded(namespace, name) {
  return _result.dataElements.find(namespace, name);
}