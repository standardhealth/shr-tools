//  /$$$$$$$              /$$               /$$$$$$$$ /$$                                               /$$
// | $$__  $$            | $$              | $$_____/| $$                                              | $$
// | $$  \ $$  /$$$$$$  /$$$$$$    /$$$$$$ | $$      | $$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$
// | $$  | $$ |____  $$|_  $$_/   |____  $$| $$$$$   | $$ /$$__  $$| $$_  $$_  $$ /$$__  $$| $$__  $$|_  $$_/  /$$_____/
// | $$  | $$  /$$$$$$$  | $$      /$$$$$$$| $$__/   | $$| $$$$$$$$| $$ \ $$ \ $$| $$$$$$$$| $$  \ $$  | $$   |  $$$$$$
// | $$  | $$ /$$__  $$  | $$ /$$ /$$__  $$| $$      | $$| $$_____/| $$ | $$ | $$| $$_____/| $$  | $$  | $$ /$$\____  $$
// | $$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$| $$$$$$$$| $$|  $$$$$$$| $$ | $$ | $$|  $$$$$$$| $$  | $$  |  $$$$//$$$$$$$/
// |_______/  \_______/   \___/   \_______/|________/|__/ \_______/|__/ |__/ |__/ \_______/|__/  |__/   \___/ |_______/


const { rightPad, idFromFQN, shorthands } = require('./commons');

const DEFAULT_MAX_PLACE = 19;
const DEFAULT_MAX_RIGHT_PAD = 4;

class DataElementFormatterCimpl6 {
  constructor(specs) {
    this._specs = specs;
    this._uses = [];
    this._codesystems = [];
    this._maxPlacement = DEFAULT_MAX_PLACE;
    this._maxRightPad = DEFAULT_MAX_RIGHT_PAD;
  }

  get specs() { return this._specs; }

  get codesystems() { return this._codesystems; }
  get uses() { return this._uses; }
  get maxPlacement() { return this._maxPlacement; }
  set maxPlacement(maxPlacement) { this._maxPlacement = maxPlacement; }
  get maxRightPad() { return this._maxRightPad; }
  set maxRightPad(maxRightPad) { this._maxRightPad = maxRightPad; }

  reset() {
    this._codesystems = [];
    this._paths = [];
    this._maxPlacement = DEFAULT_MAX_PLACE;
    this._maxRightPad = DEFAULT_MAX_RIGHT_PAD;
    this._uses = [];
  }

