class Persona {
    constructor(documento, nombre, apellido, edad) {
        this.documento = documento
        this.nombre = nombre
        this.apellido = apellido 
        this.edad = edad 
    }

    nombre_completo() {
        return this.nombre + " " + this.apellido
    }
    to_string() {
        return this.documento + " " + this.nombre_completo() + " " + this.edad
    }

}

module.exports = Persona