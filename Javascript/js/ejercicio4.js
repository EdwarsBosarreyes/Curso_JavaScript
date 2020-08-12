'use strict'

/*
Mostrar todos los números impares 
que esten entre dos números introducidos por el teclado
*/

var num1 = parseInt(prompt("Introduce el primer número", 0));
var num2 = parseInt(prompt("Introduce el primer número", 0));

while(num1 < num2){
    num1++;

    if(num1%2 != 0){
        console.log("El "+num1+ " es impar");
    }
}

