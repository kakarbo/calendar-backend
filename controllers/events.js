const { response } = require("express")
const Evento = require("../models/Eventos") 


const getEventos = ( req, res = response ) => {


    return res.status(200).json({
        ok: true,
        msg: 'Obtener eventos',
    })
}

const crearEvento = async ( req, res = response ) => {

    const evento = new Evento( req.body )

    try {

        evento.user = req.uid

        const eventoGuardado = await evento.save()

        res.json({
            ok: true,
            evento: eventoGuardado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: "Hables con el administrador"
        })
    }

    return res.status(200).json({
        ok: true,
        msg: 'Crear eventos',
    })
}

const actualizarEvento = ( req, res = response ) => {

    return res.status(200).json({
        ok: true,
        msg: 'Actualizar eventos',
    })
}

const eliminarEvento = ( req, res = response ) => {


    return res.status(200).json({
        ok: true,
        msg: 'Eliminar eventos',
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}