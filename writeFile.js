const fs = require('fs')

function writeFile(path, text) {
  console.log('Creating file...')
  fs.writeFile(path, 'File Created', function () {
    console.log('...File created')
  })
}

module.exports = {writeFile};