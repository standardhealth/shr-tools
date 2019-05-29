const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const setup = require('./setup');
require('babel-register')({
  presets: [ 'es2015' ]
});

describe('#FromFHIR_STU3', () => {

  let context;
  before(function() {
    this.timeout(5000);
    context = setup('./test/fixtures/spec', 'config_stu3.json', './build/test', true);
    context.setupAjvJson('./build/test/schema');
    context.setupAjvFhir('./test/fixtures/fhir-schema', 'FHIR_STU_3');
  });

  describe('#PatientDirectMapEntry()', () => {

    let PatientDirectMapEntry, BooleanValue;
    before(() => {
      PatientDirectMapEntry = context.importResult('shr/fhir/PatientDirectMapEntry');
      BooleanValue = context.importResult('shr/simple/BooleanValue');
    });

    it('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('PatientDirectMapEntry');
      const entry = PatientDirectMapEntry.fromFHIR(json);
      expect(entry).instanceOf(PatientDirectMapEntry);

      const expected = new PatientDirectMapEntry()
        .withBooleanValue(new BooleanValue().withValue(true));
      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/fhir/PatientDirectMapEntry', entry, context);

      expect(entry).to.eql(expected);
    });
  });

  describe('#PatientEntry()', () => {

    let PatientEntry, IntegerValueElement, DecimalValueElement, ComplexExtension, StringValue, BooleanValue, Deceased, PhotoNote;
    before(() => {
      PatientEntry = context.importResult('shr/fhir/PatientEntry');
      IntegerValueElement = context.importResult('shr/simple/IntegerValueElement');
      DecimalValueElement = context.importResult('shr/simple/DecimalValueElement');
      ComplexExtension = context.importResult('shr/fhir/ComplexExtension');
      StringValue = context.importResult('shr/simple/StringValue');
      BooleanValue = context.importResult('shr/simple/BooleanValue');
      Deceased = context.importResult('shr/fhir/Deceased');
      PhotoNote = context.importResult('shr/fhir/PhotoNote');
    });

    it('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('PatientEntry');
      const entry = PatientEntry.fromFHIR(json);
      expect(entry).instanceOf(PatientEntry);

      const expected = new PatientEntry()
        .withValue('2017-12-05')
        .withIntegerValueElement(new IntegerValueElement().withValue(19))
        .withDecimalValueElement(new DecimalValueElement().withValue(12.1))
        .withComplexExtension(new ComplexExtension()
          .withStringValue(new StringValue().withValue('MyString'))
          .withBooleanValue(new BooleanValue().withValue(true))
        )
        .withBooleanValue(new BooleanValue().withValue(true))
        .withStringValue(new StringValue().withValue('MyString'))
        .withDeceased(new Deceased().withValue(true))
        .withPhotoNote([new PhotoNote().withValue('Photo Note')]);
      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/fhir/PatientEntry', entry, context);

      expect(entry).to.eql(expected);
    });
  });

  describe('#PractitionerEntry()', () => {

    let PractitionerEntry, DoubleNestedBooleanValue, NestedBooleanValue, BooleanValue, NestedStringValue, StringValue;
    before(() => {
      PractitionerEntry = context.importResult('shr/fhir/PractitionerEntry');
      DoubleNestedBooleanValue = context.importResult('shr/simple/DoubleNestedBooleanValue');
      NestedBooleanValue = context.importResult('shr/simple/NestedBooleanValue');
      BooleanValue = context.importResult('shr/simple/BooleanValue');
      NestedStringValue = context.importResult('shr/simple/NestedStringValue');
      StringValue = context.importResult('shr/simple/StringValue');
    });

    it('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('PractitionerEntry');
      const entry = PractitionerEntry.fromFHIR(json);
      expect(entry).instanceOf(PractitionerEntry);

      const expected = new PractitionerEntry()
        .withDoubleNestedBooleanValue(new DoubleNestedBooleanValue()
          .withNestedBooleanValue(new NestedBooleanValue()
            .withBooleanValue(new BooleanValue().withValue(true))
          )
        )
        .withNestedStringValue(new NestedStringValue()
          .withStringValue(new StringValue().withValue('Rob'))
        );
      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/fhir/PractitionerEntry', entry, context);

      expect(entry).to.eql(expected);
    });
  });

  describe('#Overriden Is Type Entry()', () => {
    let OverrideBasedOnIntegerValueElementEntry, StringValueChild;

    before(() => {
      OverrideBasedOnIntegerValueElementEntry = context.importResult('shr/simple/OverrideBasedOnIntegerValueElementEntry');
      StringValueChild = context.importResult('shr/simple/StringValueChild');
    });

    it('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('OverrideBasedOnIntegerValueElementEntry');
      const entry = OverrideBasedOnIntegerValueElementEntry.fromFHIR(json);
      expect(entry).instanceOf(OverrideBasedOnIntegerValueElementEntry);

      const expected = new OverrideBasedOnIntegerValueElementEntry()
        .withStringValue(new StringValueChild().withValue('sample text'));

      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/simple/OverrideBasedOnIntegerValueElementEntry', entry, context);

      expect(entry).to.eql(expected);
    });
  });


  describe('#BloodPressureSliceByNumber()', () => {

    let BloodPressureSliceByNumber, SystolicPressure, DiastolicPressure, ComponentCode, Quantity, Units, CodeableConcept, Coding, CodeSystem;
    before(() => {
      BloodPressureSliceByNumber = context.importResult('shr/slicing/BloodPressureSliceByNumber');
      SystolicPressure = context.importResult('shr/slicing/SystolicPressure');
      DiastolicPressure = context.importResult('shr/slicing/DiastolicPressure');
      ComponentCode = context.importResult('shr/slicing/ComponentCode');
      Quantity = context.importResult('shr/core/Quantity');
      Units = context.importResult('shr/core/Units');
      CodeableConcept = context.importResult('shr/core/CodeableConcept');
      Coding = context.importResult('shr/core/Coding');
      CodeSystem = context.importResult('shr/core/CodeSystem');
    });

    // TODO: skipping this test since there seems to be an issue upstream.
    // the profile that the generator receives here
    // does not include the fixed codes for the field named as the discriminator
    // and slicing.ordered = false, so there is no way to identify which slice is which
    it.skip('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('BloodPressureSliceByNumber');
      const entry = BloodPressureSliceByNumber.fromFHIR(json);
      expect(entry).instanceOf(BloodPressureSliceByNumber);

      const expected = new BloodPressureSliceByNumber()
        .withSystolicPressure(
          new SystolicPressure()
            .withValue(
              new Quantity()
                .withValue(120.0)
                .withUnits(
                  new Units().withCoding(
                    new Coding()
                      .withCodeSystem(new CodeSystem().withValue('http://unitsofmeasure.org'))
                      .withCode('mm[Hg]')
                  )
                )
            )
            .withComponentCode(new ComponentCode()
              .withValue(new CodeableConcept()
                .withCoding([
                  new Coding()
                    .withCodeSystem(new CodeSystem().withValue('http://loinc.org'))
                    .withCode('8480-6')
                ])
              )
            )
        )
        .withDiastolicPressure(
          new DiastolicPressure()
            .withValue(
              new Quantity()
                .withValue(80.0)
                .withUnits(
                  new Units().withCoding(
                    new Coding()
                      .withCodeSystem(new CodeSystem().withValue('http://unitsofmeasure.org'))
                      .withCode('mm[Hg]')
                  )
                )
            )
            .withComponentCode(new ComponentCode()
              .withValue(new CodeableConcept()
                .withCoding([
                  new Coding()
                    .withCodeSystem(new CodeSystem().withValue('http://loinc.org'))
                    .withCode('8462-4')
                ])
              )
            )
        );
      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/slicing/BloodPressureSliceByNumber', entry, context);

      expect(entry).to.eql(expected);
    });
  });

  describe('#BloodPressureSliceByValue()', () => {

    let BloodPressureSliceByValue, SystolicPressure, DiastolicPressure, ComponentCode, Quantity, Units, CodeableConcept, Coding, CodeSystem;
    before(() => {
      BloodPressureSliceByValue = context.importResult('shr/slicing/BloodPressureSliceByValue');
      SystolicPressure = context.importResult('shr/slicing/SystolicPressure');
      DiastolicPressure = context.importResult('shr/slicing/DiastolicPressure');
      ComponentCode = context.importResult('shr/slicing/ComponentCode');
      Quantity = context.importResult('shr/core/Quantity');
      Units = context.importResult('shr/core/Units');
      CodeableConcept = context.importResult('shr/core/CodeableConcept');
      Coding = context.importResult('shr/core/Coding');
      CodeSystem = context.importResult('shr/core/CodeSystem');
    });

    it('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('BloodPressureSliceByValue');
      const entry = BloodPressureSliceByValue.fromFHIR(json);
      expect(entry).instanceOf(BloodPressureSliceByValue);

      const expected = new BloodPressureSliceByValue()
        .withSystolicPressure(
          new SystolicPressure()
            .withValue(
              new Quantity()
                .withValue(120.0)
                .withUnits(
                  new Units().withCoding(
                    new Coding()
                      .withCodeSystem(new CodeSystem().withValue('http://unitsofmeasure.org'))
                      .withCode('mm[Hg]')
                  )
                )
            )
            .withComponentCode(new ComponentCode()
              .withValue(new CodeableConcept()
                .withCoding([
                  new Coding()
                    .withCodeSystem(new CodeSystem().withValue('http://loinc.org'))
                    .withCode('8480-6')
                ])
              )
            )
        )
        .withDiastolicPressure(
          new DiastolicPressure()
            .withValue(
              new Quantity()
                .withValue(80.0)
                .withUnits(
                  new Units().withCoding(
                    new Coding()
                      .withCodeSystem(new CodeSystem().withValue('http://unitsofmeasure.org'))
                      .withCode('mm[Hg]')
                  )
                )
            )
            .withComponentCode(new ComponentCode()
              .withValue(new CodeableConcept()
                .withCoding([
                  new Coding()
                    .withCodeSystem(new CodeSystem().withValue('http://loinc.org'))
                    .withCode('8462-4')
                ])
              )
            )
        );
      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/slicing/BloodPressureSliceByValue', entry, context);

      expect(entry).to.eql(expected);
    });
  });

  describe('#BloodPressureSliceByValueAndIncludesStrategy()', () => {

    let BloodPressureSliceByValueAndIncludesStrategy, SystolicPressure, DiastolicPressure, ComponentCode, Quantity, Units, CodeableConcept, Coding, CodeSystem;
    before(() => {
      BloodPressureSliceByValueAndIncludesStrategy = context.importResult('shr/slicing/BloodPressureSliceByValueAndIncludesStrategy');
      SystolicPressure = context.importResult('shr/slicing/SystolicPressure');
      DiastolicPressure = context.importResult('shr/slicing/DiastolicPressure');
      ComponentCode = context.importResult('shr/slicing/ComponentCode');
      Quantity = context.importResult('shr/core/Quantity');
      Units = context.importResult('shr/core/Units');
      CodeableConcept = context.importResult('shr/core/CodeableConcept');
      Coding = context.importResult('shr/core/Coding');
      CodeSystem = context.importResult('shr/core/CodeSystem');
    });

    it('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('BloodPressureSliceByValueAndIncludesStrategy');
      const entry = BloodPressureSliceByValueAndIncludesStrategy.fromFHIR(json);
      expect(entry).instanceOf(BloodPressureSliceByValueAndIncludesStrategy);

      const expected = new BloodPressureSliceByValueAndIncludesStrategy()
        .withEvaluationComponent([
          new SystolicPressure()
            .withValue(
              new Quantity()
                .withValue(120.0)
                .withUnits(
                  new Units().withCoding(
                    new Coding()
                      .withCodeSystem(new CodeSystem().withValue('http://unitsofmeasure.org'))
                      .withCode('mm[Hg]')
                  )
                )
            )
            .withComponentCode(new ComponentCode()
              .withValue(new CodeableConcept()
                .withCoding([
                  new Coding()
                    .withCodeSystem(new CodeSystem().withValue('http://loinc.org'))
                    .withCode('8480-6')
                ])
              )
            ),
          new DiastolicPressure()
            .withValue(
              new Quantity()
                .withValue(80.0)
                .withUnits(
                  new Units().withCoding(
                    new Coding()
                      .withCodeSystem(new CodeSystem().withValue('http://unitsofmeasure.org'))
                      .withCode('mm[Hg]')
                  )
                )
            )
            .withComponentCode(new ComponentCode()
              .withValue(new CodeableConcept()
                .withCoding([
                  new Coding()
                    .withCodeSystem(new CodeSystem().withValue('http://loinc.org'))
                    .withCode('8462-4')
                ])
              )
            )
        ]);
      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/slicing/BloodPressureSliceByValueAndIncludesStrategy', entry, context);

      expect(entry).to.eql(expected);
    });
  });

  describe('#PanelSliceByProfile()', () => {
    let PanelSliceByProfile, PanelMembers, MemberA, MemberB, Reference, Entry, ShrId, EntryId, EntryType;
    before(() => {
      PanelSliceByProfile = context.importResult('shr/slicing/PanelSliceByProfile');
      PanelMembers = context.importResult('shr/slicing/PanelMembers');
      MemberA = context.importResult('shr/slicing/MemberA');
      MemberB = context.importResult('shr/slicing/MemberB');
      Reference = context.importResult('Reference');
      Entry = context.importResult('shr/base/Entry');
      ShrId = context.importResult('shr/base/ShrId');
      EntryId = context.importResult('shr/base/EntryId');
      EntryType = context.importResult('shr/base/EntryType');
    });

    it('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('PanelSliceByProfile');
      const memberA = context.getFHIR('MemberA');
      const memberB = context.getFHIR('MemberB');
      // TODO: Need to make allEntries conform correctly to intended format (entries w/ fullURL and resource)
      const allEntries = [json, memberA, memberB].map(j => {
        return { fullUrl: `http://example.org/fhir/Observation/${j.id}`, resource:  j };
      });
      const entry = PanelSliceByProfile.fromFHIR(json, 'Observation', '12345', allEntries);
      expect(entry).instanceOf(PanelSliceByProfile);

      const expected = new PanelSliceByProfile()
        .withPanelMembers(new PanelMembers()
          .withObservation([
            new Reference(
              new ShrId().withValue('12345'),
              new EntryId().withValue('4'),
              new EntryType().withValue('http://standardhealthrecord.org/spec/shr/slicing/MemberA')
            ),
            new Reference(
              new ShrId().withValue('12345'),
              new EntryId().withValue('5'),
              new EntryType().withValue('http://standardhealthrecord.org/spec/shr/slicing/MemberB')
            )
          ])
        );
      expected.panelMembers.observation[0].reference = new MemberA()
        .withEntryInfo(new Entry()
          .withShrId(new ShrId().withValue('12345'))
          .withEntryId(new EntryId().withValue('4'))
          .withEntryType(new EntryType().withValue('http://standardhealthrecord.org/spec/shr/slicing/MemberA'))
        );
      expected.panelMembers.observation[1].reference = new MemberB()
        .withEntryInfo(new Entry()
          .withShrId(new ShrId().withValue('12345'))
          .withEntryId(new EntryId().withValue('5'))
          .withEntryType(new EntryType().withValue('http://standardhealthrecord.org/spec/shr/slicing/MemberB'))
        );

      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/slicing/PanelSliceByProfile', entry, context);

      expect(entry).to.eql(expected);
    });
  });

  describe('#Observation()', () => {

    let Observation, Reference, ShrId, EntryId, EntryType, DataValue;
    before(() => {
      Observation = context.importResult('shr/slicing/Observation');
      Reference = context.importResult('Reference');
      ShrId = context.importResult('shr/base/ShrId');
      EntryId = context.importResult('shr/base/EntryId');
      EntryType = context.importResult('shr/base/EntryType');
      DataValue = context.importResult('shr/slicing/DataValue');
    });

    it('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('Observation');
      const entry = Observation.fromFHIR(json, 'Observation', '1-1');
      expect(entry).instanceOf(Observation);

      const expected = new Observation()
        .withPatientEntry(new Reference(
          new ShrId().withValue('1-1'),
          new EntryId().withValue('abcd-1234'),
          new EntryType().withValue('http://standardhealthrecord.org/spec/shr/fhir/PatientEntry')
        )
        );

      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/slicing/Observation', entry, context);

      expect(entry).to.eql(expected);
    });

    it('should correctly pass the FHIR type to nested object fromFHIR', () => {

      const spy = chai.spy.on(DataValue, 'fromFHIR');
      const json1 = context.getFHIR('Observation_valueString');
      try {
        // TODO: fix the bug that causes this to throw
        // this will error out because DataValue.fromFHIR doesn't know what to do with the given fhir (yet)
        // but at this point all we care about is that it's passed the right parameter
        Observation.fromFHIR(json1, 'Observation', '1-1');
      } catch (e) {} 

      expect(spy).to.have.been.called.with('string');

      const json2 = context.getFHIR('Observation_valueCodeableConcept');
      try {
        // TODO: fix the bug that causes this to throw
        // this will error out because DataValue.fromFHIR doesn't know what to do with the given fhir (yet)
        // but at this point all we care about is that it's passed the right parameter
        Observation.fromFHIR(json2, 'Observation', '1-1');
      } catch (e) {} 

      expect(spy).to.have.been.called.with('CodeableConcept');
    });
  });

  describe('#ClassRegistry', () => {
    let ClassRegistry, ObjectFactory, Observation;

    before(() => {
      ClassRegistry = context.importResult('ClassRegistry');
      ObjectFactory = context.importResult('ObjectFactory');
      Observation = context.importResult('shr/slicing/Observation');
    });

    it('should correctly call a class registered in the class registry', () => {
      const json = context.getFHIR('Observation');
      const anonymousSubclass = class extends Observation {
        static fromFHIR(fhir, fhirType, shrId=null, allEntries=null, mappedResources=null, referencesOut=null, asExtension=null) {
          // do nothing, we don't care about the result just that it was called
        }
      };

      ClassRegistry['shr.slicing']['Observation'] = anonymousSubclass;

      const spyOriginalClass = chai.spy.on(Observation, 'fromFHIR');
      const spyReplacementClass = chai.spy.on(anonymousSubclass, 'fromFHIR');

      ObjectFactory.createInstanceFromFHIR('shr.slicing.Observation', {}, null);

      expect(spyOriginalClass).to.not.have.been.called();
      expect(spyReplacementClass).to.have.been.called();
    });
  });
});

