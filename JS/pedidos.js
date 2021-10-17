let carritodeCompras = [];
const contenedorProductos = document.getElementById('productosUbicacion');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const cantidadCarrito = document.getElementById('cantidadCarrito');
const sumaTotal = document.getElementById('precioTotal');

verProductos(stockMuebles)
function verProductos (array){

    for (const producto of array) {
        let div = document.createElement('div');
    
        
        div.innerHTML += `  <div class="card cardProductos">
                                <img src="${producto.imagen}" class="card-img-top imgProductos" alt="mesa">
                                <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p id="animacionDesc" class="card-text">${producto.desc} - $${producto.precio}</p>
                                <a  id="boton${producto.id}"class="btn btn-warning">Comprar</a>
                                </div>
                            </div>
                        `                                           
        contenedorProductos.appendChild(div);

        

        let boton = document.getElementById(`boton${producto.id}`)
        

        boton.addEventListener('click', ()=>{
            AgregarCarrito(producto.id)
        })
        
    
    }

    


}

function AgregarCarrito (id){

    let productoAgregado = stockMuebles.find(mueble => mueble.id === id)
    carritodeCompras.push(productoAgregado)
    actualizarCarrito()

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
                    <p>${productoAgregado.nombre}</p>
                    <p>${productoAgregado.cantidad}</p>
                    <p>$${productoAgregado.precio}</p>
                    <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)


}

function actualizarCarrito (){

    cantidadCarrito.innerText = carritodeCompras.reduce((acc, el) => acc + el.cantidad, 0);
    precioTotal.innerText = carritodeCompras.reduce((acc, el) => acc + el.precio, 0);

    
}