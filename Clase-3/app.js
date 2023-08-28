// Recordar que para inicializar un proyecto //
// Colocamos en nom init -y

const express = require('express') // require -> commonJS
const movies = require('./movies.json')
const crypto = require('node:crypto')
const cors = require('cors')
// const z = require('zod')
const { validateMovie, validatePartialovie } = require('./schemas/movies')

const app = express()
app.use(express.json())
app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:8080',
      'http://localhost:1234',
      'http://localhost:3000'
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('No allowed by CORS'))
  }
}))
app.disable('x-powered-by') // desabilitar el header x-powered-By: Express

// Todos los recursos que sean movies se identifican con /movies
app.get('/movies', (req, res) => {
  /* const origin = req.header('origin')
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin)
  } */
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

app.delete('/movies/:id', (req, res) => {
  /* const origin = req.header('origin')
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin)
  } */

  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movied not found' })
  }

  movies.splice(movieIndex, 1)

  return res.json({ message: 'Movie deleted' })
})

app.patch('/movies/:id', (req, res) => {
  const result = validatePartialovie(req.body)

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const { id } = req.params
  const movieIndex = movies.findIndex(movies => movies.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data
  }

  movies[movieIndex] = updateMovie

  return res.json(updateMovie)
})

/* app.options('/movies/:id', (req, res) => {
  const origin = req.header('origin')
  if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  }
  res.send(200)
}) */

const PORT = process.env.PORT = 1234

app.listen(PORT, () => {
  console.log(`Servidor listening on port http://localhost:${PORT}`)
})
