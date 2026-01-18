// Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if (auth) {
        resolve('Usuario Autenticado'); // El Promise se cumple
    } else {
        reject('No se pudo iniciar sesión');
    }
});

usuarioAutenticado // Expreción Arrow Function
    .then( resultado => console.log(resultado))
    .catch( error =>  console.log(error))
 
const usuarioAutenticado2 = new Promise((resolve, reject) => {
    
})