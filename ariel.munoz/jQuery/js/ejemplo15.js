$(document).ready(function(){
//Asocia el evento click a los elementos de la lista		
	$(".listado li").on("click", function(){
		$(this).appendTo(".listado");
	});
});