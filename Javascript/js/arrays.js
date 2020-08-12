'use strict'

// Arrays, Arreglos, Matrices

var nombres = ["Victor", "Julio", "Manolo", "Luis", 53, true];

var lenguajes = new Array("PHP", "JS", "GO", "Java", "C++", "C#", "Cobol");

// console.log(nombres);
// console.log(nombres[0]);
console.log(nombres.length);

// var elemento = parseInt(prompt("Que elemento del array quieres??", 0 ));

// if(elemento >= nombres.length){
//     alert("Elemento No Existe!, debe ser un número menor que "+ nombres.length);
// }else{
//     alert(nombres[elemento]);

// }
 
/*
document.write("<h1>Lenguajes de Progrmación del 2018</h1>");
document.write("<ul>");
for(var i=0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");
*/

// lenguajes.forEach((elemento, indice, data)=>{
//     document.write("<li>"+(indice+1)+" "+elemento+"</li>"); 
// });

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

