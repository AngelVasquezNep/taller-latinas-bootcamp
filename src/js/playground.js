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
