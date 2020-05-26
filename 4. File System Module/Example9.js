const fs = require('fs');
// delete all the files from a folder
// 1st argument - name of directoy
// 2nd argument - callback function
// first paramter of callback will be an error and second paramter will be files and files will gonna be an
// array with names of the files
fs.readdir('folder', (err, files) => {
    if(err) {
        console.log(err);
    } else {
        console.log(files);
        for(let file of files) {
            fs.unlink('./folder/' + file, (err) => {
                if(err)
                    console.log(err);
                else
                    console.log('successfully deleted the file - ' + file);
            });
        }
    }
});