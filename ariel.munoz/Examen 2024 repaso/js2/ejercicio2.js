$(document).ready(function () {
    $(".cuadro").draggable()
    $("body").on("click", ".cuadro", function () {
        var nuevaTop = Math.floor(Math.random() * 600);
        var nuevaLeft = Math.floor(Math.random() * 900);
        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);
        var alpha = Math.floor(Math.random() * 100) / 100;
        var tamanio = Math.floor(Math.random() * 400);
        var redondo = Math.floor(Math.random() * 50);

        // Almacenar las propiedades en el atributo data del cuadro
        $(this).data('propiedades', {
            top: nuevaTop,
            left: nuevaLeft,
            backgroundColor: 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')',
            width: tamanio,
            height: tamanio,
            borderRadius: redondo
        });

        // Aplicar las propiedades almacenadas
        $(this).css({
            'top': nuevaTop + 'px',
            'left': nuevaLeft + 'px',
            'background-color': 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')',
            'width': tamanio + 'px',
            'height': tamanio + 'px',
            'border-radius': redondo + '%'
        });

        // Obtener y actualizar el contador de clics
        var contador = parseInt($(this).text(), 10) + 1;
        $(this).text(contador);
    });

    $(".crear").click(function () {
        var nuevo = document.createElement("div");
        nuevo.textContent = "0"
        nuevo.classList.add("cuadro")
        document.body.appendChild(nuevo);
        
    });
});
