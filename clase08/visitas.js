const express = require('express')
const enrutador = express.Router()
// Análogo a un @RestController de spring
let c = 0

enrutador.get("/", (req, res) =>  {
    res.end("Petición incorrecta. Navegue /contar o /consultar. v2")
})

enrutador.get("/contar", (req, res) => {
    c++
    res.end("Peticion contada correctamente")
})

enrutador.get("/consultar", (req, res) => {
    res.end(`Se recibieron ${c} peticiones`)
})

exports.router = enrutador
