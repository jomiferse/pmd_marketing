// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = process.env.PUBLIC_SITE_URL || "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  trailingSlash: "never",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});
