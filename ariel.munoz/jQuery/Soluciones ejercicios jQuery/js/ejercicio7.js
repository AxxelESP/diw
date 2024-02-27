/*JS PARA EL EJERCICIO6*/

$(document).ready(function(){
    $("ul.menu").slideUp();
  $(".boton").mouseenter(function(){
    $("ul.menu").slideDown();
  });
  $(".boton").mouseleave(function(){
    $("ul.menu").slideUp();
  });
});