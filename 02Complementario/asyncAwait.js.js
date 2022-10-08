const vehiculos = [
    {
      id: "V1",
      descripcion: "4 puertas",
      placa: "AJ45",
      color: "blanco",
    },
    {
      id: "V2",
      descripcion: "4 puertas",
      placa: "KVPP10",
      color: "blanco",
    },
    {
      id: "V3",
      descripcion: "4 puertas",
      placa: "HJM4",
      color: "negro",
    },
    {
      id: "V4",
      descripcion: "2 puertas",
      placa: "LP40",
      color: "cafe",
    },
    {
      id: "V5",
      descripcion: "2 puertas",
      placa: "KCAS10",
      color: "blanco",
    },
  ];
  const espacioParqueo = [
    {
      id: "E1",
      descripcion: "Reservado para discapacidad",
    },
    {
      id: "E2",
      descripcion: "no mas de 1/2 hora",
    },
    {
      id: "E3",
      descripcion: "",
    },
    {
      id: "E4",
      descripcion: "",
    },
  ];
  
  //Relacion aplicada entre las entidades
  const parquear = [
    {
      id: "P01",
      idVehiculo: vehiculos[0].id,
      idParqueo: espacioParqueo[3].id,
      fecha: "12/09/2022",
      horaEntrada: "16:00",
      horaSalida: "16:30",
    },
    {
      id: "P01",
      idVehiculo: vehiculos[1].id,
      idParqueo: espacioParqueo[0].id,
      fecha: "12/09/2022",
      horaEntrada: "14:00",
      horaSalida: "14:30",
    },
    {
      id: "P02",
      idVehiculo: vehiculos[2].id,
      idParqueo: espacioParqueo[1].id,
      fecha: "12/09/2022",
      horaEntrada: "14:00",
      horaSalida: "14:30",
    },
    {
      id: "P03",
      idVehiculo: vehiculos[3].id,
      idParqueo: espacioParqueo[3].id,
      fecha: "12/09/2022",
      horaEntrada: "8:00",
      horaSalida: "9:30",
    },
    {
      id: "P04",
      idVehiculo: vehiculos[4].id,
      idParqueo: espacioParqueo[2].id,
      fecha: "12/09/2022",
      horaEntrada: "14:00",
      horaSalida: "14:30",
    },
  ];
  
  module.exports = {
    espacioParqueo,
    parquear,
    vehiculos,
  };
  function findBookForId(id, callback  ){
    const book = books.find((book)=> book.id===id );
    if (!book)
    {
        const error= new Error();
        error.message="Libro no encontrado";
        return callback(error);
    }
    return callback(null, book );
}
function findAuthorForId(id, callback){
    const vehiculos =  authors.find((vehiculo)=>{
        return vehiculos.id===id;
    });
    if (!vehiculos)
    {
        const error =  new Error();
        error.message= "vehiculo no encontrado";
        return callback(error)
    }
    return callback(null, vehiculos)
}


findBookForId(3, (err,book)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    // console.log(book)
    findAuthorForId( book.idVehiculo, ( err, placa )=>{
        if (err)
        {
            return console.log(err.message);
        }
        book.placa= placa; 
        delete book.idautor;
        console.log(book);

    } )
})




