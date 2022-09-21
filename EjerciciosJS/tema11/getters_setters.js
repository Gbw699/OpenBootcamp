class Persona {
  #edad;
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.#edad = edad;
  }
  //getters -> métodos que nos permiten acceder a atributos/métodos privados o protegidos
  getEdad() {
    return this.#edad;
  }
  //setter -> métodos que nos permite cambiar el valor de algún atributo privado o protegido
  setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
    return this.#edad;
  }
}

const persona = new Persona("Gaby", 54);
console.log(persona.getEdad());
console.log(persona.setEdad(23));
console.log(persona.getEdad());
