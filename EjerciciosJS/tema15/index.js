let nombre = "gaby";
let apellido = "barimboim";
let obj = { nombre, apellido };

sessionStorage.setItem("objeto", JSON.stringify(obj));
localStorage.setItem("objeto", JSON.stringify(obj));
document.cookie = `objeto=${JSON.stringify(obj)}; max-age=120`
