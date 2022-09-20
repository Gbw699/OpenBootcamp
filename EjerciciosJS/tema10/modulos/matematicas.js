function suma(a, b) {
  return a + b;
}

function factorial(a) {
  let factorial = 1;
  for (i = 2; i <= a; i++) {
    factorial *= i;
  }
  return factorial;
}

function eleva(a, b) {
  return a ** b;
}

//CommonJS
module.exports = {
    suma,
    factorial,
    eleva
}