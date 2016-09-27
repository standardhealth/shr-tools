function namespaceToSchemas(ns) {
    let schemas = []
    for (const el of ns.elements) {
        schemas.push(elementToSchema(el))
    }
    return schemas
}

function elementToSchema(el) {
    let schema = {
        "$schema": "http://standardhealthrecord.org/schemas/shr/extended-schema.schema.json",
        id: buildSchemaRef(el.identifier),
        description: el.description
    }
    encodeTypesInSchema(el, schema);

    return schema
}

function encodeTypesInSchema(element, schema) {
    if (element.components.length > 0) {
        encodeComponentTypesInSchema(element.components, schema)
    } else {
        encodeAnswerTypesInSchema(element.answers, schema)
    }
}

function encodeComponentTypesInSchema(components, schema) {
    schema.type = "object"
    schema.properties = {}
    for (c of components) {
        if (c.isMaxUnbounded() || c.max > 1) {
            let ary = {
                type: "array",
                items: identifierToSchemaTypeObject(c)
            }
            if (c.min > 0) {
                ary.minItems = c.min
            }
            if (!c.isMaxUnbounded()) {
                ary.maxItems = c.max
            }
            schema.properties[c.fqn] = ary;
        } else if (c.max == 1) {
            schema.properties[c.fqn] = identifierToSchemaTypeObject(c);
        }
    }
}

function encodeAnswerTypesInSchema(answers, schema) {
    if (answers.length == 1) {
        Object.assign(schema, identifierToSchemaTypeObject(answers[0]));
    } else if (answers.length > 1) {
        schema.oneOf = answers.map(a => identifierToSchemaTypeObject(a));
    }
}

function identifierToSchemaTypeObject(identifier) {
    if (identifier.isPrimitive()) {
        // TO CONSIDER: These could all be defined as separate (resusable) types in our types.schema.json.
        switch(identifier.name) {
            case "boolean":
                return {type: "boolean"};
            case "integer":
                return {type: "integer"};
            case "decimal":
                return {type: "number"};
            case "unsignedInt":
                return {type: "integer", minimum: 0}
            case "positiveInt":
                return {type: "integer", minimum: 1}
            case "string":
                return {type: "string"};
            case "markdown":
                return {type: "string"}; // TODO: differentiate from string
            case "code":
                return {type: "string", pattern: "[^\\s]+([\\s]?[^\\s]+)*"}
            case "id":
                return {type: "string", pattern: "[A-Za-z0-9\\-\\.]{1,64}"}
            case "oid":
                return {type: "string", pattern: "urn:oid:[0-2](\\.[1-9]\\d*)+"}
            case "uri":
                return {type: "string", format: "uri"}
            case "base64Binary":
                return {type: "string"}; // TODO: differentiate from string
            case "date":
                return {type: "string", pattern: "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?"}
            case "dateTime":
                return {type: "string", pattern: "-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?"}
            case "instant":
                return {type: "string", format: "date-time"}
            case "time":
                return {type: "string", pattern: "([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?"}
            default:
                console.log(`WARNING: Unrecognized primitive type: ${identifier.name}.  Treating as string.`);
                return {type: "string"};
        }
    }

    // We fell through, so this is a reference to another data element or entry
    return {"$ref": buildSchemaRef(identifier)}
}

function buildSchemaRef(identifier) {
    let nsPath = identifier.namespace.replace(/\./g, '/');
    return `http://standardhealthrecord.org/schemas/${nsPath}/${identifier.name}.schema.json`
}

module.exports = {namespaceToSchemas};