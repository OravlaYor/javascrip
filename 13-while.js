///en este caso la funcion del while es generar un loop , pero que esta condicionado a el shift , que en este caso trabajara quitanto elementos del arrray hasta dejarlo vacio
var estudiantes = ["maria","rosa","daniela","matias"];
function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`)
}
while (estudiantes.length >0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
/* metafora: Ambos ciclos se ocupan el for y el while. Con for podemos definir un fin de intentos y con el while mientras se cumpla que lo siga haciendo. 
Es como decir en while sería, seguir cocinando el pollo mientras siga crudo, realmente no sabemos cuando estará cocinado. Si usáramos for podría quedarnos crudo o muy quemado, 
a menos que fueras un super experto.*/

//////////////////////////////

///codigo play graund
/* En este desafío tu función solution recibirá 3 parámetros:

estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos del array estudiantes pero eliminando la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.*/

export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) { 
      estudiantes.pop;
      deathCount--;
    }
    estudiantes.push(nuevo);
  }
  return estudiantes;
  
  solution(["Nico", "Zule"], 0, "Santi")
  
  //////////o 
  export function solution(estudiantes, deathCount, nuevo) {
    for (deathCount; deathCount > 0; deathCount--) {
      estudiantes.pop();
    }
    estudiantes.push(nuevo);
    return estudiantes;
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
  //es un for i