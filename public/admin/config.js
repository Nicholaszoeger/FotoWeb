// public/admin/config.js

if (window.netlifyCms) {
  netlifyCms.init({
    // --- ERRORES CORREGIDOS (Propiedades Obligatorias) ---

    // 1. BACKEND (CORRIGE: 'config must have required property backend')
    backend: {
      name: "git-gateway",
      branch: "main", // o 'master', usa el nombre de tu rama principal
    },

    // 2. MEDIA FOLDER (CORRIGE: 'config must have required property media_folder')
    // Carpeta donde se guardarán las imágenes subidas desde el CMS
    media_folder: "public/images/uploads",

    // 3. MEDIA LIBRARY (CORRIGE: 'config must have required property media_library')
    // Indica qué interfaz de subida de archivos usar (Netlify CMS usa su propia interna)
    media_library: {
      name: "cloudinary", // Aquí vamos a usar CLOUDINARY, como discutimos antes
      // Si quieres usar el widget nativo de Netlify, cambia a "uploadcare" o "assetstore"
    },

    // 4. COLLECTIONS (CORRIGE: 'config must have required property collections')
    collections: [
      {
        name: "portfolio",
        label: "Proyectos de Portafolio",
        folder: "src/content/portfolio",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",

        fields: [
          // Los campos que verá el editor
          { label: "Título del Proyecto", name: "title", widget: "string" },
          { label: "Fecha del Proyecto", name: "date", widget: "datetime" },
          // ... (otros campos de tu colección)
          {
            label: "Imagen Principal (Miniatura)",
            name: "thumbnail",
            widget: "image",
          },
          {
            label: "Enlace de Vimeo (Video Principal)",
            name: "vimeo_url",
            widget: "string",
            required: false,
          },
          {
            label: "Descripción del Proyecto",
            name: "body",
            widget: "markdown",
          },
        ],
      },
    ],

    // --- OTRAS CONFIGURACIONES DE SEGURIDAD (Ya existentes) ---
    publish_mode: "editorial_workflow",
    site_url: "https://bittfilms.es", // Cambia a tu dominio
    display_url: "https://bittfilms.es", // Cambia a tu dominio
    logo_url: "",

    // --- Configuraciones de Cloudinary si decides usarlo ---
    // Si elegiste CLOUDINARY en media_library, debes añadir estos campos:
    // media_library: {
    //   name: "cloudinary",
    //   config: {
    //     cloud_name: "TU_CLOUD_NAME", // Reemplazar
    //     api_key: "TU_API_KEY" // Reemplazar
    //   }
    // }
  });
}
