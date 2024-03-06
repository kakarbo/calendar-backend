const { Schema, model } = require("mongoose")

const EventosSchema = Schema({

    title: {
        type: String,
        require: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = model('Evento', EventosSchema )
