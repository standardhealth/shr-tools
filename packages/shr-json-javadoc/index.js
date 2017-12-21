const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const ncp = require('ncp').ncp;
const Namespaces = require('./components/namespaces');
const Elements = require('./components/Elements');

// Function to generate and write html from an ejs template
renderEjsFile = (template, pkg, destination) => {
  ejs.renderFile(template, pkg, (error, htmlText) => {
    if (error) console.log(error);
    else fs.writeFileSync(destination, htmlText);
  });
}

/*
 *  SHR class holds the canonical json in memory.
 *  Uses Namespaces and Elements classes to hold the data.
 */
class SHR {
  constructor(src, out) {
    this.outDirectory = out;
    this.elements = new Elements();
    this.namespaces = new Namespaces();
    this.children = {};
    this.readFiles(src);
    this.elements.flatten();
  }

  // Read in the canonical json files
  // Assumes first level of directories are namespaces
  readFiles(src) {
    fs.readdirSync(src).forEach((subdir) => {
      const subPath = path.join(src, subdir);
      if (!fs.lstatSync(subPath).isDirectory()) return;

      fs.readdirSync(subPath).forEach((item) => {
        // Ignores mappings and valuesets
        if (item === 'mappings' || item === 'valuesets') return;
        // Ensures file is json
        if (item.split('.').pop() !== 'json') return;

        const filePath = path.join(subPath, item);
        const fileData = fs.readFileSync(filePath, 'utf-8');
        let content = JSON.parse(fileData);

        // Checks if file is an element
        if ('fqn' in content) {
          this.elements.add(content);
          let element = this.elements.get(content.fqn);
          let namespace = this.namespaces.get(element.namespace);
          namespace.addElement(element);
          element.namespacePath = namespace.path;
        // Checks if file is namespace descriptor
        } else {
          let namespace = this.namespaces.get(content.name);
          namespace.description = content.description;
        }
      });
    });
  }

  // Builds the output directory folder structure
  buildOutputDirectory() {
    if (!fs.existsSync(this.outDirectory))
      fs.mkdirSync(this.outDirectory);

    this.namespaces.list().forEach((namespace) => {
      const dir = path.join(out, namespace.path);
      if (!fs.existsSync(dir))
        fs.mkdirSync(dir);
    });
  }

  // Copy the required files to output directory
  // This includes images, index.html, and the stylesheet
  copyRequiredFiles() {
    ncp('required', this.outDirectory, (error) => {
      if (error) return console.log(error);
    });
  }

  // Builds the package files that contain lists of the elements for 
  // a given namespace
  buildPackageFiles() {
    this.namespaces.list().forEach((namespace) => {
      const fileName = `${namespace.path}-pkg.html`;
      const filePath = path.join(this.outDirectory, namespace.path, fileName);
      const ejsPkg = { elements: namespace.elements, namespace: namespace };
      renderEjsFile('templates/pkg.ejs', ejsPkg, filePath);
    });
  }

  // Builds the info files that describe each namespace
  buildInfoFiles() {
    this.namespaces.list().forEach((namespace) => {
      const fileName = `${namespace.path}-info.html`;
      const filePath = path.join(this.outDirectory, namespace.path, fileName);
      const ejsPkg = { namespace: namespace };
      renderEjsFile('templates/info.ejs', ejsPkg, filePath);
    });
  }

  // Builds the overview list which displays all the namespaces
  buildOverviewFrame() {
    const ejsPkg = { namespaces: this.namespaces.list() };
    const filePath = path.join(this.outDirectory, 'overview-frame.html');
    renderEjsFile('templates/overview-frame.ejs', ejsPkg, filePath);
  }

  // Builds overiew list of all the data elements on the main page
  buildOverviewSummary() {
    const ejsPkg = { elements: this.elements.list() };
    const filePath = path.join(this.outDirectory, 'overview-summary.html');
    renderEjsFile('templates/overview-summary.ejs', ejsPkg, filePath);
  }

  // Builds list of all the data elements on the main page
  buildAllElementsFrame() {
    const ejsPkg = { elements: this.elements.list() };
    const filePath = path.join(this.outDirectory, 'allclasses-frame.html');
    renderEjsFile('templates/allclasses-frame.ejs', ejsPkg, filePath);
  }

  // Builds pages for each data element
  buildDataElements() {
    this.elements.list().forEach((element) => {
      const ejsPkg = { element: element };
      const fileName = `${element.name}.html`;
      const filePath = path.join(out, element.namespacePath, fileName);
      renderEjsFile('templates/dataElement.ejs', ejsPkg, filePath);
    });
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

// Read in command line arguments and set source and output directories
let src = 'canonicaljson'
let out = 'shr-javadoc'
let argv = minimist(process.argv.slice(2));
if ('s' in argv) src = argv.s;
if ('o' in argv) out = argv.o;

// Run main code
let shr = new SHR(src, out);
shr.generateHTML()