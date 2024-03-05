/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const express = require('express')
const { dbConnection } = require('./databases/config')
require('dotenv').config()

// Crear el servidor de express
const app = express()

// Bases de datos
dbConnection()

// Directorio Publico
app.use( express.static('public') )


// Lectura y parseo del body
app.use( express.json() )

// Rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth') )
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen( process.env.PORT , () => {
    console.log(`Server running in port ${ process.env.PORT }`)
})