$(document).ready(function(){

  //Slider
  $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });

  //Posts
  var posts = [
    {
      title: 'Prueba de Titulo 1',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique.'   
    },
    {
      title: 'Prueba de Titulo 2',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique.'
    },
    {
      title: 'Prueba de Titulo 3',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique.'

    },
    {
      title: 'Prueba de Titulo 4',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ut corrupti recusandae quibusdam possimus itaque optio quas quod ab libero provident, vero officia, reiciendis eligendi eius eaque eum similique.'

    },
  ];

  posts.forEach((item, index) => {
    var post = `
      <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>
            ${item.content}
          </p>
          <a href="#" class="button-more">Leer mas</a>
        </article>
    `;

    $("#posts").append(post);
  });

  //Selector de Tema
  var theme = $("#theme");
  $("#to-green").click(function(){
    theme.attr("href", "css/green.css");
  });

  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });

  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });

  //Scroll arriba de la web
  $('.subir').click(function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

  // Login Falso

  $("#login form").submit(function() {
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  var name = localStorage.getItem("form_name");
  if(name != null && name != "undefined"){
    var about_parrafo = $("#about p")
    about_parrafo.html("<br><strong>Bienvenido, " + name+"</strong>");
    about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

    $("#login").hide();
    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
    });
  }
});