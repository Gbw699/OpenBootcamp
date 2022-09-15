//trabajando con fechas (4 formas)
let date = new Date();
console.log(date);
console.log(date.toLocaleDateString());

let date2 = new Date(1967, 11, 31);
console.log(date2);
console.log(date2.toLocaleDateString());

let date3 = new Date(0);
console.log(date3);
console.log(date3.toLocaleDateString());

let date4 = new Date("December 27, 1988 11:35:56");
console.log(date4);
console.log(date4.toLocaleTimeString());

//comparación de fechas
console.log(date > date3);
let date5 = new Date(0);
console.log(date3.getTime() === date5.getTime());

//cómo obtener día, mes y año de una fecha
let dia = date2.getDate();
console.log(dia);

let mes = date2.getMonth() + 1;
console.log(mes);

let año = date2.getFullYear();
console.log(año);

//cómo mostrar una fecha en un string
console.log(date2.toLocaleDateString());
