// This module help us to create files, read files, delete files, create folders and so on
const fs = require('fs');
// create a file
// 1st argument - name that you want to give to newly created file
// 2nd argument - stuff that you want to write to the file
// 3rd argument - a callback
fs.writeFile('fileCreatedUsingExample1.txt', "this is an example", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("File successfully created");
        // reading file
        // 1st argument - name of file that you want to read
        // 2nd argument - encoding type
        // 3rd argument - a callback
        fs.readFile('fileCreatedUsingExample1.txt', (err, file) => { // not passing encoding argument
            if(err) {
                console.log(err);
            } else {
                console.log(file); // this will print a buffer stream(binary data) as you are not passing the encoding argument
            }
        });
        fs.readFile('fileCreatedUsingExample1.txt', 'utf8', (err, file) => {
            if(err) {
                console.log(err);
            } else {
                console.log(file);
            }
        });
    }
});