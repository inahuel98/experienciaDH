let electrodomesticos = ["pava",
    "termo",
    "microondas",
    "anafe",
    "horno",
    "licuadora",
    "batidora",
    "tostadora",
    "cafetera",
    "freidora"];

electrodomesticos[2];
electrodomesticos[7];
electrodomesticos[9];
electrodomesticos[0];
electrodomesticos[-3];

console.log(electrodomesticos);
let ultimoElemento = electrodomesticos.pop();
console.log(electrodomesticos);
electrodomesticos.unshift(ultimoElemento);
console.log(electrodomesticos);
electrodomesticos.push("waflera");
electrodomesticos.push("picadora");
console.log(electrodomesticos);
console.log(electrodomesticos.length);

function buscador(array, elemento){
    if (array.includes(elemento)){
        console.log("Producto encontrado");
    }else {
        console.log("El producto buscado no existe");
    }
}
buscador(electrodomesticos, "waflera");

let arrayACadena = electrodomesticos.join(" ");
console.log(arrayACadena);
console.log(arrayACadena.length);
arrayACadena = arrayACadena.replace("waflera", "mixer");
console.log(arrayACadena);

console.log(arrayACadena.split(" "));





