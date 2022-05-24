const { numero_aleatorio: aleatorio } = require("../clase02/funciones")


function crear_arreglo(cantidad) {
    let v = Array(cantidad)

    for(let i = 0; i < v.length; i++)
        v[i] = aleatorio(1,1000)

    return v
}

function listar(v) {
    for (const x of v) 
        console.log(x)    
}

function promedio(v) {
    let suma = 0

    // Supone que el arreglo está todo lleno
    for(x of v)
        suma += x

    return suma / v.length    
}


function contar_mayores(v, piso) {
    let c = 0

    for(x of v)
        if (x > piso)
            c++

    return c
}

function mayor(v) {
    let may = v[0]

    for(x of v)
        if (x > may)
            may = x
        
    return may       
}


numeros = crear_arreglo(20)
console.log("Números generados")
listar(numeros)
let prom = promedio(numeros)
console.log(`El promedio de todos es ${prom}`)

let cantidad = contar_mayores(numeros, prom)
console.log(`Hay ${cantidad} mayores que el promedio`)

let may = mayor(numeros)
console.log(`El mayor de todos es ${may}`)

