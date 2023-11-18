let graduadosHtml = "30 45 25 34 18 23 16 50 72 70";
let graduadosCss3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJavascript = "70 65 58 45 23 57 34 17 72";
let graduadosNodeJs = "45 56 73 34 65 72 70 32";

graduadosHtml = graduadosHtml.split(" ");
graduadosCss3 = graduadosCss3.split(" ");
graduadosJavascript = graduadosJavascript.split(" ");
graduadosNodeJs = graduadosNodeJs.split(" ");

function promedio(array){
    let cantidadGraduados = array.length;
    let sumaPuntos = 0;
    for (let i = 0; i < array.length; i++){
        sumaPuntos += parseInt(array[i]);;
    }
    return sumaPuntos / cantidadGraduados;
}

function promedioGraduados(grad1, grad2, grad3, grad4, gradElegido){
    
    switch(gradElegido){
        case 1:
            return promedio(grad1);
        case 2:
            return promedio(grad2);
        case 3:
            return promedio(grad3);
        case 4:
            return promedio(grad4);
        default:
            "Grupo de graduados no encontrado (1-4)";
    }
}
console.log("el promedio de graduados es: " + promedioGraduados(graduadosHtml, graduadosCss3, graduadosJavascript, graduadosNodeJs, 1));

