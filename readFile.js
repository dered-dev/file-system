const fs = require('fs')
var colors = require('./customColors');

function removeFile(path) {
  if (fs.existsSync(path)){
    console.log(colors.data('Reading file...'))
    fs.readFile(path, (err, data) => {
      if(err){
        console.log(colors.error('Error to read file => ' + err))
      }else{
        console.log(colors.data('File content  => '+ data))
      }
    });
  }else{
    console.log(colors.warn("the file doesn't exists"))
  }
}

removeFile('files-test/file-create.txt')