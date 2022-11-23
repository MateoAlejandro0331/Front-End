#!/usr/bin/node
// Eventos del DOM - Clicks

const heading = document.querySelector('.heading')

//este metodo del objeto se usa para esperar eventos, seleccionarlo y 
// programarlos, este caso es solo cuando se da click, se utilizan las funciones para programar el evento
// Se pueden definir las funciones y llamarlas,
// 1 param = evento , 2 param = funcion NOTA: no se puede usar function expression
// cuando llamar la funcion como segundo parametro, solo se esa el nombre de la funcion
// correct: function --- incorrect: functio(), esto es como siempre llamar la funcion
heading.addEventListener('click', () => {
    heading.textContent = "Nuevo heading al dar click"
})

/*
 addEventListener solo sirve para un objeto, no para listas de objetos
 si existe una lista de objetos como en el caso de la navegacion y los links
 hay que iterarla y hacerlo individual para cada uno
*/