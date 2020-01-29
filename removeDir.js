
const fs = require('fs')
let colors = require('./customColors');

function removeDirRecursive(filePath) {
  if (fs.existsSync(filePath)) {
    let stats = fs.statSync(filePath) // is directory or file ?
    if (stats.isFile()) { // if file => unlink
      fs.unlink(filePath, (err) => {
        if (err){
          console.log(colors.error(`El archivo ${filePath} no se puede eliminar`))
          return
        }
        console.log(colors.success(`Archivo ${filePath} eliminado`))
      });
    }
    else { // if directory
      let files = fs.readdirSync(filePath);
      files.forEach((file) => {
        removeDirRecursive(filePath + '/' + file);
        console.log(filePath + '/' + file) 
      });
      fs.rmdir(filePath, err => {
        if (err){
          console.log(colors.error(`El directorio ${filePath} no se pudo eliminar`))
          return
        }
        console.log(colors.success(`El directorio ${filePath} fue eliminado`))
      });
    }
  } else {
    console.log(colors.error(`El directorio ${filePath} no existe`))
  }
}
removeDirRecursive('files-test')