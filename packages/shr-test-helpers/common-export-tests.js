const {expect} = require('chai');
const mdl = require('shr-models');

function commonTests(expectedFn, exportFn) {
  const wrappedExpectedFn = function(name, testCase) {
    try {
      return expectedFn(name);
    } catch (e) {
      const msg = `Skipping ${name} test.  Failed to load expected values: ${e}`;
      console.warn(msg);
      testCase.skip(msg);
    }
  };

  return () => {
    // Note: using ES5 function syntax instead of () => due to bug in mocha that doesn't preserve context of 'this'
    it('should correctly export a simple entry', function() {
      const ns = new mdl.Namespace('shr.test');
      addSimpleElement(ns);
      const expected = wrappedExpectedFn('Simple', this);
      const actual = exportFn(ns);
      expect(actual).to.eql(expected);
    });

    it('should correctly export a simple entry in a different namespace', function() {
      const otherNS = new mdl.Namespace('shr.other.test');
      addSimpleElement(otherNS);
      const expected = wrappedExpectedFn('ForeignSimple', this);
      const actual = exportFn(otherNS);
      expect(actual).to.eql(expected);
    });

    it('should correctly export a coded entry', function() {
      const ns = new mdl.Namespace('shr.test');
      addCodedElement(ns);
      const expected = wrappedExpectedFn('Coded', this);
      const actual = exportFn(ns);
      expect(actual).to.eql(expected);
    });

    it('should correctly export a reference entry', function() {
      const ns = new mdl.Namespace('shr.test');
      addSimpleReference(ns);
      const expected = wrappedExpectedFn('SimpleReference', this);
      const actual = exportFn(ns);
      expect(actual).to.eql(expected);
    });

    it('should correctly export an entry with an element value', function() {
      // NOTE: This is an entry where the value is not a primitive, e.g. "Value: SomeOtherDataElement"
      const ns = new mdl.Namespace('shr.test');
      addElementValue(ns);
      const expected = wrappedExpectedFn('ElementValue', this);
      const actual = exportFn(ns);
      expect(actual).to.eql(expected);
    });

    it('should correctly export an entry with an element value in a different namespace', function() {
      // NOTE: This is an entry where the value is not a primitive, e.g. "Value: SomeOtherDataElement"
      const ns = new mdl.Namespace('shr.test');
      const otherNS = new mdl.Namespace('shr.other.test');
      addForeignElementValue(ns, otherNS);
      const expected = wrappedExpectedFn('ForeignElementValue', this);
      const actual = exportFn(ns, otherNS);
      expect(actual).to.eql(expected);
    });

    it('should correctly export an entry with two-deep element value', function() {
      // NOTE: This is an entry where the value is a non-primitive, that itself has a value that is a non-primitive
      const ns = new mdl.Namespace('shr.test');
      addTwoDeepElementValue(ns);
      const expected = wrappedExpectedFn('TwoDeepElementValue', this);
      const actual = exportFn(ns);
      expect(actual).to.eql(expected);
    });

    it('should correctly export a choice', function() {
      const ns = new mdl.Namespace('shr.test');
      addChoice(ns);
      const expected = wrappedExpectedFn('Choice');
      const actual = exportFn(ns);
      expect(actual).to.eql(expected);
    });

    it('should correctly export a choice containing a choice', function() {
      const ns = new mdl.Namespace('shr.test');
      addChoiceOfChoice(ns);
      const expected = wrappedExpectedFn('ChoiceOfChoice', this);
      const actual = exportFn(ns);
      expect(actual).to.eql(expected);
    });

    it('should correctly export a group', function() {
      const ns = new mdl.Namespace('shr.test');
      const otherNS = new mdl.Namespace('shr.other.test');
      addGroup(ns, otherNS);
      const expected = wrappedExpectedFn('Group', this);
      const actual = exportFn(ns, otherNS);
      expect(actual).to.eql(expected);
    });

    it('should correctly export a group with a choice containing a choice', function() {
      const ns = new mdl.Namespace('shr.test');
      const otherNS = new mdl.Namespace('shr.other.test');
      addGroupWithChoiceOfChoice(ns, otherNS);
      const expected = wrappedExpectedFn('GroupWithChoiceOfChoice', this);
      const actual = exportFn(ns, otherNS);
      expect(actual).to.eql(expected);
    });

    it('should correctly export a group with name clashes', function() {
      const ns = new mdl.Namespace('shr.test');
      const otherNS = new mdl.Namespace('shr.other.test');
      addGroupPathClash(ns, otherNS);
      const expected = wrappedExpectedFn('GroupPathClash', this);
      const actual = exportFn(ns, otherNS);
      expect(actual).to.eql(expected);
    });

    it('should correctly export an element based on a group element', function() {
      const ns = new mdl.Namespace('shr.test');
      const otherNS = new mdl.Namespace('shr.other.test');
      addGroupDerivative(ns, otherNS);
      const expected = wrappedExpectedFn('GroupDerivative', this);
      const actual = exportFn(ns, otherNS);
      expect(actual).to.eql(expected);
    });
  };
}

