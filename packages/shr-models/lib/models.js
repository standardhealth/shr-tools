class Specifications {
  constructor() {
    this._namespaces = new NamespaceSpecifications();
    this._dataElements = new DataElementSpecifications();
    /* For later
    this._valueSets = new ValueSetSpecifications();
    this._maps = new MapSpecifications();
    */
  }

  get namespaces() { return this._namespaces; }
  get dataElements() { return this._dataElements; }
  /* For later
  get valueSets() { return this._valueSets; }
  get maps() { return this._maps; }
  */
}

class NamespaceSpecifications {
  constructor() {
    this._nsMap = new Map();
  }

  add(namespace) {
    this._nsMap.set(namespace.namespace, namespace);
  }

  get all() { return Array.from(this._nsMap.values()); }

  find(namespace) {
    return this._nsMap.get(namespace);
  }
}

class DataElementSpecifications {
  constructor() {
    this._nsMap = new Map();
    this._grammarVersions = new Map();
  }

  get grammarVersions() { return Array.from(this._grammarVersions.values()); }
  get namespaces() { return Array.from(this._nsMap.keys()); }

  add(dataElement) {
    const id = dataElement.identifier;
    if (!this._nsMap.has(id.namespace)) {
      this._nsMap.set(id.namespace, new Map());
    }
    this._nsMap.get(id.namespace).set(id.name, dataElement);
    if (typeof dataElement.grammarVersion !== 'undefined') {
      this._grammarVersions.set(dataElement.grammarVersion.toString(), dataElement.grammarVersion);
    }
  }

  get all() {
    const all = [];
    for (const ns of this._nsMap.values()) {
      all.push(...ns.values());
    }
    return all;
  }

  get entries() {
    return this.all.filter(de => de.isEntry);
  }

  byNamespace(namespace) {
    if (this._nsMap.has(namespace)) {
      return Array.from(this._nsMap.get(namespace).values());
    }
    return [];
  }

  entriesByNamespace(namespace) {
    if (this._nsMap.has(namespace)) {
      return this.byNamespace(namespace).filter(de => de.isEntry);
    }
    return [];
  }

  find(namespace, name) {
    if (this._nsMap.has(namespace)) {
      return this._nsMap.get(namespace).get(name);
    }
  }

  findByIdentifier(identifier) {
    return this.find(identifier.namespace, identifier.name);
  }
}

/* For later
class ValueSetSpecifications {

}

class MapSpecifications {

}
*/

class Namespace {
  constructor(namespace, description) {
    this._namespace = namespace; // string
    this._description = description; // string
  }

  get namespace() { return this._namespace; }

  // a description is a string
  get description() { return this._description; }
  set description(description) {
    this._description = description;
  }
  // withDescription is a convenience function for chaining
  withDescription(description) {
    this.description = description;
    return this;
  }

  clone() {
    return new Namespace(this._namespace, this._description);
  }
}

