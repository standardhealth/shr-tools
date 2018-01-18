const {expect} = require('chai');
const CLIEngine = require('eslint').CLIEngine;
const setup = require('./setup');

setup('./test/fixtures/spec', './build/test', true);

describe('#ESLint()', () => {
  it('should not have any linter errors or warnings', () => {
    const cli = new CLIEngine();
    const report = cli.executeOnFiles(['./build/test/es6/']);
    expect(report.errorCount, 'error count').to.equal(0);
    expect(report.warningCount, 'warning count').to.equal(0);
  });
});