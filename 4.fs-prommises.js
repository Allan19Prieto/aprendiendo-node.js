//Solo en modulos nativos
// donde no tienes promesas nativas

// const {promisity} = require('node:util')
// const readfilePromise = promisity(fs.readFile)

const fs = require('node:fs/promises')

console.log('Leyenco el primer archivo..')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer texto:', text)
    })

console.log('Hacer cosas mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('Segundo texto:', text)
    })