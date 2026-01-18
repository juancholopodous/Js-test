// Objetos
'use strict'; //Corre JS en modo estricto.

const producto = {
    nombreProducto: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

Object.seal(producto);

producto.precio = 200;

console.log(Object.isSealed(producto)); //Consulta si el Objeto está congelado.


console.log(producto);