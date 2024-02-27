$(document).ready(function(){
	var vocales=0;
	var consonantes=0;
	var otros=0;
	$("#texto").on("keydown",function(e){
	  var tecla=e.which;
	if (tecla == 65 || tecla == 69 || tecla == 73 || tecla == 79 || tecla == 85 )
	{
 	 	vocales++; 	 	
	}else{
		if (tecla > 65 && tecla < 90){
			consonantes++;
		}else{
			if (tecla != 8){
		 		otros++;
		  } 
		}
	}	
	if (tecla == 8){
		var longitud=$("#texto").val().length;
	  if (longitud > 0){	
		var caracter=$("#texto").val().charCodeAt(longitud-1)-32;
		console.log(caracter);
	if (caracter == 65 || caracter == 69 || caracter == 73 || caracter == 79 || tecla == 85 )
	{
 	 	vocales--; 	 	
	}else{
		if (caracter > 65 && caracter < 90){
			consonantes--;
		}else{
			otros--;
		}
	}	
	 }
	}
	$(".info").text("Vocales "+vocales+" consonantes: "+consonantes+" otros: "+otros);
	})
});