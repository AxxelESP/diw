(function ($){
    $.fn.subir = function (){
        this.on("click", function(){
            $(this).parent().insertBefore($(this).parent().prev())
        })
    }
    $.fn.bajar = function (){
        this.on("click", function(){
            $(this).parent().insertAfter($(this).parent().next())
        })
    }
    $.fn.borrar = function(){
        this.on("click", function(){
            $(this).parent().remove();
        })
    $.fn.duplicar = function(){
        this.on("click",function(){
            $(this).parent().clone(true).insertAfter($(this).parent());
        })
    }
    $.fn.contar = function(){
        return $(this).find('li').length
}
    }
})(jQuery);