const models = require('shr-models');

function expand(specifications) {
  const expander = new Expander(specifications);
  return {
    specifications: expander.expand(),
    errors: expander.errors
  };
}

const CODE = new models.PrimitiveIdentifier('code');
const BOOLEAN = new models.PrimitiveIdentifier('boolean');

class Expander {
  constructor(specs) {
    this._errors = [];
    this._unexpanded = specs;
    this._expanded = new models.Specifications();
  }

  get errors() { return this._errors; }

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
        this._errors.push(`${m.identifier.fqn}: Cannot find definition for ${m.identifier.fqn}.`);
      }
    }
    return this._expanded;
  }

  expandElement(element) {
    const hierarchy = [];
    for (const baseID of element.basedOn) {
      if (baseID instanceof models.TBD) {
        continue;
      }
      const base = this.lookup(baseID);
      if (typeof base === 'undefined') {
        this._errors.push(`${element.identifier.fqn}: Reference to non-existing base: ${baseID.fqn}`);
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
            this._errors.push(`${element.identifier.fqn}: No cardinality found for value: ${mergedValue.toString()}`);
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
            this._errors.push(`${element.identifier.fqn}: No cardinality found for field: ${f.toString()}`);
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
  }

  // mergeValue does a best attempt at merging the values, recording errors as it encounters them.  If the values
  // are completely incompatible, it will record an error and abandon the merge.  For less significant errors
  // (cardinalities that don't fit, etc), it will record the error, skip that part of the merge, and continue.
  mergeValue(element, oldValue, newValue) {
    let mergedValue = oldValue.clone();

    // Check that the class types match (except when new one is IncompleteValue or old one is a choice).  An error abandons the merge.
    if (!(newValue instanceof models.IncompleteValue) && !(oldValue instanceof models.ChoiceValue) && newValue.constructor.name != oldValue.constructor.name) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot override ${oldValue.toString()} with ${newValue.toString()}`));
      return mergedValue;
    }

    // Check that the identifiers match.  An error abandons the merge.
    if (newValue instanceof models.IdentifiableValue) {
      if (oldValue instanceof models.ChoiceValue) {
        // The newValue must be one of the choices
        const match = this.findMatchingOption(oldValue, newValue);
        if (!match) {
          this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot override ${oldValue.toString()} with ${newValue.toString()} since it is not one of the options`));
          return mergedValue;
        }
        mergedValue = match.clone(); // TODO: Should this take on the choice's cardinality?
      } else if (!newValue.identifier.equals(oldValue.identifier) && !newValue.identifier.equals(oldValue.effectiveIdentifier)) {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot override ${oldValue.toString()} with ${newValue.toString()}`));
        return mergedValue;
      }
    } else if (newValue instanceof models.ChoiceValue) {
      this._errors.push(`${element.identifier.fqn}: Cannot override ${oldValue.toString()} with ${newValue.toString()} since overriding ChoiceValue not supported.`);
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
      } else if (constraint instanceof models.ValueSetConstraint) {
        consolidateFn = this.consolidateValueSetConstraint;
      } else if (constraint instanceof models.CodeConstraint) {
        consolidateFn = this.consolidateCodeConstraint;
      } else if (constraint instanceof models.IncludesCodeConstraint) {
        consolidateFn = this.consolidateIncludesCodeConstraint;
      } else if (constraint instanceof models.BooleanConstraint) {
        consolidateFn = this.consolidateBooleanConstraint;
      } else {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Unsupported constraint type: ${constraint.constructor.name}`));
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
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain cardinality of ${targetLabel} from ${target.card.toString()} to ${constraint.card.toString()}`));
      return constraints;
    }
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).card.constraints;
    for (const previous of filtered) {
      if (!constraint.card.fitsWithinCardinalityOf(previous.card)) {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot further constrain cardinality of ${targetLabel} from ${previous.card.toString()} to ${constraint.card.toString()}`));
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
          this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain type of ${targetLabel} to ${constraint.isA.toString()}`));
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
          this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot resolve target of value type constraint on ${targetLabel}`));
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
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain type of ${targetLabel} since it has no identifier`));
      return constraints;
    } else if (!this.checkHasBaseType(constraint.isA, target.identifier)) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain type of ${targetLabel} to ${constraint.isA.toString()}`));
      return constraints;
    }
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).type.constraints;
    for (const previous of filtered) {
      if (constraint.onValue != previous.onValue) {
        continue;
      }
      if (!this.checkHasBaseType(constraint.isA, previous.isA)) {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot further constrain type of ${target.toString()} from ${previous.isA.toString()} to ${constraint.isA.toString()}`));
        return constraints;
      }
      // Remove the previous type constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }
    constraints.push(constraint);
    return constraints;
  }

  consolidateValueSetConstraint(element, value, constraint, previousConstraints) {
    const target = this.constraintTarget(value, constraint.path);
    const targetLabel = this.constraintTargetLabel(value, constraint.path);

    let constraints = previousConstraints;
    if (!(target instanceof models.IdentifiableValue)) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain valueset of ${targetLabel} since it has no identifier`));
      return constraints;
    } else if (!this.supportsCodeConstraint(target.identifier)) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain valueset of ${targetLabel} since it is not based on code, Coding, or CodeableConcept`));
      return constraints;
    } else if ((new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).code.hasConstraints) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain valueset of ${targetLabel} since it is already constrained to a single code`));
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

    // Determine if the constraint is on the specific target or its value
    if (!this.supportsCodeConstraint(target.identifier)) {
      // Isn't directly a code/Coding/CodeableConcept, so try its value
      const valID = this.constraintTargetValueIdentifier(value, constraint.path);
      if (!this.supportsCodeConstraint(valID)) {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain code of ${targetLabel} since neither it nor its value is a code, based on a Coding, or based on CodeableConcept`));
        return previousConstraints;
      }
      // Constraint is on the target's value.  Convert constraint to reference the value explicitly.
      constraint.path.push(valID);
      target = this.constraintTarget(value, constraint.path);
      targetLabel = this.constraintTargetLabel(value, constraint.path);
    }

    // TODO: If system is blank, figure it out based on allowed value set

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

    // Determine if the constraint is on the specific target or its value
    if (!this.supportsCodeConstraint(target.identifier)) {
      // Isn't directly a code/Coding/CodeableConcept, so try its value
      const valID = this.constraintTargetValueIdentifier(value, constraint.path);
      if (!this.supportsCodeConstraint(valID)) {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain included code of ${targetLabel} since neither it nor its value is a code, based on a Coding, or based on CodeableConcept`));
        return previousConstraints;
      }
      // Constraint is on the target's value.  Convert constraint to reference the value explicitly.
      constraint.path.push(valID);
      target = this.constraintTarget(value, constraint.path);
      targetLabel = this.constraintTargetLabel(value, constraint.path);
    }

    // TODO: If system is blank, figure it out based on allowed value set

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

  consolidateBooleanConstraint(element, value, constraint, previousConstraints) {
    constraint = constraint.clone();
    let target = this.constraintTarget(value, constraint.path);
    let targetLabel = this.constraintTargetLabel(value, constraint.path);

    // Determine if the constraint is on the specific target or its value
    if (!this.supportsBooleanConstraint(target.identifier)) {
      // Isn't directly a boolean, so try its value
      const valID = this.constraintTargetValueIdentifier(value, constraint.path);
      if (!this.supportsBooleanConstraint(valID)) {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain boolean value of ${targetLabel} since neither it nor its value is a boolean`));
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
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain boolean value of ${targetLabel} to ${constraint.value} since a previous constraint constrains it to ${previous.value}`));
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
    if (typeof targetValue !== 'undefined') {
      // If target value is a choice, but all the options are the same identifier, return that identifier.
      if (targetValue instanceof models.ChoiceValue) {
        const identifier = targetValue.options[0].identifier;
        if (typeof identifier !== 'undefined') {
          for (const option of targetValue.options) {
            if (!identifier.equals(option.identifier)) {
              // Mismatched identifiers in choice, so just return (undefined)
              return;
            }
          }
          return identifier;
        }
      }
      return targetValue.identifier;
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
      this._errors.push(new MergeError(`Couldn't find definition for ${identifier.fqn}`));
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
    let map = this._unexpanded.maps.findByTargetAndIdentifier(target, identifier);

    const de = this._expanded.dataElements.findByIdentifier(identifier);
    if (typeof de === 'undefined') {
      this._errors.push(new MappingError(`${identifier.fqn}: Cannot find data element definition`));
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
        } else if (targetItem != base.targetItem) {
          this._errors.push(new MappingWarning(`${map.identifier.fqn}: maps to ${targetItem}, but based on class ${base.identifier.fqn} maps to ${base.targetItem}`));
        }
        // Push the rules onto our list, but clone them first (just for safety)
        allRules.push(...(base.rules.map(r => r.clone())));
      }
    }

    // If we still don't have a target item, bail
    if (typeof targetItem === 'undefined') {
      this._errors.push(new MappingError(`${map.identifier.fqn}: Cannot determine target item`));
      return;
    }

    // Go through this mappings rules, resolve the identifiers, and add them to the big rules list
    for (const mappingRule of map.rules) {
      const rule = mappingRule.clone();
      let valid = true;
      if (rule instanceof models.FieldMappingRule) {
        let currentDE = de;
        for (let i=0; i < rule.sourcePath.length; i++) {
          const match = this.findMatchInDataElement(currentDE, rule.sourcePath[i]);
          if (match) {
            rule.sourcePath[i] = match;
            if (i < (rule.sourcePath.length-1) && !(match instanceof models.TBD)) {
              currentDE = this._expanded.dataElements.findByIdentifier(match);
              if (typeof de === 'undefined') {
                this._errors.push(new MappingError(`${de.identifier.fqn}: Cannot find data element definition from path: ${this.highlightPartInPath(rule.sourcePath, i)}`));
                valid = false;
                break;
              }
            }
          } else {
            if (rule.sourcePath[i].namespace || rule.sourcePath[i].name != 'Value') {
              this._errors.push(new MappingError(`${de.identifier.fqn}: Cannot resolve element from path: ${this.highlightPartInPath(rule.sourcePath, i)}`));
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
          return rule.target ==item.target;
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
  }

  findMatchInDataElement(de, idToMatch) {
    let result;
    // Special case logic for TBD (just return the TBD)
    if (idToMatch instanceof models.TBD) {
      return idToMatch.clone();
    }
    // Special case logic for "Value"
    else if (!idToMatch.namespace && idToMatch.name == 'Value') {
      if (de.value instanceof models.IdentifiableValue) {
        result = de.value.identifier;
      } else if (typeof de.value === 'undefined') {
        this._errors.push(new MappingError(`${de.identifier.fqn}: maps Value but value is undefined`));
      } else {
        this._errors.push(new MappingError(`${de.identifier.fqn}: maps Value but value is unsupported type: ${de.value.constructor.name}`));
      }
    // Special case logic for "Entry"
    } else if ((!idToMatch.namespace || idToMatch.namespace == 'shr.base') && idToMatch.name == 'Entry') {
      return new models.Identifier('shr.base', 'Entry');
    } else {
      for (const value of [de.value, ...de.fields]) {
        if (value) {
          const match = this.findMatchInValue(value, idToMatch);
          if (match && result) {
            this._errors.push(new MappingError(`${de.identifier.fqn}: Found multiple matches for field ${idToMatch.name}`));
          } else if (match) {
            result = match;
          }
        }
      }
    }
    return result;
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

class MergeError extends Error {
  constructor(message = 'Merge error') {
    super(message);
    this.message = message;   // from Error
    this.name = 'MergeError'; // from Error
  }
}

class MappingError extends Error {
  constructor(message = 'Mapping error') {
    super(message);
    this.message = message;   // from Error
    this.name = 'MappingError'; // from Error
  }
}

class MappingWarning extends Error {
  constructor(message = 'Mapping warning') {
    super(message);
    this.message = message;   // from Error
    this.name = 'MappingWarning'; // from Error
  }
}

module.exports = { expand, MergeError };