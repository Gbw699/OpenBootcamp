//iterar los valores de una lista
let array = [1, "hola", 3, true];
//forma antigua
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//forma ES6 (más eficiente)
let arraySum = [3, 66, 45, 8, 1, 9];
let suma = 0
arraySum.forEach((element) => {
  suma += element;
  console.log(element);
  console.log(suma);
});
console.log(suma);

//busqueda de un valor dentro de una lista
let num = arraySum.find(i => i === 8)
console.log(num)

let array2 = [
  { nombre: "gaby", edad: 23 },
  { nombre: "juan", edad: 19 },
  { nombre: "pedro", edad: 30 },
  { nombre: "miguel", edad: 27 },
];

let objeto = array2.find((i) => i.nombre === "pedro");
console.log(objeto.edad);

let { edad } = array2.find((i) => i.nombre === "miguel");
console.log(edad);
