//cómo identificar si existe cierto objento en una lista
let array = [3, 24, 67, 2, 7, 1, 34, 86, 9];
console.log(array.some((value) => value > 80));
console.log(array.some((value) => value === 8));

//cómo obtener una lista a partir de un objeto iterable
let str = "Hola soy un string";
let arrayStr = Array.from(str);
console.log(arrayStr);

//cómo obtener los valores iterables de un array
let keys = array.keys();
console.log(keys);

let ar_keys = Array.from(keys);
console.log(ar_keys);
