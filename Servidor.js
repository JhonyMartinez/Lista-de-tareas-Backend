//Se importan los modulos necesarios para crear el servidor:

//Framework web para Node.js utilizado para crear y gestionar el servidor.
const express = require('express')
//Biblioteca que proporciona una interfaz para conectarse a MongoDB y realizar operaciones con bases de datos de manera sencilla.

const mongoose = require('mongoose')
//Middleware que permite gestionar solicitudes HTTP de dominios diferentes (Cross-Origin Resource Sharing). Es útil para permitir que el frontend acceda al backend desde un dominio diferente.
const cors = require("cors")

//Se importa el archivo de rutas definido previamente
const routes = require('./routes/TareasRoutes')

//Carga las variables de entorno (Donde se realiza la conexion con MongoDB)
require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

//Midleware
app.use(express.json())
app.use(cors())

//Conexion a MongoDB
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log("Conectado a MongoDB"))
    .catch((err) => console.log(err))

app.use(routes)

//Inicio del Servidor
app.listen(PORT, () => console.log("Listening on:", PORT))