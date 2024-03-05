const { response, Router } = require('express')
const bcrypt = require("bcryptjs")
const User = require("../models/User-models")
const { generarJWT } = require("../helpers/jwt")

const crearUsuario = async( req, res = response ) => {

    const { email, password } = req.body

    try {

        let usuario = await User.findOne({ email })

        if ( usuario ){
            return res.status(400).json({
                ok: false,
                msg: "Un usuario existe con ese correo"
            })
        }

        usuario = new User( req.body )

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync( password, salt )

        await usuario.save()

        // Generar JWT
        const token = await generarJWT( usuario._id, usuario.name )
    
        res.status(201).json({
            ok: true,
            uid: usuario._id,
            name: usuario.name,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }


}

const loginUsuario = async (req, res = response) => {

    const { email, password } = req.body

    try {
        
        const usuario = await User.findOne({ email })

        if ( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: "El usuario no existe con ese email"
            })
        }

        // confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password )

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: "Password incorrecto"
            })
        }

        // Generar JWT
        const token = await generarJWT( usuario._id, usuario.name )

        res.json({
            ok: true,
            uid: usuario._id,
            name: usuario.name,
            token
        })

    } catch ( error ) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador',
        })
    }
}

const revalidarToken = (req, res = response) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}

