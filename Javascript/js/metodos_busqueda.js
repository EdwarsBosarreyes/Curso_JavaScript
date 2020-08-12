'use strict'

var numero = 444;
var texto1 = "Bienvenido al curso de Javascript, el mejor curso";
var texto2 = "es muy buen curso";

//var busqueda = texto1.indexOf("curso");
//var busqueda = texto1.lastIndexOf("curso");
// //var busqueda = texto1.search("curso");
// var busqueda = texto1.match("curso");
//var busqueda = texto1.match(/curso/g);
//var busqueda = texto1.substr(14,5);
//var busqueda = texto1.charAt(44);
//var busqueda = texto1.startsWith("Bi");
var busqueda = texto1.includes("curso");
console.log(busqueda);