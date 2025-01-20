export function initializeCountdown() {
  const fechaObjetivo = new Date("2025-02-31T23:59:59");
  const contador = document.getElementById("contador-oferta");

  function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
      contador.innerText = "¡Oferta Terminada!";
      clearInterval(intervalo);
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    contador.innerText = `${dias}D : ${horas}H : ${minutos}M : ${segundos}S`;
  }

  const intervalo = setInterval(actualizarContador, 1000);
  actualizarContador();
}
