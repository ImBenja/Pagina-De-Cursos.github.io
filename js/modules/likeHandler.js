export function handleLikeButtons() {
  const likeButtons = document.querySelectorAll(".like");
  const ContaiLike = document.querySelectorAll(".container-like");
  const ContaiDeslike = document.querySelectorAll(".container-deslike");
  const textLike = document.querySelectorAll(".like-text");
  const textDeslike = document.querySelectorAll(".deslike-text");

  likeButtons.forEach((btnLike) => {
    btnLike.addEventListener("click", () => {
      btnLike.classList.toggle("activated");
      const animation = document.createElement("div");
      animation.classList.add("like-animation");
      animation.textContent = "❤";
      btnLike.appendChild(animation);

      setTimeout(() => {
        animation.remove();
      }, 1000);

      if (btnLike.classList.contains("activated")) {
        ContaiLike.forEach((text) => {
          text.classList.add("show");
          setTimeout(() => text.classList.remove("show"), 2000);
          textLike.forEach((text) => {
            text.textContent = "¡Se agregó el curso a tu Lista de Deseados!";
          });
        });
      } else {
        ContaiDeslike.forEach((text) => {
          text.classList.add("show");
          setTimeout(() => text.classList.remove("show"), 2000);
          textDeslike.forEach((text) => {
            text.textContent = "¡Se eliminó de tu Lista de Deseados!";
          });
        });
      }
    });
  });
}
