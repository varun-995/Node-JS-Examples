// on acquiring express module a function is returned
const express = require('express');
const bodyParser = require('body-parser');

// on executing the function it returns an object and has a bunch of methods that we can use in our app
const app = express();

// bodyParser.json() is a middleware function that when the user makes a request, this function will take the users 
// request and process it, in our case the bodyParser.json() checks to see if the user have sent any json data, processes it 
// and then attaches it to the request body and then it calls a function called next to let the server know we are done
// processing this request you can send anotherrequest
app.use(bodyParser.json());

// NOTE: it is necessary to invoke next method when you are creating a custom middleware, it let express know that hey i am finished
// processing this request, if you don't call the next method what's end up happening is you are gonna timeout the server because it has
// no idea whether or not you are finish processing  the request

// any user request is going to get processed by this middleware
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

// what if we want to execute a middleware when a certain route gets requested(be it a get, post, put or a delete request)
app.use('/example', (req, res, next) => {
    console.log(req.url, req.method);
    req.banana = 'banana';
    next();
});

// 1st argument - route
// 2nd argument - a callback
app.get('/', (req, res) => {
    console.log('request has went through the middleware');
    console.log(req.banana);
    res.send('middleware');
});

app.listen(3000);