function convertirAMayuscula(palabra){
    return palabra.toUpperCase();
}

function tipoDeDato(dato){
    return typeof dato;
}

function calcularEdad(edad){
    const edadEnPerros = 7;
    return edad * edadEnPerros;
}

function calcularValorDeTrabajo(salarioMensual, diasTrabajados, horasTrabajadas){
    let horasEnElMes = diasTrabajados * horasTrabajadas
    return salarioMensual / horasEnElMes;
}

console.log(convertirAMayuscula("hola soy miNuscula"));
console.log(tipoDeDato(2));
console.log(calcularEdad(6));
console.log(calcularValorDeTrabajo(23000, 20, 8));