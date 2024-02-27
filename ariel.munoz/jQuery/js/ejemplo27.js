$(document).ready(function(){
	$(".boton").data("van",0);
	$(".boton").on('click', function(){
		var v=$(this).data("van");
		v++;
		$(this).data("van", v);
		$(this).val(v);
		console.log($(this).val()+" : "+$(this).data("van"));
	});
});