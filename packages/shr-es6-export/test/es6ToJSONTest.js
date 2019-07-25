const {expect} = require('chai');
const setup = require('./setup');
require('babel-register')({
  presets: [ 'es2015' ]
});

let context;

describe('#ToJSON', () => {

  before(function() {
    this.timeout(5000);
    context = setup('./test/fixtures/spec', 'config_stu3.json', './build/test', true);
    context.setupAjvJson('./build/test/schema');
  });

  describe('#StringValueClass()', () => {

    let StringValueEntry;
    before(() => StringValueEntry = context.importResult('shr/simple/StringValueEntry'));

    it('should serialize a JSON instance', () => {
      testJSONRoundtrip('StringValueEntry', 'StringValueEntry', StringValueEntry);
    });
  });

  describe('#ConceptValueEntryClass()', () => {

    let ConceptValueEntry;
    before(() => ConceptValueEntry = context.importResult('shr/simple/ConceptValueEntry'));

    it('should serialize a JSON instance with an object code', () => {
      // This one is special-cased; this JSON doesn't roundtrip
      // because of the way Coding objects are handled
      const json = context.getJSON('ConceptValueEntry');
      const entry = ConceptValueEntry.fromJSON(json);
      expect(entry).instanceOf(ConceptValueEntry);


      let gen_json = entry.toJSON();
      context.validateJSON('ConceptValueEntry', gen_json);
      expect(gen_json['EntryType']).to.eql({ Value: 'http://standardhealthrecord.org/spec/shr/simple/ConceptValueEntry' });
      expect(gen_json['ConceptValue']['Value']).to.eql({ coding: [{ code: 'foo', system: 'http://foo.org/bar', display: 'Foo' }] });
    });
  });

  describe('#MultiConceptValueEntryClass()', () => {

    let MultiConceptValueEntry;
    before(() => MultiConceptValueEntry = context.importResult('shr/simple/MultiConceptValueEntry'));

    it('should serialize a JSON instance with an object code', () => {
      // This one is special-cased; this JSON doesn't roundtrip
      // because of the way Code objects are handled
      const json = context.getJSON('MultiConceptValueEntry');
      const entry = MultiConceptValueEntry.fromJSON(json);
      expect(entry).instanceOf(MultiConceptValueEntry);

      let gen_json = entry.toJSON();
      context.validateJSON('MultiConceptValueEntry', gen_json);
      expect(gen_json['EntryType']).to.eql({ Value: 'http://standardhealthrecord.org/spec/shr/simple/MultiConceptValueEntry' });
      expect(gen_json['ConceptValue']['Value']).to.eql({
        coding: [
          { code: 'foo', system: 'http://foo.org/bar', display: 'Foo' },
          { code: 'bar', system: 'http://foo.org/bar', display: 'Bar' }
        ]
      });
    });
  });

  describe('#RecursiveEntryClass()', () => {

    let RecursiveEntry;
    before(() => RecursiveEntry = context.importResult('shr/simple/RecursiveEntry'));

    it('should serialize a JSON instance', () => {
      // This one is special cased because you're working with recursive entries
      const json = context.getJSON('RecursiveEntry');
      const entry = RecursiveEntry.fromJSON(json);
      expect(entry).instanceOf(RecursiveEntry);
      let gen_json = entry.toJSON();
      context.validateJSON('RecursiveEntry', gen_json);
      expect(gen_json).to.eql(json);

      // Recursive child 1
      const child1 = entry.recursiveEntry[0];
      expect(child1).instanceOf(RecursiveEntry);
      let child1_json = child1.toJSON();
      context.validateJSON('RecursiveEntry', child1_json);

      // Recursive grandchild 1
      const grandchild1 = child1.recursiveEntry[0];
      expect(grandchild1).instanceOf(RecursiveEntry);
      let grandchild1_json = grandchild1.toJSON();
      context.validateJSON('RecursiveEntry', grandchild1_json);

      // Recursive child 2
      const child2 = entry.recursiveEntry[1];
      expect(child2).instanceOf(RecursiveEntry);
      let child2_json = child2.toJSON();
      context.validateJSON('RecursiveEntry', child2_json);

      // Recursive child 2 with a null recursive entry
      child2.recursiveEntry = null;
      child2_json = child2.toJSON();
      context.validateJSON('RecursiveEntry', child2_json);
      gen_json = entry.toJSON();
      expect(gen_json).to.eql(json);
    });
  });

  describe('#SingleRecursiveEntryClass()', () => {

    let RecursiveEntry, SingleRecursiveEntry;
    before(() => {
      RecursiveEntry = context.importResult('shr/simple/RecursiveEntry');
      SingleRecursiveEntry = context.importResult('shr/simple/SingleRecursiveEntry');
    });

    it('should serialize a JSON instance', () => {
      // This one is special cased because you're working with recursive entries
      const json = context.getJSON('SingleRecursiveEntry');
      const entry = SingleRecursiveEntry.fromJSON(json);
      expect(entry).instanceOf(SingleRecursiveEntry);
      const gen_json = entry.toJSON();
      context.validateJSON('SingleRecursiveEntry', gen_json);
      expect(gen_json).to.eql(json);

      // Recursive child 1
      const child1 = entry.recursiveEntry[0];
      expect(child1).instanceOf(RecursiveEntry);
      let child1_json = child1.toJSON();
      context.validateJSON('RecursiveEntry', child1_json);

      // Recursive grandchild 1
      const grandchild1 = child1.recursiveEntry[0];
      expect(grandchild1).instanceOf(SingleRecursiveEntry);
      let grandchild1_json = grandchild1.toJSON();
      context.validateJSON('SingleRecursiveEntry', grandchild1_json);
    });
  });

  describe('#ReferenceEntryClass()', () => {

    let ReferenceEntry;
    before(() => ReferenceEntry = context.importResult('shr/simple/ReferenceEntry'));

    it('should serialize a JSON instance', () => {
      testJSONRoundtrip('ReferenceEntry', 'ReferenceEntry', ReferenceEntry);
    });
  });

  describe('#BasedOnIntegerValueElementEntryClass()', () => {

    let BasedOnIntegerValueElementEntry;
    before(() => BasedOnIntegerValueElementEntry = context.importResult('shr/simple/BasedOnIntegerValueElementEntry'));

    it('should serialize a JSON instance', () => {
      testJSONRoundtrip('BasedOnIntegerValueElementEntry', 'BasedOnIntegerValueElementEntry', BasedOnIntegerValueElementEntry);
    });
  });

  describe('#InheritBasedOnIntegerValueElementEntryClass()', () => {

    let BasedOnIntegerValueElementEntry;
    before(() => BasedOnIntegerValueElementEntry = context.importResult('shr/simple/BasedOnIntegerValueElementEntry'));

    it('should serialize a JSON instance', () => {
      testJSONRoundtrip('BasedOnIntegerValueElementEntry', 'BasedOnIntegerValueElementEntry', BasedOnIntegerValueElementEntry);
    });
  });

  describe('#OverrideBasedOnIntegerValueElementEntryClass()', () => {

    let OverrideBasedOnIntegerValueElementEntry;
    before(() => OverrideBasedOnIntegerValueElementEntry = context.importResult('shr/simple/OverrideBasedOnIntegerValueElementEntry'));

    it('should serialize a JSON instance', () => {
      testJSONRoundtrip('OverrideBasedOnIntegerValueElementEntry', 'OverrideBasedOnIntegerValueElementEntry', OverrideBasedOnIntegerValueElementEntry);
    });
  });

  describe('#ChoiceValueEntryClass()', () => {

    let ChoiceValueEntry;
    before(() => ChoiceValueEntry = context.importResult('shr/simple/ChoiceValueEntry'));

    it('should serialize a JSON instance with a string', () => {
      testJSONRoundtrip('ChoiceValueStringEntry', 'ChoiceValueEntry', ChoiceValueEntry);
    });

    it('should serialize a JSON instance with an integer', () => {
      testJSONRoundtrip('ChoiceValueIntEntry', 'ChoiceValueEntry', ChoiceValueEntry);
    });
  });

  describe('#OptionalChoiceValueEntryClass()', () => {

    let OptionalChoiceValueEntry;
    before(() => OptionalChoiceValueEntry = context.importResult('shr/simple/OptionalChoiceValueEntry'));

    it('should serialize a JSON instance with a normal value', () => {
      testJSONRoundtrip('OptionalChoiceValueEntry', 'OptionalChoiceValueEntry', OptionalChoiceValueEntry);
    });

    it('should serialize a JSON instance with no value', () => {
      testJSONRoundtrip('OptionalChoiceValueEntryBlank', 'OptionalChoiceValueEntry', OptionalChoiceValueEntry);
    });

    it('should serialize a JSON instance with a value of ""', () => {
      testJSONRoundtrip('OptionalChoiceValueEntryEmpty', 'OptionalChoiceValueEntry', OptionalChoiceValueEntry);
    });

    it('should serialize a JSON instance with a null value', () => {
      // This is special because null values are not allowed by the schema or the integer datatype.
      const json = context.getJSON('OptionalChoiceValueEntryBlank');
      const entry = OptionalChoiceValueEntry.fromJSON(json);
      expect(entry).instanceOf(OptionalChoiceValueEntry);
      entry.value = null;
      const gen_json = entry.toJSON();
      context.validateJSON('OptionalChoiceValueEntryBlank', gen_json);
      expect(gen_json).to.eql(json);
    });

    it('should serialize a JSON instance with a "null" value', () => {
      testJSONRoundtrip('OptionalChoiceValueEntryNullString', 'OptionalChoiceValueEntry', OptionalChoiceValueEntry);
    });
  });

  describe('#OptionalFieldEntryClass()', () => {

    let OptionalFieldEntry;
    before(() => OptionalFieldEntry = context.importResult('shr/simple/OptionalFieldEntry'));

    it('should serialize a JSON instance with a normal integer value', () => {
      testJSONRoundtrip('OptionalFieldEntry', 'OptionalFieldEntry', OptionalFieldEntry);
    });

    it('should serialize a JSON instance with no value', () => {
      testJSONRoundtrip('OptionalFieldEntryBlank', 'OptionalFieldEntry', OptionalFieldEntry);
    });

    it('should serialize a JSON instance with a null value', () => {
      // This is special because null values are not allowed by the schema or the integer datatype.
      const json = context.getJSON('OptionalFieldEntryBlank');
      const entry = OptionalFieldEntry.fromJSON(json);
      expect(entry).instanceOf(OptionalFieldEntry);
      entry.integerValueElement = null;
      const gen_json = entry.toJSON();
      context.validateJSON('OptionalFieldEntryBlank', gen_json);
      expect(gen_json).to.eql(json);
    });
  });
});

/**
 *
 * @param {string} jsonName
 * @param {string} validationName
 * @param {Object} clazz
 */
function testJSONRoundtrip(jsonName, validationName, clazz) {
  const json = context.getJSON(jsonName);
  const entry = clazz.fromJSON(json);
  expect(entry).instanceOf(clazz);

  let gen_json = entry.toJSON();
  context.validateJSON(validationName, gen_json);
  expect(gen_json).to.eql(json);
}
