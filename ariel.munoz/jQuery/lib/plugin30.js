(function($){
	$.fn.numerar=function(inicio=1){			
		this.each(function(){	
			console.log("Primero");
			$(this).prepend($("<span>"+inicio+" </span>"));
			inicio++;
		});
	}		
})(jQuery);
