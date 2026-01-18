const puntaje = '1000';

if (puntaje === 1000) {
    console.log('Si, el puntaje es 1000');
}
else {
    console.log('No es 1000');
}


const efectivo = 1000;
const carrito = 800;

if ( efectivo > carrito) {
    console.log('El usuarui puede pagar');
} else {
    console.log('Los fondos son insuficientes');
}

const rol = 'Editor';

if ( rol === 'Administrador') {
    console.log('El usuario tiene control total del sistema');

} else if ( rol === 'Editor' ) {
    console.log('El usuario posee permisos de lectura pero no de escritura');
}
 else { // El else como hace de cierre no posee detalle de parametro.
    console.log('El usuario no posee acceso.');
}