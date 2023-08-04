const moderator = {
  blacklistedWords: [],
  specialCharacters: [],
  init: function () {
    console.log("Hello world, I'm moderator.js 👮🏼‍♂️");

    moderator.blacklistedWords = [
      "Fuck",
      "Fucking",
      "Asshole",
      "Butthole",
      "Scumbag",
      "Faggot",
      "Bitch",
      "Bitches",
      "Hoe",
      "Hoes",
      "Bullshit",
      "Shit",
    ];

    moderator.specialCharacters = [".", ",", ";", "!", "?", "/", '"', "@"];
  },
  /**
   * Method that check if a list of words contains ar least one blacklisted word.
   * @param {String} words
   * @return {void}
   */
  checkIfBlacklistedWords: function (words) {
    console.log("form.checkIfBlacklistedWords()");

    // We initialize a variable to confirm when a blacklisted word has been found.
    let isBlackListed = null;

    // We use the JS method split() to create a array from the string.
    words = words.split(" ");

    for (let word of words) {
      // If the word end is strictly equal to one of the character.
      for (let specialCharacter of moderator.specialCharacters) {
        // We use the JS function charAt() to get the lengt of the word and we precise "-1" to extract the last character of the word.
        let lastCharacter = word.charAt(word.length - 1);
        // If the word last character is strictly equal to the special character.
        if (lastCharacter === specialCharacter) {
          // We rewrite the word without the special character.
          // We use the JS function replace() to remove the special character form the word by remplacing it by a empty value.
          word = word.replace(lastCharacter, "");
        }
      }

      for (let blacklistedWord of moderator.getBlacklistedWordsWithUpperAndLowerCaseValue()) {
        // If the word is stricly equal to a blacklisted word.
        if (word === blacklistedWord) {
          // We confirm that a blacklisted who have been found in the commentary.
          isBlackListed = true;
          form.switchInputOutlineColor(
            form.postCommentaryInput,
            app.colors.red
          );
          tools.removeDisplayNone(
            form.errorMessagePostCommentaryBlacklistedWord
          );
          form.numberOfErrors++;
        }
      }

      // If no blacklisted word has been found.
      if (!isBlackListed) {
        form.switchInputOutlineColor(
          form.postCommentaryInput,
          app.colors.green
        );
        tools.addDisplayNone(form.errorMessagePostCommentaryBlacklistedWord);
      }
    }
  },

  /**
   * Methot that convert the blacklisted words in upper and lower case and add this new words to the original array of blacklisted words.
   * @return {Array}
   */
  getBlacklistedWordsWithUpperAndLowerCaseValue: function () {
    console.log("form.getBlacklistedWordsWithUpperAndLowerCaseValue()");

    // for (let blacklistedWord of moderator.blacklistedWords) {
    //   moderator.blacklistedWords.push(
    //     blacklistedWord.toUpperCase(),
    //     blacklistedWord.toLowerCase()
    //   );
    //   console.log(moderator.blacklistedWords);
    //   debugger;
    // }

    // console.log(moderator.blacklistedWords);
    // debugger;

    moderator.blacklistedWords.forEach((blacklistedWord) => {
      // We use te JS method push() to add the blacklisted word to the array of blacklisted words after converting it in uppercase with the JS method toUpperCase() and lowercase with the JS method toLowerCase().
      moderator.blacklistedWords.push(
        blacklistedWord.toUpperCase(),
        blacklistedWord.toLowerCase()
      );
    });

    return moderator.blacklistedWords;
  },
};
