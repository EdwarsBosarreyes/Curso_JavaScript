'use strict'

/*
Programa que nos diga si un nuúmero es par o impar
1. Ventana propmt
2. Si no es valido, volver a pedir numero
3. Mostrar si el número es par o impar
*/

var number = prompt("Introduce un número", 0);

while(isNaN(number)){
    number = prompt("Introduce un número", 0);
}

if(number % 2 == 0){
    alert("Es un número par");
}else{
    alert("Es impar");
}

