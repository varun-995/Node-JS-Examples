// Pipe Chaining - 1

const fs = require('fs');
// zlib module help us to compress files
const zlib = require('zlib');

// creating a transformed stream(It takes an input so for example from read stream and then when it receives the data it manipulates 
// that data into something else, in this into compressed data)
const gzip = zlib.createGzip();

// In this example we will read the data in chunks then compress it and write it
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt.gz'); 
readStream.pipe(gzip).pipe(writeStream);