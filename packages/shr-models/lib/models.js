class Namespace {
  constructor(namespace) {
    this._namespace = namespace; // string
    this._definitionIdentifiers = []; // Identifier[] (keeping track in an array allows us to preserve order)
    this._definitionMap = {}; // obj[string]=DataElement
  }

  get namespace() { return this._namespace; }

  get definitions() { return this._definitionIdentifiers.map(id => this._definitionMap[id]); }
  addDefinition(definition) {
    if (typeof this.lookup(definition.identifier.name) === 'undefined') {
      this._definitionIdentifiers.push(definition.identifier.name);
    }
    this._definitionMap[definition.identifier.name] = definition;
  }

  lookup(name) {
    return this._definitionMap[name];
  }
}

class DataElement {
  constructor(identifier, isEntry=false) {
    this._identifier = identifier; // Identifier
    this._isEntry = isEntry; // boolean
    this._basedOn = [];      // Identifier[]
    this._concepts = [];     // Concept[]
    this._fields = [];       // Value[] (and its subclasses) -- excluding primitive values
    // also contains _value and _description
  }

  // identifier is the unique Identifier (namespace+name) for the DataElement
  get identifier() { return this._identifier; }

  // isEntry is a boolean flag indicating if this element is an entry
  get isEntry() { return this._isEntry; }
  set isEntry(isEntry) {
    this._isEntry = isEntry;
  }

  // basedOn is an array of identifiers that the data element is based on.  This means that it takes on the value
  // and fields of any data element it is based on, and can potentially override/constrain it.
  get basedOn() { return this._basedOn; }
  addBasedOn(basedOn) {
    this._basedOn.push(basedOn);
  }

  // concepts are an array of Concept
  get concepts() { return this._concepts; }
  set concepts(concepts) {
    this._concepts = concepts;
  }
  addConcept(concept) {
    this._concepts.push(concept);
  }

  // a description is a string
  get description() { return this._description; }
  set description(description) {
    assertNoOverwrite(this._description, this, 'description', description);
    this._description = description;
  }

  // Data elements should have a value, or a set of fields, or both a value and set of fields.
  get value() { return this._value; }
  set value(value) {
    assertNoOverwrite(this._value, this, 'value', value);
    this._value = value;
  }

  // Data elements should have a value, or a set of fields, or both a value and set of fields.
  // Fields cannot be primitive values.
  get fields() { return this._fields; }

  // addField contains special logic to handle IncompleteValues.  If an IncompleteValue matches an already existing
  // field, it will just apply the constraints to that field.  If no matching field is found, it will be pushed
  // to the fields as-is -- and when fields are added after, they will be checked against any IncompleteValues
  // and resolved as appropriate.  Note that constraints on the Value can also be added by passing an IncompleteValue
  // matching the value's identifier to this function.
  addField(field) {
    if (field instanceof IncompleteValue) {
      // Search through the value and fields to see if this matches an already existing value or field
      for (const el of [this.value, ...this._fields]) {
        if (el && el.identifier && el.identifier.equals(field.identifier)) {
          // Found a match!  Just add the constraints to the existing one!
          for (const cst of field.constraints) {
            el.addConstraint(cst);
          }
          return;
        }
      }
    }

    // Search through the fields to see if there are any IncompleteValues we can now resolve
    for (let i=0; i < this._fields.length; i++) {
      const el = this._fields[i];
      if (el instanceof IncompleteValue && field.identifier && el.identifier.equals(field.identifier)) {
        // Found a match!  Add the constraints to the field and replace the IncompleteValue
        for (const cst of el.constraints) {
          field.addConstraint(cst);
        }
        this._fields[i] = field;
        return;
      }
    }

    // If we got this far, it's just a normal add (no interplay with IncompleteValues)
    this._fields.push(field);
  }
}

class Concept {
  constructor(system, code, display) {
    this._system = system;
    this._code = code;
    this._display = display;
  }

  get system() { return this._system; }
  get code() { return this._code; }
  get display() { return this._display; }
  set display(display) {
    this._display = display;
  }
}

class Identifier {
  constructor(namespace, name) {
    this._namespace = namespace; // string
    this._name = name; // string
  }

  get namespace() { return this._namespace; }
  get name() { return this._name; }
  get fqn() { return this.isPrimitive() ? this._name : `${this._namespace}.${this._name}`; }

  get isPrimitive() {
    return this._namespace == PRIMITIVE_NS;
  }

  equals(other) {
    if (typeof other === 'undefined' || other == null || !(other instanceof Identifier)) {
      return false;
    }
    return this.name == other.name && this.namespace == other.namespace;
  }
}

class PrimitiveIdentifier extends Identifier {
  constructor(name) {
    super(PRIMITIVE_NS, name);
  }
}

class Cardinality {
  constructor(min, max) {
    this._min = min; // number
    this._max = max; // number|undefined
  }