describe('#FromFHIR_DSTU2', () => {

  let context;
  before(function() {
    this.timeout(5000);
    context = setup('./test/fixtures/spec', 'config_dstu2.json', './build/test_dstu2', true);
    context.setupAjvJson('./build/test/schema');
    context.setupAjvFhir('./test/fixtures/fhir-schema', 'FHIR_DSTU_2');
  });


  describe('#Observation_DSTU2()', () => {

    let Observation, Reference, ShrId, EntryId, EntryType;
    before(() => {
      Observation = context.importResult('shr/slicing/Observation');
      Reference = context.importResult('Reference');
      ShrId = context.importResult('shr/base/ShrId');
      EntryId = context.importResult('shr/base/EntryId');
      EntryType = context.importResult('shr/base/EntryType');
    });

    it('should deserialize a FHIR JSON instance', () => {
      const json = context.getFHIR('Observation');
      const entry = Observation.fromFHIR(json, 'Observation', '1-1');
      expect(entry).instanceOf(Observation);

      const expected = new Observation()
        .withPatientEntry(new Reference(
          new ShrId().withValue('1-1'),
          new EntryId().withValue('abcd-1234'),
          new EntryType().withValue('http://standardhealthrecord.org/spec/shr/fhir/PatientEntry')
        )
        );

      fixExpectedEntryInfo(expected, 'http://standardhealthrecord.org/spec/shr/slicing/Observation', entry, context);

      expect(entry).to.eql(expected);
    });
  });
});

