// For Loop

// for ( let i = 0; i <= 10; i++) { // let i = 0 es de donde partimos | i <= 10 es hasta donde ejecutamos | i++ es la forma de recorrer el índice
//     console.log(i);
// }

// for ( let i = 1; i < 101; i++) { // Inciamos el index en i = 1 para no evaluar en 0
//     if ( i % 2 === 0 ) { // i % 2 devuelve el resto de dividir i entre 2, el === se pregunta si ese resto es igual a 0. Si es así por definición es Par
//         console.log(`Es un número ${i} es Par`)
//     }
//     else {
//         console.log(`Es un número ${i} es Impar○`)
//     }
// }

const carrito = [
    {nombre: 'Monitor HD', precio: 500, disponible: true},
    {nombre: 'Celular', precio: 200, disponible: true},
    {nombre: 'Mouse', precio: 20, disponible: true},
    {nombre: 'Tablet', precio: 350, disponible: true},
    {nombre: 'Teclado', precio: 20, disponible: true},
];


for ( let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre); // La expreción [#°] indicaba el indice del elemento a mostrar
}

// While Loop
let i = 1; // Indice

while( i <= 100) { // Condición
    if( i % 2 == 0) {
        console.log (`El número ${i} es Par`);
    } else {
        console.log(`El número ${i} es Impar`)
    }
    i++; // Incremento
}


// Do While Loop

let i = 100; // Indice fuera

do {
    console.log(i);

    i++; // Incremento dentro del "Do"-hacer.
} while( i < 10) // Condicón fuera del "Do".