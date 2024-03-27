// map 
// el map nos ayudara mapear , generara un nuevo array pero no afectara al inicial
// usado para mapear o dar a todos  a conocer todos los articulos como en el ejemplo ubicar a todos los nombres
var articulos = [
    {nombre:"bici" ,costo:700},
    {nombre:"tv" ,costo:2000},
    {nombre:"mouse" ,costo:100},
    {nombre:"teclado" ,costo:700},
    {nombre:"celular" ,costo:5400},
    {nombre:"audifono" ,costo:4300},
    {nombre:"laptop" ,costo:2000}
];
///
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre
});
//
nombreArticulos

(7) ['bici', 'tv', 'mouse', 'teclado', 'celular', 'audifono', 'laptop']
