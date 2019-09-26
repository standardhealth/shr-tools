const {expect} = require('chai');
const {setLogger} = require('../index');
const {id, pid, expectAndGetElement, expectAndGetEntry, expectAndGetAbstract, expectAndGetGroup, expectValue, expectPrimitiveValue, expectChoiceValue, expectCardOne, expectChoiceOption, expectField, expectConcept, expectIdentifier, expectPrimitiveIdentifier, expectNoConstraints, importFixture, importFixtureFolder } = require('../test/import-helper');
const {Version, IncompleteValue, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, FixedValueConstraint, TypeConstraint, SubsetConstraint, CardConstraint, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE} = require('shr-models');
const err = require('shr-test-helpers/errors');
const errorLogger = err.logger();

// Set the logger -- this is needed for detecting and checking errors
setLogger(errorLogger);

//------------------- The Tests -------------------------
const importDir = '/fixtures/dataElement/';

describe('#importDataElement', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Import01: Check reading the header, file = header', () => {
    const file = 'header';
    const specifications = importFixture(file, importDir);
    let ns = specifications.namespaces.find(file);
    expect(ns.namespace).to.equal(file);
    expect(ns.description).to.equal('The SHR test namespace');
  });

  it('Import02: Check reading a simple entry, file = simpleEntry', () => {
    const nspace = 'simpleEntry';
    const specifications = importFixture(nspace, importDir);
    const simple = expectAndGetEntry(specifications, nspace, 'SimpleEntry');
    expect(simple.grammarVersion).to.eql(new Version(6, 0));
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expect(simple.description).to.equal('It is a simple entry');
    expect(simple.isAbstract).to.be.false;
    expect(simple.fields).to.have.length(1);
    expectField(simple, 0, nspace, 'Bar', 0, 1);
  });

  it('Import03: should correctly import a simple element, file = simpleElement', () => {
    const nspace  = 'simpleElement';
    const specifications = importFixture(nspace, importDir);
    const simple = expectAndGetElement(specifications, nspace, 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is a simple element');
    expectCardOne(simple.value);
    expect(simple.isAbstract).to.be.false;
    expectPrimitiveValue(simple.value, 'string');
    expectNoConstraints(simple.value);
  });

  it('Import04: should correctly import a simple abstract element, file = simpleAbstractElement', () => {
    const nspace  = 'simpleAbstractElement';
    const specifications = importFixture(nspace, importDir);
    const simple = expectAndGetAbstract(specifications, nspace, 'Simple');
    expect(simple.concepts).to.have.length(1);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar');
    expect(simple.description).to.equal('It is an abstract entry');
    expect(simple.fields).to.have.length(1);
    expectField(simple, 0, nspace, 'Bar', 0);
  });

  it('Import05: should correctly import an element whose value is a concept, file = coded', () => {
    const nspace  = 'coded';
    const specifications = importFixture(nspace, importDir);
    const coded = expectAndGetElement(specifications, nspace, 'Coded');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expectNoConstraints(coded.value);
  });

  it('Import06: should correctly import an entry with a code from a valueset, file = codedFromValueSet', () => {
    const nspace  = 'codedFromValueSet';
    const specifications = importFixture(nspace, importDir);
    const coded = expectAndGetElement(specifications, nspace, 'CodedFromValueSet');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/shr/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('Import07: should correctly import an entry with a code from a valueset using a path, file = codedFromPathValueSet', () => {
    const nspace  = 'codedFromPathValueSet';
    const specifications = importFixture(nspace, importDir);
    const coded = expectAndGetElement(specifications, nspace, 'CodedFromPathValueSet');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/shr/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });

  it('Import08: should correctly import an entry whose value is an element, file = valueIsElement', () => {
    const nspace  = 'valueIsElement';
    const specifications = importFixture(nspace, importDir);
    const simple = expectAndGetElement(specifications, nspace, 'ValueIsElement');
    expectCardOne(simple.value);
    expectNoConstraints(simple.value);
  });


  it('Import10: should correctly import an entry with multiple properties, file = groupPropertiesOnly', () => {
    const nspace  = 'groupPropertiesOnly';
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetGroup(specifications, nspace, 'GroupPropertiesOnly');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(4);
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectField(group, 1, nspace, 'Coded', 0);
    expectField(group, 2, nspace, 'Simple2', 1);
    expectField(group, 3, nspace, 'Thing', 1, 1);
    expectNoConstraints(group.fields);
  });

// Constraints

  it('Import12: should correctly import an entry with a valueset constraint on the value, file = vSConstraintOnValue', () => {
    const nspace  = 'vSConstraintOnValue';
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'VSConstraintOnValue');
    expect(entry.description).to.equal('It is an entry with a valueset constraint on the value');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    const cst = entry.value.constraints[0];
    expect(cst).to.be.instanceof(ValueSetConstraint);
    expect(cst.path).to.be.empty;
    expect(cst.valueSet).to.equal('http://standardhealthrecord.org/shr/test/vs/Coded2');
    expect(cst.bindingStrength).to.equal(REQUIRED);
  });


  it('Import13: should correctly import an entry with a valueset constraint on the child\'s value, file = vSConstraintOnValueChild', () => {
    const nspace  = 'vSConstraintOnValueChild' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'VSConstraintOnValueChild');
    expectCardOne(entry.value);
    expect(entry.fields).to.be.empty;
    expectValue(entry.value, nspace, 'Complex');
    expect(entry.value.constraints).to.have.length(2);  // failing here
  // constraint[0]: Complex.CodedFromValueSet 1..2
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
    expect(entry.value.constraints[0].path).to.eql([id(nspace, 'CodedFromValueSet')]);
    expect(entry.value.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[1].path).to.eql([id(nspace, 'CodedFromValueSet')]);
    expect(entry.value.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/shr/test/vs/Coded');
    expect(entry.value.constraints[1].bindingStrength).to.equal(REQUIRED);
  });


  it('Import14: should correctly import a group with a valueset constraint on a field, file = vSConstraintOnField', () => {
    const nspace  = 'vSConstraintOnField';
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'VSConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, nspace, 'CodedFromValueSet', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(1);
    expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(cmplx.constraints[0].bindingStrength).to.equal(EXAMPLE);
  });


  it('Import15: should correctly import a group with a valueset constraint on a field\'s child, file = vSConstraintOnFieldChild', () => {
    const nspace  = 'vSConstraintOnFieldChild';
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'VSConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectField(group, 1, nspace, 'Complex', 0, 1);
    const cmplx = group.fields[1];
    expect(cmplx.constraints).to.have.length(2);  // failing here
    expect(cmplx.constraints[0]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[0].path).to.eql([id(nspace, 'CodedFromValueSet')]);
    expect(cmplx.constraints[0].card.min).to.equal(1);
    expect(cmplx.constraints[0].card.max).to.equal(2);
    expect(cmplx.constraints[1]).to.be.instanceof(ValueSetConstraint);
    expect(cmplx.constraints[1].path).to.eql([id(nspace, 'CodedFromValueSet')]);
    expect(cmplx.constraints[1].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded');
    expect(cmplx.constraints[1].bindingStrength).to.equal(REQUIRED);
  });

  it('Import16: should correctly import entries with valueset constraints on value with a binding strength, file = vSConstraintOnValueWithBindingStrength', () => {
    const nspace  = 'vSConstraintOnValueWithBindingStrength' ;
    const specifications = importFixture(nspace, importDir);
    const answerKey = {
      'RequiredVSConstraintOnValue': REQUIRED,
      'ExtensibleVSConstraintOnValue': EXTENSIBLE,
      'PreferredVSConstraintOnValue': PREFERRED,
      'ExampleVSConstraintOnValue': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetElement(specifications, nspace, testCase);
      expectCardOne(entry.value);
      expectPrimitiveValue(entry.value, 'concept');
      expect(entry.value.constraints).to.have.length(1);
      let cst = entry.value.constraints[0];
      expect(cst).to.be.instanceof(ValueSetConstraint);
      expect(cst.path).to.eql([]);
      expect(cst.valueSet).to.equal('http://standardhealthrecord.org/shr/test/vs/Coded');
      expect(cst.bindingStrength).to.equal(answerKey[testCase]);
    }
  });


  it('Import17: should correctly import entries with a valueset constraint on a field with a binding strength, file = vSConstraintOnFieldWithBindingStrength', () => {
    const nspace  = 'vSConstraintOnFieldWithBindingStrength';
    const specifications = importFixture(nspace, importDir);
    const answerKey = {
      'RequiredVSConstraintOnField': REQUIRED,
      'ExtensibleVSConstraintOnField': EXTENSIBLE,
      'PreferredVSConstraintOnField': PREFERRED,
      'ExampleVSConstraintOnField': EXAMPLE
    };
    for (const testCase of Object.keys(answerKey)) {
      const entry = expectAndGetEntry(specifications, nspace, testCase);
      expect(entry.value).to.be.undefined;
      expect(entry.fields).to.have.length(1);  // failing here
      expectField(entry, 0, nspace, 'CodedThing', 0, 1);
      const cmplx = entry.fields[0];
      expect(cmplx.constraints).to.have.length(1);
      expect(cmplx.constraints[0]).to.be.instanceof(ValueSetConstraint);
      expect(cmplx.constraints[0].path).to.be.empty;
      expect(cmplx.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/test/vs/Coded2');
      expect(cmplx.constraints[0].bindingStrength).to.equal(answerKey[testCase]);
    }
  });


  it('Import18: should correctly import an entry with a valueset constraint on inherited value, file = vSConstraintOnValueKeyWord', () => {
    const nspace  = 'vSConstraintOnValueKeyWord' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'ChildElement');
    expect(entry.fields).to.be.empty;
//  console.log("Test 18: entry.value = "+JSON.stringify(entry.value));
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expectCardOne(entry.value);
    expect(entry.value.identifier.isValueKeyWord).to.be.false;
    expectValue(entry.value, nspace, 'CodedElement');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/shr/test/vs/Coded');
    expect(entry.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });


  it('Import19: should correctly import an entry with a code constraint on the value, file = codeConstraintOnValue', () => {
    const nspace  = 'codeConstraintOnValue' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'CodeConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'concept');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });


  it('Import20: should correctly import an entry with a code constraint on the value\'s child, file = codeConstraintOnValueChild', () => {
    const nspace  = 'codeConstraintOnValueChild' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'CodeConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'CodedFromValueSet');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });

  it('Import21: should correctly import an element with a code constraint on the Value keyword, file = codeConstraintOnValueKeyWord', () => {
    const nspace  = 'codeConstraintOnValueKeyWord' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'ChildElement');
    expect(entry.description).to.be.undefined;
    expectCardOne(entry.value);
    expect(entry.value).to.be.instanceof(IncompleteValue);
    expect(entry.value.identifier.isValueKeyWord).to.be.false;
    expectValue(entry.value, nspace, 'CodedElement');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(entry.value.constraints[0].path).to.have.length(1);
    expect(entry.value.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    expect(entry.fields).to.be.empty;
  });


  it('Import22: should correctly import a group with a code constraint on a field, file = codeConstraintOnField', () => {
    const nspace  = 'codeConstraintOnField' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'CodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2);
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectNoConstraints(group.fields[0]);
    expectField(group, 1, nspace, 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);   // fails here
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
    expect(el.constraints[0].path).to.have.length(1);
    expect(el.constraints[0].path).to.eql([pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });


  it('Import23: should correctly import a group with a code constraint on a field\'s child, file = codeConstraintOnFieldChild', () => {
    const nspace  = 'codeConstraintOnFieldChild' ;
    const specifications = importFixture(nspace, importDir);   // failing to load file
    const group = expectAndGetEntry(specifications, nspace, 'CodeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(2); // 3rd listing in fixture is really constraint on 2nd field
    expectField(group, 0, nspace, 'Simple', 0, 1);
    expectField(group, 1, nspace, 'CodedFromValueSet', 0, 1);
    const el = group.fields[1];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
//  expect(el.constraints[0].path).to.eql([id(nspace,'CodedFromVS2')]);
    expect(el.constraints[0].path).to.eql([id(nspace,'CodedFromVS2'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
  });


  it('Import25: should correctly import an entry with a unit constraint on the value, file = unitConstraintOnValue', () => {
    const nspace  = 'unitConstraintOnValue' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'UnitConstraintOnValue');
    expectCardOne(entry.value);
    expectValue(entry.value, 'obf.datatype', 'Quantity');
    expect(entry.value.constraints).to.have.length(1); // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
//   expect(entry.value.constraints[0].path).to.eql([id('obf.datatype','Units'), id('obf.datatype','concept')]);
    expect(entry.value.constraints[0].path).to.have.length(2);
    expect(entry.value.constraints[0].path).to.eql([id('obf.datatype','Units'), id('primitive', 'concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });


  it('Import26: should correctly import an entry with a unit constraint on the value\'s child, file = unitConstraintOnValueChild', () => {
    const nspace  = 'unitConstraintOnValueChild' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'UnitConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'Volume');
    expect(entry.value.constraints).to.have.length(1);  // fails here
    expect(entry.value.constraints[0]).to.be.instanceof(CodeConstraint);
  // expect(entry.value.constraints[0].path).to.eql([id('obf.datatype', 'Quantity'), id('obf.datatype', 'Units'), id('obf.datatype', 'concept')]);
    expect(entry.value.constraints[0].path).to.have.length(3);
    expect(entry.value.constraints[0].path).to.eql([id('obf.datatype', 'Quantity'), id('obf.datatype', 'Units'), id('primitive', 'concept')]);
    expectConcept(entry.value.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });


  it('Import27: should correctly import a group with a unit constraint on a field, file = unitConstraintOnField', () => {
    const nspace  = 'unitConstraintOnField' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'UnitConstraintOnField');
    expect(group.concepts).to.be.empty;
    expect(group.description).to.equal('It is a group entry with a unit constraint on a field');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, 'obf.datatype', 'Quantity', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
//    expect(el.constraints[0].path).to.eql([id('obf.datatype','Units'), id('obf.datatype','concept')]);
    expect(el.constraints[0].path).to.eql([id('obf.datatype','Units'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });


  it('Import28: should correctly import a group with a unit constraint on a field\'s child, file = unitConstraintOnFieldChild', () => {
    const nspace  = 'unitConstraintOnFieldChild' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'UnitConstraintOnFieldChild');
    expect(group.concepts).to.be.empty;
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Volume', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CodeConstraint);
//    expect(el.constraints[0].path).to.eql([id('obf.datatype', 'Quantity'), id('obf.datatype', 'Units'), id('obf.datatype', 'concept')]);
    expect(el.constraints[0].path).to.eql([id('obf.datatype', 'Quantity'), id('obf.datatype', 'Units'), pid('concept')]);
    expectConcept(el.constraints[0].code, 'http://unitsofmeasure.org', 'dl', 'DeciLiter');
  });


  it('Import29: should correctly import a group with an includes code constraint on a field, file = includesCodeConstraints', () => {
    const nspace  = 'includesCodeConstraints' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'IncludesCodeConstraintOnField');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Coded', 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(2);
    expect(el.constraints[0]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[0].path).to.be.empty;
    expectConcept(el.constraints[0].code, 'http://foo.org', 'bar', 'FooBar');
    expect(el.constraints[1]).to.be.instanceof(IncludesCodeConstraint);
    expect(el.constraints[1].path).to.be.empty;
    expectConcept(el.constraints[1].code, 'http://foo.org', 'baz', 'FooBaz');
  });


  it('Import30: should correctly import an entry with a boolean constraint on the value, file = booleanConstraintOnValue', () => {
    const nspace  = 'booleanConstraintOnValue' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.be.true;
  });


  it('Import31: should correctly import an entry with a boolean constraint on the value (alternate syntax), file = booleanConstraintOnValue2', () => {
    const nspace  = 'booleanConstraintOnValue2' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'BooleanConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'boolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.be.true;
  });


  it('Import32: should correctly import an entry with a boolean constraint on the value\'s child, file = booleanConstraintOnValueChild', () => {
    const nspace  = 'booleanConstraintOnValueChild' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'BooleanConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'SimpleBoolean');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].value).to.be.false;
  });


  it('Import33: should correctly import a group with a boolean constraint on a field\'s child, file = booleanConstraintOnFieldChild', () => {
    const nspace  = 'booleanConstraintOnFieldChild' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'BooleanConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'SimpleBoolean', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(el.constraints[0].path).to.eql([pid('boolean')]);
    expect(el.constraints[0].value).to.be.true;
  });


  it('Import34: should correctly import an element based on an element and substituting the value, file = typeConstraintOnValue', () => {
    const nspace  = 'typeConstraintOnValue' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'TypeConstraintOnValue');
    expect(entry.basedOn).to.have.length(1);
    expect(entry.basedOn[0].namespace).to.equal(nspace);
    expect(entry.basedOn[0].name).to.equal('SimpleBase');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'Simple');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.false;
    expectIdentifier(entry.value.constraints[0].isA, nspace, 'Simple2');
  });


  it('Import35: should correctly import an entry based on an element and substitute the value\'s child, file = typeConstraintOnValueChild', () => {
    const nspace  = 'typeConstraintOnValueChild' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'TypeConstraintOnValueChild');
    expect(entry.basedOn).to.have.length(1);
    expectIdentifier(entry.basedOn[0], nspace, 'ComplexBase');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'Complex');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.value.constraints[0].path).to.eql([id(nspace, 'Simple')]);  // should the path include Complex? (yes)
    expect(entry.value.constraints[0].onValue).to.be.false;
    expectIdentifier(entry.value.constraints[0].isA, nspace, 'Simple2');
  });


  it('Import36: should correctly import a group with a type constraint on a field, file = typeConstraintOnField', () => {
    const nspace  = 'typeConstraintOnField' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], nspace, 'GroupBase');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Simple');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, nspace, 'Simple2');
  });


  it('Import37: should correctly import a group with a cardinality constraint and a type constraint on a field\'s child, file = typeConstraintOnFieldChild', () => {
    const nspace  = 'typeConstraintOnFieldChild' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'TypeConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Complex', 0, 1);
    const cmplx = group.fields[0];
    expect(cmplx.constraints).to.have.length(2);
    expect(cmplx.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(cmplx.constraints[0].path).to.eql([id(nspace, 'Simple')]);
    expect(cmplx.constraints[0].onValue).to.be.false;
    expectIdentifier(cmplx.constraints[0].isA, nspace, 'Simple2');
    expect(cmplx.constraints[1]).to.be.instanceof(CardConstraint);
    expect(cmplx.constraints[1].path).to.eql([id(nspace, 'Simple')]);
    expect(cmplx.constraints[1].card.min).to.equal(1);
    expect(cmplx.constraints[1].card.max).to.equal(2);
  });


  it('Import38: should correctly import a group with a type constraint on a field\'s value, file = typeConstraintOnFieldValue', () => {
    const nspace  = 'typeConstraintOnFieldValue' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetGroup(specifications, nspace, 'TypeConstraintOnFieldValue');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], nspace, 'Group2');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'HasSimpleValue');
    expect(group.fields[0].constraints).to.have.length(1);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.have.length(1);
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, nspace, 'Simple2');
  });

// Choices

  it('Import40: should correctly import a choice entry, file = choiceType', () => {
    const nspace  = 'choiceType' ;
    const specifications = importFixture(nspace, importDir);
    const choice = expectAndGetElement(specifications, nspace, 'ChoiceElement');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 3);
    expectChoiceOption(choice.value, 0, 'primitive', 'date');
    expectChoiceOption(choice.value, 1, 'primitive', 'dateTime');
    expectChoiceOption(choice.value, 2, nspace, 'DateTimeString');
  // MK: not sure what the following two statements are asserting
    expectNoConstraints(choice.value);
    expectNoConstraints(choice.value.options);
  });


  it('Import41: should correctly import an entry with a value choice constraint (to primitive) on a choice field, file = choiceTypeConstraintToPrimitive', () => {
    const nspace  = 'choiceTypeConstraintToPrimitive' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, nspace, 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
  // MK:onValue is true because it is a constraint on the value of ChoiceElement.
    expectPrimitiveIdentifier(entry.fields[0].constraints[0].isA, 'dateTime');
  });


  it('Import42: should correctly import an entry with a value choice constraint (to non-primitive) on a choice field, file = choiceTypeConstraintToNonPrimitive', () => {
    const nspace  = 'choiceTypeConstraintToNonPrimitive' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ThingWithChoiceField');
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, nspace, 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    expect(entry.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(entry.fields[0].constraints[0].path).to.be.empty;
    expect(entry.fields[0].constraints[0].onValue).to.be.true;
    expectIdentifier(entry.fields[0].constraints[0].isA, nspace, 'DateTimeString');
  });

  it('Import43: should correctly import an entry with a value choice constraint (to a reduced choice) on a choice field, file = choiceTypeConstraintToReducedChoice', () => {
    const nspace  = 'choiceTypeConstraintToReducedChoice' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ThingWithChoiceField');  // error here because 'or' is not being accepted in an 'only' statement
    expect(entry.value).to.be.undefined;
    expect(entry.fields).to.have.length(1);
    expectField(entry, 0, nspace, 'ChoiceElement', 1, 1);
    expect(entry.fields[0].constraints).to.have.length(1);
    const choice = entry.fields[0];
    expect(choice.constraints).to.have.length(1);
    expect(choice.constraints[0]).to.be.instanceof(SubsetConstraint);
    expect(choice.constraints[0].path).to.be.empty;
    expect(choice.constraints[0].onValue).to.be.true;
    expect(choice.constraints[0].subsetList).to.have.length(2);
    expectPrimitiveIdentifier(choice.constraints[0].subsetList[0], 'dateTime');
    expectIdentifier(choice.constraints[0].subsetList[1], nspace, 'DateTimeString');
  });

  it('Import45: should correctly import an entry with a card constraint on the value\'s child, file = cardConstraintOnValueChild', () => {
    const nspace  = 'cardConstraintOnValueChild' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'CardConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'Thing1');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(CardConstraint);
    expect(entry.value.constraints[0].path).to.eql([id(nspace,'Thing2')]);
    expect(entry.value.constraints[0].card.min).to.equal(1);
    expect(entry.value.constraints[0].card.max).to.equal(2);
  });


  it('Import46: should correctly import a group with a card constraint on a field\'s child, file = cardConstraintOnFieldChild', () => {
    const nspace  = 'cardConstraintOnFieldChild';
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'CardConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Thing1', 0);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(CardConstraint);
    expect(el.constraints[0].path).to.eql([id(nspace, 'Thing2')]);
    expect(el.constraints[0].card.min).to.equal(1);
    expect(el.constraints[0].card.max).to.equal(2);
  });


  it('Import47: should correctly import single concept, file = conceptSingle', () => {
    const nspace  = 'conceptSingle';
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ConceptSingle');
    expect(entry.concepts).to.have.length(1);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
  });


  it('Import48: should correctly import multiple concepts, file = conceptMultiple', () => {
    const nspace  = 'conceptMultiple';
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ConceptMultiple');
    expect(entry.concepts).to.have.length(2);
    expectConcept(entry.concepts[0], 'http://foo.org', 'bar');
    expectConcept(entry.concepts[1], 'http://boo.org', 'baz');
  });


  it('Import49: should correctly import TBD concept, file = conceptTBD', () => {
    const nspace  = 'conceptTBD';
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetEntry(specifications, nspace, 'ConceptTBD');
    expect(entry.concepts).to.have.length(0);
  });


  it('Import50: should correctly import a simple parent-child relationship, file = basedOn', () => {
    const nspace  = 'basedOn';
    const specifications = importFixture(nspace, importDir);
    const child = expectAndGetEntry(specifications, nspace, 'Child');
    expect(child.basedOn).to.have.length(1);
    expect(child.basedOn[0].namespace).to.equal(nspace);
    expect(child.basedOn[0].name).to.equal('Base');
    expect(child.fields).to.have.length(1);
    expectField(child, 0, nspace, 'Simple', 0, 1);
  });


  it('Import51: should correctly import multiple elements in a single namespace, file = multipleElementNamespace', () => {
    const nspace  = 'multipleElementNamespace';
    const specifications = importFixture(nspace, importDir);
    const simple = expectAndGetElement(specifications, nspace, 'SimpleDate');
    expectCardOne(simple.value);
    expectPrimitiveValue(simple.value, 'date');
    expectNoConstraints(simple.value);
    const coded = expectAndGetElement(specifications, nspace, 'Coded');
    expect(coded.description).to.equal('It is a coded element');
    expectCardOne(coded.value);
    expectPrimitiveValue(coded.value, 'concept');
    expect(coded.value.constraints).to.have.length(1);
    expect(coded.value.constraints[0]).to.be.instanceof(ValueSetConstraint);
    expect(coded.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/shr/test/vs/Coded');
    expect(coded.value.constraints[0].bindingStrength).to.equal(REQUIRED);
  });


  it('Import52: should correctly resolve URL, URN, and URN OID vocabularies, file = vocabularies', () => {
    const nspace  = 'vocabularies';
    const specifications = importFixture(nspace, importDir);
    const simple = expectAndGetElement(specifications, nspace, 'Simple');
    expect(simple.concepts).to.have.length(3);
    expectConcept(simple.concepts[0], 'http://foo.org', 'bar', 'Foobar');
    expectConcept(simple.concepts[1], 'urn:iso:std:iso:4217', 'baz', 'Foobaz');
    expectConcept(simple.concepts[2], 'urn:oid:2.16.840.1.114222.4.11.826', 'bam', 'Foobam');
  });


  it('Import53: should correctly resolve elements and vocabularies from other namespaces, file = uses', () => {
    const nspace  = 'uses';
    const specifications = importFixtureFolder(nspace, importDir);
    const one = expectAndGetElement(specifications, nspace, 'One');
    expect(one.concepts).to.have.length(2);
    expectConcept(one.concepts[0], 'http://foo.org', 'bar');
    expectConcept(one.concepts[1], 'http://moo.org', 'car');
    expectCardOne(one.value);
    expectValue(one.value, 'shr.test.two', 'Two');
    expectNoConstraints(one.value);
    const two = expectAndGetElement(specifications, 'shr.test.two', 'Two');
    expect(two.concepts).to.have.length(1);
    expectConcept(two.concepts[0], 'http://zoo.org', 'bear');
    expectCardOne(two.value);
    expectPrimitiveValue(two.value, 'string');
    expectNoConstraints(two.value);
    expect(specifications.dataElements.namespaces).not.to.contain('shr.test.three');
  });


  it('Import54: should be able to apply a fixed concept to a choice value, file = constraintOnChoiceValue', () => {
    const nspace  = 'constraintOnChoiceValue';
    const specifications = importFixture(nspace, importDir);
    const choice = expectAndGetElement(specifications, nspace, 'ConstraintOnChoiceValue');
    expectCardOne(choice.value);
    expectChoiceValue(choice.value, 2);
    expectChoiceOption(choice.value, 0, 'primitive', 'boolean');
    expectChoiceOption(choice.value, 1, 'primitive', 'concept');
    expect(choice.value.constraints).to.have.length(2);
    expect(choice.value.constraints[0]).to.be.instanceof(BooleanConstraint);
    expect(choice.value.constraints[0].path).to.be.empty;
    expect(choice.value.constraints[0].value).to.be.true;
    expect(choice.value.constraints[1]).to.be.instanceof(CodeConstraint);
    expect(choice.value.constraints[1].path).to.be.empty;
  // TODO confirm this test case is correct.
  //expect(choice.value.constraints[1].path).to.eql([pid('concept')]);
    expectConcept(choice.value.constraints[1].code, 'http://foo.org', 'baz');
  });


  it('Import55: should correctly import a group with a cardinality constraint on a substituted element, file = substituteOnReferenceName', () => {
    const nspace = 'substituteOnReferenceName' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetGroup(specifications, nspace, 'TypeConstraintOnField');
    expect(group.basedOn).to.have.length(1);
    expectIdentifier(group.basedOn[0], nspace, 'GroupBase');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'Simple');
    expect(group.fields[0].constraints).to.have.length(2);
    expect(group.fields[0].constraints[0]).to.be.instanceof(TypeConstraint);
    expect(group.fields[0].constraints[0].path).to.be.empty;
    expect(group.fields[0].constraints[0].onValue).to.be.false;
    expectIdentifier(group.fields[0].constraints[0].isA, nspace, 'Simple2');
    expect(group.fields[0].constraints[1]).to.be.instanceof(CardConstraint);
    expect(group.fields[0].constraints[1].card.min).to.equal(0);
    expect(group.fields[0].constraints[1].card.max).to.equal(1);
  });

  it('Import56: should correctly import an element with a child that restricts the number of choices to one choice from the parent choices.', () => {
    const nspace = 'valueOnlyConstraintSingleChoice' ;
    const specifications = importFixture(nspace, importDir);
    const child = expectAndGetElement(specifications, nspace, 'ReducedChoiceElement');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ChoiceElement');
    expectCardOne(child.value);
    expectChoiceValue(child.value, 1);
    expectChoiceOption(child.value, 0, 'primitive', 'concept');
    expect(child.value.constraints[0].valueSet).to.equal('http://standardhealthrecord.org/shr/test/vs/TestVS3');
  });

  it('Import57: should correctly import an element with a child that restricts the number of choices to two that are a subset of the parent choices.', () => {
    const nspace = 'valueOnlyConstraintDoubleChoice' ;
    const specifications = importFixture(nspace, importDir);
    const child = expectAndGetElement(specifications, nspace, 'ReducedChoiceElement');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ChoiceElement');
    expectCardOne(child.value);
    expectChoiceValue(child.value, 2);
    expectChoiceOption(child.value, 0, 'primitive', 'boolean');
    expectChoiceOption(child.value, 1, 'primitive', 'integer');
  });


  it('Import59: should correctly import an element with a child that has multiple choices that are a subset of the parent choices.', () => {
    const nspace = 'valueOnlyConstraintMultipleChoice' ;
    const specifications = importFixture(nspace, importDir);
    const child = expectAndGetElement(specifications, nspace, 'ReducedChoiceElement');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ChoiceElement');
    expectCardOne(child.value);
    expectChoiceValue(child.value, 4);
    expectChoiceOption(child.value, 0, 'primitive', 'decimal');
    expectChoiceOption(child.value, 1, 'primitive', 'integer');
    expectChoiceOption(child.value, 2, 'primitive', 'concept');
    expectChoiceOption(child.value, 3, 'primitive', 'uri');
  });

  it('Import60: should correctly import an element with a child that has a single value choice whose type is a subclass of the parent value type.', () => {
    const nspace = 'valueOnlyConstraintInheritedSingleChoice' ;
    const specifications = importFixture(nspace, importDir);
    const child = expectAndGetElement(specifications, nspace, 'ReducedChoiceElement');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ChoiceElement');
    expectCardOne(child.value);
    expectValue(child.value, nspace, 'ValueParent');
    expect(child.value.constraints).to.have.length(1);
    expect(child.value.constraints[0]).to.be.instanceof(TypeConstraint);
    expect(child.value.constraints[0].path).to.be.empty;
    expect(child.value.constraints[0].onValue).to.be.false;
    expectIdentifier(child.value.constraints[0].isA, nspace, 'ValueChild2');
  });

  it('Import61: should correctly import an element with a child that has a multiple value choices whose types are a subclasses of the parent value type.', () => {
    const nspace = 'valueOnlyConstraintInheritedMultipleChoice' ;
    const specifications = importFixture(nspace, importDir);
    const child = expectAndGetElement(specifications, nspace, 'ReducedChoiceElement');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ChoiceElement');
    expectCardOne(child.value);
    expectChoiceValue(child.value, 2);
    expectChoiceOption(child.value, 0, nspace, 'ValueChild2');
    expectChoiceOption(child.value, 1, nspace, 'ValueChild4');
  });


  it('Import62: should correctly import an element with a child that has a multiple value choices whose types are a subclasses of a parent with multiple value types.', () => {
    const nspace = 'valueOnlyConstraintInheritedFromMultipleToMultiple' ;
    const specifications = importFixture(nspace, importDir);
    const child = expectAndGetElement(specifications, nspace, 'ReducedChoiceElement');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ChoiceElement');
    expectCardOne(child.value);
    expectChoiceValue(child.value, 3);
    expectChoiceOption(child.value, 0, nspace, 'ValueChild2');
    expectChoiceOption(child.value, 1, nspace, 'ValueChild4');
    expectChoiceOption(child.value, 2, nspace, 'ValueChild5');
  });

  it('Import63: should correctly allow an Entry to declare another Entry as parent.', () => {
    const nspace = 'entryWithParentEntry' ;
    const specifications = importFixture(nspace, importDir);
    expectAndGetEntry(specifications, nspace, 'ParentEntry');
    const child = expectAndGetEntry(specifications, nspace, 'ChildEntry');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ParentEntry');
  });

  it('Import64: should correctly allow an Entry to declare an Abstract as parent.', () => {
    const nspace = 'entryWithParentAbstract' ;
    const specifications = importFixture(nspace, importDir);
    expectAndGetAbstract(specifications, nspace, 'ParentAbstract');
    const child = expectAndGetEntry(specifications, nspace, 'ChildEntry');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ParentAbstract');
  });

  it('Import65: should correctly allow an Abstract to declare another Abstract as parent.', () => {
    const nspace = 'abstractWithParentAbstract' ;
    const specifications = importFixture(nspace, importDir);
    expectAndGetAbstract(specifications, nspace, 'ParentAbstract');
    const child = expectAndGetAbstract(specifications, nspace, 'ChildAbstract');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ParentAbstract');
  });

  it('Import66: should correctly allow a Group to declare a Group as parent.', () => {
    const nspace = 'groupWithParentGroup' ;
    const specifications = importFixture(nspace, importDir);
    expectAndGetGroup(specifications, nspace, 'ParentGroup');
    const child = expectAndGetGroup(specifications, nspace, 'ChildGroup');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ParentGroup');
  });

  it('Import67: should correctly allow an Element to declare another Element as parent.', () => {
    const nspace = 'elementWithParentElement' ;
    const specifications = importFixture(nspace, importDir);
    expectAndGetElement(specifications, nspace, 'ParentElement');
    const child = expectAndGetElement(specifications, nspace, 'ChildElement');
    expect(child.basedOn).to.have.length(1);
    expectIdentifier(child.basedOn[0], nspace, 'ParentElement');
  });

  it('Import68: should correctly import an entry with a fixed string constraint on the value, file = fixedStringConstraintOnValue', () => {
    const nspace  = 'fixedStringConstraintOnValue' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'FixedStringConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'string');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.equal('foo bar');
  });

  it('Import69: should correctly import an entry with a fixed string constraint on the value (alternate syntax), file = fixedStringConstraintOnValue2', () => {
    const nspace  = 'fixedStringConstraintOnValue2' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'FixedStringConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'string');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.equal('foo bar');
  });

  it('Import70: should correctly import an entry with a fixed string constraint on the value\'s child, file = fixedStringConstraintOnValueChild', () => {
    const nspace  = 'fixedStringConstraintOnValueChild' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'FixedStringConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'SimpleString');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].value).to.equal('foo bar');
  });

  it('Import71: should correctly import a group with a fixed string constraint on a field\'s child, file = fixedStringConstraintOnFieldChild', () => {
    const nspace  = 'fixedStringConstraintOnFieldChild' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'FixedStringConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'SimpleString', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(el.constraints[0].path).to.eql([pid('string')]);
    expect(el.constraints[0].value).to.equal('foo bar');
  });

  it('Import72: should correctly import an entry with a fixed integer constraint on the value, file = fixedIntegerConstraintOnValue', () => {
    const nspace  = 'fixedIntegerConstraintOnValue' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'FixedIntegerConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'integer');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.equal(2);
  });

  it('Import73: should correctly import an entry with a fixed integer constraint on the value (alternate syntax, negative), file = fixedIntegerConstraintOnValue2', () => {
    const nspace  = 'fixedIntegerConstraintOnValue2' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'FixedIntegerConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'integer');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.equal(-2);
  });

  it('Import74: should correctly import an entry with a fixed integer constraint on the value\'s child, file = fixedIntegerConstraintOnValueChild', () => {
    const nspace  = 'fixedIntegerConstraintOnValueChild' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'FixedIntegerConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'SimpleInt');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].value).to.equal(12345);
  });

  it('Import75: should correctly import a group with a fixed integer constraint on a field\'s child, file = fixedIntegerConstraintOnFieldChild', () => {
    const nspace  = 'fixedIntegerConstraintOnFieldChild' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'FixedIntegerConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'SimpleInt', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(el.constraints[0].path).to.eql([pid('integer')]);
    expect(el.constraints[0].value).to.equal(0);
  });

  it('Import76: should correctly import an entry with a fixed decimal constraint on the value, file = fixedDecimalConstraintOnValue', () => {
    const nspace  = 'fixedDecimalConstraintOnValue' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'FixedDecimalConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'decimal');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.equal(0.123);
  });

  it('Import77: should correctly import an entry with a fixed decimal constraint on the value (alternate syntax, negative), file = fixedDecimalConstraintOnValue2', () => {
    const nspace  = 'fixedDecimalConstraintOnValue2' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'FixedDecimalConstraintOnValue');
    expectCardOne(entry.value);
    expectPrimitiveValue(entry.value, 'decimal');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].onValue).to.be.undefined;
    expect(entry.value.constraints[0].value).to.equal(-1.234);
  });

  it('Import78: should correctly import an entry with a fixed decimal constraint on the value\'s child, file = fixedDecimalConstraintOnValueChild', () => {
    const nspace  = 'fixedDecimalConstraintOnValueChild' ;
    const specifications = importFixture(nspace, importDir);
    const entry = expectAndGetElement(specifications, nspace, 'FixedDecimalConstraintOnValueChild');
    expectCardOne(entry.value);
    expectValue(entry.value, nspace, 'SimpleDecimal');
    expect(entry.value.constraints).to.have.length(1);
    expect(entry.value.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(entry.value.constraints[0].path).to.be.empty;
    expect(entry.value.constraints[0].value).to.equal(1.234);
  });

  it('Import79: should correctly import a group with a fixed decimal constraint on a field\'s child, file = fixedDecimalConstraintOnFieldChild', () => {
    const nspace  = 'fixedDecimalConstraintOnFieldChild' ;
    const specifications = importFixture(nspace, importDir);
    const group = expectAndGetEntry(specifications, nspace, 'FixedDecimalConstraintOnFieldChild');
    expect(group.value).to.be.undefined;
    expect(group.fields).to.have.length(1);
    expectField(group, 0, nspace, 'SimpleDecimal', 0, 1);
    const el = group.fields[0];
    expect(el.constraints).to.have.length(1);
    expect(el.constraints[0]).to.be.instanceof(FixedValueConstraint);
    expect(el.constraints[0].path).to.eql([pid('decimal')]);
    expect(el.constraints[0].value).to.equal(0.0);
  });

  it('Import 80: should correctly import a decimal in all possible formats (positive, negative, scientific notation), file = fixedDecimalConstraintFormats', () => {
    const nspace = 'fixedDecimalConstraintFormats' ;
    const specifications = importFixture(nspace, importDir);
    let entry = expectAndGetElement(specifications, nspace, 'FixedDecimalPositive');
    expect(entry.value.constraints[0].value).to.equal(1.2);
    entry = expectAndGetElement(specifications, nspace, 'FixedDecimalPositiveWhole');
    expect(entry.value.constraints[0].value).to.equal(1.);
    entry = expectAndGetElement(specifications, nspace, 'FixedDecimalNegative');
    expect(entry.value.constraints[0].value).to.equal(-1.2);
    entry = expectAndGetElement(specifications, nspace, 'FixedDecimalNegativeWhole');
    expect(entry.value.constraints[0].value).to.equal(-1.);
    entry = expectAndGetElement(specifications, nspace, 'FixedDecimalPositiveScientificPositive');
    expect(entry.value.constraints[0].value).to.equal(1.2e12);
    entry = expectAndGetElement(specifications, nspace, 'FixedDecimalPositiveScientificNegative');
    expect(entry.value.constraints[0].value).to.equal(1.2e-12);
    entry = expectAndGetElement(specifications, nspace, 'FixedDecimalNegativeScientificPositive');
    expect(entry.value.constraints[0].value).to.equal(-1.2e12);
    entry = expectAndGetElement(specifications, nspace, 'FixedDecimalNegativeScientificNegative');
    expect(entry.value.constraints[0].value).to.equal(-1.2e-12);

  });

});


// mlt: modularized negative tests. Now located in import-neg-test.js
// mlt: modularized config tests. Now located in config-import-test.js


/* MK - cutting out CIMCORE tests because the examples are out of date, in Grammar 5. If we revive this, it should live in a separate file (e.g., import-cimcore-test.js).
 mlt: - moved cimcore tests to import-cimcore-test.js.
*/

// mlt: decoupled all shared function tests. Now located in import-helper.js
