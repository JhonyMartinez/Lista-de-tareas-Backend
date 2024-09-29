//Importa el módulo mongoose, que es una biblioteca de Node.js utilizada para interactuar con bases de datos MongoDB. Proporciona una abstracción sobre MongoDB para definir esquemas, modelos y realizar operaciones en la base de datos.

const mongoose = require('mongoose')

const tareasSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Tareas', tareasSchema)