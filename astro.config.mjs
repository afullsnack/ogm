import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site:
    import.meta.env.MODE === "production"
      ? "https://optgrowthmarkets.com"
      : "http://localhost:4321",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
    react(),
  ],
  output: "server",
  adapter: netlify(),
});
