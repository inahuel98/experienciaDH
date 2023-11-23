let cursosPrecio = [["html", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]];

let cursosDelAlumno = ["NODEJS", "HTML", "CSS3"]; //elijo que curso quiere tomar el alumno

function calcularPago(arraycursos, cursosAlumno){
    let montoAPagar = 0;
    for (let i = 0; i < cursosAlumno.length; i++){
        for (let j = 0; j < arraycursos.length; j++){
            if (cursosAlumno[i] == arraycursos[j][0].toUpperCase()){
                montoAPagar += arraycursos[j][1];
            }
        }
    }
    return montoAPagar;
}
let monto = calcularPago(cursosPrecio, cursosDelAlumno);
let nombre = "Pepito";
let apellido = "Micho";
console.log("Estimado " + nombre + " " + apellido + ". en funcion de los cursos seleccionados: ");
console.log(cursosDelAlumno + " El monto total a pagar es de : $" + monto);
