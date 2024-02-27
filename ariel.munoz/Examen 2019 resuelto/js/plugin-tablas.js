(function($){
	$.fn.nueva_fila = function() {		
		//Solución 1: calculando las columnas de la tabla
		/*var linea="<tr>";
		var col=$(this).find("tr:first").find("td").length-1;
		for(i=0;i<col;i++){
			linea+="<td><input type='text'></td>";		
		}
		linea+="<td><button class='borrar'>Borrar</button></td></tr>";		
		$(this).append(linea);*/

		//Solución 2: Copiando la última fila y vaciando inputs
		//Si en el clone pasamos el argumento true no es necesario contemplar
		//la delegación de eventos

		$linea=$(this).find("tr:last").clone(true);
		$(this).append($linea);
		$(this).find("tr:last").find("input").each(function(){
			$(this).val("");
		})
	}		
	$.fn.borrar_fila=function(){
		console.log($(this));
		$(this).parent().parent().remove();	
	}
})(jQuery);

 


