// on acquiring express module a function is returned
const express = require('express');
const path = require('path');
// on executing the function it returns an object and has a bunch of methods that we can use in our app
const app = express();
// where ever you see app.use() it means middleware is getting used
// 1st argument - alias for the static folder(why is it necessary?, it is because i don't want people outside of my server to know it that this folder is called static)
// 2nd argument - middleware function
// __dirname is going to return path of Example1.js
app.use('/public', express.static(path.join(__dirname, 'static')));
// Note:- references to js and css files in index.html is done using public

// 1st argument - route
// 2nd argument - a callback
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(3000);