(function($){
	$.fn.contarFilas=function(){			
		return this.find("tr").length;		
	}
	$.fn.contarColumnas=function(){
		return this.find("tr:first").find("td").length;
	}
	$.fn.insertarFila=function(){
		 return this.find("tr:first").clone().		
		insertAfter("tr:last").find("td").each(function(){
			$(this).text("null");
		});		
	}
})(jQuery);
