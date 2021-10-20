const URLJSON = "data/datos.json"

$('#vendedores').append('<button id="btnvendedores" class="btn btn-warning">Contactar Vendedores</button>');


$('#btnvendedores').click(() => {
    $.getJSON(URLJSON, function(respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta;
            for(const dato of misDatos) {
                $("#vendedoresDiv").prepend(`<div id="productosUbicacion">
                                    <h2>${dato.name}<h2>
                                    <h5>${dato.tel}<h5>
                                    <h5>${dato.correo}<h5>
                                            </div> `)
            }
        }
    })
})