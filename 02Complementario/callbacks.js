const { vehiculos, parquear } = require(".")

    function mostrarElemento(idElemento, mostrarEntidad ){

        const encontrado=vehiculos.find((elemento)=>{
            return elemento.idVehiculos==idElemento
        })
        console.log("El vehiculo es : ")
        console.log(encontrado)
        mostrarEntidad(encontrado)


    }


    function mostrarEntidad(elementoEncontrado){
        const encontrado2=parquear.find((elemento)=>{
            return elemento.parquear==elementoEncontrado.parquear
        })
        console.log("El parqueo : ")
        console.log(encontrado2)
    }

    mostrarElemento(2, mostrarEntidad) 