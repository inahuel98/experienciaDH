let fs = require("fs");
let path = require("path");
function importar(figuras){
    let rutaDelArchivo = path.join(__dirname, "datos", figuras)
    let archivoJSON = fs.readFileSync(rutaDelArchivo, "utf-8");
    return JSON.parse(archivoJSON);
}

module.exports = importar;