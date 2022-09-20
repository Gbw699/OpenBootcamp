//gestión de errores
const miFuncion = (val) => {
  if (typeof val === "number") {
    return 2 * val;
  }
  throw new Error("El valor debe ser de tipo número");
};
const numero = "8";

try {
  const doble = miFuncion(numero);
  console.log(doble);
} catch (e) {
  console.error(e);
} finally {
  console.log("Esto se ejecuta siempre");
}

//InternalError, SyntaxError, TypeError, RangeError, ReferenceError
