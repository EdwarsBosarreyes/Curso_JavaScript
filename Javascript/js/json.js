'use strict'

//JSON - JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vd Superman',
    year: 2017,
    pais: 'USA'
};

var peliculas = [
    {
        titulo: "Los Simpson",
        year: 2015,
        pais: "USA"
    },

    {
        titulo: "Deadpol",
        year: 2016,
        pais: "USA" 
    },

    {
        titulo: "Godinez Contra Mirreyes",
        year: 2018,
        pais: "México"
    },

    {
        titulo: "Soy de Zacapa",
        year: 2011,
        pais: "Guatemala"
    },

    pelicula
]

var caja_peliculas = document.querySelector("#peliculas");

for (let index in peliculas) {
    if (peliculas.hasOwnProperty(index)) {
        var p = document.createElement("p");
        p.append(peliculas[index].titulo + " - " + peliculas[index].year);
        caja_peliculas.append(p);
    }
}

console.log(peliculas);

