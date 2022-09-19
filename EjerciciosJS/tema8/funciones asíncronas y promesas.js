//funciones asíncronas
function miAsincro() {
  //hace una llamada a una base de datos externa
  //puede darnos algún error
}

//promesas
const miPromesa = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});
miPromesa
  .then(() => console.log("se ha ejecutado de forma correcta"))
  .catch(() => console.log("error"))
  .finally(() => console.log("siempre se ejcuta"));
