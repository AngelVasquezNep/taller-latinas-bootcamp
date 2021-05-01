function reqListener () {
  const response = this.responseText;

  const jsonResponse = JSON.parse(response)
  console.log(jsonResponse);
}

const httpReq = new XMLHttpRequest();
httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');

httpReq.addEventListener("load", reqListener);
// httpReq.open("GET", "https://rickandmortyapi.com/api/character");
// httpReq.open("GET", "https://rickandmortyapi.com/api/character?page=2")
// httpReq.open("GET", "https://rickandmortyapi.com/api/character?page=3")
// httpReq.open("GET", "https://rickandmortyapi.com/api/character?page=4")
httpReq.open("GET", "https://rickandmortyapi.com/api/character?page=5")
httpReq.send();