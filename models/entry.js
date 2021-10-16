const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const uri = process.env.DB_URI
mongoose.connect(uri)
    .then(response => {
        console.log("Succesfully connected to the DB!")
    })
    .catch(error => {
        console.log("Error while connecting to the DB: ", error)
    })

const entrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, 
        minlength: 3,
    },
    number: {
        type: Number, 
        required: true,
        minlength: 8,
    }
})

entrySchema.plugin(uniqueValidator)

entrySchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Entry', entrySchema)