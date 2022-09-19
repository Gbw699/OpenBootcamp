//carga y sobrecarga de funciones (stack overflow)
function saludar() {
  hola();
}
function hola() {
  console.log("Hola, soy la función hola()");
}
saludar();

function recursiva() {
  recursiva();
}
console.log(recursiva());
