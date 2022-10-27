const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  projectId: "879fh9",
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 5000,
  downloadsFolder: "./trash/downloads",
  screenshotsFolder: "./trash/screenshots",
  videosFolder: "./trash/videos",
  video: false,
  screenshotOnRunFailure: true,
  taskTimeout: 50000,
});
