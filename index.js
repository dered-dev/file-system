const fs = require('fs')
const writeFile = require('./writefile');
const removeFile = require('./removeFile');

writeFile.writeFile('files-test/file-create.txt','Name file')
setTimeout(function(){
  removeFile.removeFile('files-test/file-create.txt')
},2000)

