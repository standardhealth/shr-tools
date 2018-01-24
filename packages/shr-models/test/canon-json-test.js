const { expect } = require('chai');
const mdl = require('../index');
const fs = require('fs');
const path = require('path');


describe('#CanonicalJSON.DataElements.core', () => {
    it('should correctly generate a simple element', () => {
        let de = new simpleDE('shr.test', 'SimpleElement', false, false);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixture('SimpleElement')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate a simple element with concept and description', () => {
        let de = new simpleDE('shr.test', 'SimpleElement', false, false)
            .withDescription('It is a simple element')
            .withConcept(new mdl.Concept('http://foo.org', 'bar', 'Foobar'));
                
        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixture('SimpleConceptAndDescription')
                
        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate a simple entry element', () => {
        let de = new simpleDE('shr.test', 'SimpleEntry', true, false);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixture('SimpleEntry')

        expect(outputJson).to.deep.equal(fixtureJson);
        
    });

    it('should correctly generate a simple abstract element', () => {
        let de = new simpleDE('shr.test', 'SimpleAbstract', false, true)

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixture('SimpleAbstract')

        expect(outputJson).to.deep.equal(fixtureJson);
    });
    
    it('should correctly generate a simple element with a reference', () => {
        let string = new simpleDE('shr.test', 'Simple', false, false);
        let de = new simpleDE('shr.test', 'SimpleReference', true, false)
            .withValue(new mdl.RefValue(id('shr.test', 'Simple')).withMinMax(1, 1))
            .withDescription('It is a reference to a simple element');
        
        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixture('SimpleReference')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate an element with a multi-string value', () => {
        let de = new simpleDE('shr.test', 'MultiString', true, false)
            .withDescription('It is a multi-string entry')
            .withValue(new mdl.IdentifiableValue(pid('string')).withMinMax(1));

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixture('MultiString')

        expect(outputJson).to.deep.equal(fixtureJson);

    });
    
    it('should correctly generate an element with multiple vocabularies', () => {
        let de = new simpleDE('shr.test', 'Simple', true, false)
            .withDescription('It is a multi-concept entry')
            .withConcept(new mdl.Concept('http://foo.org', 'bar', 'Foobar'))
            .withConcept(new mdl.Concept('urn:iso:std:iso:4217', 'baz', 'Foobaz'))
            .withConcept(new mdl.Concept('urn:oid:2.16.840.1.114222.4.11.826', 'bam', 'Foobam'));

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixture('MultipleVocabularies')

        expect(outputJson).to.deep.equal(fixtureJson);
    });


    // it('should correctly generate elements based on other elements', () => {
    //     let simple = new simpleDE('shr.test', 'Simple');
    //     let simple2 = new simpleDE('shr.test', 'Simple2');
        
    //     let simpleBase = new mdl.DataElement(id('shr.test', 'simpleBase'), false, false)
    //         .withConcept(new mdl.Concept('http://boo.org', 'far', undefined))
    //         .withField(new mdl.IdentifiableValue('shr.test', 'Simple2').withCard(1));
        
    //     let simpleBasedOn = new mdl.DataElement(id('shr.test', 'simpleBasedOn'), false, false)
    //         .withBasedOn(id('shr.test', 'SimpleBase'))
    //         .withConcept(new mdl.Concept('http://boo.org', 'far', undefined))
    //         .withValue(new mdl.IdentifiableValue('shr.test', 'Simple2').withCard(1));
        
    //         let outputJson = simpleBasedOn.toJSON();
    //         let fixtureJson = importDataElementFixture('MultipleVocabularies')
    
    //         expect(outputJson).to.deep.equal({"fixtureJson":"hi"});
    //     });

    //it('should correctly generate elements based on TBDs', () => {});

    it('should correctly generate an entry element with a coded value', () => {
         let de = new simpleDE('shr.test', 'SimpleCoded', true, false)
         .withValue(new mdl.IdentifiableValue(pid('code')).withMinMax(1, 1));      
         
        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixture('SimpleCoded')

        expect(outputJson).to.deep.equal(fixtureJson);
       
    });    
});

