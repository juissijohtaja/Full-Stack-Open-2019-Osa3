require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/person')
const bodyParser = require('body-parser')
const morgan = require('morgan')

morgan.token('body', (req) => JSON.stringify(req.body));

app.use(bodyParser.json());
app.use(morgan(':method :url :body :status :res[content-length] - :response-time ms'))

const cors = require('cors')
app.use(cors())
app.use(express.static('build'))


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
  Person
    .find({})
    .then(persons => res.send(`
      <p>Puhelinluettelossa ${persons.length} henkilön tiedot</p>
      <p>${new Date()}</p>
    `))
  })

  app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons.map(person => person.toJSON()))
    })
  })

  app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
      response.json(person.toJSON())
    })
  })

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})
  
app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log('body', body)

  if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  }
  if (body.number === undefined) {
    return response.status(400).json({ error: 'number missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  console.log("KAKKA person", person)

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})