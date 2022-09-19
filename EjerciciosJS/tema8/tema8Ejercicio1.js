function sinParametros() {
  return true;
}
console.log(sinParametros());

// const promesa = new Promise((resolve) => {
//   setTimeout(() => resolve(), 5000);
// });

// promesa.then(() => console.log("Hola soy una promesa"));

function asicro() {
  setTimeout(() => asicro, 5000);
  return "Hola soy una promesa";
}
console.log(asicro());

function* generadoraIndice() {
  let ind = 0;
  while (true) {
    ind += 2;
    yield ind;
  }
}

const indice = generadoraIndice();

console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
console.log(indice.next().value);
