// St ring o Cadenas de Texto

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo'
const producto2 = "Monitor HD"

// length es una propiedad para saber la extensión de lo que está dentro de '' ó "" y comienza desde la posición 0

console.log(tweet.length);

//IndexOf te permite saber en que posición se encuentra un texto que tú estas buscando, si la
//consola devuelve -1 es porque escribimos mal la palabra ó no está.
console.log(tweet.indexOf('JavaScript'));

//Includes (retorna true o false)
console.log(producto2.includes('HD'));
