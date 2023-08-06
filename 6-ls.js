const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Error del directorio', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
