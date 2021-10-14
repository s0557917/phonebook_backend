const { response, json } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))
app.use(cors())
app.use(express.static('build'))

morgan.token('content', function(request, response){
    console.log("Req: ", request.body)
    return [
        JSON.stringify(request.body)
    ]
})

let entries = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
      },
      { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
      },
      { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
      },
      { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
      }
]

app.get('/info', (request, response) => {
    response.send(
        `<p>The Phonebook has information for ${entries.length} people.</p>
        <p>${new Date()}</p>`
    )
})

app.get('/api/entries', (request, response) => {
    response.json(entries)
})

app.get('/api/entries/:id', (request, response) => {
    const id = Number(request.params.id)
    const entry = entries.find(entry => entry.id === id) 
    response.send(entry)
})

app.delete('/api/entries/:id', (request, response) => {
    const id = Number(request.params.id)
    entries = entries.filter(entry => entry.id !== id)
    response.status(204).end()
})

app.post('/api/entries', (request, response) => {
    
    const body = request.body
    if(!body.name || !body.number){
        return response.status(404).json({
            error: 'Content missing'
        })
    }else if (entries.find(entry => entry.name === body.name)){
        return response.status(404).json({
            error: 'Name already in use'
        })
    }

    const entry = {
        id: Math.random() * 1000000,
        name: body.name,
        number: body.number
    }
    entries = entries.concat(entry)
    response.json(entries)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})