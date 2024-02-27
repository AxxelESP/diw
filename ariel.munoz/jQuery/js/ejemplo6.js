$(document).ready(function(){
	console.log("Tamaño de letra h1:"+$("h1").css("fontSize"));	
	$("h1").first().css({
		"fontSize" : "40px",
		"backgroundColor" : "blue",
		"color" : "white"
		});
	console.log("Tamaño de letra h1:"+$("h1").first().css("fontSize"));
	$("h1").last().css("fontSize","+=30px");
	console.log("Tamaño de letra del último h1:"+$("h1").last().css("fontSize"));
});