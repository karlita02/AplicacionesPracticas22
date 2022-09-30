const { parquear, vehiculos, espacioParqueo } = require("./datos");

//recorrer el arreglo vehiculos con for
for (let index = 0; index < vehiculos.length; index++) {
  console.log(vehiculos[index]);
}
//recorrer el arreglo parquear con while
let i = 0;
while (i < parquear.length) {
  console.log(parquear[i]);
  i++;
}
//recorrer el arreglo espacio parqueop con dowhile
i=0;
do {
  console.log(espacioParqueo[i]);
  i++;
} while (i < espacioParqueo.length);