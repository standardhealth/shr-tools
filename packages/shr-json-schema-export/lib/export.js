// export SHR specification content as a hierarchy in JSON format
// Author: John Gibson
// Derived from export SHR specification content as a hierarchy in JSON format by Greg Quinn

const bunyan = require('bunyan');
const {Identifier, IdentifiableValue, RefValue, ChoiceValue, TBD, IncompleteValue, ValueSetConstraint, IncludesCodeConstraint, IncludesTypeConstraint, CodeConstraint, CardConstraint, TypeConstraint, INHERITED, OVERRIDDEN, DataElement, Namespace, DataElementSpecifications, Specifications, BooleanConstraint, MODELS_INFO, PrimitiveIdentifier, PRIMITIVE_NS} = require('shr-models');

const CODE = new PrimitiveIdentifier('code');

var rootLogger = bunyan.createLogger({name: 'shr-json-schema-export'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}


/**
 * Converts a group of specifications into JSON Schema.
 * @param {Specifications} expSpecifications - a fully expanded Specifications object.
 * @param {string} baseSchemaURL - the root URL for the schema identifier.
 * @param {string=} flat - if true then the generated schema will not be hierarchical. Defaults to false.
 * @return {Object.<string, Object>} A mapping of schema ids to JSON Schema definitions.
 */
function exportToJSONSchema(expSpecifications, baseSchemaURL, flat = false) {
  const namespaceResults = {};
  for (const ns of expSpecifications.namespaces.all) {
    if (flat) {
      const { schemaId, schema } = flatNamespaceToSchema(ns, expSpecifications.dataElements, baseSchemaURL);
      namespaceResults[schemaId] = schema;
    } else {
      const { schemaId, schema } = namespaceToSchema(ns, expSpecifications.dataElements, baseSchemaURL);
      namespaceResults[schemaId] = schema;
    }
  }

  return namespaceResults;
}

/**
 * Converts a namespace into a JSON Schema.
 * @param {Namespace} ns - the namespace of the schema.
 * @param {DataElementSpecifications} dataElementsSpecs - the elements in the namespace.
 * @param {string} baseSchemaURL - the root URL for the schema identifier.
 * @return {{schemaId: string, schema: Object}} The schema id and the JSON Schema definition.
 */
function namespaceToSchema(ns, dataElementsSpecs, baseSchemaURL) {
  const dataElements = dataElementsSpecs.byNamespace(ns.namespace);
  const schemaId = `${baseSchemaURL}/${namespaceToURLPathSegment(ns.namespace)}`;
  let schema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    id: schemaId,
    title: "TODO: Figure out what the title should be.",
    definitions: {}
  };
  const entryRef = makeRef(new Identifier('shr.base', 'Entry'), ns, baseSchemaURL);
  if (ns.description) {
    schema.description = ns.description;
  }

  const defs = dataElements.sort(function(l,r) {return l.identifier.name.localeCompare(r.identifier.name);});
  const entryRefs = [];
  for (const def of defs) {
    logger.debug('Exporting element %s', def.identifier);
    let schemaDef = {
      type: 'object',
      properties: {}
    };
    let wholeDef = schemaDef;
    const tbdParentDescriptions = [];
    let requiredProperties = [];
    if (def.isEntry || def.basedOn.length) {
      wholeDef = { allOf: [] };
      let hasEntryParent = false;
      for (const supertypeId of def.basedOn) {
        if (supertypeId instanceof TBD) {
          if (supertypeId.text) {
            tbdParentDescriptions.push(supertypeId.text);
          } else {
            tbdParentDescriptions.push('TBD');
          }
        } else {
          const parent = dataElementsSpecs.findByIdentifier(supertypeId);
          if (!parent) {
            logger.error('Could not find definition for %s which is a supertype of %s', supertypeId, def);
          } else {
            hasEntryParent = hasEntryParent || parent.isEntry;
          }
          wholeDef.allOf.push({ $ref:  makeRef(supertypeId, ns, baseSchemaURL)});
        }
      }
      if (def.isEntry && (!hasEntryParent)) {
        wholeDef.allOf.splice(0, 0, { $ref: entryRef });
      }
      wholeDef.allOf.push(schemaDef);
    }

    const tbdFieldDescriptions = [];
    if (def.value) {
      if (def.value.inheritance !== INHERITED) {
        let { value, required, tbd } = convertDefinition(def.value, dataElementsSpecs, ns, baseSchemaURL);
        if (required) {
          requiredProperties.push('Value');
        }
        schemaDef.properties.Value = value;
        if (tbd) {
          schemaDef.properties.Value.description = def.value.text ? ('TBD: ' + def.value.text) : tbdValueToString(def.value);
        }
      }
    }
    if (def.fields.length) {
      for (const field of def.fields) {
        if (!(field instanceof TBD) && !isValidField(field) || (field.inheritance === INHERITED)) {
          continue;
        }
        const card = field.effectiveCard;
        if (card && card.isZeroedOut) {
          continue;
        }
        let {value, required, tbd} = convertDefinition(field, dataElementsSpecs, ns, baseSchemaURL);
        if (tbd) {
          tbdFieldDescriptions.push(tbdValueToString(field));
          continue;
        }

        const qualifiedName = identifierToNormalizedPath(field.identifier);
        schemaDef.properties[qualifiedName] = value;
        if (required) {
          requiredProperties.push(qualifiedName);
        }
      }
    } else if (!def.value) {
      schemaDef.type = 'object';
      schemaDef.description = 'Empty DataElement?';
    }
    let descriptionList = [];
    if (def.description) {
      descriptionList.push(def.description);
    }
    if (def.concepts.length) {
      wholeDef.concepts = def.concepts.map((concept) => makeConceptEntry(concept));
    }
    if (tbdParentDescriptions.length) {
      tbdParentDescriptions[0] = 'TBD Parents: ' + tbdParentDescriptions[0];
      descriptionList = descriptionList.concat(tbdParentDescriptions);
    }
    if (tbdFieldDescriptions.length) {
      tbdFieldDescriptions[0] = 'TBD Fields: ' + tbdFieldDescriptions[0];
      descriptionList = descriptionList.concat(tbdFieldDescriptions);
    }
    if (descriptionList.length) {
      wholeDef.description = descriptionList.join('\n');
    }
    if (requiredProperties.length) {
      schemaDef.required = requiredProperties;
    }

    schema.definitions[def.identifier.name] = wholeDef;
    if (def.isEntry && (!def.isAbstract)) {
      entryRefs.push({ $ref:  makeRef(def.identifier, ns, baseSchemaURL)});
    }
  }

  if (entryRefs.length) {
    schema.type = 'object';
    schema.anyOf = entryRefs;
  }
  return { schemaId, schema };
}

