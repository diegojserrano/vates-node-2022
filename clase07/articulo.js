class Articulo {
    constructor(nombre, precio, stock, tipo) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.tipo = tipo
    }

    valuacion () {
        return this.stock * this.precio
    }
}
    
module.exports = Articulo