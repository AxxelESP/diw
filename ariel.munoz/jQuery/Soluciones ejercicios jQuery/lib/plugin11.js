(function($){
	$.fn.estilo=function(texto, estilo1, estilo2){
		this.attr("placeholder", texto);
		this.on("focusin", function(){
			$(this).addClass(estilo1).removeClass(estilo2);
		})
		this.on("focusout", function(){
			$(this).addClass(estilo2).removeClass(estilo1);
		})
	}		
})(jQuery);
