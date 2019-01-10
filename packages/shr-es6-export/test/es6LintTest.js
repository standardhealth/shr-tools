const {expect} = require('chai');
const CLIEngine = require('eslint').CLIEngine;
const setup = require('./setup');

describe.skip('#ESLint()', () => {

  before(() => setup('./test/fixtures/spec', 'config_stu3.json', './build/test', true));

  it('should not have any linter errors or warnings', () => {
    const cli = new CLIEngine();
    const report = cli.executeOnFiles(['./build/test/es6/']);
    expect(report.errorCount, 'error count').to.equal(0);
    expect(report.warningCount, 'warning count').to.equal(0);
  });
});