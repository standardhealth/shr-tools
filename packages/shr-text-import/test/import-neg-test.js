const {setLogger} = require('../index');
const {importFixture, importFixtureFolder } = require('../test/import-helper');
const err = require('shr-test-helpers/errors');

// Set the logger -- this is needed for detecting and checking errors
setLogger(err.logger());

const dir = '/fixtures/dataElement/';

describe('#importDataElementNegatives', () => {
  beforeEach(function() {
    err.clear();
  });

  it('Neg1: should produce an error message (not a traceback) when a keyword is not followed by a colon', () => {
    importFixture('InvalidSyntaxMissingColon', dir, true);
  });

  it('Neg2: should produce an error message (not a traceback) when there is an invalid vocabulary reference', () => {
    importFixture('InvalidVocabularyReference', dir, true);
  });

  it('Neg3: should produce an error message (not a traceback) when there is an invalid element reference', () => {
    importFixture('InvalidElementReference', dir, true);
  });

  it('Neg4: should produce an error message (not a traceback) when there is a duplicate element name', () => {
    importFixture('InvalidDuplicateElementDefinition', dir, true);
  });

  it('Neg5: should produce an error message (not a traceback) when a class defines a property twice.', () => {
    importFixture('InvalidDuplicatePropertyDefinition', dir, true);
  });

  it('Neg6: should produce an error message (not a traceback) if Grammar is not the first line of the file.', () => {
    importFixture('InvalidMisplacedGrammarDeclaration', dir, true);
  });

  it('Neg7: should produce an error message (not a traceback) if there is no cardinality specified on a property.', () => {
    importFixture('InvalidPropertyNoCardinality', dir, true);
  });

  it('Neg8: should produce an error message (not a traceback) if the file lacks a namespace declaration.', () => {
    importFixture('InvalidNoNamespace', dir, true);
  });
  /* This is something which is discovered by the expander and will not be tracked
  initially by the importer.
  */
  it.skip('Neg9: should produce an error message (not a traceback) if a child class defines a property it already inherited.', () => {
    importFixture('InvalidInheritedFieldDuplicatedInChild', dir, true);
  });

  it('Neg10: should produce an error message (not a traceback) when there is an invalid fully qualified element reference', () => {
    importFixture('InvalidFQElementReference', dir, true);
  });

  it('Neg11: should produce an error message (not a traceback) when there is an ambiguous element reference', () => {
    // MK: I'm not sure that just loading the folder should trigger the checks for ambiguous elements
    importFixtureFolder('invalidAmbiguousResolution', dir, true);
  });

  it('Neg12: should produce an error message (not a traceback) when there are conflicting code system declarations', () => {
    // MK: I'm not sure that just loading the folder should trigger the checks for ambiguous elements
    importFixtureFolder('invalidConflictingVocab', dir, true);
  });

  it('Neg13: should produce an error message (not a traceback) when a code lacks a code system', () => {
    importFixture('InvalidSystemlessCode', dir, true);
  });

  it('Neg14: should produce an error message (not a traceback) when a value is missing a value element', () => {
    importFixture('InvalidValueDeclarationEmpty', dir, true);
  });

  it('Neg15: should produce an error message (not a traceback) when a value declares cardinality', () => {
    importFixture('InvalidValueDeclarationWithCardinality',dir, true);
  });
  /* This is something which is discovered by the expander and will not be tracked
  initially by the importer.
  */
  it.skip('Neg16: should produce an error message (not a traceback) when a child class inherits a value but also defines a value', () => {
    importFixture('InvalidInheritanceValueOverride', dir, true);
  });
  /* This is something which is discovered by the expander and will not be tracked
  initially by the importer.
  */
  it.skip('Neg17: should produce an error message (not a traceback) when a child class value overrides a required binding', () => {
    importFixture('InvalidValueBindingOverride', dir, true);
  });
  /* This is something which is discovered by the expander and will not be tracked
  initially by the importer.
  */
  it.skip('Neg18: should produce an error message (not a traceback) when a child class overrides a fixed code value', () => {
    importFixture('InvalidValueFixedCodeOverride', dir, true);
  });

  it('Neg19: should produce an error message (not a traceback) when choice value is constrained without specifying which choice the constraint applies to', () => {
    importFixture('InvalidConstraintOnChoice', dir, true);
  });

  it('Neg20: should produce an error message (not a traceback) when substituting a non-subclass for a field', () => {
    importFixture('InvalidSubstituteOnField', dir, true);
  });

  it('Neg21: should produce an error message (not a traceback) when substituting a non-subclass for a field child', () => {
    importFixture('InvalidSubstituteOnFieldChild', dir, true);
  });

  it('Neg22: should produce an error message (not a traceback) when a field declares a choice', () => {
    importFixture('InvalidDeclarationOfFieldChoice', dir, true);
  });

  it('Neg23: should produce an error message (not a traceback) when a class specifies its parent as TBD', () => {
    importFixture('InvalidTBDParent', dir, true);
  });

  it('Neg24: should produce an error message (not a traceback) when restricting a choice using the only keyword and substituting a class simultaneously', () => {
    importFixture('InvalidSubstituteOnFieldUsingOnly', dir, true);
  });

  it('Neg25: should produce an error message (not a traceback) when a Parent class referenced by an element does not exist.', () => {
    importFixture('InvalidParentClass', dir, true);
  });
  /* This is something which is discovered by the expander and will not be tracked
  initially by the importer.
  */
  it.skip('Neg26: should produce an error message (not a traceback) when both parent and child declare a value with different elements.', () => {
    importFixture('InvalidParentAndChildValue', dir, true);
  });

  it('Neg27: should produce an error message (not a traceback) when a child declares a property that exists in a parent.', () => {
    importFixture('InvalidChildProperty', dir, true);
  });

  it('Neg28: should produce an error message (not a traceback) when there is a reference to an attribute which has been substituted.', () => {
    importFixture('InvalidReferenceToSubstitutedName', dir, true);
  });
// needs expander
  it.skip('Neg29: should produce an error message (not a traceback) when a value-only constraint attempts to constrain the value to a type not offered by the parent.', () => {
    importFixture('InvalidValueOnlyConstraintSingleChoice', dir, true);
  });

  it.skip('Neg30: should produce an error message (not a traceback) when a value-only constraint with multiple choices has a choice not in the parent.', () => {
    importFixture('InvalidValueOnlyConstraintInheritedMultipleChoice', dir, true);
  });

  it.skip('Neg31: should produce an error message (not a traceback) when a reduced choice element using a value-only constraint attempts to constrain to a type that is not a child of the value type in the parent.', () => {
    importFixture('InvalidValueOnlyConstraintInheritedSingleChoice', dir, true);
  });

  it.skip('Neg32: should produce an error message (not a traceback) when a reduced choice element using a value-only constraint includes an element inconsistent with the choice types in the parent.', () => {
    importFixture('InvalidValueOnlyConstraintInheritedFromMultipleToMultiple', dir, true);
  });

  it('Neg33: should produce an error message (not a traceback) when an element attempts to redeclare Value instead of constraining it.', () => {
    importFixture('InvalidValueRedeclaration', dir, true);
  });

  it('Neg34: should produce an error message (not a traceback) when an Abstract declares an Element as parent.', () => {
    importFixture('InvalidAbstractWithParentElement', dir, true);
  });

  it('Neg35: should produce an error message (not a traceback) when an Abstract declares an Entry as parent.', () => {
    importFixture('InvalidAbstractWithParentEntry', dir, true);
  });

  it('Neg36: should produce an error message (not a traceback) when an Abstract declares a Group as parent.', () => {
    importFixture('InvalidAbstractWithParentGroup', dir, true);
  });

  it('Neg37: should produce an error message (not a traceback) when an Element declares an Abstract as parent.', () => {
    importFixture('InvalidElementWithParentAbstract', dir, true);
  });

  it('Neg38: should produce an error message (not a traceback) when an Element declares an Entry as parent.', () => {
    importFixture('InvalidElementWithParentEntry', dir, true);
  });

  it('Neg39: should produce an error message (not a traceback) when an Element declares a Group as parent.', () => {
    importFixture('InvalidElementWithParentGroup', dir, true);
  });

  it('Neg40: should produce an error message (not a traceback) when an Entry declares an Element as parent.', () => {
    importFixture('InvalidEntryWithParentElement', dir, true);
  });

  it('Neg41: should produce an error message (not a traceback) when an Element declares an Group as parent.', () => {
    importFixture('InvalidElementWithParentGroup', dir, true);
  });

  it('Neg42: should produce an error message (not a traceback) when an Element declares an Abstract as parent.', () => {
    importFixture('InvalidGroupWithParentAbstract', dir, true);
  });

  it('Neg43: should produce an error message (not a traceback) when an Element declares an Entry as parent.', () => {
    importFixture('InvalidGroupWithParentEntry', dir, true);
  });

  it('Neg44: should produce an error message (not a traceback) when an Element declares a Element as parent.', () => {
    importFixture('InvalidGroupWithParentElement', dir, true);
  });

  it('Neg45: should produce an error message (not a traceback) when an Element declares a Property.', () => {
    importFixture('InvalidElementWithProperty', dir, true);
  });

  it('Neg45: should produce an error message (not a traceback) when an Element constrains a Property.', () => {
    importFixture('InvalidElementWithPropertyConstraint', dir, true);
  });

  it('Neg46: should produce an error message (not a traceback) when an Abstract declares a Value.', () => {
    importFixture('InvalidAbstractWithValue', dir, true);
  });

  it('Neg46: should produce an error message (not a traceback) when an Entry declares a Value.', () => {
    importFixture('InvalidEntryWithValue', dir, true);
  });

  it('Neg46: should produce an error message (not a traceback) when a Group declares a Value.', () => {
    importFixture('InvalidGroupWithValue', dir, true);
  });

// end of negative examples
});
