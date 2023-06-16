const { defineConfig } = require("cypress")

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  viewportHeight: 768,
  viewportWidth: 1366,
  defaultCommandTimeout: 30000,
  execTimeout: 30000,
  taskTimeout: 30000,
  pageLoadTimeout: 50000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  retries: {
    runMode: 2,
    openMode: 0,
  },

  e2e: {
    baseUrl: 'https://auth0.com',
    env: {
      hideXhr: true, //https://github.com/filiphric/cypress-plugin-xhr-toggle
    },
    experimentalModifyObstructiveThirdPartyCode: true, //https://docs.cypress.io/guides/guides/web-security#Modifying-Obstructive-Third-Party-Code

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
