const {expect} = require('chai');
const setup = require('./setup');
require('babel-register')({
  presets: [ 'es2015' ]
});

describe('#Factory()', () => {

  let context;
  before(function() {
    this.timeout(5000);
    context = setup('./test/fixtures/spec', 'config_stu3.json', './build/test', true);
  });

  describe('#ObjectFactory()', () => {

    let ObjectFactory, StringValue;
    before(() => {
      ObjectFactory = context.importResult('ObjectFactory');
      StringValue = context.importResult('shr/simple/StringValue');
    });

    it('should create classes by name', () => {
      const pv = ObjectFactory.createInstance({}, 'http://standardhealthrecord.org/spec/shr/simple/StringValue');
      expect(pv).instanceOf(StringValue);
      expect(pv.entryInfo).to.be.undefined;
      expect(pv.value).to.be.undefined;
      expect(pv.string).to.be.undefined;
    });

    it('should throw when you request an element in the wrong namespace', () => {
      expect(() => ObjectFactory.createInstance({}, 'http://standardhealthrecord.org/spec/obf/datatype/StringValue')).to.throw();
    });

    it('should throw when you request an unknown element', () => {
      expect(() => ObjectFactory.createInstance({}, 'http://therealworld.org/Unicorn')).to.throw();
    });
  });

  describe('#NamespaceObjectFactory()', () => {

    let ShrSimpleTestObjectFactory, StringValue;
    before(() => {
      ShrSimpleTestObjectFactory = context.importResult('shr/simple/ShrSimpleObjectFactory');
      StringValue = context.importResult('shr/simple/StringValue');
    });

    it('should create classes by name', () => {
      const pv = ShrSimpleTestObjectFactory.createInstance({}, 'http://standardhealthrecord.org/spec/shr/simple/StringValue');
      expect(pv).instanceOf(StringValue);
      expect(pv.entryInfo).to.be.undefined;
      expect(pv.value).to.be.undefined;
      expect(pv.string).to.be.undefined;
    });

    it('should throw when you request an element from a different namespace', () => {
      expect(() => ShrSimpleTestObjectFactory.createInstance({}, 'http://standardhealthrecord.org/spec/obf/datatype/StringValue')).to.throw();
    });

    it('should throw when you request an unknown element', () => {
      expect(() => ShrSimpleTestObjectFactory.createInstance({}, 'http://standardhealthrecord.org/spec/shr/simple/Unicorn')).to.throw();
    });
  });

});