describe('#DataElements.choices', () => {
    it('should correctly generate simple choices on values', () => {
        let de = new simpleDE('shr.test', 'SimpleChoice', true, false)
            .withValue(new mdl.ChoiceValue().withMinMax(1,1)
                .withOption(new mdl.IdentifiableValue(pid('date')).withMinMax(0,1))
                .withOption(new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(0,1))
                .withOption(new mdl.IdentifiableValue(id('other.ns', 'Simple2')).withMinMax(0,1)));

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['choices'], 'SimpleChoice')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate complex choices on values', () => {
        let TESTVS = 'http://standardhealthrecord.org/test/vs'

        let de = new simpleDE('shr.test', 'ComplexChoice', true, false)
            .withValue(new mdl.ChoiceValue().withMinMax(0,1)
                .withOption(new mdl.IdentifiableValue(pid('date'))
                    .withMinMax(0, 1)
                    .withConstraint(new mdl.CodeConstraint(new mdl.Concept('http://foo.org', 'date'))))
                .withOption(new mdl.IdentifiableValue(id('other.ns', 'Simple2'))
                    .withMinMax(0, 1)
                    .withConstraint(new mdl.ValueSetConstraint(`${TESTVS}/Choice`)))
                .withOption(new mdl.IdentifiableValue(id('shr.test', 'Simple'))
                    .withMinMax(0, 1))
            );

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['choices'], 'ComplexChoice')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate simple choices on fields', () => {
        let de = new simpleDE('shr.test', 'SimpleChoiceField', true, false)
            .withField(new mdl.ChoiceValue().withMinMax(1,1)
                .withOption(new mdl.IdentifiableValue(pid('date')).withMinMax(0,1))
                .withOption(new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(0,1))
                .withOption(new mdl.IdentifiableValue(id('other.ns', 'Simple2')).withMinMax(0, 1)));

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['choices'], 'SimpleChoiceField')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate complex choices on fields', () => {
        let TESTVS = 'http://standardhealthrecord.org/test/vs'

        let de = new simpleDE('shr.test', 'ComplexChoiceField', true, false)
            .withField(new mdl.ChoiceValue().withMinMax(0,1)
                .withOption(new mdl.IdentifiableValue(pid('date')).withMinMax(0, 1)
                    .withConstraint(new mdl.CodeConstraint(new mdl.Concept('http://foo.org', 'date'))))
                .withOption(new mdl.IdentifiableValue(id('other.ns', 'Simple2')).withMinMax(0,1)
                    .withConstraint(new mdl.ValueSetConstraint(`${TESTVS}/Choice`)))
                .withOption(new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(0, 1)));

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['choices'], 'ComplexChoiceField')

        expect(outputJson).to.deep.equal(fixtureJson);
    });
});

