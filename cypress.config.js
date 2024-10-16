const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2soney',
  e2e: {

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      videoUploadOnPasses:true,
      video:true,
      
    },


    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern: "cypress/integrations/Demo.js"
  },
  
});
