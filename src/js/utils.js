export function colorElementRed(id, color = "red", width, style) {
  const el = document.getElementById(id);

  // console.log(el.style);

  el.style.borderColor = color;
  el.style.borderWidth = width || "2px";
  el.style.borderStyle = style || "solid";
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
