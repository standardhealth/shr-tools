#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const mkdirp = require('mkdirp');
const bunyan = require('bunyan');
const program = require('commander');
const chalk = require('chalk');
const { sanityCheckModules } = require('shr-models');
const shrTI = require('shr-text-import');
const shrEx = require('shr-expand');
const shrFE = require('shr-fhir-export');
const shrJDE = require('shr-json-javadoc');
const shrDD = require('shr-data-dict-export');
const LogCounter = require('./logcounter');
const SpecificationsFilter = require('./filter');

/* eslint-disable no-console */

sanityCheckModules({shrTI, shrEx, shrFE });

// Record the time so we can print elapsed time
const hrstart = process.hrtime();

function collect(val, list) {
  list.push(val);
  return list;
}

let input;
program
  .usage('<path-to-shr-defs> [options]')
  .option('-l, --log-level <level>', 'the console log level <fatal,error,warn,info,debug,trace>', /^(fatal|error|warn|info|debug|trace)$/i, 'info')
  .option('-s, --skip <feature>', 'skip an export feature <fhir,model-doc,data-dict,all>', collect, [])
  .option('-m, --log-mode <mode>', 'the console log mode <normal,json,off>', /^(normal|json|off)$/i, 'normal')
  .option('-o, --out <out>', `the path to the output folder`, path.join('.', 'out'))
  .option('-c, --config <config>', 'the name of the config file', 'config.json')
  .option('-d, --deduplicate', 'do not show duplicate error messages (default: false)')
  .option('-i, --import-cimcore', 'import CIMCORE files instead of CIMPL (default: false)')
  .option('-n, --clean', 'Save archive of old output directory and perform clean build (default: false)')
  .arguments('<path-to-shr-defs>')
  .action(function (pathToShrDefs) {
    input = pathToShrDefs;
  })
  .parse(process.argv);

// Check that input folder is specified
if (typeof input === 'undefined') {
  console.error('\x1b[31m','Missing path to SHR definition folder or file','\x1b[0m');
  program.help();
}
// Process the skip flags
const doFHIR = program.skip.every(a => a.toLowerCase() != 'fhir' && a.toLowerCase() != 'all');
const doModelDoc = program.skip.every(a => a.toLowerCase() != 'model-doc' && a.toLowerCase() != 'all');
const doDD = program.skip.every(a => a.toLowerCase() != 'data-dict' && a.toLowerCase() != 'all');

// Process the de-duplicate error flag

const showDuplicateErrors = !program.deduplicate;
const importCimcore = program.importCimcore;
const clean = program.clean;

// Archive old output directory if it exists
if (clean && fs.existsSync(program.out)) {
  let archiveDir;
  let targetDir;
  let slashIndex = program.out.lastIndexOf('/') > 0 ? 
    program.out.lastIndexOf('/') : program.out.lastIndexOf('\\');
  // Figure out path to move directory into archive
  if (slashIndex > 0) {
    archiveDir = path.join(program.out.substring(0, slashIndex), 'archive');
    targetDir = path.join(archiveDir, program.out.substr(slashIndex));
  } else {
    archiveDir = 'archive';
    targetDir = path.join(archiveDir, program.out);
  }
  // If archive does not exist, create it
  if (!fs.existsSync(archiveDir)) {
    mkdirp.sync(archiveDir);
  }
  // Ensure no naming conflicts with previous archives
  let counter = 1;
  while(fs.existsSync(targetDir + '-' + counter)) { counter += 1; }
  fs.renameSync(program.out, targetDir + '-' + counter);
}

// Create the output folder if necessary
mkdirp.sync(program.out);

const errorFiles = [shrTI.errorFilePath(), shrEx.errorFilePath(), shrFE.errorFilePath(), shrJDE.errorFilePath(),
  path.join(__dirname, "errorMessages.txt")]

const PrettyPrintDuplexStreamJson = require('./PrettyPrintDuplexStreamJson');
const mdpStream = new PrettyPrintDuplexStreamJson(null, errorFiles, showDuplicateErrors, path.join(program.out, 'out.log'));

