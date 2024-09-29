const {Router} = require("express")
const {getTarea, actualizarTarea, eliminarTarea} = require("../controladores/TareasControlador")
const {guardarTarea} = require("../controladores/TareasControlador")

const router = Router()

router.get('/', getTarea)
router.post('/save', guardarTarea)
router.post('/update', actualizarTarea)
router.post('/delete', eliminarTarea)

module.exports = router;