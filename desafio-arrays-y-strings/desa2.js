let movies = ["Turno de dia", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverich", "Elvis", "Thor: amor y trueno"];

function aMayuscula(pelicula){
    return pelicula.toUpperCase();
}
let peliculaTop = movies.pop();
console.log(peliculaTop);
movies.unshift(aMayuscula(peliculaTop));
console.log(movies);

let stringMovies = "Counter-Strike NOP Vertigo Nick Avatar";

let arrayNewMovies = stringMovies.split(" ");
arrayNewMovies.shift();
console.log(arrayNewMovies);

function unirArrays(array1, array2){
    return array1.concat(array2);
}

console.log(unirArrays(movies, arrayNewMovies));