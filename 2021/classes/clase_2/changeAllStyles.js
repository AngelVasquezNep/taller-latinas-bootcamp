 /*
  * Learn about it before start:
  *     - Property accessors
  *           Provide access to an object's properties by using the dot notation or the bracket notation
  *
  *           Documentation:
  *                 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
  *
  *           Example:
  *                exampleStyles.border -> "10px solid tomato"
  *                exampleStyles["border"] -> "10px solid tomato"
  *                exampleStyles["borderBottomColor"] -> "yellow"
  *
  *           Warning:
  *                exampleStyles[1] -> undefined
  *                exampleStyles.1  -> SyntaxError 
  * 
  *     - About Object.keys
  *           Documentation:
  *                   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  * 
  *     - querySelectorAll
  *           Documentation:
  *                   https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
  * 
  * 
  *     - Bonus: Documentation about DOM manipulation from W3
  *           https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript
  * 
  */


const exampleStyles = {
  border: "10px solid tomato",
  borderBottomColor: "yellow",
  marginBottom: "50px",
};

function updateElementStyles(query, styles = {}) {
  const elements = document.querySelectorAll(query);

  elements.forEach((el, index) => {
    console.log("El elemento " + index);
    console.log(el);
    console.log("-----------------------------------");

    const nombreDeLosEstilos = Object.keys(styles);
    console.log("nombreDeLosEstilos", nombreDeLosEstilos)

    nombreDeLosEstilos.forEach((styleName) => {
      console.log("styleName: ", styleName);
      console.log("Value: ", styles[styleName]);

      el.style[styleName] = styles[styleName];
      // el.style.border = styles.border
      // el.style.borderBottomColor = styles.borderBottomColor
      // el.style.marginBottom = styles.marginBottom
    });
  });
}

updateElementStyles(".Contacts .Contact", exampleStyles);