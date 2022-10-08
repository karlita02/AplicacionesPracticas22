const { espacioParqueo, parquear } = require(".")

function mostrarElemento(idElemento){
    return new Promise((resolved, reject)=>{
        const encontrado=espacioParqueo.find((elemento)=>{
        return elemento.espacioParqueo==idElemento
         
        })

        resolved(encontrado)
    })
}


function mostrarEntidad(elementoEncontrado){
    return new Promise((resolved, reject)=>{
     const encontrado2=parquear.find((elemento)=>{
        return elemento.parquear==elementoEncontrado.parquear
     })

     resolved(encontrado2)
    })
}



mostrarElemento(1).then((resp)=>{
    console.log("Elemento del arreglo : ")
    console.log(resp)
    return mostrarEntidad(resp)

}).then((resp)=>{
    console.log("Datos de la entidad relacionada: ")
    console.log(resp)
})
