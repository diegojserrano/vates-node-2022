let funciones = require("../clase02/funciones")
const prompt = require("prompt-sync")()

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
                        funciones.numero_aleatorio(1,5),
                        funciones.numero_aleatorio(1,23),
                        funciones.numero_aleatorio(1,100),
                        funciones.numero_aleatorio(0,100))
}

function crear_arreglo(n) {
    //Alternativa 1
    //let jugadores = Array(cantidad)
    //for (let i = 0; i < cantidad; i++)
    //    jugadores[i] = generar_jugador()


    //Alternativa 2
    let jugadores = []
    for (let i = 0; i < n; i++)
    jugadores.push(generar_jugador())

    return jugadores
}

function listar_arreglo(v) {
    for(x of v)
        console.log(x.toString())
}

function jugadores_menos_partidos(v, tope) {
    let c = 0

    for(x of v)
        if (x.partidos_jugados < tope)
            c++

    return c
}

function jugador_mayores_partidos(v) {

    let mayor = v[0]

    for(cada_jugador of v)
        if (cada_jugador.partidos_jugados > mayor.partidos_jugados)
            mayor = cada_jugador

    return mayor
}

function promedio_estado(v) {
    let suma = 0

    for(x of v)
        suma += x.estado_fisico

    return suma / v.length
}

function buscar_jugador(v, numero) {
    let encontrado

    for(x of v)
        if (x.camiseta == numero) {
            encontrado = x
            break
        }
            
    return encontrado
}

function promedio_partidos_posicion(v, posicion) {
    let suma = 0, c = 0

    for(x of v) 
        if (x.posicion == posicion) {
            suma += x.partidos_jugados
            c++
        }

    let promedio = 0
    if (c > 0) promedio = suma / c
    return promedio
}


cantidad = parseInt(prompt("Ingrese la cantidad de jugadores: "))

let jugadores = crear_arreglo(cantidad)

console.log("\nListado de los jugadores")

listar_arreglo(jugadores)

const cantidad_menos_10_partidos = jugadores_menos_partidos(jugadores, 10)
const jugador_mas_partidos = jugador_mayores_partidos(jugadores)
const promedio_estado_fisico = promedio_estado(jugadores)

const camiseta_buscada = parseInt(prompt("Ingrese el número del jugador a buscar: "))
const jugador_buscado = buscar_jugador(jugadores, camiseta_buscada)
const promedio_partidos_arqueros = promedio_partidos_posicion(jugadores, 1)
const promedio_partidos_defensores = promedio_partidos_posicion(jugadores, 2)
const promedio_partidos_mediocampo = promedio_partidos_posicion(jugadores, 3)
const promedio_partidos_delanteros = promedio_partidos_posicion(jugadores, 4)

console.log(`Cantidad de jugadores con menos de 10 partidos: ${cantidad_menos_10_partidos}`)
console.log(`Jugador con mayor cantidad de partidos jugados: ${jugador_mas_partidos.nombre}`)
console.log(`Promedio de estado físico: ${promedio_estado_fisico}`)
console.log(`Estado físico del jugador con camiseta ${camiseta_buscada}: ${jugador_buscado?.estado_fisico??"No encontrado"} `)

console.log(`Promedio de partidos por cada posición`)
console.log(`Arqueros: ${promedio_partidos_arqueros}`)
console.log(`Defensores: ${promedio_partidos_defensores}`)
console.log(`Mediocampo: ${promedio_partidos_mediocampo}`)
console.log(`Delanteros: ${promedio_partidos_delanteros}`)











