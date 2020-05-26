const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Here tutorial is an event and if it occurs anonymous function will run
eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);