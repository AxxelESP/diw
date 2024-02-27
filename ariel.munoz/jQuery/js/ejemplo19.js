$(document).ready(function(){
	$(document).on({
		"mousemove": function(e){
		$(".posicion").text("("+e.pageX+" , "+e.pageY+")")
		},
		"click" : function(e){
			console.log("X: "+e.pageX+" Y: "+e.pageY);
		}
	});
});