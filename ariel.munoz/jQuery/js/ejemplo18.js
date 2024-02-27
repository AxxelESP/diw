$(document).ready(function(){
	$("p").on("click mouseenter",function(objeto_evento){
		console.log("Evento: "+objeto_evento.type);
		console.log("Texto del objeto: "+$(objeto_evento.target).text());		
		//la siguiente linea es equivalente
		console.log("Texto del objeto: "+$(this).text());		
	})
});