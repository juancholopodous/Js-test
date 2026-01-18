let total = 0;

function agregarCarrito(precio) {
    return total += precio; // += es una forma de hacer incrementos
};

total = agregarCarrito(200);
total = agregarCarrito(50);
total = agregarCarrito(2);
total = agregarCarrito(102);

console.log(total);

function calcularImpuesto(total) {
    return 1.22 * total;
};

const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);