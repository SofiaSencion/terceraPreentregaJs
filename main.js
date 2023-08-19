// **Actividad 1: Ecommerce**

// 1. **Objetivo**: Comenzar a desarrollar un ecommerce que permita mostrar productos, agregarlos al carrito y guardar la selección en el almacenamiento local.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "productos-container" donde se mostrarán las tarjetas de productos. LISTO

//    b. En un archivo JavaScript, crea un array de objetos con 10 productos. LISTO

//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto, estilízalos mínimamente y agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.



const productos = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Nvidia",
        imagen: "tarjeta_grafica.jpg",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "Dell",
        imagen: "monitor.jpg",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Samsung",
        imagen: "ssd.jpg",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "procesador.jpg",
        descripcion: null,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "mouse.jpg",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Crucial",
        imagen: "ram.jpg",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "disco_externo.jpg",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "auriculares.jpg",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];

////BAJAR IMAGENES PARA PONER EN CADA PRODUCTO///////// LISTO


//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento. LISTO

//Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto, 

//estilízalos mínimamente y 

//agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.

//Si las imagenes tienen null tienen que usar un operador que haga algo con ese dato y visualice otra cosa podrían hacer algo así como src=${ si esta ruta de la imagen existe, usa esa ruta, sino usá esta otra} y esaotra sería como un no-disponible.jpg

function generarTarjetas (productos){
    /* aca va el reduce{
        aca adentro estilizar las tarjetas y agregar boton de carrito
    } */
    return console.log(productos)
}

//boton de carrito////
/* 
boton que al hacerle click agregue el producto al almacenamiento local
*/

//posible forma de hacer las tarjetas en el contenedor "productos-container"////////////////////////////////////////////////////////////////////////

/*

let container = document.getElementById("productos-container")

let tarjetas = document.createElement("div")

tarjetas.innerHTML = `<h3> ${producto.nombre} </h3>
                      <p> ${producto.descripcion} </p>
                      <p> ${producto.marca} </p>
                      <b> $ ${producto.precio} </b>`;

for (const producto of productos){
    let contenedor = document.createElement("div");
    
    //definimos el innerHTML del elemento con una plantilla de texto:

    contenedor.innerHTML = `<h3> ID: &{producto.id} </h3>
                            <p> Producto: ${producto.nombre} </p>
                            <b> $ ${producto.precio} </b>`; USAR BACKTICKS

    document.body.appendChild(contenedor); AVERIGUAR APPENDCHILD
}

*/

/////////MATERIALES///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CREANDO ELEMENTOS DESDE OBJETOS con for...of

/*
const productos = [
    {
        id: 1, 
        nombre: "Arroz",
        precio: 125
    },
    {
        id: 2,
        nombre: "fideo",
        precio: 70
    },
    {
        id: 3,
        nombre: "pan",
        precio: 50
    },
    {
        id: 4,
        nombre: "flan",
        precio: 100
    }
]

usando for... of

for (const producto of productos){
    let contenedor = document.createElement("div");
    
    //definimos el innerHTML del elemento con una plantilla de texto:

    contenedor.innerHTML = `<h3> ID: &{producto.id} </h3>
                            <p> Producto: ${producto.nombre} </p>
                            <b> $ ${producto.precio} </b>`; USAR BACKTICKS

    document.body.appendChild(contenedor); 
}
*/

//ADD EVENT LISTENER para cuando el usuario quiera comprar algo, apreta un boton que guarda el producto en local storage

/*

HTML => <button id="btnPrincipal">CLICK</button>

JS =>
let boton = document.getElementById ("btnPrincipal")
    boton.addEventListener("click", respuestaClick)

    function respuestaClick(){
        console.log ("respuesta evento")

        aca es donde hay que guardar el producto en local storage
    }
*/

////CREAR ELEMENTOS EN EL DOM////

/*
para crear elementos se utiliza la funcion document.createElement() y se debe indicar el nombre de la etiqueta HTML que representara ese elemento.

Luego, el nodo creado, debe agregarse como hijo con append(), al body o a otro nodo del documento actual

ejemplo:

crear el nodo de tipo elemento:
let parrafo = document.createElement ("p"); -> nombre de la etiqueta HTML

insertar HTML interno:
parrafo.innerHTML = "<h2>hola coder</h2>";

añadir el nodo Element como hijo de body:
document.body.append(parrafo);
*/

//////////////LOCAL STORAGE////////////////
/*
para almacenar informacion se utiliza setItem

localStorage.setItem(clave, valor)


*/


////////usar toastify EN EL TRABAJO FINAL para mostrar en pantalla un cartelito cuando el usuario agrega un producto al carrito