function addGroup(ns, otherNS, addSubElements=true) {
  let gr = new mdl.DataElement(id(ns.namespace, 'Group'), true)
    .withDescription('It is a group of elements')
    .withConcept(new mdl.Concept('http://foo.org', 'bar', 'Foobar'))
    .withConcept(new mdl.Concept('http://boo.org', 'far', 'Boofar'))
    .withField(new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(1, 1))
    .withField(new mdl.IdentifiableValue(id('shr.test', 'Coded')).withMinMax(0, 1))
    .withField(new mdl.ChoiceValue().withMinMax(0, 2)
      .withOption(new mdl.IdentifiableValue(id('shr.other.test', 'Simple')).withMinMax(1, 1))
      .withOption(new mdl.IdentifiableValue(id('shr.test', 'ForeignElementValue')).withMinMax(1))
    )
    .withField(new mdl.IdentifiableValue(id('shr.test', 'ElementValue')).withMinMax(0));
  ns.addDefinition(gr);
  if (addSubElements) {
    addSimpleElement(ns);
    addCodedElement(ns);
    addSimpleElement(otherNS);
    addForeignElementValue(ns, otherNS);
    addElementValue(ns);
  }
  return gr;
}

function addGroupWithChoiceOfChoice(ns, otherNS, addSubElements=true) {
  let gr = new mdl.DataElement(id(ns.namespace, 'GroupWithChoiceOfChoice'), true)
    .withDescription('It is a group of elements with a choice containing a choice')
    .withField(new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(1, 1))
    .withField(new mdl.IdentifiableValue(id('shr.test', 'Coded')).withMinMax(0, 1))
    .withField(new mdl.ChoiceValue().withMinMax(0,2)
      .withOption(new mdl.IdentifiableValue(id('shr.other.test', 'Simple')).withMinMax(1, 1))
      .withOption(new mdl.ChoiceValue().withMinMax(1, 1)
        .withOption(new mdl.IdentifiableValue(id('shr.test', 'ForeignElementValue')).withMinMax(1))
        .withOption(new mdl.IdentifiableValue(id('shr.test', 'ElementValue')).withMinMax(1))
      )
    );
  ns.addDefinition(gr);
  if (addSubElements) {
    addSimpleElement(ns);
    addCodedElement(ns);
    addSimpleElement(otherNS);
    addForeignElementValue(ns, otherNS);
    addElementValue(ns);
  }
  return gr;
}

function addGroupPathClash(ns, nsOther, addSubElements=true) {
  let gr = new mdl.DataElement(id(ns.namespace, 'GroupPathClash'), true)
    .withDescription('It is a group of elements with clashing names')
    .withField(new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(1, 1))
    .withField(new mdl.IdentifiableValue(id('shr.other.test', 'Simple')).withMinMax(0, 1));
  ns.addDefinition(gr);
  if (addSubElements) {
    addSimpleElement(ns);
    addSimpleElement(nsOther);
  }
  return gr;
}

function addGroupDerivative(ns, otherNS, addSubElements=true) {
  let gd = new mdl.DataElement(id(ns.namespace, 'GroupDerivative'), true)
    .withBasedOn(id('shr.test', 'Group'))
    .withDescription('It is a derivative of a group of elements')
    .withValue(new mdl.IdentifiableValue(pid('string')).withMinMax(1, 1));
  ns.addDefinition(gd);
  if (addSubElements) {
    addGroup(ns, otherNS, addSubElements);
  }
  return gd;
}

