// This module help us to prompt user and get input
const readLine = require('readline');
// process is a global object, you don't have to acquire it, it is already given by the node
const rl = readLine.createInterface({input : process.stdin,
                        output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1); // return random number between 1 and 10;
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`,
(userInput) => {
    if(userInput.trim() == answer) {
        // it is important to close inputstream
        // close method emits the close event
        rl.close();
    } else {
        rl.setPrompt('Incorrect response please try again\n');
        rl.prompt();
        // setting up a line eventListener, it gets triggered when user enters input
        rl.on('line', (userInput) => {
            if(userInput.trim() == answer) {
                rl.close();
            } else {
                // reset the prompt
                rl.setPrompt(`Your answer of ${ userInput } is incorrect try again \n`);
                rl.prompt();
            }
        })
    }
});

// readline is an instance of EventEmitter class
rl.on('close', () => {
    console.log('Correct!!!');
});