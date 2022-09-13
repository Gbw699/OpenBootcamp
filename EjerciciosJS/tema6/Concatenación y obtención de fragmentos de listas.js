//cómo unir dos listas
const array1 = ["hola", 1, "adios"];
const array2 = ["chau", 7, "buenas"];
console.log(array1.concat(array2));

//cómo unir dos listas con el factor de propagación
console.log(...array1, ...array2);
const array3 = [...array1, ...array2];
console.log(array3);

//malentendido sobre el concepto de propagación
const array4 = [array1, array2];
console.log(array4);

//cómo obtener una lista a partir de otra lista
console.log(array3.slice(2, 4));
console.log(array3.slice(2, -2));
console.log(array3.slice(2));
console.log(array3.slice(0,4));
