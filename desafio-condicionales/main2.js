let pagoMes = 1200;
let consumoKWH = 210;

if (consumoKWH > 300){
    pagoMes += (pagoMes * 0.2);
}

console.log("Debido a que su hogar tuvo un consumo de "+consumoKWH+"kwh, en base al ajuste tarifario hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $"+pagoMes);