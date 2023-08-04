import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: process.env.ROOT_URL,
    retries: {
      runMode: 3,
    },
    viewportHeight: 1024,
    viewportWidth: 1024,
    screenshotOnRunFailure: true,
  },
});
