function paresYPositivos(arrayDeNumerosPositivos){
    let arrayNumerosPares = [];
    for (let i = 0; i < arrayDeNumerosPositivos.length; i++){
        if (arrayDeNumerosPositivos[i] % 2 == 0){
            arrayNumerosPares.push(arrayDeNumerosPositivos[i]);
        }
    }
    return arrayNumerosPares;
}

console.log(paresYPositivos([1,3,2,6,4,3,6,2,4]));