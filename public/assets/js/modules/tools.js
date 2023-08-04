const tools = {
  init: function () {
    console.log("Hello world, I'm tools.js 🧰");
  },
  /**
   * Method that add the display-none CSS classes to one or several elements.
   * @param {Array} elements
   * @return {void}
   */
  addDisplayNone: function (...elements) {
    // console.log("tools.addDisplayNone()");

    for (let element of elements) {
      element.classList.add("display-none");
    }
  },
  /**
   * Method that remove the display-none CSS class from one or several elements to display it.
   * @param {Array} elements
   * @return {void}
   */
  removeDisplayNone: function (...elements) {
    // console.log("tools.removeDisplayNone()");

    for (let element of elements) {
      element.classList.remove("display-none");
    }
  },
  /**
   * Method that toggle the display-none CSS class to one or several elements to display it.
   * @param {Array} elements
   * @return {void}
   */
  toggleDisplayNone: function (...elements) {
    // console.log("tools.toggleDisplayNone()");

    for (let element of elements) {
      element.classList.toggle("display-none");
    }
  },
  /**
   * Method that add a CSS class to one or several elements.
   * @param {String} className
   * @param {Array} elements
   * @return {void}
   */
  addClassToElements: function (className, ...elements) {
    // console.log("tools.addClassToElements()");

    for (let element of elements) {
      element.classList.add(className);
    }
  },
  /**
   * Method that remove a CSS class from one or several elements.
   * @param {String} className
   * @param {Array} elements
   * @return {void}
   */
  removeClassFromElements: function (className, ...elements) {
    // console.log("tools.removeClassFromElements()");

    for (let element of elements) {
      element.classList.remove(className);
    }
  },
  /**
   * Method that toggle a CSS class to one or several elements.
   * @param {String} className
   * @param {Array} elements
   * @return {void}
   */
  toggleClassToElements: function (className, ...elements) {
    // console.log("tools.toggleClassToElements()");

    for (let element of elements) {
      element.classList.toggle(className);
    }
  },
  /**
   * Method that add one or several CSS classes to one element.
   * @param {Array} element
   * @param {String} classNames
   * @return {void}
   */
  addClassesToElement: function (element, ...classNames) {
    // console.log("tools.addClassesToElement()");

    for (let className of classNames) {
      element.classList.add(className);
    }
  },
  /**
   * Method that remove one or several CSS classes from one element.
   * @param {Array} element
   * @param {String} classNames
   * @return {void}
   */
  removeClassesFromElement: function (element, ...classNames) {
    // console.log("tools.removeClassesFromElement()");

    for (let className of classNames) {
      element.classList.remove(className);
    }
  },
  /**
   * Method that toggle one or several CSS classes to one element.
   * @param {Array} element
   * @param {String} classNames
   * @return {void}
   */
  toggleClassesToElement: function (element, ...classNames) {
    // console.log("tools.toggleClassesToElement()");

    for (let className of classNames) {
      element.classList.toggle(className);
    }
  },
  /**
   * Method that remove a disabled attribute from one or several inputs.
   * @param {Array} inputs
   * @return {void}
   */
  removeDisabledAttribute: function (...inputs) {
    // console.log("tools.removeDisabledAttribute()");

    for (let input of inputs) {
      input.removeAttribute("disabled");
    }
  },
  /**
   * Method that set a disabled attribute to one or several inputs.
   * @param {Array} inputs
   * @return {void}
   */
  setDisabledAttribute: function (...inputs) {
    // console.log("tools.setDisabledAttribute()");

    for (let input of inputs) {
      input.setAttribute("disabled", "");
    }
  },
  /**
   * Method that check one or several inputs.
   * @param {Array} inputs
   * @return {void}
   */
  checkInputs: function (...inputs) {
    // console.log("tools.checkInputs()");

    for (let input of inputs) {
      input.checked = true;
    }
  },
  /**
   * Method that uncheck one or several inputs.
   * @param {Array} inputs
   * @return {void}
   */
  uncheckInputs: function (...inputs) {
    // console.log("tools.uncheckInputs()");

    for (let input of inputs) {
      input.checked = false;
    }
  },
  /**
   * Methot that set on a element a new color for the before property.
   * @param {HTMLSpanElement} element
   * @param {String} color
   * @return {void}
   */
  setColorToBeforeProperty: function (element, color) {
    // console.log("tools.setColorToBeforeProperty()");

    element.style.setProperty("--before", color);
  },
  /**
   * Methot that remove one or several elements from the DOM.
   * @param {Array} elements
   * @return {void}
   */
  removeElementsFromDOM: function (...elements) {
    // console.log("tools.removeElementsFromDOM()");

    for (let element of elements) {
      element.remove();
    }
  },
  /**
   * Method that from a integer which is a price in cents return string which is a amount with the symbol of the currency initialize in parameter.
   * @param {Number} centsPrice
   * @param {String} currencySymbol
   * @return {String}
   */
  toAmount: function (centsPrice, currencySymbol = "€") {
    // console.log("tools.toAmount()");

    // We convert the cents price to a decimal price.
    let decimalPrice = centsPrice / 100;

    // We use the toString() method to convert the integer in a string and the replace method to replace the comma by a dot.
    let amount = decimalPrice.toString().replace(".", ",");

    // We return the amount with the symbol of the currency.
    return amount + " " + currencySymbol;
  },
};
