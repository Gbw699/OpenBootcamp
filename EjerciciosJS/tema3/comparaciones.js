// Comparaciones

// Igualdad
// == solo compara el valor
// === compara el valor y el tipo
if (5 == "5") {
  console.log("5 es igual a 5");
}
if (5 === 5) {
  console.log("5 es muy igual a 5");
}

// Desigualdad
// != solo compara el valor
// !== compara el valor o el tipo
let c = 4;
let d = "4";

if (c != d) {
  console.log("c es diferente a d");
}
if (c !== d) {
  console.log("c es diferente a d");
}

// comparaciones mayor que y menor que
let max = 5;
let min = 5;

if (max > min) {
  console.log("max es mayor que min");
}
if (max >= min) {
    console.log("max es mayor o igual que min");
  }
  if (max < min) {
    console.log("max es menor que min");
  }
  if (max <= min) {
    console.log("max es menor o igual que min");
  }    