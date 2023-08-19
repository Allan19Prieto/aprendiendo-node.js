const http = require('node:http') // Protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

// Creamos un servidor con un collback
const processReuest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    // res.statusCode = 200 // ok Si no se pone y todo va bien, por defecto tendra un 200 Ok
    res.end('<h1>Página</h1>')
  } else if (res.url === '/imagen') {
    fs.readFile('./Clase-2/yoda.png', (err, data) => {
      if (err) {
        res.statusCode = 500 //
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
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