/**
 * Converts a namespace into a flat JSON Schema.
 * @param {Namespace} ns - the namespace of the schema.
 * @param {DataElementSpecifications} dataElementsSpecs - the elements in the namespace.
 * @param {string} baseSchemaURL - the root URL for the schema identifier.
 * @return {{schemaId: string, schema: Object}} The schema id and the JSON Schema definition.
 */
function flatNamespaceToSchema(ns, dataElementsSpecs, baseSchemaURL) {
  const dataElements = dataElementsSpecs.byNamespace(ns.namespace);
  const schemaId = `${baseSchemaURL}/${namespaceToURLPathSegment(ns.namespace)}`;
  let schema = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    id: schemaId,
    title: "TODO: Figure out what the title should be.",
    definitions: {}
  };
  const expandedEntry = makeExpandedEntryDefinitions(ns, baseSchemaURL);
  if (ns.description) {
    schema.description = ns.description;
  }

  const defs = dataElements.sort(function(l,r) {return l.identifier.name.localeCompare(r.identifier.name);});
  const entryRefs = [];
  for (const def of defs) {
    let schemaDef = {
      type: 'object',
      properties: {}
    };
    let wholeDef = schemaDef;
    const tbdParentDescriptions = [];
    let requiredProperties = [];
    if (def.isEntry) {
      requiredProperties = expandedEntry.required.slice();
    }

    const tbdFieldDescriptions = [];
    if (def.value) {
      let { value, required, tbd } = convertDefinition(def.value, dataElementsSpecs, ns, baseSchemaURL);
      if (required) {
        requiredProperties.push('Value');
      }
      schemaDef.properties.Value = value;
      if (tbd) {
        schemaDef.properties.Value.description = def.value.text ? ('TBD: ' + def.value.text) : tbdValueToString(def.value);
      }
    }
    if (def.fields.length) {
      for (const field of def.fields) {
        if (!(field instanceof TBD) && !isValidField(field)) {
          continue;
        }
        const card = field.effectiveCard;
        if (card && card.isZeroedOut) {
          continue;
        }
        let {value, required, tbd} = convertDefinition(field, dataElementsSpecs, ns, baseSchemaURL);
        if (tbd) {
          tbdFieldDescriptions.push(tbdValueToString(field));
          continue;
        }

        const qualifiedName = identifierToNormalizedPath(field.identifier);
        schemaDef.properties[qualifiedName] = value;
        if (required && (requiredProperties.indexOf(qualifiedName) === -1)) {
          requiredProperties.push(qualifiedName);
        }
      }
      if (def.isEntry) {
        for (const name in expandedEntry.properties) {
          if (!(name in schemaDef.properties)) {
            schemaDef.properties[name] = expandedEntry.properties[name];
          }
        }
      }
    } else if (!def.value) {
      schemaDef.type = 'object';
      schemaDef.description = 'Empty DataElement?';
    }
    let descriptionList = [];
    if (def.description) {
      descriptionList.push(def.description);
    }
    if (def.concepts.length) {
      wholeDef.concepts = def.concepts.map((concept) => makeConceptEntry(concept));
    }
    if (tbdParentDescriptions.length) {
      tbdParentDescriptions[0] = 'TBD Parents: ' + tbdParentDescriptions[0];
      descriptionList = descriptionList.concat(tbdParentDescriptions);
    }
    if (tbdFieldDescriptions.length) {
      tbdFieldDescriptions[0] = 'TBD Fields: ' + tbdFieldDescriptions[0];
      descriptionList = descriptionList.concat(tbdFieldDescriptions);
    }
    if (descriptionList.length) {
      wholeDef.description = descriptionList.join('\n');
    }
    if (requiredProperties.length) {
      schemaDef.required = requiredProperties;
    }

    schema.definitions[def.identifier.name] = wholeDef;
    if (def.isEntry && (!def.isAbstract)) {
      entryRefs.push({ $ref:  makeRef(def.identifier, ns, baseSchemaURL)});
    }
  }

  if (entryRefs.length) {
    schema.type = 'object';
    schema.anyOf = entryRefs;
  }
  return { schemaId, schema };
}

