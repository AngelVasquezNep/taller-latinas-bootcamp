import {
  transformRawContacts,
  Contact,
  render,
} from "./utils.js";
import rawContacts from "./rawContacts.js";

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
