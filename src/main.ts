import express from 'express'
import morgan from 'morgan'
import userRouter from './routes/userRoute'


const app = express()
const port = 3000


app.use(morgan("tiny"))

// Middleware para parsear application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Middleware para parsear application/json
app.use(express.json())

app.get('/', async (req, res) => {
  res.send('¡Hola desde mi servidor Express con TypeScript!')
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hola desde la API!' })
})

app.use('/api/users', userRouter) // Añadiendo el router de usuarios al app


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
