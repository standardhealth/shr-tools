//  /$$      /$$                               /$$
// | $$$    /$$$                              |__/
// | $$$$  /$$$$  /$$$$$$   /$$$$$$   /$$$$$$  /$$ /$$$$$$$   /$$$$$$   /$$$$$$$
// | $$ $$/$$ $$ |____  $$ /$$__  $$ /$$__  $$| $$| $$__  $$ /$$__  $$ /$$_____/
// | $$  $$$| $$  /$$$$$$$| $$  \ $$| $$  \ $$| $$| $$  \ $$| $$  \ $$|  $$$$$$
// | $$\  $ | $$ /$$__  $$| $$  | $$| $$  | $$| $$| $$  | $$| $$  | $$ \____  $$
// | $$ \/  | $$|  $$$$$$$| $$$$$$$/| $$$$$$$/| $$| $$  | $$|  $$$$$$$ /$$$$$$$/
// |__/     |__/ \_______/| $$____/ | $$____/ |__/|__/  |__/ \____  $$|_______/
//                        | $$      | $$                     /$$  \ $$
//                        | $$      | $$                    |  $$$$$$/
//                        |__/      |__/                     \______/

class MappingFormatter {
  constructor() {

  }


  get target() { return this._target; }
  set target(target) {
    this._target = target;
  }

  reset() {
    this.target = '';
  }

  formatMapping(mapping) {
    const elementMapping = this.formatTopLevelMapping(mapping);
    const rules = this.formatRules(mapping);
    return [
      elementMapping,
      ...rules
    ].join('\n');
  }

  formatTopLevelMapping(mapping) {
    const hasTarget = mapping.targetItem != null;
    const targetStatement = (hasTarget) ? ` maps to ${mapping.targetItem}` : '';

    const hasSubMappings = mapping.rules.length > 0;
    const semicolonStatement = hasSubMappings ? ':' : '';

    return `${mapping.identifier.name}${targetStatement}${semicolonStatement}`;
  }

  formatRules(mapping) {
    const formattedRules = [];
    for (const rule of mapping.rules) {
      if (rule.lastModifiedBy.fqn == mapping.identifier.fqn) {
        const formattedRule = this.formatRuleByType(rule);
        formattedRules.push(`\t${formattedRule}`);
      }
    }
    return formattedRules;
  }

  formatRuleByType(rule) {
    switch (rule.constructor.name) {
    case 'FieldMappingRule': {
      return `${this.formatRuleSource(rule)} maps to ${rule.target.replace(/[ \t]+$/, '')}`;
    }
    case 'CardinalityMappingRule': {
      return `constrain ${rule.target.replace(/[ \t]+$/, '')} to ${rule.cardinality.toString()}`;
    }
    case 'FixedValueMappingRule': {
      return `fix ${rule.target.replace(/[ \t]+$/, '')} to ${rule.value}`;
    }

    default:
      console.log('Unknown Mapping Rule Type: %s', rule.constructor.name);
      return;
    }
  }

  formatRuleSource(rule) {
    if (rule.sourcePath.length == 1 && rule.sourcePath[0].text) { //.text.match(/^TBD\(.*\)$/)
      return `TBD "${rule.sourcePath[0].text}"`;
    }
    return rule.sourcePath.map(p => p.name).join('.');
  }

}

module.exports = { MappingFormatter };