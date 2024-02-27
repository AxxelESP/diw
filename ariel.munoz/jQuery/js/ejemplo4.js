$(document).ready(function(){
	alert("Antes");
	$("p").first().html("<b>Texto del párrafo cambiado</b>");		
	$("ul li:last").text("Este texto está cambiado mediante jQuery");
	var $p2=$("p").eq(1);
	var texto_p2=$p2.text();
	console.log(texto_p2);
	//La siguiente linea hace lo mismo que las tres anteriores
	console.log($("p").eq(1).text());
});