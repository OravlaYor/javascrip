// for each
// al contrario de los demas este no va crea un nuevo array , simplemente va hacer el filtrado sobre el array sin modificarlo y regresara cosas 

var articulos = [
    {nombre:"bici" ,costo:700},
    {nombre:"tv" ,costo:2000},
    {nombre:"mouse" ,costo:100},
    {nombre:"teclado" ,costo:700},
    {nombre:"celular" ,costo:5400},
    {nombre:"audifono" ,costo:4300},
    {nombre:"laptop" ,costo:2000}
];

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
})

/// nos devolvera todos los articulos que tiene el  array pero solo los nombres