// Pipe Chaining - 2

const fs = require('fs');
// zlib module help us to compress files
const zlib = require('zlib');
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt'); 
readStream.pipe(gunzip).pipe(writeStream);