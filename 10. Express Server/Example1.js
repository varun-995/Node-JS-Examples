// on acquiring express module a function is returned
const express = require('express');
// on executing the function it returns an object and has a bunch of methods that we can use in our app
const app = express();


// 1st argument - route
// 2nd argument - a callback
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Diving in more with Express Http Get Request, Route Params and Query Strings
app.get('/example', (req, res) => {
    res.send('hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query); // added in url using ?
    res.send(req.params.name + " : " + req.params.age);
});

app.listen(3000);