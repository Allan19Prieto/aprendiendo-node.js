// Recordar que para inicializar un proyecto //
// Colocamos en nom init -y

const express = require('express') // require -> commonJS

const app = express()
app.disable('x-powered-by') // desabilitar el header x-powered-By: Express

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' })
})

const PORT = process.env.PORT = 1234

app.listen(PORT, () => {
  console.log(`Servidor listening on port http://localhost:${PORT}`)
})
