const {expect} = require('chai');
const {Preprocessor, setLogger} = require('../lib/preprocessor');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

describe('#preprocessFile', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Prep1: should correctly preprocess a simple entry definition', () => {
    const data = importFixture('simpleEntry');
    expect(data._paths).to.eql({});
    expect(data._vocabularies).to.eql({
      'simpleEntry': { 'FOO': 'http://foo.org' }
    });
    expect(data._definitions).to.eql({
      'simpleEntry': { 'SimpleEntry': true, 'Bar':true }
    });
  });

  it('Prep2: should correctly preprocess a simple abstract element definition', () => {
    const data = importFixture('simpleAbstractElement');
    expect(data._paths).to.eql({});
    expect(data._vocabularies).to.eql({
      'simpleAbstractElement': { 'FOO': 'http://foo.org' }
    });
    expect(data._definitions).to.eql({
      'simpleAbstractElement': { 'Simple': true, 'Bar':true }
    });
  });

  it('Prep3: should correctly preprocess a simple element definition', () => {
    const data = importFixture('simpleElement');
    expect(data._paths).to.eql({});
    expect(data._vocabularies).to.eql({
      'simpleElement': { 'FOO': 'http://foo.org' }
    });
    expect(data._definitions).to.eql({
      'simpleElement': { 'Simple': true }
    });
  });

  it('Prep4: should correctly preprocess a path definition', () => {
    const data = importFixture('codedFromPathValueSet');
    expect(data._paths).to.eql({
      'codedFromPathValueSet': { 'TESTVS': 'http://standardhealthrecord.org/shr/test/vs' }
    });
    expect(data._vocabularies).to.eql({});
    expect(data._definitions).to.eql({
      'codedFromPathValueSet': { 'CodedFromPathValueSet': true }
    });
  });

  it('Prep5: should correctly preprocess multiple codesystem definitions in a single namespace', () => {
    const data = importFixture('codeSystems');
    expect(data._paths).to.eql({});
    expect(data._vocabularies).to.eql({
      'codeSystems': {
        'FOO': 'http://foo.org',
        'BOO': 'http://boo.org',
        'ZOO': 'http://zoo.org'
      }
    });
    expect(data._definitions).to.eql({
      'codeSystems': {
        'SimpleGroup': true,
        'Simple': true,
        'Coded': true,
        'Simple2': true,
      }
    });
  });
});

function importFixture(name) {
  const preprocessor = new Preprocessor();
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  preprocessor.preprocessFile(`${__dirname}/fixtures/dataElement/${nameCapitalized}.txt`);
  expect(err.hasErrors()).to.be.false;
  return preprocessor.data;
}
