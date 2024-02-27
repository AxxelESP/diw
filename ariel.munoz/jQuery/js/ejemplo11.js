$(document).ready(function(){	
	var $li=$("ul.listado li:first").appendTo("ul.listado");
	//La siguiente linea es equivalente
	$("ul.listado").append($("ul.listado li:first"));
	console.log("El elemento movido tiene el texto: "+$li.text());
});