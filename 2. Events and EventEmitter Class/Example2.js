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

// Here pedro is also an instance of EventEmitter class as Person Extends EventEmitter Class
let pedro = new Person('Pedro');
pedro.on('name', () => {
    console.log("My name is " + pedro.name);
});
pedro.emit('name');