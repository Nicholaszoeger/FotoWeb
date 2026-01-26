// src/data/projects.ts

export interface ProjectImage {
  src: string; // ID en Cloudinary
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  category: "Bodas" | "Producto" | "Corporativa" | "Eventos";
  date: string;
  client: string;
  location: string;
  description: string;
  challenge: string;
  solution: string;
  coverImage: string; // Imagen de portada (publicId)
  images: ProjectImage[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "boda-costa-mediterranea",
    title: "Boda en la Costa Mediterránea",
    category: "Bodas",
    date: "Junio 2024",
    client: "Ana & Miguel",
    location: "Altea, Alicante",
    coverImage: "bittfilms/proyectos/boda-costa-mediterranea/cover",
    description: "Una ceremonia íntima junto al mar con luz natural perfecta.",
    challenge:
      "El principal desafío fue trabajar con la luz cambiante del atardecer.",
    solution:
      "Planificamos meticulosamente los tiempos para aprovechar la golden hour.",
    images: [
      {
        src: "bittfilms/proyectos/boda-costa-mediterranea/ceremonia-1",
        alt: "Ceremonia junto al mar",
        caption: "La ceremonia al atardecer",
      },
      {
        src: "bittfilms/proyectos/boda-costa-mediterranea/detalles-1",
        alt: "Detalles decoración",
        caption: "Detalles de la decoración",
      },
      {
        src: "bittfilms/proyectos/boda-costa-mediterranea/pareja-1",
        alt: "Retrato de pareja",
        caption: "Retrato de los novios",
      },
      {
        src: "bittfilms/proyectos/boda-costa-mediterranea/sunset-1",
        alt: "Puesta de sol",
        caption: "Puesta de sol mediterránea",
      },
      {
        src: "bittfilms/proyectos/boda-costa-mediterranea/celebracion-1",
        alt: "Celebración",
        caption: "Momento de celebración",
      },
      {
        src: "bittfilms/proyectos/boda-costa-mediterranea/flores-1",
        alt: "Detalles florales",
        caption: "Arreglos florales",
      },
    ],
    featured: true,
  },
  {
    slug: "producto-artesanal",
    title: "Joyería Artesanal Premium",
    category: "Producto",
    date: "Mayo 2024",
    client: "Atelier Luna",
    location: "Estudio BittFilms, Madrid",
    coverImage: "bittfilms/proyectos/producto-artesanal/cover",
    description: "Fotografía de producto para catálogo de joyería artesanal.",
    challenge: "Capturar los detalles intrincados y el brillo de las gemas.",
    solution: "Utilizamos iluminación de estudio controlada con softboxes.",
    images: [
      {
        src: "bittfilms/proyectos/producto-artesanal/collar-oro-1",
        alt: "Collar de oro",
        caption: "Collar artesanal de oro",
      },
      {
        src: "bittfilms/proyectos/producto-artesanal/anillo-diamante-1",
        alt: "Anillo con diamante",
        caption: "Anillo con diamante central",
      },
      {
        src: "bittfilms/proyectos/producto-artesanal/pulsera-plata-1",
        alt: "Pulsera plata",
        caption: "Pulsera de plata oxidada",
      },
    ],
    featured: true,
  },
  {
    slug: "sesion-corporativa-tech",
    title: "Sesión Corporativa StartUp Tech",
    category: "Corporativa",
    date: "Abril 2024",
    client: "TechVision Labs",
    location: "Oficinas TechVision, Madrid",
    coverImage: "bittfilms/proyectos/sesion-corporativa-tech/cover",
    description: "Sesión de fotografía corporativa para startup tecnológica.",
    challenge:
      "Crear retratos profesionales que reflejaran la cultura moderna.",
    solution: "Combinamos retratos formales con fotografías candid del equipo.",
    images: [
      {
        src: "bittfilms/proyectos/sesion-corporativa-tech/equipo-1",
        alt: "Equipo trabajando",
        caption: "El equipo en acción",
      },
      {
        src: "bittfilms/proyectos/sesion-corporativa-tech/ceo-portrait",
        alt: "CEO portrait",
        caption: "Retrato del CEO",
      },
      {
        src: "bittfilms/proyectos/sesion-corporativa-tech/meeting-1",
        alt: "Reunión equipo",
        caption: "Sesión de brainstorming",
      },
      {
        src: "bittfilms/proyectos/sesion-corporativa-tech/office-1",
        alt: "Oficinas modernas",
        caption: "Espacios de trabajo",
      },
    ],
    featured: true,
  },
];

// Helpers
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectsByCategory = (category: string) =>
  category === "Todos"
    ? projects
    : projects.filter((p) => p.category === category);
