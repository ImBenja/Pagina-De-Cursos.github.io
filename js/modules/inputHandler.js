export function inputHandler() {
  const inputField = document.querySelector(".input-cupon");

  // Agregar un evento para escuchar los cambios en el input
  inputField.addEventListener("input", () => {
    // Obtener el valor del campo, recortarlo y convertirlo a mayúsculas
    const processedInput = inputField.value.trim().toUpperCase();
    // Actualizar el valor del campo con el texto en mayúsculas
    inputField.value = processedInput;
  });
}
