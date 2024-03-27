//Metodos de racorrido de arrays
// este metodo  nos ayudara a  generar un nuevo array pero no modificara al principal solo generara uno con la condicion que le das , en este caso articulos menores o iguales a 500
// usado para filtrar cosas especifica 

var articulos = [
    {nombre:"bici" ,costo:700},
    {nombre:"tv" ,costo:2000},
    {nombre:"mouse" ,costo:100},
    {nombre:"teclado" ,costo:700},
    {nombre:"celular" ,costo:5400},
    {nombre:"audifono" ,costo:4300},
    {nombre:"laptop" ,costo:2000}
];

var articulosFiltrados=articulos.filter(function(articulo) {
    return articulo.costo <= 500
});

/// nos dara en navegador 
/*[{…}]
0
: 
costo
: 
100
nombre
: 
"mouse"
[[Prototype]]
: 
Object
length
: 
1*/