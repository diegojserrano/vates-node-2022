let { es_par } = require('./funciones')

let x = Math.ceil(Math.random() * 100)
let resultado


if (es_par(x)) { // x es par
    resultado = "es par"
} else { // x es impar
    resultado = "es impar"   
}

// con operador ternario

//resultado = (x % 2 == 0)? "es par": "es impar"

console.log(`El número ${x} ${resultado}`)
