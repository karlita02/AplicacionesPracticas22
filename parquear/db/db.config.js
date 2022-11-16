const mongoose = require('mongoose');

const conecxionBaseDatos = async () =>{
    try {
        await mongoose.connect( process.env.DATABASE);
        console.log('todo bien');
    } catch (error) {
        console.log(error);
        throw new Error('Error en db')
    }
}


module.exports={
    conecxionBaseDatos
}