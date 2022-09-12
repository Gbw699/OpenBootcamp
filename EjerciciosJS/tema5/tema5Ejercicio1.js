//altura en centímetros
let alt_cent = 175;

//altura en metros
let alt_metros = 1.75;

//peso en kilogramos
let peso_kilo = 75.7;

//altura en metros redondeado hacia arriba
let alt_redondeado = Math.round((alt_metros * 100) / 100);
console.log(alt_redondeado);

//peso en kilogramos redondeado hacia abajo
let peso_redondeado = peso_kilo.toFixed() - 1;
console.log(peso_redondeado);

//última variable
let max = ("Number.MAX_VALUE + 1" == Number.MAX_VALUE);
console.log(max);
