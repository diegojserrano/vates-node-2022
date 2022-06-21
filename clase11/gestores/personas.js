const mariadb = require('mariadb')
const config = require("../config/bd")


async function agregar(nueva) {
    const conn = await mariadb.createConnection(config)
    const valores = [nueva.documento, nueva.nombre, nueva.apellido, nueva.edad]
    await conn.query("insert into personas2(documento, nombre, apellido, edad) values(?,?,?,?) ",valores)
    conn.end()
}


async function consultar_todas() {
    const conn = await mariadb.createConnection(config)
    let personas = await conn.query("select * from personas2")
    conn.end()
    return personas
}

async function consultar(num) {
    const conn = await mariadb.createConnection(config)
    let personas = await conn.query("select * from personas2 where documento = ?", [num])
    conn.end()
    return personas[0]
}

async function modificar(persona) {
    const conn = await mariadb.createConnection(config)
    const valores = [persona.nombre, persona.apellido, persona.edad, persona.documento]
    await conn.query("update personas2 set nombre = ?, apellido = ?, edad = ? where documento = ?",valores)
    conn.end()
}

exports.agregar = agregar
exports.consultar_todas = consultar_todas
exports.consultar = consultar
exports.modificar = modificar