function fixExpectedEntryInfo(expectedObj, expectedType, actualObj, context) {
  // Since shrID and entryID are generated, there's no way to predict what they will be.
  // In order to preserve the ability to do equality checks, set the expected shrId and
  // entryID to the actuals.
  const Entry = context.importResult('shr/base/Entry');
  const ShrId = context.importResult('shr/base/ShrId');
  const EntryId = context.importResult('shr/base/EntryId');
  const EntryType = context.importResult('shr/base/EntryType');

  let shrIdStr = 'not found in actual';
  let entryIdStr = 'not found in actual';
  if (actualObj && actualObj.entryInfo) {
    const info = actualObj.entryInfo;

    if (info.shrId instanceof ShrId && typeof info.shrId.value === 'string') {
      // Good.  It's the correct usage
      shrIdStr = info.shrId.value;
    } else if (typeof info.shrId === 'string') {
      // Technically the actual format is wrong, but we know what it intends
      shrIdStr = info.shrId;
    }

    if (info.entryId instanceof EntryId && typeof info.entryId.value === 'string') {
      // Good.  It's the correct usage
      entryIdStr = info.entryId.value;
    } else if (typeof info.entryId === 'string') {
      // Technically the actual format is wrong, but we know what it intends
      entryIdStr = info.entryId;
    }
  }
  expectedObj.entryInfo = new Entry()
    .withShrId(new ShrId().withValue(shrIdStr))
    .withEntryId(new EntryId().withValue(entryIdStr))
    .withEntryType(new EntryType().withValue(expectedType));
}
