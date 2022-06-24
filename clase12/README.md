# Clase 12: Cierre

## Temario
    
* Presentación de la evaluación
* Introducción a JWT

## Material

* [Clase completa (YouTube)](https://www.youtube.com/watch?v=1LMfF2k8Hro)

## Evaluación final

A la API desarrollada en la clase 9 se le va a agregar una nueva tabla en la base de datos.
La nueva tabla almacena números de teléfono de las personas, con una relación uno a muchos entre las tablas.

El script de creación de la nueva tabla es el siguiente:

```-- Personas.telefonos definition

CREATE TABLE Personas.telefonos (
id_telefono int auto_increment NOT NULL,
numero varchar(20) NOT NULL,
id_tipo int NOT NULL,
documento int NOT NULL,
CONSTRAINT telefonos_PK PRIMARY KEY (id_telefono),
CONSTRAINT telefonos_FK FOREIGN KEY (documento) REFERENCES Personas.personas2(documento) ON DELETE CASCADE
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;

```

A la API se le deben agregar enpoints para la funcionalidad de altas, bajas, modificación y consulta de teléfonos.

Asimismo es deseable que se agregen endpoints para diversas consultas, tales como la lista de teléfonos de una persona en particular, lista de teléfonos cuyo número finaliza en una secuencia, o búsquedas de personas filtrando por una porcion de nombre o apellido.

A continuación se presesenta una propuesta con los endpoints que podrían agregarse.


### ABM de telefonos:

* GET /telefonos/        = consultar todos
* GET /telefonos/:id     = consultar uno por id
* POST /telefonos        = agregar uno nuevo
* PUT  /telefonos/:id    = modificar un telefono existente
* DELETE /telefonos/:id  = eliminar un telefono


### Relación entre personas y telefonos:

* GET /personas/:id/telefonos       = consultar los telefonos de una persona
* GET /personas/:id/telefonos/:tipo = consultar los telefonos de una persona, filtrando por tipo


### Búsquedas:

* GET /telefonos/?sufijo=xxx = consultar todos los telefonos cuyo número finaliza en una secuencia
* GET /personas/?filtro=xxx  = buscar las personas cuyo nombre o apellido incluyen una subcadena


