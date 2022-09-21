class Persona {
  //private -> # (solo puede usarse dentro de la clase)
  #edad;
  //protected -> _ (solo puede usarse dentro de la clase y las clases sucesoras)
  //   _tiempoDeVida;
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.#edad = edad;
  }
  saludo() {
    console.log(`Hola soy ${this.nombre}, tengo ${this.#edad} años`);
  }
  obtenerEdad() {
    return this.#edad;
  }
  //NO FUNCIONA
  //   _tiempoDeVida(edad) {
  //     this.#edad = edad;
  //     return 100 - edad;
  //   }
}

const persona = new Persona("Gaby", 40);
console.log(persona);
persona.saludo();
console.log(persona.edad);
console.log(persona.obtenerEdad());
