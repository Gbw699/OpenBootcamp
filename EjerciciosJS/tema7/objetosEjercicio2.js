let obj = {
  nombre: "Gaby",
  apellido: "Barimboim",
  edad: 23,
  altura: 1.78,
  eresDesarrollador: true,
};


let edad = obj.edad;
console.log(edad);


let obj2 = new Object();
let obj3 = new Object();
let array = [
  obj,
  (obj2 = {
    nombre: "Aaron",
    edad: 24,
    altura: 1.79,
    eresDesarrollador: true,
  }),
  (obj3 = {
    nombre: "Ari",
    edad: 23,
    altura: 1.85,
    eresDesarrollador: true,
  }),
];
console.log(array);


let array2 = array.sort((a, b) => b.edad - a.edad);
console.log(array2);
