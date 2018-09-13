
//  /$$   /$$
// | $$$ | $$
// | $$$$| $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$$  /$$$$$$
// | $$ $$ $$ |____  $$| $$_  $$_  $$ /$$__  $$ /$$_____/ /$$__  $$ |____  $$ /$$_____/ /$$__  $$
// | $$  $$$$  /$$$$$$$| $$ \ $$ \ $$| $$$$$$$$|  $$$$$$ | $$  \ $$  /$$$$$$$| $$      | $$$$$$$$
// | $$\  $$$ /$$__  $$| $$ | $$ | $$| $$_____/ \____  $$| $$  | $$ /$$__  $$| $$      | $$_____/
// | $$ \  $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$ /$$$$$$$/| $$$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$
// |__/  \__/ \_______/|__/ |__/ |__/ \_______/|_______/ | $$____/  \_______/ \_______/ \_______/
//                                                       | $$
//                                                       | $$
//                                                       |__/


const models = require('shr-models');

const bunyan = require('bunyan');
var rootLogger = bunyan.createLogger({name: 'shr-text-import'});
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
}

class NamespaceConstructor {

  constructor(namespace) {
    this._namespaces = [];
  }

  get namespaces() { return this._namespaces; }
  set namespaces(namespaces) {
    this._namespaces = namespaces;
  }

  add(ns) {
    const constructedNS = this.constructBasicNamespaceFile(ns);
    this.namespaces.push(constructedNS);
  }

  constructBasicNamespaceFile(ns) {
    let constructedNS = new models.Namespace(ns.name, ns.description);
    return constructedNS;
  }

}

module.exports = { NamespaceConstructor, setLogger };