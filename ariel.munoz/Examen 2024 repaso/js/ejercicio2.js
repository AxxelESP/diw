$(document).ready(function () {
    $(".cuadro").on("click",function(){
        var nuevaPosX = Math.floor(Math.random()*(800));
        var nuevaPosY = Math.floor(Math.random()*(600));
        var nuevaSizeX = Math.floor(Math.random()*(500));
        var nuevaSizeY = Math.floor(Math.random()*(500));

        var red = Math.floor(Math.random()*(255));
        var green = Math.floor(Math.random()*(255));
        var blue = Math.floor(Math.random()*(255));
        var alpha = Math.floor(Math.random()*(100))/100;

        var radio = Math.floor(Math.random()*(200));
        $(this).data('propiedades',{
            top: nuevaPosY,
            left: nuevaPosX,
            width: nuevaSizeX,
            height: nuevaSizeY,
            backgroundColor: 'rgba('+red+',' + green + ',' + blue + ','+ alpha +')',
            borderRadius: radio
        })
        $(this).css({
            "top": nuevaPosY+'px',
            "left":nuevaPosX+'px',
            "width":nuevaSizeX+'px',
            "height":nuevaSizeY+'px',
            "background-color": 'rgba('+red+','+green + ',' + blue + ','+ alpha +')',
            "border-radius":radio
        })

        $(this).text(parseInt($(this).text())+1);
    })
})