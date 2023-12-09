let numeros = [3, 1, 12, 34, 13, 53, 21, 66, 99, 76];
let [a,,b,,c,...rest] = numeros;
console.log(a, b, c, rest);

let mascota = {
    nombre : "Pepe",
    tipo : "Gato",
    color : "negro",
    raza : "normal"
};



let {nombre, tipo, color, raza } = mascota;
console.log("hola les presento a mi mascota su nombre es: " + nombre + ", es un hermoso " + tipo + ", de color: " + color + " y su raza es: " + raza );
