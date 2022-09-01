// Métodos más utilizados con cadenas de caracteres
// Como obtener la longitud se un string
let str = "soy un string"
console.log(str.length)

// Obtenre partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(4,11)
console.log(slice_str)

let substring_str = str.substring(4,11)
console.log(substring_str)

let substr_str = str.substr(4,9)
console.log(substr_str)

// Remplazar parte del contenido de una cadena de texto
let cadena = "Mi nombre es Gaby"
console.log(cadena)
console.log(cadena.replace("Gaby", "Juan")) 

//Replace solo actua sobre la primer instancia (en los casos en los que haya más de una instancia)
let texto_largo = "Extraídos de más de 400 mil materias y 55 publicaciones, los resultados del estudio cuestionan la opinión de que la única cosa que las personas quieren son 'materias blandengues (Justin Bieber), asuntos rápidos, sin profundidad, o 'artículos- listas' (‘7 cosas que tu debes saber sobre el cabello de Donald Trump’)', dice el director-executivo del API, Tom Rosenstiel."
console.log(texto_largo.replace("la", "cinco"))

// La expreción regular /g (global), remplaza todas las instasncias
console.log(texto_largo.replace(/la/g, "cinco"))
