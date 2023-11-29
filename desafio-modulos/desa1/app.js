let peliculas = require("./peliculas");

for (let i = 0; i < peliculas.length; i++){
    console.log("la pelicula: " + peliculas[i].nombre);
    console.log("dura " + peliculas[i].length + " y es del genero de " + peliculas[i].genere);
}
