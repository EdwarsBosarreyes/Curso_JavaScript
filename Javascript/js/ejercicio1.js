'use strict'

/*
Programa que nos pida dos numeros, y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los números no son un número o son menores o iguales a 0, nos vuelva pedir introducir los datos.
*/

var num1 = parseInt(prompt("Ingresa el primer Número", 0));
var num2 = parseInt(prompt("Ingresa el segundo  Número", 0));


while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2) ){
    num1 = parseInt(prompt("Ingresa el primer Número", 0));
    num2 = parseInt(prompt("Ingresa el segundo  Número", 0));
}
if(num1 == num2){
    alert("Los números son iguales");
}else if(num1 > num2){
    alert("El número mayor es " +  num1);
    alert("El número menor es " +  num2);
}else if (num1 < num2){
    alert("El número mayor es " +  num2);
    alert("El número menor es " +  num1);
}else {
    alert("Introduce números correctos"); 
}

