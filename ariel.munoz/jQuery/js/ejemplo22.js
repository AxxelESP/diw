$(document).ready(function(){
	$("#boton").on("click",function(){
		$("p").slideToggle("slow");	
		var texto=$("#boton").text();
		if (texto == "Ocultar"){
			$("#boton").text("Mostrar");
		}else{
			$("#boton").text("Ocultar");
		}
	})
});