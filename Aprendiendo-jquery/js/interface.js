$(document).ready(function () {
  // Mover elemento por la página
  $('.elemento').draggable();

  //Redimensionar para ello debimos cargar los archivos CSS en el html
  $('.elemento').resizable();

  // Seleccionar elementos
  // $('.lista-seleccionable').selectable();

  // Seleccionar y Ordenar los elementos
  $('.lista-seleccionable').sortable({
    update: function (event, ui) {
      console.log("Ha cambiado la lista");
    }
  });

  // Drop
  $('#elemento-movido').draggable();
  $('#area').droppable({
    drop: function () {
      console.log("has soltado algo dentro del área");
    }
  });

  //Efectos
  $('#mostrar').click(function () {
    // $('.caja-efectos').fadeToggle();
    // $('.caja-efectos').effect('explode');
    // $('.caja-efectos').toggle('explode');
    // $('.caja-efectos').toggle('blind');
    // $('.caja-efectos').toggle('drop');
    // $('.caja-efectos').toggle('fold');
    // $('.caja-efectos').toggle('puff');
    // $('.caja-efectos').toggle('scale');
    // $('.caja-efectos').toggle('shake', 'slow');
    $('.caja-efectos').toggle('shake', 4000);
  });

  //Tooltip
  $(document).tooltip();

  //Dialog
  $("#lanzar-popup").click(function () {
    $("#popUp").dialog();
  });

  //Datepicker
  $("#calendario").datepicker();

  //Tabs
  $("#pestanas").tabs();

});