// Set up the logger streams
const [ll, lm] = [program.logLevel.toLowerCase(), program.logMode.toLowerCase()];
const streams = [];
if (lm == 'normal') {
  streams.push({ level: ll, stream: mdpStream });
  mdpStream.pipe(process.stdout);
} else if (lm == 'json') {
  streams.push({ level: ll, stream: process.stdout });
}
// Setup a ringbuffer for counting the number of errors at the end
const logCounter = new LogCounter();
streams.push({ level: 'warn', type: 'raw', stream: logCounter});
// Always do a full JSON log
const logger = bunyan.createLogger({
  name: 'shr',
  module: 'shr-cli',
  streams: streams
});

shrTI.setLogger(logger.child({module: 'shr-text-input'}));
shrEx.setLogger(logger.child({module: 'shr-expand'}));
if (doFHIR) {
  shrFE.setLogger(logger.child({module: 'shr-fhir-export'}));
}
if (doModelDoc) {
  shrJDE.setLogger(logger.child({ module: 'shr-json-javadoc' }));
}
if (doDD) {
  shrDD.setLogger(logger.child({ module: 'shr-data-dict-export'}));
}

// Go!
// 05001, 'Starting CLI Import/Export',,
logger.info('05001');

let configSpecifications = shrTI.importConfigFromFilePath(input, program.config);
if (!configSpecifications) {
  process.exit(1);
}
let specifications;
let expSpecifications;
if (!importCimcore) {
  specifications = shrTI.importFromFilePath(input, configSpecifications);
  configSpecifications.specPath = input;
  expSpecifications = shrEx.expand(specifications, configSpecifications, shrFE);
} else {
  [configSpecifications, expSpecifications] = shrTI.importCIMCOREFromFilePath(input);
}


let filter = false;
if (configSpecifications.filterStrategy != null) {
  filter = configSpecifications.filterStrategy.filter;
  // 05009, 'Using filterStrategy in the configuration file is deprecated and should be done in content profile instead',,
  logger.warn('05009')
}
if (configSpecifications.implementationGuide && configSpecifications.implementationGuide.primarySelectionStrategy) {
  // 05010, 'Using primarySelectionStrategy in the configuration file is deprecated and should be done in content profile instead',,
  logger.warn('05010');
}
if (expSpecifications.contentProfiles.all.length > 0) {
  filter = true;
}

if (filter) {
  const specificationsFilter = new SpecificationsFilter(specifications, expSpecifications, configSpecifications);
  [specifications, expSpecifications] = specificationsFilter.filter();
}

const failedExports = [];

if (doDD) {
  try {
    const hierarchyPath = path.join(program.out, 'data-dictionary');
    shrDD.generateDDtoPath(expSpecifications, configSpecifications, hierarchyPath);
  } catch (error) {
    // 15006, 'Failure in data dictionary export. Aborting with error message: ${errorText}',  'Unknown, 'errorNumber'
    logger.fatal({ errorText: error.stack }, '15006');
    failedExports.push('shr-data-dict-export');
  }
} else {
  // 05004, 'Skipping Data Dictionary export',,
  logger.info('05004');
}

let fhirResults = null;
if (doFHIR){
  fhirResults = shrFE.exportToFHIR(expSpecifications, configSpecifications);
}


