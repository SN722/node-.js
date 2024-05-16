var fs = require('fs');

fs.appendFile('myAppendCreatedFile.txt','using append method creates a new file. ', function(err) {
    if (err) throw err;
    console.log('done!');
});