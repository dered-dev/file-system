const fs = require('fs')
var colors = require('./customColors');

function modifyFile(path) {
  if (fs.existsSync(path)){ 
    fs.appendFile(path, '.. soy una modificación', (err) => {
      if(err){
        console.log(colors.error('Error to modify file => ' + err))
      }else{
        console.log(colors.success('...File modified '))
      }
    });
  }else{
    console.log(colors.warn("the file doesn't exists"))
  }
}

modifyFile('files-test/file-create.txt')