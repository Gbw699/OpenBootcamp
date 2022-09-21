//creación y uso de clases
class Persona {
  constructor(nombre, edad, isdeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isdeveloper = isdeveloper;
  }
  saludo() {
    console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años`);
  }
}

const persona1 = new Persona("Gaby", 23, true);
console.log(persona1);
console.log(persona1.saludo());

const persona2 = new Persona("Ari", 23, true);
console.log(persona2);
console.log(persona2.saludo());
