$(document).ready(function(){
  //Selector de ID
  var rojo = $('#rojo');
  rojo.css('background','red').css('color','white');

  var amarrillo = $('#amarillo');
  amarrillo.css('background','yellow').css('color','blue');

  var verde = $('#verde');
  verde.css('background','green').css('color','orange');

  // Selector de Clases
  var mi_clase = $('.zebra');
  mi_clase.css('padding', '5px');
  //console.log(mi_clase[0]);
  //console.log(mi_clase.eq(0));

  $('.sin_borde').click(function(){
    $(this).addClass('zebra');
  })

  // Selectores de etiqueta
  var parrafos = $('p');
  parrafos.css('cursor','pointer');

  parrafos.click(function(){
    var p = $(this);
    if(!p.hasClass('grande')){
      p.addClass('grande');
    }else{
      p.removeClass('grande');
    }
  });

  // Selectores de Atributo
  var google = $('[title="Google"]');
  google.css('background', '#ccc');

  var facebook = $('[title="Facebook"]');
  facebook.css('background', 'blue').css('color', '#FFFF');

  // Otros
  // $('p, a').addClass('margen-superior');

  // var busqueda = $('#caja').find('.resaltado');
  //var busqueda = $('#caja .resaltado').eq(0).parent().parent().parent().find('[title="Google"]');
  var busqueda = $('#elemento2').parent().parent().find('.resaltado');
  console.log(busqueda);
});