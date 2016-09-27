class Namespace {
    constructor(namespace) {
        this._namespace = namespace; // string
        this._elementMap = {}; // obj[string]=DataElement|Entry
    }

    get namespace() { return this._namespace; }

    get elements() { return Object.keys(this._elementMap).map(key => this._elementMap[key]); }
    addElement(element) {
        this._elementMap[element.identifier.name] = element
    }
}

class DataElement {
    constructor(identifier) {
        this._identifier = identifier; // Identifier
        this._answers = []; // Identifier[]
        this._components = []; // QuantifiedIdentifier[]
    }

    get identifier() { return this._identifier; }

    get description() { return this._description }
    set description(description) {
        assertNoOverwrite(this._description, this, 'description', description)
        this._description = description
    }

    get answers() { return this._answers }
    addAnswer(identifier) {
        // TODO: enforce that this must be an Identifier?
        this._answers.push(identifier)
    }

    get valueset() { return this._valueset }
    set valueset(valueset) {
        assertNoOverwrite(this._valueset, this, 'valueset', valueset)
        this._valueset = valueset
    }

    get components() { return this._components }
    addComponent(quantifiedIdentifier) {
        // TODO: enforce that this must be a QuantifiedIdentifier?
        this._components.push(quantifiedIdentifier)
    }
}

class Entry extends DataElement {
    constructor(namespace, name) {
        super(namespace, name);
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
        return this._namespace == PRIMITIVE_NS
    }
}

class PrimitiveIdentifier extends Identifier {
    constructor(name) {
        super(PRIMITIVE_NS, name)
    }
}

class QuantifiedIdentifier extends Identifier {
    constructor(identifier, min, max) {
        super(identifier.namespace, identifier.name);
        this._min = min; // number
        this._max = max; // number|undefined
    }

    get min() { return this._min }
    get max() { return this._max }

    isMaxUnbounded() {
        return typeof this._max === 'undefined' || this._max == null;
    }
}

const PRIMITIVE_NS = "primitive";
const PRIMITIVES = ["boolean", "integer", "decimal", "unsignedInt", "positiveInt", "string", "markdown", "code", "id",
                    "oid", "uri", "base64Binary", "date", "dateTime", "instant", "time"]

function assertNoOverwrite(property, element, propName, newValue) {
    if (typeof property !== 'undefined') {
        console.log(`WARNING: Overwriting ${element.fqn()}['${propName}']:\n\twas: ${property}\n\tnow: ${newValue}`)
    }
}

module.exports = {Namespace, DataElement, Entry, Identifier, PrimitiveIdentifier, QuantifiedIdentifier, PRIMITIVE_NS, PRIMITIVES};