if (doFHIR) {
  try {
    const baseFHIRPath = path.join(program.out, 'fhir');
    const baseFHIRProfilesPath = path.join(baseFHIRPath, 'profiles');
    mkdirp.sync(baseFHIRProfilesPath);
    for (const profile of fhirResults.profiles) {
      fs.writeFileSync(path.join(baseFHIRProfilesPath, `${profile.id}.json`), JSON.stringify(profile, null, 2));
    }
    const baseFHIRExtensionsPath = path.join(baseFHIRPath, 'extensions');
    mkdirp.sync(baseFHIRExtensionsPath);
    for (const extension of fhirResults.extensions) {
      fs.writeFileSync(path.join(baseFHIRExtensionsPath, `${extension.id}.json`), JSON.stringify(extension, null, 2));
    }
    const baseFHIRCodeSystemsPath = path.join(baseFHIRPath, 'codeSystems');
    mkdirp.sync(baseFHIRCodeSystemsPath);
    for (const codeSystem of fhirResults.codeSystems) {
      fs.writeFileSync(path.join(baseFHIRCodeSystemsPath, `${codeSystem.id}.json`), JSON.stringify(codeSystem, null, 2));
    }
    const baseFHIRValueSetsPath = path.join(baseFHIRPath, 'valueSets');
    mkdirp.sync(baseFHIRValueSetsPath);
    for (const valueSet of fhirResults.valueSets) {
      fs.writeFileSync(path.join(baseFHIRValueSetsPath, `${valueSet.id}.json`), JSON.stringify(valueSet, null, 2));
    }
    const baseFHIRModelsPath = path.join(baseFHIRPath, 'logical');
    mkdirp.sync(baseFHIRModelsPath);
    for (const model of fhirResults.models) {
      fs.writeFileSync(path.join(baseFHIRModelsPath, `${model.id}.json`), JSON.stringify(model, null, 2));
    }
    fs.writeFileSync(path.join(baseFHIRPath, `shr_qa.html`), fhirResults.qaHTML);
    shrFE.exportIG(expSpecifications, fhirResults, path.join(baseFHIRPath, 'guide'), configSpecifications, input);
  } catch (error) {
    // 15008, 'Failure in FHIR export. Aborting with error message: ${errorText}',  'Unknown, 'errorNumber'
    logger.fatal({ errorText: error.stack }, '15008');
    failedExports.push('shr-fhir-export');
  }
} else {
  // 05006, 'Skipping FHIR export',,
  logger.info('05006');
}


if (doModelDoc) {
  try {
    const hierarchyPath = path.join(program.out, 'modeldoc');
    const modelDocConfig = {
      namespaces: expSpecifications.namespaces.all,
      dataElements: expSpecifications.dataElements.all,
      projectInfo: configSpecifications
    };
    const javadocResults = shrJDE.compileJavadoc(modelDocConfig, hierarchyPath);
    shrJDE.exportToPath(javadocResults, hierarchyPath);
    if (doFHIR && configSpecifications.implementationGuide.includeModelDoc == true) {
      const fhirPath = path.join(program.out, 'fhir', 'guide', 'pages', 'modeldoc');
      const igJavadocResults = shrJDE.compileJavadoc(modelDocConfig, hierarchyPath, true);
      shrJDE.exportToPath(igJavadocResults, fhirPath);
    }
  } catch (error)  {
    logger.fatal({ errorText: error.stack }, '15010');
    failedExports.push('shr-model-doc');
  }
} else {
  // 05008, 'Skipping Model Docs export',,
  logger.info('05008');
}
// 05002, 'Finished CLI Import/Export',,
logger.info('05002');

const ftlCounter = logCounter.fatal;
const errCounter = logCounter.error;
const wrnCounter = logCounter.warn;
let [errLabel, wrnLabel, ftlLabel] = ['errors', 'warnings', 'fatal errors'];
if (ftlCounter.count > 0) {
  ftlLabel = `fatal errors (${failedExports.join(', ')})`;
}
if (errCounter.count > 0) {
  errLabel = `errors (${errCounter.modules.join(', ')})`;
}
if (wrnCounter.count > 0) {
  wrnLabel = `warnings (${wrnCounter.modules.join(', ')})`;
}

// Get the elapsed time
const hrend = process.hrtime(hrstart);
console.log('------------------------------------------------------------');
console.log('Elapsed time: %d.%ds', hrend[0], Math.floor(hrend[1]/1000000));
if (ftlCounter.count > 0) console.log(chalk.redBright('%d %s'), ftlCounter.count, ftlLabel);
console.log(chalk.bold.redBright('%d %s'), errCounter.count, errLabel);
console.log(chalk.bold.yellowBright('%d %s'), wrnCounter.count, wrnLabel);
console.log('------------------------------------------------------------');
