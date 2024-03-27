// el constructor nos ayuda en generar una forma mas eficiente de crear nuevos objetos sin la necesidad de generar toda una sintaxis nueva
function auto(marca,modelo,annio) {
    this.marca = marca;
    this.modelo= modelo;
    this.annio= annio;
    }
    // esta seria una forma simple de crearla , pero en tal caso de olvidar y querer crear algo nuevo aparte de eso podemos usar el new
    var nuevoAuto = new auto("tesla","model 3","2020");
    // en este caso estamos agregando nuevas cosas  en el objeto en este caso es  el modelo y annio 