const express = require('express')
const personas = require('./routers/personas')

const app = express()

app.use("/personas/", personas.router)




app.listen(8080)