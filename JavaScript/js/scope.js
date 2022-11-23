#!/usr/bin/node
/*  El scope dentro de javascrip no permite crear variables con el mismo 
    nombre, a excepcion de que la variable con el mismo nombre este
    dentro de una funcion
*/

const precio = 300

function unaFuncion() {
    const precio = 600  // Si quito la declaracion interna, toma el valor global de presio
    console.log(precio) // es decir, toma 300
}

console.log(precio)
unaFuncion()