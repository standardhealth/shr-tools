const {expect} = require('chai');
const setup = require('./setup');

describe('#CompileFixtures()', () => {
  it('should not have any errors compiling the specs in the STU3 test fixtures', function() {
    this.timeout(10000); // Increase timeout for compilation
    const context = setup('./test/fixtures/spec', 'config_stu3.json', './build/test', true);
    expect(context.errors).to.eql([]);
  });

  it('should not have any errors compiling the specs in the DSTU2 test fixtures', function() {
    this.timeout(10000); // Increase timeout for compilation
    const context = setup('./test/fixtures/spec', 'config_dstu2.json', './build/test_dstu2', true);
    expect(context.errors).to.eql([]);
  });
});