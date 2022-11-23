#!/usr/bin/node
//Selectores del DOM - seleccionando etiquetas del HTML

//querySelector - trae 1 elemento que concuerden con la busqueda
//querySelectorAll - trea todos los elementos que concuerdan con la busqueda
//Selectores - pueden ser CSS, etiquetas

/*  Puedes acceder a las etiquetas especificando el roden en donde se encuentran, 
    Por ejemplo, aqui hay primero una clase DOM y luego va a buscar un h2 dentro de
    Esa etiqueta con esa clase
*/

const heading = document.querySelector('.DOM h2')

console.log(heading)
console.log(heading.textContent)
console.log(heading.tagName)

//ejemplo de querySelectorAll - retorna un objeto iterable

const enlaces = document.querySelectorAll('.navegacion a')

console.log(enlaces)