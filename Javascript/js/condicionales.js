'use strict'

//Condicional if
//Si A es <condicion> a B entonces haz algo

var edad = 34;
var nombre = 'David Suarez';

/* Operadores Relacionales
Mayor >
Menor >
Mayor o igual >=
Menor o igual <=
Igual ==
Distinto !=
*/

if(edad >= 18){
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");

    if(edad <= 33){
        console.log("Todavía eres milenial");
    }else if(edad >= 70){
        console.log("Eres Anciano");
    }else{
        console.log('Ya no eres milenial');
    }
}else{
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

/*Operadores lógicos
AND (Y) -> &&
OR (O) -> ||
Negación -> !
*/
 var year = 2018;
if( year != 2016 ){
    console.log("El año no es 2016, realmente es "+ year);
}

//AND

if(year >= 2000 && year <= 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era postmoderna");
}

//OR
if(year == 2008 || year == 2018){
    console.log("El año termina en 8");
}

//Podemos utilizar parentesis para dar prioridad entre una condición y otras

if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año termina en 8");
}else{
    console.log("Año no registrado");
}
