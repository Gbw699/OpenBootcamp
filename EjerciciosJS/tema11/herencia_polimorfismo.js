class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}

//herencia
class Desarrollador extends Persona {
  constructor(nombre, edad, lenguaje) {
    super(nombre, edad);
    this.lenguaje = lenguaje;
  }
  //polimorfismo
  saludo() {
    super.saludo();
    console.log(`y soy desarrollador de ${this.lenguaje}`);
  }
}

const desarrollador = new Desarrollador("Gaby", 23, "JS");
console.log(desarrollador);
desarrollador.saludo();
