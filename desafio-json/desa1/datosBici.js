const fs = require("fs");
const bicis = fs.readFileSync("bicicletas.json", "utf-8");

const bicisArray = JSON.parse(bicis);


console.log(bicisArray);
module.exports = bicisArray;