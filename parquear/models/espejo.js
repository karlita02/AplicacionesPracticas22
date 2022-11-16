const { Schema, model } = require("mongoose");


const EspejoSchema = Schema(
    {
        Fecha:{
            type: String,

        },
        HoraEntrada:{
            type: String,
        },
        FechaSalida:{
            type: String,
        },
        HoraSalida:{
            type: String,
        },
        replicate:{
            type: Boolean,
        }

    }
);


module.exports = model('Espejo', EspejoSchema );