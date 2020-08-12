'use strict'

/*Utilizando un bucle mostrar la  media y 
la suma de los datos introducidos por 
el usuario, hasta que ingrese un número negativo
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt('Introduce numeros hasta que ingreses uno negativo', 0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma += numero;
        contador++;
    }
}while(numero >= 0)

alert("La suma de todos los numero es: "+suma);
alert("La media de todos los numero es: "+ (suma/contador));