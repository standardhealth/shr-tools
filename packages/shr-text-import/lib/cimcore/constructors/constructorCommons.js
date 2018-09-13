const models = require('shr-models');

// const VERSION = new Version(5, 2, 3);
const GRAMMAR_VERSION = models.GRAMMAR_VERSION;

function rightPad(text, max = 6) {
  const numTabs = Math.max(1, max - Math.floor(text.length / 4));
  return `${text}${'\t'.repeat(numTabs)}`;
}

function idFromFQN(fqn) {
  const parts = fqn.split('.');
  if (parts.length == 1) {
    if (fqn.match(/^TBD\(.*\)$/)) {
      return new models.TBD(fqn.replace(/^TBD\((.*)\)$/, '$1'));
    } else if (fqn.startsWith('_')) {
      return new models.Identifier('', fqn);
    }
    return new models.PrimitiveIdentifier(fqn);
  }

  const name = parts.pop();
  let namespace = parts.join('.');

  return new models.Identifier(namespace, name);
}

function constructCode(code, system, display) {
  if (system === undefined) system = null;
  const codeObj = new models.Concept(system, code, display);
  return codeObj;
}

module.exports = { idFromFQN, constructCode, rightPad, GRAMMAR_VERSION };