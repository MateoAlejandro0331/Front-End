#!/usr/bin/node
//Aprendiendo como usar Arrays en JavaScript

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']


//Accede a cada elemento de array
const ArrayForEach = technologies.forEach( function(tech) {
    console.log(tech)
    return tech
})


//Accede a cada elemente y crea un nuevo array
const ArrayMap = technologies.map( function(tech) {
    console.log(tech)
    return tech
})

console.table(ArrayMap)
console.table(ArrayForEach)