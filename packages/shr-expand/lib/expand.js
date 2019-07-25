const bunyan = require('bunyan');
const models = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-expand'});
var logger = rootLogger;

function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

function expand(specifications, ...exporters) {
  const expander = new Expander(specifications, ...exporters);
  return expander.expand();
}

const CONCEPT = new models.PrimitiveIdentifier('concept');
const BOOLEAN = new models.PrimitiveIdentifier('boolean');
const STRING = new models.PrimitiveIdentifier('string');

class Expander {
  constructor(specs, ...exporters) {
    this._unexpanded = specs;
    this._expanded = new models.Specifications();
    this._exporterMap = new Map();
    for (const exp of exporters) {
      if (exp.TARGET) {
        this._exporterMap.set(exp.TARGET, exp);
      } else if (exp.TARGETS) {
        exp.TARGETS.forEach(t => this._exporterMap.set(t, exp));
      }
    }
  }

  expand() {
    // First just copy over clones of the namespace, value set, code system, and content profile definitions (they don't need expansion)
    for (const ns of this._unexpanded.namespaces.all) {
      this._expanded.namespaces.add(ns.clone());
    }
    for (const vs of this._unexpanded.valueSets.all) {
      this._expanded.valueSets.add(vs.clone());
    }
    for (const cs of this._unexpanded.codeSystems.all) {
      this._expanded.codeSystems.add(cs.clone());
    }
    for (const cp of this._unexpanded.contentProfiles.all) {
      this._expanded.contentProfiles.add(cp.clone());
    }
    // Now expand all of the data elements
    for (const file of this._unexpanded.dataElements.files) {
      for (const de of this._unexpanded.dataElements.byFile(file)) {
        const expandedDE = this._expanded.dataElements.findByIdentifier(de.identifier);
        if (typeof expandedDE === 'undefined') {
          this.expandElement(de, file);
        }
      }
    }

    const entryDE = this._expanded.dataElements.find('shr.base', 'Entry');
    let entryFields = null;
    if (!entryDE) {
      logger.warn('Could not find expanded definition of shr.base.Entry. Inheritance calculations will be incomplete. ERROR_CODE:12036');
      entryFields = {
        'shr.core': { 'Version': true },
        'shr.base': {}
      };
      for (const name of ['ShrId', 'EntryId', 'EntryType', 'FocalSubject', 'SubjectIsThirdPartyFlag', 'Narrative',
        'Informant', 'Author', 'AssociatedEncounter', 'OriginalCreationDate', 'LastUpdateDate', 'Language']) {
        entryFields['shr.base'][name] = true;
      }
    }
    for (const de of this._expanded.dataElements.all) {
      if (de.basedOn && de.basedOn.length) {
        const parents = [];
        for (const basedOn of de.basedOn) {
          if (basedOn instanceof models.TBD) {
            logger.debug(`Ignoring TBD parent %s for child element %s.`, basedOn, de.identifier);
            continue;
          }
          const parent = this._expanded.dataElements.findByIdentifier(basedOn);
          if (!parent) {
            logger.error(`Could not find based on element %s for child element %s. ERROR_CODE:12037`, basedOn, de.identifier);
          } else {
            parents.push(parent);
          }
        }
        if (de.value) {
          let inheritance = null;
          for (const parent of parents) {
            if (parent.value) {
              inheritance = models.OVERRIDDEN;
              if (parent.value.equals(de.value, true)) {
                inheritance = models.INHERITED;
                break;
              }
            }
          }
          if (inheritance) {
            de.value.inheritance = inheritance;
          }
        }
        for (const field of de.fields) {
          let inheritance = null;
          for (const parent of parents) {
            if (field instanceof models.TBD) {
              // You can't track inheritance for a TBD field because there is no name associated with it.
              const i = parent.fields.findIndex(item => {
                return item instanceof models.TBD && (item.text === field.text);
              });
              if (i >= 0) {
                inheritance = models.OVERRIDDEN;
                if (field.equals(parent.fields[i], true)) {
                  inheritance = models.INHERITED;
                  break;
                }
              }
              // continue;
            } else {
              const i = parent.fields.findIndex(item => {
                return item instanceof models.IdentifiableValue && (item.identifier.equals(field.identifier) || item.effectiveIdentifier.equals(field.identifier));
              });
              if (i >= 0) {
                inheritance = models.OVERRIDDEN;
                if (field.equals(parent.fields[i], true)) {
                  inheritance = models.INHERITED;
                  break;
                }
              }
            }
          }
          if (inheritance) {
            field.inheritance = inheritance;
          }
        }
      }
      if (de.isEntry) {
        if (!entryDE) {
          for (const field of de.fields) {
            if (field instanceof models.TBD) {
              // You can't track inheritance for a TBD field because there is no name associated with it.
              continue;
            }
            if (entryFields[field.identifier.namespace] && entryFields[field.identifier.namespace][field.identifier.name]) {
              logger.error('Could not find expanded definition of shr.base.Entry. Inheritance calculations for %s will be incomplete.', de.identifier);
              break;
            }
          }
        } else {
          for (const field of entryDE.fields) {
            const i = de.fields.findIndex(item => {
              return item instanceof models.IdentifiableValue && (item.identifier.equals(field.identifier) || item.effectiveIdentifier.equals(field.identifier));
            });
            if (i >= 0) {
              if (!de.fields[i].inheritance) {
                if (!field.equals(de.fields[i])) {
                  de.fields[i].inheritance = models.OVERRIDDEN;
                  de.fields[i].inheritedFrom = entryDE.identifier.clone();
                } else {
                  de.fields[i].inheritance = models.INHERITED;
                  de.fields[i].inheritedFrom = entryDE.identifier.clone();
                }
              }
            }
          }
        }
      }
    }

    // Now expand all of the mappings
    for (const target of this._unexpanded.maps.targets) {
      for (const de of this._expanded.dataElements.all) {
        const expandedMap = this._expanded.maps.findByTargetAndIdentifier(target, de.identifier);
        if (typeof expandedMap === 'undefined') {
          this.expandMappingForTargetAndIdentifier(target, de.identifier);
        }
      }
      // Report invalid mappings (attempts to map a data element that doesn't exist)
      for (const m of this._unexpanded.maps.byTarget(target).filter(um => typeof this._expanded.dataElements.findByIdentifier(um.identifier) === 'undefined')) {
        logger.error({ shrId: m.identifier.fqn, targetSpec: target}, 'Cannot resolve element definition.');
      }
    }
    return this._expanded;
  }

