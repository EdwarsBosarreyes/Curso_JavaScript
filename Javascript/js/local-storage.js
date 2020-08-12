'use strict'

//Localstorage

//Comprobar disponibilidad del localstorage
if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con localstorage");
}

//Guarda datos
localStorage.setItem("titulo", "Curso de JS");

//Recuperar elemento
console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guarda objetos
var usuario = {
    nombre: "Edwars Wilfrido",
    email: "bosaed07@gmail.com",
    web: "ebosarreyes.net"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objeto

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);

document.querySelector("#datos").append(" "+userjs.web + " - "+ userjs.nombre)

//Borrar un item del localstorage
localStorage.removeItem("usuario");

//Vaciar el localstorage
localStorage.clear();