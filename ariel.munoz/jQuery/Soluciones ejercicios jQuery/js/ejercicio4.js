$(document).ready(function(){
	$(".cuadro").on("click",function(){		
		$("body").css("backgroundColor",$(this).attr("id"));
	});
	$(".cuadro").on("mousemove",function(e){		
		$(".ayuda").text($(this).attr("value"));
		$(".ayuda").css({
			"top": e.pageY+5,
			"left": e.pageX+5,
			"display": "block"	
		});
	});
	$(".cuadro").on("mouseleave", function(){
		$(".ayuda").css("display","none");
	})
});