  expandElement(element, file) {
    // Setup a child logger to associate logs with the current element
    const lastLogger = logger;
    logger = rootLogger.child({ shrId: element.identifier.fqn });
    logger.debug('Start expanding element');
    try {
      const hierarchy = [];
      for (const baseID of element.basedOn) {
        if (baseID instanceof models.TBD) {
          continue;
        }
        const base = this.lookup(baseID);
        if (typeof base === 'undefined') {
          logger.error('Reference to non-existing base: %s. ERROR_CODE:12002', baseID.fqn);
          continue;
        }
        hierarchy.push(base);
      }
      hierarchy.push(element);

      var mergedValue;
      const mergedFields = [];
      for (const node of hierarchy) {
        if (node.value) {
          if (mergedValue) {
            mergedValue = this.mergeValue(node, mergedValue, node.value);
          } else {
            mergedValue = node.value.clone();
            // Still need to process the cardinality and constraints to ensure they are valid
            // (test for node == element to ensure we only report out the error on the root element)
            if (typeof mergedValue.effectiveCard === 'undefined' && node == element) {
              logger.error('No cardinality found for value: %s. ERROR_CODE:12003', mergedValue.toString());
            }
            mergedValue.constraints = this.consolidateConstraints(node, mergedValue);
          }
        }
        for (const field of node.fields) {
          const i = mergedFields.findIndex(item => {
            return item instanceof models.IdentifiableValue && item.getPossibleIdentifiers().some(id => id.equals(field.identifier));
          });
          if (i >= 0) {
            mergedFields[i] = this.mergeValue(node, mergedFields[i], field);
          } else {
            const f = field.clone();
            // Still need to process the cardinality and constraints to ensure they are valid
            // (test for node == element to ensure we only report out the error on the root element)
            if (typeof f.effectiveCard === 'undefined' && node == element) {
              logger.error('No cardinality found for field %s in %s. ERROR_CODE:12004', f.toString(), element.identifier.name);
            }
            f.constraints = this.consolidateConstraints(node, f);
            mergedFields.push(f);
          }
        }
      }

      const expanded = element.clone();
      if (mergedValue) expanded.value = mergedValue;
      expanded.fields = mergedFields;
      this.expandHierarchy(expanded);
      this.captureConstraintHistories(expanded);
      this._expanded.dataElements.add(expanded, file);
      return expanded;
    } finally {
      logger.debug('Done expanding element');
      logger = lastLogger;
    }
  }

  /**
   * Captures the histories of every constraint on the elements value and on every field.  This is done by iterating
   * over the base elements, inheriting their own constraint histories, and then adding the current constraints to
   * the histories.
   * @param {DataElement} element - the element for which to capture the constraint histories
   */
  captureConstraintHistories(element) {
    for (const baseID of element.basedOn) {
      if (baseID instanceof models.TBD) continue;

      const base = this.lookup(baseID);
      if (typeof base === 'undefined') {
        logger.error('Reference to non-existing base: %s. ERROR_CODE:12002', baseID.fqn);
        continue;
      }

      if (element.value) {
        // Capture the histories on the .value Value first
        this.captureConstraintHistoryForValue(element, base.value, element.value);
        // Now capture the histories on every choice option (if applicable)
        if (element.value instanceof models.ChoiceValue) {
          let baseValues = [];
          if (base.value) {
            baseValues = base.value instanceof models.ChoiceValue ? base.value.aggregateOptions : [base.value];
          }
          this.captureConstraintHistoryForValueList(element, baseValues, element.value.aggregateOptions);
        }
      }
      // Capture the histories on every field
      this.captureConstraintHistoryForValueList(element, base.fields, element.fields);
    }
  }

  /**
   * Iterates through a set of values, capturing the histories for each one.
   * @param {DataElemet} element - the element we're capturing histories for (used to set the source)
   * @param {Value} parentValues - the list of parent values to inherit histories from
   * @param {Value} childValues - the list of child values for which to capture histories
   */
  captureConstraintHistoryForValueList(element, parentValues, childValues) {
    for (const childValue of childValues) {
      if (childValue instanceof models.TBD) continue;

      const parentValue = parentValues.find(v => childValue.identifier.equals(v.identifier));
      this.captureConstraintHistoryForValue(element, parentValue, childValue);
    }
  }

  /**
   * Inherits the constraints history from the parent (if applicable) and adds its own history.
   * @param {DataElement} element - the element we're capturing histories for (used to set the source)
   * @param {Value} parentValue - the parent value to inherit histories from
   * @param {Vaue} childValue - the child value for which to capture histories
   */
  captureConstraintHistoryForValue(element, parentValue, childValue) {
    if (parentValue) {
      childValue.constraintHistory.mergeFrom(parentValue.constraintHistory);
    }
    childValue.constraints.forEach(c => childValue.constraintHistory.add(c, element.identifier));
  }

  /*
  expandHierarchy - (DataElement)

  This takes a data element and recursively transverses its hierarchy of 'Based On' parent elements,
  determining the original source of fields/values (.inheritedFrom), the most recent parent to modify
  constraints on fields/values (.lastModifiedBy), and the full history of field/value cardinalities.

  The element.hierarchy is a list of its parental hierarchy, and also serves to determine if an element
  has already undergone expansion.

  By recursively filling out hierarchy, inheritance, and modifier information, the lower level child
  elements can inherit the parents historical information.
  */
  expandHierarchy(element) {
    /*
    setCurrentElementAsOriginalModifier - (Value)

    Sets the current expanding element to be the original modifier for all value constraints. It also
    checks for ChoiceValues, and recursively fills out that information for those cases.
    */
    const setCurrentElementAsOriginalModifier = (value) => {
      if (value.options) {
        value.options.forEach(v => setCurrentElementAsOriginalModifier(v));
      } else {
        value.constraints.forEach(c => c.lastModifiedBy = element.identifier);
      }
    };

    if (element.basedOn.length == 0) {
      if (element.value) setCurrentElementAsOriginalModifier(element.value);
      if (element.fields) element.fields.forEach(f => setCurrentElementAsOriginalModifier(f));

    } else {
      for (const baseID of element.basedOn) {
        if (baseID instanceof models.TBD) continue;

        const base = this.lookup(baseID);
        if (typeof base === 'undefined') {
          logger.error('Reference to non-existing base: %s. ERROR_CODE:12002', baseID.fqn);
          continue;
        }


        if (base.hierarchy.length == 0 && base.basedOn.length > 0) {
          this.expandHierarchy(base);
        }

        /*
        manageValueInheritance - (parent, child)

        Determines the original defining source of value (inheritedFrom). If there is no
        recursively built parent inheritance information, then it must be the current expanding
        element.

        For each of the child value's constraints, it tries to match it with a parent constraint,
        and similarly determines the 'lastModifiedBy' information using the result of that match.
        */
        const manageValueInheritance = (parent, child) => {
          if (child.inheritedFrom == null) {
            if (parent.inheritedFrom) {
              child.inheritedFrom = parent.inheritedFrom;
            } else {
              child.inheritedFrom = base.identifier;
            }
          }

          if (child.constraints.length > 0) {
            for (const c of child.constraints) {
              const matchedParentConstraint = parent.constraints.find(p => p.equals(c));
              if (matchedParentConstraint && matchedParentConstraint.lastModifiedBy) {
                c.lastModifiedBy = matchedParentConstraint.lastModifiedBy;
              } else {
                c.lastModifiedBy = element.identifier;
              }
            }
          }

          if (child.options) {
            if (!parent.options) {
              setCurrentElementAsOriginalModifier(child);
            } else {
              for (const childOption of child.options) {
                const matchedParentOption = parent.options.find(p=>p.identifier.fqn == childOption.identifier.fqn);
                for (const c of childOption.constraints) {
                  const matchedParentOptionConstraint = matchedParentOption.constraints.find(p => p.equals(c));
                  if (matchedParentOptionConstraint && matchedParentOptionConstraint.lastModifiedBy) {
                    c.lastModifiedBy = matchedParentOptionConstraint.lastModifiedBy;
                  } else {
                    c.lastModifiedBy = element.identifier;
                  }
                }
              }
            }
          }
        };

        /*
        manageCardHistory - (Value, Value)

        Builds the full history of a value's cardinality by recursively tranversing the
        value's parents and cardinality constraint information from each parent source.
        */
        const manageCardHistory = (parent, child) => {
          if (!child.card || !child.effectiveCard) return; //defensive programming against null cards

          if (!child.effectiveCard.equals(child.card) || child.constraintsFilter.own.card.hasConstraints) { // The second check on child's own constraints is needed because value.card occasionally matches value.effectiveCard even with a CardConstraint
            if (!child.card.history) child.card.history = [];

            // Initialize child cardinality history with parent cardinality
            if (parent.card.history) {
              // If parent had history, inherit it
              child.card.history.unshift(...parent.card.history);
            } else {
              // Otherwise, add original parent card into history.
              // Because child.card and child.effectiveCard are different and the
              // parent had no history, this is definitely unique
              const oldCard = parent.card.clone();
              oldCard.source = base.identifier;
              child.card.withHistory(oldCard);
            }

            // If the child has any new constraints, add them to history
            if (child.constraintsFilter.own.card.hasConstraints) {
              if (child.constraintsFilter.own.card.constraints[0].lastModifiedBy.equals(element.identifier)) {
                const newCard = child.constraintsFilter.own.card.constraints[0].card.clone();
                newCard.source = child.constraintsFilter.own.card.constraints[0].lastModifiedBy;
                child.card.withHistory(newCard);
              }
            }
          }
        };

        if (element.value) {
          if (base.value) {
            manageValueInheritance(base.value, element.value);
            manageCardHistory(base.value, element.value);
          } else {
            setCurrentElementAsOriginalModifier(element.value);
          }
        }

        for (const ef of element.fields) {
          const baseField = base.fields.find(f => {
            if (f.identifier != null) {
              return f.identifier.equals(ef.identifier);
            } else if (f instanceof models.TBD) {
              return ef instanceof models.TBD && f.text === ef.text;
            }
          });
          if (baseField) {
            manageValueInheritance(baseField, ef);
            manageCardHistory(baseField, ef);
          } else {
            setCurrentElementAsOriginalModifier(ef);
          }
        }

        element.hierarchy.push(...base.hierarchy, base.identifier.fqn);
      }
    }
  }

