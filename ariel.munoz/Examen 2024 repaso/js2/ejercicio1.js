$(document).ready(function(){
    $(".subir").subir();
    $(".bajar").bajar();
    $(".borrar").borrar();
    $(".duplicar").duplicar();
    $(".contar").on("click", function(){
		alert($(".listado").contar());
		//alert que mostrará el número de elementos
	})
});