/**
 * Convert an Identifier into a qualified SHR name with /s instead of .s.
 *
 * @param {Identifier} identifier - the identifier to convert.
 * @return string - The converted identifier.
 */
function identifierToNormalizedPath(identifier) {
  return namespaceToURLPathSegment(identifier.namespace) + '/' + identifier.name;
}

function namespaceToURLPathSegment(namespace) {
  return namespace.replace(/\./g, '/');
}

function isValidField(field) {
  if (field instanceof ChoiceValue) {
    logger.error('ERROR: Ignoring field defined as a choice', JSON.stringify(field, null, 2));
    return false;
  }
  if (!(field.identifier)) {
    logger.error('ERROR: Ignoring name-less field: ', JSON.stringify(field, null, 2));
    return false;
  }
  if (field.identifier.name === 'Value') {
    logger.error('ERROR: Ignoring restricted field name: Value', JSON.stringify(field, null, 2));
    return false;
  }
  return true;
}

function convertDefinition(valueDef, dataElementsSpecs, enclosingNamespace, baseSchemaURL) {
  let listValue = null;
  let value = {};
  const fullDef = valueDef.identifier ? dataElementsSpecs.findByIdentifier(valueDef.identifier) : null;
  const card = valueDef.effectiveCard;
  let required = false;
  let isList = false;
  let valueIsPrimitive = false;
  if (card) {
    isList = card.isList;
    if (!isList && fullDef && fullDef.value) {
      const cardConstraints = fullDef.value.constraintsFilter.own.card.constraints;
      isList = cardConstraints.some((oneCard) => oneCard.isList);
    }
    if (isList) {
      listValue = { type: 'array' };
      if (card.min != null) {
        listValue.minItems = card.min;
        if (card.min) {
          required = true;
        }
      }
      if (card.max) {
        listValue.maxItems = card.max;
      }
      listValue.items = value;
    } else if (card.min) {
      required = true;
    }
  }

  if (valueDef instanceof ChoiceValue) {
    const refOptions = [];
    const normalOptions = [];
    for (const option of valueDef.options) {
      if (option instanceof RefValue) {
        refOptions.push(option);
      } else {
        normalOptions.push(option);
      }
    }
    value.anyOf = [];
    if (refOptions.length) {
      value.anyOf.push(makeShrRefObject(refOptions, baseSchemaURL));
    }
    for (const option of normalOptions) {
      const { value: childValue } = convertDefinition(option, dataElementsSpecs, enclosingNamespace, baseSchemaURL);
      value.anyOf.push(childValue);
    }
    if (value.anyOf.length == 1) {
      const single = value.anyOf[0];
      delete value.anyOf;
      for (const ent in single) {
        value[ent] = single[ent];
      }
    }
  } else if (valueDef instanceof RefValue) {
    // TODO: What should the value of EntryType be? The schema URL may not be portable across data types.
    value.type = 'object';
    value.properties = {
      ShrId: { type: 'string' },
      EntryType: { type: 'string', enum: [`${baseSchemaURL}/${namespaceToURLPathSegment(valueDef.identifier.namespace)}#/definitions/${valueDef.identifier.name}`] },
      EntryId: { type: 'string' }
    };
    value.required = ['ShrId', 'EntryType', 'EntryId'];
  } else if (valueDef instanceof IdentifiableValue) {
    const id = valueDef.effectiveIdentifier;
    if (id.isPrimitive) {
      valueIsPrimitive = true;
      switch (id.name) {
        case 'boolean':
        case 'string':
        case 'integer':
          value.type = id.name;
          break;
        case 'unsignedInt':
          value.type = 'integer';
          value.minimum = 0;
          break;
        case 'positiveInt':
          value.type = 'integer';
          value.minimum = 1;
          break;
        case 'decimal':
          value.type = 'number';
          break;
        case 'uri':
          value.type = 'string';
          value.format = 'uri';
          break;
        case 'base64Binary':
          value.type = 'string';
          break;
        case 'dateTime':
          value.type = 'string';
          value.format = 'date-time';
          break;
        case 'instant':
        case 'date':
        case 'time':
          value.type = 'string';
          break;
        case 'code':
          value.type = 'string';
          isCode = true;
          break;
        case 'oid':
        case 'id':
        case 'markdown':
        case 'xhtml':
          value.type = 'string';
          break;
      }
    } else {
      const typeRef = makeRef(valueDef.identifier, enclosingNamespace, baseSchemaURL);
      if (valueDef.inheritance !== OVERRIDDEN) {
        value.allOf = [{ $ref: typeRef}];
      }
    }
  } else if (valueDef instanceof TBD) {
    let ret = value;
    if (listValue) {
      delete listValue.items;
      ret = listValue;
    }
    return {value: ret, required: required, tbd: true};
  } else if (valueDef instanceof IncompleteValue) {
    logger.error('Unsupported Incomplete');
  } else {
    logger.error('Unknown type for value "%s"', valueDef.constructor.name);
  }

  const constraintStructure = { $self: []};
  const includesCodeLists = {};
  for (const constraint of valueDef.constraints) {
    if (constraint.onValue) {
      logger.error('Constraint should not be on the value in an expanded object model "%s". Ignoring constraint.', JSON.stringify(constraint, null, 2));
      continue;
    }

    const {path: constraintPath, target: constraintTarget } = extractConstraintPath(constraint, valueDef, dataElementsSpecs);
    if (!constraintPath) {
      continue;
    } else if (!constraintTarget) {
      // Cardinality constraints without a path are not useful (except if you're really a list, we'll handle that later).
      if (constraint instanceof CardConstraint) {
        continue;
      }
    }

    let currentStruct = constraintStructure;
    for (const path of constraintPath) {
      if (!currentStruct[path]) {
        currentStruct[path] = { $self: []};
      }
      currentStruct = currentStruct[path];
    }
    currentStruct.$self.push({ constraint, constraintPath, constraintTarget });
  }

  let allOf = [{properties: {}}];
  if (Object.keys(value).length) {
    allOf.push(value);
  }
  function pruneExpandedStructure (currentAllOf) {
    for (let i = currentAllOf.length - 1; i >= 0; i -= 1) {
      const allOfEntry = currentAllOf[i];
      if (allOfEntry.constraints && (!allOfEntry.constraints.length)) {
        delete allOfEntry.constraints;
      }
      if (allOfEntry.properties) {
        if (!Object.keys(allOfEntry.properties).length) {
          delete allOfEntry.properties;
        } else {
          for (const path in allOfEntry.properties) {
            if (allOfEntry.properties[path].allOf) {
              pruneExpandedStructure(allOfEntry.properties[path].allOf);
              switch (allOfEntry.properties[path].allOf.length) {
              case 1:
                allOfEntry.properties[path] = allOfEntry.properties[path].allOf[0];
                break;
              case 0:
                delete allOfEntry.properties[path].allOf;
                break;
              }
            }
            if (!Object.keys(allOfEntry.properties[path]).length) {
              delete allOfEntry.properties[path];
            }
          }
          if (!Object.keys(allOfEntry.properties).length) {
            delete allOfEntry.properties;
          }
        }
      }
      if (allOfEntry.allOf && allOfEntry.allOf.length === 1) {
        for (const key in allOfEntry.allOf[0]) {
          if (key !== 'allOf') {
            allOfEntry[key] = allOfEntry.allOf[0][key];
          }
        }
        delete allOfEntry.allOf;
      }
      if (!Object.keys(allOfEntry).length) {
        currentAllOf.splice(i, 1);
      }
    }
  }

  if (valueDef.constraints && valueDef.constraints.length) {
    function constraintDfs (node, currentAllOf) {
      for (const path in node) {
        if (path !== '$self') {
          if (!currentAllOf[0].properties[path]) {
            currentAllOf[0].properties[path] = {
              allOf: [
                { properties: {} }
              ]
            };
          }
          constraintDfs(node[path], currentAllOf[0].properties[path].allOf);
        } else {
          currentAllOf[0].constraints = [];
          let includesConstraints = null;
          let includesCodeConstraints = null;
          for (const constraintInfo of node.$self) {
            if (constraintInfo.constraint instanceof TypeConstraint) {
              currentAllOf.push({$ref: makeRef(constraintInfo.constraint.isA, enclosingNamespace, baseSchemaURL)});
            } else if (constraintInfo.constraint instanceof IncludesTypeConstraint) {
              if (!includesConstraints) {
                includesConstraints = {refs: [], types: [], min: 0, max: 0};
              }
              includesConstraints.min += constraintInfo.constraint.card.min;
              if (includesConstraints.max !== null) {
                if (constraintInfo.constraint.card.isMaxUnbounded) {
                  includesConstraints.max = null;
                } else {
                  includesConstraints.max += constraintInfo.constraint.card.max;
                }
              }

              if (constraintInfo.constraint.isA instanceof RefValue) {
                includesConstraints.refs.push(constraintInfo.constraint);
              } else {
                includesConstraints.types.push(constraintInfo.constraint);
              }
            } else if (constraintInfo.constraint instanceof IncludesCodeConstraint) {
              if (!includesCodeConstraints) {
                includesCodeConstraints = [];
              }
              includesCodeConstraints.push(constraintInfo.constraint);
            } else if (constraintInfo.constraint instanceof ValueSetConstraint) {
              if (currentAllOf[0].valueSet) {
                logger.error(`Multiple valueset constraints found on a single element %s.`, constraintInfo.constraint);
                continue;
              }
              currentAllOf[0].valueSet = {
                uri: constraintInfo.constraint.valueSet,
                strength: constraintInfo.constraint.bindingStrength
              };
            } else if (constraintInfo.constraint instanceof CodeConstraint) {
              // Maybe TODO: For entry elements this can have some level of enforcement by ANDing the exact contents of the EntryType field with an enum for this value/field.
              if (currentAllOf[0].code) {
                logger.error(`Multiple code constraints found on a single element %s.`, constraintInfo.constraint);
                continue;
              }
              currentAllOf[0].code = makeConceptEntry(constraintInfo.constraint.code);
            } else if (constraintInfo.constraint instanceof BooleanConstraint) {
              currentAllOf.push({ enum: [constraintInfo.constraint.value]});
            } else {
              currentAllOf[0].constraints.push(constraintInfo.constraint);
            }
          }

          if (includesConstraints) {
            currentAllOf[0].includesTypes = [];
            const includesTypesArrayDef = {
              type: 'array',
              minItems: includesConstraints.min,
              items: { anyOf: [] }
            };
            currentAllOf.push(includesTypesArrayDef);
            if (includesConstraints.max !== null) {
              includesTypesArrayDef.maxItems = includesConstraints.max;
            }
            if (includesConstraints.refs.length) {
              includesTypesArrayDef.items.anyOf.push(makeShrRefObject(includesConstraints.refs.map((ref) => ref.isA), baseSchemaURL));
              for (const ref of includesConstraints.refs) {
                const includesType = {
                  items: `ref(${makeShrDefinitionURL(ref.isA, baseSchemaURL)})`,
                  minItems: ref.card.min
                };
                if (!ref.card.isMaxUnbounded) {
                  includesType.maxItems = ref.card.max;
                }
                currentAllOf[0].includesTypes.push(includesType);
              }
            }
            for (const val of includesConstraints.types) {
              includesTypesArrayDef.items.anyOf.push({ $ref: makeRef(val.isA, enclosingNamespace, baseSchemaURL) });
              const includesType = {
                items: makeShrDefinitionURL(val.isA, baseSchemaURL),
                minItems: val.card.min
              };
              if (!val.card.isMaxUnbounded) {
                includesType.maxItems = val.card.max;
              }
              currentAllOf[0].includesTypes.push(includesType);
            }
          }
          if (includesCodeConstraints) {
            currentAllOf[0].includesCodes = includesCodeConstraints.map((it) => makeConceptEntry(it.code).code);
          }
        }
      }
    }
    constraintDfs(constraintStructure, allOf);
    if (isList) {
      for (const includesConstraintDef of allOf) {
        if (includesConstraintDef.type === 'array') {
          if ((listValue.minItems !== null) && (listValue.minItems !== undefined)) {
            listValue.minItems = Math.max(listValue.minItems, includesConstraintDef.minItems);
          } else {
            listValue.minItems = includesConstraintDef.minItems;
          }
          // TODO: Support 0..0
          if (listValue.maxItems == null) {
            listValue.maxItems = includesConstraintDef.maxItems;
          } else {
            if (includesConstraintDef.maxItems != null) {
              listValue.maxItems = Math.min( listValue.maxItems, includesConstraintDef.maxItems);
            }
          }
          listValue.includesTypes = allOf[0].includesTypes;
          delete allOf[0].includesTypes;

          allOf.push(includesConstraintDef.items);
          delete includesConstraintDef.items;
          delete includesConstraintDef.maxItems;
          delete includesConstraintDef.minItems;
          delete includesConstraintDef.type;
          break;
        }
      }
    }

    if (valueIsPrimitive) {
      pruneExpandedStructure(allOf);
      if (value !== allOf[0]) {
        for (const prop in allOf[0]) {
          value[prop] = allOf[0][prop];
          delete allOf[0][prop];
        }
      }
    }
  }
  pruneExpandedStructure(allOf);
  function sanityCheckFinalStructure (currentAllOf) {
    for (let i = currentAllOf.length - 1; i >= 0; i -= 1) {
      const allOfEntry = currentAllOf[i];
      if (allOfEntry.constraints) {
        for (const constraint of allOfEntry.constraints) {
          logger.error('Internal error: unhandled constraint %s', JSON.stringify(constraint, null, 2));
        }
      }
      if (allOfEntry.properties) {
        for (const path in allOfEntry.properties) {
          if (allOfEntry.properties[path].allOf) {
            sanityCheckFinalStructure(allOfEntry.properties[path].allOf);
          } else {
            sanityCheckFinalStructure([allOfEntry.properties[path]]);
          }
        }
      }
    }
  }
  sanityCheckFinalStructure(allOf);

  if (allOf.length) {
    const allOfDef = allOf.length === 1 ? allOf[0] : { allOf: allOf };
    if (listValue) {
      listValue.items = allOfDef;
    } else {
      value = allOfDef;
    }
  }

  if (Object.keys(includesCodeLists).length) {
    value.codes = includesCodeLists;
  }

  return {value: listValue ? listValue : value, required, tbd: false};
}

