// This

// Object Literal
const reservacion = {
    nombre: 'Juan', //String
    apellido: 'Roth',
    total: 1000,
    pagado: false,
    informacion: function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion();