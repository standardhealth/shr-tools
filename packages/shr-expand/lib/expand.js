const bunyan = require('bunyan');
const models = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-fhir-export'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

function expand(specifications, ...exporters) {
  const expander = new Expander(specifications, ...exporters);
  return expander.expand();
}

const CODE = new models.PrimitiveIdentifier('code');
const BOOLEAN = new models.PrimitiveIdentifier('boolean');

class Expander {
  constructor(specs, ...exporters) {
    this._unexpanded = specs;
    this._expanded = new models.Specifications();
    this._exporterMap = new Map();
    for (const exp of exporters) {
      this._exporterMap.set(exp.TARGET, exp);
    }
  }

  expand() {
    // First just copy over clones of the namespace, value set, and code system definitions (they don't need expansion)
    for (const ns of this._unexpanded.namespaces.all) {
      this._expanded.namespaces.add(ns.clone());
    }
    for (const vs of this._unexpanded.valueSets.all) {
      this._expanded.valueSets.add(vs.clone());
    }
    for (const cs of this._unexpanded.codeSystems.all) {
      this._expanded.codeSystems.add(cs.clone());
    }
    // Now expand all of the data elements
    for (const de of this._unexpanded.dataElements.all) {
      const expandedDE = this._expanded.dataElements.findByIdentifier(de.identifier);
      if (typeof expandedDE === 'undefined') {
        this.expandElement(de);
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

  expandElement(element) {
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
            return item instanceof models.IdentifiableValue && (item.identifier.equals(field.identifier) || item.effectiveIdentifier.equals(field.identifier));
          });
          if (i >= 0) {
            mergedFields[i] = this.mergeValue(node, mergedFields[i], field);
          } else {
            const f = field.clone();
            // Still need to process the cardinality and constraints to ensure they are valid
            // (test for node == element to ensure we only report out the error on the root element)
            if (typeof f.effectiveCard === 'undefined' && node == element) {
              logger.error('No cardinality found for field: %s. ERROR_CODE:12004', f.toString());
            }
            f.constraints = this.consolidateConstraints(node, f);
            mergedFields.push(f);
          }
        }
      }

