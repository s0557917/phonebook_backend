require('dotenv/config')
const { response, json } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Entry = require('./models/entry.js')
const app = express()

morgan.token('content', function(request, response){
    console.log("Req: ", request.body)
    return [
        JSON.stringify(request.body)
    ]
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if(error.name === 'CastError'){
      return response.status(400).send({error: 'Malformatted ID'})
    } else if(error.name === 'ValidationError') {
        return response.status(400).send({error: error.message})
    }
  
    next(error)
}

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))
app.use(cors())
app.use(express.static('build'))
app.use(errorHandler)


app.get('/info', (request, response) => {
    Entry.find({}).then(entries => {
        response.send(
            `<p>The Phonebook has information for ${entries.length} people.</p>
            <p>${new Date()}</p>`
        )
    })
})

app.get('/api/entries', (request, response) => {
    Entry.find({}).then(entries => {
        response.json(entries)
    })
})

app.get('/api/entries/:id', (request, response, next) => {
    
    Entry.findById(request.params.id)
        .then(result => {
            response.json(result)
        })
        .catch(error => next(error))
})

app.delete('/api/entries/:id', (request, response, next) => {
    Entry.findByIdAndRemove(request.params.id)
    .then(result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/entries', (request, response, next) => {
    
    const body = request.body
    if(!body.name || !body.number){
        return response.status(404).json({
            error: 'Content missing'
        })
    }

    const entry = new Entry({
        name: body.name,
        number: body.number,
        date: new Date()
    })

    entry.save()
        .then(savedEntries => {
            response.json(savedEntries)
        })
        .catch(error => next(error))
})

app.put('/api/entries/:id', (request, response, next) => {
    const body = request.body
  
    const entry = {
      name: body.name, 
      number: body.number,
      date: new Date()
    }
  
    Entry.findByIdAndUpdate(request.params.id, entry, {new: true})
      .then(updatedEntries => {
        response.json(updatedEntries)
      })
      .catch(error => next(error))
  })

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})