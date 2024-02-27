//Ejercicio1: Extensión de la libreria jQuery con métodos de gestión
//de los elementos de una lista desordenada
(function($){
    $.fn.subir=function(){
        this.on("click", function(){
            $(".subir").parent().insertBefore($(this).parent().prev());
        })
    }
    $.fn.bajar=function(){
        this.on("click", function(){
            $(this).parent().insertAfter($(this).parent().next());
        })
    }
    $.fn.duplicar=function(){
        this.on("click", function(){
            $(this).parent().clone(true).insertAfter($(this).parent());
        })
    }
    $.fn.borrar=function(){
        this.on("click", function(){
            $(this).parent().remove();
        })
    }
    $.fn.contar=function(){
        return $(this).find("li").length;
    }
})(jQuery);