describe('#DataElements.constraints', () => {
    //card constraints (expanded tests in expander tooling)
    it('should correctly generate card constraint on field child', () => {
        let simple = new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(0, 1)
        let simple2 = new mdl.IdentifiableValue(id('shr.test', 'Simple2')).withMinMax(0, 1)
            .withConstraint(new mdl.CardConstraint(new mdl.Cardinality(1, 2), [pid('string')]))
        
        let de = new mdl.DataElement(id('shr.test', 'CardConstraintOnFieldChild'), true, false)
            .withField(simple)
            .withField(simple2);
        

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'cardConstraints'], 'CardConstraintOnFieldChild')

        expect(outputJson).to.deep.equal(fixtureJson);
    });
        
    it('should correctly generate card constraint on value child', () => {
            let simple = new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(1, 1)
                .withConstraint(new mdl.CardConstraint(new mdl.Cardinality(1, 2), [pid('string')]))
        
            let de = new mdl.DataElement(id('shr.test', 'CardConstraintOnValueChild'), true, false)
                .withValue(simple);

            let outputJson = de.toJSON();
            let fixtureJson = importDataElementFixtureFromPath(['constraints', 'cardConstraints'], 'CardConstraintOnValueChild')

            expect(outputJson).to.deep.equal(fixtureJson);
        });


    //code constraints
    it('should correctly generate code constraint on field', () => {
        let defaultCode = new mdl.Concept('http://foo.org', 'bar');
        
        let de = new mdl.DataElement(id('shr.test', 'CodeConstraintOnField'), true, false)
            .withField(new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(0, 1))
            .withField(new mdl.IdentifiableValue(id('shr.test', 'Coding')).withMinMax(0, 1)
                .withConstraint(new mdl.CodeConstraint(defaultCode, [pid('code')]))
            )

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'codeConstraints'], 'CodeConstraintOnField')

        expect(outputJson).to.deep.equal(fixtureJson);
    })


    it('should correctly generate code constraint on field child', () => {
        let defaultCode = new mdl.Concept('http://foo.org', 'bar');
        
        let de = new mdl.DataElement(id('shr.test', 'CodeConstraintOnFieldChild'), true, false)
            .withField(new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(0, 1))
            .withField(new mdl.IdentifiableValue(id('shr.test', 'CodedFromValueSet')).withMinMax(0, 1)
                .withConstraint(new mdl.CodeConstraint(defaultCode, [id('shr.test','Coding'), pid('code')]))
            )

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'codeConstraints'], 'CodeConstraintOnFieldChild')

        expect(outputJson).to.deep.equal(fixtureJson);

    })

    it('should correctly generate code constraint on value', () => {
        let defaultCode = new mdl.Concept('http://foo.org', 'bar');
        
        let de = new mdl.DataElement(id('shr.test', 'CodeConstraintOnValue'), true, false)
            .withValue(new mdl.IdentifiableValue(id('shr.test', 'Coding')).withMinMax(1, 1)
                .withConstraint(new mdl.CodeConstraint(defaultCode, [pid('code')]))
            )

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'codeConstraints'], 'CodeConstraintOnValue')

        expect(outputJson).to.deep.equal(fixtureJson);

    })

    it('should correctly generate code constraint on value child', () => {
        let defaultCode = new mdl.Concept('http://foo.org', 'bar');

        let de = new mdl.DataElement(id('shr.test', 'CodeConstraintOnValueChild'), true, false)
            .withValue(new mdl.IdentifiableValue(id('shr.test', 'CodedFromValueSet')).withMinMax(1, 1)
                .withConstraint(new mdl.CodeConstraint(defaultCode, [id('shr.test','Coding'), pid('code')]))
            )

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'codeConstraints'], 'CodeConstraintOnValueChild')

        expect(outputJson).to.deep.equal(fixtureJson);

    })

    it('should correctly generate systemless code constraint on value', () => {
        let defaultCode = new mdl.Concept(null, 'bar');

        let de = new mdl.DataElement(id('shr.test', 'SystemlessCodeConstraintOnValue'), true, false)
            .withValue(new mdl.IdentifiableValue(id('shr.test', 'Coding')).withMinMax(1, 1)
                .withConstraint(new mdl.CodeConstraint(defaultCode, [pid('code')]))
            )

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'codeConstraints'], 'SystemlessCodeConstraintOnValue')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    //includesCode constraints    
    

    it('should correctly generate includesCode constraints on field', () => {
        let defaultCode = new mdl.Concept('http://foo.org', 'bar');
        
        let de = new mdl.DataElement(id('shr.test', 'IncludesCodeConstraintOnValue'), true, false)
            .withValue(new mdl.IdentifiableValue(id('shr.test', 'Coding')).withMinMax(1)
                .withConstraint(new mdl.IncludesCodeConstraint(defaultCode, [pid('code')]))
            )

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'includesCodeConstraints'], 'IncludesCodeConstraintOnValue')

        expect(outputJson).to.deep.equal(fixtureJson);

    });

    it('should correctly generate includesCode constraints on field child', () => {
        let defaultCode = new mdl.Concept('http://foo.org', 'bar');
        
        let de = new mdl.DataElement(id('shr.test', 'IncludesCodeConstraintOnFieldChild'), true, false)
            .withField(new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(0, 1))
            .withField(new mdl.IdentifiableValue(id('shr.test', 'MultiCodedFromValueSet')).withMinMax(0, 1)
                .withConstraint(new mdl.IncludesCodeConstraint(defaultCode, [id('shr.test','Coding'), pid('code')]))
            )

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'includesCodeConstraints'], 'IncludesCodeConstraintOnFieldChild')

        expect(outputJson).to.deep.equal(fixtureJson);

    });

    it('should correctly generate includesCode constraints on value', () => {
        let defaultCode = new mdl.Concept('http://foo.org', 'bar');

        let de = new mdl.DataElement(id('shr.test', 'IncludesCodeConstraintOnValue'), true, false)
            .withValue(new mdl.IdentifiableValue(id('shr.test', 'Coding')).withMinMax(1)
                .withConstraint(new mdl.IncludesCodeConstraint(defaultCode, [pid('code')]))
            )

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'includesCodeConstraints'], 'IncludesCodeConstraintOnValue')

        expect(outputJson).to.deep.equal(fixtureJson);

    });

    it('should correctly generate includesCode constraints on value child', () => {
        let defaultCode = new mdl.Concept('http://foo.org', 'bar');

        let de = new mdl.DataElement(id('shr.test', 'IncludesCodeConstraintOnValueChild'), true, false)
            .withValue(new mdl.IdentifiableValue(id('shr.test', 'MultiCodedFromValueSet')).withMinMax(1, 1)
                .withConstraint(new mdl.IncludesCodeConstraint(defaultCode, [id('shr.test', 'Coding'), pid('code')]))
            )

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'includesCodeConstraints'], 'IncludesCodeConstraintOnValueChild')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    //type constraints

    it('should correctly generate type constraints on field', () => {
        let simple = new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(0, 1)
            .withConstraint(new mdl.TypeConstraint(id('shr.test', 'Simple2')))

        let de = new mdl.DataElement(id('shr.test', 'TypeConstraintOnField'), true, false)
            .withField(simple);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'typeConstraints'], 'TypeConstraintOnField')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate type constraints on field child', () => {
        let simple = new mdl.IdentifiableValue(id('shr.test', 'Complex')).withMinMax(0, 1)
            .withConstraint(new mdl.TypeConstraint(id('shr.test', 'Simple2'),[id('shr.test','Simple')]))

        let de = new mdl.DataElement(id('shr.test', 'TypeConstraintOnFieldChild'), true, false)
            .withField(simple);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'typeConstraints'], 'TypeConstraintOnFieldChild')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate type constraints on field child value', () => {
        let simple = new mdl.IdentifiableValue(id('shr.test', 'HasSimpleValue')).withMinMax(0, 1)
            .withConstraint(new mdl.TypeConstraint(id('shr.test', 'Simple2'), [id('shr.test','Simple')], true))

        let de = new mdl.DataElement(id('shr.test', 'TypeConstraintOnFieldValue'), true, false)
            .withField(simple);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'typeConstraints'], 'TypeConstraintOnFieldValue')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate type constraints on value', () => {
        let simple = new mdl.IdentifiableValue(id('shr.test', 'Simple')).withMinMax(1, 1)
            .withConstraint(new mdl.TypeConstraint(id('shr.test', 'Simple2')))

        let de = new mdl.DataElement(id('shr.test', 'TypeConstraintOnValue'), true, false)
            .withValue(simple);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'typeConstraints'], 'TypeConstraintOnValue')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate type constraints on value child', () => {
        let complex = new mdl.IdentifiableValue(id('shr.test', 'Complex')).withMinMax(1, 1)
            .withConstraint(new mdl.TypeConstraint(id('shr.test', 'Simple2'),[id('shr.test','Simple')]))

        let de = new mdl.DataElement(id('shr.test', 'TypeConstraintOnValueChild'), true, false)
            .withValue(complex);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'typeConstraints'], 'TypeConstraintOnValueChild')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    //includesType constraints

    it('should correctly generate includesType constraints on field', () => {
        let components = new mdl.IdentifiableValue(id('shr.test', 'Components')).withMinMax(1, 1)
            .withConstraint(new mdl.IncludesTypeConstraint(id('shr.test', 'Simple2'), new mdl.Cardinality(0, 1), [id('shr.test', 'ObservationComponent')]))
            .withConstraint(new mdl.IncludesTypeConstraint(id('shr.test', 'Simple3'), new mdl.Cardinality(1, 1), [id('shr.test', 'ObservationComponent')]))

        let de = new mdl.DataElement(id('shr.test', 'IncludesTypeConstraintOnField'), true, false)
            .withField(components);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'includesTypeConstraints'], 'IncludesTypeConstraintOnField')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate includesType constraints on field child', () => {
        let components = new mdl.IdentifiableValue(id('shr.test', 'Complex')).withMinMax(0, 1)
            .withConstraint(new mdl.IncludesTypeConstraint(id('shr.test', 'Simple2'), new mdl.Cardinality(0, 1), [id('shr.test', 'Components'), id('shr.test', 'ObservationComponent')]))
            .withConstraint(new mdl.IncludesTypeConstraint(id('shr.test', 'Simple3'), new mdl.Cardinality(1, 1), [id('shr.test', 'Components'), id('shr.test', 'ObservationComponent')]))

        let de = new mdl.DataElement(id('shr.test', 'IncludesTypeConstraintOnFieldChild'), true, false)
            .withField(components);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'includesTypeConstraints'], 'IncludesTypeConstraintOnFieldChild')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate includesType constraints on value', () => {
        let components = new mdl.IdentifiableValue(id('shr.test', 'Components')).withMinMax(1, 1)
            .withConstraint(new mdl.IncludesTypeConstraint(id('shr.test', 'Simple2'), new mdl.Cardinality(0, 1), [id('shr.test', 'ObservationComponent')]))
            .withConstraint(new mdl.IncludesTypeConstraint(id('shr.test', 'Simple3'), new mdl.Cardinality(1, 1), [id('shr.test', 'ObservationComponent')]))

        let de = new mdl.DataElement(id('shr.test', 'IncludesTypeConstraintOnValue'), true, false)
            .withValue(components);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'includesTypeConstraints'], 'IncludesTypeConstraintOnValue')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate includesType constraints on value', () => {
        let components = new mdl.IdentifiableValue(id('shr.test', 'Complex')).withMinMax(1, 1)
            .withConstraint(new mdl.IncludesTypeConstraint(id('shr.test', 'Simple2'), new mdl.Cardinality(0, 1), [id('shr.test', 'Components'), id('shr.test', 'ObservationComponent')]))
            .withConstraint(new mdl.IncludesTypeConstraint(id('shr.test', 'Simple3'), new mdl.Cardinality(1, 1), [id('shr.test', 'Components'), id('shr.test', 'ObservationComponent')]))

        let de = new mdl.DataElement(id('shr.test', 'IncludesTypeConstraintOnValueChild'), true, false)
            .withValue(components);

        let outputJson = de.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'includesTypeConstraints'], 'IncludesTypeConstraintOnValueChild')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    //valueset constraints
    it('should correctly generate valueset constraints with path', () => {
        let TESTVS = 'http://standardhealthrecord.org/test/vs'

        let codedFromVS = new simpleDE('shr.test', 'CodedWithCodeFromValueSet', false, false)
            .withValue(new mdl.IdentifiableValue(id('shr.test', 'Coding')).withMinMax(1, 1)
            .withConstraint(new mdl.ValueSetConstraint(`${TESTVS}/Coded`, [pid('code')])));

        let outputJson = codedFromVS.toJSON();
        let fixtureJson = importDataElementFixtureFromPath(['constraints', 'valuesetConstraints'], 'CodedWithCodeFromValueSet')

        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate an entry element with a coded value from valueset', () => {
        let TESTVS = 'http://standardhealthrecord.org/test/vs'

        let de = new simpleDE('shr.test', 'CodedFromValueSet', true, false)
            .withValue(new mdl.IdentifiableValue(pid('code')).withMinMax(1, 1)
                .withConstraint(new mdl.ValueSetConstraint(`${TESTVS}/Coded`)));

       let outputJson = de.toJSON();
       let fixtureJson = importDataElementFixtureFromPath(['constraints','valuesetConstraints'], 'CodedFromValueSet')

       expect(outputJson).to.deep.equal(fixtureJson);
   });


});

