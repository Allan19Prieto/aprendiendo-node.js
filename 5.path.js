const path = require('node:path')

// barra separadora de carpetas según sistema operativo
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('constent', 'subfolder', 'test.txt')
console.log(filePath)

// Para tener el nombre del fichero
const base = path.basename('/tmp/alla-d/password.txt')
console.log(base)

// Para obtener la extensión
const extension = path.extname('image.jpg')
console.log(extension)
