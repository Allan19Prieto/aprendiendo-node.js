import { readFile } from 'node:fs/promises'

console.log('Leyenco el primer archivo..')
const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)
console.log('Hacer cosas mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondtext = await readFile('./archivo2.txt', 'utf-8')
console.log('Segundo texto:', secondtext)
