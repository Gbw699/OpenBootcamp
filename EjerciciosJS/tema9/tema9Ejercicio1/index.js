const logger = require("./logger");

const doble = (val) => {
  if (typeof val === "number") {
    return val * 2;
  }
  throw new Error("El valor debe ser un número");
};

try {
  logger.info(doble("nan"));
} catch(e) {
  logger.error(String(e));
}



