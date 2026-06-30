// tailwind.config.mjs
// Configuración personalizada de Tailwind CSS para BittFilms

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Colores de marca BittFilms, extraídos del logotipo oficial
        accent: {
          DEFAULT: "#f44300",
          light: "#ff7340",
          dark: "#c23600",
        },
      },
      fontFamily: {
        // Fuentes personalizadas
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },
  plugins: [
    // Plugin para tipografía (opcional, pero útil para contenido de blog)
    // require('@tailwindcss/typography'),
  ],
};
