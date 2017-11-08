const {expect} = require('chai');
const setup = require('./setup');
require('babel-register')({
  presets: [ 'es2015' ]
});

setup('./build/test', true);

describe('#SimpleValueClass()', () => {
  const SimpleValue = importResult('shr/test/SimpleValue');
  it('should construct to empty instance', () => {
    const sv = new SimpleValue();
    expect(sv).instanceOf(SimpleValue);
    expect(sv.entryInfo).to.be.undefined;
    expect(sv.value).to.be.undefined;
    expect(sv.string).to.be.undefined;
  });

  it('should get/set entryInfo', () => {
    const sv = new SimpleValue();
    // NOTE: This is not a REAL Entry class, we're just testing getter/setter for now
    sv.entryInfo = 'the entry info';
    expect(sv.entryInfo).to.equal('the entry info');
  });

  it('should get/set value', () => {
    const sv = new SimpleValue();
    sv.value = 'a value';
    expect(sv.value).to.equal('a value');
    // value should really be a proxy for string
    expect(sv.string).to.equal('a value');
  });

  it('should get/set string', () => {
    const sv = new SimpleValue();
    sv.string = 'a value';
    expect(sv.string).to.equal('a value');
    // value should really be a proxy for string
    expect(sv.value).to.equal('a value');
  });
});

function importResult(path) {
  return require(`../build/test/${path}`).default;
}
