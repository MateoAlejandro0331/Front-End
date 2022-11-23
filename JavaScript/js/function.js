#!/usr/bin/node
/*  Functions Declarative:
    Con este tipo de funciones se puede llamar la funcion 
    mucho antes de crearla por que primero js declara todas las
    funciones en una fase de creacion, algo asi como que primero
    compila todas las funciones que existan y luego las ejecuta
*/
function suma1(num1=1, num2=0) {
    return num1 + num2
}

/*  Function expression
    como es una variable estas no se registran en la fase de creacion
    por eso no se le peude llamar antes de declararla, pero sirve exactemente
    igual
*/
const suma2 = function(num1=1, num2=0) {
    return num1 + num2
}

/*  Arrow Functions
    basicamente es lo mismo
    cuando solo se una una linea de codigo, esta sintaxis es valida

    const suma3 = (num1=1, num2=0) => num1 + num2
*/
const suma3 = (num1=1, num2=0) => {
    return num1 + num2
}


console.log(suma1(10, 10))
console.log(suma2(15, 15))
console.log(suma3(20,20))