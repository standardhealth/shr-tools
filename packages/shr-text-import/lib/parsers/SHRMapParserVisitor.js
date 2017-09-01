// Generated from SHRMapParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SHRMapParser.

function SHRMapParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SHRMapParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SHRMapParserVisitor.prototype.constructor = SHRMapParserVisitor;

// Visit a parse tree produced by SHRMapParser#doc.
SHRMapParserVisitor.prototype.visitDoc = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#docHeader.
SHRMapParserVisitor.prototype.visitDocHeader = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#targetStatement.
SHRMapParserVisitor.prototype.visitTargetStatement = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#mappingDefs.
SHRMapParserVisitor.prototype.visitMappingDefs = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#mappingDef.
SHRMapParserVisitor.prototype.visitMappingDef = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#mappingDefHeader.
SHRMapParserVisitor.prototype.visitMappingDefHeader = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#mappingRule.
SHRMapParserVisitor.prototype.visitMappingRule = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#fieldMapping.
SHRMapParserVisitor.prototype.visitFieldMapping = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#source.
SHRMapParserVisitor.prototype.visitSource = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#sourcePart.
SHRMapParserVisitor.prototype.visitSourcePart = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#sourceWord.
SHRMapParserVisitor.prototype.visitSourceWord = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#cardMapping.
SHRMapParserVisitor.prototype.visitCardMapping = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#fixedMapping.
SHRMapParserVisitor.prototype.visitFixedMapping = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#version.
SHRMapParserVisitor.prototype.visitVersion = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#namespace.
SHRMapParserVisitor.prototype.visitNamespace = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#simpleName.
SHRMapParserVisitor.prototype.visitSimpleName = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#fullyQualifiedName.
SHRMapParserVisitor.prototype.visitFullyQualifiedName = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#simpleOrFQName.
SHRMapParserVisitor.prototype.visitSimpleOrFQName = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#primitive.
SHRMapParserVisitor.prototype.visitPrimitive = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#count.
SHRMapParserVisitor.prototype.visitCount = function(ctx) {
};


// Visit a parse tree produced by SHRMapParser#tbd.
SHRMapParserVisitor.prototype.visitTbd = function(ctx) {
};



exports.SHRMapParserVisitor = SHRMapParserVisitor;