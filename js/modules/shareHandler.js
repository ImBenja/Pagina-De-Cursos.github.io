export function handleShareButtons() {
  const shareButtons = document.querySelectorAll(".share");
  shareButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const listSocial = e.target
        .closest(".social-buttons")
        .querySelector(".container-links");
      listSocial.classList.toggle("activeList");
    });
  });
}
