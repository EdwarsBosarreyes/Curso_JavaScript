'use strict'

//Funciones Anonimas
//Es una función que no tiene nombre 
//y se puede guardar dentro de una variable

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

//Función de Callback
//Es una función anonima que no tiene ningun nombre
//y que se le pasa como parametro a otra función
//Al final es le pasamos como parametro una función a otra función
//y esa propia función dentro de ella, ejecuta la función anonima pasada.

// sumame(5, 7, function(dato){
//     console.log("La suma es: ", dato);
// },
// function(dato){
//     console.log("la suma por dos es:", (dato*2));
// });

//Función de Flecha 
sumame(5, 7, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("la suma por dos es:", (dato*2));
});