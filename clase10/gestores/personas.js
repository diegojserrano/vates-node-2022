const mariadb = require('mariadb')
const config = require("../config/bd")


function agregar(nueva) {
    lista.push(nueva)
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

exports.agregar = agregar
exports.consultar_todas = consultar_todas
exports.consultar = consultar