$(document).ready(function(){
	$("#filas").on("click", function(){
		var filas=$("#tabla").contarFilas();
		alert("La tabla tiene: "+filas+" filas");	
	});
	$("#columnas").on("click", function(){
		var columnas=$("#tabla").contarColumnas();
		alert("La tabla tiene: "+columnas+" columnas");	
	});
	$("#ins-fila").on("click", function(){		
		$("#tabla").insertarFila().css("backgroundColor", "orange");
	});
})