const numeros = [1,20,50,55,77,79];
// console.table(numeros);

const meses = ['Enero','Febrero','Marzo','Abril','Mayo']
//console.table(meses);

numeros.push(60,21); //Agrega al FINAL del arreglo.
numeros.unshift(2,-22,11); // Agrega al INICIO del arreglo.

numeros.pop(); //Elimina el ÚLTIMO elemento del arreglo.
numeros.shift(); //Elimina el PRIMER elemento del arreglo.

numeros.splice(6, 1)


console.table(numeros);

const nuevoArrelgo = ['Diciembre', ...meses];
console.table(nuevoArrelgo);