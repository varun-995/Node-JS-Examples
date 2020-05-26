const fs = require('fs');
// append to file
// 1st argument - name of the file that you want to append to
// 2nd argument - data to append
// 3rd argument - a callback function
fs.appendFile('renamedFileUsingExample2.txt', 'Some data being appended', (err) => {
    if(err)
        console.log(err);
    else
        console.log('successfully appended data to file');
});
