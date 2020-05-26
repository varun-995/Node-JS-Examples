const EventEmitter = require('events');
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro'); 
let christina = new Person('Christina'); 
pedro.on('name', () => {
    console.log("My name is " + pedro.name);
});
christina.on('name', () => {
    console.log("My name is " + christina.name);
});

// When you emit an event to occur, the event gets executed synchronously
// As pedro emitted first, pedro gets executed first and then our christina object
pedro.emit('name');
christina.emit('name');