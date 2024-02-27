(function($){
	$.fn.creatip=function(){
		$("<div class='tip'></div").appendTo("body");			
		this.on("mousemove", function(e){
			var texto=$(this).data("info");
			$(".tip").text(texto);			
			$(".tip").css({
				"display" : "block",
				"top" : e.pageY+5,
				"left" : e.pageX+5
			});
		})
		this.on("mouseleave", function(){
			$(".tip").css("display", "none");
		})
	}		
})(jQuery);
