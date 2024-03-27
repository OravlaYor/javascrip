var frutas = ["platano","manzana","cereza"];

console.log(frutas);

//usar el .lentgth nos ayuda a dar la cantidad de cosas que guarda el array

console.log(frutas.length);

///el .push nos ayuda a agregar algo mas a tu array , pero este se pondra en la ultima posicion
var masFrutas = frutas.push("carambola");

////////en .pop nos ayudara a eliminar algo mandando claro el nombre como se ve ahora y asi mismo eliminara el ultimo  elemento
var  menosFrutas = frutas.pop("carambola");
//// el .unshift es una herramienta que te ayuda agregar , lo mismo que el .push ,pero en este caso lo agregara al inicio
var nuevaLFrutas = frutas.unshift("pera");
////este borrara el primero que se encuentre en el arrray
var borrarFruta = frutas.shift("platano")
///la terminacion .indexOf nos ayuda a encontrar la posicion de  algo en nuestro array , es asi como podemos usarlo
var posicion = frutas.indexOf("platano")
