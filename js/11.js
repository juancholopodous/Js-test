const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

// Forma Antigua
const PrecioDelProducto = producto.precio;

// Destructuring = Sacar de una estructura
const {precio, disponible} = producto;

console.log(precio);
console.log(disponible);