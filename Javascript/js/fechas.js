'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = (fecha.getMonth()+1);
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();

var textoHora = `
    El year es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
    La hora es: ${hora}
    Con ${minutos} minutos
`;  

console.log(textoHora);
console.log(Math.ceil(Math.random()*1000));