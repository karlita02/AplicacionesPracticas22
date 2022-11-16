const { response, request } = require('express');
const Parquear = require('../models/parquear');
const EspejoParquear = require('../models/espejo');




const parquerInsertar = async (req, res=response) =>{ 

    const parquear = new Parquear({Fecha:'19/25/25', HoraEntrada:'02.00', FechaSalida:'12/25/32', HoraSalida:'3.00', replicate:false})
    const datosparquear = await parquear.save();

    
}


const insertarEspejo = async (req= request, res=response) =>{
  
    const parquer = await Parquear.find()
    for(let i=0; i<parquer.length; i++){
        if(parquer[i].replicate ===false){
            const datosreales = new EspejoParquear(
                {Fecha: parquer[i].Fecha, HoraEntrada: parquer[i].HoraEntrada, FechaSalida: parquer[i].FechaSalida, 
                HoraSalida: parquer[i].HoraSalida, replicate: parquer[i].replicate})
            
            await datosreales.save();
    
        }

    }
}

module.exports={
    insertarEspejo,
    parquerInsertar
     
}