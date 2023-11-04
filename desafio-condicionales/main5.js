let velocidad = 273;
let altura = 223;
let velocidadCorrecta = 268 <= velocidad && velocidad <= 278;
let alturaCorrecta = 150 <= altura && altura <= 300;
if (velocidadCorrecta && alturaCorrecta){
    console.log("El avion tiene permiso de aterrizaje");
}else{
    console.log("El avion no puede aterrizar");
}
console.log(velocidadCorrecta);
console.log(alturaCorrecta);