const {expect} = require('chai');
const mdl = require('../index');

describe('#Specifications', () => {
  it('should correctly initialize its components', () => {
    const specs = new mdl.Specifications();
    expect(specs.namespaces.all).to.be.empty;
    expect(specs.dataElements.all).to.be.empty;
  });
});

describe('#Specifications.namespaces', () => {
  it('should be empty at initialization', () => {
    const specs = new mdl.Specifications();
    expect(specs.namespaces.all).to.be.empty;
  });

  it('should add namespaces', () => {
    const specs = new mdl.Specifications();
    specs.namespaces.add(new mdl.Namespace('shr.test', 'A test namespace'));
    specs.namespaces.add(new mdl.Namespace('shr.test.too', 'Another test namespace'));
    expect(specs.namespaces.all).to.eql([
      new mdl.Namespace('shr.test', 'A test namespace'),
      new mdl.Namespace('shr.test.too', 'Another test namespace')
    ]);
  });

  it('should find namespaces', () => {
    const specs = new mdl.Specifications();
    specs.namespaces.add(new mdl.Namespace('shr.test', 'A test namespace'));
    specs.namespaces.add(new mdl.Namespace('shr.test.too', 'Another test namespace'));
    expect(specs.namespaces.find('shr.test.too')).to.eql(
      new mdl.Namespace('shr.test.too', 'Another test namespace')
    );
  });

  it('should return undefined when finding namespaces that don\'t exist', () => {
    const specs = new mdl.Specifications();
    specs.namespaces.add(new mdl.Namespace('shr.test', 'A test namespace'));
    specs.namespaces.add(new mdl.Namespace('shr.test.too', 'Another test namespace'));
    expect(specs.namespaces.find('shr.test.three')).to.be.undefined;
  });
});

describe('#Specifications.dataElements', () => {
  it('should be empty at initialization', () => {
    const specs = new mdl.Specifications();
    expect(specs.dataElements.all).to.be.empty;
  });

  it('should add data elements', () => {
    const specs = new mdl.Specifications();
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Three'), false, true).withGrammarVersion(v(4)));
    expect(specs.dataElements.all).to.eql([
      new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)),
      new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)),
      new mdl.DataElement(id('shr.test', 'Three'), false, true).withGrammarVersion(v(4))
    ]);
  });

  it('should support retrieving entries only', () => {
    const specs = new mdl.Specifications();
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test.too', 'Three'), true).withGrammarVersion(v(4, 1)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test.too', 'Four'), false, true).withGrammarVersion(v(4, 1)));
    expect(specs.dataElements.entries).to.eql([
      new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)),
      new mdl.DataElement(id('shr.test.too', 'Three'), true).withGrammarVersion(v(4, 1))
    ]);
  });

  it('should support retrieving elements by namespace', () => {
    const specs = new mdl.Specifications();
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test.too', 'Three'), true).withGrammarVersion(v(4, 1)));
    expect(specs.dataElements.byNamespace('shr.test')).to.eql([
      new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)),
      new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4))
    ]);
    expect(specs.dataElements.byNamespace('shr.test.too')).to.eql([
      new mdl.DataElement(id('shr.test.too', 'Three'), true).withGrammarVersion(v(4, 1))
    ]);
    expect(specs.dataElements.byNamespace('shr.test.three')).to.be.empty;
  });

  it('should support retrieving entries by namespace', () => {
    const specs = new mdl.Specifications();
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test.too', 'Three'), true).withGrammarVersion(v(4, 1)));
    expect(specs.dataElements.entriesByNamespace('shr.test')).to.eql([
      new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4))
    ]);
    expect(specs.dataElements.entriesByNamespace('shr.test.too')).to.eql([
      new mdl.DataElement(id('shr.test.too', 'Three'), true).withGrammarVersion(v(4, 1))
    ]);
    expect(specs.dataElements.entriesByNamespace('shr.test.three')).to.be.empty;
  });

  it('should find data elements', () => {
    const specs = new mdl.Specifications();
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)));
    expect(specs.dataElements.find('shr.test', 'Two')).to.eql(
      new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4))
    );
  });

  it('should find data elements by identifier', () => {
    const specs = new mdl.Specifications();
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)));
    expect(specs.dataElements.findByIdentifier(id('shr.test', 'Two'))).to.eql(
      new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4))
    );
  });

  it('should return undefined when finding data elements that don\'t exist', () => {
    const specs = new mdl.Specifications();
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)));
    expect(specs.dataElements.find('shr.test', 'Three')).to.be.undefined;
  });

  it('should return active namespaces', () => {
    const specs = new mdl.Specifications();
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test.too', 'Three'), true).withGrammarVersion(v(4, 1)));
    expect(specs.dataElements.namespaces).to.eql(['shr.test', 'shr.test.too']);
  });

  it('should collect grammar versions', () => {
    const specs = new mdl.Specifications();
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'One'), true).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test', 'Two')).withGrammarVersion(v(4)));
    specs.dataElements.add(new mdl.DataElement(id('shr.test.too', 'Three'), true).withGrammarVersion(v(4, 1)));
    expect(specs.dataElements.grammarVersions).to.eql([ v(4), v(4, 1) ]);
  });
});

function id(namespace, name) {
  return new mdl.Identifier(namespace, name);
}

function v(major, minor, patch) {
  return new mdl.Version(major, minor, patch);
}