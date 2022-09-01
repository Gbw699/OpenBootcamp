// Manipulación de cadenas de textos
let input = "Escorpio"
let db = "escorpio"
console.log(input === db)

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase === db.toLowerCase)

// Formas de concatenar dos cadenas de caracteres
let str_1 = "primer cadena "
let str_2 = "segunda cadena "
console.log(str_1.concat(str_2, "otra cadena"))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inicio y al final
let str_3 = " soy un string con un espacio al principio y dos al final  "
console.log(str_3.length)

console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string núemro 4"
console.log(str_4.charAt(5))
console.log(str_4[5])

// Obtener la posicion de una palabara dentro de una cadena de texto
let str_5 = "Hola soy Gaby y me gusta algo. Gaby"
console.log(str_5.indexOf("Gaby"))
console.log(str_5.lastIndexOf("Gaby"))