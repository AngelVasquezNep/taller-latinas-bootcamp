/**
 * DOM Manipulation
 *
 * UTILS
 *
 */

export function changeBorderColor(id, color = "red", borderWidth, borderStyle) {
  const el = document.getElementById(id);

  // console.log(el.style);

  el.style.borderColor = color;
  el.style.borderWidth = borderWidth || "2px";
  el.style.borderStyle = borderStyle || "solid";
}

export function updateElementStyles(query, styles = {}) {
  const elements = document.querySelectorAll(query);

  elements.forEach((el, index) => {
    // console.log("El elemento " + index);
    // console.log(el);
    // console.log('-'.repeat(50))

    Object.keys(styles).forEach((propertyName) => {
      el.style[propertyName] = styles[propertyName];
    });
  });
}

/** ---------------------------------------------------------------------
 *
 * Styles manipulation
 *
 */

changeBorderColor("Angelito", "tomato", "12px");

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
