// 'use strict'
const producto = {
    nombreProducto: 'Monitor HD',
    precio: 300,
    disponible: true,
};

Object.freeze (producto);

const medidas = {
    precio: '1Kg',
    medidas: '1m'
};

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(medidas);
console.log(nuevoProducto);