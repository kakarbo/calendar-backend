/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const express = require('express')
require('dotenv').config()

// Crear el servidor de express
const app = express()


// Directorio Publico
app.use( express.static('public') )


// Rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth') )
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen( process.env.PORT , () => {
    console.log(`Server running in port ${ process.env.PORT }`)
})