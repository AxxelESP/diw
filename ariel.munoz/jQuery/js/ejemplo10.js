$(document).ready(function(){	
	$(".btn-primary").on("click",function(){
		var nombre=$(".nombre").val();		
		$(".mensaje").text("¡Hola "+nombre+"!");
	})
});