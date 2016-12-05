class Namespace {
  constructor(namespace) {
    this._namespace = namespace; // string
    this._definitionIdentifiers = []; // Identifier[] (keeping track in an array allows us to preserve order)
    this._definitionMap = {}; // obj[string]=DataElement|Group
  }

  get namespace() { return this._namespace; }

  // a definition might be a DataElement or a Group
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

class Identifiable {
  constructor(identifier) {
    if (this.constructor === Identifiable) {
      throw new TypeError('Abstract class "Identifiable" cannot be instantiated directly.');
    }

    this._identifier = identifier; // Identifier
  }

  get identifier() { return this._identifier; }
}

class DataElement extends Identifiable {
  constructor(identifier, isEntry=false) {
    super(identifier);
    this._isEntry = isEntry; // boolean
    this._basedOn = [];      // Identifier[]
    this._concepts = [];     // Concept[]
    this._elements = [];     // QuantifiedValue[]
  }

  // isEntry is a boolean flag indicating if this element is an entry
  get isEntry() { return this._isEntry; }
  set isEntry(isEntry) {
    this._isEntry = isEntry;
  }

  // basedOn is an array of identifiers that the data element is based on.  This means that it takes on the value
  // and elements of any data element it is based on, and can potentially override/constrain it.
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

  // Data elements should have a value, or a set of elements, or both a value and set of elements.  If a value exists,
  // it will always be a Field (usually with a cardinality: 1..1).
  get value() { return this._value; }
  set value(value) {
    assertNoOverwrite(this._value, this, 'value', value);
    this._value = value;
  }

  // Data elements should have a value, or a set of elements, or both a value and set of elements.  Each element in the
  // set of elements will be a Field and the Field.value must NOT be a primitive value.
  get elements() { return this._elements; }
  addElement(quantifiedValue) {
    this._elements.push(quantifiedValue);
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

  isPrimitive() {
    return this._namespace == PRIMITIVE_NS;
  }
}

class PrimitiveIdentifier extends Identifier {
  constructor(name) {
    super(PRIMITIVE_NS, name);
  }
}

class Value extends Identifiable {
  constructor(identifier) {
    super(identifier);
  }
}

// CodeValue assumes identifier PrimitiveIdentifier('code')
class CodeValue extends Value {
  constructor(valueset) {
    super(new PrimitiveIdentifier('code'));
    this._valueset = valueset; // string in url form
  }

  get valueset() { return this._valueset; }
}

class RefValue extends Value {
  constructor(identifier) {
    super(identifier);
  }
}

class ChoiceValue {
  constructor() {
    this._options = []; // QuantifiedValue[]
  }

  // Each option in the choice must be a QuantifiedValue
  get options() { return this._options; }
  addOption(option) {
    this._options.push(option);
  }
}

class QuantifiedValue {
  constructor(value, min, max) {
    this._value = value; // Value|OrValues
    this._min = min; // number
    this._max = max; // number|undefined
  }

  get value() { return this._value; }
  set value(value) {
    this._value = value;
  }
  get min() { return this._min; }
  get max() { return this._max; }

  isMaxUnbounded() {
    return typeof this._max === 'undefined' || this._max == null;
  }
}

class Field extends QuantifiedValue {
  constructor(value, min, max) {
    super(value, min, max);
    this._isConstrained = false;
  }

  // base is an Identifier that indicates the base data element this field came from.  If the field did not come from
  // a base data element, then the base value is undefined.
  get base() { return this._base; }
  set base(base) {
    this._base = base;
  }

  // indicates if the field came from a base (value is true) or is defined only by this data element (value is false)
  get isFromBase() { return this._base instanceof Identifier; }

  // indicates if this data element constrained the field from the base data element.  If the field was not defined in
  // a base data element (e.g., isFromBase is false), then isConstrained is false.
  get isConstrained() { return this._isConstraint; }
  set isConstrained(isConstrained) {
    this._isConstrained = isConstrained;
  }
}

const PRIMITIVE_NS = 'primitive';
const PRIMITIVES = ['boolean', 'integer', 'decimal', 'unsignedInt', 'positiveInt', 'string', 'markdown', 'code', 'id',
  'oid', 'uri', 'base64Binary', 'date', 'dateTime', 'instant', 'time'];

function assertNoOverwrite(property, element, propName, newValue) {
  if (typeof property !== 'undefined') {
    console.warn(`WARNING: Overwriting ${element.identifier.fqn}['${propName}']:\n\twas: ${property}\n\tnow: ${newValue}`);
  }
}

module.exports = {Namespace, DataElement, Concept, Identifier, PrimitiveIdentifier, Field, QuantifiedValue, Value, CodeValue, RefValue, ChoiceValue, PRIMITIVE_NS, PRIMITIVES};