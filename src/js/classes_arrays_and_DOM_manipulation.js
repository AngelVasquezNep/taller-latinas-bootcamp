import { transformRawContacts, ContactElement, render } from "./utils.js";
import rawContacts from "./rawContacts.js";

/** ---------------------------------------------------------------------
 *
 * Arrays and DOM manipulation
 *
 */

/**
 *
 * Talk about render util
 * Simple example about render
 *
 */

// // Get section.Contacts element
// const ContactsDiv = document.querySelector('.Contacts')
// console.log(ContactsDiv)

// // Create a simple tag p with content
// const p = document.createElement('p')
// p.innerText = 'Hola'

// render(ContactsDiv, p)

/**
 * Can I insert a div with HTML content?
 */

// const simpleDiv = document.createElement('div')
// // Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// simpleDiv.innerHTML = `
//   <p>
//     <strong>HOLA...</strong> :D
//   </p>
// `

// render(ContactsDiv, simpleDiv)

/**
 * Add Contacts from list
 */

// const contactsList = document.querySelector(".Contacts");
// // console.log(contactsList);

// function renderContacts(contacts) {
//   contacts.forEach((contact) => {
//     render(contactsList, ContactElement(contact));
//   });
// }

// const contacts = transformRawContacts(rawContacts);

// renderContacts(contacts);

// /**
//  * Filter Names - Arrays and DOM manipulation
//  */

// const headerSearch = document.getElementById("header-search");

// headerSearch.addEventListener("input", (event) => {
//   // Clean previus content
//   contactsList.innerHTML = "";

//   const value = event.target.value;
//   console.log(value);
//   // Save last search with localStorage
//   // saveLastSearch(value);

//   if (!value) {
//     renderContacts(contacts);
//     return;
//   }

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(value.toLowerCase())
//   );

//   if (filteredContacts.length === 0) {
//     const paragraph = document.createElement("p");
//     const strong = document.createElement("strong");
//     paragraph.innerText = "No encontramos nada para: ";
//     strong.innerText = value;
//     paragraph.appendChild(strong);

//     render(contactsList, paragraph);
//     // return stops ejecution
//     return;
//   }

//   renderContacts(filteredContacts);
// });


// /**
//  * About localStorage
//  */

// function saveLastSearch(value) {
//   window.localStorage.setItem("lastSearch", value);
// }

// function getLastSearch() {
//   return window.localStorage.getItem("lastSearch") || "";
// }

// // copy-paste
// function updateElementStyles(query, styles = {}) {
//   const elements = document.querySelectorAll(query);

//   elements.forEach((el, index) => {
//     Object.keys(styles).forEach((propertyName) => {
//       el.style[propertyName] = styles[propertyName];
//     });
//   });
// }

// function printLastSearch() {
//   const header = document.querySelector(".Container .Header");
//   const lastSearch = getLastSearch();

//   if (lastSearch) {
//     const span = document.createElement("span");
//     span.innerHTML = `
//       <p style="margin: 0 0 1rem">
//         <small>
//         Última búsqueda <strong>${lastSearch}</strong>
//         </small>
//       </p>
//     `;

//     updateElementStyles('.Header .Header--Searchs', { margin: '0' })

//     render(header, span);
//   }
// }

// printLastSearch();
