// Se llama al array 

const URLJSON = "data/datos.json"

// Creamos un botón para asociarlo a un evento

$('#vendedores').append('<button id="btnvendedores" class="btn btn-warning">Contactar Vendedores</button>');

// El evento coloca en el html las propiedades del array 

$('#btnvendedores').on( "click", function(event) {
    event.preventDefault();
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let  misDatos = respuesta;
            for(const dato of misDatos) {
                $('#btnvendedores').append(`<div class="datosVendedor" id="productosUbicacion">
                                                     <h4>${dato.name}</h4>
                                                     <p>${dato.tel}</p>
                                                     <p>${dato.correo}</p>
                                                            </div>`)
            }
        }
    })
})