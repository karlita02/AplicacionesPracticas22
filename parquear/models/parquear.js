const { Schema, model } = require("mongoose");




const parquearSchema = Schema(
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


module.exports = model('parquear', parquearSchema );