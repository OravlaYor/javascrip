/* parte de lo que es el scope no es complicado de entender , pero debes saber que el scope es el alcanze que se tiene para llamar a alguna cosa o en este caso
llamar a una variable , es decir que si te conocen en tu casa y todos te llaman y tu vas por que te conocen y tu los conoces , vas , pero si no conoces y no sabes quien es tu no vas
es similar*/
var miNombre = "matt";

function nombre() {
    var apellido = "lucker";

        console.log(miNombre+" "+apellido);
}
nombre();
/* en esta parte te das cuenta que var esta en forma global es decir esta afuera disponible para todos y si tu lo llamas con algun comando esa aparece
pero al contrario esta apellido , en esa parte apellido pertenece a su casa que es la funcion nombre , es decir afuera ni lo topan , asi que si lo llaman ni caso
es por eso que para poder llamarlos a los 2 tienes que ir a su casa osea a la funcion*/
