import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blogtutorial.netlify.app",
  integrations: [preact()]
});