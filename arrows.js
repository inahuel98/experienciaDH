let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + " : " + fecha.getMinutes() + " : " + fecha.getSeconds();
}

console.log(horaActual());

let saludo = () => console.log(("Holaaa"));

let dobleDe = numero => numero * 2;

let suma = (numA, numB) => numA + numB;

