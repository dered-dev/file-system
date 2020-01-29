
const fs = require('fs')
var colors = require('./customColors');

function readDir(path) {
  if (fs.existsSync(path)){
    fs.readdir(path, (err, files) =>{
      if(err) {
        console.log(colors.error('No se puedo eliminar el directorio: '+ err))
        return false
      }
      if(files.length > 0){
        console.log(colors.data('Los archivos del directorio son: '))
        files.forEach(file => {
          console.log(file)
        });
      }
      else{
        console.log(colors.data('El directorio esta vacio'))
      }
    })
  }else{
    console.log(colors.warn('El directorio no existe'))
  }
}

readDir('./files-test')
