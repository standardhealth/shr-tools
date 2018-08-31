const {importFromFilePath} = require('./index');

if (process.argv.length < 3) {
  console.error('Missing path to SHR definition folder or file');
}

const result = importFromFilePath(process.argv[2]);
