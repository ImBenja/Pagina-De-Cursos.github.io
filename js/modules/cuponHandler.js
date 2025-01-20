export function setupCuponHandler() {
  const btnCupon = document.querySelector(".btn-close-cupon");
  const contaiCupon = document.querySelector(".container-info-cupon");
  const courcePrice = document.querySelector(".course-price");
  btnCupon.addEventListener("click", () => {
    contaiCupon.style.display = "none";
    courcePrice.style.height = "890px";
  });
}
