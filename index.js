const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
      {
        name: "Arto Hellas",
        number: "83883883822",
        id: 1
      },
      {
        name: "Martti Tienari",
        number: "040-123456",
        id: 2
      },
      {
        name: "Arto Järvinen",
        number: "040-123456",
        id: 3
      }
    ]


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
    const pageContent = (`
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
        `)
    res.send(pageContent)
  })

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
})

const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }

const generateIdRandom = () => {
    return Math.floor(1 + Math.random() * (100000 + persons.length))
}
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log("body", body)

    const personExists = persons.some(person => person.name === body.name)
    console.log("personExists", personExists)
  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    } else if (!body.number) {
      return response.status(400).json({ 
        error: 'number missing' 
      })
    } else if (personExists) {
      return response.status(400).json({ 
        error: 'name must be unique'
      })
    }
  
    const person = {
      name: body.name,
      number: body.number,
      id: generateIdRandom()
    }
    console.log("person", person)
  
    persons = persons.concat(person)
    console.log("persons", persons)
  
    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})