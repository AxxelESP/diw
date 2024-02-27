$(document).ready(function(){
		$("p:gt(0)").on("click",function(){
			$(this).toggleClass("destacado");
		})
		$("p:first").one("click",function(){
			$(this).addClass("deshabilitado");
		})
});