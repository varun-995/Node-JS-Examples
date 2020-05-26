const fs = require('fs');
// creating a folder
// 1st argument - name that you want to give to the folder
// 2nd argument - a callback function
fs.mkdir('tutorial', (err) => {
    if(err)
        console.log(err);
    else
        console.log('successfully created the folder');
});
