class Namespace {
    constructor(namespace) {
        this._namespace = namespace;
        this._elements = [];
    }

    get namespace() { return this._namespace; }

    get elements() { return this._elements; }
    addElement(element) {
        this._elements.push(element)
    }
}

class DataElement {
    constructor(namespace, name) {
        this._namespace = namespace;
        this._name = name;
        this._answers = [];
    }

    get namespace() { return this._namespace; }
    get name() { return this._name; }
    get fqn() { return `${this._namespace}.${this._name}`}

    get description() { return this._description }
    set description(description) {
        assertNoOverwrite(this._description, this, 'description', description)
        this._description = description
    }

    get answers() { return this._answers }
    addAnswer(answer) {
        this._answers.push(answer)
    }
}

class Entry extends DataElement {
    constructor(namespace, name) {
        super(namespace, name);
    }
}

function assertNoOverwrite(property, object, propName, newValue) {
    if (typeof property !== 'undefined') {
        console.log(`WARNING: Overwriting ${object.fqn()}['${propName}']:\n\twas: ${property}\n\tnow: ${newValue}`)
    }
}

module.exports = {Namespace, DataElement, Entry};