const models = require('../models');

function expand(namespaces) {
  const expander = new Expander(namespaces);
  return {
    namespaces: expander.expand(),
    errors: expander.errors
  };
}

class Dictionary {
  constructor() {
    this._namespaceIds = [];
    this._map = {};
  }

  registerNamespace(ns) {
    if (this._map[ns.namespace]) {
      // Already registered, so just register the individual elements
      for (const def of ns.definitions) {
        ns.addDefinition(def);
      }
    } else {
      this._namespaceIds.push(ns.namespace);
      this._map[ns.namespace] = ns;
    }
  }

  registerElement(el) {
    let ns = this._map[el.identifier.namespace];
    if (!ns) {
      ns = new models.Namespace(el.identifier.namespace);
      this.registerNamespace(ns);
    }
    ns.addDefinition(el);
  }

  get namespaces() {
    return this._namespaceIds.map(ns => this._map[ns]);
  }

  lookup(identifier) {
    const ns = this._map[identifier.namespace];
    if (typeof ns != 'undefined') {
      return ns.lookup(identifier.name);
    }
  }
}

class Expander {
  constructor(namespaces) {
    this._errors = [];
    this._unexpanded = new Dictionary();
    for (const ns of namespaces) {
      this._unexpanded.registerNamespace(ns);
    }
    this._expanded = new Dictionary();
  }

  get errors() { return this._errors; }

  expand() {
    for (const ns of this._unexpanded.namespaces) {
      for (const def of ns.definitions) {
        if (!this._expanded.lookup(def.identifier)) {
          this.expandElement(def);
        }
      }
    }
    return this._expanded.namespaces;
  }

  expandElement(element) {
    const elements = [];
    for (const baseID of element.basedOn) {
      const base = this.lookup(baseID);
      if (typeof base === 'undefined') {
        this._errors.push(`${element.identifier.fqn}: Reference to non-existing base: ${baseID.fqn}`);
        continue;
      }
      elements.push(base);
    }
    elements.push(element);

    var mergedValue;
    const mergedFields = [];
    for (const element of elements) {
      if (element.value) {
        if (mergedValue) {
          mergedValue = this.mergeValue(element, mergedValue, element.value);
        } else {
          mergedValue = element.value.clone();
        }
      }
      for (const field of element.fields) {
        const i = mergedFields.findIndex(item => {
          return item instanceof models.IdentifiableValue && item.identifier.equals(field.identifier);
        });
        if (i >= 0) {
          mergedFields[i] = this.mergeValue(element, mergedFields[i], field);
        } else {
          mergedFields.push(field.clone());
        }
      }
    }

    const expanded = element.clone();
    expanded.value = mergedValue;
    expanded.fields = mergedFields;
    this._expanded.registerElement(expanded);
    return expanded;
  }

