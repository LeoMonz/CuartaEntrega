// Creamos un objeto y lo volcamos a una tabla con sus propiedades en mis_pedidos.html

const stockMuebles = [
    {nombre: "Mesa Aqua", medidas: "180cms x 100cms x 70cms", precio: "54000"},
    {nombre: "Mesa Terra", medidas: "210cms x 110cms x 70cms", precio: "60000"},
    {nombre: "Silla Bora", medidas: "60cms x 50cms x 70cms", precio: "9000"},
    {nombre: "Silla Bonet", medidas: "60cms x 60cms x 70cms", precio: "7500"}
];

for (producto of stockMuebles) {
    $("#tableLista").append(`<tr><td>${producto.nombre}</td>
                                <td>${producto.medidas}</td>
                                <td>${producto.precio}</td></tr>`)
    };


// Se sustituye el texto del HTML por el introducido por medio de jQuery en index.html

$('#desc25años').append('<p id="textoIndex3" class="text-black-50 mb-0">Una tradición familiar que creció gracias al compromiso con el cliente hoy nos posiciona en el lugar adecuado para combinar lo vintage y lo moderno, dándole esa originalidad que expresa tu personalidad en tu hogar.  </p>')

$('#card1').append('<p class="card-text">En <strong>Wood Innovation</strong> sabemos que tu hogar es importante para vos, por eso te ayudamos a encontrar el diseño adecuado a tus gustos apoyándonos en nuestros 25 años de trayectoria.</p>')

$('#card2').append('<p class="card-text">Contamos con una amplia variedad de productos que se adaptarán facilmente a cualquier ambiente, otorgando esa calidez que hace de tu hogar, tu lugar. ¡Animate a redecorar!</p>')


                               
    