function tbdValueToString(tbd) {
  if (tbd.text) {
    return tbd.text;
  } else {
    const card = tbd.effectiveCard;
    if (card) {
      return 'TBD with cardinality ' + card;
    } else {
      return 'TBD';
    }
  }
}

function makeRef(id, enclosingNamespace, baseSchemaURL) {
  if (id.namespace === enclosingNamespace.namespace) {
    return '#/definitions/' + id.name;
  } else {
    return makeShrDefinitionURL(id, baseSchemaURL);
  }
}

function makeShrRefObject(refs, baseSchemaURL) {
  return {
    type: 'object',
    properties: {
      ShrId: { type: 'string' },
      EntryId: { type: 'string' },
      EntryType: {
        type: 'string',
        enum: refs.map((ref) => makeShrDefinitionURL(ref.identifier, baseSchemaURL))
      }
    },
    required: ['ShrId', 'EntryType', 'EntryId']
  };
}

function makeShrDefinitionURL(id, baseSchemaURL) {
  return `${baseSchemaURL}/${namespaceToURLPathSegment(id.namespace)}#/definitions/${id.name}`;
}

/**
 * Translates a constraint path into a valid path for the JSON Schema.
 * @param {Constraint} constraint - the constraint.
 * @param {IdentifiableValue} valueDef - the identifiable value that contains the constraint.
 * @param {DataElementSpecifications} dataElementSpecs - the elements in the namespace.
 * @return {{path: (Array<string>|undefined), target: (DataElement|undefined)}} - The target of the constraint and the extracted path (qualified if necessary). Both properties will be null if there was an error.
 */
