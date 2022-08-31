// Bucles For
// for(inicialización; condición; actualizacion)
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

let lista = [1, 4, 6, 2, 3, 500, 10, 12];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

//Estrucutra For of
for (let valor of lista) {
  console.log(valor);
}

// Estructura For each
lista.forEach((valor) => {
  console.log(valor);
});

let persona = {
  nombre: "gaby",
  apellido: "barim",
  edad: 23,
  isDeveloper: "maybe",
};

let prop = "edad";
console.log(persona[prop]);

// Estructura for in
for (let propiedad in persona) {
  console.log(persona[propiedad]);
}

//Bucles while ---------------------------------------------------------
let i = 0;
let max = 10;
while (i < max) {
  console.log(i);
  i++;
}

// Do...while
i = 0;
do {
  console.log("Estoy en el do while");
  console.log(i);
  i++;
} while (i < max);
