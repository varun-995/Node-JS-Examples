const fs = require('fs');
// delete to file
// 1st argument - name of the file that you want to delete
// 2nd argument - a callback function
fs.unlink('renamedFileUsingExample2.txt', (err) => {
    if(err)
        console.log(err);
    else
        console.log('successfully deleted the file');
});
