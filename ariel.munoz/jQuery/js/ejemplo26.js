$(document).ready(function(){		
	$("li").on("click",function(){
		var n=$(this).data("pulsado");
		$(this).data("pulsado",++n);
		console.log("Has pulsado sobre: "+$(this).data("color")+" "+n+" veces");
	})
});
