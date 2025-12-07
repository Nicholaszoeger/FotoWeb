// public/admin/config.js

if (window.netlifyCms) {
  netlifyCms.init({
    // 1. Backend (El Conector)
    backend: {
      name: "git-gateway",
      branch: "main", // o 'master', usa el nombre de tu rama principal
    },
    // 2. Control de Acceso
    publish_mode: "editorial_workflow", // Permite borradores antes de publicar
    site_url: "https://bittfilms.es", // Reemplaza con tu dominio
    display_url: "https://bittfilms.es", // Reemplaza con tu dominio
    logo_url: "", // Opcional: logo para el panel de administración

    // 3. Colecciones (Los Tipos de Contenido)
    collections: [
      {
        name: "portfolio", // ID de la colección (usado en código)
        label: "Proyectos de Portafolio", // Título en el panel del CMS
        folder: "src/content/portfolio", // Dónde se guardarán los archivos Markdown/JSON
        create: true, // Permite crear nuevos proyectos
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}", // Formato del nombre del archivo

        fields: [
          // Los campos que verá el editor
          { label: "Título del Proyecto", name: "title", widget: "string" },
          { label: "Fecha del Proyecto", name: "date", widget: "datetime" },
          {
            label: "Tipo de Servicio",
            name: "service",
            widget: "select",
            options: ["Fotografía", "Video Corporativo", "Bodas", "Drone"],
          },
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
  });
}
