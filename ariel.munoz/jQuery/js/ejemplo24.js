$(document).ready(function(){		
	$(".cuadro").hide(5000, function(){
		$(this).css("background-color","red");}).delay(1000).show(5000).slideUp(10000).slideDown(10000);
	$(".boton").on("click",function(){
		console.log("Cola de efectos: "+$(".cuadro").queue());
		console.log("Efectos en cola: "+$(".cuadro").queue().length);
	})
	$(".detener").on("click",function(){
		$(".cuadro").stop(true,false);
});
})