// Expresiones regulares y métodos de busqueda
// https://regexr.com
let texto_largo = "Extraídos de más de 400 mil materias y 55 publicaciones, los resultados del estudio cuestionan la opinión de que la única cosa que las personas quieren son 'materias blandengues (Justin Bieber), asuntos rápidos, sin profundidad, o 'artículos- listas' (‘7 cosas que tu debes saber sobre el cabello de Donald Trump’)', dice el director-executivo del API, Tom Rosenstiel."
console.log(texto_largo.match(/de/g))

//Buscar palabras dentro del texto
console.log(texto_largo.includes("rápidos"))

// Saber si un texto empieza con una determinada palabra
console.log(texto_largo.startsWith("Extraídos de más d"))

//Saber si un texto termina con una determinada palabra
console.log(texto_largo.endsWith("Rosenstiel."))