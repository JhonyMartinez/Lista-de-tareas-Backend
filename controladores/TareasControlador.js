//Importa el modelo que permite la interaccion con MongoDB
const TareasModelo = require('../modelos/TareasModelo')

//Esta función maneja una solicitud HTTP GET para obtener todas las tareas de la base de datos.
module.exports.getTarea = async(req, res) =>{
    const tarea = await TareasModelo.find()
    res.send(tarea)
}

//Esta función maneja una solicitud HTTP POST para crear y almacenar una nueva tarea en la base de datos.
module.exports.guardarTarea = async(req, res) =>{
    const { text } = req.body

    TareasModelo
    .create({text})
    .then((data) =>{
        console.log("Agregado Correctamente");
        console.log(data);
        res.send(data)
    })
}

//Esta función maneja una solicitud HTTP PUT para actualizar una tarea existente en la base de datos.
module.exports.actualizarTarea = async(req, res) =>{
    const { _id, text } = req.body

    TareasModelo
    .findByIdAndUpdate(_id, {text})
    .then(() =>res.send("Actualizacion correcta"))
    .catch((err) => console.log(err))
}

//Esta función maneja una solicitud HTTP DELETE para eliminar una tarea existente de la base de datos.
module.exports.eliminarTarea = async(req, res) =>{
    const { _id} = req.body

    TareasModelo
    .findByIdAndDelete(_id)
    .then(() =>res.send("Eliminado correctamente"))
    .catch((err) => console.log(err))
}