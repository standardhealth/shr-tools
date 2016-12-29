const {importFromFilePath} = require('./index');

if (process.argv.length < 3) {
  console.error('Missing path to SHR definition folder or file');
}

const result = importFromFilePath(process.argv[2]);
for (const err of result.errors) {
  console.error(`Import Error: ${err}`);
}