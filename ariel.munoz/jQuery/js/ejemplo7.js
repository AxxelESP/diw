$(document).ready(function(){
	$("p").each(function(indice, elemento){
		console.log("Texto del párrafo "+indice+":"+$(elemento).text());
	});
	$("a").each(function(i){
		console.log("El enlace "+i+" es "+$(this).text()+" apunta a "+$(this).attr("href"));
	});
});