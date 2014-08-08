/**
 * Bloque que se ejecuta cuando termina de cargar la pagina
 */
$(document).ready(function() {
    $(".logo-menu").on('click', mostrarOpciones);
    /*$("#btn_login").click(mostrarOpciones);*/
    $("#btn_login").on('click', mostrarFormularioLogin);

});

function mostrarOpciones() {
    $(".cabecera-menu").slideToggle(100);
}

function ingresarPagina() {
    alert("Ingresando...");
}

/**
 * Funcion que permite mostrar el menu responsive mobile
 */
function mostrarFormularioLogin() {
    $(function() {
        $("#dialog-form-login").dialog({
            title: "Ingreso del usuario",
            modal: true,
            buttons: {
                Ok: ingresarPagina,
                Cancel: function() {
                    $(this).dialog("close");
                }
            }
        });


    });
}