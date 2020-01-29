
const fs = require('fs')
var colors = require('./customColors');

function writeFile(path, text) {
  if (!fs.existsSync('./files-test')){
    fs.mkdirSync('./files-test');
  }
  if(!fs.existsSync('./files-test/file-create.txt')){
    console.log(colors.data('Creating file...'))
    fs.writeFile(path, 'File Created', function (error) {
      if(error){
        console.log(colors.error('Error to create file => ' + error))
      }else{
        console.log(colors.success('...File created'))
      }
    })
  }else{
    console.log(colors.warn('Hola Koders!!'))
  }
}

writeFile('files-test/file-create.txt','New File created' )
