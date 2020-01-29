const fs = require('fs')
var colors = require('./customColors');


function createDir(dir) {
  if (!fs.existsSync(dir)){
    fs.mkdir(dir,(err) =>{
      if(err) {
        console.log(colors.error('No se puede crear el directorio: '+ err))
        return false
      }
      console.log(colors.success('Directorio creado'))
    })
  }else{
    console.log(colors.data('El directorioa ya existe'))
  }
}

createDir('remove-this-folder')
