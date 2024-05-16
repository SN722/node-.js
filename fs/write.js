var fs = require ('fs');

fs.writeFile('newfile3.txt','create a file using the fs.writeFile()',function(err){
    if (err) throw err;
    console.log('done......!');
})


// we can also update the file content or file name by using the fs methods .
// fs.appendFile('newfile3.txt','this is the updated file',function(err)
// fs.writeFile('newfile3.txt','this is the updated file',function(err)
