$(document).ready(function(){
	$(document).on("keydown",function(e){
		console.log(e.which);
		switch (e.which){
			case 37:								
				$(".cuadro").css("left","-=20px");
				break;
			case 38:								
				$(".cuadro").css("top","-=20px");				
				break;
			case 39:								
				$(".cuadro").css("left","+=20px");				
				break;
			case 40:								
				$(".cuadro").css("top","+=20px");				
				break;
		}
	})
});