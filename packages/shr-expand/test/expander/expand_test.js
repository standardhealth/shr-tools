const {expect} = require('chai');
const {expand} = require('../../lib/expander/expand');
const models = require('../../lib/models');

describe('#expand()', () => {
  it('should not modify the passed in namespaces or data elements, but instead return new ones', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'));
    ns.addDefinition(subA);
    ns.addDefinition(simpleDE(ns.namespace, 'SubAFieldA'));

    // Get clones of the originals
    const aClone = a.clone();
    const subAClone = subA.clone();

    // Do the expansion
    const result = expand([ns]);

    // Originals should be the same as they were
    expect(a).to.eql(aClone);
    expect(subA).to.eql(subAClone);

    // Expanded A should be the same value (expansion doesn't affect it) but not the same exact instance
    const eA = result.namespaces[0].lookup('A');
    expect(eA).to.eql(aClone);
    expect(eA).to.eql(a);
    expect(eA).not.to.equal(a);

    // Expanded SubA should be a different value (due to expansion)
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA).not.to.eql(subAClone);
    expect(eSubA).not.to.eql(subA);
    expect(eSubA).not.to.equal(subA);
  });

  it('should not copy metadata from based on classes to child classes', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withDescription('It is A.')
      .withConcept(new models.Concept('http://foo.org', 'bar'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'));
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.description).to.be.undefined;
    expect(eSubA.concepts).to.be.empty;
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    expect(eSubA.fields).to.be.empty;
  });

  it('should retain metadata in the child class', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withDescription('It is A.')
      .withConcept(new models.Concept('http://foo.org', 'bar'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withDescription('It is SubA.')
      .withConcept(new models.Concept('http://foo.org', 'baz'));
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.description).to.equal('It is SubA.');
    expect(eSubA.concepts).to.eql([new models.Concept('http://foo.org', 'baz')]);
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    expect(eSubA.fields).to.be.empty;
  });

  it('should correctly merge in value from a basedOn element when it doesn\'t define its own value', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(new models.IdentifiableValue(id(ns.namespace, 'SubAFieldA')).withMinMax(1, 1));
    ns.addDefinition(subA);
    ns.addDefinition(simpleDE(ns.namespace, 'SubAFieldA'));

    const result = expand([ns]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'SubAFieldA')).withMinMax(1, 1)
    ]);
  });

  it('should correctly retain its value when it\'s the same as the basedOn value', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error if the value identifier is changed', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(new models.IdentifiableValue(pid('decimal')).withMinMax(1, 1));
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('override').and.to.contain('string').and.to.contain('decimal');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.be.empty;
  });

  it('should correctly merge in unique fields from a basedOn element', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(new models.IdentifiableValue(id(ns.namespace, 'AFieldA')).withMinMax(1, 1));
    ns.addDefinition(a);
    ns.addDefinition(simpleDE(ns.namespace, 'AFieldA'));
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(new models.IdentifiableValue(id(ns.namespace, 'SubAFieldA')).withMinMax(1, 1));
    ns.addDefinition(subA);
    ns.addDefinition(simpleDE(ns.namespace, 'SubAFieldA'));

    const result = expand([ns]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
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
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 1));
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(pid('string')).withMinMax(0, 1)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1)))
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should correctly add cardinality constraints when overriding cardinality of a field', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(new models.IdentifiableValue(id(ns.namespace, 'AFieldA')).withMinMax(0, 5));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(new models.IdentifiableValue(id(ns.namespace, 'AFieldA')).withMinMax(1, 3));
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'AFieldA')).withMinMax(0, 5)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 3)))
    ]);
  });

  // Invalid Cardinality Constraints

  it('should report an error when widening cardinality of a value', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(1, 2));
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('cardinality').and.to.contain('0..1').and.to.contain('1..2');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
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

    let ns = new models.Namespace('shr.test');
    let aVal = new models.DataElement(id(ns.namespace, 'AVal'), true)
      .withValue(new models.IdentifiableValue(pid('decimal')).withMinMax(1, 1));
    ns.addDefinition(aVal);
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(
        new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1), [pid('decimal')]))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('cardinality').and.to.contain('0..1').and.to.contain('1..2');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'AVal')).withMinMax(0, 1) // No constraint since it was invalid
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when widening cardinality from a previous constraint on a value\'s value', () => {
    let ns = new models.Namespace('shr.test');
    let aVal = new models.DataElement(id(ns.namespace, 'AVal'), true)
      .withValue(new models.IdentifiableValue(pid('decimal')).withMinMax(1));
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(
        new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1), [pid('decimal')]))
      );
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(
        new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1), [pid('decimal')]))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('cardinality').and.to.contain('1..1').and.to.contain('1..*');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'AVal')).withMinMax(0, 1)
        .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1), [pid('decimal')])) // Last valid constraint
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when widening cardinality of a field', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(new models.IdentifiableValue(id(ns.namespace, 'AFieldA')).withMinMax(1, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(new models.IdentifiableValue(id(ns.namespace, 'AFieldA')).withMinMax(0, 1));
    ns.addDefinition(subA);
    ns.addDefinition(simpleDE(ns.namespace, 'AFieldA'));

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('cardinality').and.to.contain('1..1').and.to.contain('0..1');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
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

    let ns = new models.Namespace('shr.test');
    let aField = new models.DataElement(id(ns.namespace, 'AField'), true)
      .withField(new models.IdentifiableValue(pid('decimal')).withMinMax(1, 1));
    ns.addDefinition(aField);
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(new models.IdentifiableValue(aField.identifier).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(
        new models.IdentifiableValue(aField.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1), [pid('decimal')]))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('cardinality').and.to.contain('0..1').and.to.contain('1..2');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'AField')).withMinMax(0, 1) // No constraint since it was invalid
    ]);
  });

  it('should report an error when widening cardinality from a previous constraint on a field\'s field', () => {
    let ns = new models.Namespace('shr.test');
    let aVal = new models.DataElement(id(ns.namespace, 'AField'), true)
      .withField(new models.IdentifiableValue(pid('decimal')).withMinMax(1));
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(
        new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1, 1), [pid('decimal')]))
      );
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(
        new models.IdentifiableValue(aVal.identifier).withMinMax(0, 1)
          .withConstraint(new models.CardConstraint(new models.Cardinality(1), [pid('decimal')]))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('cardinality').and.to.contain('1..1').and.to.contain('1..*');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
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
    let ns = new models.Namespace('shr.test');
    let b = new models.DataElement(id(ns.namespace, 'B'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(b);
    let subB = new models.DataElement(id(ns.namespace, 'SubB'), true)
      .withBasedOn(id(ns.namespace, 'B'));
    ns.addDefinition(subB);
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(
        new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id(ns.namespace, 'SubB')))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')))
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should keep valid type constraints on fields', () => {
    let ns = new models.Namespace('shr.test');
    let b = new models.DataElement(id(ns.namespace, 'B'), true)
      .withField(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(b);
    let subB = new models.DataElement(id(ns.namespace, 'SubB'), true)
      .withBasedOn(id(ns.namespace, 'B'));
    ns.addDefinition(subB);
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(
        new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id(ns.namespace, 'SubB')))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id('shr.test', 'SubB')))
    ]);
  });

  // Invalid Type Constraints

  it('should report an error when new value type isn\'t based on constrained type', () => {
    let ns = new models.Namespace('shr.test');
    let b = new models.DataElement(id(ns.namespace, 'B'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(b);
    let notSubB = new models.DataElement(id(ns.namespace, 'NotSubB'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(notSubB);
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(
        new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id(ns.namespace, 'NotSubB')))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('type').and.to.contain('shr.test.B').and.to.contain('shr.test.NotSubB');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)); // No constraint since it was invalid
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when new value type isn\'t based on type from a previous constraint on a value\'s value', () => {
    let ns = new models.Namespace('shr.test');
    let b = new models.DataElement(id(ns.namespace, 'B'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(b);
    let subB = new models.DataElement(id(ns.namespace, 'SubB'), true)
      .withBasedOn(id(ns.namespace, 'B'));
    ns.addDefinition(subB);
    let subB2 = new models.DataElement(id(ns.namespace, 'SubB2'), true)
      .withBasedOn(id(ns.namespace, 'B'));
    ns.addDefinition(subB2);
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(
        new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id(ns.namespace, 'SubB')))
      );
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(
        new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id(ns.namespace, 'SubB2')))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('type').and.to.contain('shr.test.SubB').and.to.contain('shr.test.SubB2');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id(ns.namespace, 'SubB'))) // Original constraint
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when new field type isn\'t based on constrained type', () => {
    let ns = new models.Namespace('shr.test');
    let b = new models.DataElement(id(ns.namespace, 'B'), true)
      .withField(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(b);
    let notSubB = new models.DataElement(id(ns.namespace, 'NotSubB'), true)
      .withField(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(notSubB);
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(
        new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id(ns.namespace, 'NotSubB')))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('type').and.to.contain('shr.test.B').and.to.contain('shr.test.NotSubB');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1) // No constraint since it was invalid
    ]);

  });

  it('should report an error when new field type isn\'t based on type from a previous constraint on a field\'s field', () => {
    let ns = new models.Namespace('shr.test');
    let b = new models.DataElement(id(ns.namespace, 'B'), true)
      .withField(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(b);
    let subB = new models.DataElement(id(ns.namespace, 'SubB'), true)
      .withBasedOn(id(ns.namespace, 'B'));
    ns.addDefinition(subB);
    let subB2 = new models.DataElement(id(ns.namespace, 'SubB2'), true)
      .withBasedOn(id(ns.namespace, 'B'));
    ns.addDefinition(subB2);
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(
        new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id(ns.namespace, 'SubB')))
      );
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(
        new models.IdentifiableValue(id(ns.namespace, 'B')).withMinMax(0, 1)
          .withConstraint(new models.TypeConstraint(id(ns.namespace, 'SubB2')))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('type').and.to.contain('shr.test.SubB').and.to.contain('shr.test.SubB2');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.test', 'B')).withMinMax(0, 1)
        .withConstraint(new models.TypeConstraint(id(ns.namespace, 'SubB'))) // Original constraint
    ]);
  });

  // Valid ValueSet Constraints

  it('should keep valid valueset constraints on values', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    ns.addDefinition(subA);

    const result = expand([ns, dummyCoreNS()]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(2);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://foo.org'))
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should allow valueset constraints to override prior valueset constraints on values', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://bar.org'))
      );
    ns.addDefinition(subA);

    const result = expand([ns, dummyCoreNS()]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(2);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://bar.org'))
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should allow valueset constraints to override prior valueset constraints on values', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://bar.org'))
      );
    ns.addDefinition(subA);

    const result = expand([ns, dummyCoreNS()]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(2);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.ValueSetConstraint('http://bar.org'))
    ]);
  });

  it('should keep valid valueset constraints on fields', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    ns.addDefinition(subA);

    const result = expand([ns, dummyCoreNS()]);

    expect(result.errors).to.be.empty;
    expect(result.namespaces).to.have.length(2);
    const eSubA = result.namespaces[0].lookup('SubA');
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
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(new models.IdentifiableValue(pid('string')).withMinMax(0, 1));
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(
        new models.IdentifiableValue(pid('string')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('valueset').and.to.contain('string');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(new models.IdentifiableValue(pid('string')).withMinMax(0, 1)); // No constraint
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when putting a valueset constraint on a value already constrained to a code', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withValue(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://bar.org'))
      );
    ns.addDefinition(subA);

    const result = expand([ns, dummyCoreNS()]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('valueset').and.to.contain('Coding').and.to.contain('code');
    expect(result.namespaces).to.have.length(2);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.eql(
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
    );
    expect(eSubA.fields).to.be.empty;
  });

  it('should report an error when putting a valueset constraint on a non-code field', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(new models.IdentifiableValue(id(ns.namespace, 'AFieldA')).withMinMax(0, 1));
    ns.addDefinition(a);
    ns.addDefinition(simpleDE(ns.namespace, 'AFieldA'));
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(
        new models.IdentifiableValue(id(ns.namespace, 'AFieldA')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://foo.org'))
      );
    ns.addDefinition(subA);

    const result = expand([ns]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('valueset').and.to.contain('AFieldA');
    expect(result.namespaces).to.have.length(1);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([new models.IdentifiableValue(id(ns.namespace, 'AFieldA')).withMinMax(0, 1)]); // No constraint
  });

  it('should report an error when putting a valueset constraint on a field already constrained to a code', () => {
    let ns = new models.Namespace('shr.test');
    let a = new models.DataElement(id(ns.namespace, 'A'), true)
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
      );
    ns.addDefinition(a);
    let subA = new models.DataElement(id(ns.namespace, 'SubA'), true)
      .withBasedOn(id(ns.namespace, 'A'))
      .withField(
        new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
          .withConstraint(new models.ValueSetConstraint('http://bar.org'))
      );
    ns.addDefinition(subA);

    const result = expand([ns, dummyCoreNS()]);

    expect(result.errors).to.have.length(1);
    expect(result.errors[0].message).to.contain('valueset').and.to.contain('Coding').and.to.contain('code');
    expect(result.namespaces).to.have.length(2);
    const eSubA = result.namespaces[0].lookup('SubA');
    expect(eSubA.identifier).to.eql(id('shr.test', 'SubA'));
    expect(eSubA.basedOn).to.eql([id('shr.test', 'A')]);
    expect(eSubA.value).to.be.undefined;
    expect(eSubA.fields).to.eql([
      new models.IdentifiableValue(id('shr.core', 'Coding')).withMinMax(0, 1)
        .withConstraint(new models.CodeConstraint(new models.Concept('http://foo.org/codes', 'bar', 'FooBar')))
    ]);
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

// Creates a dummy core namespace with just enough definition to make things work
function dummyCoreNS() {
  const ns = new models.Namespace('shr.core');
  ns.addDefinition(new models.DataElement(id('shr.core', 'Coding'), false));
  return ns;
}

/*
function expectAndGetNamespace(results, namespaceIndex, expectedNamespace) {
  const ns = results[namespaceIndex];
  expect(ns).to.be.instanceof(Namespace);
  expect(ns.namespace).to.equal(expectedNamespace);
  return ns;
}

function expectAndGetNamespaceByName(results, namespace) {
  for (const ns of results) {
    expect(ns).to.be.instanceof(Namespace);
    if (ns.namespace == namespace) {
      return ns;
    }
  }
  assert.fail('', namespace, `Namespace ${namespace} not found`);
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
  expectIdentifier(def.identifier, namespace.namespace, expectedName);
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
  expectIdentifier(value.identifier, expectedNamespace, expectedName);
}

function expectPrimitiveValue(value, expectedName) {
  expect(value).to.be.instanceof(Value);
  expectPrimitiveIdentifier(value.identifier, expectedName);
}

function expectRefValue(value, expectedNamespace, expectedName) {
  expect(value).to.be.instanceof(RefValue);
  expectIdentifier(value.identifier, expectedNamespace, expectedName);
}

function expectChoiceValue(value, size) {
  expect(value).to.be.instanceof(ChoiceValue);
  expect(value.options).to.have.length(size);
}

function expectMinMax(value, expectedMin, expectedMax) {
  expect(value).to.be.instanceof(Value);
  const card = value.card;
  expect(card).to.be.instanceof(Cardinality);
  expect(card.min).to.equal(expectedMin);
  if (typeof card.max != 'undefined') {
    expect(card.max).to.equal(expectedMax);
    expect(card.isMaxUnbounded).to.be.false;
  } else {
    expect(card.max).to.be.undefined;
    expect(card.isMaxUnbounded).to.be.true;
  }
}

function expectCardOne(value) {
  expect(value.card.isExactlyOne).to.be.true;
}

function expectChoiceOption(choice, optionIndex, expectedNamespace, expectedName, expectedMin=1, expectedMax=1) {
  let option = choice.options[optionIndex];
  expectMinMax(option, expectedMin, expectedMax);
  expectValue(option, expectedNamespace, expectedName);
}

function expectField(element, fieldIndex, expectedNamespace, expectedName, expectedMin, expectedMax) {
  const sptEl = element.fields[fieldIndex];
  expectMinMax(sptEl, expectedMin, expectedMax);
  expectValue(sptEl, expectedNamespace, expectedName);
}

function expectConcept(concept, system, code, display) {
  expect(concept.system).equals(system);
  expect(concept.code).equals(code);
  expect(concept.display).equals(display);
}

function expectIdentifier(identifier, expectedNamespace, expectedName) {
  expect(identifier).to.be.instanceof(Identifier);
  expect(identifier.namespace).to.equal(expectedNamespace);
  expect(identifier.name).to.equal(expectedName);
}

function expectPrimitiveIdentifier(identifier, expectedName) {
  expect(identifier).to.be.instanceof(PrimitiveIdentifier);
  expect(identifier.namespace).to.equal('primitive');
  expect(identifier.name).to.equal(expectedName);
}

function expectNoConstraints(value) {
  if (Array.isArray(value)) {
    for (const v of value) {
      expectNoConstraints(v);
    }
  } else {
    expect(value.hasConstraints).to.be.false;
  }
}

function importFixture(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}.txt`);
}

function importFixtureFolder(name) {
  return importFromFilePath(`${__dirname}/fixtures/${name}`);
}
*/
