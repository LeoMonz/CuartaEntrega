
// Se sustituye el texto del HTML por el introducido por medio de jQuery en index.html agregando una animación

$('#desc25años').append('<p id="textoIndex3" class="text-black-50 mb-0">Una tradición familiar que creció gracias al compromiso con el cliente hoy nos posiciona en el lugar adecuado para combinar lo vintage y lo moderno, dándole esa originalidad que expresa tu personalidad en tu hogar.  </p>')
$('#textoIndex3').css("color", "rgba(0, 0, 0, 0.5)")
                    .slideUp(1)
                    .slideDown(5000);
                    
                    

$('#card1').append('<p class="card-text">En <strong>Wood Innovation</strong> sabemos que tu hogar es importante para vos, por eso te ayudamos a encontrar el diseño adecuado a tus gustos apoyándonos en nuestros 25 años de trayectoria.</p>')


$('#card2').append('<p class="card-text">Contamos con una amplia variedad de productos que se adaptarán facilmente a cualquier ambiente, otorgando esa calidez que hace de tu hogar, tu lugar. ¡Animate a redecorar!</p>')



