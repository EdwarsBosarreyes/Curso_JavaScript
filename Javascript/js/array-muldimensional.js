'use strict'

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran Torino'];

peliculas.sort(); // Ordenar array por orden alfabetico

peliculas.reverse();  //Ordenar inversamente

console.log(peliculas);


var cine = [ categorias, peliculas];

// console.log(cine[0][0]);

/*do{
    var elemento = prompt("Introduce tu pelicula");
    peliculas.push(elemento); // Agregar al final
}
while(elemento != "Terminar");

peliculas.pop(); */ // Eliminar elemento del final


//Eliminar elemento
var indice = peliculas.indexOf('Gran Torino');
if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join(); //Convertir un array a string separado por coma
var cadena = "Esta es un cadena convertida a array";

var cadena_array = cadena.split(" ");

console.log(cadena_array);

//console.log(peliculas);

