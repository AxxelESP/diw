$(document).ready(function(){	
	var $li=$("ul.listado li:first").clone().appendTo("ul.listado");
	//La siguiente linea es equivalente
	$("ul.listado").append($("ul.listado li:first").clone());
	console.log("El elemento movido tiene el texto: "+$li.text());
});