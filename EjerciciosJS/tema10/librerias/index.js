import axios from "axios";

axios
  .get("https://pokeapi.co/api/v2/pokemon/gaby")
  .then(function (response) {
    // handle success
    console.log("Sucess!!!");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!!");
    console.log(error);
  });
