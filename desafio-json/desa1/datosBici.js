const fs = require("fs");
let bicis = fs.readFileSync("./bicicletas.json", "utf-8");

let bicisArray = JSON.parse(bicis);
console.log(bicisArray);