'use strict'

/*
1. Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos en el cuerpo de la página y en la consola)
3. Ordenarlo y Mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, y que nos diga si lo encuentra y su indice
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
        document.write("<strong>"+elemento+"</strong><br>");
    });
    document.write("</ul>")
}

//var numeros = new Array(6);
var numeros = [];
//Pedir los números 
for(var i=0; i <= 5; i ++){
    // numeros[i] = parseInt(prompt("Introduce un número", 0));
    numeros.push(parseInt(prompt("Introduce un número", 0)));
}


//Mostrar Array en el cuerpo de la página
mostrarArray(numeros);
//Mostrar array por consola
console.log(numeros);

//Ordenar y mostrar
numeros.sort(function(a,b){return a-b}); //orden numerico ascendente
mostrarArray(numeros, "Ordenado")

//invertir y mostrar
numeros.reverse()
mostrarArray(numeros, "Revertido");

//Contar indices
document.write("<h1>El array tiene :"+ numeros.length+"</h1>");

//Búsqueda
var busqueda = parseInt(prompt("Busca un número", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<hr><h1>Encontrado</h1>");
    document.write("<h1>Posición de la búsqueda: "+ posicion+"</h1>");
}else{
    document.write("<hr><h1>No Encontrado</h1>");
}