'use strict';

const fs = require('fs');
const { Transform } = require('stream');

const upperStream = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

const source = fs.createReadStream('./6-transform.js');
source.pipe(upperStream).pipe(process.stdout);