  // mergeValue does a best attempt at merging the values, recording errors as it encounters them.  If the values
  // are completely incompatible, it will record an error and abandon the merge.  For less significant errors
  // (cardinalities that don't fit, etc), it will record the error, skip that part of the merge, and continue.
  mergeValue(element, oldValue, newValue) {
    const mergedValue = oldValue.clone();

    // Check that the class types match (or the new one is IncompleteValue).  An error abandons the merge.
    if (!(newValue instanceof models.IncompleteValue) && newValue.constructor.name != oldValue.constructor.name) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot override ${oldValue.toString()} with ${newValue.toString()}`));
      return;
    }

    // Check that the identifiers match.  An error abandons the merge.
    if (newValue instanceof models.IdentifiableValue) {
      if (!newValue.identifier.equals(oldValue.identifier)) {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot override ${oldValue.toString()} with ${newValue.toString()}`));
        return;
      }
    } else if (newValue instanceof models.ChoiceValue) {
      this._errors.push(`${element.identifier.fqn}: Cannot override ${oldValue.toString()} with ${newValue.toString()} since overriding ChoiceValue not supported.`);
      return;
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

  consolidateConstraints(element, value) {
    let consolidated = [];
    for (const constraint of value.constraints) {
      const targetLabel = [value.toString(), ...(constraint.path.map(p => p.name))].join('.');
      let target = value;
      if (constraint.path.length > 0) {
        const leafId = constraint.path[constraint.path.length - 1];
        if (leafId.isPrimitive) {
          // Special case to handle primitives in a consistent way
          target = new models.IdentifiableValue(leafId);
        } else {
          target = this._unexpanded.lookup(leafId);
        }
      }
      if (!target) {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot resolve target of constraint on ${targetLabel}`));
      } else if (constraint instanceof models.CardConstraint) {
        consolidated = this._consolidateCardConstraint(element, target, targetLabel, constraint, consolidated);
      } else if (constraint instanceof models.TypeConstraint) {
        consolidated = this._consolidateTypeConstraint(element, target, targetLabel, constraint, consolidated);
      } else if (constraint instanceof models.ValueSetConstraint) {
        consolidated = this._consolidateValueSetConstraint(element, target, targetLabel, constraint, consolidated);
      } else if (constraint instanceof models.CodeConstraint) {
        consolidated = this._consolidateCodeConstraint(element, target, targetLabel, constraint, consolidated);
      }
    }
    return consolidated;
  }

  _consolidateCardConstraint(element, target, targetLabel, constraint, previousConstraints) {
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

  _consolidateTypeConstraint(element, target, targetLabel, constraint, previousConstraints) {
    let constraints = previousConstraints;
    if (!(target instanceof models.IdentifiableValue)) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain type of ${targetLabel} since it has no identifier`));
      return constraints;
    } else if (!this.checkHasBaseType(constraint.isA, target.identifier)) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain type of ${targetLabel} to ${constraint.isA.toString()}`));
      return constraints;
    }
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).type.constraints;
    for (const previous of filtered) {
      if (!this.checkHasBaseType(constraint.isA, previous.isA)) {
        this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot further constrain type of ${target.toString()} from ${previous.isA.toString()} to ${constraint.isA.toString()}`));
        return constraints;
      }
      // Remove the previous type constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }
    constraints.push(constraint.clone());
    return constraints;
  }

  _consolidateValueSetConstraint(element, target, targetLabel, constraint, previousConstraints) {
    let constraints = previousConstraints;
    if (!(target instanceof models.IdentifiableValue)) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain valueset of ${targetLabel} since it has no identifier`));
      return constraints;
    } else if (!this.checkHasBaseType(target.identifier, new models.Identifier('shr.core', 'Coding')) && !this.checkHasBaseType(target.identifier, new models.Identifier('primitive', 'code'))) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain valueset of ${targetLabel} since it is not based on code or Coding`));
      return constraints;
    } else if ((new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).code.hasConstraints) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain valueset of ${targetLabel} since it is already constrained to a single code`));
      return constraints;
    }
    const filtered = (new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).valueSet.constraints;
    for (const previous of filtered) {
      // TODO: Technically we should verify that the new valueset is a subset of the old valueset (or that the old valueset allows extension)
     //  console.warn(`Warning: ${element.identifier.fqn}: Cannot verify proper valueset constraint on ${targetLabel}: ${previous.valueSet} further constrained to ${constraint.valueSet}`);
      // Remove the previous type constraint since this one supercedes it
      constraints = constraints.filter(cst => cst !== previous);
    }
    constraints.push(constraint.clone());
    return constraints;
  }

  _consolidateCodeConstraint(element, target, targetLabel, constraint, previousConstraints) {
    let constraints = previousConstraints;
    if (!(target instanceof models.IdentifiableValue)) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain code of ${targetLabel} since it has no identifier`));
      return constraints;
    } else if (!this.checkHasBaseType(target.identifier, new models.Identifier('shr.core', 'Coding')) && !this.checkHasBaseType(target.identifier, new models.Identifier('primitive', 'code'))) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain code of ${targetLabel} since it is not based on code or Coding`));
      return constraints;
    } else if ((new models.ConstraintsFilter(previousConstraints)).withPath(constraint.path).code.hasConstraints) {
      this._errors.push(new MergeError(`${element.identifier.fqn}: Cannot constrain code of ${targetLabel} since it is already constrained to a single code`));
      return constraints;
    }
    // There are no previous code constraints, so add this one
    constraints.push(constraint.clone());
    return constraints;
  }

  checkHasBaseType(identifier, baseIdentifier) {
    const basedOns = this.getRecursiveBasedOns(identifier);
    return basedOns.some(id => id.equals(baseIdentifier));
  }

  getRecursiveBasedOns(identifier, alreadyProcessed = []) {
    // If it's primitive or we've already processed this one, don't go further (avoid circular dependencies)
    if (identifier.isPrimitive || alreadyProcessed.some(id => id.equals(identifier))) {
      return alreadyProcessed;
    }

    // We haven't processed it, so look it up
    const element = this._unexpanded.lookup(identifier);
    if (!element) {
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
    let element = this._expanded.lookup(identifier);
    if (typeof element === 'undefined') {
      // We didn't find it, so look in the unexpanded elements, then expand it
      const unexpanded = this._unexpanded.lookup(identifier);
      if (unexpanded) {
        element = this.expandElement(unexpanded);
      }
    }
    return element;
  }
}

class MergeError extends Error {
  constructor(message = 'Merge error') {
    super(message);
    this.message = message;   // from Error
    this.name = 'MergeError'; // from Error
  }
}

module.exports = { expand, MergeError };