'use strict'

var lenguajes = new Array("PHP", "JS", "GO", "Java", "C++", "C#", "Cobol");
var precios = [10, 20, 50, 80, 12];
//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP"); //Función de flecha
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP"); //Encontrar el indice

var busqueda = precios.some(precio => precio >= 80);


console.log(busqueda);