const { response } = require("express")


const getEventos = ( req, res = response ) => {


    return res.status(200).json({
        ok: true,
        msg: 'Obtener eventos',
    })
}

const crearEventos = ( req, res = response ) => {


    return res.status(200).json({
        ok: true,
        msg: 'Crear eventos',
    })
}

const actualizarEventos = ( req, res = response, id ) => {


    return res.status(200).json({
        ok: true,
        msg: 'Actualizar eventos',
    })
}

const eliminarEventos = ( req, res = response, id ) => {


    return res.status(200).json({
        ok: true,
        msg: 'Eliminar eventos',
    })
}

module.exports = {
    getEventos,
    crearEventos,
    actualizarEventos,
    eliminarEventos
}