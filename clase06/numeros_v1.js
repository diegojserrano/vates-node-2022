const funciones = require('../clase02/funciones')

let imprimir =  function(x) { console.log (x)}
let cuadrado = function(x) { return x * x}
let es_par = function(x) { return x % 2 == 0 }

let imprimir_cuadrado = function(x) { imprimir(cuadrado(x)) }
let imprimir_si_par = function(x) {
     if (es_par(x))
        imprimir(x) 
}

let imprimir_cuadrado_si_par = function(x) {
    if (es_par(x))
        imprimir_cuadrado(x) 
}

let numeros = Array(10)


for(let i = 0; i < numeros.length; i++)
    numeros[i] = funciones.numero_aleatorio(1,10)

imprimir("Numeros generados")
numeros.forEach(imprimir)
imprimir("Cuadrados de todos")
numeros.forEach(imprimir_cuadrado)
imprimir("Numeros pares")
numeros.forEach(imprimir_si_par)
imprimir("Cuadrados de los pares")
numeros.forEach(imprimir_cuadrado_si_par)