  shFromCodeSystem(cs) {
    if (!cs) return '';

    if (cs.match(/http:\/\/standardhealthrecord.org\/shr\/[A-Za-z]*\/cs\/(#[A-Za-z]*CS)/)) {
      return '';
    }

    if (shorthands[cs]) {
      if (cs != 'urn:tbd') {
        this._codesystems.pushNew(cs);
      }
      return shorthands[cs];
    } else {
      let unk_array = [];
      Object.keys(shorthands).forEach(key => {
        if (shorthands[key].includes('UNK')) {
          unk_array.push(parseInt(shorthands[key].trim().substring(3)));
        }
      });
      let new_value = 'UNK';
      if (unk_array.length > 0) {
        new_value = `${new_value}${Math.max(...unk_array) + 1}`;
      }
      else {
        new_value = `${new_value}0`;
      }
      shorthands[cs] = new_value;
      this._codesystems.pushNew(new_value);
      return new_value;
    }
  }

  getIdFromFqnAndTrackUsed(fqn) {
    const id = idFromFQN(fqn);
    if (id.namespace != 'primitive') {
      this.uses.pushNew(id.namespace);
    }

    return id;
  }

  updatePath(formattedValue, de) {
    //Handle a case where the path already includes brackets meaning it was processed before.
    if (formattedValue.includes('[')) {
      return formattedValue;
    }
    let splitFormattedValue = formattedValue.split('.');
    let modifiedFormattedValue = splitFormattedValue[0].trim();
    let subName = '';
    let subNs = '';
    let complete = false;

    for(let i = 0; i < de.fields.length; i++) {
      if (splitFormattedValue[0].trim() === de.fields[i].identifier.name) {
        subName = splitFormattedValue[0].trim();
        subNs = de.fields[i].identifier.namespace;
        complete = true;
        break;
      }
      else if (splitFormattedValue[0].trim() === de.fields[i].effectiveIdentifier.name) {
        subName = splitFormattedValue[0].trim();
        subNs = de.fields[i].effectiveIdentifier.namespace;
        complete = true;
        break;
      }
    }
    if (!complete) {
      if (de.value && de.value.constructor.name !== 'ChoiceValue') {
        subNs = de.value.identifier.namespace;
        subName = de.value.identifier.name;
      }
      else {
        return formattedValue;
      }
    }
    let newDe = this.specs.dataElements.find(subNs, subName);
    if (newDe) {
      for (let i = 1; i < splitFormattedValue.length; i++) {
        let added = false;
        subName = splitFormattedValue[i].trim();
        for(let j = 0; j < newDe.fields.length; j++) {
          if (splitFormattedValue[i].trim() === newDe.fields[j].identifier.name) {
            modifiedFormattedValue += `.${splitFormattedValue[i]}`;
            subNs = newDe.fields[j].identifier.namespace;
            added = true;
            break;
          }
          else if (splitFormattedValue[i].trim() === newDe.fields[j].effectiveIdentifier.name) {
            modifiedFormattedValue += `.${splitFormattedValue[i]}`;
            subNs = newDe.fields[j].effectiveIdentifier.namespace;
            added = true;
            break;
          }
        }
        if (!added) {
          if (newDe.value) {
            if (newDe.value.options) {
              for(let a = 0; a < newDe.value.options.length; a++) {
                if (splitFormattedValue[i].trim() === newDe.value.options[a].identifier.name) {
                  modifiedFormattedValue += `[${splitFormattedValue[i]}]`;
                  subNs = newDe.value.options[a].identifier.namespace;
                  added = true;
                }
                else if (splitFormattedValue[i].trim() === newDe.value.options[a].effectiveIdentifier.name) {
                  modifiedFormattedValue += `[${splitFormattedValue[i]}]`;
                  subNs = newDe.value.options[a].effectiveIdentifier.namespace;
                  added = true;
                }
              }
            }
            else {
              if (splitFormattedValue[i].trim() === newDe.value.identifier.name) {
                modifiedFormattedValue += `[${splitFormattedValue[i]}]`;
                subNs = newDe.value.identifier.namespace;
                added = true;
              }
              else if (splitFormattedValue[i].trim() === newDe.value.effectiveIdentifier.name) {
                modifiedFormattedValue += `[${splitFormattedValue[i]}]`;
                subNs = newDe.value.effectiveIdentifier.namespace;
                added = true;
              }
            }
          }
          else {
            modifiedFormattedValue += `.${splitFormattedValue[i]}`;
            added = true;
          }
          if (!added) {
            modifiedFormattedValue += `.${splitFormattedValue[i]}`;
          }
        }
        newDe = this.specs.dataElements.find(subNs, subName);
        if (!newDe) {
          for(let k = i + 1; k < splitFormattedValue.length; k++) {
            modifiedFormattedValue += `.${splitFormattedValue[k]}`;
          }
          break;
        }
      }
      return modifiedFormattedValue;
    }
    return formattedValue;
  }

  getVSFromURIAndTrackUsed(vs) {
//    const ns = vs.match(/standardhealthrecord\.org\/(.*)\/vs\/#[A-Za-z0-9]*/)[1].replace('/', '.');
    const matchArray = vs.match(/standardhealthrecord\.org\/(.*)\/vs\/[A-Za-z0-9]*/);
    if(matchArray && matchArray.length > 0) {
      const ns = matchArray[1].replace('/', '.');
      this.uses.pushNew(ns);
      const name = vs.split('/').pop().replace('#', '');
      return name;
    }
    else {
      return vs;
    }
  }

  formattedCodeFromCncpt(concept) {
    let formattedConceptCode = `${this.shFromCodeSystem(concept.system)}#${concept.code}`;
    if (concept.display) {
      formattedConceptCode = `${formattedConceptCode} "${concept.display}"`;
    } else if (concept.description) {
      formattedConceptCode = `${formattedConceptCode} "${concept.description}"`;
    }
    return formattedConceptCode;
  }

  formatDataElement(de, substituteHash) {
    let outputs = [];
    outputs.push(this.formatDeclaration(de));

    if ('basedOn' in de && de.basedOn.length > 0) {
      outputs.push(this.formatBasedOns(de));
    }

    if ('concepts' in de && de.concepts.length > 0) {
      outputs.push(this.formatConcepts(de));
    }

    if (de.description) {
      outputs.push(this.formatDescription(de));
    }

    if (de.value && de.value.inheritance != 'inherited') {
      outputs.push(this.formatValue(de.value, de, false, 'root', substituteHash));
    }

    if ('fields' in de && de.fields.length > 0) {
      const fields = this.formatFields(de, substituteHash);
      if (fields.length > 0) outputs.push(...fields);
    }

    return outputs.join('\r\n');
  }

  formatDeclaration(de) {
    let formattedModifier = '';
    if (de.isEntry) {
      formattedModifier = 'Entry:';
    } else if (de.isAbstract) {
      formattedModifier = 'Abstract:';
    } else if (de.value) {
      return `${rightPad('Element:', this.maxPlacement - 8)}${de.identifier.name.trim()}`;
    } else {
      return `${rightPad('Group:', this.maxPlacement - 6)}${de.identifier.name.trim()}`;
    }
    return `${rightPad(`${formattedModifier}`, this.maxPlacement - formattedModifier.length)}${de.identifier.name.trim()}`;
  }

  formatBasedOns(de) {
    const formattedBasedOns = [];
    for (const basedOn of de.basedOn) {

      const formattedBasedOn = this.getIdFromFqnAndTrackUsed(basedOn.fqn).name;
      formattedBasedOns.push(formattedBasedOn);
    }
    return `${rightPad('Parent:', this.maxPlacement - 7)}${formattedBasedOns.join(', ')}`;
  }

  formatConcepts(de) {
    const formattedConcepts = [];
    for (const concept of de.concepts) {
      const formattedConcept = `${this.formattedCodeFromCncpt(concept)}`;
      formattedConcepts.push(formattedConcept);
    }
    return `${rightPad('Concept:', this.maxPlacement - 8)}${formattedConcepts.join(', ')}`;
  }

  formatDescription(de) {
    return `${rightPad('Description:', this.maxPlacement - 12)}"${de.description.trim()}"`;
  }

  arrangeValuesByConstraintPaths(value, de) {
    // Ignore inherited constraints that aren't modified by this data element.
    let constraintsByPaths = value.constraints.reduce((out, constraint, i) => {
//      if (constraint.lastModifiedBy.fqn != de.identifier.fqn) {
      if (!constraint.lastModifiedBy || (constraint.lastModifiedBy.fqn != de.identifier.fqn)) {
        return out;
      }

      let combinedPaths = [];

      if (constraint.path.length > 0) {
        for (let i = 0; i < constraint.path.length; i++) {
          if (constraint.path[i].fqn) this.getIdFromFqnAndTrackUsed(constraint.path[i].fqn);
          /*Only check to see if code or Coding comes at the end of the path.
          If so, then omit it from the path.
          */
          if (i != constraint.path.length - 1) {
            combinedPaths.push(constraint.path[i].name);
          }
          else if (!['code', 'Coding'].includes(constraint.path[i].name)) {
            combinedPaths.push(constraint.path[i].name);
          }
        }
      }

      let combinedPath = (combinedPaths.length > 0) ? combinedPaths.join('.') : 'root';
      combinedPath = this.replaceValue(combinedPath);
      /*
      Only incorporate brackets if the constraint path includes concept not a string
      which has concept within it such as conceptCode.
      */
      if (combinedPaths.indexOf('CodeableConcept') > -1) {
        combinedPath = combinedPath.replace('.concept','[concept]');
      }

      if (!out[combinedPath]) out[combinedPath] = [];
      out[combinedPath].push(constraint);

      return out;
    }, {});
    //Check for the case where CodeableConcept is only constraint. Change it to be root instead so it is then not added to the path when formatting the value.
    if (Object.keys(constraintsByPaths).length == 1 && Object.keys(constraintsByPaths)[0] == 'CodeableConcept') {
      constraintsByPaths = {'root':constraintsByPaths['CodeableConcept']};
    }
    return constraintsByPaths;
  }

  /*Utilize breadth first search to go through the parents of data elements in order
  to determine whether or not any substitutions need to be made.
  */
  getParentsSubstitution(de, substituteHash, term) {
    let currentParent = de;
    let newParents = [];

    //Set the initial queue for breadth first search.
    for (let a = 0; a < currentParent.basedOn.length; a++) {
      newParents.push(this.specs.dataElements.find(currentParent.basedOn[a].namespace, currentParent.basedOn[a].name));
    }
    /*As long as the queue is not empty, the while loop will keep iterating over
    the different parents to search for a match.
    */
    while(newParents.length > 0) {
      currentParent = newParents.shift();
      let deNamespace = substituteHash[currentParent.identifier.namespace];
      if(deNamespace) {
        let deName = deNamespace[currentParent.identifier.name];
        if (deName) {
          if (deName.hasOwnProperty(term)) {
            return deName[term];
          }
        }
      }
      if(currentParent.basedOn) {
        let basedOnElements = currentParent.basedOn;
        for(let i = 0; i < basedOnElements.length; i++) {
          newParents.push(this.specs.dataElements.find(basedOnElements[i].namespace, basedOnElements[i].name));
        }
      }
    }
    return term;
  }

  formatFields(de, substituteHash) {
    const formattedFields = [];
    const substituteConstraints = [];
    const constrainedFields = [];
    let property_set = new Set([]);
    for (const f of de.fields) {
      if (f.inheritance != 'inherited') {
        const constraintsByPaths = this.arrangeValuesByConstraintPaths(f, de);
        if (Object.keys(constraintsByPaths).length > 0) {
          for (const path in constraintsByPaths) {
            const fClone = f.clone();
            fClone.constraints = constraintsByPaths[path];
            let inserted_value = this.formatValue(fClone, de, true, path, substituteHash);
            if(inserted_value.trim().length == 0) {
              continue;
            }
            let split_value = inserted_value.trim().split('\n');
            let deNamespace = substituteHash[de.identifier.namespace];
            if (deNamespace) {
              let deName = deNamespace[de.identifier.name];
              for(let i = 0; i < split_value.length; i++) {
                if(!split_value[i].includes('substitute')) {
                  let split_value_spaced = split_value[i].split(' ');
                  for (let k = 0; k < split_value_spaced.length; k++) {
                    if (split_value_spaced[k].trim().length > 0) {
                      let firstPart = '';
                      if(split_value_spaced[k][split_value_spaced[k].length - 1] === ']') {
                        let last_index = 0;
                        let j = -1;
                        while ((j = split_value_spaced[k].indexOf('[', j + 1)) != -1) {
                          last_index = j;
                        }
                        firstPart = split_value_spaced[k].substring(0, last_index);
                        if(deName) {
                          if(deName.hasOwnProperty(split_value_spaced[k])) {
                            split_value_spaced[k] = `${firstPart}[${deName[split_value_spaced[k]]}]`;
                          }
                          else {
                            let substituteTerm = this.getParentsSubstitution(de, substituteHash, split_value_spaced[k]);
                            if (substituteTerm != split_value_spaced[k]) {
                              split_value_spaced[k] = `${firstPart}[${substituteTerm}]`;
                            }
                          }
                        }
                        else {
                          let substituteTerm = this.getParentsSubstitution(de, substituteHash, split_value_spaced[k]);
                          if (substituteTerm != split_value_spaced[k]) {
                            split_value_spaced[k] = `${firstPart}[${substituteTerm}]`;
                          }
                        }
                      }
                      else {
                        let last_index = -1;
                        let j = -1;
                        while ((j = split_value_spaced[k].indexOf('.', j + 1)) != -1) {
                          last_index = j;
                        }
                        if (last_index == -1) {
                          last_index = split_value_spaced[k].length;
                          firstPart = '';
                        }
                        else {
                          firstPart = split_value_spaced[k].substring(0, last_index);
                        }
                        if(deName) {
                          if(deName.hasOwnProperty(split_value_spaced[k])) {
                            split_value_spaced[k] = `${firstPart}${deName[split_value_spaced[k]]}`;
                          }
                          else if (deName.hasOwnProperty(firstPart)) {
                            split_value_spaced[k] = `${deName[firstPart]}${split_value_spaced[k].substring(last_index)}`;
                          }
                          else {
                            let substituteTerm = this.getParentsSubstitution(de, substituteHash, split_value_spaced[k]);
                            if (substituteTerm != split_value_spaced[k]) {
                              split_value_spaced[k] = `${firstPart}${substituteTerm}`;
                            }
                          }
                        }
                        else {
                          let substituteTerm = this.getParentsSubstitution(de, substituteHash, split_value_spaced[k]);
                          if (substituteTerm != split_value_spaced[k]) {
                            split_value_spaced[k] = `${firstPart}${substituteTerm}`;
                          }
                        }
                      }
                    }
                  }
                  split_value[i] = split_value_spaced.join(' ');
                }
              }
            }
            inserted_value = split_value.join('\n');
            if (f.inheritance == 'overridden') {
              constrainedFields.push(`${rightPad('', this.maxPlacement)}${inserted_value.trim()}`);
            }
            else {
              if (fClone.constraints.length > 0) {
                if (fClone.card && fClone.identifier.name != 'concept' && !property_set.has(fClone.identifier.name)) {
                  formattedFields.push(`${rightPad('Property:', this.maxPlacement - 9)}${fClone.identifier.name} ${fClone.card.toString()}`);
                  property_set.add(fClone.identifier.name);
                }
                let i = 0;
                for (i = 0; i < fClone.constraints.length; i++) {
                  let name = fClone.identifier.name;
                  if (fClone.constraints[i].path.length > 0) {
                    for(let j = 0; j < fClone.constraints[i].path.length; j++) {
                      if(j < fClone.constraints[i].path.length - 1 || (j == fClone.constraints[i].path.length - 1 && this.replaceValue(fClone.constraints[i].path[j].name) != 'concept')) {
                        name += `.${this.replaceValue(fClone.constraints[i].path[j].name)}`;
                      }
                    }
                  }
                  name = this.updatePath(name, de);
                  if (fClone.constraints[i].valueSet !== undefined) {
                    let vs = fClone.constraints[i].valueSet;
                    let vs_object = this.specs._valueSets.findByURL(vs);
                    if (vs_object !== undefined) {
                      vs = vs_object.identifier.name;
                    }
                    constrainedFields.push(`${rightPad('', this.maxPlacement)}${name} from ${vs} (${fClone.constraints[i].bindingStrength.toLowerCase()})`);
                  }
                  else {
                    let constraint = `${rightPad('', this.maxPlacement)}${this.formatValueByConstraintType(name, fClone.constraints[i], false, inserted_value, substituteHash, de)}`;
                    if (constraint.includes('substitute')) {
                      substituteConstraints.push(constraint);
                    }
                    else {
                      constrainedFields.push(constraint);
                    }
                  }
                }
              }
              else {
                if (!inserted_value.trim().startsWith('concept ')) {
                  let found = inserted_value.match(/[0-9]+\.\./);
                  if (found && !property_set.has(inserted_value)) {
                    formattedFields.push(`${rightPad('Property:', this.maxPlacement - 9)}${inserted_value.trim()} ${fClone.card.toString()}`);
                    property_set.add(inserted_value);
                  }
                }
              }
            }
          }
        }
        else {
          let inserted_value = this.formatValue(f, de, true, 'root', substituteHash).trim();
          let split_value = inserted_value.trim().split('\n');
          let deNamespace = substituteHash[de.identifier.namespace];
          if (deNamespace) {
            let deName = deNamespace[de.identifier.name];
            for(let i = 0; i < split_value.length; i++) {
              if(!split_value[i].includes('substitute')) {
                let split_value_spaced = split_value[i].split(' ');
                for (let k = 0; k < split_value_spaced.length; k++) {
                  if (split_value_spaced[k].trim().length > 0) {
                    let firstPart = '';
                    if(split_value_spaced[k][split_value_spaced[k].length - 1] === ']') {
                      let last_index = 0;
                      let j = -1;
                      while ((j = split_value_spaced[k].indexOf('[', j + 1)) != -1) {
                        last_index = j;
                      }
                      firstPart = split_value_spaced[k].substring(0, last_index);
                      if(deName) {
                        if(deName.hasOwnProperty(split_value_spaced[k])) {
                          split_value_spaced[k] = `${firstPart}[${deName[split_value_spaced[k]]}]`;
                        }
                        else {
                          let substituteTerm = this.getParentsSubstitution(de, substituteHash, split_value_spaced[k]);
                          if (substituteTerm != split_value_spaced[k]) {
                            split_value_spaced[k] = `${firstPart}[${substituteTerm}]`;
                          }
                        }
                      }
                      else {
                        let substituteTerm = this.getParentsSubstitution(de, substituteHash, split_value_spaced[k]);
                        if (substituteTerm != split_value_spaced[k]) {
                          split_value_spaced[k] = `${firstPart}[${substituteTerm}]`;
                        }
                      }
                    }
                    else {
                      let last_index = -1;
                      let j = -1;
                      while ((j = split_value_spaced[k].indexOf('.', j + 1)) != -1) {
                        last_index = j;
                      }
                      if (last_index == -1) {
                        last_index = split_value_spaced[k].length;
                        firstPart = '';
                      }
                      else {
                        firstPart = split_value_spaced[k].substring(0, last_index);
                      }
                      if(deName) {
                        if(deName.hasOwnProperty(split_value_spaced[k])) {
                          split_value_spaced[k] = `${firstPart}${deName[split_value_spaced[k]]}`;
                        }
                        else if (deName.hasOwnProperty(firstPart)) {
                          split_value_spaced[k] = `${deName[firstPart]}${split_value_spaced[k].substring(last_index)}`;
                        }
                        else {
                          let substituteTerm = this.getParentsSubstitution(de, substituteHash, split_value_spaced[k]);
                          if (substituteTerm != split_value_spaced[k]) {
                            split_value_spaced[k] = `${firstPart}${substituteTerm}`;
                          }
                        }
                      }
                      else {
                        let substituteTerm = this.getParentsSubstitution(de, substituteHash, split_value_spaced[k]);
                        if (substituteTerm != split_value_spaced[k]) {
                          split_value_spaced[k] = `${firstPart}${substituteTerm}`;
                        }
                      }
                    }
                  }
                }
                split_value[i] = split_value_spaced.join(' ');
              }
            }
          }
          inserted_value = split_value.join('\n');
          if (f.inheritance == 'overridden') {
            constrainedFields.push(`${rightPad('', this.maxPlacement)}${inserted_value.trim()}`);
          }
          else {
            if (f.constraints.length > 0) {
              if (f.card && !f.identifier.name.startsWith('concept') && !property_set.has(f.identifier.name)) {
                formattedFields.push(`${rightPad('Property:', this.maxPlacement - 9)}${f.identifier.name} ${f.card.toString()}`);
                property_set.add(f.identifier.name);
              }
              let i = 0;
              for (i = 0; i < f.constraints.length; i++) {
                let name = f.identifier.name;
                if (f.constraints[i].path.length > 0) {
                  for(let j = 0; j < f.constraints[i].path.length; j++) {
                    name += `.${f.constraints[i].path[j].name}`;
                  }
                }
                name = this.updatePath(name, de);
                if (f.constraints[i].valueSet !== undefined) {
                  constrainedFields.push(`${rightPad('', this.maxPlacement)}${name} from ${f.constraints[i].valueSet} (${f.constraints[i].bindingStrength.toLowerCase()})`);
                }
                else {
                  let constraint = `${rightPad('', this.maxPlacement)}${this.formatValueByConstraintType(name, f.constraints[i], false, inserted_value, substituteHash, de)}`;
                  if (constraint.includes('substitute')) {
                    substituteConstraints.push(constraint);
                  }
                  else {
                    constrainedFields.push(constraint);
                  }
                }
              }
            }
            else {
              if (!inserted_value.trim().startsWith('concept')) {
                let found = inserted_value.match(/[0-9]+\.\./);
                if (found && !property_set.has(inserted_value) ) {
                  formattedFields.push(`${rightPad('Property:', this.maxPlacement - 9)}${inserted_value.trim()}`);
                  property_set.add(inserted_value);
                }
              }
            }
          }
        }
      }
    }
    let fields = formattedFields.concat(substituteConstraints);
    let allFields = fields.concat(constrainedFields);
    return allFields;
  }

  replaceValue(val) {
    let splitValue = val.split('.').map(e=> {
      let f = e.split(' ').map(g => {
        if (g == 'code' || g == 'Coding' || g == 'CodeableConcept') {
          return 'concept';
        }
        return g;
      });
      return f.join(' ');
    });
    return splitValue.join('.');
  }

  formatValue(value, de, formatAsField, path, substituteHash) {
    let formattedValue = this.formatValueByType(value, de, substituteHash);
    //first do card
    if (value.card) {
      if (value.effectiveCard && value.effectiveCard.max == 0) {
        if (!formatAsField) {
          return `Value ${rightPad('0..0', this.maxRightPad)}`;
        } else {
          return `${formattedValue} ${rightPad('0..0', this.maxRightPad)}`;
        }
      }

      formattedValue = this.formatValueWithCard(formattedValue, value, formatAsField);
    }

    if (path && path !== 'root' && value.inheritance && !path.includes('[')) {
      formattedValue = `${formattedValue}.${path}`;
      let splitFormattedValue = formattedValue.split('.');
      let modifiedFormattedValue = splitFormattedValue[0].trim();
      let subName = '';
      let subNs = '';
      for(let i = 0; i < de.fields.length; i++) {
        if (splitFormattedValue[0].trim() === de.fields[i].identifier.name) {
          subName = splitFormattedValue[0].trim();
          subNs = de.fields[i].identifier.namespace;
          break;
        }
        else if (splitFormattedValue[0].trim() === de.fields[i].effectiveIdentifier.name) {
          subName = splitFormattedValue[0].trim();
          subNs = de.fields[i].effectiveIdentifier.namespace;
          break;
        }
      }

      let newDe = this.specs.dataElements.find(subNs, subName);
      for (let i = 1; i < splitFormattedValue.length; i++) {
        let added = false;
        subName = splitFormattedValue[i].trim();
        for(let j = 0; j < newDe.fields.length; j++) {
          if (splitFormattedValue[i].trim() === newDe.fields[j].identifier.name) {
            modifiedFormattedValue += `.${splitFormattedValue[i]}`;
            subNs = newDe.fields[j].identifier.namespace;
            added = true;
            break;
          }
          else if (splitFormattedValue[i].trim() === newDe.fields[j].effectiveIdentifier.name) {
            modifiedFormattedValue += `.${splitFormattedValue[i]}`;
            subNs = newDe.fields[j].effectiveIdentifier.namespace;
            added = true;
            break;
          }
        }
        if (!added) {
          if (newDe.value) {
            if (newDe.value.options) {
              for(let a = 0; a < newDe.value.options.length; a++) {
                if (splitFormattedValue[i].trim() === newDe.value.options[a].identifier.name) {
                  modifiedFormattedValue += `[${splitFormattedValue[i]}]`;
                  subNs = newDe.value.options[a].identifier.namespace;
                  added = true;
                }
                else if (splitFormattedValue[i].trim() === newDe.value.options[a].effectiveIdentifier.name) {
                  modifiedFormattedValue += `[${splitFormattedValue[i]}]`;
                  subNs = newDe.value.options[a].effectiveIdentifier.namespace;
                  added = true;
                }
              }
            }
            else {
              if (splitFormattedValue[i].trim() === newDe.value.identifier.name) {
                modifiedFormattedValue += `[${splitFormattedValue[i]}]`;
                subNs = newDe.value.identifier.namespace;
                added = true;
              }
              else if (splitFormattedValue[i].trim() === newDe.value.effectiveIdentifier.name) {
                modifiedFormattedValue += `[${splitFormattedValue[i]}]`;
                subNs = newDe.value.effectiveIdentifier.namespace;
                added = true;
              }
            }
          }
          else {
            modifiedFormattedValue += `.${splitFormattedValue[i]}`;
          }
          if (!added) {
            modifiedFormattedValue += `.${splitFormattedValue[i]}`;
          }
        }
        newDe = this.specs.dataElements.find(subNs, subName);
        if (!newDe) {
          for(let k = i + 1; k < splitFormattedValue.length; k++) {
            modifiedFormattedValue += `.${splitFormattedValue[k]}`;
          }
          formattedValue = modifiedFormattedValue;
          break;
        }
      }
      formattedValue = modifiedFormattedValue;
    }

    // then try the mess that is constraints
    if ('constraints' in value && value.constraints.length > 0) {
      if (!formatAsField && value.constructor.name == 'RefValue' && value.constraints.length == 1 && value.constraints[0].constructor.name == 'TypeConstraint') {
        formatAsField = true;
        formattedValue = `${rightPad('',this.maxRightPad)}Value`;
      }
      let conceptEnding = formattedValue.split('.');
      if(conceptEnding[conceptEnding.length - 1] == 'concept' && conceptEnding.length > 1) {
        formattedValue = conceptEnding.slice(0,conceptEnding.length - 1).join('.');
      }
      formattedValue = this.formatValueWithConstraints(formattedValue, value, de, formatAsField, substituteHash);

      formattedValue = this.replaceValue(formattedValue);
      if (!formatAsField && value.inheritance === 'overridden') {
        if (de.identifier.name === value.constraints[0].lastModifiedBy.name) {
          let i = 0;
          let valueName = '';
          while(i < formattedValue.trim().length && formattedValue.trim()[i] != '.' && formattedValue.trim()[i] != '[' && formattedValue.trim()[i] != ' ' && formattedValue.trim()[i] != '\r') {
            valueName += formattedValue.trim()[i];
            i += 1;
          }
          let index = formattedValue.indexOf(valueName);
          if (value.constructor.name == 'ChoiceValue') {
            let secondIndex = formattedValue.indexOf(valueName, index + 1);
            let formattedStr = `${rightPad('',this.maxPlacement)}Value only ${valueName}`;
            formattedStr += `\n${rightPad('',this.maxPlacement)}Value[${valueName}]${formattedValue.substr(secondIndex + valueName.length)}`;
            return formattedStr;
          }
          if (valueName.trim() == 'concept' || formattedValue.includes(' or ')) {
            if (value.inheritance == 'overridden') {
              let firstPart = `${rightPad('',this.maxPlacement)}Value[${valueName}]${formattedValue.substr(index + valueName.length)}`;
              return firstPart;
            }
            return `${rightPad('Value:',this.maxPlacement - 6)}${formattedValue.trim()}`.replace(/[0-9]+\.\.[0-9]+/, '');
          }
          let firstPart = `${rightPad('',this.maxPlacement)}Value[${valueName}]${formattedValue.substr(index + valueName.length)}`;
          return firstPart;
        }
      }
    }

    formattedValue = this.replaceValue(formattedValue);

    if (!formatAsField) {
      if (formattedValue.includes('with units')) {
        let splitFormattedValue = formattedValue.trim().split(' ');
        let i = 0;
        let valueName = '';
        while(i < splitFormattedValue[0].length && splitFormattedValue[0][i] != '.' && splitFormattedValue[0][i] != '[') {
          valueName += splitFormattedValue[0][i];
          i += 1;
        }
        let formattedStr = `${rightPad('Value:', this.maxPlacement - 6)}${valueName}`;
        formattedStr += `\n${rightPad('',this.maxPlacement)}Value[${valueName}]${splitFormattedValue[0].substr(i)} = ${splitFormattedValue[splitFormattedValue.length - 1]}`;
        return formattedStr;
      }
      else if (formattedValue.includes('\r\n')) {
        let parts = formattedValue.trim().split('\r\n');
        let i = 0;
        let valueName = '';
        while(i < parts[0].length && parts[0][i] != '.' && parts[0][i] != '[' && parts[0][i] != '=') {
          valueName += parts[0][i];
          i += 1;
        }
        let formattedStr = `${rightPad('Value:', this.maxPlacement - 6)}${valueName}`;
        if (parts[0].includes(' or ')) {
          for (let j = 1; j < parts.length; j++) {
            valueName = parts[j].trim().split(' ')[0];
            let index = parts[j].trim().indexOf(valueName);
            formattedStr += `\n${rightPad('',this.maxPlacement)}Value[${valueName}]${parts[j].trim().substr(index + valueName.length)}`;
          }
        }
        else {
          for (let j = 0; j < parts.length; j++) {
            let index = parts[j].indexOf(valueName);
            formattedStr += `\n${rightPad('',this.maxPlacement)}Value[${valueName}]${parts[j].substr(index + valueName.length)}`;
          }
        }
        return formattedStr;
      } else {
        let i = 0;
        let valueName = '';
        while(i < formattedValue.trim().length && formattedValue.trim()[i] != '.' && formattedValue.trim()[i] != '[' && formattedValue.trim()[i] != ' ') {
          valueName += formattedValue.trim()[i];
          i += 1;
        }
        let index = formattedValue.indexOf(valueName);
        if (value.constructor.name == 'ChoiceValue' && value.inheritance) {
          let formattedStr = `${rightPad('',this.maxPlacement)}Value only ${formattedValue}`;
          return formattedStr;
        }
        if (valueName.trim() == 'concept' || formattedValue.includes(' or ') || formattedValue.includes(' from ')) {
          return `${rightPad('Value:',this.maxPlacement - 6)}${formattedValue.trim()}`.replace(/[0-9]+\.\.[0-9]+/, '');
        }
        let formattedStr = `${rightPad('Value:', this.maxPlacement - 6)}${valueName}`;
        if(valueName.length  < formattedValue.length) {
          formattedStr += `\n${rightPad('',this.maxPlacement)}Value[${valueName}]${formattedValue.substr(index + valueName.length)}`;
        }
        return formattedStr;
      }
    }
    return formattedValue;
  }

  formatValueByType(value, de, substituteHash) {
    if (value.identifier && value.identifier.fqn) {
      this.getIdFromFqnAndTrackUsed(value.identifier.fqn);
    }

    switch (value.constructor.name) {
    case 'IdentifiableValue':
      return value.identifier.name;
    case 'RefValue':
      return value.identifier.name;
    case 'IncompleteValue':
      return value.identifier.name;
    case 'ChoiceValue': {
      let choiceStrings = [];
      for (const opt of value.options) {
        let choiceStr = this.formatValueByType(opt, de, substituteHash);
        choiceStr = this.formatValueWithConstraints(choiceStr, opt, de, false, substituteHash);
        if (choiceStr.includes(' substitute ')) {
          choiceStr = choiceStr.split(' substitute ')[1];
        }
        choiceStrings.push(choiceStr);
      }
      return choiceStrings.join(' or ');
    }
    case 'TBD':
      return `TBD "${value.text}"`;
    default:
      return;
    }
  }

  formatValueWithCard(formattedValue, value, formatAsField) {

    formattedValue = this.replaceValue(formattedValue);

    if (!formatAsField && value.effectiveCard.min == 1 && value.effectiveCard.max == 1) {
      return formattedValue;
    }

    if (formatAsField && value.inheritedFrom) {
      return `${rightPad('', this.maxRightPad) }${formattedValue}`;
    }

    if (value.constructor.name == 'ChoiceValue') {
      formattedValue = `${formattedValue}`;
    }
    let cardString = `${value.effectiveCard.toString()} `;

    if (formatAsField) cardString = rightPad(cardString, this.maxRightPad);
    cardString = cardString.replace(':', '');

    return `${formattedValue} ${cardString}`;
  }

  getPathComponents(formattedByPath) {
    let pathComponents = [];
    let i = 0;
    let currentTerm = '';
    let actualPath = formattedByPath.split(' ')[0];
    while(i < actualPath.length) {
      if (actualPath[i] != '.' && actualPath[i] != '[' && actualPath[i] != ']') {
        currentTerm += actualPath[i];
      }
      else {
        pathComponents.push(currentTerm);
        currentTerm = '';
      }
      i += 1;
    }
    if(currentTerm.length > 0) {
      pathComponents.push(currentTerm);
    }
    return pathComponents;
  }

  formatValueWithConstraints(formattedByPath, value, de, formatAsField, substituteHash) {
    let counter = 0;
    let substitutionConstraints = [];
    let formattedWithConstraintTerms = [];
    let formattedWithConstraint = '';

    let orSplitTerms = formattedByPath.trim().split(' or ');
    if(value.constructor.name == 'ChoiceValue') {
      formattedWithConstraintTerms.push(formattedByPath);
    }
    for (const con of value.constraints) {
      if (con.fqn == de.fqn || con.lastModifiedBy.fqn == de.identifier.fqn) {
        let formattedByPathCopy = formattedByPath;
        if (!(formattedByPath.includes('.') || formattedByPath.includes('[') || formattedByPath.includes(' or '))) {
          for (let i = 0; i < con.path.length; i++) {
            if (!this.getPathComponents(formattedByPathCopy).includes(con.path[i].name)) {
              if (i < con.path.length - 1 || (i == con.path.length - 1 && this.replaceValue(con.path[i].name) != 'concept')) {
                formattedByPathCopy += `.${con.path[i].name}`;
              }
            }
          }
        }
        else if (formattedByPath.includes(' or ') && !(formattedByPath.includes('.') || formattedByPath.includes('['))) {
          if (con.path.length > 0) {
            if (orSplitTerms.includes(con.path[0].name)) {
              formattedByPathCopy = con.path[0].name;
            }
          }
          for (let i = 1; i < con.path.length; i++) {
            if (!this.getPathComponents(formattedByPathCopy).includes(con.path[i].name)) {
              if (i < con.path.length - 1 || (i == con.path.length - 1 && this.replaceValue(con.path[i].name != 'concept'))) {
                formattedByPathCopy += `.${con.path[i].name}`;
              }
            }
          }
        }
        formattedByPathCopy = this.replaceValue(formattedByPathCopy);
        if (!formattedByPathCopy.includes('[')) {
          formattedByPathCopy = this.updatePath(formattedByPathCopy, de);
        }
        if (con.constructor.name === 'IncludesTypeConstraint') {
          counter += 1;
          if (counter > 1) {
            formattedWithConstraint = this.formatValueByConstraintType('', con, formatAsField, value, {}, de);
          }
          else {
            formattedWithConstraint = this.formatValueByConstraintType(formattedByPathCopy, con, formatAsField, value, {}, de);
          }
        }
        else {
          formattedWithConstraint = this.formatValueByConstraintType(formattedByPathCopy, con, formatAsField, value, substituteHash, de);
        }
        if (formattedWithConstraint.includes('substitute')) {
          substitutionConstraints.push(`${rightPad('',this.maxPlacement)}${this.replaceValue(formattedWithConstraint.trim())}`);
        }
        else {
          formattedWithConstraintTerms.push(`${rightPad('',this.maxPlacement)}${this.replaceValue(formattedWithConstraint.trim())}`);
        }
      }
    }
    if (formattedWithConstraintTerms.length > 0 || substitutionConstraints.length > 0) {
      let mergedArray = substitutionConstraints.concat(formattedWithConstraintTerms);
      return mergedArray.join('\r\n');
    }
    else {
      return formattedByPath;
    }
  }

  formatValueByConstraintType(formattedValue, constraint, formatAsField, value, substituteHash, de) {
    formattedValue = this.replaceValue(formattedValue);
    switch (constraint.constructor.name) {
    case 'TypeConstraint': {
      return this.formatValueWithTypeConstraint(formattedValue, constraint, substituteHash, de);
    }
    /* For the case of ValueSet constraints, format the value if the first two
    parts of the constraint path are Units and Coding.
    */
    case 'ValueSetConstraint': {
      if (!formatAsField && constraint.path.length >= 2 && constraint.path[0].name == 'Units' && constraint.path[1].name == 'Coding') {
        if (!formattedValue.includes('.Units')) {
          return [
            formattedValue,
            `${rightPad('', this.maxRightPad)}${this.formatValueWithValueSetConstraint(`${formattedValue.replace(/.*\s([^\s]*)/,'$1')}.Units`, constraint)}`,
          ].join('\r\n');
        }
        else {
          return [
            formattedValue,
            `${rightPad('', this.maxRightPad)}${this.formatValueWithValueSetConstraint(`${formattedValue.replace(/.*\s([^\s]*)/,'$1')}`, constraint)}`,
          ].join('\r\n');
        }
      }
      return this.formatValueWithValueSetConstraint(formattedValue, constraint);
    }
    case 'CardConstraint': {
      return this.formatValueWithCardConstraint(formattedValue, constraint);
    }
    case 'IncludesTypeConstraint':
      return this.formatValueWithIncludesTypeConstraint(formattedValue, constraint);
    case 'IncludesCodeConstraint':
      return this.formatValueWithIncludesCodeConstraint(formattedValue, constraint);
    case 'BooleanConstraint':
      return this.formatValueWithBooleanConstraint(formattedValue, constraint);
    case 'CodeConstraint':
      return this.formatValueWithCodeConstraint(formattedValue, constraint);
    default:
      return formattedValue;
    }
  }

  formatValueWithTypeConstraint(formattedValue, constraint, substituteHash, de) {
    if (constraint.isA.fqn) {
      this.getIdFromFqnAndTrackUsed(constraint.isA.fqn);
    }
    if (constraint.onValue || formattedValue.trim() == 'Value') {
      return `${formattedValue.trim()} only ${this.replaceValue(constraint.isA.name)}`;
    }
    else {
      if (!substituteHash.hasOwnProperty(de.identifier.namespace)) {
        substituteHash[de.identifier.namespace] = {};
      }
      if (!substituteHash[de.identifier.namespace].hasOwnProperty(de.identifier.name)) {
        substituteHash[de.identifier.namespace][de.identifier.name] = {};
      }
      if (constraint.isA.name == 'CodeableConcept') {
        return '';
      }
      substituteHash[de.identifier.namespace][de.identifier.name][formattedValue.trim().replace(/[0-9]+\.\.[0-9]+/, '')] = this.replaceValue(constraint.isA.name);
      return `${formattedValue.trim()} substitute ${this.replaceValue(constraint.isA.name)}`;
    }
  }

  formatValueWithValueSetConstraint(formattedValue, constraint) {
    let vs = constraint.valueSet;

    if (vs.identifier && vs.identifier.fqn) {
      this.getIdFromFqnAndTrackUsed(vs.identifier.fqn);
    }


    if (vs.startsWith('http://standardhealthrecord.org')) {
      vs = this.getVSFromURIAndTrackUsed(vs);
    } else if (vs.startsWith('urn:tbd:')) {
      vs = `TBD "${vs.replace('urn:tbd:', '')}"`;
    }

    formattedValue = this.replaceValue(formattedValue);

    let vs_object = this.specs._valueSets.findByURL(vs);
    if (vs_object !== undefined) {
      vs = vs_object.identifier.name;
    }
    switch (constraint.bindingStrength) {
    case 'REQUIRED':
      return `${formattedValue} from ${vs} (required)`;
    case 'EXTENSIBLE':
      return `${formattedValue} from ${vs} (extensible)`;
    case 'PREFERRED':
      return `${formattedValue} from ${vs} (preferred)`;
    case 'EXAMPLE':
      return `${formattedValue} from ${vs} (example)`;
    default:
      return formattedValue;
    }
  }

  formatValueWithCardConstraint(formattedValue, constraint, formatAsField) {
    let formattedConstraint = `${formattedValue.replace('\t','')} ${constraint.card.toString()}`;
    return formattedConstraint;
  }

  formatValueWithBooleanConstraint(formattedValue, constraint) {
    return `${formattedValue} = ${constraint.value}`;
  }

  formatValueWithCodeConstraint(formattedValue, constraint) {
    let shorthand = this.shFromCodeSystem(constraint.code.system);
    if (!shorthand) {
      shorthand = '';
    }

    let formattedDisplay = '';
    if (constraint.code.display) {
      formattedDisplay = ` "${constraint.code.display}"`;
    }

    let formattedCode = `${shorthand}#${constraint.code.code}${formattedDisplay}`;

    if (constraint.path.length >= 2 && constraint.path[0].name == 'Units' && constraint.path[1].name == 'Coding') {
      return `${formattedValue} with units ${formattedCode}`;
    }
    if (formattedValue.includes('.ConceptCode')) {
      formattedValue = formattedValue.replace('.ConceptCode','');
    }
    return `${formattedValue} = ${formattedCode}`;
  }

  formatValueWithIncludesTypeConstraint(formattedValue, constraint) {
    let formattedConstraint = `includes ${constraint.isA.name} ${constraint.card.toString()}`;

    if (formattedValue.length > 0) {
      return [formattedValue, `${rightPad('',this.maxPlacement)}${formattedConstraint}`].join('\r\n');
    }
    else {
      return formattedConstraint;
    }
  }

  formatValueWithIncludesCodeConstraint(formattedValue, constraint) {
    let shorthand = this.shFromCodeSystem(constraint.code.system);
    if (!shorthand) {
      shorthand = '';
    }

    let formattedDisplay = '';
    if (constraint.code.display) {
      formattedDisplay = ` "${constraint.code.display}"`;
    }

    let formattedCode = `${shorthand}#${constraint.code.code} ${formattedDisplay.trim()}`;
    let formattedConstraint = `+= ${formattedCode.trim()}`;
    return [formattedValue, formattedConstraint].join('\r\n');
  }
}

module.exports = { DataElementFormatterCimpl6 };
