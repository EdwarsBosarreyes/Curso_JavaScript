'use strict'

window.addEventListener('load', ()=>{
    
    //Timers
    //setInterval se ejecuta cada cierto tiempo
    function intervalo(){
        var tiempo = setInterval(()=>{
            console.log("Set interval ejecutado");
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }
        }, 5000);

        return tiempo;
    }
    
    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", ()=>{
        alert("Has parado el intervalo");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", ()=>{
        alert("Has Iniciado el intervalo");
        intervalo();
    });

    //setTimeout se ejecuta una sola vez
    // var tiempo = setTimeout(()=>{
    //     console.log("Set interval ejecutado");
    //     var encabezado = document.querySelector("h1");
    //     if(encabezado.style.fontSize == "50px"){
    //         encabezado.style.fontSize = "30px";
    //     }else{
    //         encabezado.style.fontSize = "50px";
    //     }
    // }, 5000);
});
