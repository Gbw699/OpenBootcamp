const btn1 = document.querySelector("#btn-1");

btn1.addEventListener("click", () => {
  console.log(alert);
  alert("Esto es una alerta");
});
//--------------------
const btn2 = document.querySelector("#btn-2");

btn2.addEventListener("click", () => {
  confirm("¿Quiere continuar con el proceso?")
    ? console.log("ok")
    : console.log("not ok");
});
//---------------------
const btn3 = document.querySelector("#btn-3");

btn3.addEventListener("click", () => {
  const nombre = prompt("Cuál es tu nombre?");
  if (nombre) {
    console.log("El nombre ingresado es " + nombre);
  } else {
    console.log("No se ingresó ningún nombre");
  }
});
//-------------------------
const btn4 = document.querySelector("#btn-4");

const arrayObj = [
  { nombre: "gaby", edad: 23 },
  { nombre: "juan", edad: 45 },
  { nombre: "pedro", edad: 34 },
];

btn4.addEventListener("dblclick", () => {
  console.table(arrayObj);
});
