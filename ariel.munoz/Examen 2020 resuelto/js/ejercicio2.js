//jQuery ejercicio 2
$(document).ready(function() {
    $(".cuadro").data("contador",0);
    $(".cuadro").on("click", function(){
        var x = Math.floor(Math.random()*1000);
        var y = Math.floor(Math.random()*600);
        $(this).css({
            "top" : y,
            "left" : x
        });
        var van = $(this).data("contador");
        $(this).data("contador", ++van);
        $(this).text($(this).data("contador"));
    })
});