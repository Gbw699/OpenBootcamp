//Métodos más avanzados
//.map
let arrayPaises = ["Argentina", "Chile", "Bolivia"];
let arrayPaisesMap = arrayPaises.map(
  (value, index) => `${index + 1} - ${value}`
);
console.log(arrayPaisesMap);

//.filter
let arrayObj = [
  { nombre: "gaby", edad: 23 },
  { nombre: "juan", edad: 19 },
  { nombre: "pedro", edad: 30 },
  { nombre: "miguel", edad: 27 },
  { nombre: "juanca", edad: 33 },
  { nombre: "luis", edad: 17 },
];
let arrayObjFilter = arrayObj.filter((predicate) => predicate.edad > 25);
console.log(arrayObjFilter);

let arrayObjFilter2 = arrayObj.filter(
  (predicate) => predicate.nombre !== "miguel"
);
console.log(arrayObjFilter2);

//.reduce
let arraySum = [3, 45, 62, 7, 9, 32];
let arraySumReduce = arraySum.reduce((acumulado, cur, i, arrayOriginal) => {
  console.log(acumulado);
  console.log(cur);
  console.log(i);
  console.log(arrayOriginal);
  return acumulado + cur;
});
console.log(arraySumReduce);
let arraySumReduce2 = arraySum.reduce((acumulado, cur) => acumulado + cur);
console.log(arraySumReduce2);
