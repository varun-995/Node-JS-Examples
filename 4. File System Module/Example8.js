const fs = require('fs');
// removing a folder containing a file
// you cannot directly use rmdir as this folder contains a file, first delete the file and then the folder
fs.unlink('./tutorial/example.txt', (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('successfully deleted the file');
        fs.rmdir('tutorial', (err) => {
            if(err)
                console.log(err);
            else
                console.log('successfully deleted the folder');
        });
    }
});