var piedra = "piedra";
var tijera = "tijera";
var papel = "papel";

function Iniciar(yo,pc) {
    switch (true) {
        case yo === papel && pc === piedra || yo === tijera && pc === papel || yo === piedra && pc === tijera:
            console.log("yo gano");
            break;
        case yo === pc:
            console.log("empatamos");
            break
    
        default:
            console.log("gano pc")
            break;
    }
}

Iniciar(papel,tijera)