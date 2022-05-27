const Persona = require ('./persona')

let p = new Persona(1, "Juan", "Perez", 26)
let q = new Persona(2, "Juana", "Pino", 23)

p.telefono = 12341234

Persona.prototype.incrementar_edad = function() { this.edad++ }

console.log(p.to_string())
console.log(q.to_string())

p.incrementar_edad()
q.incrementar_edad()

console.log(p.to_string())
console.log(q.to_string())

let art1 = { codigo: 1, nombre: "Lapiz", precio: 24 }

let venta = { articulo: art1, cantidad: 3, cliente: p}

console.log(JSON.stringify(venta))
let v = JSON.parse("[4,5,7,89,5]")

console.log(v)

