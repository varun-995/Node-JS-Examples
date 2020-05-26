// on acquiring express module a function is returned
const express = require('express');
const path = require('path');
const Joi = require('joi'); 
const bodyParser = require('body-parser');

// on executing the function it returns an object and has a bunch of methods that we can use in our app
const app = express();
// where ever you see app.use() it means middleware is getting used
// 1st argument - alias for the static folder(why is it necessary?, it is because i don't want people outside of my server to know it that this folder is called static)
// 2nd argument - middleware function
// __dirname is going to return path of Example1.js
// Note:- references to js and css files in index.html present in static folder is done using public
app.use('/public', express.static(path.join(__dirname, 'static')));

// This will parse url encoded forms i.e parses the data and attaches it to the request body, the extended option is set to false
// because we aren't dealing with any complicated objects, all we want is an email and password which are both strings
app.use(bodyParser.urlencoded({extended: false}));

// this will parse json and attach it to req body
app.use(bodyParser.json());

// 1st argument - route
// 2nd argument - a callback
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);
    // schema is a blueprint, a set of rules that we want our data to have
    const schema = Joi.object().keys({
        email: Joi.string().trim().email().required(),
        password: Joi.string().min(5).max(10).required()
    });
    // 1st argument - object you want to validate
    // 2nd argument - schema
    // 3rd argument - a callback function
    Joi.validate(req.body, schema, (err, result) => {
        if(err) {
            console.log(err);
            res.send('an error has occurred');
        }
        console.log(result); // result is the request body
        res.send('successfully posted data')
    });
});

app.listen(3000);