let { es_par, numero_aleatorio: al_azar } = require('./funciones')

let cantidad_pares = 0
let cantidad_impares = 0

for (let i = 0; i < 20; i++) {
    let x = al_azar(100,1001)
    console.log(x)

    if (es_par(x)) {
        cantidad_pares++
    } else {
        cantidad_impares++
    }
}

console.log(`Salieron ${cantidad_pares} pares y ${cantidad_impares} impares`)