  get min() { return this._min; }
  get max() { return this._max; }
  get isMaxUnbounded() {
    return typeof this._max === 'undefined' || this._max == null;
  }
  get isExactlyOne() {
    return this._min == 1 && this._max == 1;
  }
  get isZeroOrOne() {
    return this._min == 0 && this._max == 1;
  }
  get isZeroedOut() {
    return this._min == 0 && this._max == 0;
  }
  get isList() {
    return this._max > 1 || this.isMaxUnbounded;
  }
}

class Constraint {
  constructor(path = []) {
    this._path = path;
  }

  get path() { return this._path; }
  hasPath() {
    return this._path.length > 0;
  }
}

// ValueSetConstraint only makes sense on a code or Coding type value
class ValueSetConstraint extends Constraint {
  constructor(valueSet, path) {
    super(path);
    this._valueSet = valueSet;
  }

  get valueSet() { return this._valueSet; }
}

// CodeConstraint only makes sense on a code or Coding type value
class CodeConstraint extends Constraint {
  constructor(code, path) {
    super(path);
    this._code = code;
  }

  get code() { return this._code; }
}

class TypeConstraint extends Constraint {
  constructor(isA, path) {
    super(path);
    this._isA = isA;
  }

  get isA() { return this._isA; }
}

class ChildCardConstraint extends Constraint {
  constructor(card, path) {
    super(path);
    this._card = card;
  }

  get card() { return this._card; }
}

class ConstraintsFilter {
  constructor(constraints = []) {
    this._constraints = constraints;
  }

  get constraints() { return this._constraints; }
  get hasConstraints() { return this._constraints.length > 0; }

  get single() {
    if (this._constraints.length == 1) {
      return this._constraints[0];
    } else if (this._constraints.length > 1) {
      console.warn(`WARNING: Expecting single constraint but got ${this._constraints.length}`);
    }
  }

  get own() {
    return new ConstraintsFilter(this._constraints.filter(c => c.path.length == 0));
  }

  get child() {
    return new ConstraintsFilter(this._constraints.filter(c => c.path.length > 0));
  }

  get valueSet() {
    return new ConstraintsFilter(this._constraints.filter(c => c instanceof ValueSetConstraint));
  }

  get code() {
    return new ConstraintsFilter(this._constraints.filter(c => c instanceof CodeConstraint));
  }

  get type() {
    return new ConstraintsFilter(this._constraints.filter(c => c instanceof TypeConstraint));
  }

  get card() {
    return new ConstraintsFilter(this._constraints.filter(c => c instanceof ChildCardConstraint));
  }
}

class Value {
  constructor() {
    this._constraints = [];
  }

  // card is the Cardinality for the value.
  get card() { return this._card; }
  set card(card) {
    this._card = card;
  }
  // setMinMax is a convenience funcion for setting cardinality
  setMinMax(min, max) {
    this._card = new Cardinality(min, max);
  }

  get constraints() { return this._constraints; }
  addConstraint(constraint) {
    this._constraints.push(constraint);
  }
  get hasConstraints() {
    return this._constraints.length > 0;
  }

  get constraintsFilter() {
    return new ConstraintsFilter(this._constraints);
  }
}

class IdentifiableValue extends Value {
  constructor(identifier) {
    super();
    this._identifier = identifier; // Identifier
  }

  get identifier() { return this._identifier; }
}

class RefValue extends IdentifiableValue {
  constructor(identifier) {
    super(identifier);
  }
}

class ChoiceValue extends Value {
  constructor() {
    super();
    this._options = []; // Value[]
  }

  // Each option in the choice must be a subclass of Value
  get options() { return this._options; }
  addOption(option) {
    this._options.push(option);
  }
}

// IncompleteValue provides a place to put constraints when the full definition of the thing being constrained is
// not yet known.  This can happen when putting a constraint on something from a "BasedOn" data element, or when a
// constraint is applied without knowing the full context of the current data element (in the case of the importer).
// If a data element is fully resolved, it should never contain an IncompleteValue.
class IncompleteValue extends IdentifiableValue {
  constructor(identifier) {
    super(identifier);
  }
}

class TBD {
  constructor(text) {
    this._text = text;
  }

  get text() { return this._text; }
}

const PRIMITIVE_NS = 'primitive';
const PRIMITIVES = ['boolean', 'integer', 'decimal', 'unsignedInt', 'positiveInt', 'string', 'markdown', 'code', 'id',
  'oid', 'uri', 'base64Binary', 'date', 'dateTime', 'instant', 'time'];

function assertNoOverwrite(property, element, propName, newValue) {
  if (typeof property !== 'undefined') {
    console.warn(`WARNING: Overwriting ${element.identifier.fqn}['${propName}']:\n\twas: ${property}\n\tnow: ${newValue}`);
  }
}

module.exports = {Namespace, DataElement, Concept, Identifier, PrimitiveIdentifier, Value, IdentifiableValue, RefValue, ChoiceValue, IncompleteValue, TBD, Cardinality, ValueSetConstraint, CodeConstraint, TypeConstraint, ChildCardConstraint, PRIMITIVE_NS, PRIMITIVES};