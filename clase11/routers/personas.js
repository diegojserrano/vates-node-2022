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

// funciona tanto para agregar como para modificar
router.put("/:numero", async (req, res) => {
    let num = parseInt(req.params.numero)
    
    if (!isNaN(num))  { // Si no es NaN, es porque es un número correcto
        let nueva = req.body
        nueva.documento = num
        let persona_encontrada = await gestor_personas.consultar(num)

        if (persona_encontrada) {
            await gestor_personas.modificar(nueva)
            res.sendStatus(200)
        }
        else {
            await gestor_personas.agregar(nueva)
            res.sendStatus(201)
        }
        
    }
    else
        res.status(400).send("El parámetro debe ser numérico")

    res.end()
})



exports.router = router