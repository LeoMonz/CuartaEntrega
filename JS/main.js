
//  Creamos un un objeto al hacer click //
document.getElementById('formularioPedido').addEventListener('submit', crear);

// Introducimos valores mediante la información que nos da el usuario//
function crear(e) {
    e.preventDefault();
    
    let producto = document.getElementById('producto').value;
    let color = document.getElementById('color').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let total = JSON.parse(document.getElementById('cantidad').value) * JSON.parse(document.getElementById('precio').value)

    let muebles = {
        producto,
        color,
        precio,
        cantidad,
        total
    }

  //  Creamos "productos" vacío y le pusheamos las propiedades del objeto creado anteriormente//

    if (localStorage.getItem('productos') === null) {
        let productos = [];
        productos.push(muebles)
        localStorage.setItem('productos', JSON.stringify(productos));
        
    }else {
        let productos = JSON.parse(localStorage.getItem('productos'))
        productos.push(muebles)
        localStorage.setItem('productos', JSON.stringify(productos))
    }
    document.getElementById('formularioPedido').reset();
    volcar();

   
}

// Llamamos del localStorage las propiedades para devolver resultados al HTML //
function volcar() {
    let productos = JSON.parse(localStorage.getItem('productos'));
    document.getElementById('pruebaPedido').innerHTML = "";

    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i].producto;
        let color = productos[i].color;
        let cantidad = productos[i].cantidad;
        let precio = productos[i].precio;
        let total = productos[i].total;
        

        document.getElementById('pruebaPedido').innerHTML += 
        `
        <tr>
            <td>${producto}</td>
            <td>${color}</td>
            <td>${cantidad}</td>
            <td>${precio}</td>
            <td>${total}</td>
        </tr>        
        `
    } 
    
  


}
volcar();
localStorage.clear();






// let parrafo = document.createElement("p");
// parrafo.innerHTML = "<h1>HOLA</h1>";
// if (saludo == "si") {
//     document.body.appendChild(parrafo);
// }



   
// function Producto(nombre, madera, medidas, precio) {
//     this.nombre = nombre;
//     this.madera = madera;
//     this.medidas = medidas;
//     this.precio = precio;
    
//  }
//  const mesaAqua = new Producto("Mesa Aqua", "Algarrobo", "180cms x 100cms x 70cms", 40000);
//  const mesaTerra = new Producto("Mesa Terra", "Pino", "210cms x 110cms x 70cms", 45000);
//  const sillaBora = new Producto("Silla Bora", "Cedro", "60cms x 50cms x 70cms", 5000);
//  const sillaBonet = new Producto("Silla Bonet", "Algarrobo" , "60cms x 60cms x 70cms", 7500);
//  const arrayProductos = [mesaTerra,mesaAqua,sillaBonet,sillaBora]
 

//  const productoElegido = prompt ("Hola, en este momento tenemos stock en: \n- MESA\n- SILLA\n¿Que producto le interesa?")
//  const propiedades = ("el producto seleccionado cuenta con las siguientes características:")
//  const compra = ("para continuar con la compra por favor contactarse con el 2477-351607")
//  const gracias = ("Gracias por visitarnos, ¡vuelva pronto!")

//  if (productoElegido == "mesa") {
//      const modeloMesa = prompt ("contamos con dos modelos:\n- AQUA\n- TERRA\n¿Que modelo le interesa?")
//      if (modeloMesa == "aqua") {
//     console.log(propiedades)
//     console.log(mesaAqua)
//     console.log(compra)
//     }else if (modeloMesa == "terra"){
//     console.log(propiedades)
//     console.log(mesaTerra)
//     console.log(compra)
//     }else{
//         console.log(gracias)
//     }

// }else if (productoElegido == "silla") {
//     const modeloSilla = prompt ("contamos con dos modelos:\n- BORA\n- BONET\n¿Que modelo le interesa?")
//     if (modeloSilla == "bora") {
//    console.log(propiedades)
//    console.log(sillaBora)
//    console.log(compra)
//    }else if (modeloSilla == "bonet"){
//    console.log(propiedades)
//    console.log(sillaBonet)
//    console.log(compra)
//    }else{
//        console.log(gracias)
//    }
// }else{
//     alert(gracias)
// }


