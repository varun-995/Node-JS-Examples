const express = require('express');

// express.Router() return an instance of the router
const route = express.Router();

// custom middleware
// this middleware will only going to be used within our people route
route.use((req, res, next) => {
    console.log('people middleware used');
    next();
});

// setting routes
route.get('/', (req, res) => {
    res.send('/ being hit');
});

route.get('/example', (req, res) => {
    res.send('/example being hit');
});

// exposing route instance so that Example1.js can access it
module.exports = route;