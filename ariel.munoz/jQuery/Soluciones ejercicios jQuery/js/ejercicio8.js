$(document).ready(function(){
	$(".ampliar").on("click",function(){
		$(".imagen").animate({
			"backgroundSize": "175%"}, 1000);
	})
	$(".cuadrante").on("mouseenter", function(){	
		$(".imagen").stop();
		switch($(this).attr("id")){
		case "uno":
			x= "0%"; y="0%";break;
		case "dos":
			x= "100%"; y="0%";break;
		case "tres":
			x= "0%"; y="100%";break;
		default:
			x= "100%"; y="100%";break;
		}									
		$(".imagen").animate({			
			backgroundPositionX: x,
			backgroundPositionY: y
			}
			,400);
		});
	$(".cuadrante").on('mouseleave', function(){
		$(".imagen").stop(true);
		$(".imagen").animate({			
			backgroundPositionX: '50%',
			backgroundPositionY: '50%',
			backgroundSize: '100%'
			}
			,400);
	});
});