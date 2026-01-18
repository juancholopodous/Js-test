const carrito = [
    {nombre: 'Monitor HD', precio: 500, disponible: true},
    {nombre: 'Celular', precio: 200, disponible: true},
    {nombre: 'Mouse', precio: 20, disponible: true},
    {nombre: 'Tablet', precio: 350, disponible: true},
    {nombre: 'Teclado', precio: 20, disponible: true},
];

// forEach
carrito.forEach( prodcuto => console.log(prodcuto.nombre));
    
// Map  -   Crea un nuevo arreglo
const arreglo2 = carrito.map( prodcuto => prodcuto.nombre);
