$(document).ready(function() {
	var lin=$("table tr").length;
	$("#van").text("La tabla tiene "+lin+" filas");
	$("#add").on("click",function(){
		lin++;
		$("#van").text("La tabla tiene "+lin+" filas");
		$("#tabla").nueva_fila();
	});		
	$("table").on("click", ".borrar", function(){
		lin--;		
		$("#van").text("La tabla tiene "+lin+" filas");
		$(this).borrar_fila();
	});
  }); 