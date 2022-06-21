const mariadb = require('mariadb')

const configuracion = {
    host: "localhost",
    database: "Personas",
    user: "root",
    password: "samaria"
}

async function main () {
    try {
        let conexion = await mariadb.createConnection(configuracion)
        let personas = await conexion.query("select concat(nombre, apellido) as nombre_completo from personas2 limit 100")
        conexion.end()

        personas.forEach(p => console.log(p))
    }
    catch (err)
    {
        console.log(err)
    }
}

console.log("antes de main")
main()
console.log("despues de main")




