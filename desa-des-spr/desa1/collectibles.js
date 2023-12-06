let fs = require("fs");
function importar(figuras){
    let archivoJSON = fs.readFileSync("./datos/" + figuras, "utf-8");
    return JSON.parse(archivoJSON);
}

module.exports = importar;