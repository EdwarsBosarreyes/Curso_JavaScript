'use strict'

window.addEventListener('load', () => {
    console.log("DOM cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    formulario.addEventListener('submit', () => {

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad  = document.querySelector("#edad").value;

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es válido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
        }

        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Apellidos no son válido");
            return false;
        }

        if(edad.trim() == null || edad.trim().length == 0 || isNaN(edad) || edad.trim() <= 1){
            alert("No es un número válido");
            return false;
        }

        box_dashed.style.display = "block";

        // var datosUsuario =  [nombre, apellidos, edad];

        // for (const indice in datosUsuario) {
        //     if (datosUsuario.hasOwnProperty(indice)) {
        //         var parrafo = document.createElement("p");
        //         parrafo.append(datosUsuario[indice]); 
        //         box_dashed.append(parrafo);    
        //     }
        // }
        
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

    });
});