//Botón de confirmación de compra//
// let botonGracias = document.getElementById("botonGracias")
// botonGracias.addEventListener("click",gracias)

// function gracias(){
// alert("¡Muchas gracias por su compra!")
// }

// Generamos un botón devolviendo un alert para confirmar la compra

$('#botonComprar').append('<button id="botonGracias" class="btn btn-warning">COMPRAR</button>');

$('#botonGracias').click(function () {

    alert('¡Gracias por su compra!');

});


const URLJSON = "data/datos.json"

$('#vendedores').append('<button id="btnvendedores" class="btn btn-warning">Contactar Vendedores</button>');


$('#btnvendedores').click(() => {
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta;
            for(const dato of misDatos) {
                $("#vendedoresDiv").prepend(`<div>
                                    <h2>${dato.name}<h2>
                                    <h5>${dato.tel}<h5>
                                    <h5>${dato.correo}<h5>
                                    `)
            }
        }
    })
})