// metodo some 
// regresara  validaciones de verdadero o falso para articulos que  cumplan esa validacion
// en pocas palabras este metodo nos dira si hay o no hay cosas baratas, por que la respuesta es si o no 

var articulos = [
    {nombre:"bici" ,costo:700},
    {nombre:"tv" ,costo:2000},
    {nombre:"mouse" ,costo:100},
    {nombre:"teclado" ,costo:700},
    {nombre:"celular" ,costo:5400},
    {nombre:"audifono" ,costo:4300},
    {nombre:"laptop" ,costo:2000}
];

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700
});

articulosBaratos
// nos devolera true o false segun corresponda
// true