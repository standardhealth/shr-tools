class Namespace {
  constructor(namespace) {
    this._namespace = namespace; // string
    this._sections = []; // Section[]
    this._definitionIdentifiers = []; // Identifier[] (keeping track in an array allows us to preserve order)
    this._definitionMap = {}; // obj[string]=DataElement|Group
  }

  get namespace() { return this._namespace; }

  get sections() { return this._sections; }
  addSection(section) {
    this._sections.push(section);
  }

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

class Section extends Identifiable {
  constructor(identifier) {
    super(identifier);
    this._entries = []; // QuantifiedValue[]
  }

  // an entry must be a QuantifiedValue referencing a DataElement or Group (no primitives)
  get entries() { return this._entries; }
  addEntry(quantifiedValue) {
    this._entries.push(quantifiedValue);
  }
}

class BaseElement extends Identifiable {
  constructor(identifier) {
    super(identifier);
    this._concepts = [];
    if (this.constructor === BaseElement) {
      throw new TypeError('Abstract class "BaseElement" cannot be instantiated directly.');
    }
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
}

class DataElement extends BaseElement {
  constructor(identifier) {
    super(identifier);
  }

  // a value might be a Value, subclass of Value, QuantifiedValue, or OrValues
  get value() { return this._value; }
  set value(value) {
    assertNoOverwrite(this._value, this, 'value', value);
    this._value = value;
  }
}

class Group extends BaseElement {
  constructor(identifier) {
    super(identifier);
    this._elements = []; // QuantifiedValue[]
  }

  // an element must be a QuantifiedValue referencing a DataElement or Group (no primitives)
  get elements() { return this._elements; }
  addElement(quantifiedValue) {
    this._elements.push(quantifiedValue);
  }
}

class Concept {
  constructor(codesystem, code) {
    this._codesystem = codesystem;
    this._code = code;
  }

  get codesystem() { return this._codesystem; }
  get code() { return this._code; }
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

// CodeValue assumes identifier PrimitiveIdentifier('code'), so it only takes a valueset
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

class OrValues {
  constructor() {
    this._values = []; // (Value|QuantifiedValue|OrValues)[]
  }

  get values() { return this._values; }
  addValue(value) {
    this._values.push(value);
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

module.exports = {Namespace, Section, DataElement, Group, Concept, Identifier, PrimitiveIdentifier, Value, CodeValue, RefValue, QuantifiedValue, OrValues, PRIMITIVE_NS, PRIMITIVES};