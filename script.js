// Boton sumar y restar para el carrito

const btnSumar = document.querySelector(".btn-sumar");
const btnRestar = document.querySelector(".btn-restar");
const cantidadProducto = document.querySelector(".cantidad-producto");


let count = 0;
btnSumar.addEventListener("click", (e) => {
    count++
    cantidadProducto.textContent = count
})
btnRestar.addEventListener("click", (e) => {
    if (count > 0) {
        count--
        cantidadProducto.textContent = count
    }

})


// Cambiar imagen cuando se apreta

const imgZapatillaGrande = document.querySelector(".zapatilla-grande-cambiar");
const imgZapatillas = document.querySelectorAll(".div-zapatillas");

imgZapatillas.forEach(element => {
    element.addEventListener("click", (e) => {
        if (element.getAttribute("src") === "images/image-product-1-thumbnail.jpg") {
            imgZapatillaGrande.setAttribute("src", "images/image-product-1.jpg");
        }else if (element.getAttribute("src") === "images/image-product-2-thumbnail.jpg") {
            imgZapatillaGrande.setAttribute("src", "images/image-product-2.jpg");
        }else if (element.getAttribute("src") === "images/image-product-3-thumbnail.jpg") {
            imgZapatillaGrande.setAttribute("src", "images/image-product-3.jpg");
        }else if (element.getAttribute("src") === "images/image-product-4-thumbnail.jpg") {
            imgZapatillaGrande.setAttribute("src", "images/image-product-4.jpg");
        }
    })
});




// Abrir el carrito y agegar el producto
const  btnCarrito = document.querySelector("#btn-carrito");
const  elCarrito = document.querySelector(".carrito-de-compras");
elCarrito.style.display = "none"


btnCarrito.addEventListener("click", (e) => {
    if (elCarrito.style.display == "flex") {
        elCarrito.style.display = "none";
    }else if (elCarrito.style.display == "none") {
        elCarrito.style.display = "flex"
    }
})


// Agregar al carrito
const carritoAgregar = document.querySelector(".producto-carrito");
const itIsEmpty = document.querySelector(".it-is-empty");
const agegarAlCarrito = document.querySelector(".producto-carrito2");
const btnAgregar = document.querySelector(".btn-agregar-carrito");


btnAgregar.addEventListener("click", (e) => {
    itIsEmpty.style.display = "none";
    const agegarAlCarritoDuplicado = agegarAlCarrito.cloneNode(true);
    carritoAgregar.appendChild(agegarAlCarritoDuplicado);
    agegarAlCarrito.style.display = "flex";
})


// Eliminar producto 
const eliminarItem = document.querySelectorAll(".trash");



eliminarItem.forEach(element => {
    element.addEventListener("click", (e) => {
        carritoAgregar.lastChild.remove()
    });
});