function extractConstraintPath(constraint, valueDef, dataElementSpecs) {
  if (!constraint.hasPath()) {
    return { path: [] };
  }

  let currentDef = dataElementSpecs.findByIdentifier(valueDef.effectiveIdentifier);
  const normalizedPath = [];
  for (let i = 0; i < constraint.path.length; i += 1) {
    const pathId = constraint.path[i];
    if (pathId.namespace === PRIMITIVE_NS) {
      if (i !== constraint.path.length - 1) {
        logger.error('Encountered a constraint path containing a primitive %s at index %d that was not the leaf: %s', i, pathId, JSON.stringify(constraint, null, 2));
        return {};
      }
      if (!currentDef.value) {
        logger.error('Encountered a constraint path with a primitive leaf %s on an element that lacked a value: %s', pathId, JSON.stringify(constraint, null, 2));
        return {};
      }
      if (currentDef.value instanceof ChoiceValue) {
        let found = false;
        for (const choice of currentDef.value.aggregateOptions) {
          if (pathId.equals(choice.identifier)) {
            found = true;
            break;
          }
        }
        if (!found) {
          logger.error('Encountered a constraint path with a primitive leaf %s on an element with a mismatched value: %s on valueDef %s', pathId, JSON.stringify(constraint, null, 2), JSON.stringify(valueDef, null, 2));
          return {};
        }
      }
      else if (!pathId.equals(currentDef.value.identifier)) {
        logger.error('Encountered a constraint path with a primitive leaf %s on an element with a mismatched value: %s on valueDef %s', pathId, JSON.stringify(constraint, null, 2), JSON.stringify(valueDef, null, 2));
        return {};
      }
      normalizedPath.push('Value');
    } else {
      const newDef = dataElementSpecs.findByIdentifier(pathId);
      if (!newDef) {
        logger.error('Cannot resolve element definition for %s on constraint %s. ERROR_CODE:12029', pathId, JSON.stringify(constraint, null, 2));
        return {};
      }
      let found = false;
      // See if the current definition has a value of the specified type.
      if (currentDef.value) {
        if (currentDef.value instanceof ChoiceValue) {
          for (const choice of currentDef.value.aggregateOptions) {
            if (pathId.equals(choice.identifier) || checkHasBaseType(choice.identifier, pathId, dataElementSpecs)) {
              found = true;
              break;
            }
          }
        } else if (pathId.equals(currentDef.value.identifier) || checkHasBaseType(currentDef.value.identifier, pathId, dataElementSpecs)) {
          normalizedPath.push('Value');
          found = true;
        }
      }

      if (!found) {
        if (!currentDef.fields || !currentDef.fields.length) {
          logger.error('Element %s lacked any fields or a value that matched %s as part of constraint %s', JSON.stringify(currentDef, null, 2), pathId, JSON.stringify(constraint, null, 2));
          return {};
        } else {
          const found = currentDef.fields.some((field) => pathId.equals(field.identifier));
          if (!found) {
            logger.error('Element %s lacked a field or a value that matched %s as part of constraint %s', JSON.stringify(currentDef, null, 2), pathId, JSON.stringify(constraint, null, 2));
            return {};
          }
          normalizedPath.push(identifierToNormalizedPath(pathId));
        }
      }
      currentDef = newDef;
    }
  }

  return {path:normalizedPath, target: currentDef === valueDef ? null : currentDef};
}

