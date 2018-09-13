const fs = require('fs');
const {expect} = require('chai');
const {importFromFilePath, importConfigFromFilePath, importCIMCOREFromFilePath, setLogger} = require('../index');
const {Version, DataElement, Value, RefValue, ChoiceValue, IncompleteValue, Identifier, PrimitiveIdentifier, Cardinality, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, CardConstraint, TBD, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE} = require('shr-models');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

describe('#importFromFilePath()', () => {
  beforeEach(function() {
    err.clear();
  });

  it('should correctly import a namespace definition', () => {
    const specifications = importFixture('Simple');
    const ns = specifications.namespaces.find('shr.test');
    expect(ns.namespace).to.equal('shr.test');
    expect(ns.description).to.equal('The SHR test namespace');
  });

  it('should correctly import a simple entry', () => {
    const specifications = importFixture('Simple');
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.grammarVersion).to.eql(new Version(5, 0));
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expect(simple.isAbstract).to.be.false;
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a simple element', () => {
    const specifications = importFixture('SimpleElement');
    const simple = expectAndGetElement(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a simple abstract element', () => {
    const specifications = importFixture('SimpleAbstractElement');
    const simple = expectAndGetElement(specifications, 'shr.test', 'Simple');
    expect(simple.isAbstract).to.be.true;
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a coded entry', () => {
    const specifications = importFixture('Coded');
    const coded = expectAndGetEntry(specifications, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expectNoConstraints(coded.value);
  });

  it('should correctly import an entry with a code from a valueset', () => {
    const specifications = importFixture('CodedFromValueSet');
    const coded = expectAndGetEntry(specifications, 'shr.test', 'CodedFromValueSet');
    expect(coded.description).to.equal('It is a coded entry');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('should correctly import an entry with a code from a valueset using a path', () => {
    const specifications = importFixture('CodedFromPathValueSet');
    const coded = expectAndGetEntry(specifications, 'shr.test', 'CodedFromPathValueSet');
    expect(coded.description).to.equal('It is a coded entry that uses a valueset with a path');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('should correctly import an entry with a Coding from a valueset', () => {
    const specifications = importFixtureFolder('codingFromValueSet');
    const codingFromVS = expectAndGetEntry(specifications, 'shr.test', 'CodingFromValueSet');
    expect(codingFromVS.description).to.equal('It is a coded entry with Coding');
    expectCardOne(codingFromVS.value);
    expectValue(codingFromVS.value, 'shr.core', 'Coding');
    expect(codingFromVS.value.constraints).to.have.length(1);
    expect(codingFromVS.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(codingFromVS.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(codingFromVS.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('should correctly import an entry with a CodeableConcept from a valueset', () => {
    const specifications = importFixtureFolder('codeableConceptFromValueSet');
    const codingFromVS = expectAndGetEntry(specifications, 'shr.test', 'CodeableConceptFromValueSet');
    expect(codingFromVS.description).to.equal('It is a coded entry with CodeableConcept');
    expectCardOne(codingFromVS.value);
    expectValue(codingFromVS.value, 'shr.core', 'CodeableConcept');
    expect(codingFromVS.value.constraints).to.have.length(1);
    expect(codingFromVS.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(codingFromVS.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(codingFromVS.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('should correctly import a reference to simple element', () => {
    const specifications = importFixture('SimpleReference');
    const simple = expectAndGetEntry(specifications, 'shr.test', 'SimpleReference');
    expect(simple.description).to.equal('It is a reference to a simple element');
    expectCardOne(simple.value);
    expectRefValue(simple.value, 'shr.test', 'Simple');
    expectNoConstraints(simple.value);
  });

  it('should correctly import an entry with a list value', () => {
    const specifications = importFixture('MultiString');
    const simple = expectAndGetEntry(specifications, 'shr.test', 'MultiString');
    expect(simple.description).to.equal('It is a multi-string entry');
    expectMinMax(simple.value, 1);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should correctly import a choice entry', () => {
    const specifications = importFixtureFolder('choice');
    const choice = expectAndGetEntry(specifications, 'shr.test', 'Choice');
    expect(choice.description).to.equal('It is an entry with a choice');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 3);
    expectChoiceOption(choice.value, 0, 'primitive', 'date');
    expectChoiceOption(choice.value, 1, 'other.ns', 'Period');
    expectChoiceOption(choice.value, 2, 'shr.test', 'Simple');
    expectNoConstraints(choice.value);
    expectNoConstraints(choice.value.options);
  });

  it('should correctly import a group entry with a code value', () => {
    const specifications = importFixtureFolder('group');
    const group = expectAndGetEntry(specifications,'shr.test', 'SimpleGroup');
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
    const specifications = importFixtureFolder('groupElement');
    const group = expectAndGetElement(specifications, 'shr.test', 'SimpleGroup');
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

  it('should correctly import a special entry', () => {
    const specifications = importFixture('SpecialWordsElement');
    const parent = expectAndGetEntry(specifications, 'shr.test', 'SpecialParent');
    expect(parent.grammarVersion).to.eql(new Version(5, 1));
    expectMinMax(parent.value, 0, 1);
    expectPrimitiveValue(parent.value, 'string');
    const child = expectAndGetEntry(specifications, 'shr.test', 'SpecialChild');
    expect(child.basedOn).to.have.length(1);
    expect(child.basedOn[0].namespace).to.equal('shr.test');
    expect(child.basedOn[0].name).to.equal('SpecialParent');
    // The _Value identifier is set as the value. Do I love this? No. But that's
    // how it already worked -- probably to avoid having to resolve the value
    // (and leave it to shr-expand to do that work).
    expect(child.value.identifier.isValueKeyWord).to.be.true;
    expectMinMax(child.value, 1, 1);
    expect(child.fields).to.have.length(1);
    expectField(child, 0, '', '_Entry', 1, 1);
    expect(child.fields[0].constraints).to.have.length(1);
    expect(child.fields[0].constraints[0]).to.be.instanceof(CardConstraint);
    expect(child.fields[0].constraints[0].path).to.eql([id('shr.core', 'Version')]);
    expect(child.fields[0].constraints[0].card.min).to.equal(0);
    expect(child.fields[0].constraints[0].card.max).to.equal(0);
  });

  // Constraints

  it('should correctly import an entry with a valueset constraint on the value', () => {
    const specifications = importFixture('VSConstraintOnValue');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    const cst = entry.value.constraints[0];
    expect(cst).to.be.instanceof(ValueSetConstraint);
    expect(cst.path).to.be.empty;
    expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(cst.bindingStrength).to.equal(REQUIRED);
  });

  it('should correctly import an entry with a valueset constraint on the value\'s child', () => {
    const specifications = importFixture('VSConstraintOnValueChild');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Complex');
    expect(entry.value.constraints).to.have.length(2);
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    expect(entry.value.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[1].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(entry.value.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(entry.value.constraints[1].bindingStrength).to.equal(REQUIRED);
    expect(entry.fields).to.be.empty;
  });

  it('should correctly import a group with a valueset constraint on a field', () => {
    const specifications = importFixture('VSConstraintOnField');
    const group = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnField');
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
    expect(cmplx.constraints[0].path).to.be.empty;
    expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(cmplx.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('should correctly import a group with a valueset constraint on a field\'s child', () => {
    const specifications = importFixture('VSConstraintOnFieldChild');
    const group = expectAndGetEntry(specifications, 'shr.test', 'VSConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a valueset constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('shr.test', 'CodedFromValueSet')]);
    expect(cmplx.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
    expect(cmplx.constraints[1].bindingStrength).to.equal(REQUIRED);
  });

  it('should correctly import entries with valueset constraints on value with a binding strength', () => {
    const specifications = importFixture('VSConstraintOnValueWithBindingStrength');
    const answerKey = {
      'RequiredVSConstraintOnValue': REQUIRED,
      'ExtensibleVSConstraintOnValue': EXTENSIBLE,
      'PreferredVSConstraintOnValue': PREFERRED,
      'ExampleVSConstraintOnValue': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetEntry(specifications, 'shr.test', testCase);
      expectCardOne(entry.value);
      expectPrimitiveValue(entry.value, 'code');
      expect(entry.value.constraints).to.have.length(1);
      let cst = entry.value.constraints[0];
      expect(cst).to.be.instanceof(ValueSetConstraint);
      expect(cst.path).to.eql([]);
      expect(cst.valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
      expect(cst.bindingStrength).to.equal(answerKey[testCase]);
    }
  });

  it('should correctly import entries with a valueset constraint on a field with a binding strength', () => {
    const specifications = importFixture('VSConstraintOnFieldWithBindingStrength');
    const answerKey = {
      'RequiredVSConstraintOnField': REQUIRED,
      'ExtensibleVSConstraintOnField': EXTENSIBLE,
      'PreferredVSConstraintOnField': PREFERRED,
      'ExampleVSConstraintOnField': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetEntry(specifications, 'shr.test', testCase);
      expect(entry.value).to.be.undefined;
      expect(entry.fields).to.have.length(1);
      expectField(entry, 0, 'shr.test', 'CodedThing', 0, 1);
      const cmplx = entry.fields[0];
      expect(cmplx.constraints).to.have.length(1);
      expect(cmplx.constraints[0]).to.be.instanceof(ValueSetConstraint);
      expect(cmplx.constraints[0].path).to.be.empty;
      expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
      expect(cmplx.constraints[0].bindingStrength).to.equal(answerKey[testCase]);
    }
  });

  it('should correctly import an entry with a valueset constraint on the Value keyword', () => {
    const specifications = importFixture('VSConstraintOnValueKeyWord');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ChildElement');
    expect(entry.description).to.be.undefined;
    expect(entry.value.card).to.be.undefined;
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expect(entry.value.identifier.isValueKeyWord).to.be.true;
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(entry.value.constraints[0].bindingStrength).to.equal(REQUIRED);
    expect(entry.fields).to.be.empty;
  });

  it('should correctly import an entry with a code constraint on the value', () => {
    const specifications = importFixtureFolder('codeConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a code constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Coding');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with a code constraint on the value\'s child', () => {
    const specifications = importFixtureFolder('codeConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a code constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Coding')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with a code constraint on the Value keyword', () => {
    const specifications = importFixture('CodeConstraintOnValueKeyWord');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ChildElement');
    expect(entry.description).to.be.undefined;
    expect(entry.value.card).to.be.undefined;
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expect(entry.value.identifier.isValueKeyWord).to.be.true;
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    expect(entry.fields).to.be.empty;
  });

  it('should correctly import a group with a code constraint on a field', () => {
    const specifications = importFixtureFolder('codeConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnField');
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
    const specifications = importFixtureFolder('codeConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'CodeConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a code constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core','Coding')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with a system-less code constraint on the value', () => {
    const specifications = importFixtureFolder('codeConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'SystemlessCodeConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a system-less code constraint on the value');
    expect(entry.basedOn).to.have.length(1);
    expect(entry.basedOn[0].namespace).to.equal('shr.test');
    expect(entry.basedOn[0].name).to.equal('CodedFromValueSet');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Coding');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, null, 'bar');
  });

  // NOTE: Quantity with unit constraints are just syntactic sugar for a code constraint!
  it('should correctly import an entry with a unit constraint on the value', () => {
    const specifications = importFixtureFolder('unitConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a unit constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.core', 'Quantity');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','Coding')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import an entry with a unit constraint on the value\'s child', () => {
    const specifications = importFixtureFolder('unitConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a unit constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Volume');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'Coding')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import a group with a unit constraint on a field', () => {
    const specifications = importFixtureFolder('unitConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnField');
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
    expect(el.constraints[0].path).to.eql([id('shr.core','Units'), id('shr.core','Coding')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import a group with a unit constraint on a field\'s child', () => {
    const specifications = importFixtureFolder('unitConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'UnitConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with unit constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Volume', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core', 'Quantity'), id('shr.core', 'Units'), id('shr.core', 'Coding')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });

  it('should correctly import an entry with an includes code constraint on the value', () => {
    const specifications = importFixtureFolder('includesCodeConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with an includes code constraint on the value');
    expectMinMax(entry.value, 1);
    expectValue(entry.value, 'shr.core', 'Coding');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with an includes code constraint (using CodeableConcept) on the value', () => {
    const specifications = importFixtureFolder('includesCodeConstraintsUsingCodeableConcept');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with an includes code constraint on the value');
    expectMinMax(entry.value, 1);
    expectValue(entry.value, 'shr.core', 'CodeableConcept');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with an includes code constraint on the value\'s child', () => {
    const specifications = importFixtureFolder('includesCodeConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with an includes code constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'MultiCodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id('shr.core','Coding')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import a group with an includes code constraint on a field', () => {
    const specifications = importFixtureFolder('includesCodeConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with an includes code constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, 'shr.core', 'Coding', 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import a group with an includes code constraint on a field\'s child', () => {
    const specifications = importFixtureFolder('includesCodeConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'IncludesCodeConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with an includes code constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'MultiCodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[0].path).to.eql([id('shr.core','Coding')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('should correctly import an entry with a boolean constraint on the value', () => {
    const specifications = importFixture('BooleanConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a boolean constraint on the value');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].value).to.be.true;
  });

  it('should correctly import an entry with a boolean constraint on the value\'s child', () => {
    const specifications = importFixture('BooleanConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a boolean constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'SimpleBoolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('boolean')]);
    expect(entry.value.constraints[0].value).to.be.false;
  });

  it('should correctly import a group with a boolean constraint on a field\'s child', () => {
    const specifications = importFixture('BooleanConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'BooleanConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a boolean constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'SimpleBoolean', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(el.constraints[0].path).to.eql([pid('boolean')]);
    expect(el.constraints[0].value).to.be.true;
  });

  it('should correctly import an entry based on an element and specializing the value', () => {
    const specifications = importFixture('TypeConstraints');
    const basedOn = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnValue');
    expect(basedOn.basedOn).to.have.length(1);
    expect(basedOn.basedOn[0].namespace).to.equal('shr.test');
    expect(basedOn.basedOn[0].name).to.equal('SimpleBase');
    expect(basedOn.description).to.equal('It is a simple element based on SimpleBase and specializing the value');
    expectCardOne(basedOn.value);
    expectValue(basedOn.value, 'shr.test', 'Simple');
    expect(basedOn.value.constraints).to.have.length(1);
    expect(basedOn.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(basedOn.value.constraints[0].path).to.be.empty;
    expect(basedOn.value.constraints[0].onValue).to.be.false;
    expectIdentifier(basedOn.value.constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import an entry based on an element and specializing the value\'s child', () => {
    const specifications = importFixture('TypeConstraints');
    const basedOn = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnValueChild');
    expect(basedOn.basedOn).to.have.length(1);
    expectIdentifier(basedOn.basedOn[0], 'shr.test', 'ComplexBase');
    expect(basedOn.description).to.equal('It is a simple element based on SimpleBase and specializing the value\'s child');
    expectCardOne(basedOn.value);
    expectValue(basedOn.value, 'shr.test', 'Complex');
    expect(basedOn.value.constraints).to.have.length(2);
    expect(basedOn.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(basedOn.value.constraints[0].path).to.eql([id('shr.test', 'Simple')]);
    expect(basedOn.value.constraints[0].card.min).to.equal(1);
    expect(basedOn.value.constraints[0].card.max).to.equal(1);
    expect(basedOn.value.constraints[1]).to.be.instanceof(TypeConstraint);
    expect(basedOn.value.constraints[1].path).to.eql([id('shr.test', 'Simple')]);
    expect(basedOn.value.constraints[1].onValue).to.be.false;
    expectIdentifier(basedOn.value.constraints[1].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import a group with a type constraint on a field', () => {
    const specifications = importFixture('TypeConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'shr.test', 'GroupBase');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a type constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'Simple');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import a group with a type constraint on a field\'s child', () => {
    const specifications = importFixture('TypeConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a type constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id('shr.test', 'Simple')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(TypeConstraint);
    expect(cmplx.constraints[1].path).to.eql([id('shr.test', 'Simple')]);
    expect(cmplx.constraints[1].onValue).to.be.false;
    expectIdentifier(cmplx.constraints[1].isA, 'shr.test', 'Simple2');
  });

  it('should correctly import a group with a type constraint on a field\'s value', () => {
    const specifications = importFixture('TypeConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'TypeConstraintOnFieldValue');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], 'shr.test', 'Group2');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a type constraint on a field\'s value');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'shr.test', 'HasSimpleValue');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.true;
    expectIdentifier(group.fields[0].constraints[0].isA, 'shr.test', 'Simple2');
  });

  // Type constraints on choices

  it('should correctly import an entry with a value type constraint (to primitive) on a choice field', () => {
    const specifications = importFixture('ChoiceTypeConstraints');
    const primType = expectAndGetEntry(specifications, 'shr.test', 'PrimitiveTypeConstraintOnField');
    expect(primType.basedOn).to.have.length(1);
    expectIdentifier(primType.basedOn[0], 'shr.test', 'ThingWithChoiceField');
    expect(primType.concepts).to.be.empty;
    expect(primType.description).to.be.undefined;
    expect(primType.value).to.be.undefined;
    expect(primType.fields).to.have.length(1);
    expectField(primType, 0, 'shr.test', 'ChoiceOfDatishThings');
    expect(primType.fields[0].constraints).to.have.length(1);
    expect(primType.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(primType.fields[0].constraints[0].path).to.be.empty;
    expect(primType.fields[0].constraints[0].onValue).to.be.true;
    expectPrimitiveIdentifier(primType.fields[0].constraints[0].isA, 'dateTime');
  });

  it('should correctly import an entry with a value type constraint (to non-primitive) on a choice field', () => {
    const specifications = importFixture('ChoiceTypeConstraints');
    const primType = expectAndGetEntry(specifications, 'shr.test', 'NonPrimitiveTypeConstraintOnField');
    expect(primType.basedOn).to.have.length(1);
    expectIdentifier(primType.basedOn[0], 'shr.test', 'ThingWithChoiceField');
    expect(primType.concepts).to.be.empty;
    expect(primType.description).to.be.undefined;
    expect(primType.value).to.be.undefined;
    expect(primType.fields).to.have.length(1);
    expectField(primType, 0, 'shr.test', 'ChoiceOfDatishThings');
    expect(primType.fields[0].constraints).to.have.length(1);
    expect(primType.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(primType.fields[0].constraints[0].path).to.be.empty;
    expect(primType.fields[0].constraints[0].onValue).to.be.true;
    expectIdentifier(primType.fields[0].constraints[0].isA, 'shr.test', 'StringishDateTime');
  });





  it('should correctly import an entry with a card constraint on the value\'s child', () => {
    const specifications = importFixture('CardConstraints');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'CardConstraintOnValueChild');
    expect(entry.description).to.equal('It is an entry with a card constraint on the value\'s child');
    expectCardOne(entry.value);
    expectValue(entry.value, 'shr.test', 'Simple');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('string')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
  });

  it('should correctly import a group with a card constraint on a field\'s child', () => {
    const specifications = importFixture('CardConstraints');
    const group = expectAndGetEntry(specifications, 'shr.test', 'CardConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a card constraint on a field\'s child');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, 'shr.test', 'Simple', 0, 1);
    expectField(group, 1, 'shr.test', 'Simple2', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CardConstraint);
    expect(el.constraints[0].path).to.eql([pid('string')]);
    expect(el.constraints[0].card.min).to.equal(1);
    expect(el.constraints[0].card.max).to.equal(2);
  });

  it('should correctly import an entry based on an element', () => {
    const specifications = importFixture('BasedOn');
    const basedOn = expectAndGetEntry(specifications, 'shr.test', 'SimpleBasedOn');
    expect(basedOn.basedOn).to.have.length(1);
    expect(basedOn.basedOn[0].namespace).to.equal('shr.test');
    expect(basedOn.basedOn[0].name).to.equal('SimpleBase');
    expect(basedOn.concepts).to.have.length(1);
    expectConcept(basedOn.concepts[0], 'http://foo.org', 'bar');
    expect(basedOn.description).to.equal('It is a simple definition based on SimpleBase');
    expectCardOne(basedOn.value);
    expectValue(basedOn.value, 'shr.test', 'Simple');
    expectNoConstraints(basedOn.value);
  });

  it('should correctly import an entry based on a TBD', () => {
    const specifications = importFixture('BasedOnTBD');
    const basedOn = expectAndGetEntry(specifications, 'shr.test', 'BasedOnTBD');
    expect(basedOn.basedOn).to.have.length(1);
    expect(basedOn.basedOn[0]).to.be.instanceOf(TBD);
    expect(basedOn.basedOn[0].text).to.equal('BaseToBeDetermined');
    expect(basedOn.concepts).to.have.length(1);
    expectConcept(basedOn.concepts[0], 'http://foo.org', 'bar');
    expect(basedOn.description).to.equal('It is a simple definition based on TBD BaseToBeDetermined');
    expectCardOne(basedOn.value);
    expectPrimitiveValue(basedOn.value, 'string');
    expectNoConstraints(basedOn.value);
  });

  it('should correctly import an entry with a zeroed out Value', () => {
    const specifications = importFixture('ZeroedOutValue');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ZeroedOutValue');
    expect(entry.basedOn).to.have.length(1);
    expect(entry.basedOn[0].namespace).to.equal('shr.test');
    expect(entry.basedOn[0].name).to.equal('OptionalValue');
    expect(entry.concepts).to.be.empty;
    expect(entry.description).to.be.empty;
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expect(entry.value.identifier.isValueKeyWord).to.be.true;
    expectMinMax(entry.value, 0, 0);
    expectNoConstraints(entry.value);
  });

  it('should correctly import an entry with a zeroed out Value (backwards compatible version)', () => {
    const specifications = importFixture('ZeroedOutValue');
    const entry = expectAndGetEntry(specifications, 'shr.test', 'ZeroedOutValueBackwardsCompatibility');
    expect(entry.basedOn).to.have.length(1);
    expect(entry.basedOn[0].namespace).to.equal('shr.test');
    expect(entry.basedOn[0].name).to.equal('OptionalValue');
    expect(entry.concepts).to.be.empty;
    expect(entry.description).to.be.empty;
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expect(entry.value.identifier.isValueKeyWord).to.be.true;
    // Check to be sure it converted it to the special word form
    expect(entry.value.identifier.name).to.equal('_Value');
    expectMinMax(entry.value, 0, 0);
    expectNoConstraints(entry.value);
  });

  it('should correctly import multiple elements in a single namespace', () => {
    const specifications = importFixture('MultipleElementNamespace');
    const simple = expectAndGetEntry(specifications, 'shr.test', 'SimpleDate');
    expect(simple.description).to.equal('It is a simple date entry');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'date');
    expectNoConstraints(simple.value);

    const coded = expectAndGetElement(specifications, 'shr.test', 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'code');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('should correctly resolve URL, URN, and URN OID vocabularies', () => {
    const specifications = importFixture('Vocabularies');
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expectConcept(simple.concepts[1], 'urn:iso:std:iso:4217', 'baz', 'Foobaz');
    expectConcept(simple.concepts[2], 'urn:oid:2.16.840.1.114222.4.11.826', 'bam', 'Foobam');
  });

  it('should correctly resolve elements and vocabularies from other namespaces', () => {
    const specifications = importFixtureFolder('uses');
    const one = expectAndGetEntry(specifications, 'shr.test.one', 'One');
    expect(one.concepts).to.have.length(2);
    expectConcept(one.concepts[0], 'http://foo.org', 'bar');
    expectConcept(one.concepts[1], 'http://moo.org', 'car');
    expect(one.description).to.equal('It is an entry that uses other namespaces');
    expectCardOne(one.value);
    expectValue(one.value, 'shr.test.two', 'Two');
    expectNoConstraints(one.value);

    const two = expectAndGetEntry(specifications, 'shr.test.two', 'Two');
    expect(two.concepts).to.have.length(1);
    expectConcept(two.concepts[0], 'http://zoo.org', 'bear');
    expect(two.description).to.equal('It is an entry that uses other namespaces too');
    expectCardOne(two.value);
    expectPrimitiveValue(two.value, 'string');
    expectNoConstraints(two.value);

    expect(specifications.dataElements.namespaces).not.to.contain('shr.test.three');
  });

  it('should return errors when there are invalid vocabulary references', () => {
    const specifications = importFixture('InvalidVocabularyReference', 1);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'ZOO', 'bear'); // Defaults to vocabulary alias
    expect(simple.description).to.equal('It is a simple entry with invalid vocab');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('should return errors when there are invalid element references', () => {
    const specifications = importFixture('InvalidElementReference', 1);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid element reference');
    expectCardOne(simple.value);
    expectValue(simple.value, 'unknown', 'Complex');
    expectNoConstraints(simple.value);
  });

  it('should return errors when there are invalid fully qualified element references', () => {
    const specifications = importFixture('InvalidFQElementReference', 1);
    const simple = expectAndGetEntry(specifications, 'shr.test', 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple entry with invalid fully qualified element reference');
    expectCardOne(simple.value);
    expectValue(simple.value, 'other.ns', 'Complex');
    expectNoConstraints(simple.value);
  });

  it('should return errors when there are ambiguous element references', () => {
    const specifications = importFixtureFolder('ambiguousResolution', 1);
    const amb = expectAndGetEntry(specifications, 'shr.test.one', 'Ambiguous');
    expect(amb.concepts).to.be.empty;
    expect(amb.description).to.equal('It is an entry that uses an ambiguous reference');
    expectCardOne(amb.value);
    expectValue(amb.value, 'shr.test.two', 'Foo'); // Defaults to first encountered namespace
    expectNoConstraints(amb.value);
  });

  it('should return errors when there are conflicting vocab references', () => {
    const specifications = importFixtureFolder('conflictingVocab', 1);
    expect(err.errors()[0].msg).to.contain('FOO');
    expect(err.errors()[0].msg).to.not.contain('MOO');

    const conflicting = expectAndGetEntry(specifications, 'shr.test.one', 'Conflicting');
    expect(conflicting.concepts).to.have.length(2);
    expectConcept(conflicting.concepts[0], 'http://foo.org', 'bar'); // Default to the first encountered vocab
    expectConcept(conflicting.concepts[1], 'http://moo.org', 'car');
    expect(conflicting.description).to.equal('It is an entry that uses a conflicting vocab reference');
    expectCardOne(conflicting.value);
    expectPrimitiveValue(conflicting.value, 'string');
    expectNoConstraints(conflicting.value);
  });
});

describe('#importConfigFromFilePath', () => {
  beforeEach(function() {
    err.clear();
  });

  it('should correctly import a basic configuration', () => {
    const configuration = importConfiguration('basicconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide.indexContent).to.eql('basicindexcontent.html');
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.be.of.length(1);
    expect(configuration.contact[0]).to.eql({
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    });
  });

  it('should correctly generate missing fhir url from project url when fhir url is missing', () => {
    const configuration = importConfiguration('incompletefhirconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide.indexContent).to.eql('basicindexcontent.html');
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.be.of.length(1);
    expect(configuration.contact[0]).to.eql({
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    });

  });

  it('should correctly import an incomplete configuration with partial default data', () => {
    const configuration = importConfiguration('incompleteconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('EXAMPLE');
    expect(configuration.projectURL).to.eql('http://example.com');
    expect(configuration.fhirURL).to.eql('http://example.com/fhir');
    expect(configuration.implementationGuide.indexContent).to.eql('exampleIndexContent.html');
    expect(configuration.publisher).to.eql('Example Publisher');
    expect(configuration.contact).to.be.of.length(1);
    expect(configuration.contact[0]).to.eql({
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    });
  });


  it('should correctly throw error when file is not valid JSON', () => {
    const configuration = importConfiguration('invalidblankconfig', 1);
    expect(err.errors()[0].msg).to.contain('Invalid config file');
    expect(configuration).to.be.undefined;
  });

  it('should correctly create default configuration as config.json when no file exists', () => {
    // First ensure config.json doesn't exist (from previous run)
    const cfgPath = `${__dirname}/fixtures/config/emptyfolder/config.json`;
    if (fs.existsSync(cfgPath)) {
      fs.unlinkSync(cfgPath);
    }
    const configuration = importConfigurationFolder('emptyfolder');
    expect(fs.existsSync(cfgPath)).to.be.true;
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Example Project');
    expect(configuration.projectShorthand).to.eql('EXAMPLE');
    expect(configuration.projectURL).to.eql('http://example.com');
    expect(configuration.fhirURL).to.eql('http://example.com/fhir');
    expect(configuration.implementationGuide.indexContent).to.eql('exampleIndexContent.html');
    expect(configuration.publisher).to.eql('Example Publisher');
    expect(configuration.contact).to.be.of.length(1);
    expect(configuration.contact[0]).to.eql({
      'telecom': [{
        'system': 'url',
        'value': 'http://example.com'
      }]
    });
  });
});

describe('#importCimcoreFromFilePath', () => {
  it('should be able to correctly import specifications instance and then export to identical cimcore', () => {
    const [importedConfigSpecifications, importedSpecifications] = importCimcoreFolder();

    //This is the cimcore produced from importedSpecs. Used for verifying fidelity
    const cimcoreSpecifications = convertSpecsToCimcore(importedConfigSpecifications, importedSpecifications);

    //All CIMCORE files are verified through string comparison. This is perhaps not ideal as they can still be
    //valid files if the same elemenets are outputted in a different order. However, this should not be a problem
    //for now, as the process that produced the original fixtures and the process that produces the unit test are
    //identical in their ordering of outputs. This change should be a considered update in the future.

    const origProjectJSON = importCimcoreProjectFile();
    expect(JSON.stringify(cimcoreSpecifications.projectInfo, null, 2)).to.eql(origProjectJSON);

    //meta namespace files
    for (const ns in cimcoreSpecifications.namespaces) { //namespace files
      const origNsJSON = importCimcoreNSFile(ns);
      expect(JSON.stringify(cimcoreSpecifications.namespaces[ns], null, 2)).to.eql(origNsJSON);
    }

    //data elements
    for (const de of cimcoreSpecifications.dataElements) { //namespace files
      const origDeJSON = importCimcoreDEFile(de.namespace, de.name);
      expect(JSON.stringify(de, null, 2)).to.eql(origDeJSON);
    }

    //valuesets
    for (const vs of cimcoreSpecifications.valueSets) {
      const origVsJSON = importCimcoreVSFile(vs.namespace, vs.name);
      expect(JSON.stringify(vs, null, 2)).to.eql(origVsJSON);
    }

    //mappings
    for (const mapping of [...cimcoreSpecifications.mappings]) {
      const origMapJSON = importCimcoreMapFile(mapping.namespace, mapping.name);
      expect(JSON.stringify(mapping, null, 2)).to.eql(origMapJSON);
    }

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

function expectAndGetElement(specs, expectedNamespace, expectedName) {
  return expectAndGetDataElement(specs, expectedNamespace, expectedName, false);
}

function expectAndGetEntry(specs, expectedNamespace, expectedName) {
  return expectAndGetDataElement(specs, expectedNamespace, expectedName, true);
}

function expectAndGetDataElement(specs, expectedNamespace, expectedName, isEntry) {
  const def = specs.dataElements.find(expectedNamespace, expectedName);
  expect(def).to.be.instanceof(DataElement);
  expect(def.isEntry).to.equal(isEntry);
  expectIdentifier(def.identifier, expectedNamespace, expectedName);
  return def;
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
  if (typeof expectedMin !== 'undefined') {
    expect(card).to.be.instanceof(Cardinality);
    expect(card.min).to.equal(expectedMin);
    if (typeof card.max != 'undefined') {
      expect(card.max).to.equal(expectedMax);
      expect(card.isMaxUnbounded).to.be.false;
    } else {
      expect(card.max).to.be.undefined;
      expect(card.isMaxUnbounded).to.be.true;
    }
  } else {
    expect(card).to.be.undefined;
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

function importFixture(name, numExpectedErrors = 0) {
  const dependencies = importFromFilePath(`${__dirname}/fixtures/dataElement/_dependencies`);
  const specifications = importFromFilePath(`${__dirname}/fixtures/dataElement/${name}.txt`, null, dependencies);
  checkImportErrors(numExpectedErrors);
  return specifications;
}

function importFixtureFolder(name, numExpectedErrors = 0) {
  const dependencies = importFromFilePath(`${__dirname}/fixtures/dataElement/_dependencies`);
  const specifications = importFromFilePath(`${__dirname}/fixtures/dataElement/${name}`, null, dependencies);
  checkImportErrors(numExpectedErrors);
  return specifications;
}

function importConfiguration(name, numExpectedErrors = 0) {
  const configuration = importConfigFromFilePath(`${__dirname}/fixtures/config/${name}.txt`);
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importConfigurationFolder(name, numExpectedErrors = 0) {
  const configuration = importConfigFromFilePath(`${__dirname}/fixtures/config/${name}`);
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importCimcoreNSFile(namespace, numExpectedErrors = 0) {
  namespace = namespace.replace(/\./g,'-');
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/${namespace}/${namespace}.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importCimcoreDEFile(namespace, name, numExpectedErrors = 0) {
  namespace = namespace.replace(/\./g,'-');
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/${namespace}/${namespace}-${name}.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importCimcoreVSFile(namespace, name, numExpectedErrors = 0) {
  namespace = namespace.replace(/\./g,'-');
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/${namespace}/valuesets/${name}.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importCimcoreMapFile(namespace, name, numExpectedErrors = 0) {
  namespace = namespace.replace(/\./g,'-');
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/${namespace}/mappings/${name}-mapping.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;

}

function importCimcoreProjectFile(numExpectedErrors = 0) {
  const configuration = fs.readFileSync(`${__dirname}/fixtures/cimcore/project.json`, 'utf8');
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function importCimcoreFolder(numExpectedErrors = 0) {
  const configuration = importCIMCOREFromFilePath(`${__dirname}/fixtures/cimcore/`);
  checkImportErrors(numExpectedErrors);
  return configuration;
}

function checkImportErrors(numExpectedErrors = 0) {
  const errors = err.errors();
  const message = `Import Errors: ${errors.map(e => e.msg).join('; ')}`;
  expect(errors.length, message).to.equal(numExpectedErrors);
}

//THIS IS A HORRIBLE HACK. THIS AND THE CORRESPONDING SECTION IN shr-cli SHOULD
//BE REPLACED WITH A STANDARD shr-model METHOD AS SOON AS WE REFACTOR shr-models.
function convertSpecsToCimcore(configSpecifications, expSpecifications) {
  const cimcoreSpecifications = {
    'dataElements': [],
    'valueSets': [],
    'mappings': [],
    'namespaces': {},
  //also includes 'projectInfo'
  };

  //meta project file
  let versionInfo = {
    'CIMPL_version': '5.6.0',   //TODO: Update these to use an accurate constant. Current mode constant is on 4.0.0
    'CIMCORE_version': '1.1'    //TODO: Update these to use an accurate constant. Current mode constant is on 4.0.0
  };

  let projectMetaOutput = Object.assign({ 'fileType': 'ProjectInfo' }, configSpecifications, versionInfo); //project meta information
  cimcoreSpecifications['projectInfo'] = projectMetaOutput;

  //meta namespace files
  for (const ns of expSpecifications.namespaces.all) { //namespace files
    let out = Object.assign({ 'fileType': 'Namespace' }, ns.toJSON());
    cimcoreSpecifications.namespaces[ns.namespace] = out;
  }

  //data elements
  for (const de of expSpecifications.dataElements.all) {
    let out = Object.assign({ 'fileType': 'DataElement' }, de.toJSON());
    cimcoreSpecifications.dataElements.push(out);
  }

  //valuesets
  for (const vs of expSpecifications.valueSets.all) {
    let out = Object.assign({ 'fileType': 'ValueSet' }, vs.toJSON());
    cimcoreSpecifications.valueSets.push(out);
  }

  //mappings
  for (const mapping of [...expSpecifications.maps._targetMap][0][1].all) {
    let out = Object.assign({ 'fileType': 'Mapping' }, mapping.toJSON());
    cimcoreSpecifications.mappings.push(out);
  }

  return cimcoreSpecifications;
}
