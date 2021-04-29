import {
  colorElementRed,
  updateElementStyles,
  transformRawContacts,
  Contact,
  render,
} from "./utils.js";
import rawContacts from "./rawContacts.js";

/** ---------------------------------------------------------------------
 *
 * Styles manipulation
 *
 */

// colorElementRed("Angelito");

// updateElementStyles(".Contacts .Contact", {
//   border: "2px solid green",
// });

/** ---------------------------------------------------------------------
 *
 * Make fale dark mode
 *
 */

// const appContainer = document.getElementById("app");

// const KEY_CODES = {
//   D: 68,
//   L: 76,
//   G: 71,
//   C: 67,
// };

// function keydownHandler(event) {
//   // classList - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

//   console.log(event);

//   if (event.keyCode === KEY_CODES.D) {
//     // Make dark mode
//     appContainer.classList.add('Fake-dark-mode')
//     appContainer.classList.remove('Fake-light-mode')
//   }

//   if (event.keyCode === KEY_CODES.L) {
//     // Remove dark mode
//     appContainer.classList.add('Fake-light-mode')
//     appContainer.classList.remove('Fake-dark-mode')
//   }

//   if (event.keyCode === KEY_CODES.G) {
//     // Green Border
//     updateElementStyles(".Contacts .Contact", {
//       border: "2px solid green",
//     });
//   }

//   if (event.keyCode === KEY_CODES.C) {
//     // Clean
//     updateElementStyles(".Contacts .Contact", {
//       border: "initial",
//     });
//   }
// }

// document.addEventListener("keydown", keydownHandler);

// /** ---------------------------------------------------------------------
//  *
//  * Arrays and DOM manipulation 1
//  *
//  */

// const numbers = [1, 2, 3, 4, 5, 6];
// const chars = ["a", "b", "c", "d", "e"];

// const super_market_list = [
//   { count: 1, name: "Cookies", price: 20 },
//   { count: 1, name: "Milk", price: 19 },
//   { count: 1, name: "Candies", price: 10 },
//   { count: 1, name: "Chocolate", price: 23 },
// ];

/* for of */
// function cuantoEs(list) {
//   let total = 0;

//   for (const item of list) {
//     console.log(item)
//     total = total + item.price * item.count
//   }

//   return total;
// }

// const total = cuantoEs(super_market_list);
// console.log("Total: ", total);

/* forEach */
// function cuantoEs(list) {
//   let total = 0;

//   list.forEach((item) => {
//     console.log(item);
//     total = total + item.price * item.count;
//   });

//   return total;
// }

// const total = cuantoEs(super_market_list);
// console.log("Total: ", total);

/* Map */
// function listaParaMasPersonas(list, paraCuantos) {
//   const newList = list.map(
//     function (item) {
//       return {
//         count: paraCuantos,
//         name: item.name,
//         price: item.price,
//       };
//     }
//   );

//   console.log(newList);

//   return newList;
// }

/* Filter */
// const new_super_market_list= listaParaMasPersonas(super_market_list, 4)
// const total = cuantoEs(new_super_market_list);
// console.log("Total: ", total);

// function paraCualMePodriaAlcanzar(list, miDinerito) {
//   const newList = list.filter((item) => item.price <= miDinerito);

//   return newList;
// }

// const newList = paraCualMePodriaAlcanzar(super_market_list, 19);
// console.log(newList);

/* Find */

// const productos_de_la_tienda = [
//   { count: 4, name: "Papitas", price: 10 },
//   { count: 12, name: "Leche", price: 20 },
//   { count: 6, name: "Cacahuates", price: 13 },
//   { count: 3, name: "Chocolate", price: 20 },
//   { count: 7, name: "Jugo", price: 8 },
// ];

// function hayDeEstoEnLaTienda(list, queQuiero) {
//   const item = list.find(
//     (item) => item.name.toLowerCase() === queQuiero.toLowerCase()
//   );

//   //
//   // return Boolean(item)

//   if (item) {
//     console.log("Si hay", item);
//     return true;
//   }

//   return false;
// }

// console.log(hayDeEstoEnLaTienda(productos_de_la_tienda, 'Chocolate'))

/** ---------------------------------------------------------------------
 *
 * Arrays and DOM manipulation
 *
 */

const contactsList = document.querySelector(".Contacts");
// console.log(contactsList);

function renderContacts(contacts) {
  contacts.forEach((contact) => {
    render(contactsList, Contact(contact));
  });
}

const contacts = transformRawContacts(rawContacts);

renderContacts(contacts);

/**
 * Filter Names - Arrays and DOM manipulation
 */

const headerSearch = document.getElementById("header-search");

headerSearch.addEventListener("input", (event) => {
  contactsList.innerHTML = '';

  const value = event.target.value;
  console.log(value)

  if (!value) {
    renderContacts(contacts);
    return;
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );

  if (filteredContacts.length === 0) {
    const paragraph = document.createElement('p');
    const strong = document.createElement('strong')
    paragraph.innerText = 'No encontramos nada para: '
    strong.innerText = value
    paragraph.appendChild(strong)

    render(contactsList, paragraph)
    return
  }

  renderContacts(filteredContacts);
});
