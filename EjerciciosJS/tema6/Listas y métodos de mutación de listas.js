//como trabajar con listas
let array = [1, "hola", { altura: 5 }, true];
console.log(array);

//acceder a los valores de un array a traves de su posisción
console.log(array[2]);

//metodos para introducir nuevos valores a nuestro array
//valores al final
array.push(5, 7, 2);
console.log(array);
//valores al principio
array.unshift(5, 7, 2);
console.log(array);

//Metodos para eliminar valores en nuestro array
//valores al final
array.pop();
console.log(array);
//valores al principio
array.shift();
console.log(array);

//Metodo para eliminar, modificar o añadir valores a nuestro array
//Eliminar valores
array.splice(2, 1);
console.log(array);
//Añadir valores
array.splice(3, 0, "nuevo valor");
console.log(array);
//Modificar valores
array.splice(4, 2, "6");
console.log(array)
