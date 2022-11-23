#!/usr/bin/node
// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (event) =>{
    event.preventDefault() // Prevenir la accion por default que es enviar el formulario

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password'). value

    if (nombre === '' || password === ''){
        console.log("Se necesitan todos los campos")
    } else {
        console.log("Todo esta bien, enviando...")
    }
})