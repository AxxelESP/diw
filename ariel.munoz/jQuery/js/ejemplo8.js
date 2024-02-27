$(document).ready(function(){	
	var $primer_li=$("li").first();
	$primer_li.on("click",function(){
		$(this).addClass("destacado");
	})
	
});