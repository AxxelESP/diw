$(document).ready(function(){		
	$(".ok").on("click", function(){
		var nombre=$(".nombre").val();		
		//$("ul.listado").append("<li>"+nombre+"</li>");
		$("<li>"+nombre+"</li>").appendTo("ul.listado");
		$(".nombre").val("");
	});
});