const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const bunyan = require('bunyan');
const ncp = require('ncp').ncp;
const Namespaces = require('./components/namespaces');
const Elements = require('./components/elements');

const showdown = require('showdown');
const mdConverter = new showdown.Converter();

var rootLogger = bunyan.createLogger({ name: 'shr-json-javadoc' });
var logger = rootLogger;
function setLogger(bunyanLogger) {
  rootLogger = logger = bunyanLogger;
  require('./components/constraints').setLogger(logger);
}

function compileJavadoc(modelDocConfig, outPath, configureForIG=false) {
  // Run main code
  return new SHR(modelDocConfig, outPath, configureForIG);
}

function exportToPath(compiledSHR, outPath) {
  // export HTML
  compiledSHR.outDirectory = outPath;
  compiledSHR.generateHTML();
}

function makeHtml(md) {
  // First we need to escape < and >
  if (md != null) {
    md = md.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  return mdConverter.makeHtml(md);
}

// Function to generate and write html from an ejs template
function renderEjsFile(template, pkg, destination) {
  ejs.renderFile(path.join(__dirname, template), Object.assign(pkg, {makeHtml: makeHtml}), (error, htmlText) => {
    if (error) {
      // 17001, 'Error rendering model doc: ${errorText}',  'Unknown' , 'errorNumber'
      logger.error({errorText: error.stack }, '17001' );
    }
    else fs.writeFileSync(destination, htmlText);
  });
}

/*
 *  SHR class holds the canonical json in memory.
 *  Uses Namespaces and Elements classes to hold the data.
 */
class SHR {
  constructor(modelDocConfig, out, configureForIG) {
    this.outDirectory = out;
    this.configureForIG = configureForIG;
    this.elements = new Elements(modelDocConfig.projectInfo, configureForIG);
    this.namespaces = new Namespaces();
    this.children = {};
    this.readConfig(modelDocConfig);
    this.elements.flatten();
  }

  set metaData(metaData) { this._metaData = metaData;}
  get metaData() { return this._metaData; }

  // Populate namespaces and elements from config
  readConfig(modelDocConfig) {
    // 07002, 'Compiling Documentation for ${count} namespaces...',,
    logger.info({ count: Object.keys(modelDocConfig.namespaces).length }, '07002');
    this.metaData = modelDocConfig.projectInfo;
    for (const ns of modelDocConfig.namespaces) {
      const namespace = this.namespaces.get(ns.namespace);
      namespace.description = ns.description;
    }

    for (const de of modelDocConfig.dataElements) {
      this.elements.add(de);
      const element = this.elements.get(de.identifier.fqn);
      const namespace = this.namespaces.get(element.namespace);
      namespace.addElement(element);
      element.namespacePath = namespace.path;
    }
  }

  // Builds the output directory folder structure
  buildOutputDirectory() {
    if (!fs.existsSync(this.outDirectory))
      fs.mkdirSync(this.outDirectory);

    for (const namespace of this.namespaces.list()) {
      const dir = path.join(this.outDirectory, namespace.path);
      if (!fs.existsSync(dir))
        fs.mkdirSync(dir);
    }
  }

  // Copy the required files to output directory
  // This includes images, index.html, and the stylesheet
  copyRequiredFiles() {
    ncp(path.join(__dirname, 'required'), this.outDirectory, (error) => {
      if (error) {
        // 17002, 'Error copying files for export of model doc: ${errorText}',  'Unknown' , 'errorNumber'
        logger.error({errorText : error.stack},'17002' );
        return;
      }
    });
  }

  // Builds the package files that contain lists of the elements for
  // a given namespace
  buildPackageFiles() {
    for (const namespace of this.namespaces.list()) {
      const fileName = `${namespace.path}-pkg.html`;
      const filePath = path.join(this.outDirectory, namespace.path, fileName);
      const myElements = namespace.elements.sort().map(de => this.elements.get(namespace.name + '.' + de));
      const ejsPkg = { elements: myElements, namespace: namespace, metaData: this.metaData };
      renderEjsFile('templates/pkg.ejs', ejsPkg, filePath);
    }
  }

  // Builds the info files that describe each namespace
  buildInfoFiles() {
    for (const namespace of this.namespaces.list()) {
      const fileName = `${namespace.path}-info.html`;
      const filePath = path.join(this.outDirectory, namespace.path, fileName);
      const ejsPkg = { namespace: namespace, elements: this.elements, metaData: this.metaData  };
      renderEjsFile('templates/info.ejs', ejsPkg, filePath);
    }
  }

  // Builds the overview list which displays all the namespaces
  buildOverviewFrame() {
    const ejsPkg = { namespaces: this.namespaces.list(), metaData: this.metaData  };
    const filePath = path.join(this.outDirectory, 'overview-frame.html');
    renderEjsFile('templates/overview-frame.ejs', ejsPkg, filePath);
  }

  // Builds overiew list of all the data elements on the main page
  buildOverviewSummary() {
    const ejsPkg = { elements: this.elements.list(), metaData: this.metaData  };
    const filePath = path.join(this.outDirectory, 'overview-summary.html');
    renderEjsFile('templates/overview-summary.ejs', ejsPkg, filePath);
  }

  // Builds list of all the data elements on the main page
  buildAllElementsFrame() {
    const ejsPkg = { elements: this.elements.list(), metaData: this.metaData  };
    const filePath = path.join(this.outDirectory, 'allclasses-frame.html');
    renderEjsFile('templates/allclasses-frame.ejs', ejsPkg, filePath);
  }

  // Builds pages for each data element
  buildDataElements() {
    // 07003, 'Building documentation pages for ${count} elements...',,
    logger.info({ count: this.elements.list().length }, '07003');
    for (const element of this.elements.list()) {
      const ejsPkg = { element: element, metaData: this.metaData  };
      const fileName = `${element.name}.html`;
      const filePath = path.join(this.outDirectory, element.namespacePath, fileName);
      renderEjsFile('templates/dataElement.ejs', ejsPkg, filePath);
    }
  }

  // Runs all the different components to generate the html files
  generateHTML() {
    this.buildOutputDirectory();
    this.copyRequiredFiles();
    this.buildPackageFiles();
    this.buildInfoFiles();
    this.buildOverviewFrame();
    this.buildOverviewSummary();
    this.buildAllElementsFrame();
    this.buildDataElements();
  }
}

function errorFilePath() {
  return require('path').join(__dirname, 'errorMessages.txt');
}

module.exports = {setLogger, compileJavadoc, exportToPath, errorFilePath};