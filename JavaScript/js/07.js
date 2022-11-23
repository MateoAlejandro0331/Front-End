#!/usr/bin/node
//importar funciones con JS
/*
    Como se exporto con notacion de objeto, por que hay varias funciones que
    se exportan, al importar tambien es necesario declararlo con notacion de objeto
    Nota: el punto en la direccion de funciones hace referencia a el mismo directorio

*/
import { sumar } from "./funciones.js"

const resultado = sumar(5,5)
console.log(resultado)