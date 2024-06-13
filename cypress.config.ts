import { defineConfig } from "cypress";

export default defineConfig({
  execTimeout: 5,
  defaultCommandTimeout: 1000,
  e2e: {
    baseUrl: "http://localhost:8080", // global baseUrl
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
