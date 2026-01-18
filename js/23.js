const metodoDePago = 'Depósito';

switch(metodoDePago) {
    case 'tarjeta':
        console.log('Pago con Trajeta');
        break;
    case 'efectivo':
        console.log('Pago con Efectivo');
        break;
    case 'BitCoin':
        console.log('Pago con BitCoin');
        break;
    case 'Cheque':
        console.log('El pago queda pendiente a revisión de fondos');
        break;
    case 'Depósito':
        console.log('Pago con Depósito, esperando envío de comprobante de pago');
        break;
    default: // Punto de cierre para todos los casos que queden fuera.
        console.log('Pago aún pendiente')
        break;
}