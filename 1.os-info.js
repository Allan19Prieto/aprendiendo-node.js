const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('-------------------')

console.log('Nombre del sistema operativo ', os.platform())
console.log('Versión del sistema operativo ', os.version())
console.log('Arquitectura ', os.arch())
console.log('CPU ', os.cpus()) // <-- Vamos a poder escalar procesos en Node
console.log('Memorio libre ', os.freemem() / 1024 / 1024)
console.log('Memoria Total ', os.totalmem() / 1024 / 1024)
console.log('uptime ', os.uptime() / 60 / 60)
