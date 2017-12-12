const {expect} = require('chai');
const mdl = require('../index');

describe('#Concept', () => {
  it('should correctly calculate equality and handling cloning.', () => {
    const code = new mdl.Concept('urn:x-test:some/namespace', '12345', 'My first code!');
    const code2 = code.clone();
    expect(code2.system).to.eql(code.system);
    expect(code2.code).to.eql(code.code);
    expect(code2.display).to.eql(code.display);
    expect(code2.equals(code)).to.be.true;

    code2.display = 'Another name for the code.'
    expect(code2.equals(code)).to.be.true;

    code2.code = '6789'
    expect(code2.equals(code)).to.be.false;
  });
})

describe('#Value', () => {
  it('should correctly set and get cardinalities', () => {
    // Need to use an subclass of Value to get an instance
    let val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'));

    // Normal setter
    val.card = new mdl.Cardinality(1,2);
    expect(val.card.min).to.equal(1);
    expect(val.card.max).to.equal(2);

    // Chained setter
    val = val.withCard(new mdl.Cardinality(3,4));
    expect(val.card.min).to.equal(3);
    expect(val.card.max).to.equal(4);

    // Normal set min/max
    val.setMinMax(5,6);
    expect(val.card.min).to.equal(5);
    expect(val.card.max).to.equal(6);

    // Chained set min/max
    val = val.withMinMax(7,8);
    expect(val.card.min).to.equal(7);
    expect(val.card.max).to.equal(8);
  });

  it('should correctly set and get constraints', () => {
    // Need to use an subclass of Value to get an instance
    let val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);

    // Normal setter
    val.constraints = [
      new mdl.CardConstraint(new mdl.Cardinality(1,2)),
      new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'SonOfFoo'))
    ];
    expect(val.constraints).to.have.length(2);
    expect(val.constraints[0]).to.be.instanceof(mdl.CardConstraint);
    expect(val.constraints[1]).to.be.instanceof(mdl.TypeConstraint);

    // AddConstraint
    val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    val.addConstraint(new mdl.CardConstraint(new mdl.Cardinality(1,2)));
    val.addConstraint(new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'SonOfFoo')));
    expect(val.constraints).to.have.length(2);
    expect(val.constraints[0]).to.be.instanceof(mdl.CardConstraint);
    expect(val.constraints[1]).to.be.instanceof(mdl.TypeConstraint);

    // WithConstraint
    val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1)
      .withConstraint(new mdl.CardConstraint(new mdl.Cardinality(1,2)))
      .withConstraint(new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'SonOfFoo')));
    expect(val.constraints).to.have.length(2);
    expect(val.constraints[0]).to.be.instanceof(mdl.CardConstraint);
    expect(val.constraints[1]).to.be.instanceof(mdl.TypeConstraint);
  });

  it('should correctly indicate when it has constraints', () => {
    // Need to use an subclass of Value to get an instance
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    expect(val.hasConstraints).to.be.false;
    val.addConstraint(new mdl.CardConstraint(new mdl.Cardinality(1,2)));
    expect(val.hasConstraints).to.be.true;
  });

  it('should correctly provide a constraint filter', () => {
    // Need to use an subclass of Value to get an instance
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1)
      .withConstraint(new mdl.CardConstraint(new mdl.Cardinality(1,2)))
      .withConstraint(new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'SonOfFoo')));
    const filter = val.constraintsFilter;
    expect(filter).to.be.instanceof(mdl.ConstraintsFilter);
    expect(filter.constraints).to.have.length(2);
    expect(filter.constraints[0]).to.be.instanceof(mdl.CardConstraint);
    expect(filter.constraints[1]).to.be.instanceof(mdl.TypeConstraint);
  });

  it('should correctly get the constrained cardinality when getting effective contraint', () => {
    // Need to use an subclass of Value to get an instance
    let val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(0,3);
    expect(val.card).to.eql(new mdl.Cardinality(0,3));
    expect(val.effectiveCard).to.eql(new mdl.Cardinality(0,3));
    val.addConstraint(new mdl.CardConstraint(new mdl.Cardinality(1,2)));
    expect(val.card).to.eql(new mdl.Cardinality(0,3));
    expect(val.effectiveCard).to.eql(new mdl.Cardinality(1,2));
  });

  it('should correctly clone its properties', () => {
    // Need to use an subclass of Value to get an instance
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(0,1)
      .withConstraint(new mdl.CardConstraint(new mdl.Cardinality(1,1)))
      .withConstraint(new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'SonOfFoo')))
      .withInheritance(mdl.INHERITED);
    const val2 = val.clone();
    // Ensure they're not the same instance ('equal'), but they have equal values ('eql')
    expect(val2).not.to.equal(val);
    expect(val2).to.eql(val);
    expect(val2.card).not.to.equal(val.card);
    expect(val2.card).to.eql(val.card);
    expect(val2.constraints).not.to.equal(val.constraints);
    expect(val2.constraints[0]).not.to.equal(val.constraints[0]);
    expect(val2.constraints[1]).not.to.equal(val.constraints[1]);
    expect(val2.constraints).to.eql(val.constraints);
    expect(val2.inheritance).to.equal(val.inheritance);
    expect(val2.equals(val)).to.be.true;
  });

  it('should ignore inheritance during equality when asked', () => {
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(0,1)
      .withConstraint(new mdl.CardConstraint(new mdl.Cardinality(1,1)))
      .withConstraint(new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'SonOfFoo')))
      .withInheritance(mdl.INHERITED);

    const val2 = val.clone();
    val2.inheritance = mdl.OVERRIDDEN;

    expect(val2.equals(val)).to.be.false;
    expect(val2.equals(val, true)).to.be.true;
  });
});

