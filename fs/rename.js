
var fs = require('fs');

fs.rename('dummy.txt','renamedfile.txt',function(err){
    if(err) throw err;
    console.log('remaned.!');
})