  // mergeValue does a best attempt at merging the values, recording errors as it encounters them.  If the values
  // are completely incompatible, it will record an error and abandon the merge.  For less significant errors
  // (cardinalities that don't fit, etc), it will record the error, skip that part of the merge, and continue.
  mergeValue(element, oldValue, newValue) {
    let mergedValue = oldValue.clone();

    if (typeof newValue === 'undefined') {
      return mergedValue;
    }

    // Check that the class types match (except when new one is IncompleteValue, either one is a choice, or when the
    // old value was a reference and the new value is an identifiable value (allowed to ease constraint authoring)).
    // An error abandons the merge.
    const sameValueType = newValue.constructor.name === oldValue.constructor.name;
    const newValueIsIncomplete = newValue instanceof models.IncompleteValue;
    const oneValueIsChoice = oldValue instanceof models.ChoiceValue || newValue instanceof models.ChoiceValue;
    if (!(sameValueType || newValueIsIncomplete || oneValueIsChoice)) {
      logger.error('Cannot override %s with %s. ERROR_CODE:12005', oldValue.toString(), newValue.toString());
      return mergedValue;
    }

    // Check that the identifiers match.  An error abandons the merge.
    if (newValue instanceof models.IdentifiableValue) {
      // Only check if the new value is NOT the "_Value" keyword -- because if it is, we just let it inherit parent value
      if (!newValue.identifier.isValueKeyWord) {
        if (oldValue instanceof models.ChoiceValue) {
          // The newValue must be one of the choices
          const match = this.findMatchingOption(element, oldValue, newValue);
          if (!match) {
            logger.error('Cannot override %s with %s since it is not one of the options. ERROR_CODE:12006', oldValue.toString(), newValue.toString());
            return mergedValue;
          }
          mergedValue = match;
        } else if (!newValue.identifier.equals(oldValue.identifier) && !newValue.identifier.equals(oldValue.effectiveIdentifier)) {
          if (this.checkHasBaseType(newValue.identifier, mergedValue.effectiveIdentifier)) {
            // This is a case where the new value is a subtype of the old value.  Convert this to a type constraint.
            mergedValue.addConstraint(new models.TypeConstraint(newValue.identifier, [], false));
          } else {
            logger.error('Cannot override %s with %s. ERROR_CODE:12007', oldValue.toString(), newValue.toString());
            return mergedValue;
          }
        }
      }
    } else if (newValue instanceof models.ChoiceValue) {
      let oldChoiceValue = oldValue.clone();
      if (oldChoiceValue instanceof models.IdentifiableValue) {
        // To simplify the code, we just turn the non-choice to a choice of 1 and proceed
        oldChoiceValue = new models.ChoiceValue().withCard(oldChoiceValue.card).withOption(oldChoiceValue.withCard(undefined));
      } else if (!(oldValue instanceof models.ChoiceValue)) {
        logger.error('Cannot override %s with %s since overriding a simple value with a choice value is not supported. ERROR_CODE:12008', oldValue.toString(), newValue.toString());
        return mergedValue;
      }
      // The newValue choice must contain options from the oldChoiceValue
      const properSubset = newValue.options.every(v => this.findMatchingOption(element, oldChoiceValue, v));
      if (!properSubset) {
        logger.error('Cannot override %s with %s since the new options aren\'t compatible types with the original. ERROR_CODE:12036', oldValue.toString(), newValue.toString());
        return mergedValue;
      }
      // A proper merge will require cloning the original object, swapping options w/ merged options, and setting card
      mergedValue = newValue.clone();
      for (let i=0; i < mergedValue.options.length; i++) {
        mergedValue.options[i] = this.findMatchingOption(element, oldChoiceValue, mergedValue.options[i], false);
      }
      if (!mergedValue.card || !mergedValue.effectiveCard) {
        mergedValue.card = oldChoiceValue.effectiveCard;
      }
    } else if (newValue instanceof models.TBD) {
      mergedValue.text = newValue.text;
    }

    // If the newValue cardinality doesn't match the old value cardinality, it should be a constraint.
    if (newValue.card && oldValue.card && !newValue.card.equals(oldValue.card)) {
      const cardConstraint = new models.CardConstraint(newValue.card);
      if (!newValue.constraintsFilter.card.constraints.some(c => c.equals(cardConstraint))) {
        mergedValue.addConstraint(cardConstraint);
      }
    }

    // Now add the constraints from the new value
    mergedValue.constraints = mergedValue.constraints.concat(newValue.constraints);
    mergedValue.constraints = this.consolidateConstraints(element, mergedValue);
    return mergedValue;
  }

  findMatchingOption(element, choice, value, setCard=true) {
    for (const option of choice.options) {
      if (option instanceof models.ChoiceValue) {
        const choiceOption = option.clone();
        if (setCard) {
          choiceOption.card = choice.effectiveCard;
        }
        const result = this.findMatchingOption(element, choiceOption, value, setCard);
        if (result) {
          return result;
        }
      } else if (option instanceof models.IdentifiableValue && (option.constructor.name == value.constructor.name || value instanceof models.IncompleteValue)) {
        const oldOption = option.clone();
        if (!option.identifier.equals(value.effectiveIdentifier)) {
          if (this.checkHasBaseType(value.effectiveIdentifier, oldOption.effectiveIdentifier)) {
            // This is a case where the new value is a subtype of the old value.  Convert this to a type constraint.
            oldOption.addConstraint(new models.TypeConstraint(value.effectiveIdentifier, [], false));
          } else {
            // Wasn't a compatible identifier, so just keep on going
            continue;
          }
        }
        if (setCard) {
          oldOption.card = choice.effectiveCard;
        }
        return this.mergeValue(element, oldOption, value);
      }
    }
  }

