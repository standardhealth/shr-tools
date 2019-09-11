const bunyan = require('bunyan');
const {FileStream, CommonTokenStream} = require('antlr4/index');
const {ParseTreeWalker} = require('antlr4/tree');
const {SHRDataElementLexer} = require('./parsers/SHRDataElementLexer');
const {SHRDataElementParser} = require('./parsers/SHRDataElementParser');
const {SHRDataElementParserListener} = require('./parsers/SHRDataElementParserListener');
const {SHRErrorListener} = require('./errorListener.js');
const {Specifications, Version, Namespace, DataElement, Concept, Cardinality, Identifier, IdentifiableValue, PrimitiveIdentifier, ChoiceValue, IncompleteValue, ValueSetConstraint, CodeConstraint, IncludesCodeConstraint, BooleanConstraint, FixedValueConstraint, TypeConstraint, IncludesTypeConstraint, CardConstraint, TBD, PRIMITIVES, REQUIRED, EXTENSIBLE, PREFERRED, EXAMPLE} = require('shr-models');

var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

class DataElementImporter extends SHRDataElementParserListener {
  constructor(preprocessedData, specifications = new Specifications()) {
    super();
    // The preprocessed data indicating valid elements and vocabularies
    this._preprocessedData = preprocessedData;
    // The specifications it collects
    this._specs = specifications;
    // The currently active namespace
    this._currentNs = '';
    // The external namespaces it "uses"
    this._usesNs = [];
    // The currently active grammar version
    this._currentGrammarVersion = '';
    // The relative path to the current file
    this._currentFile = '';
    // The currently active definition (DataElement)
    this._currentDef = null;
  }

  get specifications() { return this._specs; }

  importFile(file, filePath) {
    // Set current file, removing excess file path
    this._currentFile = file.replace(filePath, '');

    // Setup a child logger to associate logs with the current file
    const lastLogger = logger;
    logger = rootLogger.child({ file: file });
    // 01008, 'Start importing data elements file',,
    logger.debug('01008');
    try {
      const errListener = new SHRErrorListener(logger);
      const chars = new FileStream(file);
      const lexer = new SHRDataElementLexer(chars);
      lexer.removeErrorListeners();
      lexer.addErrorListener(errListener);
      const tokens  = new CommonTokenStream(lexer);
      const parser = new SHRDataElementParser(tokens);
      parser.removeErrorListeners();
      parser.addErrorListener(errListener);
      parser.buildParseTrees = true;
      const tree = parser.doc();
      const walker = new ParseTreeWalker();
      walker.walk(this, tree);
    } finally {
      // 01009, 'Done importing data elements file',,
      logger.debug('01009');
      this.logger = lastLogger;
    }
  }


  enterDoc(ctx) {
    // Process the namespace
    let ns = '';
    if (ctx.docHeader().namespace()) {
      ns = ctx.docHeader().namespace().getText();
    }
    else {
      // 11049, 'Namespace declaration not found', 'Unknown', 'errorNumber'
      logger.error('11049');
    }
    this._currentNs = ns;
    let nsDef = this._specs.namespaces.find(ns);
    if (typeof nsDef === 'undefined') {
      nsDef = new Namespace(ns);
      this._specs.namespaces.add(nsDef);
    }
    if (ctx.descriptionProp() && typeof nsDef.description === 'undefined') {
      nsDef.description = trimLines(stripDelimitersFromToken(ctx.descriptionProp().STRING()));
    }
    
    // Process the version
    let docHeader = ctx.docHeader();
    if (docHeader.version()) {
      const version = docHeader.version();
      const major = parseInt(version.WHOLE_NUMBER()[0], 10);
      const minor = parseInt(version.WHOLE_NUMBER()[1], 10);
      this._currentGrammarVersion = new Version(major, minor);

      // 01024, 'Start importing data element namespace',,
      logger.debug({shrId: ns, version: this._currentGrammarVersion.toString()}, '01024');
    }
    else {
      // 11039, 'Grammar declaration not found', 'Add Grammar declaration at top of file', 'errorNumber'
      logger.error('11039');
    }
  }

  exitDoc(ctx) {
    // clear current namespace, uses namespaces, and grammar version
    // 01025, 'Done importing data element namespace ${ns}',,
    logger.debug({shrId: this._currentNs}, '01025');
    this._currentNs = '';
    this._usesNs = [];
    this._currentGrammarVersion = null;
  }

