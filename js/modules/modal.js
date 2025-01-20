export function setupModal() {
  const modalShare = document.querySelector(".modal-share");
  const btnShare = document.querySelector(".btn-aside.share");
  const btnCloseShare = document.querySelector(".btn-modal-close");
  const body = document.getElementById("contPag");

  btnShare.addEventListener("click", () => {
    modalShare.classList.add("active");
    body.style.overflow = "hidden";
  });

  btnCloseShare.addEventListener("click", () => {
    modalShare.classList.remove("active");
    body.style.overflow = "auto";
  });

  document.getElementById("copiarBtn").addEventListener("click", function () {
    // Seleccionamos el texto que queremos copiar
    const texto = document.getElementById("textoACopiar").innerText;

    // Usamos la API de portapapeles para copiarlo
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        // Mostramos un mensaje de confirmación
        const mensaje = document.querySelector(".container-text-true");
        mensaje.classList.add("active");

        // Ocultamos el mensaje después de 2 segundos
        setTimeout(() => {
          mensaje.classList.remove("active");
        }, 2000);
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  });
}
