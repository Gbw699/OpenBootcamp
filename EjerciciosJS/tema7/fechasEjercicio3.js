let date = new Date();
console.log(date);

let date2 = new Date(1999, 2, 15);
console.log(date2);
console.log(date2.toLocaleDateString());

let comparacion = date > date2;
console.log(comparacion);

let dia = date2.getDate();
console.log(dia);

let mes = date2.getMonth() + 1;
console.log(mes);

let año = date2.getFullYear();
console.log(año);
