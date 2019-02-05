const {expect} = require('chai');
const setup = require('./setup');
require('babel-register')({
  presets: [ 'es2015' ]
});

describe('#ToFHIR', () => {

  let context;
  before(function() {
    this.timeout(5000);
    context = setup('./test/fixtures/spec', 'config_stu3.json', './build/test', true);
    context.setupAjvFhir('./test/fixtures/fhir-schema', 'FHIR_STU_3');
  });

  describe.skip('#PatientDirectMapEntry()', () => {

    let PatientDirectMapEntry;
    before(() => PatientDirectMapEntry = context.importResult('shr/fhir/PatientDirectMapEntry'));

    it('should serialize to a validated PatientDirectMapEntry instance', () => {
      const json = context.getJSON('PatientDirectMapEntry', false);
      const entry = PatientDirectMapEntry.fromJSON(json);
      const gen_fhir = entry.toFHIR();
      expect(gen_fhir).is.a('object');
      const fhir = context.getFHIR('PatientDirectMapEntry');
      expect(gen_fhir).to.eql(fhir);
    });
  });

  describe.skip('#PatientEntry()', () => {

    let PatientEntry;
    before(() => PatientEntry = context.importResult('shr/fhir/PatientEntry'));

    it('should serialize to a validated PatientEntry instance', () => {
      const json = context.getJSON('PatientEntry', false);
      const entry = PatientEntry.fromJSON(json);
      const gen_fhir = entry.toFHIR();
      expect(gen_fhir).is.a('object');
      const fhir = context.getFHIR('PatientEntry');
      expect(gen_fhir).to.eql(fhir);
    });
  });

  describe.skip('#PractitionerEntry()', () => {

    let PractitionerEntry;
    before(() => PractitionerEntry = context.importResult('shr/fhir/PractitionerEntry'));

    it('should serialize to a validated PractitionerEntry instance', () => {
      const json = context.getJSON('PractitionerEntry', false);
      const entry = PractitionerEntry.fromJSON(json);
      const gen_fhir = entry.toFHIR();
      expect(gen_fhir).is.a('object');
      const fhir = context.getFHIR('PractitionerEntry');
      expect(gen_fhir).to.eql(fhir);
    });
  });

  describe.skip('#BloodPressureSliceByNumber()', () => {

    let BloodPressureSliceByNumber;
    before(() => BloodPressureSliceByNumber = context.importResult('shr/slicing/BloodPressureSliceByNumber'));

    it('should serialize to a validated BloodPressureSliceByNumber instance', () => {
      const json = context.getJSON('BloodPressureSliceByNumber', false);
      const entry = BloodPressureSliceByNumber.fromJSON(json);
      const gen_fhir = entry.toFHIR();
      expect(gen_fhir).is.a('object');
      const fhir = context.getFHIR('BloodPressureSliceByNumber');
      expect(gen_fhir).to.eql(fhir);
    });
  });

  describe.skip('#PanelSliceByProfile()', () => {

    let PanelSliceByProfile;
    before(() => PanelSliceByProfile = context.importResult('shr/slicing/PanelSliceByProfile'));

    it('should serialize to a validated PanelSliceByProfile instance', () => {
      const json = context.getJSON('PanelSliceByProfile', false);
      const entry = PanelSliceByProfile.fromJSON(json);
      const gen_fhir = entry.toFHIR();
      expect(gen_fhir).is.a('object');
      const fhir = context.getFHIR('PanelSliceByProfile');
      expect(gen_fhir).to.eql(fhir);
    });
  });

});
