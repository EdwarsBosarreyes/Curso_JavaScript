'use strict';

//Fetch (ajax) y peticiones a servicios / APIs Rest
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_morty = document.querySelector("#morty");

    getUsuarios()
        .then(data => data.json()) //Capturar los datos y convertirlos a JSON
        .then(users => { //Guardar data en la variable usuarios
            listadoUsuarios(users.results);

            return getInfo();
        })
        .then(data => {
            div_profesor.innerHTML = data;
            return getMorty();
        })
        .then(data => data.json())
        .then(user => {
            mostrarMorty(user);
        })
        .catch(error => {
            console.error(error);
        });

function getUsuarios(){
    return fetch('https://rickandmortyapi.com/api/character')
}

function getMorty(){
    return fetch('https://rickandmortyapi.com/api/character/234')
}

function getInfo(){
    var profesor = {
        nombre: 'Victor Robles',
        url:  'http://victorrobles.es'
    }
    //Nueva promesa desde 0
    return new Promise((resolve, reject) => {
        var profesor_string = "";
        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string == '')return reject('error 1');

            return resolve(profesor_string);
        }, 3000);
        
        
    });
    
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) =>{
        let nombre = document.createElement('h3');

        nombre.innerHTML = (i+1) +" "+ user.name;
        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    });
}

function mostrarMorty(user){
   
    let nombre = document.createElement('h4');
    let img = document.createElement('img');

    nombre.innerHTML = user.name;
    img.src = user.image;
    img.width =  '100';

    div_morty.appendChild(nombre);
    div_morty.appendChild(img);

    document.querySelector("#morty .loading").style.display = "none";
   
}
