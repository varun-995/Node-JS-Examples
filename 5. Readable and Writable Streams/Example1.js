// Allow us to read and write data more efficiently and the way they accomplish that is by reading and writing data in chunks 
// as opposed to reading and writing the data all at once
const fs = require('fs');
// creating a readable stream
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt');

// readStream object inherits from the EventEmitter class so that means we could listen for events to occur
readStream.on('data', (chunk) => {
    // this function will be called when we get a piece of data
    // console.log(chunk);
    // writing a piece of data to other file as soon as it is read
    writeStream.write(chunk);
});
