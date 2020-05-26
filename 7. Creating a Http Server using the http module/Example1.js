// HTTP Module allows us to create a web server with node js

const http = require('http');
// createServer method is gonna take a callback and this callback is gonna give us a request and response object
const server = http.createServer((req, res) => { // req object is what the client requests from us
    // res.write('Hello world from node js'); // this sets the response
    // res.end(); // this line sends the response

    // printing hello world from node js if it is the root domain
    if(req.url === '/') {
        res.write('Hello world from node js');
        res.end();
    } else {
        res.write('using some other domain');
        res.end();
    }
});

// server is listening for requests on port no. 3000
server.listen('3000');