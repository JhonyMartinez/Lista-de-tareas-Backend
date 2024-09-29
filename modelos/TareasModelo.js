const mongoose = require('mongoose')

const tareasSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Tareas', tareasSchema)