describe('#IdentifiableValue', () => {
  it('should correctly get the identifier', () => {
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    expect(val.identifier).to.eql(new mdl.Identifier('shr.test', 'Foo'));
  });

  it('should correctly get the constrained type when getting effective identifier', () => {
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    expect(val.identifier).to.eql(new mdl.Identifier('shr.test', 'Foo'));
    expect(val.effectiveIdentifier).to.eql(new mdl.Identifier('shr.test', 'Foo'));
    val.addConstraint(new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'SonOfFoo')));
    expect(val.identifier).to.eql(new mdl.Identifier('shr.test', 'Foo'));
    expect(val.effectiveIdentifier).to.eql(new mdl.Identifier('shr.test', 'SonOfFoo'));
  });

  it('should correctly clone its properties', () => {
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    const val2 = val.clone();
    // Ensure they're not the same instance ('equal'), but they have equal values ('eql')
    expect(val2).not.to.equal(val);
    expect(val2).to.eql(val);
    expect(val2.identifier).not.to.equal(val.identifier);
    expect(val2.identifier).to.eql(val.identifier);
    expect(val2.equals(val)).to.be.true;
  });

  it('should toString its class and identifier', () => {
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    const str = val.toString();
    expect(str).to.equal('Foo');
  });

  it('should ignore inheritance during equality when asked', () => {
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
        .withMinMax(1,1);
    const val2 = val.clone();
    val2.inheritance = mdl.INHERITED;
    expect(val2.equals(val)).to.be.false;
    expect(val2.equals(val, true)).to.be.true;
  });
});

