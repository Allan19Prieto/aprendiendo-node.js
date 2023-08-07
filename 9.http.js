const http = require('node:http')

// Creamos un servidor con un collback
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

server.listen(0, () => {
  console.log(`Server listening on port http://localhost:${server.address().port}`)
})