  consolidateConstraints(element, value) {
    let consolidated = [];

    for (const constraint of value.constraints) {
      let consolidateFn;
      if (constraint instanceof models.CardConstraint) {
        consolidateFn = this.consolidateCardConstraint;
      } else if (constraint instanceof models.TypeConstraint) {
        consolidateFn = this.consolidateTypeConstraint;
      } else if (constraint instanceof models.IncludesTypeConstraint) {
        consolidateFn = this.consolidateIncludesTypeConstraint;
      } else if (constraint instanceof models.ValueSetConstraint) {
        consolidateFn = this.consolidateValueSetConstraint;
      } else if (constraint instanceof models.CodeConstraint) {
        consolidateFn = this.consolidateCodeConstraint;
      } else if (constraint instanceof models.IncludesCodeConstraint) {
        consolidateFn = this.consolidateIncludesCodeConstraint;
      } else if (constraint instanceof models.BooleanConstraint) {
        consolidateFn = this.consolidateBooleanConstraint;
      } else if (constraint instanceof models.FixedValueConstraint) {
        consolidateFn = this.consolidateFixedValueConstraint;
      } else {
        logger.error('Unsupported constraint type: %s. ERROR_CODE:12009', constraint.constructor.name);
        continue;
      }
      consolidated = consolidateFn.call(this, element, value, constraint, consolidated);
    }
    return consolidated;
  }

  consolidateCardConstraint(element, value, constraint, previousConstraints) {
    const target = this.constraintTarget(value, constraint.path);
    const targetLabel = this.constraintTargetLabel(value, constraint.path);

    if (target == null) {
      logger.error('Cannot resolve target of card constraint on %s', targetLabel);
      return previousConstraints;
    }

    // TODO: Use effectiveCardinality?  (complex since we must look at all constraints down the path)
    let constraints = previousConstraints;
    if (target.card && !constraint.card.fitsWithinCardinalityOf(target.card)) {
      logger.error('Cannot constrain cardinality of %s from %s to %s. ERROR_CODE:12010', targetLabel, target.card.toString(), constraint.card.toString());
      return constraints;
    }
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).card.constraints;
    for (const previous of filtered) {
      if (!constraint.card.fitsWithinCardinalityOf(previous.card)) {
        logger.error('Cannot further constrain cardinality of %s from %s to %s. ERROR_CODE:12011', targetLabel, previous.card.toString(), constraint.card.toString());
        return constraints;
      }
      // Remove the previous card constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }
    constraints.push(constraint.clone());
    return constraints;
  }

  consolidateTypeConstraint(element, value, constraint, previousConstraints) {
    constraint = constraint.clone();
    // If the constraint is actually on the target's value, update the path to explicitly include the target's value
    let skipCheck = false;
    if (constraint.onValue) {
      const targetVal = this.constraintTargetValue(value, constraint.path);
      // If it's a choice, check if the constraint is the choice or a subtype of the choice
      if (targetVal instanceof models.ChoiceValue) {
        let isValidOption = false;
        for (const opt of targetVal.aggregateOptions) {
          if (opt instanceof models.IdentifiableValue && this.checkHasBaseType(constraint.isA, opt.identifier)) {
            isValidOption = true;
            break;
          }
        }
        if (!isValidOption) {
          const targetLabel = this.constraintTargetLabel(value, constraint.path);
          logger.error('Cannot constrain type of %s to %s. ERROR_CODE:12012', targetLabel, constraint.isA.toString());
          return previousConstraints;
        }
        skipCheck = true; // We already checked it
      } else {
        // It's an identifier, so rewrite the constraint to be more specific
        const valID = this.constraintTargetValueIdentifier(value, constraint.path);
        if (valID) {
          constraint.onValue = false;
          constraint.path.push(valID);
        } else {
          const targetLabel = this.constraintTargetLabel(value, constraint.path);
          logger.error('Cannot resolve target of value type constraint on %s.  ERROR_CODE:12039', targetLabel);
          return previousConstraints;
        }
      }
    }

    const target = this.constraintTarget(value, constraint.path);
    const targetLabel = this.constraintTargetLabel(value, constraint.path);

    let constraints = previousConstraints;
    if (skipCheck) {
      // It's a choice, we already checked it
    } else if (!(target instanceof models.IdentifiableValue)) {
      logger.error('Cannot constrain type of %s since it has no identifier. ERROR_CODE:12013', targetLabel);
      return constraints;
    } else if (!this.checkHasBaseType(constraint.isA, target.identifier)) {
      logger.error('Cannot constrain type of %s to %s. ERROR_CODE:12014', targetLabel, constraint.isA.toString());
      return constraints;
    }
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).type.constraints;
    for (const previous of filtered) {
      if (constraint.onValue != previous.onValue) {
        continue;
      }
      if (!this.checkHasBaseType(constraint.isA, previous.isA)) {
        logger.error('Cannot further constrain type of %s from %s to %s. ERROR_CODE:12015', target.toString(), previous.isA.toString(), constraint.isA.toString());
        return constraints;
      }
      // Remove the previous type constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }
    constraints.push(constraint);
    return constraints;
  }

  consolidateIncludesTypeConstraint(element, value, constraint, previousConstraints) {
    // NOTE: This function doesn't actually affect values or constraints;
    // It only does some error checking to ensure the constraint is valid.

    // TODO: This marks the START of a block of code that is almost identical to consolidateTypeConstraint

    constraint = constraint.clone();
    // If the constraint is actually on the target's value, update the path to explicitly include the target's value
    let skipCheck = false;
    if (constraint.onValue) {
      const targetVal = this.constraintTargetValue(value, constraint.path);
      // If it's a choice, check if the constraint is the choice or a subtype of the choice
      if (targetVal instanceof models.ChoiceValue) {
        let isValidOption = false;
        for (const opt of targetVal.aggregateOptions) {
          if (opt instanceof models.IdentifiableValue && this.checkHasBaseType(constraint.isA, opt.identifier)) {
            isValidOption = true;
            break;
          }
        }
        if (!isValidOption) {
          const targetLabel = this.constraintTargetLabel(value, constraint.path);
          logger.error('Cannot constrain type of %s to %s. ERROR_CODE:12012', targetLabel, constraint.isA.toString());
          return previousConstraints;
        }
        skipCheck = true; // We already checked it
      } else {
        // It's an identifier, so rewrite the constraint to be more specific
        const valID = this.constraintTargetValueIdentifier(value, constraint.path);
        if (valID) {
          constraint.onValue = false;
          constraint.path.push(valID);
        } else {
          const targetLabel = this.constraintTargetLabel(value, constraint.path);
          logger.error('Cannot resolve target of value includes type constraint on %s.  ERROR_CODE:12040', targetLabel);
          return previousConstraints;
        }
      }
    }

    const target = this.constraintTarget(value, constraint.path);
    const targetLabel = this.constraintTargetLabel(value, constraint.path);

    const constraints = previousConstraints;
    if (skipCheck) {
      // It's a choice, we already checked it
    } else if (target == null) {
      logger.error('Cannot constrain type of %s since it did not resolve to a value. ERROR_CODE:12038', targetLabel);
      return constraints;
    } else if (!(target instanceof models.IdentifiableValue)) {
      logger.error('Cannot constrain type of %s since it has no identifier. ERROR_CODE:12017', targetLabel);
      return constraints;
    } else if (!this.checkHasBaseType(constraint.isA, target.identifier)) {
      logger.error('Cannot constrain element %s to %s since it is an invalid sub-type. ERROR_CODE:12018', constraint.isA.name, target.effectiveIdentifier.fqn);
      return constraints;
    }

    // TODO: This marks the END of a block of code that is almost identical to consolidateTypeConstraint

    // First check if there is a matching card constraint w/ the same path, if so, it is our card
    let targetCard = target.effectiveCard;
    const cardConstraint = value.constraintsFilter.card.withPath(constraint.path).single;
    if (cardConstraint) {
      targetCard = cardConstraint.card;
    }

    if (typeof targetCard === 'undefined') {
      logger.error('Cardinality of %s not found. ERROR_CODE:12020', target.identifier.fqn);
      return constraints;
    } else if (!targetCard.isMaxUnbounded && (constraint.card.min > targetCard.max || constraint.card.isMaxUnbounded || constraint.card.max > targetCard.max)) {
      logger.error('Cannot include cardinality on %s, "includes type" cardinality %s exceeds upper limit from container cardinality %s. ERROR_CODE:12021', target.identifier.fqn, constraint.card.toString(), targetCard.toString());
      return constraints;
    }

    constraints.push(constraint);
    return constraints;
  }

