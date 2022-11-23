#!/usr/bin/node
// Consumiendo una API con Fetch - async await, manejando diferentes consultas

const url1 = "https://jsonplaceholder.typicode.com/users"
const url2 = "https://jsonplaceholder.typicode.com/todos"


const consultaAPI = async () => {
    //Array destructuring
    const inicio = performance.now() //calcular el tiempo
    const [response1, response2] = await Promise.all([ fetch(url1), fetch(url2)])

    const result1 = await response1.json()
    const result2 = await response2.json()
    console.log(result1, result2)

    const fin = performance.now()

    console.log(`tiempo de ejecucion ${fin - inicio}`)
}

consultaAPI()