describe('#ValueSet', () => {

    it('should correctly generate a basic VS', () => {
        let vsName = 'BasicVS'
        let defaultURL = `http://foo.org`

        let vs = new mdl.ValueSet(id('shr.test', vsName), `${defaultURL}/vs/${vsName}`)
            .withDescription('BasicVS')
            .withConcept(new mdl.Concept('http://foo.org', "bar"))
            .withRule(new mdl.ValueSetIncludesCodeRule({
                "system": `${defaultURL}/test/cs/BasicCS`,
                "code": "AA",
                "display": "Foo",
            }))
            .withRule(new mdl.ValueSetIncludesCodeRule({
                "system": `${defaultURL}/test/cs/BasicCS`,
                "code": "AB",
                "display": "Foo"
            }));
        

        let outputJson = vs.toJSON();
        let fixtureJson = importValueSetFixture(vsName)
    
        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate a VS defining external codesystem codes', () => { 
        let vsName = 'ExternalCodeSystemVS'
        let defaultURL = `http://foo.org`

        let vs = new mdl.ValueSet(id('shr.test', vsName), `${defaultURL}/vs/${vsName}`)
            .withRule(new mdl.ValueSetIncludesCodeRule({
                "system": `http://boo.org`,
                "code": "12345",
                "display": "Foo",
            }))

        

        let outputJson = vs.toJSON();
        let fixtureJson = importValueSetFixture(vsName)
    
        expect(outputJson).to.deep.equal(fixtureJson);

    });
    
    it('should correctly generate an includes code from VS', () => { 
        let vsName = 'IncludesCodeFromCodeVS'
        let defaultURL = `http://foo.org`

        let vs = new mdl.ValueSet(id('shr.test', vsName), `${defaultURL}/vs/${vsName}`)
            .withRule(new mdl.ValueSetIncludesFromCodeRule({
                "system": defaultURL,
                "code": "12345",
            }));
        

        let outputJson = vs.toJSON();
        let fixtureJson = importValueSetFixture(vsName)
    
        expect(outputJson).to.deep.equal(fixtureJson);
    });

    it('should correctly generate an includes code from codesystem VS', () => { 
        let vsName = 'IncludesCodeFromCodesystemVS'
        let defaultURL = `http://foo.org`

        let vs = new mdl.ValueSet(id('shr.test', vsName), `${defaultURL}/vs/${vsName}`)
            .withRule(new mdl.ValueSetIncludesFromCodeSystemRule(defaultURL));
        

        let outputJson = vs.toJSON();
        let fixtureJson = importValueSetFixture(vsName)
    
        expect(outputJson).to.deep.equal(fixtureJson);

    });


    it('should correctly generate a descending and not descending from VS', () => { 
        let vsName = 'DescendingAndNotVS'
        let defaultURL = `http://foo.org`

        let vs = new mdl.ValueSet(id('shr.test', vsName), `${defaultURL}/vs/${vsName}`)
            .withRule(new mdl.ValueSetIncludesDescendentsRule({
                "system": defaultURL,
                "code": "12345",
            }))
            .withRule(new mdl.ValueSetExcludesDescendentsRule({
                "system": defaultURL,
                "code": "54321",
            }));
        

        let outputJson = vs.toJSON();
        let fixtureJson = importValueSetFixture(vsName)
    
        expect(outputJson).to.deep.equal(fixtureJson);

    });

});


