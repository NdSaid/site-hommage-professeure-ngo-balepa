// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// GitHub Pages sert le site depuis https://<user>.github.io/<repo>/ :
// `base` doit donc porter le nom du dépôt. Si un nom de domaine propre est
// branché plus tard, remettre `base: "/"` et changer `site`.
const SITE = "https://ndsaid.github.io";
const BASE = "/site-hommage-professeure-ngo-balepa";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: { fr: "fr", en: "en" },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
