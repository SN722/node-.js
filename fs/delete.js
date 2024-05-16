var fs = require('fs');

fs.unlink('dummy.txt',function(err){  //this will delete the file dummy.txt which is already exist.
    if (err) throw err;
    console.log('file deleted!');
});