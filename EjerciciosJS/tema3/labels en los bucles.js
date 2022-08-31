//labels

let unidades = 0;
let decenas = 0;

bucledecenas: while (true) {
  console.log("El numero actual es:", decenas, unidades);
  bucleunidades: while (true) {
    unidades++
    if (unidades === 10) {
      unidades = 0;
      break bucleunidades;
    }
    if (decenas === 2) {
        break bucledecenas;
      }
  }
  decenas++
}