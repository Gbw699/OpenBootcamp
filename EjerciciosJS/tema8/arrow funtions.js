//funciones de tipo flecha (arrow funtion) - funciones anónimas(funciones sin nombre)
let array = [1, 4, 5, 2, 76, 23, 7, 9];
const array2 = array.map((call) => call * 2);
console.log(array2);

//difenrencia entre una arrow y una función clásica
const dobleArrow = (call) => call * 2;

console.log(doble(6));
console.log(dobleArrow(6));

function doble(valor) {
  return valor * 2;
}

console.log(array.map(dobleArrow));
