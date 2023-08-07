require('dotenv') // require the dotenv/config at beginning of file

const http = require('node:http') // Protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js')

const desiredProt = process.env.PORT ?? 3000

// Creamos un servidor con un collback
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

findAvailablePort(desiredProt).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
