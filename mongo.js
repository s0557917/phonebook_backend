const mongoose = require('mongoose')



if (process.argv.length === 3) {
    const password = process.argv[2]

    const url = `mongodb+srv://note_react_user:${password}@cluster0.d3ga0.mongodb.net/phonebook-app?retryWrites=true&w=majority`
    mongoose.connect(url)

    const entrySchema = new mongoose.Schema({
        name: String,
        number: Number,
        date: Date
    })

    const Entry = mongoose.model('Entry', entrySchema)

    Entry.find({}).then(result => {
        result.forEach(entry => {
            console.log(entry)
        })
        mongoose.connection.close()
    })

} else if (process.argv.length === 5) {
    const password = process.argv[2]
    const userName = process.argv[3]
    const number = process.argv[4]
    
    const url = `mongodb+srv://note_react_user:${password}@cluster0.d3ga0.mongodb.net/phonebook-app?retryWrites=true&w=majority`
    mongoose.connect(url)

    const entrySchema = new mongoose.Schema({
        name: String,
        number: Number,
        date: Date
    })

    const Entry = mongoose.model('Entry', entrySchema)

    const entry = new Entry({
        name: userName,
        number: number,
        date: new Date()
    })
    
    entry.save().then(result => {
        console.log(`Entry '${entry}' was succesfully saved!`)
        mongoose.connection.close()
    })

} else {
    console.log("P: ", process.argv)
    console.log("Relevant parameters are missing!")
    process.exit(1)
}