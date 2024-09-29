//Importa el enrutador (Router) de la biblioteca Express. Router se utiliza para definir rutas dentro de una aplicación Express de una manera modular y organizada.

const {Router} = require("express")

//Importa varias funciones desde el archivo TareasControlador.js
const {getTarea, actualizarTarea, eliminarTarea} = require("../controladores/TareasControlador")
const {guardarTarea} = require("../controladores/TareasControlador")

const router = Router()

router.get('/', getTarea)
router.post('/save', guardarTarea)
router.post('/update', actualizarTarea)
router.post('/delete', eliminarTarea)

module.exports = router;