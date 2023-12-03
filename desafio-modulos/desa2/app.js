const fs = require("fs")
let leer = fs.readFileSync("./mensaje.txt", "utf-8")
console.log(leer);
