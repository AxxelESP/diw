//La clase solo se aplica cuando el evento click ocurre sobre el primer li
$(document).ready(function(){	
	var $lista=$("li");
	$lista.on("click",function(){
		$(this).toggleClass("destacado");
		if($(this).hasClass("destacado")){
			console.log("Has activado destacado en el li"+$(this).text());
		}else{
			console.log("Has desactivado destacado en el li"+$(this).text());
		}

	})	
});