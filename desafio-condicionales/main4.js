let operador = "*";
let num1 = 2;
let num2 = 3;
let resultado;

switch(operador){
    case "+":
        resultado = num1 + num2;
        console.log("El Resultado de sumar " + num1 + " + " + num2 + " es " + resultado);
        break;
    case "-":
        resultado = num1 - num2;
        console.log("El Resultado de restar " + num1 + " - " + num2 + " es " + resultado);
        break;
    case "/":
        resultado = num1 / num2;
        console.log("El Resultado de dividir " + num1 + " / " + num2 + " es " + resultado);
        break;
    case "*":
        resultado = num1 * num2;
        console.log("El Resultado de multiplicar " + num1 + " * " + num2 + " es " + resultado);
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar, restar, dividir, multiplicar");
}