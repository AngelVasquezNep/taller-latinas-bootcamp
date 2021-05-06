/**
 * 
 * Class 4
 * 
 * Asynchronism
 *    Handle events - Event Loop
 *    Call stack
 *    Browser
 * Request example (with XMLHttpRequest)
 * Request anatomy stylesheet (request.md)
 * Talk about fetch_example.js
 * 
 */


/**
 * Síncrono - Hacer las compras
      console.log("Ir a super")
      console.log("Elegir los productos")
      console.log("Ir a la caja")
      console.log("Pagar")
 *
 *
 * Asincrono - Esperar por tus taquitos
      console.log("Ver el menú")                            // Síncrono
      console.log("Pedir nuestra orden")                    // Síncrono
      setTimeout(() => {
        console.log("Orden de taquitos de pastor")
      }, 1000)
      setTimeout(() => {
        console.log("Tacos especiales")
      }, 4200)
      setTimeout(() => {
        console.log("Orden queso fundido de pastor")
      }, 3000)
      setTimeout(() => {
        console.log("Torta de pastor")
      }, 1200)
 */

/*
 * AJAX - Asynchronous JavaScript And XML
 *
 * XMLHttpRequest (XHR) objects are used to interact with servers
 *    Documentation: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
 *
 */

// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL https://rickandmortyapi.com/api/character
xhr.open("GET", "https://rickandmortyapi.com/api/character");
xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
const SUCCESS_STATUS = 200

xhr.onload = function () {
  if (xhr.status === SUCCESS_STATUS) {
    // show the result
    console.log(`Done, got ${xhr.response.length} bytes`); // response is the server response
  } else {
    // analyze HTTP status of the response
    console.error(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  }
};

xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};


/**
 * 
 * Explicar el archivo Request.md
 * Request documentation:
 *    https://developer.mozilla.org/en-US/docs/Web/HTTP
 * 
 */