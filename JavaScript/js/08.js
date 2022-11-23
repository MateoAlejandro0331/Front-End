#!/usr/bin/node
// Consumiendo una API con Fetch

const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then( (response) => response.json())
    .then( (result) => { // result es el lo que entrega la primera promesa (then in line 7)
        result.forEach( user => {
            console.log(user)
        });
    })

