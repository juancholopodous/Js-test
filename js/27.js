// POO

// OBJECT LITERAL - código duro con valer ingresados manualmente
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// OBJECT CONSTRUCTOR - Más dinámico
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de $${this.precio}`;
}

function Cliente(nombre, apellido, direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
}
Cliente.prototype.formatearCliente = function () {
    return `El Cliente: ${this.nombre} ${this.apellido} desea que el envío se haga a: ${this.direccion}`;
}

const cliente1 = new Cliente('Juan', 'Roth', 'Calle A N°1212');
const cliente2 = new Cliente('María', 'Hernandez', 'Calle XY N°8841');
const producto2 = new Producto('Monitor Curvo', 800, true);
const producto3 = new Producto('Mouse Gamer', 450, true);
const producto4 = new Producto('Teclado mecánico', 600, false);
const producto5 = new Producto('Luces LED', 10, true);

console.log(cliente1.formatearCliente());
console.log(cliente2.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
