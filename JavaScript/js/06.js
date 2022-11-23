#!/usr/bin/node
// Eventos del DOM - Submit - crear codigo html con JS

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) =>{
    event.preventDefault() // Prevenir la accion por default que es enviar el formulario

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password'). value

    const alertaPrevia = document.querySelector('.alerta')

    if (alertaPrevia) alertaPrevia.remove()

    const alerta = document.createElement('DIV') //Crear atributo html (<div>)
    console.log(alerta)
    alerta.classList.add('alerta') //darle una clase al DIV


    if (nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son necesarios' //Escribir en el contenido del div
        console.log('Todos los campos son necesarios')
    } else {
        alerta.textContent = 'todo bien...'
        console.log('todo bien...')
    }

    formulario.appendChild(alerta) // Se le pasa como hijo el nuevo div
})