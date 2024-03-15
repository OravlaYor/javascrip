/*coersion parte parctica de lo que indicaron al inicio sobre que el elguaje de javascrip es debilmente tipado es decir que en una suma de*/

var a = 2+"4"
"24"
typeof a = "string"
// este sera 24 pero en string osea una palabra solo lo unio y no genero mas solo los unio es una forma de explciar que javaS asume lo que tratas de hacer este bien o mal 
/*Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción: Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor. Coerción explicita = es cuando obligamos a que cambie el tipo de valor.*/

pero como obligar a un numero a ser un string, de esta manera

var a= 20;
var b = a + "";
console.log(b);
20 // respuesta en navegador
typeof b;
"string"
var c= String(a); // con esta form obligamos a la var a que es 20 pasar de ser un numero a un string esto es ejemplo de coersion explisita
console.log(c);
20 /// respuesta en navegador