function makeExpandedEntryDefinitions(enclosingNamespace, baseSchemaURL) {
  const properties = {};
  for (const name of ['ShrId', 'EntryId', 'FocalSubject', 'SubjectIsThirdPartyFlag', 'Narrative', 'Informant', 'Author', 'AssociatedEncounter', 'OriginalCreationDate', 'LastUpdateDate', 'Language']) {
    properties[name] = { $ref: makeRef(new Identifier('shr.base', name), enclosingNamespace, baseSchemaURL) };
  }
  properties.Version = { $ref: makeRef(new Identifier('shr.core', 'Version'), enclosingNamespace, baseSchemaURL) };
  properties.EntryType = { type: 'array', minItems: 1,
    items: { $ref: makeRef(new Identifier('shr.base', 'EntryType'), enclosingNamespace, baseSchemaURL) }
  };
  return { properties, required: [
    'shr/base/ShrId',
    'shr/base/EntryId',
    'shr/base/EntryType',
    'shr/base/FocalSubject',
    'shr/base/OriginalCreationDate',
    'shr/base/LastUpdateDate'
  ]};
}

/**
 * Converts a concept into a code entry for the schema. (Codes are also represented as Concepts in the object model.)
 *
 * @param {Concept|TBD} concept - The concept to convert.
 * @return {{code: string, display: (string|undefined)}} The converted object. Display is optional.
 */
