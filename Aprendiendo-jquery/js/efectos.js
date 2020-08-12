$(document).ready(function(){
  var caja = $("#caja");
  $("#mostrar").hide();

  $("#mostrar").click(function(){
    $(this).hide();
    $("#ocultar").show();
    // $("#caja").show('fast');
    // $("#caja").fadeIn('fast');
    caja.slideDown('fast'); 
    // caja.fadeTo('fast', 1); //Opacidad
  });

  $("#ocultar").click(function () {
    $(this).hide();
    $("#mostrar").show();
    // $("#caja").hide('fast');
    // $("#caja").fadeOut('fast');
    caja.slideUp('slow', function(){
      console.log("Cartel Ocultado");
    });
    // caja.fadeTo('fast', 0); //Opacidad
  });

  $("#todoEnUno").click(function(){
    // $("#caja").toggle('fast');
    // $("#caja").fadeToggle('fast');
    caja.slideToggle('fast');
  });

  $("#animame").click(function(){
    caja.animate({
      marginLeft: '500px',
      fontSize: '40px',
      height: '115px' }, 'fast')
      .animate({
        borderRadius: '900px',
        marginTop: '80px'
      }, 'slow')
      .animate({
        borderRadius: '0px',
        marginLeft: '0px'
      }, 'slow')
      .animate({
        borderRadius: '100px',
        marginTop: '0px'
      }, 'slow')
      .animate({
        marginLeft: '500px',
        fontSize: '40px',
        height: '115px'
      }, 'fast');
  });
});