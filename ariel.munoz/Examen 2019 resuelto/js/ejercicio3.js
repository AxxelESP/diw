$(document).ready(function() {
	$("#boton").on("click", function(){				
		opcion=$("input:radio[name=efecto]:checked").val();
		tiempo=$("input:text[name=tiempo]").val();	
		tiempo=tiempo*1000;
		if(opcion==0){
			$("p").fadeToggle(tiempo);
		}else{
			$("p").slideToggle(tiempo);
		}
	})
});