$(document).ready(function () {
    $("body").on("click","#boton",function(){
        var opcion = $("input[name='efecto']:checked").val();
        var tiempo = $(".tiempo").val()
        if(opcion==0){
            $("p").fadeToggle(tiempo);
        }else{
            $("p").slideToggle(tiempo);
        }
        })

});