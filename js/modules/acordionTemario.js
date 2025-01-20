export function setupAccordionTemario() {
  const accordionTemario = document.querySelectorAll(".acordeon-item");

  accordionTemario.forEach((accordionTemarios) => {
    accordionTemarios.addEventListener("click", () => {
      // Recorremos todos los acordeones
      accordionTemario.forEach((item) => {
        const panel = item.nextElementSibling;

        // Si el panel no pertenece al elemento clicado, se colapsa
        if (item !== accordionTemarios) {
          panel.style.maxHeight = null;
        }
      });

      // Obtenemos el panel asociado al acordeón clicado
      const paneles = accordionTemarios.nextElementSibling;

      // Alternamos el estado del panel actual
      if (paneles.style.maxHeight) {
        paneles.style.maxHeight = null; // Collapse
      } else {
        paneles.style.maxHeight = paneles.scrollHeight + "px"; // Expand
      }
    });
  });
}
