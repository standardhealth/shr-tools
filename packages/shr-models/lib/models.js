/**
 * An object that contains module information. Used to detect multiple versions of shr-models in a single environment.
 *
 * @type {{filename: string, id: string}}
 */
const MODELS_INFO = Object.seal({
  filename: module.filename,
  id: module.id
});

/**
 * A sanity check of modules to ensure that they are all using the same version of shr-models. The selected modules
 * must re-export shr-models' {@linkcode MODELS_INFO} object.
 * <pre>
 * An invocation would typically look like this:
 * const { sanityCheckModules } = require('shr-models');
 * const shrTI = require('shr-text-import');
 * const shrEx = require('shr-expand');
 * ...
 * sanityCheckModules({shrTI, shrEx })
 * </pre>
 *
 * @param {Object.<string, Object>} modelInfoMap - A mapping of module names to the modules that import shr-models.
 * @throws {Error} if there is an inconsistency in the provided modules.
 */
function sanityCheckModules(modelInfoMap) {
  if (Object.keys(modelInfoMap).some((key) => !modelInfoMap[key].MODELS_INFO || (modelInfoMap[key].MODELS_INFO !== MODELS_INFO))) {
    const error = [];
    error.push('Multiple versions of shr-models were detected');
    error.push('shr-models: ' + JSON.stringify(MODELS_INFO, null, 2));
    for (const modName in modelInfoMap) {
      error.push(`${modName}: ${JSON.stringify(modelInfoMap[modName].MODELS_INFO, null, 2)}`);
    }

    throw new Error(error.join('\n'));
  }
}

function clearEmptyFields(object, iteratively = false) {
  Object.keys(object).forEach((key) => {
    if (object[key] == null) delete object[key]; else
      if (Array.isArray(object[key]) && object[key].length == 0) delete object[key]; else
      if (object[key] instanceof Object) {
        if (Object.keys(object[key]).length && iteratively) clearEmptyFields(object[key], true);
        if (!Object.keys(object[key]).length) delete object[key];
      }
  });
}

class Specifications {

  constructor() {
    this._namespaces = new NamespaceSpecifications();
    this._dataElements = new DataElementSpecifications();
    this._valueSets = new ValueSetSpecifications();
    this._codeSystems = new CodeSystemSpecifications();
    this._maps = new MapSpecifications();
  }

  get namespaces() { return this._namespaces; }
  get dataElements() { return this._dataElements; }
  get valueSets() { return this._valueSets; }
  get codeSystems() { return this._codeSystems; }
  get maps() { return this._maps; }

  /**
   * Exports Specifications to CIMPL5
   *
   * @param {string} filepath - the output destination for the export.
   */
  toCIMPL5(filePath) {
    const {Cimpl5Exporter} = require('./export/cimpl5Exporter');
    const cimplExporter = new Cimpl5Exporter(this);
    cimplExporter.exportToPath(filePath);
  }

  toCIMPL6(filePath) {
    const {Cimpl6Exporter} = require('./export/cimpl6Exporter');
    const cimplExporter = new Cimpl6Exporter(this);
    cimplExporter.exportToPath(filePath);
  }
}

class NamespaceSpecifications {

  constructor() {
    this._nsMap = new Map();
  }

  add(namespace) {
  //  console.log("Adding namespace = "+JSON.stringify(namespace));   
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
    this._fileMap = new Map();
    this._grammarVersions = new Map();
  }

  get grammarVersions() { return Array.from(this._grammarVersions.values()); }
  get namespaces() { return Array.from(this._nsMap.keys()); }
  get files() { return Array.from(this._fileMap.keys()); }

  add(dataElement, file) {
  //console.log("Adding data element = "+JSON.stringify(dataElement));  
    const id = dataElement.identifier;
    if (!this._nsMap.has(id.namespace)) {
      this._nsMap.set(id.namespace, new Map());
    }
    this._nsMap.get(id.namespace).set(id.name, dataElement);
    if (!this._fileMap.has(file)) {
      this._fileMap.set(file, []);
    }
    this._fileMap.get(file).push(dataElement);
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

  byFile(file) {
    if (this._fileMap.has(file)) {
      return this._fileMap.get(file);
    }
    return [];
  }

  find(namespace, name) {
    // Special case logic for the _Entry and _Concept keywords
    if (namespace === '') {
      const id = new Identifier(namespace, name);
      if (id.isEntryKeyWord) {
        [namespace, name] = ['shr.base', 'Entry'];
      } else if (id.isConceptKeyWord) {
        [namespace, name] = ['shr.core', 'CodeableConcept'];
      }
    }
    if (this._nsMap.has(namespace)) {
      return this._nsMap.get(namespace).get(name);
    }
  }

  findByIdentifier(identifier) {
    if (identifier) {
      return this.find(identifier.namespace, identifier.name);
    }
  }
}

class ValueSetSpecifications {

  constructor() {
    this._nsMap = new Map();
    this._urlMap = new Map();
    this._grammarVersions = new Map();
  }

  get namespaces() { return Array.from(this._nsMap.keys()); }
  get urls() { return Array.from(this._urlMap.keys()); }
  get grammarVersions() { return Array.from(this._grammarVersions.values()); }

  add(valueSet) {
  //  console.log("Adding valueSet = "+JSON.stringify(valueSet));  
    const id = valueSet.identifier;
    if (!this._nsMap.has(id.namespace)) {
      this._nsMap.set(id.namespace, new Map());
    }
    this._nsMap.get(id.namespace).set(id.name, valueSet);
    this._urlMap.set(valueSet.url, valueSet);
    if (typeof valueSet.grammarVersion !== 'undefined') {
      this._grammarVersions.set(valueSet.grammarVersion.toString(), valueSet.grammarVersion);
    }
  }

  get all() {
    return Array.from(this._urlMap.values());
  }

