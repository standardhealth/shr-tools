const {expect} = require('chai');
const mdl = require('../index');

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
      .withConstraint(new mdl.TypeConstraint(new mdl.Identifier('shr.test', 'SonOfFoo')));
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
  });

  it('should toString its class and identifier', () => {
    const val = new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    const str = val.toString();
    expect(str).to.equal('IdentifiableValue<shr.test.Foo>');
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
  });

  it('should toString its class and identifier', () => {
    const val = new mdl.RefValue(new mdl.Identifier('shr.test', 'Foo'))
      .withMinMax(1,1);
    const str = val.toString();
    expect(str).to.equal('RefValue<shr.test.Foo>');
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

  it('should correctly clone its properties', () => {
    const val = new mdl.ChoiceValue()
      .withMinMax(1,1)
      .withOption(new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo')).withMinMax(1,1))
      .withOption(new mdl.RefValue(new mdl.Identifier('shr.test', 'Bar')).withMinMax(0,1));
    const val2 = val.clone();
    // Ensure they're not the same instance ('equal'), but they have equal values ('eql')
    expect(val2).not.to.equal(val);
    expect(val2).to.eql(val);
    expect(val2.options).not.to.equal(val.options);
    expect(val2.options[0]).not.to.equal(val.options[0]);
    expect(val2.options[1]).not.to.equal(val.options[1]);
    expect(val2.options).to.eql(val.options);
  });

  it('should toString its class and identifier', () => {
    const val = new mdl.ChoiceValue()
      .withMinMax(1,1)
      .withOption(new mdl.IdentifiableValue(new mdl.Identifier('shr.test', 'Foo')).withMinMax(1,1))
      .withOption(new mdl.RefValue(new mdl.Identifier('shr.test', 'Bar')).withMinMax(0,1));
    const str = val.toString();
    expect(str).to.equal('ChoiceValue<IdentifiableValue<shr.test.Foo>|RefValue<shr.test.Bar>>');
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
  });

  it('should toString its class and identifier', () => {
    const val = new mdl.TBD('To Be Defined').withMinMax(1,1);
    const str = val.toString();
    expect(str).to.equal('TBD<To Be Defined>');
  });
});