//trabajando con objetos
let obj = {
  id: 4,
  nombre: "gaby",
  año: 1999,
  soltero: true,
  "5-gusto": ["películas", "música"],
};

//invocar propiedades de objetos ("2 opciones")
console.log(obj.año);
console.log(obj["5-gusto"]);

//invocar propiedades de un objetos mediante una variable
let obj2 = obj.nombre;
console.log(obj2);

//herencia en objetos (probar)
let obj3 = obj;
console.log(obj3);
obj3.nombre = "pedro";
console.log(obj3);
console.log(obj);

//herencia en objetos mediante la propagación
let obj4 = { ...obj };
console.log(obj4);
obj4.nombre = "gaby";
console.log(obj4);
console.log(obj);

//Cómo ordernar lista de objetos en función de una propiedad
const array_películas = [
  { pelicula: "Django", año: 2004 },
  { pelicula: "Tiempos Modernos", año: 1940 },
  { pelicula: "Star wars", año: 1980 },
];
console.log(array_películas.sort((a, b) => a.año - b.año));
