/*
    Rutas de usuarios / Auth
    host + /api/auth
*/

const express = require('express')
const { dbConnection } = require('./databases/config')
require('dotenv').config()
const cors = require("cors")

// Crear el servidor de express
const app = express()

// Bases de datos
dbConnection()

// CORS
app.use(cors())

// Directorio Publico
app.use( express.static('public') )


// Lectura y parseo del body
app.use( express.json() )

// Rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth') )
// TODO: CRUD: Eventos
app.use('/api/events', require('./routes/events') )

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


// Escuchar peticiones
app.listen( process.env.PORT , () => {
    console.log(`Server running in the port ${ process.env.PORT }`)
})