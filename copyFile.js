const fs = require('fs')
const fsPromises = require('fs').promises;
var colors = require('./customColors');

function copyFile(path,destination) {
  if (fs.existsSync(path)){ 
    fsPromises.copyFile(path, destination)
    .then(() => {
      console.log(colors.success('...Archivo copiado'))
    }).catch(() => {
      console.log(colors.error('File not copied'))
    })
  }else{
    console.log(colors.warn("the file doesn't exists"))
  }
}

copyFile('files-test/file-create.txt','files-test/file-create_01.txt')