const fs = require('fs')

function removeFile(path) {
  console.log('Removing file...')
  fs.unlink(path, function () {
    console.log('...File removed')
  })
}

module.exports = {removeFile};