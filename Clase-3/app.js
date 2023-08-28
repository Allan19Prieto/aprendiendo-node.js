// Recordar que para inicializar un proyecto //
// Colocamos en nom init -y

const express = require('express') // require -> commonJS
const movies = require('./movies.json')
const crypto = require('node:crypto')
// const z = require('zod')
const { validateMovie } = require('./schemas/movies')

const app = express()
app.use(express.json())
app.disable('x-powered-by') // desabilitar el header x-powered-By: Express

// Todos los recursos que sean movies se identifican con /movies
app.get('/movies', (req, res) => {
  const { genre } = req.query
  if (genre) {
    const filteredMovies = movies.filter(
      movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
    )
    return res.json(filteredMovies)
  }
  res.json(movies)
})

app.get('/movies/:id', (req, res) => { // path-to-regexp
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  if (movie) return res.json(movie)
  res.status(404).json({ message: 'Movies not found ' })
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)

  if (!result.success) {
    // 422 Unprocessablen Entity
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  // Luego en base de datos
  const newMovie = {
    id: crypto.randomUUID(), // UUID v4  Universal unik identifai
    ...result.data
  }

  // Esto no seria REST, ya que se esta guardando en memoria
  movies.push(newMovie)

  res.status(201).json(newMovie) // actualiza la caché del cliente
})

const PORT = process.env.PORT = 1234

app.listen(PORT, () => {
  console.log(`Servidor listening on port http://localhost:${PORT}`)
})
