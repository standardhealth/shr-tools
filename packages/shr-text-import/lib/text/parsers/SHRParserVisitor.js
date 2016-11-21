// Generated from SHRParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SHRParser.

function SHRParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SHRParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SHRParserVisitor.prototype.constructor = SHRParserVisitor;

// Visit a parse tree produced by SHRParser#shr.
SHRParserVisitor.prototype.visitShr = function(ctx) {
};


// Visit a parse tree produced by SHRParser#dataDefsDoc.
SHRParserVisitor.prototype.visitDataDefsDoc = function(ctx) {
};


// Visit a parse tree produced by SHRParser#dataDefsHeader.
SHRParserVisitor.prototype.visitDataDefsHeader = function(ctx) {
};


// Visit a parse tree produced by SHRParser#usesStatement.
SHRParserVisitor.prototype.visitUsesStatement = function(ctx) {
};


// Visit a parse tree produced by SHRParser#dataDefs.
SHRParserVisitor.prototype.visitDataDefs = function(ctx) {
};


// Visit a parse tree produced by SHRParser#dataDef.
SHRParserVisitor.prototype.visitDataDef = function(ctx) {
};


// Visit a parse tree produced by SHRParser#vocabularyDef.
SHRParserVisitor.prototype.visitVocabularyDef = function(ctx) {
};


// Visit a parse tree produced by SHRParser#elementDef.
SHRParserVisitor.prototype.visitElementDef = function(ctx) {
};


// Visit a parse tree produced by SHRParser#elementHeader.
SHRParserVisitor.prototype.visitElementHeader = function(ctx) {
};


// Visit a parse tree produced by SHRParser#entryDef.
SHRParserVisitor.prototype.visitEntryDef = function(ctx) {
};


// Visit a parse tree produced by SHRParser#entryHeader.
SHRParserVisitor.prototype.visitEntryHeader = function(ctx) {
};


// Visit a parse tree produced by SHRParser#elementProps.
SHRParserVisitor.prototype.visitElementProps = function(ctx) {
};


// Visit a parse tree produced by SHRParser#elementProp.
SHRParserVisitor.prototype.visitElementProp = function(ctx) {
};


// Visit a parse tree produced by SHRParser#singleValue.
SHRParserVisitor.prototype.visitSingleValue = function(ctx) {
};


// Visit a parse tree produced by SHRParser#countedType.
SHRParserVisitor.prototype.visitCountedType = function(ctx) {
};


// Visit a parse tree produced by SHRParser#types.
SHRParserVisitor.prototype.visitTypes = function(ctx) {
};


// Visit a parse tree produced by SHRParser#type.
SHRParserVisitor.prototype.visitType = function(ctx) {
};


// Visit a parse tree produced by SHRParser#multiValue.
SHRParserVisitor.prototype.visitMultiValue = function(ctx) {
};


// Visit a parse tree produced by SHRParser#countedElements.
SHRParserVisitor.prototype.visitCountedElements = function(ctx) {
};


// Visit a parse tree produced by SHRParser#countedElement.
SHRParserVisitor.prototype.visitCountedElement = function(ctx) {
};


// Visit a parse tree produced by SHRParser#elements.
SHRParserVisitor.prototype.visitElements = function(ctx) {
};


// Visit a parse tree produced by SHRParser#element.
SHRParserVisitor.prototype.visitElement = function(ctx) {
};


// Visit a parse tree produced by SHRParser#conceptProp.
SHRParserVisitor.prototype.visitConceptProp = function(ctx) {
};


// Visit a parse tree produced by SHRParser#concepts.
SHRParserVisitor.prototype.visitConcepts = function(ctx) {
};


// Visit a parse tree produced by SHRParser#descriptionProp.
SHRParserVisitor.prototype.visitDescriptionProp = function(ctx) {
};


// Visit a parse tree produced by SHRParser#valuesetDefsDoc.
SHRParserVisitor.prototype.visitValuesetDefsDoc = function(ctx) {
};


// Visit a parse tree produced by SHRParser#valuesetDefsHeader.
SHRParserVisitor.prototype.visitValuesetDefsHeader = function(ctx) {
};


// Visit a parse tree produced by SHRParser#valuesetDefs.
SHRParserVisitor.prototype.visitValuesetDefs = function(ctx) {
};


// Visit a parse tree produced by SHRParser#valuesetDef.
SHRParserVisitor.prototype.visitValuesetDef = function(ctx) {
};


// Visit a parse tree produced by SHRParser#valuesetHeader.
SHRParserVisitor.prototype.visitValuesetHeader = function(ctx) {
};


// Visit a parse tree produced by SHRParser#valuesetValues.
SHRParserVisitor.prototype.visitValuesetValues = function(ctx) {
};


// Visit a parse tree produced by SHRParser#valuesetValue.
SHRParserVisitor.prototype.visitValuesetValue = function(ctx) {
};


// Visit a parse tree produced by SHRParser#namespace.
SHRParserVisitor.prototype.visitNamespace = function(ctx) {
};


// Visit a parse tree produced by SHRParser#simpleName.
SHRParserVisitor.prototype.visitSimpleName = function(ctx) {
};


// Visit a parse tree produced by SHRParser#fullyQualifiedName.
SHRParserVisitor.prototype.visitFullyQualifiedName = function(ctx) {
};


// Visit a parse tree produced by SHRParser#simpleOrFQName.
SHRParserVisitor.prototype.visitSimpleOrFQName = function(ctx) {
};


// Visit a parse tree produced by SHRParser#ref.
SHRParserVisitor.prototype.visitRef = function(ctx) {
};


// Visit a parse tree produced by SHRParser#code.
SHRParserVisitor.prototype.visitCode = function(ctx) {
};


// Visit a parse tree produced by SHRParser#fullyQualifiedCode.
SHRParserVisitor.prototype.visitFullyQualifiedCode = function(ctx) {
};


// Visit a parse tree produced by SHRParser#codeConstraint.
SHRParserVisitor.prototype.visitCodeConstraint = function(ctx) {
};


// Visit a parse tree produced by SHRParser#codeFromValueset.
SHRParserVisitor.prototype.visitCodeFromValueset = function(ctx) {
};


// Visit a parse tree produced by SHRParser#codeDescendent.
SHRParserVisitor.prototype.visitCodeDescendent = function(ctx) {
};


// Visit a parse tree produced by SHRParser#valueset.
SHRParserVisitor.prototype.visitValueset = function(ctx) {
};


// Visit a parse tree produced by SHRParser#primitive.
SHRParserVisitor.prototype.visitPrimitive = function(ctx) {
};


// Visit a parse tree produced by SHRParser#count.
SHRParserVisitor.prototype.visitCount = function(ctx) {
};



exports.SHRParserVisitor = SHRParserVisitor;