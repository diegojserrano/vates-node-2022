function es_par(n) {
    return n % 2 == 0
}

function es_impar(n) {
    return !es_par(n)
}

function numero_aleatorio(minimo, maximo) {
    const amplitud = maximo - minimo
    return Math.floor(Math.random() * amplitud) + minimo
}


function texto_aleatorio(longitud) {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, longitud);
}

exports.es_par = es_par
exports.es_impar = es_impar
exports.numero_aleatorio = numero_aleatorio
exports.texto_aleatorio = texto_aleatorio