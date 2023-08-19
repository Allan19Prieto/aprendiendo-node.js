const http = require('node:http') // Protocolo HTTP

const desiredPort = process.env.PORT ?? 1234

// Creamos un servidor con un collback
const processReuest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200 // ok
    res.end('<h1>Bienvenido a mi página web Allan Prieto</h1>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // Ok
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processReuest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
