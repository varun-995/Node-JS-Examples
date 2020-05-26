// pipe allows us to take a readable stream and send it over to a writable stream. In order to use pipe, we need 2 streams we need a 
// source stream and a destination stream
const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
// if example2.txt doesn't exist then first it will create a file by that name and then write to it
const writeStream = fs.createWriteStream('example2.txt'); 
// pipe is going to take what read stream gives and it's going to pipe it into our write stream
readStream.pipe(writeStream);