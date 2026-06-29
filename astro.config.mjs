// astro.config.mjs
// Configuración principal de Astro para el proyecto BittFilms

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://bittfilms.com", // Cambia esto por tu dominio real
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap(),
  ],
  // Optimización de imágenes
  image: {
    domains: ["images.unsplash.com"], // Dominios permitidos para imágenes externas
  },
  // Configuración de build
  build: {
    // Genera archivos optimizados
    inlineStylesheets: "auto",
  },
  // Configuración de servidor de desarrollo
  server: {
    port: 3000,
    host: true,
  },
  prefetch: true
});