  getBottomMostCardinality(constraint) {
    const path = constraint.path;

    let previous = null;
    for (let i = 0; i < path.length; i++) {
      if (previous === null) {
        previous = this.lookup(constraint[i]);
        continue;
      }

      let currentEl = path[i];
      previous = this.lookup(previous.fields.filter(f => f.identifier.fqn == currentEl.identifier.fqn)[0]);
    }

    return;
  }

  consolidateValueSetConstraint(element, value, constraint, previousConstraints) {
    constraint = constraint.clone();
    let target = this.constraintTarget(value, constraint.path);
    let targetLabel = this.constraintTargetLabel(value, constraint.path);

    let constraints = previousConstraints;
    let match;
    if (target instanceof models.ChoiceValue) {
      match = target.options.find(t => this.supportsCodeConstraint(t.identifier));
      if(match) {
        target = match;
      }
    }
    if (!(target instanceof models.IdentifiableValue) && !match) {
      logger.error('Cannot constrain valueset of %s since it has no identifier. ERROR_CODE:12022', targetLabel);
      return constraints;
    } else if (!this.supportsCodeConstraint(target.identifier)) {
      // Isn't directly a concept, so try its value
      const targetValue = this.constraintTargetValue(value, constraint.path);
      let valID = this.valueIdentifier(targetValue);
      if (typeof valID === 'undefined' && targetValue instanceof models.ChoiceValue) {
        // It was a choice, so run through the choices looking for one that supports code constraints
        for (const option of targetValue.aggregateOptions) {
          if (this.supportsCodeConstraint(option.identifier)) {
            valID = option.identifier;
            break;
          }
        }
      }

      if (!this.supportsCodeConstraint(valID)) {
        logger.error('Cannot constrain valueset of %s since neither it nor its value is a concept. ERROR_CODE:12023', targetLabel);
        return constraints;
      }
      // Constraint is on the target's value.  Convert constraint to reference the value explicitly.
      constraint.path.push(valID);
      target = this.constraintTarget(value, constraint.path);
      targetLabel = this.constraintTargetLabel(value, constraint.path);
    }

    if ((new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).code.hasConstraints) {
      logger.error('Cannot constrain valueset of %s since it is already constrained to a single code. ERROR_CODE:12024', targetLabel);
      return constraints;
    }

    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).valueSet.constraints;
    for (const previous of filtered) {
      // TODO: We may want to verify that the new valueset is a subset of the old valueset (or that the old valueset allows extension),
      // but this still might not be right in the case where the new valueset contains codes that are just more specific versions of
      // the codes in the old valueset.

      // Remove the previous type constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }
    constraints.push(constraint.clone());
    return constraints;
  }

  consolidateCodeConstraint(element, value, constraint, previousConstraints) {
    constraint = constraint.clone();
    let target = this.constraintTarget(value, constraint.path);
    let targetLabel = this.constraintTargetLabel(value, constraint.path);
    let targetConstraints = [];

    if (!target) {
      logger.error('Invalid constraint path: %s', targetLabel);
      target = this.constraintTarget(value, constraint.path);
      return previousConstraints;
    }

    // Determine if the constraint is on the specific target or its value
    if (!this.supportsCodeConstraint(target.identifier)) {
      // Isn't directly a concept, so try its value
      let valID = this.constraintTargetValueIdentifier(value, constraint.path);
      if(!valID && value instanceof models.ChoiceValue) {
        let valOption = value.options.find(v => this.supportsCodeConstraint(v.identifier));
        if(valOption) {
          valID = valOption.identifier;
        }
      }
      if (!this.supportsCodeConstraint(valID)) {
        logger.error('Cannot constrain code of %s since neither it nor its value is a concept. ERROR_CODE:12025', targetLabel);
        return previousConstraints;
      }
      // Populate the target constraints in case they are needed
      // TODO handle this in a more effective manner.
      if(!value instanceof models.ChoiceValue) {
        targetConstraints = this.constraintTargetValue(value, constraint.path).constraints.map(c => {
          const clone = c.clone();
          clone.path.splice(0, 0, valID);
          return clone;
        });
      }
      // Constraint is on the target's value.  Convert constraint to reference the value explicitly.
      constraint.path.push(valID);
      target = this.constraintTarget(value, constraint.path);
      targetLabel = this.constraintTargetLabel(value, constraint.path);
    }

    // If the system is null, attempt to figure it out from any value set constraint that might exist
    this.fixMissingCodeSystemInCodeConstraint(constraint, previousConstraints, targetConstraints);

    // We allow previous code constraints to be overridden (but there should never be more than one in play at a time).
    // We allow the override because the new constraint may be a code that is more specific than the old constraint
    // (and hence, not a contradicting code, but a clarifying code).
    let constraints = previousConstraints;
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).code.constraints;
    for (const previous of filtered) {
      // Remove the previous type constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }

    // As a code constraint is a fixed value, we no longer need to retain value set constraints
    const vsConstraints = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).valueSet.constraints;
    vsConstraints.forEach(prev => constraints = constraints.filter(cst => cst !== prev));

