const fs = require('fs');
const {expect} = require('chai');
const {setLogger} = require('../index');
const {importConfiguration, importConfigurationFolder } = require('../test/import-helper');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

describe('#importConfig', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Config1: should correctly import a basic configuration', () => {
    const configuration = importConfiguration('basicconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'basic',
      'version': '1.2.3',
      'indexContent': 'basicindexcontent.html'
    });
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);
  });

  it('Config2: should correctly generate missing fhir url from project url when fhir url is missing', () => {
    const configuration = importConfiguration('incompletefhirconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'basic',
      'version': '1.2.3',
      'indexContent': 'basicindexcontent.html'
    });
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);

  });

  it('Config3: should correctly import an incomplete configuration with partial default data', () => {
    const configuration = importConfiguration('incompleteconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('EXAMPLE');
    expect(configuration.projectURL).to.eql('http://example.com');
    expect(configuration.fhirURL).to.eql('http://example.com/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'example-npm-name',
      'version': '0.0.1',
      'indexContent': 'exampleIndexContent.html'
    });
    expect(configuration.publisher).to.eql('Example Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);
  });

  it('Config4: should correctly import a configuration with missing npmName & version and add values', () => {
    const configuration = importConfiguration('incompleteigconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'example-npm-name',
      'version': '0.0.1',
      'indexContent': 'basicindexcontent.html'
    });
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);
  });

  it('Config5: should correctly translate deprecated properties', () => {
    const configuration = importConfiguration('deprecatedigconfig');
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Test Project');
    expect(configuration.projectShorthand).to.eql('TEST');
    expect(configuration.projectURL).to.eql('http://test.org');
    expect(configuration.fhirURL).to.eql('http://test.org/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'example-npm-name',
      'version': '0.0.1',
      'indexContent': 'basicindexcontent.html',
      'includeLogicalModels': false,
      'includeModelDoc': false,
      'primarySelectionStrategy': {
        'strategy': 'hybrid',
        'primary': ['test'],
        'hideSupporting': true
      }
    });
    expect(configuration.publisher).to.eql('Test Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://test.org'
      }]
    }]);
  });

  it('Config6: should correctly throw error when file is not valid JSON', () => {
    const configuration = importConfiguration('invalidblankconfig', 1);
    expect(err.errors()[0].msg).to.contain('11046');
    expect(configuration).to.be.undefined;
  });

  it('Config7: should correctly create default configuration as config.json when no file exists', () => {
    // First ensure config.json doesn't exist (from previous run)
    const cfgPath = `${__dirname}/fixtures/config/emptyfolder/config.json`;
    if (fs.existsSync(cfgPath)) {
      fs.unlinkSync(cfgPath);
    }
    const configuration = importConfigurationFolder('emptyfolder');
    expect(fs.existsSync(cfgPath)).to.be.true;
    expect(configuration).to.have.all.keys('projectName','projectShorthand','projectURL','provenanceInfo','publisher','contact','fhirURL','implementationGuide');
    expect(configuration.projectName).to.eql('Example Project');
    expect(configuration.projectShorthand).to.eql('EXAMPLE');
    expect(configuration.projectURL).to.eql('http://example.com');
    expect(configuration.fhirURL).to.eql('http://example.com/fhir');
    expect(configuration.implementationGuide).to.eql({
      'npmName': 'example-npm-name',
      'version': '0.0.1',
      'indexContent': 'exampleIndexContent.html'
    });
    expect(configuration.publisher).to.eql('Example Publisher');
    expect(configuration.contact).to.eql([{
      'telecom': [{
        'system': 'url',
        'value': 'http://example.com'
      }]
    }]);
  });
});
// end of describe(#importConfig)

