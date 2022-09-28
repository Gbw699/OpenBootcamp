const hTexto = document.getElementById("h-texto");

hTexto.addEventListener("cambioTexto", (evento) => {
  console.log(evento.detail);
  hTexto.innerText = evento.detail.texto;
  hTexto.style.color = evento.detail.color;
});

function cambiarTaexto(nuevoTexto, color) {
  const evento = new CustomEvent("cambioTexto", {
    detail: {
      texto: nuevoTexto,
      color,
    },
  });
  hTexto.dispatchEvent(evento);
}
