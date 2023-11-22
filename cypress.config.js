const {defineConfig} = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
  },
  env: {
    QAURL:'https://qa-pradmin.partrunner.com/en/login'
  }
});