function addSimpleElement(ns) {
  let de = new mdl.DataElement(id(ns.namespace, 'Simple'), true)
    .withDescription('It is a simple element')
    .withConcept(new mdl.Concept('http://foo.org', 'bar', 'Foobar'))
    .withValue(new mdl.IdentifiableValue(pid('string')).withMinMax(1, 1));
  ns.addDefinition(de);
  return de;
}

function addCodedElement(ns) {
  let de = new mdl.DataElement(id(ns.namespace, 'Coded'), true)
    .withDescription('It is a coded element')
    .withValue(new mdl.IdentifiableValue(pid('code')).withMinMax(1, 1)
      .withConstraint(new mdl.ValueSetConstraint('http://standardhealthrecord.org/test/vs/Coded'))
    );
  ns.addDefinition(de);
  return de;
}

function addSimpleReference(ns) {
  let de = new mdl.DataElement(id(ns.namespace, 'SimpleReference'), true)
    .withDescription('It is a reference to a simple element')
    .withValue(new mdl.RefValue(id(ns.namespace, 'Simple')).withMinMax(1, 1));
  ns.addDefinition(de);
  return de;
}

function addTwoDeepElementValue(ns, addSubElement=true) {
  let de = new mdl.DataElement(id(ns.namespace, 'TwoDeepElementValue'), true)
    .withDescription('It is an element with a two-deep element value')
    .withValue(new mdl.IdentifiableValue(id(ns.namespace, 'ElementValue')).withMinMax(1, 1));
  ns.addDefinition(de);
  if (addSubElement) {
    addElementValue(ns, true);
  }
  return de;
}

function addElementValue(ns, addSubElement=true) {
  let de = new mdl.DataElement(id(ns.namespace, 'ElementValue'), true)
    .withDescription('It is an element with an element value')
    .withValue(new mdl.IdentifiableValue(id(ns.namespace, 'Simple')).withMinMax(1, 1));
  ns.addDefinition(de);
  if (addSubElement) {
    addSimpleElement(ns);
  }
  return de;
}

function addForeignElementValue(ns, otherNS) {
  let de = new mdl.DataElement(id(ns.namespace, 'ForeignElementValue'), true)
    .withDescription('It is an element with a foreign element value')
    .withValue(new mdl.IdentifiableValue(id(otherNS.namespace, 'Simple')).withMinMax(1, 1));
  ns.addDefinition(de);
  addSimpleElement(otherNS);
  return de;
}

function addChoice(ns, addSubElements=true) {
  let ch = new mdl.DataElement(id(ns.namespace, 'Choice'), true)
    .withDescription('It is an element with a choice')
    .withValue(new mdl.ChoiceValue().withMinMax(1, 1)
      .withOption(new mdl.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withOption(new mdl.IdentifiableValue(pid('code')).withMinMax(0)
        .withConstraint(new mdl.ValueSetConstraint('http://standardhealthrecord.org/test/vs/CodeChoice'))
      )
      .withOption(new mdl.IdentifiableValue(id('shr.test', 'Coded')).withMinMax(1, 1))
    );
  ns.addDefinition(ch);
  if (addSubElements) {
    addCodedElement(ns);
  }
  return ch;
}

function addChoiceOfChoice(ns) {
  let de = new mdl.DataElement(id(ns.namespace, 'ChoiceOfChoice'), true)
    .withDescription('It is an element with a choice containing a choice')
    .withValue(new mdl.ChoiceValue().withMinMax(1, 1)
      .withOption(new mdl.IdentifiableValue(pid('string')).withMinMax(1, 1))
      .withOption(new mdl.ChoiceValue().withMinMax(1, 1)
        .withOption(new mdl.IdentifiableValue(pid('integer')).withMinMax(1, 1))
        .withOption(new mdl.IdentifiableValue(pid('decimal')).withMinMax(1, 1))
      )
      .withOption(new mdl.IdentifiableValue(pid('code')).withMinMax(0)
        .withConstraint(new mdl.ValueSetConstraint('http://standardhealthrecord.org/test/vs/CodeChoice'))
      )
    );
  ns.addDefinition(de);
  return de;
}

function id(namespace, name) {
  return new mdl.Identifier(namespace, name);
}

function pid(name) {
  return new mdl.PrimitiveIdentifier(name);
}

module.exports = {commonTests};