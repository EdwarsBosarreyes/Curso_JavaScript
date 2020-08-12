'use strict'

window.addEventListener('load', () => {
    function cambiarColor() {
        console.log("Color Cambiado");

        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";

        } else {
            boton.style.background = "green";
        }

        boton.style.padding = "10px";
        boton.style.border = "1px solid #ccc"
        return true;
    }

    var boton = document.querySelector("#boton");

    //Click
    boton.addEventListener('click', function() {
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });

    //Mouse over
    boton.addEventListener('mouseover', () => {
        boton.style.background = "#ffff";
    });

    //Mouse Out
    boton.addEventListener('mouseout', () => {
        boton.style.background = "yellow";
    })

    //Focus
    var input = document.querySelector('#nombre');
    input.addEventListener('focus', () => {
        console.log("Estas dentro del input");
    });
    //Blur
    input.addEventListener('blur', () => {
        console.log("Estas fuera del input");
    });
    //Keydown
    input.addEventListener('keydown', (event) => {
        console.log("Esta pulsando la tecla ", String.fromCharCode(event.keyCode));
    });
    //Keypress
    input.addEventListener('keypress', (event) => {
        console.log("Tecla presionada", String.fromCharCode(event.keyCode));
    });

    //Keyup
    input.addEventListener('keyup', (event) => {
        console.log("Tecla soltada", String.fromCharCode(event.keyCode));
    });

});