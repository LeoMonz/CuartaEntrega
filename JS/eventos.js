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