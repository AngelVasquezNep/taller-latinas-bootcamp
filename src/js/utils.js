export function transformRawContacts(rawContacts) {
  const contacts = rawContacts.map((contact) => {
    return {
      id: `contact_${contact.id}`,
      img: contact.image,
      name: contact.name,
      email: contact.name.replace(/ /g,'') + "@test.com",
      phone: 5544449999,
    };
  });

  return contacts;
}

function contactTemplate(contact) {
  return `
    <section class="Contact" id="${contact.id}">
      <picture class="Contact--image">
        <img
          src="${contact.img}"
          alt="${contact.name}"
          height="5rem"
          width="5rem"
        />
        <figcaption class="Contact--name">${contact.name}</figcaption>
      </picture>

      <div class="Contact--details">
        <a class="Contact--details-link" href="tel:${contact.phone}"
          >${contact.phone}</a
        >
        <a class="Contact--details-link" href="mailto:${contact.email}"
          >${contact.email}</a
        >
      </div>
    </section>
  `;
}

/**
 * Contact
 * @param {Object} contact
 * @returns {Element}
 */
export function Contact(contact) {
  // Create simple div
  const div = document.createElement("div");
  // console.log(div);

  // Create a string contact template version
  const contactTemplateString = contactTemplate(contact);
  // console.log(contactTemplateString);

  // Insert string contact template version into our div
  div.innerHTML = contactTemplateString;

  // Get firstChild -> <section class="Contact"...
  const contactElement = div.firstElementChild;

  // console.log(contactElement);
  return contactElement;
}

/**
 * render
 * @param {Element} container
 * @param {Element} content
 */
export function render(container, content) {
  container.appendChild(content);
}