  enterUsesStatement(ctx) {
    this._usesNs = ctx.namespace().map(ns => { return ns.getText(); });
  }

  enterElementDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.elementHeader().simpleName().getText());
    this._currentDef = new DataElement(id, false, false, false).withGrammarVersion(this._currentGrammarVersion);

    // Setup a child logger to associate logs with the current element
    const lastLogger = logger;
    logger = logger.child({ shrId: id.fqn });
    logger.parent = lastLogger;
    // 01010, 'Start importing data element',,
    logger.debug('01010');

    if (ctx.elementHeader().simpleName().LOWER_WORD()) {
      //11001 , 'Element name '${name}' should begin with a capital letter' , 'Rename the specified Element', 'errorNumber'
      logger.error({name : ctx.elementHeader().simpleName().getText() }, '11001' );
    }
  }

  exitElementDef(ctx) {
    try {
      this.pushCurrentDefinition();
    } finally {
      // 01011, 'Done importing data element',,
      logger.debug('01011');
      logger = logger.parent;
    }
  }

  enterAbstractDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.abstractHeader().simpleName().getText());
    this._currentDef = new DataElement(id, false, true, false).withGrammarVersion(this._currentGrammarVersion);
    // Setup a child logger to associate logs with the current element
    const lastLogger = logger;
    logger = logger.child({ shrId: id.fqn });
    logger.parent = lastLogger;
    // 01010, 'Start importing data element',,
    logger.debug('01010');

    if (ctx.abstractHeader().simpleName().LOWER_WORD()) {
      // 11001, 'Element name '${name}' should begin with a capital letter', 'Rename the specified Element', 'errorNumber'
      logger.error({ name: ctx.elementHeader().simpleName().getText() }, '11001');
    }
  }

  exitAbstractDef(ctx) {
    try {
      this.pushCurrentDefinition();
    } finally {
      // 01011, 'Done importing data element',,
      logger.debug('01011');
      logger = logger.parent;
    }
  }

  enterGroupDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.groupHeader().simpleName().getText());
    this._currentDef = new DataElement(id, false, false, true).withGrammarVersion(this._currentGrammarVersion);

    // Setup a child logger to associate logs with the current element
    const lastLogger = logger;
    logger = logger.child({ shrId: id.fqn });
    logger.parent = lastLogger;
    // 01010, 'Start importing data element',,
    logger.debug('01010');

    if (ctx.groupHeader().simpleName().LOWER_WORD()) {
      // 11001, 'Element name '${name}' should begin with a capital letter', 'Rename the specified Element', 'errorNumber'
      logger.error({ name: ctx.groupHeader().simpleName().getText() }, '11001');
    }
  }

  exitGroupDef(ctx) {
    try {
      this.pushCurrentDefinition();
    } finally {
      // 01011, 'Done importing data element',,
      logger.debug('01011');
      logger = logger.parent;
    }
  }

  enterEntryDef(ctx) {
    const id = new Identifier(this._currentNs, ctx.entryHeader().simpleName().getText());
    this._currentDef = new DataElement(id, true, false, false).withGrammarVersion(this._currentGrammarVersion);

    // Setup a child logger to associate logs with the current element
    const lastLogger = logger;
    logger = logger.child({ shrId: id.fqn });
    logger.parent = lastLogger;
    // 01010, 'Start importing data element',,
    logger.debug('01010');

    if (ctx.entryHeader().simpleName().LOWER_WORD()) {
      //11002 , 'Entry name '${name}' should begin with a capital letter' , 'Rename the specified Entry', 'errorNumber'
      logger.error(  {name: ctx.entryHeader().simpleName().getText() }, '11002' );
    }
  }

  exitEntryDef(ctx) {
    try {
      this.pushCurrentDefinition();
    } finally {
      // 01011, 'Done importing data element',,
      logger.debug('01011');
      logger = logger.parent;
    }
  }

  enterParentProp(ctx) {
    const identifier = this.resolveToIdentifierOrTBD(ctx);
    if (identifier.isSpecialKeyWord) {
      //11023 was a duplicate number; reassigned 11035
      //11035 , 'Elements cannot be based on ${value} keyword' , 'Unknown', 'errorNumber'
      logger.error({value: identifier.name } , '11035');
    } else {
      const parentInfo = this._preprocessedData.resolveDefinition(identifier.name, identifier.namespace);
      if (this._currentDef.isEntry) {
        // Entries can only inherit from another Entry or an Abstract
        if (parentInfo.type !== 'entry' && parentInfo.type !== 'abstract') {
          // 11050, 'Entry ${entry} cannot declare ${parent} as its parent since ${parent} is not an Entry or Abstract', 'Unknown', 'errorNumber'
          logger.error({entry: this._currentDef.identifier.name, parent: identifier.name}, '11050');
        }
      } else if (this._currentDef.isAbstract) {
        // Abstracts can only inherit from another Abstract
        if (parentInfo.type !== 'abstract') {
          // 11051, 'Abstract ${abstract} cannot declare ${parent} as its parent since ${parent} is not an Abstract', 'Unknown', 'errorNumber'
          logger.error({abstract: this._currentDef.identifier.name, parent: identifier.name}, '11051');
        }
      } else if (this._currentDef.isGroup) {
        // Groups can only inherit from another Group
        if (parentInfo.type !== 'group') {
          // 11052, 'Group ${group} cannot declare ${parent} as its parent since ${parent} is not a Group', 'Unknown', 'errorNumber'
          logger.error({group: this._currentDef.identifier.name, parent: identifier.name}, '11052');
        }
      } else /* is an element */ {
        // Elements can only inherit from another Element
        if (parentInfo.type !== 'element') {
          // 11053, 'Element ${element} cannot declare ${parent} as its parent since ${parent} is not an Element', 'Unknown', 'errorNumber'
          logger.error({element: this._currentDef.identifier.name, parent: identifier.name}, '11053');
        }
      }
      this._currentDef.addBasedOn(identifier);
    }
  }

  enterDescriptionProp(ctx) {
    if (ctx.parentCtx instanceof SHRDataElementParser.DocContext) {
      // Skip this -- already handled elsewhere
      return;
    }
    this._currentDef.description = trimLines(stripDelimitersFromToken(ctx.STRING()));
  }

  enterConcepts(ctx) {
    for (const fqc of ctx.fullyQualifiedCode()) {
      this._currentDef.addConcept(this.processFullyQualifiedCode(fqc));
    }
  }

  enterValue(ctx) {
    // Perform two checks for correct usage:
    // 1) Only Element can declare a Value; anything else is an error.
    //    NOTE: This could (or maybe should) be enforced in the ANTLR grammar, but for now,
    //    we don't want to make any changes in the grammar.  Consider changing in 6.1.
    // 2) Check to ensure it does not have a parent (in which case it cannot redeclare Value).
    //    Check for ctx.COLON() because the grammar re-uses this rule for the KW_ONLY constraint too.
    //    NOTE: This check relies on the current grammar requiring parents be declared before values.
    if (this._currentDef.isGroup || this._currentDef.isEntry || this._currentDef.isAbstract) {
      // 11054, 'Cannot declare Value on a non-Element', 'Unknown', 'errorNumber'
      logger.error('11054');
    } else if (ctx.COLON() && this._currentDef.basedOn.length > 0) {
      // 11055, 'Cannot redeclare Value on Element that has a parent. Constrain Value instead.', 'Unknown', 'errorNumber'
      logger.error('11055');
    }
    const value = this.processCountAndTypesForValue(ctx);
    this._currentDef.value = value;
  }

  processElementWithConstraint(ctx) {
    let value;
    let path = [];
    let min, max;
    if (ctx.count()) {
      [min, max] = this.getMinMax(ctx.count());
    }
    if (ctx.simpleOrFQName() || ctx.specialWord()) {
      const idText = ctx.simpleOrFQName() ? ctx.simpleOrFQName().getText() : ctx.specialWord().getText();
      const identifier = this.resolveToIdentifier(idText);
      if (identifier.isValueKeyWord) {
        value = new IncompleteValue(identifier);
      } else {
        value = new IdentifiableValue(identifier);
      }
      if (typeof min !== 'undefined') {
        value.setMinMax(min, max);
      }
    } else if (ctx.primitive()) {
      value = new IdentifiableValue(new PrimitiveIdentifier(ctx.primitive().getText()));
      if (typeof min !== 'undefined') {
        value.setMinMax(min, max);
      }
    } else if (ctx.elementBracketPath()) {
      const ebp = ctx.elementBracketPath();
      const ebpFirst = ebp.elementBracketPathFirstPart();
      const idText = ebpFirst.simpleOrFQName() ? ebpFirst.simpleOrFQName().getText() : ebpFirst.specialWord().getText();
      value = new IncompleteValue(this.resolveToIdentifier(idText));
      if (ebp.elementBracketPathSecondPart()) {
        const ebpSecond = ebp.elementBracketPathSecondPart();
        for(let i = 0; i < ebpSecond.length; i++) {
          if (i > 0 || idText != 'Value') {
            if (ebpSecond[i].simpleName()) {
              path.push(this.resolveToIdentifier(ebpSecond[i].simpleName().getText()));
            }
            else if (ebpSecond[i].primitive()) {
              path.push(new PrimitiveIdentifier(ebpSecond[i].primitive().getText()));
            }
          }
          else if (i == 0 && idText == 'Value') {
            if (ebpSecond[i].simpleName()) {
              value = new IncompleteValue(this.resolveToIdentifier(ebpSecond[i].simpleName().getText()));
            }
            else if (ebpSecond[i].primitive()) {
              value = new IncompleteValue(new PrimitiveIdentifier(ebpSecond[i].primitive().getText()));
            }
          }
        }
      }
      if (ebp.elementBracketPathThirdPart()) {
        const ebpThird = ebp.elementBracketPathThirdPart();
        for(let i = 0; i < ebpThird.length; i++) {
          path.push(this.resolveToIdentifier(ebpThird[i].simpleName().getText()));
          if (ebpThird[i].elementBracketPathSecondPart()) {
            let secondPart = ebpThird[i].elementBracketPathSecondPart();
            for (let j = 0; j < secondPart.length; j++) {
              if (secondPart[j].simpleName()) {
                path.push(this.resolveToIdentifier(secondPart[j].simpleName().getText()));
              }

              if (secondPart[j].primitive()) {
                path.push(new PrimitiveIdentifier(secondPart[j].primitive().getText()));
              }
            }
          }
        }
      }
    }
    if (ctx.elementConstraint()) {
      const cst = ctx.elementConstraint();
      if (cst.elementTypeConstraint()) {
        const newIdentifier = this.resolveToIdentifierOrTBD(cst.elementTypeConstraint());
        if (newIdentifier.isSpecialKeyWord) {
          //11025 , 'Fields cannot be constrained to type ${value} ' , 'Unknown' , 'errorNumber'
          logger.error( {value: newIdentifier.name }, '11025');
        } else {
          const onValue = cst.elementTypeConstraint().KW_ONLY() ? true : false;
          value.addConstraint(new TypeConstraint(newIdentifier, path, onValue));
        }
      } else if (cst.elementIncludesTypeConstraint()) {
        for (const typeConstraint of cst.elementIncludesTypeConstraint().typeConstraint()) {
          const newIdentifier = this.resolveToIdentifierOrTBD(typeConstraint);
          if (newIdentifier.isSpecialKeyWord) {
            //11025 , 'Fields cannot be constrained to type ${value} ' , 'Unknown' , 'errorNumber'
            logger.error( {value: newIdentifier.name }, '11025');
          } else {
            [min, max] = this.getMinMax(typeConstraint.count());
            const isOnValue = (path.length > 0 && path[0].isValueKeyWord);
            value.addConstraint(new IncludesTypeConstraint(newIdentifier, new Cardinality(min, max), path, isOnValue));
          }
        }
      } else if (cst.elementCodeVSConstraint()) {
        const vsConstraint = cst.elementCodeVSConstraint();
        const vs = this.resolveValueSetForVSConstraint(vsConstraint); // TODO: Fix
        const strength = this.resolveBindingStrengthForVSConstraint(vsConstraint); // TODO: Fix
        // NOTE: The contraint may be on a non-code-like element.  The "expander" will adjust the path as necessary.
        value.addConstraint(new ValueSetConstraint(vs, path, strength));
      } else if (cst.elementCodeValueConstraint()) {
        const code = this.processFullyQualifiedCode(cst.elementCodeValueConstraint().fullyQualifiedCode());
        const conceptIdentifier = new PrimitiveIdentifier('concept');
        const tailIdentifier = path.length > 0 ? path[path.length-1] : value.identifier;
        if (!conceptIdentifier.equals(tailIdentifier)) {
          path.push(conceptIdentifier);
        }
        value.addConstraint(new CodeConstraint(code, path));
      } else if (cst.elementIncludesCodeValueConstraint()) {
        for (const fqCode of cst.elementIncludesCodeValueConstraint().fullyQualifiedCode()) {
          const code = this.processFullyQualifiedCode(fqCode);
          value.addConstraint(new IncludesCodeConstraint(code, path));
        }
      } else if (cst.elementBooleanConstraint()) {
        const b = cst.elementBooleanConstraint().KW_TRUE() ? true : false;
        value.addConstraint(new BooleanConstraint(b, path));
      } else if (cst.elementStringConstraint()) {
        const str = stripDelimitersFromToken(cst.elementStringConstraint().STRING());
        value.addConstraint(new FixedValueConstraint(str, 'string', path));
      } else if (cst.elementIntegerConstraint()) {
        // use substr to cut out the '=' sign
        const int = parseInt(cst.elementIntegerConstraint().getText().substr(1));
        value.addConstraint(new FixedValueConstraint(int, 'integer', path));
      } else if (cst.elementDecimalConstraint()) {
        // use substr to cut out the '=' sign
        const decimal = parseFloat(cst.elementDecimalConstraint().getText().substr(1));
        value.addConstraint(new FixedValueConstraint(decimal, 'decimal', path));
      }
    }
    else if(ctx.count()) {
      value.addConstraint(new CardConstraint(new Cardinality(min, max), path));
    }
    return value;
  }

  enterField(ctx) {
    const isElement = !this._currentDef.isGroup && !this._currentDef.isEntry && !this._currentDef.isAbstract;
    if (ctx.propertyField()) {
      // If it's an element, you cannot declare properties (using Property:) on it.
      // NOTE: This could potentially be enforced in the ANTLR grammar, but for now, we don't want
      // to make any changes in the grammar.  Consider changing in 6.1.
      if (isElement) {
        // 11056, 'Cannot declare properties on an Element since Elements do not have properties', 'Unknown', 'errorNumber'
        logger.error('11056');
      }
      const field = this.processCountAndTypes(ctx.propertyField().count(), [ctx.propertyField().propertyFieldType()]);
      if (this._currentDef.fields.some(f => f.identifier && f.identifier.equals(field.identifier))) {
        // 11040, 'Property "${name}" already exists.', 'Remove or rename redundant property', 'errorNumber'
        logger.error({ name: field.identifier.name }, 'name');
      }
      else {
        this.addFieldToCurrentDef(field);
      }
    }
    else if (ctx.elementWithConstraint()) {
      const field = this.processElementWithConstraint(ctx.elementWithConstraint());
      if (/^Value([.\[\s].*)?$/.test(ctx.elementWithConstraint().getText())) {
        // If it's not an element, you cannot constrain Value.
        // NOTE: This could potentially be enforced in the ANTLR grammar, but for now, we don't want
        // to make any changes in the grammar.  Consider changing in 6.1.
        if (!isElement) {
          // 11057, 'Cannot constrain Value on a non-Element since non-Elements do not have Values', 'Unknown', 'errorNumber'
          logger.error('11057');
        }
        if (this._currentDef.value) {
          if (this._currentDef.value instanceof ChoiceValue) {
            let marked = false;
            let options = this._currentDef.value.options;
            options.forEach(function(element) {
              if (ctx.elementWithConstraint().getText().includes(`[${element.identifier.name}]`)) {
                marked = true;
              }
            });
            if(!marked) {
              // 11041, 'Choice value constrained without specifying the specific choice', 'Specify the choice to constrain using []', 'errorNumber'
              logger.error('11041');
            }
          }

          field.constraints.forEach(c => this._currentDef.value.addConstraint(c));
        }
        else {
          this._currentDef.value = field;
          this._currentDef.value.setMinMax(1,1);
        }
      }
      else {
        // If it's an element, you cannot constrain Properties (except Value) -- since Elements
        // don't have properties.
        // NOTE: This could potentially be enforced in the ANTLR grammar, but for now, we don't want
        // to make any changes in the grammar.  Consider changing in 6.1.
        if (isElement) {
          // 11058, 'Cannot constrain properties on Elements since Elements only have Values', 'Unknown', 'errorNumber'
          logger.error('11058');
        }
        const match = this._currentDef.fields.find(f => f.effectiveIdentifier && f.effectiveIdentifier.equals(field.identifier));
        if (match) {
          field.constraints.forEach(c => match.addConstraint(c));
        }
        else {
          const secondMatch = this._currentDef.fields.find(f => f.identifier && f.identifier.equals(field.identifier));
          if (secondMatch) {
            // 11042, 'Constraint refers to previous identifier', 'Unknown', 'errorNumber'
            logger.error('11042');
          }
          else {
            this.addFieldToCurrentDef(field);
          }
        }
      }
    }
  }

  // addFieldToCurrentDef contains special logic to handle IncompleteValues.  If an IncompleteValue matches an already
  // existing field, it will just apply the constraints to that field.  If no matching field is found, it will be pushed
  // to the fields as-is -- and when fields are added after, they will be checked against any IncompleteValues
  // and resolved as appropriate.  Note that constraints on the _Value can also be added by passing an IncompleteValue
  // matching the value's identifier to this function.
  addFieldToCurrentDef(field) {
    if (field instanceof IncompleteValue) {
      // Search through the current def's value and fields to see if this matches an already existing value or field
      for (const el of [this._currentDef.value, ...this._currentDef.fields]) {
        if (el && el.identifier && el.identifier.equals(field.identifier)) {
          // Found a match!  Just add the constraints to the existing one!
          for (const cst of field.constraints) {
            el.addConstraint(cst);
          }
          return;
        }
      }
      // If we got here, we didn't find anything -- but if it's an Entry field, resolve it to a 1..1 IdentifiableValue
      if (field.identifier.isEntryKeyWord) {
        const entryField = new IdentifiableValue(field.identifier).withMinMax(1, 1);
        for (const cst of field.constraints) {
          entryField.addConstraint(cst);
        }
        this._currentDef.addField(entryField);
        return;
      }
    }

    // Search through the fields to see if there are any IncompleteValues we can now resolve
    for (let i=0; i < this._currentDef.fields.length; i++) {
      const el = this._currentDef.fields[i];
      if (el instanceof IncompleteValue && field.identifier && el.identifier.equals(field.identifier)) {
        // Found a match!  Add the constraints to the field and replace the IncompleteValue
        for (const cst of el.constraints) {
          field.addConstraint(cst);
        }
        this._currentDef.fields[i] = field;
        return;
      }
    }
    this._currentDef.addField(field);
  }

  processCountAndTypes(countCtx, typeCtxArr) {
    let min, max;
    if (countCtx) {
      [min, max] = this.getMinMax(countCtx);
    }
    if (typeCtxArr.length > 1) {
      const value = new ChoiceValue();
      for (const t of typeCtxArr) {
        value.addOption(this.processType(t, 1, 1));
      }
      if (typeof min !== 'undefined') {
        value.setMinMax(min, max);
      }
      return value;
    }
    return this.processType(typeCtxArr[0], min, max);
  }

  processCountAndTypesForValue(ctx) {
    const typeCtxArr = ctx.valueType();
    if (typeCtxArr.length > 1 || ctx.KW_ONLY()) {
      const value = new ChoiceValue();
      for (const t of typeCtxArr) {
        value.addOption(this.processType(t, 1, 1));
      }
      value.setMinMax(1,1);
      return value;
    }
    let match = typeCtxArr[0].getText().match(/\d+\.\.(\d+|\*)/);
    if (match) {
      // 11043, 'Value should not declare cardinality', 'Remove cardinality from value declaration', 'errorNumber'
      logger.error('11043');
    }
    else if (typeCtxArr[0].getText().length == 0) {
      // 11044, 'Missing a value element', 'Unknown', 'errorNumber'
      logger.error('11044');
    }
    else {
      return this.processType(typeCtxArr[0], 1, 1);
    }
  }


  processType(ctx, min, max) {
    let value;
    if (ctx.simpleOrFQName() || (typeof ctx.specialWord === 'function' && ctx.specialWord())) {
      const idText = ctx.simpleOrFQName() ? ctx.simpleOrFQName().getText() : ctx.specialWord().getText();
      const identifier = this.resolveToIdentifier(idText);
      if (identifier.isValueKeyWord) {
        value = new IncompleteValue(identifier);
      } else {
        value = new IdentifiableValue(identifier);
      }
    }  else if (ctx.tbd()) {
      if (ctx.tbd().STRING()) {
        value = new TBD(stripDelimitersFromToken(ctx.tbd().STRING()));
      } else {
        value = new TBD();
      }
    } else if (typeof ctx.primitive === 'function' && ctx.primitive()) {
      value = new IdentifiableValue(new PrimitiveIdentifier(ctx.getText()));
    }
    else if (typeof ctx.elementWithConstraint === 'function' && ctx.elementWithConstraint()) {
      value = this.processElementWithConstraint(ctx.elementWithConstraint());
    }
    if (typeof min !== 'undefined') {
      value.setMinMax(min, max);
    }
    return value;
  }

  resolveValueSetForVSConstraint(vsConstraint) {
    let vs = vsConstraint.valueset().getText();
    if (vsConstraint.valueset().PATH_URL()) {
      const [path, name] =  vsConstraint.valueset().PATH_URL().getText().split('/', 2);
      const resolution = this._preprocessedData.resolvePath(path, this._currentNs, ...this._usesNs);
      if (resolution.error) {
        //11047, 'Resolution error ${errorText} ' ,  'Unknown' , 'errorNumber'
        logger.error({errorText : resolution.error }, '11047');
      }
      if (resolution.url) {
        vs = `${resolution.url}/${name}`;
      }
    } else if (vsConstraint.valueset().simpleName()) {
      const name = vsConstraint.valueset().simpleName().getText();
      // Look it up in this namespace's value set definitions
      let found = false;
      for (const ns of [this._currentNs, ...this._usesNs]) {
        const vsDef = this._specs.valueSets.find(ns, name);
        if (typeof vsDef !== 'undefined') {
          vs = vsDef.url;
          found = true;
          break;
        }
      }
      if (!found) {
        //11003 , 'Unable to resolve value set reference: ${valueSet}' , 'Invalid value set reference  double check the name and the path', 'errorNumber'
        logger.error({valueSet:  name}, '11003' );
        vs = `urn:tbd:${name}`;
      }
    } else if (vsConstraint.valueset().tbd()) {
      if (vsConstraint.valueset().tbd().STRING()) {
        vs = `urn:tbd:${stripDelimitersFromToken(vsConstraint.valueset().tbd().STRING())}`;
      } else {
        vs = 'urn:tbd';
      }
    }
    return vs;
  }

  resolveBindingStrengthForVSConstraint(vsConstraint) {
    if (vsConstraint.bindingStrength()) {
      const bindingCtx = vsConstraint.bindingStrength();
      if (bindingCtx.KW_REQUIRED()) {
        return REQUIRED;
      } else if (bindingCtx.KW_PREFERRED()) {
        return PREFERRED;
      } else if (bindingCtx.KW_EXAMPLE()) {
        return EXAMPLE;
      } else if (bindingCtx.KW_EXTENSIBLE()) {
        return EXTENSIBLE;
      }
      // This error should never occur unless the ANTLR grammar changes
      //11004 , 'Unsupported binding strength: ${bindingStrength}. Defaulting to REQUIRED' , 'Binding strength has to be one of the following: -mus be' (required) -mus be X if covered' (extensible) should be' (preferred) could be' (optional)', 'errorNumber'
      logger.error({ bindingStregth:  bindingCtx.getText() }, '11004' );
    }
    return REQUIRED;
  }

  processCodeOrFQCode(ctx) {
    var code;
    if (ctx.fullyQualifiedCode()) {
      code = this.processFullyQualifiedCode(ctx.fullyQualifiedCode());
    } else if (ctx.code()) {
      code = new Concept(null, ctx.code().CODE().getText().substr(1).trim()); // substr to skip the '#'
      if (ctx.code().STRING()) {
        code.display = stripDelimitersFromToken(ctx.code().STRING());
      }
    }
    return code;
  }

  processFullyQualifiedCode(ctx) {
    if (ctx.ALL_CAPS()) {
      let cs;
      const csAlias = ctx.ALL_CAPS().getText();
      const resolution = this._preprocessedData.resolveVocabulary(csAlias, this._currentNs, ...this._usesNs);
      if (resolution.error) {
        //11047, 'Resolution error ${errorText} ' ,  'Unknown' , 'errorNumber'
        logger.error({errorText : resolution.error }, '11047');
        cs = resolution.url ? resolution.url : csAlias;
      } else {
        cs = resolution.url;
      }
      const code = ctx.code().CODE().getText().substr(1).trim(); // substr to skip the '#'
      const concept = new Concept(cs, code);
      if (ctx.code().STRING()) {
        concept.display = stripDelimitersFromToken(ctx.code().STRING());
      }
      return concept;
    } else if (ctx.tbdCode()) {
      const concept = new Concept('urn:tbd', 'TBD');
      if (ctx.tbdCode().STRING()) {
        concept.display = stripDelimitersFromToken(ctx.tbdCode().STRING());
      }
      return concept;
    }
  }

  getMinMax(countCtx) {
    const cards = countCtx.WHOLE_NUMBER();
    if (cards[0]) {
      const min = parseInt(cards[0].getText(), 10);
      var max;
      if (cards.length == 2) {
        max = parseInt(cards[1].getText(), 10);
      }
      return [min, max];
    }
    // No card, but return [undefined, undefined] so spread assignment works
    return [undefined, undefined];
  }

  resolveToIdentifierOrTBD(ctx) {
    if (ctx.simpleOrFQName()) {
      return this.resolveToIdentifier(ctx.simpleOrFQName().getText());
    } else if (typeof ctx.primitive === 'function' && ctx.primitive()) {
      return new PrimitiveIdentifier(ctx.primitive().getText());
    } else if (ctx.tbd() && ctx.tbd().STRING()) {
      return new TBD(stripDelimitersFromToken(ctx.tbd().STRING()));
    } else {
      return new TBD();
    }
  }

  resolveToIdentifier(ref) {
    const lastDot = ref.lastIndexOf('.');
    if (lastDot != -1) {
      const ns = ref.substr(0, lastDot);
      const name = ref.substr(lastDot+1);
      const resolution = this.resolveDefinition(name, ns);
      if (resolution.error) {
        //11047, 'Resolution error ${errorText} ' ,  'Unknown' , 'errorNumber'
        logger.error({errorText : resolution.error }, '11047');
      }
      return new Identifier(ns, name);
    }
    // No specified namespace -- is either special word (e.g. _Value), primitive, or something we need to resolve
    if (ref.startsWith('_')) {
      return new Identifier('', ref);
    } else if (ref === 'Entry' || ref === 'Value') {
      // "Fix" the legacy keyword to the new _-based keyword
      return new Identifier('', `_${ref}`);
    } else if (PRIMITIVES.includes(ref)) {
      return new PrimitiveIdentifier(ref);
    }
    var ns;
    const resolution = this.resolveDefinition(ref, this._currentNs, ...this._usesNs);
    if (resolution.error) {
      //11047, 'Resolution error ${errorText} ' ,  'Unknown' , 'errorNumber'
      logger.error({errorText : resolution.error }, '11047');
      ns = resolution.namespace ? resolution.namespace: 'unknown';
    } else {
      ns = resolution.namespace;
    }
    return new Identifier(ns, ref);
  }

  resolveDefinition(name, ...namespace) {
    // First try in the specifications (in case specifications were passed into the listener)
    const result = {};
    const foundNamespaces = [];
    for (const ns of namespace) {
      if (this._specs._dataElements.find(ns, name)) {
        if (!result.hasOwnProperty('namespace')) {
          result['namespace'] = ns;
        }
        foundNamespaces.push(ns);
      }
    }
    if (foundNamespaces.length > 0) {
      // We found it in specifications, but should be sure it's not also lurking in other namespaces that were preprocessed
      const otherNamespaces = namespace.filter(ns => foundNamespaces.some(ns2 => ns != ns2));
      for (const otherNS of otherNamespaces) {
        const resolution = this._preprocessedData.resolveDefinition(name, otherNS);
        if (typeof resolution.namespace !== 'undefined') {
          foundNamespaces.push(resolution.ns);
        }
      }
      if (foundNamespaces.length > 1) {
        result['error'] = `Found conflicting definitions for ${name} in multiple namespaces: ${foundNamespaces}`;
      }
      return result;
    }
    // Didn't find it in specifications, so use the preprocessed data
    return this._preprocessedData.resolveDefinition(name, ...namespace);
  }

  pushCurrentDefinition() {
    if (this._specs.dataElements.findByIdentifier(this._currentDef.identifier) != null) {
      //11033 , 'Name ${elementEntryName} already exists.' , 'The entity or element name already exists within the namespace and the most recently defined element or entry name will be used.', 'errorNumber'
      logger.error( {elementEntryName : this._currentDef.identifier.name}, '11033');
    }
    this._specs.dataElements.add(this._currentDef, this._currentFile);
  }
}

function stripDelimitersFromToken(tkn) {
  const str = tkn.getText();
  // TODO: Also fix escaped double-quotes, but right now, the parser seems to be screwing those up.
  return str.substr(1,str.length -2);
}

function trimLines(str) {
  // The way CIMPL authors often indent their definitions, multi-line descriptions may have indented white space on
  // each new line.  We really don't want that, so we need to trim every line.
  if (typeof str === 'string') {
    return str.split('\n').map(s => s.trim()).join('\n');
  }
  return str;
}

module.exports = {DataElementImporter, setLogger};
