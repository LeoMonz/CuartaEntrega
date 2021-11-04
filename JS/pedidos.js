// Creamos un objeto vacío para poder modificarlo en las siguientes líneas

let carritoDeCompras = []

// Llamamos los IDs de productos.html para hacer uso de los datos ingresados por el usuario y devolver un resultado

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

// Hacemos uso del array ubicado en stockMuebles.js y plasmamos sus propiedades en el html

mostrarProductos(stockMuebles)

function mostrarProductos(array){

   
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
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id);
            
        })

        
        

    
    }

    


}

// Hacemos uso de los productos que elija el usuario y los guardamos en el Carrito de Compras con sus detalles

function agregarAlCarrito (id){

    let prodRepetido = carritoDeCompras.find(prodR => prodR.id === id)

    if(prodRepetido) {
        prodRepetido.cantidad = prodRepetido.cantidad + 1;
        document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id="cantidad${prodRepetido.id}">${prodRepetido.cantidad}</p>`
        actualizarCarrito()
    }else{
         let productoAgregar = stockMuebles.find(prod => prod.id == id);
    carritoDeCompras.push(productoAgregar)

    productoAgregar.cantidad = 1
    actualizarCarrito()
    
    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `   <p>${productoAgregar.nombre}</p>
                        <p id="cantidad${productoAgregar.id}">${productoAgregar.cantidad}</p>
                        <p>$${productoAgregar.precio}</p>
                        <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    contenedorCarrito.appendChild(div)

    let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    // Creamos un evento asignado al boton de eliminar para que nos devuelva el mismo pedido sin el producto elegido para eliminar

    botonEliminar.addEventListener('click', () =>{
        botonEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(prodE => prodE.id != productoAgregar.id)
        actualizarCarrito()
    })
    }

   
}

// Actualizamos Carrito de Compras con los productos elegidos, sumamos y cuotificamos

function actualizarCarrito() {

    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.cantidad, 0);
    precioTotal.innerText = carritoDeCompras.reduce((acc, el)=> acc + (el.precio * el.cantidad), 0)

    let cuotas = carritoDeCompras.reduce((acc, el)=> acc + (el.precio * el.cantidad), 0)
    let cuotas3 = Math.round(cuotas / 3)
    let cuotas6 = Math.round(cuotas / 6)
    let cuotas9 = Math.round(cuotas / 9)
    let cuotas12 = Math.round(cuotas / 12)
    let cuotas18 = Math.round(cuotas / 18)

   


    document.getElementById('cuotas').innerHTML = ` <select class="container selectCuotas">
                                                        <option value="all">Selecciona tus cuotas</option>
                                                        <option value="3">3 cuotas de $${cuotas3}</option>
                                                        <option value="6">6 cuotas de $${cuotas6}</option>
                                                        <option value="9">9 cuotas de $${cuotas9}</option>
                                                        <option value="12">12 cuotas de $${cuotas12}</option>
                                                        <option value="18">18 cuotas de $${cuotas18}</option>
                                                    </select>
                                                    <button id="botonGracias" class="center btn btn-warning">Finalizar Compra</button>`

    // Evento asignado al boton de compras para confirmar el pedido 
    
    const botonConfirmacion = document.getElementById('botonGracias')
    botonConfirmacion.addEventListener('click', () => {
             alert('¡Gracias por su compra!')
     });
   
 }


