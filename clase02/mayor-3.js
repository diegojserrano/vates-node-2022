


let a = numero_aleatorio(1,100)
let b = numero_aleatorio(1,100)
let c = numero_aleatorio(1,100)

// Alternativa con condiciones anidadas
if (a > b && a > c) 
    mayor = a
else if (b > c)
    mayor = b
else 
    mayor = c

// Alternativa con variable auxiliar
if (a > b) mayor = a
else mayor = b

if (c > mayor) mayor = c

// Alternativa con operador ternario
mayor = (a > b && a > c)? a: (b > c)? b: c


console.log(`El mayor entre ${a}, ${b} y ${c} es ${mayor}`)