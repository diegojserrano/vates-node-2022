/* Hacer un programa que genere al azar el precio de un artículo entre 1000 y 10000. 
 * Calcular el valor del IVA. 
 * Imprimir un mensaje con el siguiente formato: "El precio del articulo es $ xxxxx. Con IVA: $xxxxx" */

let precio = Math.ceil(Math.random()*9000) + 1000
let iva = precio * 0.19
let precio_final = precio + iva


console.log(`El precio del articulo es $ ${precio}. Con IVA: $ ${precio_final}"`)

