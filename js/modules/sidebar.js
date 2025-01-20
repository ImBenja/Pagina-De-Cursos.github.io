export function setupSidebar() {
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

  /* EVENTOS PARA LINKS EN MOBILE */
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
}
