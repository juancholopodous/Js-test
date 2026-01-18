// Arrays ó Arreglos

const numeros = [1,20,50,55,77,79];
console.log(numeros);
console.table(numeros);

const meses = ['Enero','Febrero','Marzo','Abril','Mayo']
console.table(meses);

console.table(meses[2]);
console.table(meses[5]);

// Conocer la extensión de un arreglo
console.log(meses.length);

meses.forEach( function(mes) {
    console.log(mes);
});

