const {defineConfig} = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    retries:{"runMode":2, "openMode":2},
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); 
     
    },
  },
  "includeShadowDom":true,
  env: {
    QAURL:'https://qa-pradmin.partrunner.com/en/login',
    StagURL:'https://staging-pradmin.partrunner.com/en/login'
  }
});