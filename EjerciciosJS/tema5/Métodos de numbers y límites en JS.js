// operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

//NaN (Not a Number) - Infinity
let n = Number("hola nan");
console.log(n);
console.log(isNaN(n));

let numerador = 20;
let divisor = 9;
console.log((numerador / divisor).toFixed(2));

let divisor_2 = 0;
let divisor_3 = null;
console.log(numerador / divisor_2);
console.log(numerador / divisor_3);

// Cómo convetir los string a valores numéricos con Number, parseInt, y parseFloat
let num = "5.89";
let num2 = 17.2;
console.log(num + num2);
console.log(Number(num) + num2);
console.log(parseInt(num));
console.log(parseFloat(num));

// núemros hexadecimales (base 16)
let numHex = "0x3a5b7";
console.log(parseInt(numHex));
console.log(parseInt(numHex + 5));
console.log(numHex + 5);

// Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision)
console.log(min_valor_JS)
console.log(max_valor_JS)