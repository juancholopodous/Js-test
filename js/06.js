// Objeto Math

let resultado;

resultado = Math.PI; //Marca el valor Pi clasico.
resultado = Math.round(3.5);//Redondea con ,5 como margen para arriba.
resultado = Math.ceil(4.2);//Redondea SIEMPRE para arriba.
resultado = Math.floor(2.1);//Redondea SIEMPRE para abajo.
resultado = Math.sqrt(16); //Devuelve la raíz cuadrada
resultado = Math.abs(-2.5); //Devuelve el valor absoluto

//Mescla de una función (floor), con otra ( Math.random() ), un operador * y
//un número (20) se puede obtener un aleatorio superior a 1 y entero.
resultado = Math.floor (Math.random()* 20);

console.log(resultado);