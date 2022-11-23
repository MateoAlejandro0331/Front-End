#!/usr/bin/node
//Manipular elementos HTML con JS

const heading = document.querySelector('.DOM h2')

heading.textContent = "Nuevo heading"
console.log(heading.textContent)


//#nombre = id: nombre
const input = document.querySelector('#nombre')
input.value = "nuevo valor"

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach( enlace => enlace.textContent = "Nuevo enlace" )
