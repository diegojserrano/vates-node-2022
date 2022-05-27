const prompt = require('prompt-sync')()
const Articulo = require('./articulo')



function cargar_articulos(n) {
    let v = []

    for (i = 0; i < n; i++) {

        const nombre = prompt("nombre: ")
        const precio = parseFloat(prompt("precio: "))
        const stock = parseInt(prompt("stock: "))
        const tipo = parseInt(prompt("tipo: "))

        const articulo = new Articulo(nombre, precio, stock, tipo)

        v.push(articulo)
    }

    return v
}

function listar(v) {
    for(x of v)
        console.log(x)
}

function promedio_precios(v) {
    let suma = 0

    for(x of v) 
        suma += x.precio

    return suma / v.length
}

function valor_stock(v) {
    let suma = 0

    for(x of v)
        suma += v.valuacion()

    return suma
}


function articulo_mas_caro(v) {
    let mayor = v[0]

    for(x of v)
        if (x.precio > mayor.precio)
            mayor = x

    return mayor
}

function articulos_por_tipo(v) {

    let c = Array(11).fill(0)

    for(x of v)
        c[x.tipo]++

    return c
}


let cantidad = parseInt(prompt("Ingrese la cantidad de articulos: "))
let articulos = cargar_articulos(cantidad)

if (cantidad > 0) {
    console.log("Listado de artículos ingresados")
    listar(articulos)

    const promedio = promedio_precios(articulos)
    console.log(`Promedio de precios: ${promedio}`)

    const mas_caro = articulo_mas_caro(articulos)
    console.log("Artículo más caro: " + mas_caro)

    const cantidades = articulos_por_tipo(articulos)
    console.log("Cantidad de artículos de cada tipo")
    for(i in cantidades)
        if (cantidades[i] > 0)
            console.log(`Tipo ${i}: ${cantidades[i]} artículos`)
}


