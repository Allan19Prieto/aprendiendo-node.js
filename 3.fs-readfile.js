const fs = require('node:fs')

console.log('Leyenco el primer archivo..')
const text = fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <-- ejecuta este Callback
    console.log(text)
})

console.log('Hacer cosas mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text)
})

