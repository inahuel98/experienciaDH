function valorBaseHamburguesa(tipoDeHamburguesa){
    let valorBase = 0;
    switch(tipoDeHamburguesa){
        case "carne a la parrilla":
            valorBase = 1800;
            break;
        case "pollo":
            valorBase = 1500;
            break;
        case "vegetariana":
            valorBase = 1200;
            break;
        default:
            valorBase = 0;
    }
    return valorBase;
}


function totalDelPedido(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla){
    let valorBase = valorBaseHamburguesa(tipoDeHamburguesa);
    let precioFinal = valorBase + (jamon ? 30: 0) + (queso ? 25: 0) + (salsaDeTomate ? 5: 0) + (mayonesa ? 5: 0)
        + (mostaza ? 5: 0) + (tomate ? 15: 0) + (lechuga ? 10: 0) + (cebolla ? 10: 0);
           
    return precioFinal;

}

function mostrarPedido(nombreCliente, apellidoCliente, tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla, totalDelPedido){
    let precioFinal = totalDelPedido(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    console.log("Sr/a. " + nombreCliente + " " + apellidoCliente + " el monto de su pedido es: $" + precioFinal);
}

mostrarPedido("inti", "quispe", "carne a la parrilla", false, true, true, false, false, true, true, true, totalDelPedido);