    constraints.push(constraint);
    return constraints;
  }

  consolidateIncludesCodeConstraint(element, value, constraint, previousConstraints) {
    constraint = constraint.clone();
    let target = this.constraintTarget(value, constraint.path);
    let targetLabel = this.constraintTargetLabel(value, constraint.path);
    let targetConstraints = [];

    // Determine if the constraint is on the specific target or its value
    if (!this.supportsCodeConstraint(target.identifier)) {
      // Isn't directly a concept, so try its value
      const valID = this.constraintTargetValueIdentifier(value, constraint.path);
      if (!this.supportsCodeConstraint(valID)) {
        logger.error('Cannot constrain included code of %s since neither it nor its value is a concept. ERROR_CODE:12026', targetLabel);
        return previousConstraints;
      }
      // Populate the target constraints in case they are needed
      targetConstraints = this.constraintTargetValue(value, constraint.path).constraints.map(c => {
        const clone = c.clone();
        clone.path.splice(0, 0, valID);
        return clone;
      });
      // Constraint is on the target's value.  Convert constraint to reference the value explicitly.
      constraint.path.push(valID);
      target = this.constraintTarget(value, constraint.path);
      targetLabel = this.constraintTargetLabel(value, constraint.path);
    }

    // If the system is null, attempt to figure it out from any value set constraint that might exist
    this.fixMissingCodeSystemInCodeConstraint(constraint, previousConstraints, targetConstraints);

    let constraints = previousConstraints;
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).includesCode.constraints;
    for (const previous of filtered) {
      if (previous.code.equals(constraint.code)) {
        // no need to duplicate the constraint -- just return the existing constraints as-is
        return constraints;
      }
    }
    // TODO: Consider checking number of includes constraints against max allowed by cardinality.
    // May be complex (or not possible here) since we need to consider card constraints not yet applied.

    // There are no previous code constraints, so add this one
    constraints.push(constraint);
    return constraints;
  }

  fixMissingCodeSystemInCodeConstraint(constraint, previousConstraints, targetConstraints) {
    if (typeof constraint.code.system == 'undefined' || constraint.code.system == null) {
      let constraints = previousConstraints.slice(0).concat(targetConstraints);
      const filteredVS = (new models.ConstraintsFilter(constraints)).withPath(constraint.path).valueSet.constraints;
      for (const vsCst of filteredVS) {
        const vs = this._expanded.valueSets.findByURL(vsCst.valueSet);
        if (typeof vs !== 'undefined') {
          for (const icRule of vs.rulesFilter.includesCode.rules) {
            if (icRule.code.code == constraint.code.code) {
              constraint.code.system = icRule.code.system;
              return;
            }
          }
        }
      }
    }
  }

  consolidateBooleanConstraint(element, value, constraint, previousConstraints) {
    constraint = constraint.clone();
    let target = this.constraintTarget(value, constraint.path);
    let targetLabel = this.constraintTargetLabel(value, constraint.path);

    // Determine if the constraint is on the specific target or its value
    if (!this.supportsBooleanConstraint(target.identifier)) {
      // Isn't directly a boolean, so try its value
      let valID = this.constraintTargetValueIdentifier(value, constraint.path);
      if(!valID && value instanceof models.ChoiceValue) {
        let valOption = value.options.find(v => this.supportsBooleanConstraint(v.identifier));
        if(valOption) {
          valID = valOption.identifier;
        }
      }
      if (!this.supportsBooleanConstraint(valID)) {
        logger.error('Cannot constrain boolean value of %s since neither it nor its value is a boolean. ERROR_CODE:12027', targetLabel);
        return previousConstraints;
      }
      // Constraint is on the target's value.  Convert constraint to reference the value explicitly.
      constraint.path.push(valID);
      target = this.constraintTarget(value, constraint.path);
      targetLabel = this.constraintTargetLabel(value, constraint.path);
    }

    // We do not allow previous boolean constraints to be overridden with a different value
    let constraints = previousConstraints;
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).boolean.constraints;
    for (const previous of filtered) {
      if (previous.value != constraint.value) {
        logger.error('Cannot constrain boolean value of %s to %s since a previous constraint constrains it to %s. ERROR_CODE:12028', targetLabel, constraint.value, previous.value);
        return previousConstraints;
      }
      // Remove the previous type constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }

    // As a boolean constraint is a fixed value, we no longer need to retain value set constraints
    const vsConstraints = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).valueSet.constraints;
    vsConstraints.forEach(prev => constraints = constraints.filter(cst => cst !== prev));

    constraints.push(constraint);

    return constraints;
  }

  consolidateFixedValueConstraint(element, value, constraint, previousConstraints) {
    constraint = constraint.clone();
    let target = this.constraintTarget(value, constraint.path);
    let targetLabel = this.constraintTargetLabel(value, constraint.path);

    // Determine if the constraint is on the specific target or its value
    if (!this.supportsFixedValueConstraint(target.identifier)) {
      // Isn't directly a fixed value, so try its value
      let valID = this.constraintTargetValueIdentifier(value, constraint.path);
      if(!valID && value instanceof models.ChoiceValue) {
        let valOption = value.options.find(v => this.supportsFixedValueConstraint(v.identifier));
        if(valOption) {
          valID = valOption.identifier;
        }
      }
      if (!this.supportsFixedValueConstraint(valID)) {
        logger.error('Cannot constrain string value of %s since neither it nor its value is a string. ERROR_CODE:12041', targetLabel);
        return previousConstraints;
      }
      // Constraint is on the target's value.  Convert constraint to reference the value explicitly.
      constraint.path.push(valID);
      target = this.constraintTarget(value, constraint.path);
      targetLabel = this.constraintTargetLabel(value, constraint.path);
    }

    // We do not allow previous fixed constraints to be overridden with a different value
    let constraints = previousConstraints;
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).fixedValue.constraints;
    for (const previous of filtered) {
      if (previous.value != constraint.value) {
        logger.error('Cannot constrain string value of %s to %s since a previous constraint constrains it to %s. ERROR_CODE:12042', targetLabel, constraint.value, previous.value);
        return previousConstraints;
      }
      // Remove the previous type constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }

    // As a constraint is a fixed value, we no longer need to retain value set constraints
    const vsConstraints = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).valueSet.constraints;
    vsConstraints.forEach(prev => constraints = constraints.filter(cst => cst !== prev));

    constraints.push(constraint);

    return constraints;
  }

  findMatchingIncludesType(value, path = [], typeToMatch) {
    if (!value || !typeToMatch) {
      return;
    }
    // First, check for a constraint directly on the element
    let match = value.constraintsFilter.withPath(path).includesType.constraints.find(c => {
      return c.isA.equals(typeToMatch);
    });
    if (match) {
      return match;
    } else if (path.length > 0 && value instanceof models.IdentifiableValue) {
      // If the path length > 1, check the next level down
      const element = this.lookup(value.effectiveIdentifier);
      if (element) {
        const newValue = this.findMatchInDataElement(element, path[0]);
        if (newValue) {
          return this.findMatchingIncludesType(newValue, path.slice(1), typeToMatch);
        }
      }
    }
  }

  constraintTarget(value, path) {
    if (path.length > 0) {
      // TODO: Actually follow the whole chain, merge constraints down instead of taking it off the last parent
      const parentID = path.length === 1 ? value.effectiveIdentifier : path[path.length - 2];
      const parentEl = this.lookup(parentID);
      if (parentEl) {
        const target = this.findMatchValueInDataElement(parentEl, path[path.length-1]);
        if (target instanceof models.ChoiceValue) {
          if (path[path.length-1].isValueKeyWord) {
            // We can't narrow this down to a single identifier, so return the choice
            return target;
          }
          // Create a new IdentifiableValue from the choice option
          const option = target.aggregateOptions.find(o => this.findMatchInValue(o, path[path.length-1]));
          if (option) {
            const targetOption = option.clone();
            // Take on the choice's cardinality
            targetOption.card = target.effectiveCard;
            return targetOption;
          }
        } else if (target) {
          return target;
        }
      }
      // The target wasn't found in the parent.  It may be be an includesType constraint.
      const ictCst = this.findMatchingIncludesType(value, path.slice(0, -1), path[path.length-1]);
      if (ictCst) {
        // It's an IncludesTypeConstraint.  Create a new Value to represent it.
        return new models.IdentifiableValue(ictCst.isA).withCard(ictCst.card);
      }
    }
    // No path, just return the value back
    return value;
  }

  constraintTargetLabel(value, path) {
    return [value.toString(), ...(path.map(p => p.name))].join('.');
  }

  constraintTargetValue(value, path) {
    const target = this.constraintTarget(value, path);
    if (!(target instanceof models.IdentifiableValue) || target.identifier.isPrimitive) {
      return;
    }
    const element = this.lookup(target.effectiveIdentifier);
    if (typeof element !== 'undefined' && typeof element.value !== 'undefined') {
      return element.value;
    }
  }

  constraintTargetValueIdentifier(value, path) {
    const targetValue = this.constraintTargetValue(value, path);
    return this.valueIdentifier(targetValue);
  }

  valueIdentifier(value) {
    if (typeof value !== 'undefined') {
      // If target value is a choice, but all the options are the same identifier, return that identifier.
      if (value instanceof models.ChoiceValue) {
        const identifier = value.options[0].identifier;
        if (typeof identifier !== 'undefined') {
          for (const option of value.options) {
            if (!identifier.equals(option.identifier)) {
              // Mismatched identifiers in choice, so just return (undefined)
              return;
            }
          }
          return identifier;
        }
      }
      return value.effectiveIdentifier;
    }
  }

  supportsCodeConstraint(identifier) {
    return CONCEPT.equals(identifier);
  }

  supportsBooleanConstraint(identifier) {
    return BOOLEAN.equals(identifier);
  }

  supportsFixedValueConstraint(identifier) {
    return STRING.equals(identifier);
  }

  checkHasBaseType(identifier, baseIdentifier) {
    if (typeof identifier === 'undefined' || typeof baseIdentifier === 'undefined') {
      return false;
    }
    const basedOns = this.getRecursiveBasedOns(identifier);
    return basedOns.some(id => id.equals(baseIdentifier));
  }

  getRecursiveBasedOns(identifier, alreadyProcessed = []) {
    // If it's primitive or we've already processed this one, don't go further (avoid circular dependencies)
    if (alreadyProcessed.some(id => id.equals(identifier))) {
      return alreadyProcessed;
    } else if (identifier.isPrimitive) {
      alreadyProcessed.push(identifier);
      return alreadyProcessed;
    }

    // We haven't processed it, so look it up
    const element = this._unexpanded.dataElements.findByIdentifier(identifier);
    if (typeof element === 'undefined') {
      logger.error('Cannot resolve element definition for %s. ERROR_CODE:12029', identifier.fqn);
      return alreadyProcessed;
    }
    // Add it to the already processed list (again, to avoid circular dependencies)
    alreadyProcessed.push(identifier);
    // Now recursively get the BasedOns for each of the BasedOns
    for (const basedOn of element.basedOn) {
      alreadyProcessed = this.getRecursiveBasedOns(basedOn, alreadyProcessed);
    }

    return alreadyProcessed;
  }

  lookup(identifier) {
    // First try to find it in the already expanded elements
    let element = this._expanded.dataElements.findByIdentifier(identifier);
    if (typeof element === 'undefined') {
      // We didn't find it, so look in the unexpanded elements, then expand it
      const unexpanded = this._unexpanded.dataElements.findByIdentifier(identifier);
      if (typeof unexpanded !== 'undefined') {
        for (const file of this._unexpanded.dataElements.files) {
          for (const de of this._unexpanded.dataElements.byFile(file)) {
            if (de.identifier.equals(identifier)) {
              return this.expandElement(unexpanded, file);
            }
          }
        }
      }
      return unexpanded;
    }
    return element;
  }

  expandMappingForTargetAndIdentifier(target, identifier) {
    // Setup a child logger to associate logs with the current mapping
    const lastLogger = logger;
    logger = rootLogger.child({ shrId: identifier.fqn, targetSpec: target });
    logger.debug('Start expanding mapping');
    try {
      const de = this._expanded.dataElements.findByIdentifier(identifier);
      if (typeof de === 'undefined') {
        logger.error('Cannot resolve element definition for %s. ERROR_CODE:12029', identifier.fqn);
        return;
      }

      const map = this.getMapWithInheritedRules(target, identifier);
      if (typeof map === 'undefined') {
        return;
      }
      // Put the target item into the logger for all future logging statements
      logger.fields.target = map.targetItem;

      // Go through this mappings rules, resolve the identifiers, and add them to the big rules list
      // First clone the rules into a new list because we will possibly insert new rules into it
      for (let i=0; i < map.rules.length; i++) {
        const rule = map.rules[i];
        if (rule instanceof models.FieldMappingRule) {
          let currentDE = de;
          for (let j=0; j < rule.sourcePath.length; j++) {
            let match = this.findMatchInDataElement(currentDE, rule.sourcePath[j]);
            // If match is an array, then it means the path points to a Value that is a choice.
            if (Array.isArray(match)) {
              // We'll process the first of the choices now, but first add the rest of the choice
              // options to the mappingRules array to be processed later.
              for (let k=1; k < match.length; k++) {
                // Get the new source path with the "Value" part replaced by the new match
                const newSourcePath = rule.sourcePath.slice();
                newSourcePath[j] = match[k];
                // Create a clone of the rule with the new sourcepath in it
                const newRule = new models.FieldMappingRule(newSourcePath, rule.target);
                newRule.lastModifiedBy = rule.lastModifiedBy;
                // Insert it into the mappingRules for processing later
                map.rules.splice(i+k, 0, newRule);
              }
              // Now reassign match to the first item in the choice options that matched
              match = match[0];
            }
            if (match) {
              rule.sourcePath[j] = match;
              if (j < (rule.sourcePath.length-1) && !(match instanceof models.TBD)) {
                currentDE = this._expanded.dataElements.findByIdentifier(match);
                if (typeof de === 'undefined') {
                  logger.error('Cannot resolve data element definition from path: %s. ERROR_CODE:12031', this.highlightPartInPath(rule.sourcePath, j));
                  // Remove the invalid rule from the map and decrement index so we don't skip a rule in the loop
                  map.rules.splice(i, 1);
                  i = i-1;
                  break;
                }
              }
            } else {
              logger.error('Cannot resolve data element definition from path: %s. ERROR_CODE:12032', this.highlightPartInPath(rule.sourcePath, j));
              // Remove the invalid rule from the map and decrement index so we don't skip a rule in the loop
              map.rules.splice(i, 1);
              i = i-1;
              break;
            }
          }
        }
      }

      // Now merge the rules to override earlier rules when later rules apply to the same source and/or target
      for (let i=0; i < map.rules.length; i++) {
        const rule = map.rules[i];
        const j = map.rules.findIndex(item => {
          if (rule instanceof models.CardinalityMappingRule && item instanceof models.CardinalityMappingRule) {
            return rule.target == item.target;
          } else if (rule instanceof models.FixedValueMappingRule && item instanceof models.FixedValueMappingRule) {
            return rule.target == item.target;
          }
          return rule.sourcePath && item.sourcePath && this.equalSourcePaths(rule.sourcePath, item.sourcePath);
        });
        if (j >= 0 && j < i) {
          map.rules[j] = rule;
          map.rules.splice(i, 1);
          i = i-1;
        }
      }

      this._expanded.maps.add(map);
      return map;
    } finally {
      logger.debug('Done expanding mapping');
      logger = lastLogger;
    }
  }

  getMapWithInheritedRules(target, identifier) {
    // First, collect all of the maps that will need to be merged together
    const maps = this.collectMaps(target, identifier);
    if (maps.length === 0) {
      return;
    }
    // The list of maps is in order of priority, so create a new map with the targetItem based on the first returned map
    const fullMap = new models.ElementMapping(identifier, target, maps[0].targetItem);

    if (maps.filter(map => map.identifier.fqn != identifier.fqn).length > 0) {
      fullMap.inheritedFrom = maps.filter(map => map.identifier.fqn != identifier.fqn)[0].identifier;

      const currMap = maps.find(map => map.identifier.fqn == identifier.fqn);
      if (currMap) {
        fullMap.inheritance = models.OVERRIDDEN;
      } else {
        fullMap.inheritance = models.INHERITED;
      }
    }

    // Since rules are applied in order, and later rules override earlier rules, we want rules from the higher priority
    // maps applied last.  For this reason, we iterate the collected maps backwards (so priority maps go last).  We
    // also keep track of already seen rules in order to reduce duplicates.
    const seen = new Map();
    for (let i = maps.length-1; i >= 0; i--) {
      const map = maps[i];
      for (const rule of map.rules) {
        const key = rule.toString();
        if (!seen.has(key)) {
          if (!rule.lastModifiedBy) {
            rule.lastModifiedBy = map.identifier;
          }
          fullMap.addRule(rule.clone());
          seen.set(key, true);
        }
      }
    }
    return fullMap;
  }

  collectMaps(target, identifier) {
    const maps = [];
    let map = this._unexpanded.maps.findByTargetAndIdentifier(target, identifier);
    if (typeof map !== 'undefined') {
      map = map.clone();
      maps.push(map);
    }
    const de = this._expanded.dataElements.findByIdentifier(identifier);
    if (typeof de !== 'undefined') {
      for (const basedOn of de.basedOn) {
        const basedOnMaps = this.collectMaps(target, basedOn);
        if (basedOnMaps.length > 0) {
          const basedOnMap = basedOnMaps[0];
          if (typeof map === 'undefined') {
            map = basedOnMap;
          } else if (typeof map.targetItem === 'undefined') {
            map.targetItem = basedOnMap.targetItem;
          } else if (map.targetItem !== basedOnMap.targetItem) {
            if (! this._exporterMap.get(target).isTargetBasedOn(map.targetItem, basedOnMap.targetItem, target)) {
              logger.debug('Skipping mismatched targets: %s maps to %s, but based on class (%s) maps to %s, and %s is not based on %s in %s. ERROR_CODE:02001',
                map.identifier.fqn, map.targetItem, basedOnMap.identifier.fqn, basedOnMap.targetItem, map.targetItem, basedOnMap.targetItem, map.targetSpec);
              continue;
            }
          }
          maps.push(...basedOnMaps);
        }
      }
    }
    if (typeof map !== 'undefined' && typeof map.targetItem === 'undefined') {
      logger.error('Cannot determine target item of mapping for %s', map.identifier.fqn);
      return [];
    }
    return maps;
  }

  findMatchValueInDataElement(de, idToMatch) {
    // Special case logic for TBD (return undefined)
    if (idToMatch instanceof models.TBD) {
      return;
    }
    // Special case logic for "_Value"
    if (idToMatch.isValueKeyWord) {
      return de.value;
    }
    // Special case logic for other special keywords (return undefined)
    if (idToMatch.isSpecialKeyWord) {
      return;
    }
    // "Normal" case
    let result;
    for (const value of [de.value, ...de.fields]) {
      if (value) {
        const match = this.findMatchInValue(value, idToMatch);
        if (match && result) {
          logger.error('Found multiple matches for field %s. ERROR_CODE:12035', idToMatch.name);
        } else if (match) {
          result = value;
        }
      }
    }
    return result;
  }

  findMatchInDataElement(de, idToMatch) {
    // Special case logic for TBD (just return the TBD)
    if (idToMatch instanceof models.TBD) {
      return idToMatch.clone();
    }
    // Special case logic for "_Value"
    else if (idToMatch.isValueKeyWord) {
      if (de.value instanceof models.IdentifiableValue) {
        return de.value.effectiveIdentifier;
      } else if (typeof de.value === 'undefined') {
        logger.error('Cannot map _Value since element does not define a value. ERROR_CODE:12033');
      } else if (de.value instanceof models.ChoiceValue) {
        // Return all the possible choices
        const results = [];
        for (const opt of de.value.aggregateOptions) {
          if (opt instanceof models.IdentifiableValue) {
            results.push(opt.effectiveIdentifier);
          }
        }
        return results;
      } else {
        logger.error('Cannot map _Value since it is unsupported type: %s. ERROR_CODE:12034', de.value.constructor.name);
      }
    // Special case logic for other special keywords
    } else if (idToMatch.isSpecialKeyWord) {
      return idToMatch.clone(); // just return them as-is
    // "Normal" case
    } else {
      let result;
      for (const value of [de.value, ...de.fields]) {
        if (value) {
          const match = this.findMatchInValue(value, idToMatch);
          if (match && result) {
            logger.error('Found multiple matches for field %s. ERROR_CODE:12035', idToMatch.name);
          } else if (match) {
            result = match;
          }
        }
      }
      return result;
    }
  }

  findMatchInValue(value, idToMatch) {
    if (value instanceof models.IdentifiableValue) {
      if (idToMatch.namespace && value.getPossibleIdentifiers().some(id => id.equals(idToMatch))) {
        return value.effectiveIdentifier.clone();
      } else if (!idToMatch.namespace && value.getPossibleIdentifiers().some(id => id.name === idToMatch.name)) {
        return value.effectiveIdentifier.clone();
      }
    } else if (value instanceof models.ChoiceValue) {
      for (const opt of value.options) {
        const match = this.findMatchInValue(opt, idToMatch);
        if (typeof match !== 'undefined') {
          return match;
        }
      }
    }
  }

  lookupMapping(targetSpec, identifier) {
    // First try to find it in the already expanded mappings
    let mapping = this._expanded.maps.findByTargetAndIdentifier(targetSpec, identifier);
    if (typeof mapping === 'undefined') {
      // We didn't find it, so expand a new mapping (if possible)
      mapping = this.expandMappingForTargetAndIdentifier(targetSpec, identifier);
    }
    return mapping;
  }

  highlightPartInPath(path, index) {
    let result = '';
    for (let i=0; i < path.length; i++) {
      if (i == index) {
        result += `<<${path[i].name}>>`;
      } else {
        result += path[i].name;
      }
      if (i < (path.length - 1)) {
        result += '.';
      }
    }
    return result;
  }

  equalSourcePaths(sourcePathA, sourcePathB) {
    if (sourcePathA.length != sourcePathB.length) {
      return false;
    }
    for (let i=0; i < sourcePathA.length; i++) {
      if (!sourcePathA[i].equals(sourcePathB[i])) {
        return false;
      }
    }
    return true;
  }
}

module.exports = { expand, setLogger, MODELS_INFO: models.MODELS_INFO };
