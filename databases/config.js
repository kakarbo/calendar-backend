const mongoose = require("mongoose")

const dbConnection = async() => {

    console.log(`está es la url de conección a la base de datos ${process.env.DB_CNN}`)

    try {

        await mongoose.connect(process.env.DB_CNN);

        console.log("DB Online")

    } catch (error) {
        console.log(error)
        throw new Error("Error a la hora de inicializar BD")
    }
}

module.exports = {
    dbConnection
}