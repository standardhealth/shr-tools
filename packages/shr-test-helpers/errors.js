const bunyan = require('bunyan');

var rb = new bunyan.RingBuffer({ limit: 100 });

function logger(level='error') {
  return bunyan.createLogger({
    name: 'test',
    streams: [{ level: level, type: 'raw', stream: rb }]
  });
}

function errors() {
  // Return a clone of the array so that clear() doesn't clear the result
  return [...rb.records];
}

function hasErrors() {
  return rb.records.length > 0;
}

function clear() {
  rb.records.length = 0;
}

module.exports = {logger, errors, hasErrors, clear};