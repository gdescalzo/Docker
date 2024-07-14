// Punto 3 - API 2
$(document).ready(function () {

    alert("Funcionando correctamente")
    
    // Punto 4 - API 2
    $("#form_cat").submit(function (event) {
        var nombre = $("#categorias").val();

        if ($.trim(nombre) === '') {
            alert('Debe completar la categoria\nGaston Descalzo');
            event.preventDefault();
        }
    });

    // Punto 4 - API 2
    $("#form_prod").submit(function (event) {
        var producto = $("#nombre").val();
        var descripcion = $("#descripcion").val();
        var categoria = $("#categoria").val();

        var errores = [];

        if ($.trim(producto) === '') {
            errores.push("Debe ingresar el producto");
        }
        if ($.trim(descripcion) === '') {
            errores.push("Debe ingresar una descripcion");
        }
        if ($.trim(categoria) === '') {
            errores.push("Debe ingresar una categoria");
        }

        if (errores.length > 0) {
            errores.push("Gaston Descalzo");
            alert(errores.join("\n"));
            event.preventDefault();
        }
    });
});
