const express = require('express')
const gestor_personas = require('../gestores/personas')
const router = express.Router()

router.use(express.json())

router.get("/", async (req, res) => {
    res.json(await gestor_personas.consultar_todas())
    res.end()
})


router.get("/:numero", async (req, res) => {
    let num = parseInt(req.params.numero)
    
    if (!isNaN(num))  { // Si no es NaN, es porque es un número correcto
        let persona_encontrada = await gestor_personas.consultar(num)

        if (persona_encontrada) 
            res.json(persona_encontrada)
        else
            res.status(404)
    }
    else
        res.status(400).send("El parámetro debe ser numérico")

    res.end()
})

router.put("/:numero/:nombre/:apellido/:edad", (req, res) => {
    let num = parseInt(req.params.numero)
    let nom = req.params.nombre
    let ape = req.params.apellido
    let edad = parseInt(req.params.edad)

    
    let nueva = { numero: num, nombre: nom, apellido: ape, edad: edad }
    gestor_personas.agregar(nueva)

    res.sendStatus(201)

})

router.put("/:numero", (req, res) => {
    let num = parseInt(req.params.numero)
    let nueva = req.body
    nueva.numero = num

    gestor_personas.agregar(nueva)

    res.sendStatus(201)

})



exports.router = router