const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    parrafo.classList.add("modify");
    event.dataTransfer.setData("id", parrafo.id);
  });
  parrafo.addEventListener("dragend", (e) => {
    parrafo.classList.remove("modify");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  seccion.addEventListener("drop", (event) => {
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
    if (seccion.id === "papelera") {
      seccion.removeChild(parrafo);
    }
  });
});
