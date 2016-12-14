const {expect, assert} = require('chai');
const {importFromFilePath} = require('../../lib/text/import');
const {Namespace, DataElement, Value, RefValue, ChoiceValue, Identifier, PrimitiveIdentifier, Cardinality, ValueSetConstraint, CodeConstraint, TypeConstraint, ChildCardConstraint} = require('../../lib/models');

describe('#importFromFilePath()', () => {
  it('should correctly import a simple entry', () => {
    const {namespaces, errors} = importFixture('Simple');
    expect(errors).is.empty;
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a simple element', () => {
    const {namespaces, errors} = importFixture('SimpleElement');
    expect(errors).is.empty;
    const simple = expectAndGetSingleElement(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a coded entry', () => {
    const {namespaces, errors} = importFixture('Coded');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expectNoConstraints(coded.value);
  });

  it('should correctly import an entry with a code from a valueset', () => {
    const {namespaces, errors} = importFixture('CodedFromValueSet');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'CodedFromValueSet');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a code from a valueset using a path', () => {
    const {namespaces, errors} = importFixture('CodedFromPathValueSet');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'CodedFromPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a path');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a code from a valueset using a default path', () => {
    const {namespaces, errors} = importFixture('CodedFromDefaultPathValueSet');
    expect(errors).is.empty;
    const coded = expectAndGetSingleEntry(namespaces, 'shr.test', 'CodedFromDefaultPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a default path');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import an entry with a Coding from a valueset', () => {
    const {namespaces, errors} = importFixtureFolder('codingFromValueSet');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 1, 'shr.test');
    const codingFromVS = expectAndGetEntry(ns, 0, 'CodingFromValueSet');
    expect(codingFromVS.description).to.equal('It is a coded entry with Coding');
    expectCardOne(codingFromVS.value);
    expectValue(codingFromVS.value, 'shr.core', 'Coding');
    expect(codingFromVS.value.constraints).to.have.length(1);
    expect(codingFromVS.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(codingFromVS.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
  });

  it('should correctly import a reference to simple element', () => {
    const {namespaces, errors} = importFixture('SimpleReference');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const simple = expectAndGetEntry(ns, 0, 'SimpleReference');
    expect(simple.description).to.equal('It is a reference to a simple element');
    expectCardOne(simple.value);
    expectRefValue(simple.value, 'shr.test', 'Simple');
    expectNoConstraints(simple.value);
  });

  it('should correctly import an entry with a list value', () => {
    const {namespaces, errors} = importFixture('MultiString');
    expect(errors).is.empty;
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'MultiString');
    expect(simple.description).to.equal('It is a multi-string entry');
    expectMinMax(simple.value, 1);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a choice entry', () => {
    const {namespaces, errors} = importFixtureFolder('choice');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const choice = expectAndGetEntry(ns, 0, 'Choice');
    expect(choice.description).to.equal('It is an entry with a choice');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 3);
    expectChoiceOption(choice.value, 0, 'primitive', 'date');
    expectChoiceOption(choice.value, 1, 'other.ns', 'Period');
    expectChoiceOption(choice.value, 2, 'shr.test', 'Simple');
    expectNoConstraints(choice.value);
    expectNoConstraints(choice.value.options);
  });

  /* Not currently supported by grammar, but maybe it should be?
  it('should correctly import a complex choice entry', () => {
    const {namespaces, errors} = importFixtureFolder('complexChoice');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const choice = expectAndGetEntry(ns, 0, 'ComplexChoice');
    expect(choice.description).to.equal('It is an entry with a complex choice');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 2);
    const option0 = choice.value.options[0];
    expectMinMax(option0, 1, 2);
    expectChoiceValue(option0, 2);
    expectChoiceOption(option0, 0, 'primitive', 'date');
    expectChoiceOption(option0, 1, 'other.ns', 'Period');
    const option1 = choice.value.options[1];
    expectMinMax(option1, 3, 4);
    expectValue(option1, 'shr.test', 'Simple');
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
    expectCardOne(group.value);
    expectPrimitiveValue(group.value, 'code');
    expectNoConstraints(group.value);
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Coded', 0);
    expectField(group, 2, 'shr.test', 'Simple2', 1);
    expectField(group, 3, 'other.ns', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
  });

  it('should correctly import a group element without a value', () => {
    const {namespaces, errors} = importFixtureFolder('groupElement');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const group = expectAndGetElement(ns, 0, 'SimpleGroup');
    expect(group.concepts).to.have.length(3);
    expectConcept(group.concepts[0], 'http://foo.org', 'bar');
    expectConcept(group.concepts[1], 'http://boo.org', 'far');
    expectConcept(group.concepts[2], 'http://zoo.org', 'bear');
    expect(group.description).to.equal('It is a group element');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(4);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Coded', 0);
    expectField(group, 2, 'shr.test', 'Simple2', 1);
    expectField(group, 3, 'other.ns', 'Thing', 1, 1);
    expectNoConstraints(group.fields);
  });

  // Constraints

  it('should correctly import an entry with a valueset constraint on the value', () => {
    const {namespaces, errors} = importFixture('VSConstraintOnValue');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    expect(ns.definitions).to.have.length(2);
    const entry = expectAndGetEntry(ns, 0, 'VSConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    const cst = entry.value.constraints[0];
    expect(cst).to.be.instanceof(ValueSetConstraint);
    expect(cst.path).to.eql([pid('code')]);
    expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
  });

  it('should correctly import an entry with a valueset constraint on the value\' child', () => {
    const {namespaces, errors} = importFixture('VSConstraintOnValueChild');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const entry = expectAndGetEntry(ns, 0, 'VSConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Complex');
    expect(entry.value.constraints).to.have.length(2);
    expect(entry.value.constraints[0]).to.be.instanceof(ChildCardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    expect(entry.value.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[1].path).to.eql([id('shr.test', 'CodedFromValueSet'), pid('code')]);
    expect(entry.value.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(entry.fields).to.be.empty;
  });

  it('should correctly import a group with a valueset constraint on a field', () => {
    const {namespaces, errors} = importFixture('VSConstraintOnField');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const group = expectAndGetEntry(ns, 0, 'VSConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a valueset constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.test', 'CodedFromValueSet', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(1);
    expect(cmplx.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[0].path).to.eql([pid('code')]);
    expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
  });

  it('should correctly import a group with a valueset constraint on a field\'s child', () => {
    const {namespaces, errors} = importFixture('VSConstraintOnFieldChild');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const group = expectAndGetEntry(ns, 0, 'VSConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a valueset constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(ChildCardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('shr.test', 'CodedFromValueSet'), pid('code')]);
    expect(cmplx.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
  });

  it('should correctly import an entry with a code constraint on the value', () => {
    const {namespaces, errors} = importFixtureFolder('codeConstraints');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(2);
    const ns = expectAndGetNamespaceByName(namespaces, 'shr.test');
    const entry = expectAndGetEntry(ns, 0, 'CodeConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a code constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Coding');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with a code constraint on the value\'s child', () => {
    const {namespaces, errors} = importFixtureFolder('codeConstraints');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(2);
    const ns = expectAndGetNamespaceByName(namespaces, 'shr.test');
    const entry = expectAndGetEntry(ns, 1, 'CodeConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a code constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(2);
    expect(entry.value.constraints[0]).to.be.instanceof(ChildCardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Coding')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(1);
    expect(entry.value.constraints[1]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[1].path).to.eql([id('shr.core','Coding')]);
    expectConcept(entry.value.constraints[1].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import a group with a code constraint on a field', () => {
    const {namespaces, errors} = importFixtureFolder('codeConstraints');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(2);
    const ns = expectAndGetNamespaceByName(namespaces, 'shr.test');
    const group = expectAndGetEntry(ns, 2, 'CodeConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a code constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.core', 'Coding', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import a group with a code constraint on a field\'s child', () => {
    const {namespaces, errors} = importFixtureFolder('codeConstraints');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(2);
    const ns = expectAndGetNamespaceByName(namespaces, 'shr.test');
    const group = expectAndGetEntry(ns, 3, 'CodeConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a code constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(2);
    expect(el.constraints[0]).to.be.instanceof(ChildCardConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core','Coding')]);
    expect(el.constraints[0].card.min).to.equal(1);
    expect(el.constraints[0].card.max).to.equal(1);
    expect(el.constraints[1]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[1].path).to.eql([id('shr.core','Coding')]);
    expectConcept(el.constraints[1].code, 'http://foo.org', 'bar', 'FooBar');
  });

  // NOTE: Quantity with unit constraints are just syntactic sugar for a code constraint!
  it('should correctly import an entry with a unit constraint on the value', () => {
    const {namespaces, errors} = importFixtureFolder('unitConstraints');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(2);
    const ns = expectAndGetNamespaceByName(namespaces, 'shr.test');
    const entry = expectAndGetEntry(ns, 0, 'UnitConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a unit constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Quantity');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','UnitOfMeasure'), id('shr.core','Coding')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import an entry with a unit constraint on the value\'s child', () => {
    const {namespaces, errors} = importFixtureFolder('unitConstraints');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(2);
    const ns = expectAndGetNamespaceByName(namespaces, 'shr.test');
    const entry = expectAndGetEntry(ns, 1, 'UnitConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a unit constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Volume');
    expect(entry.value.constraints).to.have.length(2);
    expect(entry.value.constraints[0]).to.be.instanceof(ChildCardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(1);
    expect(entry.value.constraints[1]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[1].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'UnitOfMeasure'), id('shr.core', 'Coding')]);
    expectConcept(entry.value.constraints[1].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import a group with a unit constraint on a field', () => {
    const {namespaces, errors} = importFixtureFolder('unitConstraints');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(2);
    const ns = expectAndGetNamespaceByName(namespaces, 'shr.test');
    const group = expectAndGetEntry(ns, 2, 'UnitConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a unit constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.core', 'Quantity', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core','UnitOfMeasure'), id('shr.core','Coding')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import a group with a unit constraint on a field\'s child', () => {
    const {namespaces, errors} = importFixtureFolder('unitConstraints');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(2);
    const ns = expectAndGetNamespaceByName(namespaces, 'shr.test');
    const group = expectAndGetEntry(ns, 3, 'UnitConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with unit constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Volume', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(2);
    expect(el.constraints[0]).to.be.instanceof(ChildCardConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core','Quantity')]);
    expect(el.constraints[0].card.min).to.equal(1);
    expect(el.constraints[0].card.max).to.equal(1);
    expect(el.constraints[1]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[1].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'UnitOfMeasure'), id('shr.core', 'Coding')]);
    expectConcept(el.constraints[1].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import an entry based on an element and specializing the value', () => {
    const {namespaces, errors} = importFixture('TypeConstraintOnValue');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const basedOn = expectAndGetEntry(ns, 0, 'TypeConstraintOnValue');
    expect(basedOn.basedOn).to.have.length(1);
    expect(basedOn.basedOn[0].namespace).to.equal('shr.test');
    expect(basedOn.basedOn[0].name).to.equal('SimpleBase');
    expect(basedOn.description).to.equal('It is a simple element based on SimpleBase and specializing the value');
    expectCardOne(basedOn.value);
    expectValue(basedOn.value, 'shr.test', 'Simple');
    expect(basedOn.value.constraints).to.have.length(1);
    expect(basedOn.value.constraints[0].path).to.be.empty;
    expect(basedOn.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expectIdentifier(basedOn.value.constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import an entry based on an element and specializing the value\'s child', () => {
    const {namespaces, errors} = importFixture('TypeConstraintOnValueChild');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const basedOn = expectAndGetEntry(ns, 0, 'TypeConstraintOnValueChild');
    expect(basedOn.basedOn).to.have.length(1);
    expectIdentifier(basedOn.basedOn[0], 'shr.test', 'ComplexBase');
    expect(basedOn.description).to.equal('It is a simple element based on SimpleBase and specializing the value\'s child');
    expectCardOne(basedOn.value);
    expectValue(basedOn.value, 'shr.test', 'Complex');
    expect(basedOn.value.constraints).to.have.length(2);
    expect(basedOn.value.constraints[0]).to.be.instanceof(ChildCardConstraint);
    expect(basedOn.value.constraints[0].path).to.eql([id('shr.test', 'Simple')]);
    expect(basedOn.value.constraints[0].card.min).to.equal(1);
    expect(basedOn.value.constraints[0].card.max).to.equal(1);
    expect(basedOn.value.constraints[1]).to.be.instanceof(TypeConstraint);
    expect(basedOn.value.constraints[1].path).to.eql([id('shr.test', 'Simple')]);
    expectIdentifier(basedOn.value.constraints[1].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import a group with a type constraint on a field', () => {
    const {namespaces, errors} = importFixture('TypeConstraintOnField');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const group = expectAndGetEntry(ns, 0, 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'shr.test', 'GroupBase');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a type constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expectIdentifier(group.fields[0].constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import a group with a type constraint on a field\'s child', () => {
    const {namespaces, errors} = importFixture('TypeConstraintOnFieldChild');
    expect(errors).is.empty;
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');
    const group = expectAndGetEntry(ns, 0, 'TypeConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a type constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(ChildCardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('shr.test', 'Simple')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(TypeConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('shr.test', 'Simple')]);
    expectIdentifier(cmplx.constraints[1].isA, 'shr.test', 'Simple2');
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
    expectCardOne(basedOn.value);
    expectValue(basedOn.value, 'shr.test', 'Simple');
    expectNoConstraints(basedOn.value);

    // TODO: Actually pull in the fields from the base
  });

  it('should correctly import multiple elements in a single namespace', () => {
    const {namespaces, errors} = importFixture('MultipleElementNamespace');
    expect(errors).is.empty;
    expect(namespaces).to.have.length(1);
    const ns = expectAndGetNamespace(namespaces, 0, 'shr.test');

    const simple = expectAndGetEntry(ns, 0, 'SimpleDate');
    expect(simple.description).to.equal('It is a simple date entry');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'date');
    expectNoConstraints(simple.value);

    const coded = expectAndGetElement(ns, 1, 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
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
    expectCardOne(one.value);
    expectValue(one.value, 'shr.test.two', 'Two');
    expectNoConstraints(one.value);

    const ns2 = expectAndGetNamespace(namespaces, 1, 'shr.test.two');
    expect(ns2.definitions).to.have.length(1);
    const two = expectAndGetEntry(ns2, 0, 'Two');
    expect(two.concepts).to.have.length(1);
    expectConcept(two.concepts[0], 'http://zoo.org', 'bear');
    expect(two.description).to.equal('It is an entry that uses other namespaces too');
    expectCardOne(two.value);
    expectPrimitiveValue(two.value, 'string');
    expectNoConstraints(two.value);

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
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should return errors when there are invalid element references', () => {
    const {namespaces, errors} = importFixture('InvalidElementReference');
    expect(errors).has.length(1);
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid element reference');
    expectCardOne(simple.value);
    expectValue(simple.value, 'shr.test', 'Complex'); // Defaults to current namespace
    expectNoConstraints(simple.value);
  });

  it('should return errors when there are invalid fully qualified element references', () => {
    const {namespaces, errors} = importFixture('InvalidFQElementReference');
    expect(errors).has.length(1);
    const simple = expectAndGetSingleEntry(namespaces, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid fully qualified element reference');
    expectCardOne(simple.value);
    expectValue(simple.value, 'other.ns', 'Complex'); // Defaults to current namespace
    expectNoConstraints(simple.value);
  });

  it('should return errors when there are ambiguous element references', () => {
    const {namespaces, errors} = importFixtureFolder('ambiguousResolution');
    expect(errors).has.length(1);
    const ns1 = expectAndGetNamespace(namespaces, 0, 'shr.test.one');
    expect(ns1.definitions).to.have.length(1);
    const amb = expectAndGetEntry(ns1, 0, 'Ambiguous');
    expect(amb.concepts).to.be.empty;
    expect(amb.description).to.equal('It is an entry that uses an ambiguous reference');
    expectCardOne(amb.value);
    expectValue(amb.value, 'shr.test.two', 'Foo'); // Defaults to first encountered namespace
    expectNoConstraints(amb.value);
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
    expectCardOne(conflicting.value);
    expectPrimitiveValue(conflicting.value, 'string');
    expectNoConstraints(conflicting.value);
  });
});

// Shorthand Identifier constructor for more concise code
function id(namespace, name) {
  return new Identifier(namespace, name);
}

// Shorthand PrimitiveIdentifier constructor for more concise code
function pid(name) {
  return new PrimitiveIdentifier(name);
}

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
