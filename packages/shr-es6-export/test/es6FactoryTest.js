const {expect} = require('chai');
const setup = require('./setup');
require('babel-register')({
  presets: [ 'es2015' ]
});

setup('./build/test', true);

describe('#ObjectFactory()', () => {
  const ObjectFactory = importResult('ObjectFactory');
  const SimpleValue = importResult('shr/test/SimpleValue');

  it('should create classes by name', () => {
    const sv = ObjectFactory.createInstance('http://standardhealthrecord.org/test/SimpleValue');
    expect(sv).instanceOf(SimpleValue);
    expect(sv.entryInfo).to.be.undefined;
    expect(sv.value).to.be.undefined;
    expect(sv.string).to.be.undefined;
  });

  it('should throw when you request an unknown element', () => {
    expect(() => ObjectFactory.createInstance('http://therealworld.org/Unicorn')).to.throw();
  });
});

describe('#NamespaceObjectFactory()', () => {
  const ShrTestObjectFactory = importResult('shr/test/ShrTestObjectFactory');
  const SimpleValue = importResult('shr/test/SimpleValue');

  it('should create classes by name', () => {
    const sv = ShrTestObjectFactory.createInstance('SimpleValue');
    expect(sv).instanceOf(SimpleValue);
    expect(sv.entryInfo).to.be.undefined;
    expect(sv.value).to.be.undefined;
    expect(sv.string).to.be.undefined;
  });

  it('should throw when you request an unknown element', () => {
    expect(() => ShrTestObjectFactory.createInstance('Unicorn')).to.throw();
  });
});

function importResult(path) {
  return require(`../build/test/${path}`).default;
}
