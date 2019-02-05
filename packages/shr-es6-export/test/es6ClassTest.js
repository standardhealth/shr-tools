const {expect} = require('chai');
const setup = require('./setup');
require('babel-register')({
  presets: [ 'es2015' ]
});

describe('#Class', () => {

  let context;
  before(function() {
    this.timeout(5000);
    context = setup('./test/fixtures/spec', 'config_stu3.json', './build/test', true);
  });

  describe('#StringValueClass()', () => {

    let StringValueEntry;
    before(() => StringValueEntry = context.importResult('shr/simple/StringValueEntry'));

    it('should construct to empty instance', () => {
      const pv = new StringValueEntry();
      expect(pv).instanceOf(StringValueEntry);
      expect(pv.entryInfo).to.be.undefined;
      expect(pv.value).to.be.undefined;
      expect(pv.string).to.be.undefined;
    });

    it('should get/set entryInfo', () => {
      const pv = new StringValueEntry();
      // NOTE: This is not a REAL Entry class, we're just testing getter/setter for now
      pv.entryInfo = 'the entry info';
      expect(pv.entryInfo).to.equal('the entry info');
    });

    it('should get/set value', () => {
      const pv = new StringValueEntry();
      pv.value = 'a value';
      expect(pv.value).to.equal('a value');
      // value should really be a proxy for string
      expect(pv.string).to.equal('a value');
    });

    it('should get/set string', () => {
      const pv = new StringValueEntry();
      pv.string = 'a value';
      expect(pv.string).to.equal('a value');
      // value should really be a proxy for string
      expect(pv.value).to.equal('a value');
    });

    it('should support chaining a string', () => {
      const pv = new StringValueEntry();
      const shouldBeThis = pv.withString('a value');
      expect(pv.string).to.equal('a value');
      // value should really be a proxy for string
      expect(pv.value).to.equal('a value');
      expect(shouldBeThis).to.equal(pv);
    });
  });

  describe('#ReservedWordEntryClass()', () => {

    let ReservedWordEntry;
    before(() => ReservedWordEntry = context.importResult('shr/reserved/ReservedWordEntry'));

    it('should not use any keywords as variable names', () => {
      // This test should have thrown an error by now if there is a reserved word violation, but just in case...
      const pds = Object.getOwnPropertyDescriptors(ReservedWordEntry.prototype);
      for (const rw of ['package', 'class', 'enum', 'await']) {
        expect(pds[rw].set.toString()).to.contain(`function set(${rw}Var)`)
          .and.to.contain(`this._${rw} = ${rw}Var;`);
      }
    });
  });

});
