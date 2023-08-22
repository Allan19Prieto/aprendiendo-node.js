const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  let body = ''

  // escuchar el evento data ; chunck es un buffer
  req.on('data', chuck => {
    body += chuck.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    // llamar a una base de datos para guardar la info
    // res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
