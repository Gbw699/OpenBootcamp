// Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Representación de los números en cadenas de texto
console.log(typeof a);
let a_str = a.toString();
console.log(a_str);
console.log(typeof a_str);

// Redondeo de núemros decimales
let c = 3.3;
let d = c * 3;
console.log(d)
console.log(typeof d);

// .toFixed() - limita el número de decimales según el parámetro
console.log(d.toFixed(3))
console.log(typeof d.toFixed(3));

// .toPrecision() limita el núemro de cifras significativas según el parametro (notación científica)
console.log(d.toPrecision(3))
console.log(typeof d.toPrecision(3));
