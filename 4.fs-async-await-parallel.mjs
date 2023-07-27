import { readFile } from 'node:fs/promises'

// Estos se ejecutaran en paralelo
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondtext]) => {
    console.log('Primer texto:', text)
    console.log('Segundo tecxto:', secondtext)
})