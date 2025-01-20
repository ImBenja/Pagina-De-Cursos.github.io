export function descriptionCurso() {
  const toggleBtnDescrip = document.querySelector(".btn-text-description");
  const text = document.querySelector(".container-text");
  const flechaDes = document.querySelector(".bi-arrow-up-short.flechaDes");

  toggleBtnDescrip.addEventListener("click", () => {
    text.classList.toggle("expanded");
    if (toggleBtnDescrip.textContent) {
      if (text.classList.contains("expanded")) {
        toggleBtnDescrip.textContent = "Ver Menos";
        flechaDes.style.transform = "rotate(180deg)";
        flechaDes.style.borderRadius = "5px 0 0 5px";
      } else {
        toggleBtnDescrip.textContent = "Ver Mas";
        flechaDes.style.transform = "rotate(0deg)";
        flechaDes.style.borderRadius = "0 5px 5px 0";
      }
    }
  });
}
