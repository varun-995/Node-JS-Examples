const fs = require('fs');
// rename file
// 1st argument - name of the file that you want to rename
// 2nd argument - new name
// 3rd argument - a callback function
fs.rename('fileCreatedUsingExample1.txt', 'renamedFileUsingExample2.txt', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('successfully renamed the file');
    }
});