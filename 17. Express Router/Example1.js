const express = require('express');
const app = express();
const people = require('./routes/people');

// tell express instance that we want to use routes defined in people
// this will map /people route to / present in people.js
app.use('/people', people);
app.listen(3000);