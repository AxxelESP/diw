$(document).ready(function () {
    $(".subir").subir();
    $(".bajar").bajar();
    $(".borrar").borrar();
    $(".duplicar").duplicar();
    $(".contar").on("click",function(){
        alert($(".listado").contar())
    })
});