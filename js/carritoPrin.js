/*<----------------------------------------------------------CARRITOO----------------------------------------------->/* */

const contador = document.getElementById("contador");

const productos = [
  {
    id: 1,
    nombre: "Curso de HTML",
    autor: "Curso de Programacion",
    precio: 50000,
    imagen: "img/cursos/Programacion/HTML.png",
  },
  {
    id: 2,
    nombre: "Curso de CSS",
    autor: "Curso de Programacion",
    precio: 50000,
    imagen: "img/cursos/Programacion/CSS.png",
  },
];

// Elementos del carrito
const cartItemsContainer = document.querySelector(".cart-items");
const totalPriceElement = document.querySelector(".total-price");

// Array para almacenar los productos agregados al carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
  const producto = productos.find((prod) => prod.id === idProducto);
  if (producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
  }
  // Actualizar el contador
  updateCounter();
}

function updateCounter() {
  // Calcular la cantidad total de productos en el carrito
  const totalItems = carrito.length; // Contamos cuántos productos hay en el carrito
  contador.textContent = totalItems;
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  if (!cartItemsContainer || !totalPriceElement) return;
  // Limpiar el contenido del carrito
  cartItemsContainer.innerHTML = "";

  if (carrito.length === 0) {
    cartItemsContainer.innerHTML = "<p>El carrito está vacío</p>";
    totalPriceElement.textContent = "0,00 $";
    return;
  }

  // Calcular el total
  let total = 0;

  // Añadir cada producto al carrito
  carrito.forEach((producto) => {
    total += producto.precio;

    const li = document.createElement("li");
    li.innerHTML = `
<img src="${producto.imagen}" alt="${producto.nombre}">
<div>
  <p>${producto.nombre}</p>
  <p>${producto.autor}</p>
  <p>${producto.precio.toLocaleString("es-AR")} $</p>
</div>
`;
    cartItemsContainer.appendChild(li);
  });

  // Actualizar el precio total
  totalPriceElement.textContent = `${total.toLocaleString("es-AR")} $`;
}

// Agregar eventos a los botones "Agregar al carrito"
document.querySelectorAll(".btn-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productId = parseInt(
      this.closest(".course-price").getAttribute("data-id")
    );
    agregarAlCarrito(productId);
  });
});

// Inicializar la vista del carrito
actualizarCarrito();
updateCounter();
