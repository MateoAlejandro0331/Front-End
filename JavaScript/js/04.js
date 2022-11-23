#!/usr/bin/node
// Eventos del DOM - Inputs

/*  
    parar leer el input, se le puede pasar un parametro a la funcion
    y leer usando ese parametro, o usar el mismo inputNombre.value
    pero el profe dice que no es recomendable, ya con eso puedes 
    manipulas como quieras la entreda
*/
const inputNombre = document.querySelector('#formulario .nombre')

inputNombre.addEventListener('input', function(event) {
    console.log(event.target.value)
})

const inputPassword = document.querySelector('.password')

inputPassword.addEventListener('input', functionPassword)

function functionPassword(event) {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 1000)
}