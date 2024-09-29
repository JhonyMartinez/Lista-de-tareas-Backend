const TareasModelo = require('../modelos/TareasModelo')

module.exports.getTarea = async(req, res) =>{
    const tarea = await TareasModelo.find()
    res.send(tarea)
}

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

module.exports.actualizarTarea = async(req, res) =>{
    const { _id, text } = req.body

    TareasModelo
    .findByIdAndUpdate(_id, {text})
    .then(() =>res.send("Actualizacion correcta"))
    .catch((err) => console.log(err))
}

module.exports.eliminarTarea = async(req, res) =>{
    const { _id} = req.body

    TareasModelo
    .findByIdAndDelete(_id)
    .then(() =>res.send("Eliminado correctamente"))
    .catch((err) => console.log(err))
}