#!/usr/bin/node
// Consumiendo una API con Fetch - async - await

const url = "https://jsonplaceholder.typicode.com/users"

const consultarAPI = async () => {
    
    const response = await fetch(url) // La funcion de await es esperar en esa linea hasta que tenga un resultado valido
    const result = await response.json()
    result.forEach( users => {
        console.log(users)
    });
}

consultarAPI()