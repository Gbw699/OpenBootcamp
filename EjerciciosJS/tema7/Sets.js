//sets o conjuntos
const array = [1, 4, 2, 7, 4, 5, 7, 8];
const myset = new Set(array);
console.log(array);
console.log(myset);

//añadir valores al set
console.log(myset.add("hola"));

//eliminar valores dentro del set
console.log(myset.delete(7));
console.log(myset);

//saber si el set tiene cierto valor
console.log(myset.has(2));

//conocer el tamaño de un set
console.log(myset.size);

//cómo hacer una iteración con los elementos del set
myset.forEach((value) => {
  console.log(value);
});

//cómo hacer un objeto iterator a partir de un set
const it_myset = myset.values();
console.log(it_myset);
