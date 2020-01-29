const fs = require('fs')
var colors = require('./customColors');

function removeDirRecursive(filePath) {
  if (fs.existsSync(filePath)) {
    // is directory or file ?
    let stats = fs.statSync(filePath);

    // if file : unlinkSync 
    if (stats.isFile()) {
      fs.unlinkSync(filePath);
      console.log(colors.success(`Archivo ${filePath} eliminado`))
    }

    //if is a directory, readdir() and call removeDirRecursive() for each file
    else {
      let files = fs.readdirSync(filePath);
      files.forEach((file) => {
        console.log(filePath + '/' + file)
        removeDirRecursive(filePath + '/' + file);
      });
      fs.rmdirSync(filePath);
      console.log(colors.success(`El directorio ${filePath} fue eliminado`))
    }
    
  } else {
    console.log(colors.error(`El directorio ${filePath} no existe`))
  }
}
removeDirRecursive('files-test')