const autosImportados = require("./autos");
let concesionaria = {
    autos: autosImportados,
    buscarAuto: function (patenteBuscada) {
        for (let i = 0; i < this.autos.length; i++) {
            if (patenteBuscada == this.autos[i].patente) {
                return this.autos[i];
            }
        }
        return null;
    },
    venderAuto: function (patenteBuscada) {
        const autoEncontrado = this.buscarAuto(patenteBuscada);
        if (autoEncontrado) {
            autoEncontrado.vendido = true;
        }
    },
    autosParaLaVenta: function () {
        return this.autos.filter(autos => autos.vendido != true);
    },
    autosNuevos: function () {
        let autosDisponibles = this.autosParaLaVenta();
        return autosDisponibles.filter(autos => autos.km < 100);
    },
    listaDeVentas: function () {
        return this.autos.filter(autos => autos.vendido == true).map(autos => autos.precio);
    },
    totalDeVentas: function () {
        let listaVendidos = this.listaDeVentas();
        return listaVendidos.reduce((acumulador, elemento) => acumulador + elemento, 0);
    },
    puedeComprar: function (auto, persona) {
        return auto.precio < persona.capacidadDePagoTotal && auto.precio / auto.cuotas < persona.capacidadDePagoEnCuotas;
    },
    autosQuePuedeComprar: function (persona) {
        let autosDisponibles = this.autosParaLaVenta();
        return autosDisponibles.filter(auto => this.puedeComprar(auto, persona));
    }
};

console.log(concesionaria);