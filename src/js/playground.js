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
// };

// function keydownHandler(event) {
//   // classList - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

//   // console.log(event);

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
// }

// document.addEventListener("keydown", keydownHandler);

/** ---------------------------------------------------------------------
 *
 * Arrays and DOM manipulation
 *
 */

// const contactsList = document.querySelector(".Contacts");
// // console.log(contactsList);

// function renderContacts(contacts) {
//   contacts.forEach((contact) => {
//     render(contactsList, Contact(contact));
//   });
// }

// const contacts = transformRawContacts(rawContacts);

// renderContacts(contacts);
