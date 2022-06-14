lista = Array()
lista.push({numero: 1, nombre: "Juan", apellido: "Perez", edad: 23})
lista.push({numero: 2, nombre: "Juana", apellido: "Gomez", edad: 23})

function agregar(nueva) {
    lista.push(nueva)
}

function consultar_todas() {
    return lista
}

function consultar(num) {
    return lista.find(p => p.numero == num)
}

exports.agregar = agregar
exports.consultar_todas = consultar_todas
exports.consultar = consultar