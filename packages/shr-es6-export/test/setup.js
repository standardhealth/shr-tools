const path = require('path');
const fs = require('fs-extra');
const mdls = require('shr-models');
const { exportToES6 } = require('../lib/export');

function setup(outDir='./build/test', clean=false) {
  const specs = new mdls.Specifications();
  specs.namespaces.add(new mdls.Namespace('shr.test', 'Test Namespace'));

  // shr.test.SimpleValue
  const sv = en('shr.test', 'SimpleValue')
    .withValue(primVal('string'));
  specs.dataElements.add(sv);

  // Write it out to disk
  const results = exportToES6(specs);
  const handleNS = (obj, fpath) => {
    fs.mkdirpSync(fpath);
    for (const key of Object.keys(obj)) {
      if (key.endsWith('.js')) {
        fs.writeFileSync(path.join(fpath, key), obj[key]);
      } else {
        handleNS(obj[key], path.join(fpath, key));
      }
    }
  };
  if (clean) {
    fs.removeSync(outDir);
  }
  handleNS(results, outDir);
}

function el(ns, name) {
  return new mdls.DataElement(id(ns, name), false);
}

function en(ns, name) {
  return new mdls.DataElement(id(ns, name), true);
}

function idVal(ns, name, cardinality=card(1,1)) {
  return new mdls.IdentifiableValue(id(ns, name))
    .withCard(cardinality);
}

function primVal(prim, cardinality=card(1,1)) {
  return new mdls.IdentifiableValue(pid(prim))
    .withCard(cardinality);
}

function id(ns, name) {
  return new mdls.Identifier(ns, name);
}

function pid(prim) {
  return new mdls.PrimitiveIdentifier(prim);
}

function card(min,max) {
  return new mdls.Cardinality(min, max);
}

module.exports = setup;