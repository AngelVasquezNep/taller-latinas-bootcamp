function getDataFromURLAPI(url, handleRequestData) {
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log({ json });

      if (handleRequestData) {
        handleRequestData(null, json);
      }
    })
    .catch((error) => {
      console.error("Hubo un error: ", error);

      if (handleRequestData) {
        handleRequestData(error);
      }
    });
}

function getRickAndMorthCharacters() {
  function handleRequestData(error, data) {
    // Esta función puede tener el nombre que tú quieras, yo le puse el mismo
    // usa getDataFromURLAPI esperando que eso ayude a que se entienda mejor
    //
    // Dentro de esta función handleRequestData (con algunos pequeños ajustes) podrías  
    // usar la función que "pinta" los contactos
    // TIP: data.results tiene el mismo arreglo que usamos en nuestro proyecto ("rawContacts")

    if (error) {
      console.log("No obtuvimos los personajes", error);
      return;
    }

    console.log("Los personajes son: ", data);
  }

  getDataFromURLAPI(
    "https://rickandmortyapi.com/api/character",
    handleRequestData
  );
}
