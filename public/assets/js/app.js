const app = {
  url: null,
  init: function () {
    console.log("Hello world, I'm app.js 👑");

    // All the colors of the app are set in CSS variables.
    // We use getComputedStyle(document.documentElement).getPropertyValue() to get the value of the CSS variables.
    app.colors = {
      black: getComputedStyle(document.documentElement).getPropertyValue(
        "--black"
      ),
      red: getComputedStyle(document.documentElement).getPropertyValue(
        "--red"
      ),
      green: getComputedStyle(document.documentElement).getPropertyValue(
        "--green"
      ),
      yellow: getComputedStyle(document.documentElement).getPropertyValue(
        "--yellow"
      ),
    };

    // We load the modules used in the app.
    tools.init();
    form.init();
    moderator.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
