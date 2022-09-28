const btn1 = document.querySelector("#btn");

btn1.addEventListener("click", () => {
  alert("click en el botón");
});

$("#btn").click(() => {
  console.log("Hola, estoy utilizando jQuery");
});
