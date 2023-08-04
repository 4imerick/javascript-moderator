const form = {
  numberOfErrors: null,
  // Form
  postForm: [],
  // Inputs
  inputs: [],
  postCommentaryInput: [],
  // Error message
  errorMessagePostCommentaryBlacklistedWord: null,
  // Button
  postCommentaryCreateButton: [],
  init: function () {
    console.log("Hello world, I'm form.js 📝");

    // We initialize a counter for the number errors.
    form.numberOfErrors = 0;

    // Form
    form.postForm = document.getElementById("post-form");

    // Inputs
    // We use the JS Array.from() method to crearte a array from the elements.
    form.inputs = Array.from(document.querySelectorAll(".form-field__input"));
    for (let input of form.inputs) {
      // We add a listener and a handler on the click event.
      input.addEventListener("click", form.handleAddInputFocusWithin);
      // We add a listener and a handler on the blur event.
      input.addEventListener("blur", form.handleRemoveInputsFocusWithin);
    }
    form.postCommentaryInput = document.querySelector(
      ".form-field__post-commentary-input"
    );

    // Error message
    form.errorMessagePostCommentaryBlacklistedWord = document.querySelector(
      ".error-message-post-commentary-blacklisted-word"
    );

    // Button
    form.postCommentaryCreateButton = document.getElementById(
      "post-commentary-create-button"
    );
    if (form.postCommentaryCreateButton) {
      // We add a listener and a handler on the click event.
      form.postCommentaryCreateButton.addEventListener(
        "click",
        form.handleFormSubmit
      );
    }
  },
  /**
   * Method that switch the color of the outline around the inputs.
   * @param {HTMLInputElement} input
   * @param {Sring} outlineColor
   * @return {void}
   */
  switchInputOutlineColor: function (input, outlineColor) {
    // console.log("form.switchInputOutlineColor()");

    // We set the property of the CSS variable.
    input.style.setProperty("--outline", "0.1em solid " + outlineColor);
  },
  /**
   * Method that switch the color of the input outline on the focus-within according to the value of mode.backgroundColor.
   * @param {Event} event
   * @return {void}
   */
  handleAddInputFocusWithin: function (event) {
    // console.log("form.handleAddInputFocusWithin()");

    // We get the DOM element form which the event occured.
    const clickedInput = event.currentTarget;

    // We initialaze a index.
    let index = 0;
    // The index is the index of the clickedInput.
    index = form.inputs.indexOf(clickedInput);

    for (let input of form.inputs) {
      if (clickedInput === input) {
        form.switchInputOutlineColor(clickedInput, app.colors.yellow);
      }
    }
  },
  /**
   * Method that remove the outline property on the inputs when they has lost focus.
   * @param {Event} event
   * @return {void}
   */
  handleRemoveInputsFocusWithin: function (event) {
    // console.log("form.handleRemoveInputsFocusWithin()");

    for (let input of form.inputs) {
      input.style.removeProperty("--outline");
    }
  },

  /**
   * Method that stop the form submit and according to the clicked button call the methods to check the input's value.
   * @param {Event} event
   * @return {void}
   */
  handleFormSubmit: function (event) {
    console.log("form.handleFormSubmit()");

    // We get the DOM element form which the event occured.
    const clickedButton = event.currentTarget;
    console.log(clickedButton);

    // We stop the form submit.
    event.preventDefault();
    console.log("STOP 🛑👮🏼‍♂️ Security check 🔐");

    // According to the clicked button we call different method to check the validity of the input and submit the form if it's dosen't contain any error.
    if (clickedButton === form.postCommentaryCreateButton) {
      moderator.checkIfBlacklistedWords(form.postCommentaryInput.value);
      form.submitFormIfNoError(form.postForm);
    }
  },

  /**
   * Method that check if a form contain some errors and submit him if not.
   * @param {HTMLFormElement} formToSubmit
   * @return {void}
   */
  submitFormIfNoError: function (formToSubmit) {
    console.log("form.submitFormIfNoError()");

    // We submit ou don't submit the form according to the number of error it's contains.
    if (form.numberOfErrors > 0) {
      // We reset form.numberOfErrors for the next submit control made by form.handleFormSubmit().
      form.numberOfErrors = 0;
      return;
    } else {
      formToSubmit.submit();
    }
  },
};
