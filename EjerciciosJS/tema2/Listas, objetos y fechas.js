// Listas, array o arreglo
const lista = [1, "hola", true, null, undefined];
const lista2 = new Array(1, "hola", true, null, undefined);
const lista3 = new Array(3);
(lista3[0] = "soy el primer elemnto"), 5;
const lista4 = [lista, lista2, lista3];

console.log(lista, lista2, lista3, lista4);

//objetos
const movil = {
  altura: 10,
  anchura: 20,
  marca: "xiaomi",
  iswhite: false,
  contactos: ["Pedro", "Jose", "Pepe"],
  tarjeta: {
    marca: "Sandisk",
    almacenamiento: 32,
  },
  "altura-tarjerta": 4,
};

console.log(movil.marca, movil.tarjeta.almacenamiento);

//Fechas
// Librerias de apoyp Moment.js
const ahora = new Date();
const fecha_millis = new Date(10);
const fecha_cadena = new Date("march 25 2020");
const fecha_valores = new Date(2022, 0, 15);
const dia = ahora.getDate();
const mes = ahora.getMonth();
const año = ahora.getFullYear();

console.log(ahora);
console.log(fecha_millis);
console.log(fecha_cadena);
console.log(fecha_valores);
console.log(dia, mes, año);
