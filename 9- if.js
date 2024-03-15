var edad = 18;
if (edad == 18){
    console.log("ya puede votar");
}else if(edad > 18){
    console.log("tienes que votar");
}else {
    console.log("no puedes votar ");
}
//////operadores ternarios 

condition ? true : false;

//// lo de arriba es la como debe ir o mas que todo la estructura de como es que se genera un operdor ternario se usa para dar solo 2 respuestas 
// es casi similar a los if else
//ejemplo
var numero =1;
var res = numero == 1 ? "simon, soy un uno ": " nola socio, no soy un uno"
//> esto nos dederia dar 
"simon soy un uno "
//por que el numero declarado en la variable  es 1  si fuera otro saldria que no lo es.
