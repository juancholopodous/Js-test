// Números 

const valor1 = 5;
const valor2 = 200;
const valor3 = 100;
const valor4 = 1;
const valor5 = 4;
const valor6 = 2.2; //Esto . es en realidad una , para expresar un racional


// Los datos como números NO se colocan entre '' ó "" ya que esto los identifica
//como String

console.log (valor1 + valor2);
console.log (valor1 - valor2);
console.log (valor1 * valor2);
console.log (valor1 / valor2);

//
console.log (valor1 % valor5);
/* 
Este parametro % lo que hace es mostrar el valor entero como residuo entre
la divión número, no si bien 5 entre 4 podría terminar con un resto 0 si 
no se siguieran operando luego de la coma, este retorna 1 por consola ya que 
no indicaría que luego del resultado entero ('1' cómo 5/4 es '1',25) sigue quedando
resto de 1 a repartir, inerentemente de que este pueda seguirse fraccionando.
*/