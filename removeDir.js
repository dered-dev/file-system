const fs = require('fs')
var colors = require('./customColors');

function removeDirRecursive(filePath) {
  if (fs.existsSync(filePath)) {
    // is directory or file ?
    let stats = fs.statSync(filePath);

    // if file : unlinkSync 
    if (stats.isFile()) {
      fs.unlink(filePath, (err) => {
        if (err){
          console.log(colors.error(`El archivo ${filePath} no se puede eliminar`))
          return
        }
        console.log(colors.success(`Archivo ${filePath} eliminado`))
      });
    }

    //if is a directory, readdir() and call removeDirRecursive() for each file
    else {
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