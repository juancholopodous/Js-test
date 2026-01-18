// Classes

class Producto { //Por convención el nombre de las clases comienzan en Mayúsculas.
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }
    obtenerPrecio() {
        console.log(this.precio); 
    }
}

//Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
    obtenerPrecio () {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
}

const libro = new Libro ('El Aleph', 1200, '5648416132131');
const producto1 = new Producto ('Monitor Curvo', 800);
const producto2 = new Producto ('Teclado Mecánico', 550);

console.log(libro.formatearProducto() );
console.log(libro.obtenerPrecio() );
console.log(producto1);
console.log(producto2);