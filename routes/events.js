const { Router } = require("express")
const router = Router()

const { getEventos, crearEventos, actualizarEventos, eliminarEventos } = require("../controllers/events")

// Todas tienes que pasar por la validación del JWT
// Obtener eventos
router.get('/', getEventos)

// Crear un nuevo evento
router.post('/', crearEventos)

// Actualizar Evento
router.put('/:id', actualizarEventos)

// Borrar Evento
router.delete('/:id', eliminarEventos)

module.exports = router
