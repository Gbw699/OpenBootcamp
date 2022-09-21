//programación orientada a objetos
const obj_persona = {
  nombre: "gaby",
  edad: 23,
  isdeveloper: true,
  saludo: () => {
    console.log("Hola!!");
  },
};

console.log(obj_persona);
console.log(obj_persona.saludo());

//factory funtion
const creaPersona = (nombre, edad, isdeveloper) => {
  return {
    nombre,
    edad,
    isdeveloper,
  };
};

const persona = creaPersona("aaron", 24, true);
console.log(persona);
