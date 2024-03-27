/// for i 
///convencional , gran parte de este tema lo tocas en java normal , pero basicamente ese funciona para generar un loop pero condicionado a que el valor de i sea menor que el array
/// aqui es condicionado a darle un valor inical para que este se ejecute hsta acabar
var estudiantes = ["maria","mario","manuel","manolo"];
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
    
}
for (let i = 0; i < estudiantes.length;i++) {
        saludarEstudiantes(estudiantes[i]);
}
///////////for of
// en este caso el for of es diferente ya que en este caso usa el parametro en singular, ese singular sera reconocido como el 0 en el array que manejas , entonces manda a llamar la funcion

///tenemos que inicializar una variable en singular de nuestro array en plural mientras sigua existiendo elementos en el array este se seguira ejecutando
var estudiantes = ["maria","mario","manuel","manolo"];
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
    
}
for (let estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}
