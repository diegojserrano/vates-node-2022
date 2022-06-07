const prompt = require('prompt-sync')()
const Articulo = require('./articulo')

function cargar_articulo() {
    const nombre = prompt("nombre: ")
    const precio = parseFloat(prompt("precio: "))
    const stock = parseInt(prompt("stock: "))
    const tipo = parseInt(prompt("tipo: "))

    return new Articulo(nombre, precio, stock, tipo)
}

let cantidad = parseInt(prompt("Ingrese la cantidad de articulos: "))
let articulos = Array(cantidad).fill(0).map(cargar_articulo)

if (cantidad > 0) {
    console.log("Listado de artículos ingresados")
    articulos.forEach(a => console.log(a))

    let suma = articulos.map(a => a.precio).reduce((a,b) => a+b)
    let promedio = suma / articulos.length
    console.log(`Promedio de precios: ${promedio}`)


    //let mas_caro = articulos.sort((a, b) => b.precio - a.precio)[0]
    let mas_caro = articulos.reduce((a, b) => (a.precio > b.precio)? a: b)
    console.log("Artículo más caro: " + mas_caro)

    let valor_stock = articulos.map(a => a.valuacion()).reduce((a,b) => a+b)
    //let valor_stock = articulos.reduce((a,b) => a+b.valuacion(), 0)
    console.log(`Valor total del stock: ${valor_stock}`)

    let cantidades = Array(11).fill(0)
    articulos.forEach(a => cantidades[a.tipo]++)

    console.log("Cantidad de artículos de cada tipo")
    cantidades.forEach((c,tipo) => {
        if (c > 0)
            console.log(`Tipo ${tipo}: ${c} artículos `)
    })

    //cantidades.map((cantidad,tipo) => { cantidad; tipo })
    //    .filter(cont => cont.c > 0)
    //    .forEach(cont => console.log(`Tipo ${cont.tipo}: ${cont.cantidad} artículos`))

    //for(i in cantidades)
    //    if (cantidades[i] > 0)
    //        console.log(`Tipo ${i}: ${cantidades[i]} artículos`)
}