describe('#RefValue', () => {
  it('should correctly get the identifier', () => {
    const val = new mdl.RefValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    expect(val.identifier).to.eql(new mdl.Identifier('shr.test', 'Foo'));
  });

  it('should correctly get the constrained type when getting effective identifier', () => {
    const val = new mdl.RefValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    expect(val.identifier).to.eql(new mdl.Identifier('shr.test', 'Foo'));
    expect(val.effectiveIdentifier).to.eql(new mdl.Identifier('shr.test', 'Foo'));
    val.addConstraint(new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'SonOfFoo')));
    expect(val.identifier).to.eql(new mdl.Identifier('shr.test', 'Foo'));
    expect(val.effectiveIdentifier).to.eql(new mdl.Identifier('shr.test', 'SonOfFoo'));
  });

  it('should correctly clone its properties', () => {
    const val = new mdl.RefValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    const val2 = val.clone();
    // Ensure they're not the same instance ('equal'), but they have equal values ('eql')
    expect(val2).not.to.equal(val);
    expect(val2).to.eql(val);
    expect(val2.identifier).not.to.equal(val.identifier);
    expect(val2.identifier).to.eql(val.identifier);
    expect(val2.equals(val)).to.be.true;
  });

  it('should toString its class and identifier', () => {
    const val = new mdl.RefValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    const str = val.toString();
    expect(str).to.equal('ref(Foo)');
  });

  it('should not equal a similar IndentifiableValue', () => {
    const val = new mdl.RefValue(new mdl.Identifier('shr.test', 'Foo'))
        .withMinMax(1,1);
    const ival = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
        .withMinMax(1,1);
    expect(val.equals(ival)).to.be.false;
    expect(ival.equals(val)).to.be.false;
  });

  it('should ignore inheritance during equality when asked', () => {
    const val = new mdl.RefValue(new mdl.Identifier('shr.test', 'Foo'))
        .withMinMax(1,1);
    const val2 = val.clone();
    val.inheritance = mdl.OVERRIDDEN;
    expect(val2.equals(val)).to.be.false;
    expect(val2.equals(val, true)).to.be.true;
  });
});

