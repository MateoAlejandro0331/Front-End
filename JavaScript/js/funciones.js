#!/usr/bin/node
//Crear y exportar funciones con JS
/*
    Para poder importarlas en la etiqueta <script>
    hay que añadir un atributo: type="module"
    <script src="js/07.js" type"module"><script>
    ejemplo en el index.html
*/

function sumar(num1=0, num2=1) {
    return num1 + num2
}

function restar(num1=0, num2=1) {
    return num1 - num2
}

export {
    sumar,
    restar
}

/*
    - Cuando solo se quiere importar una funcion se puede usar
    export default functionName
    - Cuando se quiere importar mas funciones se utiliza la notacion
    de objeto
    export {
        sumar,
        restar
    }
    no se le coloca el valor, por que al haber una funcion asociada al mismo nombre
    no es necesario, si no fuera el mismo nombre si es necesario utilzar la llave valor
    ejemplo:
        export {
            sumar: otherFunction,
            restar: otherFuntion
        }
*/