const funciones = require('../clase02/funciones')

let imprimir = x => { console.log (x)}

let numeros = Array(10).fill(0).map(x => funciones.numero_aleatorio(1,1000))

imprimir("Numeros generados")
numeros.forEach(x => console.log(x))
imprimir("Cuadrados de todos")
numeros.map(x => x * x).forEach(imprimir)
imprimir("Numeros pares")
let pares = numeros.filter(x => x % 2 == 0)
pares.forEach(imprimir)
imprimir("Cuadrados de los pares")
pares.map(x => x * x).forEach(imprimir)


