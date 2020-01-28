const fs = require('fs')
var colors = require('./customColors');

function removeFile(path) {
  console.log(colors.data('Removing file...'))
  fs.unlink(path, function (error) {
    if(error){
      console.log(colors.error('Error to remove file => ' + error))
    }else{
      console.log(colors.success('...File removed'))
    }
  })
}

removeFile('files-test/file-create.txt')