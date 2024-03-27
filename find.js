// el find
// este recorrido se usa para encontar algo especifico  y nos da toda la informacion de lo que estabamos buscando
var articulos = [
    {nombre:"bici" ,costo:700},
    {nombre:"tv" ,costo:2000},
    {nombre:"mouse" ,costo:100},
    {nombre:"teclado" ,costo:700},
    {nombre:"celular" ,costo:5400},
    {nombre:"audifono" ,costo:4300},
    {nombre:"laptop" ,costo:2000}
];
var buscarArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "bici"
    
});
 buscarArticulo
/// nos debe de dar esto
 
//{nombre: 'bici', costo: 700}
