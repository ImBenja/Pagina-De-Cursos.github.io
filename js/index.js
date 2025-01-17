const likeButtons = document.querySelectorAll(".like");
const ContaiLike = document.querySelectorAll(".container-like");
const ContaiDeslike = document.querySelectorAll(".container-deslike");
const textLike = document.querySelectorAll(".like-text");
const textDeslike = document.querySelectorAll(".deslike-text");

likeButtons.forEach((btnLike) => {
  btnLike.addEventListener("click", () => {
    btnLike.classList.toggle("activated");

    // Animación del corazón
    const animation = document.createElement("div");
    animation.classList.add("like-animation");
    animation.textContent = "❤";
    btnLike.appendChild(animation);

    // Eliminar la animación después de un tiempo
    setTimeout(() => {
      animation.remove();
    }, 1000);

    // Cambiar el texto cuando se hace click en el like
    if (btnLike.classList.contains("activated")) {
      ContaiLike.forEach((text) => {
        text.classList.add("show");
        setTimeout(() => {
          text.classList.remove("show"); // Ocultar después de 2 segundos
        }, 2000);
        textLike.forEach((text) => {
          text.textContent = "¡Se agrego el curso a tu Lista de Deseados!";
        });
      });
    } else {
      ContaiDeslike.forEach((text) => {
        text.classList.add("show"); // Mostrar con transición
        setTimeout(() => {
          text.classList.remove("show"); // Ocultar después de 2 segundos
        }, 2000);
        textDeslike.forEach((text) => {
          text.textContent = "¡Se elimino de tu Lista de Deseados!";
        });
      });
    }
  });
});

const shareButtons = document.querySelectorAll(".share");
shareButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const listSocial = e.target
      .closest(".social-buttons")
      .querySelector(".container-links");
    listSocial.classList.toggle("activeList");
  });
});

const fechaObjetivo = new Date("2025-02-31T23:59:59");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    document.getElementById("contador").innerText = "¡Oferta Terminada!";
    clearInterval(intervalo);
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById(
    "contador"
  ).innerText = `${dias}D : ${horas}H : ${minutos}M : ${segundos}S`;
}

// Actualizar cada segundo
const intervalo = setInterval(actualizarContador, 1000);

// Llamar inmediatamente para evitar el retraso inicial
actualizarContador();

// <----------------------ACORDEON----------------------------->
const accordionContainers = document.querySelectorAll(".accordion-container");
const panels = document.querySelectorAll(".panel");

// Expand the first panel by default

// Add event listener to each accordion container
accordionContainers.forEach((accordionContainer, index) => {
  accordionContainer.addEventListener("click", () => {
    // Toggle the 'active' class to show or hide the content
    accordionContainer.classList.toggle("active");

    // Get the corresponding panel
    const panel = accordionContainer.nextElementSibling;

    // Expand or collapse the panel
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; // Collapse
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"; // Expand
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar-container");
  const overlay = document.querySelector(".sidebar-overlay");
  const openButton = document.querySelector(".menu-toggle");
  const closeButton = document.querySelector(".menu-close");
  const body = document.getElementById("contPag");

  // Abrir sidebar
  openButton.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    body.style.overflow = "hidden";
  });

  // Cerrar sidebar
  closeButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    body.style.overflowY = "auto";
  });
});

/* EVENTOS PARA LINKS EN MOBILE */
document.addEventListener("DOMContentLoaded", () => {
  const toggleCourses = document.querySelectorAll(
    ".sidebar-link.toggleCourses"
  ); // Todos los toggles
  const coursesLists = document.querySelectorAll(".courses-list"); // Todas las listas
  const flechas = document.querySelectorAll(".bi-arrow-down-short.flecha"); // Todas las flechas
  const toggleCursos = document.querySelectorAll(".dropdown-cursos.cursoSide"); // Todas las dropdown-cursos
  const contaiCurs = document.querySelectorAll(".sidebar-container.cur"); // Todas las sidebar-container.cur
  const cerrarContaiCurs = document.querySelectorAll(".menu-close-cur"); // Todos los botones cerrar

  // Iterar sobre todos los toggles de cursos
  toggleCourses.forEach((toggle, index) => {
    const coursesList = coursesLists[index]; // Lista correspondiente
    const flecha = flechas[index]; // Flecha correspondiente

    // Configuración inicial para cada lista
    coursesList.style.transition = "max-height 1s ease, opacity 1s ease";
    coursesList.style.overflow = "hidden";
    coursesList.style.maxHeight = "0";
    coursesList.style.opacity = "0";

    toggle.addEventListener("click", (event) => {
      event.preventDefault();

      if (coursesList.style.maxHeight === "0px") {
        // Mostrar la lista
        coursesList.style.maxHeight = "500px"; // Ajusta según el contenido
        coursesList.style.opacity = "1";
        flecha.style.transform = "rotate(180deg)";
      } else {
        // Ocultar la lista
        coursesList.style.maxHeight = "0";
        coursesList.style.opacity = "0";
        flecha.style.transform = "rotate(0deg)";
      }
    });
  });

  // Iterar sobre todos los .dropdown-cursos
  toggleCursos.forEach((togglecurso, index) => {
    togglecurso.addEventListener("click", () => {
      contaiCurs[index].classList.add("active"); // Usa el índice correspondiente
    });
  });

  // Iterar sobre todos los botones de cerrar
  cerrarContaiCurs.forEach((cerrarContaiCur, index) => {
    cerrarContaiCur.addEventListener("click", () => {
      contaiCurs[index].classList.remove("active"); // Usa el índice correspondiente
    });
  });
});

const accordionTemario = document.querySelectorAll(".acordeon-item");

accordionTemario.forEach((accordionTemarios, index) => {
  accordionTemarios.addEventListener("click", () => {
    const paneles = accordionTemarios.nextElementSibling;

    if (paneles.style.maxHeight) {
      paneles.style.maxHeight = null; // Collapse
    } else {
      paneles.style.maxHeight = paneles.scrollHeight + "px"; // Expand
    }
  });
});
