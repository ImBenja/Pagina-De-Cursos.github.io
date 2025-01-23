import { handleLikeButtons } from "./modules/likeHandler.js";
import { initializeCountdown } from "./modules/countdown.js";
import { handleShareButtons } from "./modules/shareHandler.js";
import { setupAccordion } from "./modules/accordion.js";
import { setupAccordionTemario } from "./modules/acordionTemario.js";
import { setupSidebar } from "./modules/sidebar.js";
import { setupModal } from "./modules/modal.js";
import { setupCuponHandler } from "./modules/cuponHandler.js";
import { inputHandler } from "./modules/inputHandler.js";
import { descriptionCurso } from "./modules/descriptionHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  handleLikeButtons();
  initializeCountdown();
  handleShareButtons();
  setupAccordion();
  setupAccordionTemario();
  setupSidebar();
  setupModal();
  setupCuponHandler();
  inputHandler();
  descriptionCurso();
});

/*<---------------------------------------------------------- CARRITOO PARA LA PAG PRINCIPAL ----------------------------------------------->/* */
const contador = document.getElementById("contador");
const contadorMobile = document.getElementById("contador-mobi");

const productos = [
  {
    id: 1,
    nombre: "<p class='nombre-cur'>Curso de HTML</p>",
    autor: "Curso: Programacion",
    precio: 50000,
    imagen: "img/cursos/Programacion/HTML.png",
    link: "<a class='link' href='indexHTML.html'>Ver curso</a>",
  },
  {
    id: 2,
    nombre: "Curso de CSS",
    autor: "Curso: Programacion",
    precio: 50000,
    imagen: "img/cursos/Programacion/CSS.png",
    link: "<a class='link' href='indexCSS.html'>Ver curso</a>",
  },
];

// Elementos del carrito
const cartItemsContainer = document.querySelector(".cart-items");
const totalPriceElement = document.querySelector(".total-price");

// Array para almacenar los productos agregados al carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto, button) {
  const productoEnCarrito = carrito.some((prod) => prod.id === idProducto);
  const containerAgregado = document.querySelector(".container-text-cart");

  if (productoEnCarrito) {
    containerAgregado.classList.add("active");
    setTimeout(() => {
      containerAgregado.classList.remove("active");
    }, 2000);
    button.textContent = "Ir a la Cesta";
    if (button.textContent === "Ir a la Cesta") {
      button.onclick = () => {
        window.location.href = "cart.html";
      };
    }
    return;
  }

  const producto = productos.find((prod) => prod.id === idProducto);
  if (producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
    updateCounter();

    containerAgregado.classList.add("active");
    setTimeout(() => {
      containerAgregado.classList.remove("active");
    }, 2000);
    button.textContent = "Ir a la Cesta";

    if (button.textContent === "Ir a la Cesta") {
      button.onclick = () => {
        window.location.href = "cart.html";
      };
    }
  }
}

// Función para actualizar el contador
function updateCounter() {
  const totalItems = carrito.length; // Contamos cuántos productos hay en el carrito
  contador.textContent = totalItems;
  contadorMobile.textContent = totalItems;
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
  if (!cartItemsContainer || !totalPriceElement) return;

  cartItemsContainer.innerHTML = "";

  if (carrito.length === 0) {
    cartItemsContainer.innerHTML =
      "<p class='text-cart-vacio'>El carrito está vacío</p>";
    totalPriceElement.textContent = "0.00 $";
    return;
  }

  let total = 0;

  carrito.forEach((producto) => {
    total += producto.precio;

    const li = document.createElement("li");
    li.innerHTML = `
<img src="${producto.imagen}" alt="${producto.nombre}">
<div>
  <p class='nombre-cur'>${producto.nombre}</p>
  <p>${producto.autor}</p>
  <p>${producto.precio.toLocaleString("es-AR")} $</p>
  <p>${producto.link}</p>
</div>
`;
    cartItemsContainer.appendChild(li);
  });

  totalPriceElement.textContent = `${total.toLocaleString("es-AR")} $`;
}

// Agregar eventos a los botones "Agregar al carrito"
document.querySelectorAll(".btn-cart-cur").forEach((button) => {
  const productId = parseInt(
    button.closest(".course-price").getAttribute("data-id")
  );

  // Verificar si el producto ya está en el carrito al cargar la página
  const productoEnCarrito = carrito.some((prod) => prod.id === productId);
  if (productoEnCarrito) {
    button.textContent = "Ir a la Cesta";
    button.disabled = false; // Desactivar el botón
    if (button.textContent === "Ir a la Cesta") {
      button.onclick = () => {
        window.location.href = "cart.html";
      };
    }
  }

  button.addEventListener("click", function () {
    agregarAlCarrito(productId, button);
  });
});

// Inicializar la vista del carrito
actualizarCarrito();
updateCounter();
