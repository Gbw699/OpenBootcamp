let n = 10;
let i = 1;
let resultado = 1;

while (i <= n) {
  resultado = resultado * i;
  if (i <= 7) {
    i++;
  } else {
    break;
  }
  console.log(resultado);
}
