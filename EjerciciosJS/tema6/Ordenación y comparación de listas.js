//cómo ordenar listas
let array = [32, 7, 54, 27, 1];
let array2 = [32, 7, 54, 27, 1];
// console.log(
//   array.sort((a, b) => {
//     if (a < b) return -1;
//   })
// );

//cómo ordenar arrays numéricos
console.log(array.sort((a, b) => a - b));

//cómo ordenar un array de objetos mediante sus atributos
let arrayObj = [
  { nombre: "gaby", edad: 23 },
  { nombre: "juan", edad: 19 },
  { nombre: "pedro", edad: 30 },
  { nombre: "miguel", edad: 27 },
  { nombre: "juanca", edad: 33 },
  { nombre: "luis", edad: 17 },
];
console.log(arrayObj.sort((a, b) => a.edad - b.edad));

//cómo comparar valores de listas
console.log(array.every((value) => typeof value === "number"));

//cómo comparar listas
console.log(array2.sort((a, b) => a - b));

const compArrays = (value_1, value_2) => {
  if (value_1.length !== value_2.length) return false;
  const res = value_1.every((value, i) => value === value_2[i]);
  return res;
};

console.log(compArrays(array, array2));
console.log(array);
console.log(array2);
