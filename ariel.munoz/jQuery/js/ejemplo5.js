$(document).ready(function(){
	alert("Antes");
	$("ul li:eq(1) i").text("dos");
	//Estas dos lineas jQuery son equivalentes
	$("ul").find("li").eq(1).find("i").text("dos");
});