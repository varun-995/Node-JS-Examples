const http = require('http');
const fs = require('fs');
// createServer method is gonna take a callback and this callback is gonna give us a request and response object
const server = http.createServer((req, res) => { // req object is what the client requests from us
    // const readStream = fs.createReadStream('./static/index.html');
    // // header - It is responsible for is to let the client know what kind of data that i am expecting
    // res.writeHead(200, {'Content-type': 'text/html'});

    // const readStream = fs.createReadStream('./static/example.json');
    // res.writeHead(200, {'Content-type': 'application/json'});

    const readStream = fs.createReadStream('./static/example.png');
    res.writeHead(200, {'Content-type': 'image/png'});

    readStream.pipe(res); // res is a writable Stream and hence we can pipe readStream output to it
}).listen('3000');