class DataElement {
  constructor(identifier, isEntry=false) {
    this._identifier = identifier; // Identifier
    this._isEntry = isEntry; // boolean
    this._basedOn = [];      // Identifier[]
    this._concepts = [];     // Concept[]
    this._fields = [];       // Value[] (and its subclasses) -- excluding primitive values
    // also contains _value, _description, and _grammarVersion
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
  // withBasedOn is a convenience function for chaining
  withBasedOn(basedOn) {
    this.addBasedOn(basedOn);
    return this;
  }

  // concepts are an array of Concept
  get concepts() { return this._concepts; }
  set concepts(concepts) {
    this._concepts = concepts;
  }
  addConcept(concept) {
    this._concepts.push(concept);
  }
  // withConcept is a convenience function for chaining
  withConcept(concept) {
    this.addConcept(concept);
    return this;
  }

  // a description is a string
  get description() { return this._description; }
  set description(description) {
    this._description = description;
  }
  // withDescription is a convenience function for chaining
  withDescription(description) {
    this.description = description;
    return this;
  }

  // Data elements should have a value, or a set of fields, or both a value and set of fields.
  get value() { return this._value; }
  set value(value) {
    this._value = value;
  }
  // withValue is a convenience function for chaining
  withValue(value) {
    this.value = value;
    return this;
  }

  // Data elements should have a value, or a set of fields, or both a value and set of fields.
  // Fields cannot be primitive values.
  get fields() { return this._fields; }
  set fields(fields) {
    this._fields = fields;
  }
  addField(field) {
    this._fields.push(field);
  }
  // withField is a convenience function for chaining
  withField(field) {
    this.addField(field);
    return this;
  }

  // the Version of the grammar used to define this element
  get grammarVersion() { return this._grammarVersion; }
  set grammarVersion(grammarVersion) {
    this._grammarVersion = grammarVersion;
  }
  // withGrammarVersion is a convenience function for chaining
  withGrammarVersion(grammarVersion) {
    this.grammarVersion = grammarVersion;
    return this;
  }

  clone() {
    const clone = new DataElement(this._identifier.clone(), this._isEntry);
    if (this._description) {
      clone._description = this._description;
    }
    for (const basedOn of this._basedOn) {
      clone._basedOn.push(basedOn.clone());
    }
    for (const concept of this._concepts) {
      clone._concepts.push(concept.clone());
    }
    if (this._value) {
      clone._value = this._value.clone();
    }
    for (const field of this._fields) {
      clone._fields.push(field.clone());
    }
    if (this._grammarVersion) {
      clone._grammarVersion = this._grammarVersion;
    }
    return clone;
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

  clone() {
    return new Concept(this._system, this._code, this._display);
  }
}

class Identifier {
  constructor(namespace, name) {
    this._namespace = namespace; // string
    this._name = name; // string
  }

  get namespace() { return this._namespace; }
  get name() { return this._name; }
  get fqn() { return this.isPrimitive ? this._name : `${this._namespace}.${this._name}`; }

  get isPrimitive() {
    return this._namespace == PRIMITIVE_NS;
  }

  equals(other) {
    if (typeof other === 'undefined' || other == null || !(other instanceof Identifier)) {
      return false;
    }
    return this.name == other.name && this.namespace == other.namespace;
  }

  clone() {
    return new Identifier(this._namespace, this._name);
  }

  toString() {
    return this.fqn;
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

  fitsWithinCardinalityOf(other) {
    const minFits = other.min <= this.min;
    const maxFits = other.isMaxUnbounded || (!this.isMaxUnbounded && other.max >= this.max);
    return minFits && maxFits;
  }

  equals(other) {
    return this.min == other.min && this.max == other.max;
  }

  clone() {
    return new Cardinality(this._min, this._max);
  }

  toString() {
    return `${this.min}..${this.isMaxUnbounded ? '*' : this.max}`;
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

  _clonePropertiesTo(clone) {
    for (const p of this._path) {
      clone._path.push(p.clone());
    }
  }
}

// ValueSetConstraint only makes sense on a code or Coding type value
class ValueSetConstraint extends Constraint {
  constructor(valueSet, path) {
    super(path);
    this._valueSet = valueSet;
  }

  get valueSet() { return this._valueSet; }

  clone() {
    const clone = new ValueSetConstraint(this._valueSet);
    this._clonePropertiesTo(clone);
    return clone;
  }
}

// CodeConstraint only makes sense on a code or Coding type value
class CodeConstraint extends Constraint {
  constructor(code, path) {
    super(path);
    this._code = code;
  }

  get code() { return this._code; }

  clone() {
    const clone = new CodeConstraint(this._code.clone());
    this._clonePropertiesTo(clone);
    return clone;
  }
}

// IncludesCodeConstraint only makes sense on an array of code or Coding
class IncludesCodeConstraint extends Constraint {
  constructor(code, path) {
    super(path);
    this._code = code;
  }

  get code() { return this._code; }

  clone() {
    const clone = new IncludesCodeConstraint(this._code.clone());
    this._clonePropertiesTo(clone);
    return clone;
  }
}

// BooleanConstraint only makes sense on a boolean
class BooleanConstraint extends Constraint {
  constructor(value, path) {
    super(path);
    this._value = value;
  }

  get value() { return this._value; }

  clone() {
    const clone = new BooleanConstraint(this._value);
    this._clonePropertiesTo(clone);
    return clone;
  }
}

class TypeConstraint extends Constraint {
  constructor(isA, path, onValue = false) {
    super(path);
    this._isA = isA;
    this._onValue = onValue;
  }

  get isA() { return this._isA; }

  get onValue() { return this._onValue; }
  set onValue(onValue) {
    this._onValue = onValue;
  }
  // withOnValue is a convenience function for chaining
  withOnValue(onValue) {
    this.onValue = onValue;
    return this;
  }

  clone() {
    const clone = new TypeConstraint(this._isA.clone());
    clone.onValue = this._onValue;
    this._clonePropertiesTo(clone);
    return clone;
  }
}

class CardConstraint extends Constraint {
  constructor(card, path) {
    super(path);
    this._card = card;
  }

  get card() { return this._card; }

  clone() {
    const clone = new CardConstraint(this._card.clone());
    this._clonePropertiesTo(clone);
    return clone;
  }
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
      console.warn(`WARNING: Expecting single constraint but got ${this._constraints.length}. Using last constraint.`);
      return this._constraints[this._constraints.length-1];
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

  get includesCode() {
    return new ConstraintsFilter(this._constraints.filter(c => c instanceof IncludesCodeConstraint));
  }

  get boolean() {
    return new ConstraintsFilter(this._constraints.filter(c => c instanceof BooleanConstraint));
  }

  get type() {
    return new ConstraintsFilter(this._constraints.filter(c => c instanceof TypeConstraint));
  }

  get card() {
    return new ConstraintsFilter(this._constraints.filter(c => c instanceof CardConstraint));
  }

  withPath(path = []) {
    const matches = this._constraints.filter(c => {
      if (path.length != c.path.length) {
        return false;
      }
      for (let i=0; i < path.length; i++) {
        if (!path[i].equals(c.path[i])) {
          return false;
        }
      }
      return true;
    });
    return new ConstraintsFilter(matches);
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
  // withCard is a convenience function for chaining
  withCard(card) {
    this.card = card;
    return this;
  }
  // setMinMax is a convenience funcion for setting cardinality
  setMinMax(min, max) {
    this._card = new Cardinality(min, max);
  }
  // withMinMax is a convenience function for chaining
  withMinMax(min, max) {
    this.setMinMax(min, max);
    return this;
  }

  get effectiveCard() {
    const cardConstraints = this.constraintsFilter.own.card.constraints;
    if (cardConstraints.length > 0) {
      return cardConstraints[cardConstraints.length - 1].card;
    }
    return this.card;
  }

  get constraints() { return this._constraints; }
  set constraints(constraints) {
    this._constraints = constraints;
  }
  addConstraint(constraint) {
    this._constraints.push(constraint);
  }
  // withConstraint is a convenience function for chaining
  withConstraint(constraint) {
    this.addConstraint(constraint);
    return this;
  }
  get hasConstraints() {
    return this._constraints.length > 0;
  }
  get constraintsFilter() {
    return new ConstraintsFilter(this._constraints);
  }

  _clonePropertiesTo(clone) {
    if (this._card) {
      clone._card = this._card.clone();
    }
    for (const constraint of this._constraints) {
      clone._constraints.push(constraint.clone());
    }
  }
}

class IdentifiableValue extends Value {
  constructor(identifier) {
    super();
    this._identifier = identifier; // Identifier
  }

  get identifier() { return this._identifier; }

  get effectiveIdentifier() {
    const typeConstraints = this.constraintsFilter.own.type.constraints;
    if (typeConstraints.length > 0) {
      return typeConstraints[typeConstraints.length - 1].isA;
    }
    return this.identifier;
  }

  clone() {
    const clone = new IdentifiableValue(this._identifier);
    this._clonePropertiesTo(clone);
    return clone;
  }

  _clonePropertiesTo(clone) {
    super._clonePropertiesTo(clone);
    clone._identifier = this._identifier.clone();
  }

  toString() {
    return `IdentifiableValue<${this.identifier.fqn}>`;
  }
}

class RefValue extends IdentifiableValue {
  constructor(identifier) {
    super(identifier);
  }

  clone() {
    const clone = new RefValue();
    super._clonePropertiesTo(clone);
    return clone;
  }

  toString() {
    return `RefValue<${this.identifier.fqn}>`;
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
  // withOption is a convenience function for chaining
  withOption(option) {
    this.addOption(option);
    return this;
  }

  clone() {
    const clone = new ChoiceValue();
    super._clonePropertiesTo(clone);
    for (const option of this._options) {
      clone._options.push(option.clone());
    }
    return clone;
  }

  toString() {
    let str = 'ChoiceValue<';
    for (let i=0; i < this._options.length; i++) {
      str += this._options[i].toString();
      if ((i+1) < this._options.length) {
        str += '|';
      }
    }
    str += '>';
    return str;
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

  clone() {
    const clone = new IncompleteValue();
    super._clonePropertiesTo(clone);
    return clone;
  }

  toString() {
    return `IncompleteValue<${this.identifier.fqn}>`;
  }
}

class TBD extends Value{
  constructor(text) {
    super();
    this._text = text;
  }

  get text() { return this._text; }

  clone() {
    const clone = new TBD(this._text);
    super._clonePropertiesTo(clone);
    return clone;
  }

  toString() {
    return `TBD<${this._text}>`;
  }
}

class Version {
  constructor(major, minor = 0, patch = 0) {
    this._major = major;
    this._minor = minor;
    this._patch = patch;
  }

  get major() { return this._major; }
  get minor() { return this._minor; }
  get patch() { return this._patch; }

  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }
}

const VERSION = new Version(4, 0, 0);
const GRAMMAR_VERSION = new Version(4, 0, 0);
const PRIMITIVE_NS = 'primitive';
const PRIMITIVES = ['boolean', 'integer', 'decimal', 'unsignedInt', 'positiveInt', 'string', 'markdown', 'code', 'id',
  'oid', 'uri', 'base64Binary', 'date', 'dateTime', 'instant', 'time'];

module.exports = {Specifications, NamespaceSpecifications, DataElementSpecifications, Namespace, DataElement, Concept, Identifier, PrimitiveIdentifier, Value, IdentifiableValue, RefValue, ChoiceValue, IncompleteValue, TBD, ConstraintsFilter, Cardinality, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, CardConstraint, Version, PRIMITIVE_NS, PRIMITIVES, VERSION, GRAMMAR_VERSION};