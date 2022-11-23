#!/usr/bin/node
// Uso de condicional tenario

const autenticado = true


//            aqui si la condicion se cumple                aqui si la condicion no se cumple
autenticado ? console.log("El usuario esta autenticado") : console.log("El usuario no esta autenticado")


const saldo = 600
const pagar = 800
const tarjeta = false

//Igual que los if, else if, se pueden hacer ternarios con la misma funcion
// Con la sintaxis de abajo
saldo > pagar ?
    console.log("Si puedes pagar") :
        tarjeta ? console.log("Puedes pagar con tarjeta") :
            console.log("No puedes pagar")