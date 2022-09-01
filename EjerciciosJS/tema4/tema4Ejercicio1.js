let nombre = "Gabriel";
console.log(nombre)

let apellido = "Barimboim";
console.log(apellido)

let estudiante = `${nombre} ${apellido}`;
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)

let num_letras = estudiante.length;
console.log(num_letras)

let first_let = nombre[0];
console.log(first_let)

let last_let = apellido[apellido.length-1]
console.log(last_let)

let nonSpaceEstudiante = estudiante.replace(" ", "");
console.log(nonSpaceEstudiante)

let cont = estudiante.startsWith(nombre)
console.log(cont)
