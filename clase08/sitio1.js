const http = require('http')

let c = 0 

const servidor = http.createServer((req, res) => {
    
    if (req.url == "/contar") {
        c++
        res.end("Peticion contada correctamente")        
    } else if (req.url == "/consultar") {
        res.end(`<h1>Hola soy un sitio programado con Node!!</h1><h2>Recibí ${c} peticiones</h2>`)
    } else {
        res.end("Peticion incorrecta, navegue /contar o /consultar")
    }

    console.log(`Recibi una petición ${req.method} en ${req.url} `)
})

servidor.listen(8080)

