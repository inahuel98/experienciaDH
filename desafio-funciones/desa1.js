function valorTipoDeVehiculo(tipoDeAuto){
    if (tipoDeAuto == "compacto"){
        return 14000;
    }else if(tipoDeAuto == "mediano"){
        return 17000;
    }else if(tipoDeAuto == "camioneta"){
        return 28000;
    }else{
        return 0;
    }
}
function valorSillaDeBebe(sillaDeBebe){

    return (sillaDeBebe == "si") ? 1200: 0;
}
function alquilarVehiculo(tipoDeAuto, diasDeUso, sillaDeBebe){
    let costoTipoDeAuto = valorTipoDeVehiculo(tipoDeAuto);
    let costoSillaDeBebe = valorSillaDeBebe(sillaDeBebe);
    return (costoTipoDeAuto + costoSillaDeBebe) * diasDeUso;
}

function mensajeAlquiler(tipoDeAuto, diasDeUso, sillaDeBebe, funcionCostoDeAlquiler){
    let costoDeAlquilar = funcionCostoDeAlquiler(tipoDeAuto,diasDeUso,sillaDeBebe);
    console.log("Estimado cliente: en base al tipo de vehiculo " + tipoDeAuto + " alquilado, considerando los " + diasDeUso + " dias utilizados, el monto total a pagar es de: " + costoDeAlquilar);
}

mensajeAlquiler("compacto", 3, "no", alquilarVehiculo);
