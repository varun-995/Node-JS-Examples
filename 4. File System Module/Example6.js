const fs = require('fs');
// deleting a folder
// 1st argument - name of folder that you want to delete
// 2nd argument - a callback function
fs.rmdir('tutorial', (err) => {
    if(err)
        console.log(err);
    else
        console.log('successfully deleted the folder');
});