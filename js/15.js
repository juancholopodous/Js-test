
const meses = ['Enero','Febrero','Marzo','Abril','Mayo']

const carrito = [
    {nombre: 'Monitor HD', precio: 500, disponible: true},
    {nombre: 'Celular', precio: 200, disponible: true},
    {nombre: 'Mouse', precio: 20, disponible: true},
    {nombre: 'Tablet', precio: 350, disponible: true},
    {nombre: 'Teclado', precio: 20, disponible: true},
];


// Some ideal para verificar que existe un arreglo de objetos
let resultado = carrito.some(function(producto) {
    return producto.nombre === 'Monitor'
})


// Recduce, suma por iteracón de un elemento dentro de un arreglo de objetos
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);

resultado = carrito.reduce((total, producto) => total + producto.precio, 0); // Expresión Function Arrow

// Filter
resultado = carrito.filter(function(producto) {
    return producto.nombre === 'Celular'
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'Celular'
});

console.log(resultado);