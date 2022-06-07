let funciones = require("../Clase02/funciones")

let posiciones = [ "","Arquero", "Defensor", "Mediocampo", "Delantero" ]

class Jugador {
    constructor(nombre, posicion, camiseta, partidos_jugados, estado_fisico) {
        this.nombre = nombre
        this.posicion = posicion
        this.partidos_jugados = partidos_jugados
        this.camiseta = camiseta
        this.estado_fisico = estado_fisico
    }

    nombre_posicion() {
        return posiciones[this.posicion].padEnd(11)
    }

    toString() {
        return `${this.nombre.padEnd(10)}: ${this.nombre_posicion()} ${this.camiseta} ${this.partidos_jugados} ${this.estado_fisico}`
    }
}

function generar_jugador() {
    return new Jugador(funciones.texto_aleatorio(10),
                        funciones.numero_aleatorio(0,4),
                        funciones.numero_aleatorio(0,23),
                        funciones.numero_aleatorio(0,100),
                        funciones.numero_aleatorio(0,100))
}

function promedio(v) {
    if (v.length == 0) return 0
    const suma = v.reduce((a,b) => a + b)
    return suma / v.length
}

let jugadores = Array(20).fill(0).map(generar_jugador)
jugadores.forEach(x => console.log(x.toString()))
let cantidad_menos_10_partidos = jugadores.filter(x => x.partidos_jugados < 10).length
let jugador_mas_partidos = jugadores.reduce((a,b) => (a.partidos_jugados > b.partidos_jugados)? a: b)

let camiseta_buscada = funciones.numero_aleatorio(1,23)

let jugador_buscado = jugadores.find(x => x.camiseta == camiseta_buscada)
let promedio_estado_fisico = promedio(jugadores.map(x => x.estado_fisico))

// Alternativa 1
let promedio_partidos_arqueros = promedio(jugadores.filter(x => x.posicion == 1).map(x => x.partidos_jugados))
let promedio_partidos_defensores = promedio(jugadores.filter(x => x.posicion == 2).map(x => x.partidos_jugados))
let promedio_partidos_mediocampo = promedio(jugadores.filter(x => x.posicion == 3).map(x => x.partidos_jugados))
let promedio_partidos_delanteros = promedio(jugadores.filter(x => x.posicion == 4).map(x => x.partidos_jugados))

// Alternativa 2
let promedios_posicion = [0,1,2,3,4].map(p => promedio(jugadores.filter(x => x.posicion == p).map(x => x.partidos_jugados)))

// Alternativa 3
let suma = [0,0,0,0,0]
let cantidad = [0,0,0,0,0]
jugadores.forEach(j => {
    suma[j.posicion] += j.partidos_jugados
    cantidad[j.posicion] ++
})

promedios = [0,1,2,3,4].map(p => suma[p] / cantidad[p])

console.log(`Cantidad de jugadores con menos de 10 partidos: ${cantidad_menos_10_partidos}`)
console.log(`Jugador con mayor cantidad de partidos jugados: ${jugador_mas_partidos.nombre}`)
console.log(`Promedio de estado físico: ${promedio_estado_fisico}`)
console.log(`Estado físico del jugador con camiseta ${camiseta_buscada}: ${jugador_buscado?.estado_fisico??"No encontrado"} `)

console.log(`Promedio de partidos por cada posición`)
console.log(`Arqueros: ${promedio_partidos_arqueros} ${promedios_posicion[1]} ${promedios[1]}`)
console.log(`Defensores: ${promedio_partidos_defensores} ${promedios_posicion[2]} ${promedios[2]}`)
console.log(`Mediocampo: ${promedio_partidos_mediocampo} ${promedios_posicion[3]} ${promedios[3]}`)
console.log(`Delanteros: ${promedio_partidos_delanteros} ${promedios_posicion[4]} ${promedios[4]}`)