describe('#ChoiceValue', () => {
  it('should correctly set and get options', () => {
    // AddOption
    let val = new mdl.ChoiceValue().withMinMax(1,1);
    val.addOption(new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo')).withMinMax(1,1));
    val.addOption(new mdl.RefValue(new mdl.Identifier('shr.test', 'Bar')).withMinMax(0,1));
    expect(val.options).to.eql([
      new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo')).withMinMax(1,1),
      new mdl.RefValue(new mdl.Identifier('shr.test', 'Bar')).withMinMax(0,1)
    ]);

    // WithOption
    val = new mdl.ChoiceValue()
      .withMinMax(1,1)
      .withOption(new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo')).withMinMax(1,1))
      .withOption(new mdl.RefValue(new mdl.Identifier('shr.test', 'Bar')).withMinMax(0,1));
    expect(val.options).to.eql([
      new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo')).withMinMax(1,1),
      new mdl.RefValue(new mdl.Identifier('shr.test', 'Bar')).withMinMax(0,1)
    ]);
  });

  function cloneValues() {
    const val = new mdl.ChoiceValue()
        .withMinMax(1,1)
        .withOption(new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo')).withMinMax(1,1))
        .withOption(new mdl.RefValue(new mdl.Identifier('shr.test', 'Bar')).withMinMax(0,1));
    const val2 = val.clone();
    return {val, val2};
  }
  it('should correctly clone its properties', () => {
    const {val, val2} = cloneValues();
    // Ensure they're not the same instance ('equal'), but they have equal values ('eql')
    expect(val2).not.to.equal(val);
    expect(val2).to.eql(val);
    expect(val2.options).not.to.equal(val.options);
    expect(val2.options[0]).not.to.equal(val.options[0]);
    expect(val2.options[1]).not.to.equal(val.options[1]);
    expect(val2.options).to.eql(val.options);
    expect(val2.equals(val)).to.be.true;
  });

  it('should toString its class and identifier', () => {
    const val = new mdl.ChoiceValue()
      .withMinMax(1,1)
      .withOption(new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo')).withMinMax(1,1))
      .withOption(new mdl.RefValue(new mdl.Identifier('shr.test', 'Bar')).withMinMax(0,1));
    const str = val.toString();
    expect(str).to.equal('Choice(Foo, ref(Bar))');
  });

  it('should ignore inheritance during equality when asked', () => {
    const {val, val2} = cloneValues();
    val.inheritance = mdl.INHERITED;
    val2.inheritance = mdl.OVERRIDDEN;
    expect(val2.equals(val)).to.be.false;
    expect(val2.equals(val, true)).to.be.true;
    val2.inheritance = mdl.INHERITED;
    expect(val2.equals(val)).to.be.true;

    val.options[0].inheritance = mdl.INHERITED;
    val2.options[0].inheritance = mdl.OVERRIDDEN;
    val2.options[1].inheritance = mdl.INHERITED;

    expect(val2.equals(val)).to.be.false;
    expect(val2.equals(val, true)).to.be.true;
  });

  it('should be properly identified as the effective value on a constrained element', () => {
    // TODO: Perhaps this should be moved to a separate suite for ConstraintsFilter.
    // TODO: We should also test for IncludesTypeConstraint's isOnValue as well.
    const base = new mdl.DataElement(new mdl.Identifier('shr.test', 'ChoiceValue'))
      .withValue(new mdl.ChoiceValue()
        .withMinMax(1,1)
        .withOption(new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo')).withMinMax(1,1))
        .withOption(new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Bar')).withMinMax(1,1)));
    const consumer = new mdl.DataElement(new mdl.Identifier('shr.test', 'Consumer'))
      .withValue(new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'ChoiceValue'))
        .withConstraint(new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'Bar')).withOnValue(true)));

    expect(consumer.value.effectiveIdentifier.equals(new mdl.Identifier('shr.test', 'ChoiceValue'))).to.be.true;
  });
});

describe('#IncompleteValue', () => {
  it('should correctly get the identifier', () => {
    const val = new mdl.IncompleteValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    expect(val.identifier).to.eql(new mdl.Identifier('shr.test', 'Foo'));
  });

  it('should correctly clone its properties', () => {
    const val = new mdl.IncompleteValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    const val2 = val.clone();
    // Ensure they're not the same instance ('equal'), but they have equal values ('eql')
    expect(val2).not.to.equal(val);
    expect(val2).to.eql(val);
    expect(val2.identifier).not.to.equal(val.identifier);
    expect(val2.identifier).to.eql(val.identifier);
  });

  it('should toString its class and identifier', () => {
    const val = new mdl.IncompleteValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    const str = val.toString();
    expect(str).to.equal('IncompleteValue<shr.test.Foo>');
  });

  it('should not equal a similar IndentifiableValue', () => {
    const val = new mdl.IncompleteValue(new mdl.Identifier('shr.test', 'Foo'))
        .withMinMax(1,1);
    const ival = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
        .withMinMax(1,1);
    expect(val.equals(ival)).to.be.false;
    expect(ival.equals(val)).to.be.false;
  });

  it('should ignore inheritance during equality when asked', () => {
    const val = new mdl.IncompleteValue(new mdl.Identifier('shr.test', 'Foo'))
        .withMinMax(1,1);
    const val2 = val.clone();
    val2.inheritance = mdl.INHERITED;
    expect(val2.equals(val)).to.be.false;
    expect(val2.equals(val, true)).to.be.true;
  });
});

describe('#TBD', () => {
  it('should correctly get the text', () => {
    const val = new mdl.TBD('To Be Defined').withMinMax(1,1);
    expect(val.text).to.equal('To Be Defined');
  });

  it('should correctly clone its properties', () => {
    const val = new mdl.TBD('To Be Defined').withMinMax(1,1);
    const val2 = val.clone();
    // Ensure they're not the same instance ('equal'), but they have equal values ('eql')
    expect(val2).not.to.equal(val);
    expect(val2).to.eql(val);
    expect(val2.text).to.equal(val.text);
    expect(val2.equals(val)).to.be.true;
    val.inheritance = mdl.OVERRIDDEN;
    val2.inheritance = mdl.INHERITED;
    expect(val2.equals(val)).to.be.true;
    expect(val2.equals(val, false)).to.be.true;
  });

  it('should toString its class and identifier', () => {
    const val = new mdl.TBD('To Be Defined').withMinMax(1,1);
    const str = val.toString();
    expect(str).to.equal('TBD(To Be Defined)');
  });
});