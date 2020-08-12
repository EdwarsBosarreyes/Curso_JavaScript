'use strict'

//Transformación de textos

var numero = 444;
var texto1 = "Bienvenido al curso de Javascript de Victor Robles";
var texto2 = "Es muy buen curso";


var numero_convertido = numero.toString();
var mayusculas = texto2.toUpperCase();
var minusculas = texto1.toLowerCase();

console.log(typeof numero_convertido);
console.log(mayusculas);
console.log(minusculas);

//Calcular longitud
var nombre = "Edwars";
    nombre = ["hoa", "hola"];
console.log(nombre.length);

//Concatenar
var texto_unido = texto1.concat(" "+texto2);
//var texto_unido = texto1 +" "+ texto2;
console.log(texto_unido);