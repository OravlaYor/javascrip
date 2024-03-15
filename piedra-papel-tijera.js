var ppt1 = "piedra";
var ppt2 = "papel";
var ppt3 = "tijera";

var res = function (yo,pc) {
    if(yo!= pc){
        if(yo=== ppt1&& pc === ppt3){
            console.log("ganaste")
        }else if(yo == ppt2 && pc == ppt1){
            console.log("ganaste")
        }else if (yo ==ppt3 && pc == ppt2){
            console.log("ganaste")
        }else{
            console.log("gano la pc")
        }
    }else if(yo === pc){
        console.log("empate")
    }
};
 


