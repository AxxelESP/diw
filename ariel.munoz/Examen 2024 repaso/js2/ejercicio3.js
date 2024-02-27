$(document).ready(function () {
    $("body").on("click", "#boton", function () {
        var tiempo = $(".tiempo").val()
        var opcion = $("input[name='efecto']:checked").val();
        if(opcion==0){
            $("p").fadeOut(tiempo);
        }else{
            $("p").slideUp(tiempo);
        }
        $(this).attr('id', 'boton2');
    });

    $("body").on("click", "#boton2", function () {
        var tiempo = $(".tiempo").val()
        var opcion = $("input[name='efecto']:checked").val();
        if(opcion==0){
            $("p").fadeIn(tiempo);
        }else{
            $("p").slideDown(tiempo);
        }
        $(this).attr('id', 'boton');
    });
});