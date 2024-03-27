var listaDeAutos = [];

function Auto(MARCA, MODELO, ANNIO) {
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

function agregarAuto(MARCA, MODELO, ANNIO) {
    var nuevoAuto = new Auto(MARCA, MODELO, ANNIO);
    listaDeAutos.push(nuevoAuto);
}

// Ejemplo de uso:
var marca = prompt("Ingresa la marca del auto:");
var modelo = prompt("Ingresa el modelo del auto:");
var annio = prompt("Ingresa el año del auto:");

agregarAuto(marca, modelo, annio);

console.log(listaDeAutos);