//import fixture

function importDataElementFixture(name) {
    return importJSONFromFilePath(`dataelements/${name}.json`);
}

function importValueSetFixture(name) {
    return importJSONFromFilePath(`valuesets/${name}.json`);
}

function importDataElementFixtureFromPath(path, name) {
    return importJSONFromFilePath(`dataelements/${path.join('/')}/${name}.json`);
}
  
//   function importFixtureFolder(name, numExpectedErrors = 0) {
//     const dependencies = importFromFilePath(`${__dirname}/fixtures/dataElement/_dependencies`);
//     const specifications = importFromFilePath(`${__dirname}/fixtures/dataElement/${name}`, null, dependencies);
//     expect(err.errors().length).to.equal(numExpectedErrors);
//     return specifications;
//   }

function importJSONFromFilePath(path) {
    let filePath = `${__dirname}/fixtures/${path}`;
    let file = fs.readFileSync(filePath, 'utf8');
    var json = JSON.parse(file);
  
    return json;
}

// Shorthand Identifier constructor for more concise code
function id(namespace, name) {
    return new mdl.Identifier(namespace, name);
  }
  
  // Shorthand PrimitiveIdentifier constructor for more concise code
  function pid(name) {
    return new mdl.PrimitiveIdentifier(name);
  }
  
  // Creates a simple element, mainly used to satisfy referential integrity
  function simpleDE(namespace, name, isEntry=false, isAbstract=false) {
      let de = new mdl.DataElement(id(namespace, name), isEntry, isAbstract)
          .withValue(new mdl.IdentifiableValue(pid('string')).withMinMax(1, 1));      
    return de;
  }
  