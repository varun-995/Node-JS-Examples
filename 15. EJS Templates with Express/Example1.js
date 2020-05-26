// on acquiring express module a function is returned
const express = require('express');
const path = require('path');
// on executing the function it returns an object and has a bunch of methods that we can use in our app
const app = express();
app.set('view engine', 'ejs');

// 1st argument - route
// 2nd argument - a callback
app.get('/:userQuery', (req, res) => {
    // when we render this index.ejs file what's happening is the server is going to look at this ejs file for ejs code
    // it is going to execute it and then send back to the client an HTML file.
    res.render('index', {data : {userQuery: req.params.userQuery,
                                searchResults: ['books1', 'books2', 'books3'],
                                loggedIn: true,
                                username: 'varun'}});
});

app.listen(3000);
