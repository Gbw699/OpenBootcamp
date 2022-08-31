// Bifurcaciones if...else
let saldo = 50;
let efectivo = 70;

if (efectivo < saldo) {
  console.log("Puedes sacar dinero");
}

if (efectivo < saldo) {
  console.log("Puedes sacar dinero");
} else {
  console.log("Saldo insufieciente");
}

// if else - else if
let nota = 4;

if (nota === 5) {
  console.log("Aprobado con 5");
} else if (nota === 4) {
  console.log("Aprobado con 4");
} else if (nota === 3) {
  console.log("Aprobado con 3");
} else if (nota === 2) {
  console.log("Desaprobado con 2");
} else if (nota === 1) {
  console.log("Desaprobado con 1");
} else {
  console.log("Error, introduce una nota entre el 1 y el 5");
}

// switch (es buena práctica poner un valor predeterminado default)
switch (nota) {
  case 5:
    console.log("Aprobado con 5");
    break;
  case 4:
    console.log("Aprobado con 4");
    break;
  case 3:
    console.log("Aprobado con 3");
    break;
  case 2:
    console.log("Desaprobado con 2");
    break;
  case 1:
    console.log("Desaprobado con 1");
    break;
  default:
    console.log("Error");
    break;
}
