import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    env:{hideXHRInCommandLog: true},
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
