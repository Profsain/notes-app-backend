const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const Note = require('./models/note')
const { response } = require('express')

//request logger middleware
const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path: ', request.path)
    console.log('Body: ', request.body)
    console.log('------')
    next()
}
app.use(requestLogger)

app.use(cors())
app.use(express.static('build'))

let notes = [
    {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
    },
    
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
    },
  
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
    },
  
   {
    id: 4,
    content: "Node.js server",
    date: "2019-05-30T19:20:14.298U",
    important: false
    }
   
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

//fetching resource collections
app.get('/api/notes', (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes)
    })
})

//fetching single resource RESTful interface
app.get('/api/notes/:id', (request, response, next) => {
    
    Note.findById(request.params.id).then(note => {
        if (note) {
            response.json(note)
        } else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))
})

//Deleting resource interface
// app.get('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     notes = notes.filter(note => note.id !== id)
//     response.status(204).end()
// })

//MongoDB deleting method
app.delete('/api/notes/:id', (request, response, next) => {
    Note.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

//Posting data to the server
app.use(express.json())
app.post('/api/notes', (request, response) => {
    const body = request.body
    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
    })
    //Saving note to node server
    // notes = notes.concat(note)
    // response.json(note)
    //Saving note to MongoDB
    note.save().then(saveNote => {
        response.json(saveNote)
    })
})
//Updating data in MongoDB
app.put('/api/notes/:id', (request, response, next) => {
    const body = request.body

    const note = {
        content: body.content,
        importance: body.importance
    }

    Note.findByIdAndUpdate(request.params.id, note, { new: true })
        .then(updatedNote => {
            response.json(updatedNote)
        })
        .catch(error => next(error))
})

//Middleware to handle unknown url endpoint
const unknownEndpoint = (request, response) => {
    response.status(404).send({error: "unknown endpoint"})
}
app.use(unknownEndpoint)

//database error middleware
const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'Malfunction id' })
    }
    next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
