$(document).ready(function() {
	$("#boton").on("click", function(){
		hola=$("span").text();
		opcion2=$("input:radio[name=efecto]:checked").attr("value");
		opcion=$("input:radio[name=efecto]:checked").val();
		console.log(opcion);
		console.log(opcion2);
		console.log(hola);
		tiempo=$("input:text[name=tiempo]").val();	
		tiempo=tiempo*1000;
		if(opcion==0){
			$("p").fadeToggle(tiempo);
		}else{
			$("p").slideToggle(tiempo);
		}
	})
});