function makeConceptEntry(concept) {
  if (concept instanceof TBD) {
    const ret = { code: 'urn:tbd#TBD' };
    if (concept.text) {
      ret.display = concept.text;
    }
    return ret;
  } else {
    const ret = { code: concept.system + '#' + concept.code };
    if (concept.display) {
      ret.display = concept.display;
    }
    return ret;
  }
}

function identifierToString(identifier) {
  return `${identifier.namespace}:${identifier.name}`;
}

// stealing from shr-expand
/**
 * Determine if a type supports a code constraint.
 *
 * @param {Identifier} identifier - The identifier of the type to check.
 * @param {DataElementSpecifications} dataElementSpecs - The available DataElement specs.
 * @return {boolean} Whether or not the given type supports a code constraint.
 */
function supportsCodeConstraint(identifier, dataElementSpecs) {
  if (CODE.equals(identifier) || checkHasBaseType(identifier, new Identifier('shr.core', 'Coding'), dataElementSpecs)
      || checkHasBaseType(identifier, new Identifier('shr.core', 'CodeableConcept'), dataElementSpecs)) {
    return true;
  }
  const element = dataElementSpecs.findByIdentifier(identifier);
  if (element.value) {
    if (element.value instanceof IdentifiableValue) {
      return CODE.equals(element.value.identifier) || checkHasBaseType(element.value.identifier, new Identifier('shr.core', 'Coding'), dataElementSpecs)
          || checkHasBaseType(element.value.identifier, new Identifier('shr.core', 'CodeableConcept'), dataElementSpecs);
    } else if (element.value instanceof ChoiceValue) {
      for (const value of element.value.aggregateOptions) {
        if (value instanceof IdentifiableValue) {
          if (CODE.equals(value.identifier) || checkHasBaseType(value.identifier, new Identifier('shr.core', 'Coding'), dataElementSpecs)
              || checkHasBaseType(value.identifier, new Identifier('shr.core', 'CodeableConcept'), dataElementSpecs)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

function checkHasBaseType(identifier, baseIdentifier, dataElementSpecs) {
  if (typeof identifier === 'undefined' || typeof baseIdentifier === 'undefined') {
    return false;
  }
  const basedOns = getRecursiveBasedOns(identifier, dataElementSpecs);
  return basedOns.some(id => id.equals(baseIdentifier));
}

function getRecursiveBasedOns(identifier, dataElementSpecs, alreadyProcessed = []) {
  // If it's primitive or we've already processed this one, don't go further (avoid circular dependencies)
  if (identifier.isPrimitive || alreadyProcessed.some(id => id.equals(identifier))) {
    return alreadyProcessed;
  }

  // We haven't processed it, so look it up
  const element = dataElementSpecs.findByIdentifier(identifier);
  if (typeof element === 'undefined') {
    logger.error('Cannot resolve element definition for %s. ERROR_CODE:12029', identifier.fqn);
    return alreadyProcessed;
  }
  // Add it to the already processed list (again, to avoid circular dependencies)
  alreadyProcessed.push(identifier);
  // Now recursively get the BasedOns for each of the BasedOns
  for (const basedOn of element.basedOn) {
    alreadyProcessed = getRecursiveBasedOns(basedOn, dataElementSpecs, alreadyProcessed);
  }

  return alreadyProcessed;
}
// done stealing from shr-expand

module.exports = {exportToJSONSchema, setLogger, MODELS_INFO };