  byNamespace(namespace) {
    if (this._nsMap.has(namespace)) {
      return Array.from(this._nsMap.get(namespace).values());
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

  findByURL(url) {
    return this._urlMap.get(url);
  }
}

class CodeSystemSpecifications {

  constructor() {
    this._nsMap = new Map();
    this._urlMap = new Map();
    this._grammarVersions = new Map();
  }

  get namespaces() { return Array.from(this._nsMap.keys()); }
  get urls() { return Array.from(this._urlMap.keys()); }
  get grammarVersions() { return Array.from(this._grammarVersions.values()); }

  add(codeSystem) {
  //  console.log("Adding codeSystem = "+JSON.stringify(codeSystem));   
    const id = codeSystem.identifier;
    if (!this._nsMap.has(id.namespace)) {
      this._nsMap.set(id.namespace, new Map());
    }
    this._nsMap.get(id.namespace).set(id.name, codeSystem);
    this._urlMap.set(codeSystem.url, codeSystem);
    if (typeof codeSystem.grammarVersion !== 'undefined') {
      this._grammarVersions.set(codeSystem.grammarVersion.toString(), codeSystem.grammarVersion);
    }
  }

  get all() {
    return Array.from(this._urlMap.values());
  }

  byNamespace(namespace) {
    if (this._nsMap.has(namespace)) {
      return Array.from(this._nsMap.get(namespace).values());
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

  findByURL(url) {
    return this._urlMap.get(url);
  }
}

class MapSpecifications {

  constructor() {
    this._targetMap = new Map();
    this._grammarVersions = new Map();
  }

  get grammarVersions() {
    const gMap = new Map();
    for (const target of this._targetMap.values()) {
      for (const version of target.grammarVersions) {
        gMap.set(version.toString(), version);
      }
    }
    return Array.from(gMap.values());
  }
  get targets() { return Array.from(this._targetMap.keys()); }

  getTargetMapSpecifications(target) {
    return this._targetMap.get(target);
  }

  add(mapping) {
    const target = mapping.targetSpec;
    if (!this._targetMap.has(target)) {
      this._targetMap.set(target, new TargetMapSpecifications(target));
    }
    this._targetMap.get(target).add(mapping);
  }

  byTarget(target) {
    if (this._targetMap.has(target)) {
      return Array.from(this._targetMap.get(target).all);
    }
    return [];
  }

  byTargetAndNamespace(target, namespace) {
    if (this._targetMap.has(target)) {
      return Array.from(this._targetMap.get(target).byNamespace(namespace));
    }
    return [];
  }

  find(target, namespace, name) {
    if (this._targetMap.has(target)) {
      return this._targetMap.get(target).find(namespace, name);
    }
  }

  findByTargetAndIdentifier(target, identifier) {
    if (this._targetMap.has(target)) {
      return this._targetMap.get(target).findByIdentifier(identifier);
    }
  }
}

class TargetMapSpecifications {

  constructor(target) {
    this._target = target;
    this._nsMap = new Map();
    this._grammarVersions = new Map();
  }

  get target() { return this._target; }
  get grammarVersions() { return Array.from(this._grammarVersions.values()); }
  get namespaces() { return Array.from(this._nsMap.keys()); }

  add(mapping) {
    const id = mapping.identifier;
    if (!this._nsMap.has(id.namespace)) {
      this._nsMap.set(id.namespace, new Map());
    }
    this._nsMap.get(id.namespace).set(id.name, mapping);
    if (typeof mapping.grammarVersion !== 'undefined') {
      this._grammarVersions.set(mapping.grammarVersion.toString(), mapping.grammarVersion);
    }
  }

  get all() {
    const all = [];
    for (const ns of this._nsMap.values()) {
      all.push(...ns.values());
    }
    return all;
  }

  byNamespace(namespace) {
    if (this._nsMap.has(namespace)) {
      return Array.from(this._nsMap.get(namespace).values());
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

  toJSON() {
    return {
      'name': this.namespace,
      'description': this.description
      // 'external_dependencies' : undefined
    };
  }
}

class DataElement {
  constructor(identifier, isEntry=false, isAbstract=false) {
    this._identifier = identifier; // Identifier
    this._isEntry = isEntry; // boolean
    this._isAbstract = isAbstract; // boolean
    this._basedOn = [];      // Identifier[]
    this._concepts = [];     // Concept[]
    this._fields = [];       // Value[] (and its subclasses) -- excluding primitive values
    this._hierarchy = [];    // String[], list of base class FQNs
    // also contains _value, _description, and _grammarVersion
  }
  // identifier is the unique Identifier (namespace+name) for the DataElement
  get identifier() { return this._identifier; }

  // isEntry is a boolean flag indicating if this element is an entry
  get isEntry() { return this._isEntry; }
  set isEntry(isEntry) {
    this._isEntry = isEntry;
  }

  // isAbstract is a boolean flag indicating if this element is abstract and non-instantiable
  get isAbstract() { return this._isAbstract; }
  set isAbstract(isAbstract) {
    this._isAbstract = isAbstract;
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

  get hierarchy() { return this._hierarchy; }
  set hierarchy(hierarchy) {
    this._hierarchy = hierarchy;
  }

  clone() {
    const clone = new DataElement(this._identifier.clone(), this._isEntry, this._isAbstract);
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
      clone._grammarVersion = this._grammarVersion.clone();
    }
    return clone;
  }

  toJSON() {
    var output = {
      'name':         this.identifier.name,
      'namespace':    this.identifier.namespace,
      'fqn':          this.identifier.fqn,
      'isEntry':      this.isEntry,
      'isAbstract':   this.isAbstract,
      'description':  this.description,
      'concepts':     this.concepts.map(c => c.toJSON()),
      'hierarchy':    this._hierarchy, //full hierarchy
      'basedOn':      this.basedOn.map(b => b.fqn || b.toString()),
      'value':        this.value != null ? this.value.toJSON() : undefined,
      'fields':       this._fields.map(f => f.toJSON())
    };

    clearEmptyFields(output, true);

    return output;
  }
}

class Concept {
  constructor(system, code, display) {
    this._system = system;
    this._code = code;
    this._display = display;
  }

  get system() { return this._system; }
  set system(system) {
    this._system = system;
  }
  get code() { return this._code; }
  set code(code) {
    this._code = code;
  }
  get display() { return this._display; }
  set display(display) {
    this._display = display;
  }

  clone() {
    return new Concept(this._system, this._code, this._display);
  }

  toJSON() {
    return {
      'system': this.system,
      'code': this.code,
      'display': this.display
    };
  }


  /**
   * Check concepts for equality. Note that this ignores the display property.
   *
   * @param other - the other concept for comparison.
   * @returns {boolean} if the system and code are equal.
   */
  equals(other) {
    return (other instanceof Concept) && this._system == other.system && this._code == other.code;
  }


}

class Identifier {

  constructor(namespace, name) {
    this._namespace = namespace; // string
    this._name = name; // string
  }

  get namespace() { return this._namespace; }
  get name() { return this._name; }
  get fqn() { return (this.isPrimitive || this.isSpecialKeyWord) ? this._name : `${this._namespace}.${this._name}`; }

  get isPrimitive() {
    return this._namespace === PRIMITIVE_NS;
  }

  get isConceptKeyWord() {
    return this._namespace === '' && this._name === '_Concept';
  }

  get isEntryKeyWord() {
    // TODO: Remove backwards compatibility w/ 'Entry' in next major rev
    return this._namespace === '' && (this._name === '_Entry' || this._name === 'Entry');
  }

  get isValueKeyWord() {
    // TODO: Remove backwards compatibility w/ 'Value' in next major rev
    return this._namespace === '' && (this._name === '_Value' || this._name === 'Value');
  }

  get isSpecialKeyWord() {
    // TODO: Remove backwards compatibility w/ 'Entry' and 'Value' in next major rev
    return this._namespace === '' && (this._name.startsWith('_') || this._name === 'Entry' || this._name === 'Value');
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
    //additional properties: source (Identifier), history (Cardinality[])
  }

  get min() { return this._min; }
  set min(min) { this._min = min; }
  // withMin is a convenience function for chaining
  withMin(min) {
    this.min = min;
    return this;
  }
  get max() { return this._max; }
  set max(max) { this._max = max; }

  withMax(max) {
    this.max = max;
    return this;
  }
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

  get source() { return this._source; }
  set source(source) { this._source = source; }

  // withSource is a convenience function for chaining
  withSource(source) {
    this.source = source;
    return this;
  }
  get history() { return this._history; }
  set history(history) { this._history = history; }
  // withHistory is a convenience function for chaining
  withHistory(card) {
    this.addHistory(card);
    return this;
  }

  // addHistory is a convenience function for chaining
  addHistory(card) {
    if (!this.history) this.history = [];
    this.history.push(card);
    return this;
  }

  // withHistories is a convenience function for chaining
  withHistories(histories) {
    if (!this.history) this.history = [];
    this.history.push(...histories);
    return this;
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

  toJSON() {
    var out = {
      'min': this._min,
      'max': this._max
    };

    if (this._history && this._history.length > 0) {
      out['history'] = this._history.map(h => ({
        'source': (h._source && h._source.fqn) ? h._source.fqn : undefined,
        'min': h._min,
        'max': h._max
      }));
    }

    return out;

  }
}

class Constraint {

  constructor(path = []) {
    this._path = path;
  }

  get path() { return this._path; }
  set path(path) { this._path = path; }
  // withPath is a convenience function for chaining
  withPath(path) {
    this.path = path;
    return this;
  }
  hasPath() {
    return this._path.length > 0;
  }

  get lastModifiedBy() { return this._lastModifiedBy; }
  set lastModifiedBy(lastModifiedBy) { this._lastModifiedBy = lastModifiedBy; }
  // withLastModified is a convenience function for chaining
  withLastModifiedBy(lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
    return this;
  }

  _clonePropertiesTo(clone) {
    for (const p of this._path) {
      clone._path.push(p.clone());
    }
    if (this.lastModifiedBy) {
      clone.lastModifiedBy = this.lastModifiedBy;
    }
  }

  _pathsAreEqual(other) {
    if (!this.hasPath) {
      return !other.hasPath;
    }
    if (!other.hasPath) {
      return false;
    }
    if (this.path.length !== other.path.length) {
      return false;
    }

    for (let i=0; i < this.path.length; i++) {
      if (!this.path[i].equals(other.path[i])) {
        return false;
      }
    }
    return true;
  }


  toJSON() {
    return {
      'lastModifiedBy': (this.lastModifiedBy) ? this.lastModifiedBy.fqn : undefined,
    };
  }

  toString() {
    return `${this.constructor.name} (on path:${this.path.map(p => p.name).join('.')})`;
  }
}

// ValueSetConstraint only makes sense on a code or Coding type value
class ValueSetConstraint extends Constraint {

  constructor(valueSet, path, bindingStrength=REQUIRED) {
    super(path);
    this._valueSet = valueSet;
    this._bindingStrength = bindingStrength;
  }

  get valueSet() { return this._valueSet; }
  get bindingStrength() { return this._bindingStrength; }
  set bindingStrength(bindingStrength) { this._bindingStrength = bindingStrength; }
  // withBindingStrength is a convenience function for chaining
  withBindingStrength(bindingStrength) {
    this.bindingStrength = bindingStrength;
    return this;
  }

  get isRequired() { return this.bindingStrength == REQUIRED; }
  get isExtensible() { return this.bindingStrength == EXTENSIBLE; }
  get isPreferred() { return this.bindingStrength == PREFERRED; }
  get isExample() { return this.bindingStrength == EXAMPLE; }

  clone() {
    const clone = new ValueSetConstraint(this._valueSet).withBindingStrength(this.bindingStrength);
    this._clonePropertiesTo(clone);
    return clone;
  }

  equals(other) {
    return (other instanceof ValueSetConstraint) &&
        this.bindingStrength == other.bindingStrength &&
        this._valueSet == other.valueSet &&
        this._pathsAreEqual(other);
  }

  toJSON() {
    return Object.assign({
      'uri': this._valueSet,
      'bindingStrength': this._bindingStrength

    }, super.toJSON());
  }

  toString() {
    return `ValueSetConstraint (${this.valueSet}, binding strength:${this.bindingStrength}, on path:${this.path.map(p => p.name).join('.')})`;
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

  equals(other) {
    return (other instanceof CodeConstraint) &&
        this._code.equals(other.code) &&
        this._pathsAreEqual(other);
  }

  toJSON() {
    return Object.assign({
      'type': 'code',
      'value': {
        'system': this._code.system,
        'code': this._code.code,
        'display': this._code.display
      }
    }, super.toJSON());
  }

  toString() {
    return `CodeConstraint (${this.code.system}#${this.code.code}, on path:${this.path.map(p => p.name).join('.')})`;
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

  equals(other) {
    return (other instanceof IncludesCodeConstraint) &&
        this._code.equals(other.code) &&
        this._pathsAreEqual(other);
  }

  toJSON() {
    return Object.assign({
      'system': this._code.system,
      'code': this._code.code,
      'description': this._code.display
    }, super.toJSON());
  }

  toString() {
    return `IncludesCodeConstraint (${this.code.system}#${this.code.code}, on path:${this.path.map(p => p.name).join('.')})`;
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

  equals(other) {
    return (other instanceof BooleanConstraint) &&
        this._value == other.value &&
        this._pathsAreEqual(other);
  }

  toJSON() {
    var constraint = super.toJSON();
    delete constraint['path'];

    return Object.assign({
      'type': 'boolean',
      'value': this.value,
    }, constraint);
  }

  toString() {
    return `BooleanConstraint (${this.value}, on path:${this.path.map(p => p.name).join('.')})`;
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

  equals(other) {
    return (other instanceof TypeConstraint) &&
        this._onValue == other.onValue &&
        this._isA.equals(other.isA) &&
        this._pathsAreEqual(other);
  }

  toJSON() {
    return Object.assign({
      'fqn': this.isA.fqn,
      'onValue': this.onValue
    }, super.toJSON());
  }

  toString() {
    return `TypeConstraint (${this.isA.fqn}, on value: ${this.onValue}, on path:${this.path.map(p => p.name).join('.')})`;
  }
}

class IncludesTypeConstraint extends Constraint {

  constructor(isA, card, path, onValue=false) {
    super(path);
    this._isA = isA;
    this._card = card;
    this._onValue=onValue;
  }

  get isA() { return this._isA; }
  get card() { return this._card; }
  get onValue() { return this._onValue; }
  set onValue(onValue) {
    this._onValue = onValue;
  }

  clone() {
    const clone = new IncludesTypeConstraint(this._isA.clone(), this._card.clone());
    this._clonePropertiesTo(clone);
    clone.onValue = this.onValue;
    return clone;
  }

  equals(other) {
    return (other instanceof IncludesTypeConstraint) &&
        this._onValue == other._onValue &&
        this._isA.equals(other.isA) &&
        this._card.equals(other.card) &&
        this._pathsAreEqual(other);
  }

  toJSON() {
    return Object.assign({
      'fqn': this.isA.fqn,
      'card': this.card.toJSON(),
      'onValue': this.onValue
    }, super.toJSON());
  }

  toString() {
    return `IncludesTypeConstraint (${this.card.toString()} ${this.isA.fqn}, on value: ${this.onValue}, on path:${this.path.map(p => p.name).join('.')})`;
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

  equals(other) {
    return (other instanceof CardConstraint) &&
        this._card.equals(other.card) &&
        this._pathsAreEqual(other);
  }

  toJSON() {
    return Object.assign(this.card.toJSON(), super.toJSON());
  }

  toString() {
    return `CardConstraint (${this.card.toString()}, on path:${this.path.map(p => p.name).join('.')})`;
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
    return new ConstraintsFilter(this._constraints.filter(c => c.path.length == 0 && (!c.onValue)));
  }

  get child() {
    return new ConstraintsFilter(this._constraints.filter(c => c.path.length > 0 || c.onValue));
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

  get includesType() {
    return new ConstraintsFilter(this._constraints.filter(c => c instanceof IncludesTypeConstraint));
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

/**
 * A ConstraintHistoryItem represents a single constraint and its source.  These are collected in arrays in the
 * ConstraintHistoryFilters.
 */
class ConstraintHistoryItem {
  constructor(constraint, source) {
    this._constraint = constraint;
    this._source = source;
  }

  get constraint() { return this._constraint; }
  set constraint(constraint) { this._constraint = constraint; }
  // withConstraint is a convenience function for chaining
  withConstraint(source) {
    this.source = source;
    return this;
  }

  get source() { return this._source; }
  set source(source) { this._source = source; }
  // withSource is a convenience function for chaining
  withSource(source) {
    this.source = source;
    return this;
  }

  clone() {
    const clone = new ConstraintHistoryItem();
    if (this._constraint) {
      clone._constraint = this._constraint.clone();
    }
    if (this._source) {
      clone._source = this._source.clone();
    }
    return clone;
  }

  equals(other) {
    if (!this.constraint.equals(other.constraint)) {
      return false;
    }
    if (!this.source.equals(other.source)) {
      return false;
    }
  }

  toJSON() {
    const constraintWithPath = Object.assign(this.constraint.toJSON(), {
      path: this.constraint.path ? this.constraint.path.map(p=>p.fqn) : undefined
    });
    return {
      constraint: constraintWithPath,
      source: this.source.fqn,
    };
  }
}

/**
 * A ConstraintHistoryFilter contains an array of ConstraintHistoryItems and can filter them on various criteria.
 * This allows for easily finding the histories you need.
 */
class ConstraintHistoryFilter {
  constructor(histories = []) {
    this._histories = histories;
  }

  add(constraint, source, unique=true) {
    if (unique && this._histories.some(h => h.constraint.equals(constraint))) {
      return;
    }
    this._histories.push(new ConstraintHistoryItem(constraint, source));
  }

  get histories() { return this._histories; }
  get hasHistories() { return this._histories.length > 0; }

  get own() {
    return new ConstraintHistoryFilter(this._histories.filter(h => h.constraint.path.length == 0 && (!h.constraint.onValue)));
  }

  get child() {
    return new ConstraintHistoryFilter(this._histories.filter(h => h.constraint.path.length > 0 || h.constraint.onValue));
  }

  withSource(source) {
    if (!source) {
      return [];
    }

    const matches = this._histories.filter(h => source.equals(h.source));
    return new ConstraintHistoryFilter(matches);
  }

  withPath(path = []) {
    const matches = this._histories.filter(h => {
      if (path.length != h.constraint.path.length) {
        return false;
      }
      for (let i=0; i < path.length; i++) {
        if (!path[i].equals(h.constraint.path[i])) {
          return false;
        }
      }
      return true;
    });
    return new ConstraintHistoryFilter(matches);
  }

  clone() {
    return new ConstraintHistoryFilter(this._histories.map(h => h.clone()));
  }

  equals(other) {
    if (this.histories.length != other.histories.length) {
      return false;
    }
    for (let i=0; i < this.histories.length; i++) {
      if (! this.histories[i].equals(other.histories[i])) {
        return false;
      }
    }
    return true;
  }

  toJSON() {
    return this._histories.map(h => h.toJSON());
  }
}

/**
 * The ConstraintHistory is applied to a Value and contains the histories for every type of constraint.  These histories
 * are intended to be in the order such that the original constraint is at index 0, and every time it is overridden, the
 * new constraint is added to the end of the array.
 */
class ConstraintHistory {
  constructor() {
    this._valueSet = new ConstraintHistoryFilter();
    this._code = new ConstraintHistoryFilter();
    this._includesCode = new ConstraintHistoryFilter();
    this._boolean = new ConstraintHistoryFilter();
    this._type = new ConstraintHistoryFilter();
    this._includesType = new ConstraintHistoryFilter();
    this._card = new ConstraintHistoryFilter();
  }

  get valueSet() { return this._valueSet; }
  get code() { return this._code; }
  get includesCode() { return this._includesCode; }
  get boolean() { return this._boolean; }
  get type() { return this._type; }
  get includesType() { return this._includesType; }
  get card() { return this._card; }

  get hasHistories() {
    const filters = [this.valueSet, this.code, this.includesCode, this.boolean, this.type, this.includesType, this.card];
    return filters.some(f => f.hasHistories);
  }

  add(constraint, source, unique=true) {
    if (constraint instanceof ValueSetConstraint) {
      this._valueSet.add(constraint, source, unique);
    } else if (constraint instanceof CodeConstraint) {
      this._code.add(constraint, source, unique);
    } else if (constraint instanceof IncludesCodeConstraint) {
      this._includesCode.add(constraint, source, unique);
    } else if (constraint instanceof BooleanConstraint) {
      this._boolean.add(constraint, source, unique);
    } else if (constraint instanceof TypeConstraint) {
      this._type.add(constraint, source, unique);
    } else if (constraint instanceof IncludesTypeConstraint) {
      this._includesType.add(constraint, source, unique);
    } else if (constraint instanceof CardConstraint) {
      this._card.add(constraint, source, unique);
    }
  }

  mergeFrom(otherConstraintHistory, unique=true) {
    otherConstraintHistory.valueSet.histories.forEach(c => this.add(c.constraint.clone(), c.source.clone(), unique));
    otherConstraintHistory.code.histories.forEach(c => this.add(c.constraint.clone(), c.source.clone(), unique));
    otherConstraintHistory.includesCode.histories.forEach(c => this.add(c.constraint.clone(), c.source.clone(), unique));
    otherConstraintHistory.boolean.histories.forEach(c => this.add(c.constraint.clone(), c.source.clone(), unique));
    otherConstraintHistory.type.histories.forEach(c => this.add(c.constraint.clone(), c.source.clone(), unique));
    otherConstraintHistory.includesType.histories.forEach(c => this.add(c.constraint.clone(), c.source.clone(), unique));
    otherConstraintHistory.card.histories.forEach(c => this.add(c.constraint.clone(), c.source.clone(), unique));
  }

  clone() {
    const clone = new ConstraintHistory();
    clone._valueSet = this._valueSet.clone();
    clone._code = this._code.clone();
    clone._includesCode = this._includesCode.clone();
    clone._boolean = this._boolean.clone();
    clone._type = this._type.clone();
    clone._includesType = this._includesType.clone();
    clone._card = this._card.clone();
    return clone;
  }

  equals(other) {
    return this.valueSet.equals(other.valueSet)
      && this.code.equals(other.code)
      && this.includesCode.equals(other.includesCode)
      && this.boolean.equals(other.boolean)
      && this.type.equals(other.type)
      && this.includesType.equals(other.includesType)
      && this.card.equals(other.card);
  }

  toJSON() {
    const noEmpties = (historyFilter => historyFilter.hasHistories ? historyFilter.toJSON() : undefined);
    return {
      valueSet: noEmpties(this.valueSet),
      code: noEmpties(this.code),
      includesCode: noEmpties(this.includesCode),
      boolean: noEmpties(this.boolean),
      type: noEmpties(this.type),
      includesType: noEmpties(this.includesType),
      card: noEmpties(this.card)
    };
  }
}

class Value {

  constructor() {
    this._constraints = [];
    this._constraintHistory = new ConstraintHistory();
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
    if (this.card == null) {
      return;
    }

    let eCard = this.card.clone();

    // First check if there is a cardinality constraint and use it if it's there
    const cardConstraints = this.constraintsFilter.own.card.constraints;
    if (cardConstraints.length > 0) {
      eCard = cardConstraints[cardConstraints.length - 1].card.clone();
    }

    // Now look at includes type constraints, because any that have lower card > 0 may affect this card
    let sumOfIncludesTypeMins = 0;
    for (const itConstraint of this.constraintsFilter.own.includesType.constraints) {
      sumOfIncludesTypeMins += itConstraint.card.min;
    }
    if (sumOfIncludesTypeMins > eCard.min) {
      eCard.min = sumOfIncludesTypeMins;
    }

    return eCard;
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
  // withConstraints is a convenience function for chaining
  withConstraints(constraints) {
    for (const constraint of constraints) {
      this.addConstraint(constraint);
    }
    return this;
  }
  get hasConstraints() {
    return this._constraints.length > 0;
  }
  get constraintsFilter() {
    return new ConstraintsFilter(this._constraints);
  }

  get constraintHistory() { return this._constraintHistory; }
  set constraintHistory(constraintHistory) {
    this._constraintHistory = constraintHistory;
  }

  get inheritance() { return this._inheritance; }
  set inheritance(inheritance) {
    this._inheritance = inheritance;
  }

  get inheritedFrom() { return this._inheritedFrom; }
  set inheritedFrom(inheritedFrom) {
    this._inheritedFrom = inheritedFrom;
  }

  withInheritedFrom(inheritedFrom) {
    this.inheritedFrom = inheritedFrom;
    return this;
  }

  // withInheritance is a convenience function for chaining
  withInheritance(inheritance) {
    this.inheritance = inheritance;
    return this;
  }

  _clonePropertiesTo(clone) {
    if (this._card) {
      clone._card = this._card.clone();
    }
    for (const constraint of this._constraints) {
      clone._constraints.push(constraint.clone());
    }
    if (this._inheritance) {
      clone._inheritance = this._inheritance;
    }
    if (this._inheritedFrom) {
      clone._inheritedFrom = this._inheritedFrom;
    }
    if (this._constraintHistory) {
      clone._constraintHistory = this._constraintHistory.clone();
    }
  }

  /**
   * Check values for equality.
   *
   * @param other - the other value for comparison.
   * @param {boolean} [ignoreInheritance=false] - if the inheritance-related properties should be ignored.
   * @returns {boolean} if the values are equal.
   */
  equals(other, ignoreInheritance = false) {
    if (!other || (Object.getPrototypeOf(this) !== Object.getPrototypeOf(other))) {
      return false;
    }

    if (!this.card) {
      if (other.card) {
        return false;
      }
    } else {
      if (!other.card) {
        return false;
      }
      if (!this.card.equals(other.card)) {
        return false;
      }
    }

    if (!ignoreInheritance) {
      if (this.inheritance !== other.inheritance) {
        return false;
      }
      if (!this.constraintHistory.equals(other.constraintHistory)) {
        return false;
      }
    }

    if (!this.hasConstraints) {
      return !other.hasConstraints;
    }
    if (!other.hasConstraints) {
      return false;
    }
    if (this.constraints.length !== other.constraints.length) {
      return false;
    }

    for (let i=0; i < this.constraints.length; i++) {
      if (!this.constraints[i].equals(other.constraints[i])) {
        return false;
      }
    }

    return true;
  }

  toJSON() {
    const constraints = this._constraints.reduce((out, constraint, i) => {
      let key = constraint.constructor.name.replace(/constraint/i, '').replace(/^[a-zA-Z]/, (s) => s.toLowerCase());
      let constraintJSON = constraint.toJSON();

      const arrConstraints  = ['includesType', 'includesCode'];
      const dicConstraints  = ['type', 'valueSet', 'card'];
      const valConstraints  = ['boolean', 'code'];

      const addToPath = (outputDict, skipCard=false) => {
        if (skipCard && key == 'card') return;

        if (arrConstraints.includes(key)) {
          if (outputDict[key] == null) outputDict[key] = [];

          outputDict[key].push(constraintJSON);
        } else if (dicConstraints.includes(key)) {
          outputDict[key] = constraintJSON;
        } else if (valConstraints.includes(key)) {
          outputDict['fixedValue'] = constraintJSON;
        }
      };

      if (constraint.path.length == 0) addToPath(out, true);
      else if (constraint.path.length  > 0) {
        let currentSubField = out;
        constraint.path.forEach((subP) => {
          if (currentSubField['subpaths'] == null) currentSubField['subpaths'] = {};
          if (currentSubField['subpaths'][subP.fqn] == null) currentSubField['subpaths'][subP.fqn] = {};
          currentSubField = currentSubField['subpaths'][subP.fqn];
        });
        addToPath(currentSubField);
      }

      return out;
    }, {}
    );

    let card = this.effectiveCard;
    if (this.card != null && this.effectiveCard != null && this.card != this.effectiveCard && this.card.history) {
      card.history = this.card.history;
    }

    return {
      valueType: this.constructor.name,
      card: (card) ? card.toJSON() : 'TBD',
      constraints: Object.keys(constraints).length > 0 ? constraints : undefined,
      inheritance: (this._inheritance) ? {
        status: this._inheritance,
        from: this._inheritedFrom.fqn,
      } : undefined,
      constraintHistory: this.constraintHistory.hasHistories ? this.constraintHistory.toJSON() : undefined
    };
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

  getPossibleIdentifiers(withIncludesTypeIdentifiers=false) {
    const idMap = new Map();
    // First add its original identifier
    idMap.set(this.identifier.fqn, this.identifier);
    // Then add its effective identifier
    // NOTE: This is usually in the constraint history, but at one point in shr-expand, it might not be
    idMap.set(this.effectiveIdentifier.fqn, this.effectiveIdentifier);
    // Then add any other historical type constraints
    const typeConstraintsHistories = this.constraintHistory.type.own.histories;
    for (const tch of typeConstraintsHistories) {
      idMap.set(tch.constraint.isA.fqn, tch.constraint.isA);
    }
    // Then add any include type constraints if requested
    if (withIncludesTypeIdentifiers) {
      const includesTypeConstraints = this.constraintsFilter.own.includesType.constraints;
      for (const itc of includesTypeConstraints) {
        idMap.set(itc.isA.fqn, itc.isA);
      }
    }
    return Array.from(idMap.values());
  }

  // TODO: Try to reduce redundancy between this and the function above
  get possibleIdentifiers() {
    return this.getPossibleIdentifiers(true);
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

  /** @inheritDoc */
  equals(other, ignoreInheritance = false) {
    return super.equals(other, ignoreInheritance) &&
        this._identifier.equals(other.identifier);
  }

  toString() {
    return this.identifier.name;
  }

  toJSON() {
    return Object.assign(
      {
        'fqn': this.identifier.fqn,
      },
      super.toJSON()
    );
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
    return `ref(${this.identifier.name})`;
  }
}

class ChoiceValue extends Value {


  constructor() {
    super();
    this._options = []; // Value[]
  }

  // Each option in the choice must be a subclass of Value
  get options() { return this._options; }
  get aggregateOptions() {
    const options = [];
    for (const opt of this._options) {
      if (opt instanceof ChoiceValue) {
        options.push(...opt.aggregateOptions);
      } else {
        options.push(opt);
      }
    }
    return options;
  }
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

  /** @inheritDoc */
  equals(other, ignoreInheritance = false) {
    if (!super.equals(other, ignoreInheritance)) {
      return false;
    }

    if (!this.options) {
      return !other.options;
    }
    if (!other.options) {
      return false;
    }
    if (this.options.length !== other.options.length) {
      return false;
    }

    for (let i=0; i < this.options.length; i++) {
      if (!this.options[i].equals(other.options[i], ignoreInheritance)) {
        return false;
      }
    }
    return true;
  }

  toString() {
    let str = 'Choice(';
    for (let i=0; i < this._options.length; i++) {
      str += this._options[i].toString();
      if ((i+1) < this._options.length) {
        str += ', ';
      }
    }
    str += ')';
    return str;
  }

  toJSON() {
    return Object.assign(super.toJSON(), {
      'options': this._options.map(v => {
        let option = v.toJSON();
        delete option['card'];
        return option;
      })
    });
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

  set text(text) {
    this._text = text;
  }

  /**
   * Check value for equality. This only checks that the other object is a TBD and that the text properties are ==.
   * Because inheritance doesn't apply to TBD the ignoreInheritance parameter is unused.
   *
   * @param other - the other value for comparison
   * @returns {boolean} if the values are equal.
   * @override
   */
  equals(other) {
    return (other instanceof TBD) && this._text == other.text;
  }

  clone() {
    const clone = new TBD(this._text);
    super._clonePropertiesTo(clone);
    return clone;
  }

  toString() {
    return this._text ? `TBD(${this._text})` : 'TBD';
  }

  toJSON() {
    return Object.assign(
      {
        'fqn' : this.toString()
      },
      super.toJSON()
    );
  }
}

class ValueSet  {

  constructor(identifier, url) {
    this._identifier = identifier;
    this._url = url;
    this._concepts = []; // Concept[] -- indicating the *defitional* concept that describes the value set
    this._rules = [];    // Dynamic rules for inclusion/exclusion of codes in a value set
  }

  get identifier() { return this._identifier; }
  get url() { return this._url; }

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

  // rules are ValueSetIncludesCodeRule, ValueSetIncludesDescendentsRule, ValueSetExcludesDescendentsRule, or ValueSetIncludesFromCodeRule
  get rules() { return this._rules; }
  set rules(rules) {
    this._rules = rules;
  }
  addRule(rule) {
    this._rules.push(rule);
  }
  // withRule is a convenience function for chaining
  withRule(rule) {
    this.addRule(rule);
    return this;
  }

  get rulesFilter() {
    return new ValueSetRulesFilter(this._rules);
  }

  addValueSetIncludesCodeRule(code) {
    this._rules.push(new ValueSetIncludesCodeRule(code));
  }
  // withValueSetIncludesCodeRule is a convenience function for chaining
  withValueSetIncludesCodeRule(code) {
    this.addValueSetIncludesCodeRule(code);
    return this;
  }

  addValueSetIncludesDescendentsRule(code) {
    this._rules.push(new ValueSetIncludesDescendentsRule(code));
  }
  // withValueSetIncludesDescendentsRule is a convenience function for chaining
  withValueSetIncludesDescendentsRule(code) {
    this.addValueSetIncludesDescendentsRule(code);
    return this;
  }

  addValueSetExcludesDescendentsRule(code) {
    this._rules.push(new ValueSetExcludesDescendentsRule(code));
  }
  // withValueSetExcludesDescendentsRule is a convenience function for chaining
  withValueSetExcludesDescendentsRule(code) {
    this.addValueSetExcludesDescendentsRule(code);
    return this;
  }

  addValueSetIncludesFromCodeSystemRule(code) {
    this._rules.push(new ValueSetIncludesFromCodeSystemRule(code));
  }
  // withValueSetIncludesFromCodeSystemRule is a convenience function for chaining
  withValueSetIncludesFromCodeSystemRule(code) {
    this.addValueSetIncludesFromCodeSystemRule(code);
    return this;
  }

  addValueSetIncludesFromCodeRule(code) {
    this._rules.push(new ValueSetIncludesFromCodeRule(code));
  }
  // withValueSetIncludesFromCodeRule is a convenience function for chaining
  withValueSetIncludesFromCodeRule(code) {
    this.addValueSetIncludesFromCodeRule(code);
    return this;
  }

  // the Version of the grammar used to define this value set
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
    const clone = new ValueSet(this._identifier, this._url);
    if (this._description) {
      clone._description = this._description;
    }
    for (const concept of this._concepts) {
      clone._concepts.push(concept.clone());
    }
    for (const rule of this._rules) {
      clone.addRule(rule.clone());
    }
    if (this._grammarVersion) {
      clone._grammarVersion = this._grammarVersion.clone();
    }
    return clone;
  }

  toJSON() {
    const rule = (ruleFilter) => ruleFilter._rules.map(r => r.toJSON());
    var out = {
      'name':        this._identifier._name,
      'namespace':   this._identifier.namespace,
      'fqn':         this._identifier.fqn,
      'description': this._description,
      'concepts':    this.concepts.map(c => c.toJSON()),
      'url':         this._url,
      'values':      this.rulesFilter.includesCode._rules.map(r => r.toJSON()),
      'rules': {
        'includesDescendants':    rule(this.rulesFilter.includesDescendents),
        'includesFromCode':       rule(this.rulesFilter.includesFromCode),
        'includesFromCodeSystem': rule(this.rulesFilter.includesFromCodeSystem),
        'excludesDescendants':    rule(this.rulesFilter.excludesDescendents),
      }
    };

    clearEmptyFields(out, true);

    return out;
  }
}

// Note -- this should be consider abstract.  Do not instantiate!
class ValueSetCodeRule {

  constructor(code) {
    this._code = code;
  }

  get code() { return this._code; }
}

// ValueSetIncludesCodeRule indicates that the given code should be directly included in the value set
class ValueSetIncludesCodeRule extends ValueSetCodeRule {

  constructor(code) {
    super(code);
  }

  clone() {
    return new ValueSetIncludesCodeRule(this._code.clone());
  }

  toJSON() {
    return {
      'system': this._code.system,
      'code': this._code.code,
      'description': this._code.display
    };
  }
}

// ValueSetIncludesDescendentsRule indicates that the given code and it's descendents (in SNOMED-CT) should be included in the value set
class ValueSetIncludesDescendentsRule extends ValueSetCodeRule {

  constructor(code) {
    super(code);
  }

  clone() {
    return new ValueSetIncludesDescendentsRule(this._code.clone());
  }

  toJSON() {
    return {
      'system': this._code.system,
      'code': this._code.code,
      'description': this._code.display
    };
  }
}

// ValueSetExcludesDescendentsRule indicates that the given code and it's descendents (in SNOMED-CT) should be excluded from the value set
class ValueSetExcludesDescendentsRule extends ValueSetCodeRule {

  constructor(code) {
    super(code);
  }

  clone() {
    return new ValueSetExcludesDescendentsRule(this._code.clone());
  }

  toJSON() {
    return {
      'system': this._code.system,
      'code': this._code.code,
      'description': this._code.display
    };
  }
}

// ValueSetIncludesFromCodeSystemRule indicates that all codes in the given code system should be included in the value set
class ValueSetIncludesFromCodeSystemRule {

  constructor(system) {
    this._system = system;
  }

  get system() { return this._system; }

  clone() {
    return new ValueSetIncludesFromCodeSystemRule(this._system);
  }

  toJSON() {
    return { 'system': this._system };
  }
}

// ValueSetIncludesFromCodeRule indicates that codes referenced by the given code should be included in the value set
class ValueSetIncludesFromCodeRule extends ValueSetCodeRule {

  constructor(code) {
    super(code);
  }

  clone() {
    return new ValueSetIncludesFromCodeRule(this._code.clone());
  }

  toJSON() {
    return {
      'system':   this._code.system,
      'code':     this._code.code,
      'description':  this._code.display
    };
  }
}

class ValueSetRulesFilter {

  constructor(rules = []) {
    this._rules = rules;
  }

  get rules() { return this._rules; }
  get hasRules() { return this._rules.length > 0; }

  get includesCode() {
    return new ValueSetRulesFilter(this._rules.filter(c => c instanceof ValueSetIncludesCodeRule));
  }

  get includesDescendents() {
    return new ValueSetRulesFilter(this._rules.filter(c => c instanceof ValueSetIncludesDescendentsRule));
  }

  get excludesDescendents() {
    return new ValueSetRulesFilter(this._rules.filter(c => c instanceof ValueSetExcludesDescendentsRule));
  }

  get includesFromCodeSystem() {
    return new ValueSetRulesFilter(this._rules.filter(c => c instanceof ValueSetIncludesFromCodeSystemRule));
  }

  get includesFromCode() {
    return new ValueSetRulesFilter(this._rules.filter(c => c instanceof ValueSetIncludesFromCodeRule));
  }
}

class CodeSystem  {

  constructor(identifier, url) {
    this._identifier = identifier;
    this._url = url;
    this._codes = []; // Concept[] -- codes in the code system
  }

  get identifier() { return this._identifier; }
  get url() { return this._url; }

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

  // codes are an array of Concept
  get codes() { return this._codes; }
  set codes(codes) {
    this._codes = codes;
  }
  addCode(code) {
    this._codes.push(code);
  }
  // withCode is a convenience function for chaining
  withCode(code) {
    this.addCode(code);
    return this;
  }

  // the Version of the grammar used to define this code system
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
    const clone = new CodeSystem(this._identifier, this._url);
    if (this._description) {
      clone._description = this._description;
    }
    for (const code of this._codes) {
      clone._codes.push(code.clone());
    }
    if (this._grammarVersion) {
      clone._grammarVersion = this._grammarVersion.clone();
    }
    return clone;
  }
}


class ElementMapping {

  constructor(identifier, targetSpec, targetItem) {
    this._identifier = identifier;
    this._targetSpec = targetSpec;
    this._targetItem = targetItem;
    this._rules = [];
  }

  get identifier() { return this._identifier; }
  get targetSpec() { return this._targetSpec; }

  get targetItem() { return this._targetItem; }
  set targetItem(targetItem) {
    this._targetItem = targetItem;
  }

  // rules are FieldMappingRule, CardinalityMappingRule, or FixedValueMappingRule
  get rules() { return this._rules; }
  set rules(rules) {
    this._rules = rules;
  }

  addRule(rule) {
    this._rules.push(rule);
  }
  // withRule is a convenience function for chaining
  withRule(rule) {
    this.addRule(rule);
    return this;
  }

  get rulesFilter() {
    return new MappingRulesFilter(this._rules);
  }

  addFieldMappingRule(sourcePath, targetPath) {
    this._rules.push(new FieldMappingRule(sourcePath, targetPath));
  }
  // withFieldMappingRule is a convenience function for chaining
  withFieldMappingRule(sourcePath, targetPath) {
    this.addFieldMappingRule(sourcePath, targetPath);
    return this;
  }

  addCardinalityMappingRule(targetPath, cardinality) {
    this._rules.push(new CardinalityMappingRule(targetPath, cardinality));
  }
  // withCardinalityMappingRule is a convenience function for chaining
  withCardinalityMappingRule(targetPath, cardinality) {
    this.addCardinalityMappingRule(targetPath, cardinality);
    return this;
  }

  addFixedValueMappingRule(targetPath, value) {
    this._rules.push(new FixedValueMappingRule(targetPath, value));
  }
  // withFixedValueMappingRule is a convenience function for chaining
  withFixedValueMappingRule(targetPath, value) {
    this.addFixedValueMappingRule(targetPath, value);
    return this;
  }

  // the Version of the grammar used to define this mapping
  get grammarVersion() { return this._grammarVersion; }
  set grammarVersion(grammarVersion) {
    this._grammarVersion = grammarVersion;
  }
  // withGrammarVersion is a convenience function for chaining
  withGrammarVersion(grammarVersion) {
    this.grammarVersion = grammarVersion;
    return this;
  }

  get inheritance() { return this._inheritance; }
  set inheritance(inheritance) {
    this._inheritance = inheritance;
  }

  get inheritedFrom() { return this._inheritedFrom; }
  set inheritedFrom(inheritedFrom) {
    this._inheritedFrom = inheritedFrom;
  }

  withInheritedFrom(inheritedFrom) {
    this.inheritedFrom = inheritedFrom;
    return this;
  }

  // withInheritance is a convenience function for chaining
  withInheritance(inheritance) {
    this.inheritance = inheritance;
    return this;
  }

  clone() {
    const clone = new ElementMapping(this._identifier, this._targetSpec, this._targetItem);
    for (const rule of this._rules) {
      clone.addRule(rule.clone());
    }
    if (this._grammarVersion) {
      clone._grammarVersion = this._grammarVersion.clone();
    }

    return clone;
  }

  toJSON() {
    /* TODO: make field mappings hierarchial
    let fieldMappings = this.rulesFilter.field._rules.reduce((dict, m) => {
      var paths = m.sourcePath.map(p => p.fqn).slice();
      var currDict = dict;
      while (paths.length > 0) {
          let key = paths.shift();
          if (!currDict[key]) {
              currDict[key] = {};
          }
          currDict = currDict[key]
      }
      currDict["target"] = m.target;
      return dict;
    }, {})
    */

    let out = {
      'name': this.identifier.name,
      'namespace': this.identifier.namespace,
      'fqn': this.identifier.fqn,
      'targetSpec': this.targetSpec,
      'targetItem': this.targetItem,
      'inheritance': (this._inheritance) ? {
        'status': this._inheritance,
        'from': this._inheritedFrom.fqn,
      } : undefined,
      'mappings': {
        'fieldMapping': this.rulesFilter.field._rules.map(m => m.toJSON()), //TODO make hierarchial
        'cardMapping': this.rulesFilter.cardinality._rules.map(m => m.toJSON()),
        'fixedValueMapping': this.rulesFilter.fixedValue._rules.map(m => m.toJSON())
      }
    };

    clearEmptyFields(out, true);

    return out;
  }
}


//Note: This should be considered abstract and never instantiated
class MappingRule {
  constructor(target = '') {
    this._target = target; // string
  }

  get target() { return this._target; }

  get lastModifiedBy() { return this._lastModifiedBy; }
  set lastModifiedBy(lastModifiedBy) { this._lastModifiedBy = lastModifiedBy; }
  // withLastModified is a convenience function for chaining
  withLastModifiedBy(lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
    return this;
  }

  toJSON() {
    return {
      'target': this.target.replace(/[ \t]+$/,''),
      'lastModifiedBy': (this.lastModifiedBy) ? this.lastModifiedBy.fqn : undefined,
    };
  }
}

class FieldMappingRule extends MappingRule {

  constructor(sourcePath = [], target = '') {
    super(target);
    this._sourcePath = sourcePath; // array of identifiers
  }

  get sourcePath() { return this._sourcePath; }

  toString() {
    const sp = this._sourcePath.map(p => {
      return p instanceof TBD ? `<TBD "${p.text}">` : p.name;
    }).join('.');
    return `${sp} maps to ${this._target}`;
  }

  clone() {
    const clonedSP = this._sourcePath.map(p => p.clone());
    const clone = new FieldMappingRule(clonedSP, this._target);
    if (this.lastModifiedBy) {
      clone.lastModifiedBy = this.lastModifiedBy;
    }

    return clone;
  }

  toJSON() {
    return Object.assign({
      'sourcePath': this.sourcePath.map(s => (s.fqn) ? s.fqn : (s.text ? `TBD(${s.text})` : 'TBD')),
    }, super.toJSON());
  }
}

class CardinalityMappingRule extends MappingRule {

  constructor(target = '', cardinality) {
    super(target);
    this._cardinality = cardinality; // Cardinality
  }

  get cardinality() { return this._cardinality; }

  toString() {
    return `constrain ${this._target} to ${this._cardinality.toString()}`;
  }

  clone() {
    const clone = new CardinalityMappingRule(this._target, this._cardinality.clone());
    if (this.lastModifiedBy) {
      clone.lastModifiedBy = this.lastModifiedBy;
    }

    return clone;
  }

  toJSON() {
    return Object.assign({
      'cardinality': this.cardinality,
    }, super.toJSON());
  }
}

class FixedValueMappingRule extends MappingRule {
  constructor(target = '', value = '') {
    super(target);
    this._value = value; // string
  }

  get value() { return this._value; }

  toString() {
    return `fix ${this._target} to ${this._value}`;
  }

  clone() {
    const clone = new FixedValueMappingRule(this._target, this._value);
    if (this.lastModifiedBy) {
      clone.lastModifiedBy = this.lastModifiedBy;
    }

    return clone;
  }

  toJSON() {
    return Object.assign({
      'fixedValue': this.value,
    }, super.toJSON());
  }
}

class MappingRulesFilter {

  constructor(rules = []) {
    this._rules = rules;
  }

  get rules() { return this._rules; }
  get hasRules() { return this._rules.length > 0; }

  get field() {
    return new MappingRulesFilter(this._rules.filter(c => c instanceof FieldMappingRule));
  }

  get cardinality() {
    return new MappingRulesFilter(this._rules.filter(c => c instanceof CardinalityMappingRule));
  }

  get fixedValue() {
    return new MappingRulesFilter(this._rules.filter(c => c instanceof FixedValueMappingRule));
  }

  withSourcePath(path = []) {
    const matches = this._rules.filter(r => {
      if (typeof r.sourcePath === 'undefined') {
        return false;
      }
      if (path.length != r.sourcePath.length) {
        return false;
      }
      for (let i=0; i < path.length; i++) {
        if (!path[i].equals(r.sourcePath[i])) {
          return false;
        }
      }
      return true;
    });
    return new MappingRulesFilter(matches);
  }

  withTarget(target = '') {
    const matches = this._rules.filter(r => r.target == target);
    return new MappingRulesFilter(matches);
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

  clone() {
    return new Version(this._major, this._minor, this._patch);
  }
}


// Versioning constants
const VERSION = new Version(4, 0, 0);
const GRAMMAR_VERSION = new Version(5, 0, 1);
// Value set binding strength constants (inspired by FHIR)
const REQUIRED = 'REQUIRED';
const EXTENSIBLE = 'EXTENSIBLE';
const PREFERRED = 'PREFERRED';
const EXAMPLE = 'EXAMPLE';

// Primitive constants
const PRIMITIVE_NS = 'primitive';
const PRIMITIVES = ['boolean', 'integer', 'decimal', 'unsignedInt', 'positiveInt', 'string', 'markdown', 'code', 'id',
  'oid', 'uri', 'base64Binary', 'date', 'dateTime', 'instant', 'time', 'xhtml'];

// Inheritance constants
const INHERITED = 'inherited';
const OVERRIDDEN = 'overridden';

module.exports = {Specifications, NamespaceSpecifications, DataElementSpecifications, Namespace, DataElement, Concept, Identifier, PrimitiveIdentifier, Value, IdentifiableValue, RefValue, ChoiceValue, IncompleteValue, TBD, ConstraintsFilter, ConstraintHistory, Cardinality, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, TypeConstraint, IncludesTypeConstraint, CardConstraint, ValueSet, ValueSetIncludesCodeRule, ValueSetIncludesDescendentsRule, ValueSetExcludesDescendentsRule, ValueSetIncludesFromCodeSystemRule, ValueSetIncludesFromCodeRule, CodeSystem, ElementMapping, FieldMappingRule, CardinalityMappingRule, FixedValueMappingRule, Version, PRIMITIVE_NS, PRIMITIVES, VERSION, GRAMMAR_VERSION, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE, INHERITED, OVERRIDDEN, MODELS_INFO, sanityCheckModules};
