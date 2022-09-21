class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
  }

  asignaturas = ["Javascript", "HTML", "CSS"];

  obtenDatos(datos) {
    datos = { nombre: this.nombre, asignaturas: this.asignaturas };
    console.log(datos);
  }
}

const estudiante = new Estudiante("Gabriel");
estudiante.obtenDatos();
