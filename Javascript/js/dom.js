'use strict'

//DOM - Document Object Model
function cambiaColor(color){
    caja.style.background = color;
}

//Conseguir elementos con un id concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja")

caja.innerHTML = "Cambio de Texto";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";


//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

//var contenidoEnTexto = todosLosDivs[2].textContent; // Lo mismo que innerHTML pero innerHTML permite asignar un nuevo valor
// var contenidoEnTexto = todosLosDivs[2];
// contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
// contenidoEnTexto.style.background = "blue"
//todosLosDivs.forEach(element => {
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
seccion.append(hr);
var valor;
 for(valor in todosLosDivs){   
     if(typeof todosLosDivs[valor].textContent == "string"){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
     }
    
}

seccion.append(hr);
//});



//Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName("rojo");
var divsAmarillos = document.getElementsByClassName("amarillo");
divsAmarillos[0].style.background = "yellow";

for (const div in divsRojos) {
    if (divsRojos.hasOwnProperty(div)) {
        divsRojos[div].style.background = "red";
        
    }
}

//Query selector

var id = document.querySelector("#encabezado");

console.log(id);

var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);