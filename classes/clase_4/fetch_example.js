function getDataFromUrlAPI(url, handleRequestData) {
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
    // Dentro de esta función handleRequestData (con algunos pequeños ajustes) podrías  
    // usar la función que "pinta" los contactos
    // TIP: data.results tiene el mismo arreglo que usamos en nuestro proyecto ("rawContacts")

    if (error) {
      console.log("No obtuvimos los personajes", error);
      return;
    }

    console.log("Los personajes son: ", data);
  }

  getDataFromUrlAPI(
    "https://rickandmortyapi.com/api/character",
    handleRequestData
  );
}
