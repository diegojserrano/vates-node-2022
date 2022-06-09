const express = require('express')
const router_visitas = require('./visitas') 

// Análogo al @SpringBootApplication de spring
const app = express()

app.use("/visitas", router_visitas.router)

app.listen(8080)