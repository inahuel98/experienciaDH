//callback con una funcion anonima
setTimeout(function(){console.log("hola mundo");}, 100)

//callback con una funcion prev definida
let miCallback = () => console.log("hola mundo largo");

setTimeout(miCallback, 1000);
//note que una funcion callback ira en el parametro sin (), para evitar que se ejecute, ya que la funcion que la recibe es la que se encarga de ejecutarla


function nombreCompleto(nombre, apellido){
    return nombre + " " + apellido;
}
function saludar(nombre, apellido, callback){
    return "Hola " + callback(nombre, apellido) + "!";
}

console.log(saludar("Inti", "Quispe", nombreCompleto));

function iniciales(nombre, apellido){
    return nombre[0] + apellido[0];
}

console.log(saludar("Inti", "QUispe", iniciales));