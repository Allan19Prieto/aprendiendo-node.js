const fs = require('node:fs') // Apartir de Node 16, se recomienda utilizar node:

const stats = fs.statSync('./archivo.txt')

// De foema sincrona
console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
)
