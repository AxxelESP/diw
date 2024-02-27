$(document).ready(function(){
	//Escribir los métodos siguientes en la extensión
	$(".subir").subir();
	$(".bajar").bajar();
	$(".duplicar").duplicar();
	$(".borrar").borrar();
	$(".contar").on("click", function(){
		alert($(".listado").contar());
		//alert que mostrará el número de elementos
	})
})