      const expanded = element.clone();
      expanded.value = mergedValue;
      expanded.fields = mergedFields;
      this._expanded.dataElements.add(expanded);
      return expanded;
    } finally {
      logger.debug('Done expanding element');
      this.logger = lastLogger;
    }
  }

  // mergeValue does a best attempt at merging the values, recording errors as it encounters them.  If the values
  // are completely incompatible, it will record an error and abandon the merge.  For less significant errors
  // (cardinalities that don't fit, etc), it will record the error, skip that part of the merge, and continue.
  mergeValue(element, oldValue, newValue) {
    let mergedValue = oldValue.clone();

    // Check that the class types match (except when new one is IncompleteValue or old one is a choice).  An error abandons the merge.
    if (!(newValue instanceof models.IncompleteValue) && !(oldValue instanceof models.ChoiceValue) && newValue.constructor.name != oldValue.constructor.name) {
      logger.error('Cannot override %s with %s. ERROR_CODE:12005', oldValue.toString(), newValue.toString());
      return mergedValue;
    }

    // Check that the identifiers match.  An error abandons the merge.
    if (newValue instanceof models.IdentifiableValue) {
      // Only check if the new value is NOT the "Value" keyword -- because if it is, we just let it inherit parent value
      if (!newValue.identifier.isValueKeyWord) {
        if (oldValue instanceof models.ChoiceValue) {
          // The newValue must be one of the choices
          const match = this.findMatchingOption(oldValue, newValue);
          if (!match) {
            logger.error('Cannot override %s with %s since it is not one of the options. ERROR_CODE:12006', oldValue.toString(), newValue.toString());
            return mergedValue;
          }
          mergedValue = match.clone().withCard(oldValue.card.clone()); // Take on the choice's cardinality
        } else if (!newValue.identifier.equals(oldValue.identifier) && !newValue.identifier.equals(oldValue.effectiveIdentifier)) {
          logger.error('Cannot override %s with %s. ERROR_CODE:12007', oldValue.toString(), newValue.toString());
          return mergedValue;
        }
      }
    } else if (newValue instanceof models.ChoiceValue) {
      logger.error('Cannot override %s with %s since overriding ChoiceValue is not supported. ERROR_CODE:12008', oldValue.toString(), newValue.toString());
      return mergedValue;
    }

    // If the newValue cardinality doesn't match the old value cardinality, it should be a constraint.
    if (newValue.card && oldValue.card && !newValue.card.equals(oldValue.card)) {
      mergedValue.addConstraint(new models.CardConstraint(newValue.card));
    }

    // Now add the constraints from the new value
    mergedValue.constraints = mergedValue.constraints.concat(newValue.constraints);
    mergedValue.constraints = this.consolidateConstraints(element, mergedValue);
    return mergedValue;
  }

  findMatchingOption(choice, value) {
    for (const option of choice.options) {
      if (option instanceof models.ChoiceValue) {
        const result = this.findMatchingOption(option, value);
        if (result) {
          return result;
        }
      } else if (option instanceof models.IdentifiableValue && option.constructor.name == value.constructor.name && option.identifier.equals(value.identifier)) {
        return option;
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
          logger.format('Cannot resolve target of value type constraint on %s', targetLabel);
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

    var target = this.constraintTarget(value, constraint.path);
    var targetLabel = this.constraintTargetLabel(value, constraint.path);

    var targetIsValue = false; //constraint.isOnValue; //TODO NEEDS RENAME/LOGICAL CLEAR-UP

    /* if (targetIsValue) {
      let targetVal = this.lookup(value.identifier).value;
      if (targetVal != null) {
        target = targetVal;
      } else {
        logger.error("Includes Type Constraint Error: Cannot find target value");
      }

      let firstId = constraint.path[0];
      constraint.path[0] = (firstId.name == "Value" && firstId.namespace == "unknown") ? targetVal.identifier : constraint.path[0];
    } */

    let constraints = previousConstraints;

    if (!(target instanceof models.IdentifiableValue)) {
      logger.error('Cannot constrain type of %s since it has no identifier. ERROR_CODE:12017', targetLabel);
      return constraints;
    } else if (!this.checkHasBaseType(constraint.isA, target.identifier)) {
      logger.error('Cannot constrain element %s to %s since it is an invalid sub-type. ERROR_CODE:12018', constraint.isA.name, target.identifier.fqn);
      return constraints;
    }

    /* const prevIncludes = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).includesType.hasConstraints;
       if (prevIncludes) {
           logger.error("Base Class %s already defines IncludesTypeConstraint", target.identifier.fqn)
           return constraints;
    } */

    let targetCard;
    if (constraint.path.length == 0 || value.constraintsFilter.card.withPath(constraint.path).constraints.length > 0 || targetIsValue) { //e.g. Observation
      if (target.effectiveCard != null) {
        targetCard = target.effectiveCard;
      } else if (value.constraintsFilter.card.withPath(constraint.path).constraints.length > 0) {
        targetCard = value.constraintsFilter.card.withPath(constraint.path).constraints[0].card;
      }
    } else if (constraint.path.length == 1) { //e.g. Panelmembers.Observation
      let el = this.lookup(value.identifier).fields.filter(f => f.identifier.fqn == target.identifier.fqn)[0];
      if (el == null) {
        //Try Checking if on value
        el = this.lookup(value.identifier).value;
      }
      targetCard = el.effectiveCard;
    } else if (constraint.path.length > 1 ) { //e.g. SomeElement1.SomeElement2.PanelMembers.Observation
      let lastIndex = constraint.path.length - 1;
      let finalEl = this.lookup(constraint.path[lastIndex - 1]).fields.filter(f => f.identifier.fqn == target.identifier.fqn)[0];
      if (finalEl == null) {
        //Try Checking if on value
        finalEl = this.lookup(constraint.path[lastIndex - 1]).value;
      }
      targetCard = finalEl.effectiveCard;
    }

    if (typeof targetCard === 'undefined') {
      logger.error('Cardinality of %s not found. ERROR_CODE:12020', target.identifier.fqn);
      return constraints;
    } else if (!constraint.card.fitsWithinCardinalityOf(targetCard)) {
      logger.error('Cannot include cardinality on %s, cardinality of %s doesnt fit within %s. ERROR_CODE:12021', target.identifier.fqn, constraint.card.toString(), targetCard.toString());
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
    if (!(target instanceof models.IdentifiableValue)) {
      logger.error('Cannot constrain valueset of %s since it has no identifier. ERROR_CODE:12022', targetLabel);
      return constraints;
    } else if (!this.supportsCodeConstraint(target.identifier)) {
      // Isn't directly a code/Coding/CodeableConcept, so try its value
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
        logger.error('Cannot constrain valueset of %s since neither it nor its value is a code, Coding, or CodeableConcept. ERROR_CODE:12023', targetLabel);
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

    // Determine if the constraint is on the specific target or its value
    if (!this.supportsCodeConstraint(target.identifier)) {
      // Isn't directly a code/Coding/CodeableConcept, so try its value
      const valID = this.constraintTargetValueIdentifier(value, constraint.path);
      if (!this.supportsCodeConstraint(valID)) {
        logger.error('Cannot constrain code of %s since neither it nor its value is a code, based on a Coding, or based on CodeableConcept. ERROR_CODE:12025', targetLabel);
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

    // We allow previous code constraints to be overridden (but there should never be more than one in play at a time).
    // We allow the override because the new constraint may be a code that is more specific than the old constraint
    // (and hence, not a contradicting code, but a clarifying code).
    let constraints = previousConstraints;
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).code.constraints;
    for (const previous of filtered) {
      // Remove the previous type constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }
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
      // Isn't directly a code/Coding/CodeableConcept, so try its value
      const valID = this.constraintTargetValueIdentifier(value, constraint.path);
      if (!this.supportsCodeConstraint(valID)) {
        logger.error('Cannot constrain included code of %s since neither it nor its value is a code, based on a Coding, or based on CodeableConcept. ERROR_CODE:12026', targetLabel);
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
      if (this.sameCode(previous.code, constraint.code)) {
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
      const valID = this.constraintTargetValueIdentifier(value, constraint.path);
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
    constraints.push(constraint);

    return constraints;
  }

  constraintTarget(value, path) {
    let target = value;
    if (path.length > 0) {
      // TODO: Actually extract the real value (w/ constraints) by following the path from element
      target = new models.IdentifiableValue(path[path.length - 1]);
    }
    return target;
  }

  constraintTargetLabel(value, path) {
    return [value.toString(), ...(path.map(p => p.name))].join('.');
  }

  constraintTargetValue(value, path) {
    const target = this.constraintTarget(value, path);
    if (!(target instanceof models.IdentifiableValue) || target.identifier.isPrimitive) {
      return;
    }
    const element = this.lookup(target.identifier);
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
      return value.identifier;
    }
  }

  supportsCodeConstraint(identifier) {
    return CODE.equals(identifier) || this.checkHasBaseType(identifier, new models.Identifier('shr.core', 'Coding'))
      || this.checkHasBaseType(identifier, new models.Identifier('shr.core', 'CodeableConcept'));
  }

  supportsBooleanConstraint(identifier) {
    return BOOLEAN.equals(identifier);
  }

  sameCode(c1, c2) {
    return c1 && c2 && c1.system == c2.system && c1.code == c2.code;
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
    if (identifier.isPrimitive || alreadyProcessed.some(id => id.equals(identifier))) {
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
        return this.expandElement(unexpanded);
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
      let map = this._unexpanded.maps.findByTargetAndIdentifier(target, identifier);

      const de = this._expanded.dataElements.findByIdentifier(identifier);
      if (typeof de === 'undefined') {
        logger.error('Cannot resolve element definition for %s. ERROR_CODE:12029', identifier.fqn);
        return;
      }

      // If this doesn't have its own mapping, use a based on mapping
      if (typeof map === 'undefined') {
        for (const baseID of de.basedOn) {
          if (baseID instanceof models.TBD) {
            continue;
          }
          const baseMap = this.lookupMapping(target, baseID);
          if (typeof baseMap !== 'undefined') {
            map = new models.ElementMapping(identifier.clone(), target, baseMap.targetItem);
            for (const rule of baseMap.rules) {
              map.rules.push(rule.clone());
            }
            this._expanded.maps.add(map);
            return map;
          }
        }
        // Didn't have its own mapping, nor did its based ons have any mappings, so just return
        return;
      }

      // It had its own mapping, so continue with rest of logic to expand it
      let targetItem = map.targetItem;
      // Put the target item into the logger for all future logging statements
      logger.fields.target = targetItem;

      // Need to start by building up the rules from the mappings for based on elements
      const allRules = [];
      for (const baseID of de.basedOn) {
        if (baseID instanceof models.TBD) {
          continue;
        }
        const base = this.lookupMapping(map.targetSpec, baseID);
        if (typeof base !== 'undefined') {
          if (typeof targetItem === 'undefined' && typeof base.targetItem !== 'undefined') {
            targetItem = base.targetItem;
            // Also adjust the target item in the logger
            logger.fields.target = targetItem;
          } else if (targetItem != base.targetItem) {
            const ok = this._exporterMap.has(map.targetSpec) && this._exporterMap.get(map.targetSpec).isTargetBasedOn(targetItem, base.targetItem);
            if (!ok) {
              logger.warn('Potentially mismatched targets: %s maps to %s, but based on class (%s) maps to %s, and %s is not based on %s in %s. ERROR_CODE:02001',
                identifier.fqn, targetItem, base.identifier.fqn, base.targetItem, targetItem, base.targetItem, map.targetSpec);
            }
          }
          // Push the rules onto our list, but clone them first (just for safety)
          allRules.push(...(base.rules.map(r => r.clone())));
        }
      }

      // If we still don't have a target item, bail
      if (typeof targetItem === 'undefined') {
        logger.error('Cannot determine target item. ERROR_CODE:12030');
        return;
      }

      // Go through this mappings rules, resolve the identifiers, and add them to the big rules list
      // First clone the rules into a new list because we will possibly insert new rules into it
      const mappingRules = [...map.rules];
      for (let i=0; i < mappingRules.length; i++) {
        const rule = mappingRules[i].clone();
        let valid = true;
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
                // Insert it into the mappingRules for processing later
                mappingRules.splice(i+k, 0, newRule);
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
                  valid = false;
                  break;
                }
              }
            } else {
              if (rule.sourcePath[j].namespace || rule.sourcePath[j].name != 'Value') {
                logger.error('Cannot resolve data element definition from path: %s. ERROR_CODE:12032', this.highlightPartInPath(rule.sourcePath, j));
              }
              valid = false;
              break;
            }
          }
        }
        if (valid) {
          allRules.push(rule);
        }
      }

      // Now merge the rules
      const mergedRules = [];
      for (const rule of allRules) {
        const i = mergedRules.findIndex(item => {
          if (rule instanceof models.CardinalityMappingRule && item instanceof models.CardinalityMappingRule) {
            return rule.target == item.target;
          } else if (rule instanceof models.FixedValueMappingRule && item instanceof models.FixedValueMappingRule) {
            return rule.target == item.target;
          }
          return rule.sourcePath && item.sourcePath && this.equalSourcePaths(rule.sourcePath, item.sourcePath);
        });
        if (i >= 0) {
          mergedRules[i] = rule;
        } else {
          mergedRules.push(rule);
        }
      }

      const merged = map.clone();
      merged.targetItem = targetItem;
      merged.rules = mergedRules;
      this._expanded.maps.add(merged);
      return merged;
    } finally {
      logger.debug('Done expanding mapping');
      this.logger = lastLogger;
    }
  }

  findMatchInDataElement(de, idToMatch) {
    // Special case logic for TBD (just return the TBD)
    if (idToMatch instanceof models.TBD) {
      return idToMatch.clone();
    }
    // Special case logic for "Value"
    else if (!idToMatch.namespace && idToMatch.name == 'Value') {
      if (de.value instanceof models.IdentifiableValue) {
        return de.value.identifier;
      } else if (typeof de.value === 'undefined') {
        logger.error('Cannot map Value since element does not define a value. ERROR_CODE:12033');
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
        logger.error('Cannot map Value since it is unsupported type: %s. ERROR_CODE:12034', de.value.constructor.name);
      }
    // Special case logic for "Entry"
    } else if ((!idToMatch.namespace || idToMatch.namespace == 'shr.base') && idToMatch.name == 'Entry') {
      return new models.Identifier('shr.base', 'Entry');
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
      if (idToMatch.namespace && (value.identifier.equals(idToMatch)) || value.effectiveIdentifier.equals(idToMatch)) {
        return value.identifier.clone();
      } else if (!idToMatch.namespace && (value.identifier.name == idToMatch.name || value.effectiveIdentifier.name == idToMatch.name)) {
        return value.identifier.clone();
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

module.exports = { expand, setLogger };