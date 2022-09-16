//qué son las funciones, cómo se declaran, y cómo se utilizan
//función (saludarPersona)
saludarPersona("Gaby");

function saludarPersona(parametro) {
  console.log(`Hola ${parametro}`);
}

//función (saludarPersona) variando propiedades del objeto
let persona = { nombre: "Pedro", apellido: "Gomez" };
console.log(persona);

saludarPersona2(persona);
console.log(persona);

function saludarPersona2(parametro) {
  parametro.apellido = "Ramirez";
  console.log(`Hola ${parametro.nombre} ${parametro.apellido}`);
}

//función con parámetros por defecto (imprimeNumero)
function imprimeNumero(numero = 3) {
  return numero;
}
console.log(imprimeNumero());

//función con método de propagación (suma)
function suma(...numeros) {
  return numeros.reduce((a, b) => a + b);
}
console.log(suma(1, 2, 3, 4, 9));

//ámbito de las funciones (multiplicar)
let numero = 5;
function multiplicar(a, b = 4) {
  let numero2 = b;
  return a * b;
}
console.log(numero);
console.log(multiplicar(numero));
console.log(numero2);
