
const fs = require('fs')
var colors = require('./customColors');

function copyFile(path, destination) {
  if (fs.existsSync(path)){ 
    fs.copyFile(path, destination, err => {
      if(err) {
        console.log(colors.error('No se pudo copiar el archivo ... ' + error))
        return
      }
      console.log(colors.success('...Archivo copiado'))
    })
  }else{
    console.log(colors.warn("the file doesn't exists"))
  }
}

copyFile('files-test/file-create.txt','files-test/file-create_01.txt')