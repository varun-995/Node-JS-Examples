const fs = require('fs');
// creating a file inside a folder
fs.mkdir('tutorial', (err) => {
    if(err)
        console.log(err);
    else {
        console.log('successfully created the folder');
        fs.writeFile('./tutorial/example.txt', '123', (err) => {
            if(err)
                console.log(err);
            else
                console.log('successfully created the file');
        });
    }
});