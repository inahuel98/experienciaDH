/*Instrucciones
 1. Crear un nuevo archivo (app.js). En este, deberás importar el módulo creado
 (collectibles.js).

 2. Crear una variable por cada una de las marcas, invocando a la función
 (importar) y pasarle como argumento cada una de las marcas de las figuras
 coleccionables (hotToys - bandai - starWars).

 3. Crear un único array (unifiedCollectibles) con todas las listas delasmarcasde
 las figuras coleccionables. Usa Spread Operator.

 4. Crearunobjetoliteral (collectibles) que tenga comoprimeratributo (figuras) y
 contenga la lista de todas las figuras importadas.

 5. Dentro delobjeto literal, crea las funcionalidades solicitadas por el cliente:
 a. Desarrollar la funcionalidad (listFigures). Tendrá la responsabilidad de
 mostrar al usuario todos los datos de las diferentes figuras almacenadas.
 Puedes utilizar los métodos forEach()o for…of().

 b. Crear una funcionalidad (figuresByBrand) que reciba por parámetro la
 marca de la figura. Tendrá la responsabilidad de retornar todas aquellas
 figuras que correspondan a la marca recibida por parámetro. Deberíamos
 utilizar el método filter.

 c. Comprobar las funcionalidades usando el console.log() e invocando a cada
 una de ellas pasando los referidos parámetros.*/

let collectibles = require("../desa1/collectibles");

let hotToys = collectibles("figuras1.json");
let bandai = collectibles("figuras2.json");
let starWars = collectibles("figuras3.json");
let unifiedCollectibles = [...hotToys, ...bandai, ...starWars]


let collectiblesObs = {
    figuras : unifiedCollectibles.map(figus => figus.nombre),
    listFigures : function(){
        unifiedCollectibles.forEach(listado => console.log("La figura " + listado.nombre + " cuesta $" + listado.precio + " en stock hay " + listado.stock));
    },
    figuresByBrand : function(marca){
        return unifiedCollectibles.filter(listado => listado.marca == marca);
    }
}

console.log(collectiblesObs.figuras);
collectiblesObs.listFigures();
console.log(collectiblesObs.figuresByBrand("Bandai"));