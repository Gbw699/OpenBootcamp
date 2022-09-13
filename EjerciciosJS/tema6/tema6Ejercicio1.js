let array_compra = ["leche", "fideos", "azúcar", "vinagre", "galletas"];

array_compra.push("aceite de girasol");
console.log(array_compra);

array_compra.pop();
console.log(array_compra);

let array_peliculas = [
  { titulo: "django", director: "Tarantino", fecha: 2012 },
  { titulo: "la lista de schindler", director: "Spielberg", fecha: 1993 },
  { titulo: "cleo de 5 a 7", director: "Varda", fecha: 1962 },
];

let array_post2010 = array_peliculas.filter((value) => value.fecha > 2010);
console.log(array_post2010);

let array_directores = array_peliculas.map((call) => call.director);
console.log(array_directores);

let array_titulos = array_peliculas.map((call) => call.titulo);
console.log(array_titulos);

let array_directores_titulos = array_directores.concat(array_titulos);
console.log(array_directores_titulos);

let array_directores_titulos_propa = [...array_directores, ...array_titulos];
console.log(array_directores_titulos_propa);
