import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "just me",
  author: "Juliana Mercado Algarin",
  description: "Software Developer",
  lang: "en",
  siteLogo: "/girl.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/1julsss/" },
    { text: "Github", href: "https://github.com/julianaalgarin" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Juliana Mercado Algarin",
    specialty: "Desarrolladora de Software",
    summary:
      "Desarrolladora con experiencia en frontend y backend. Me especializo en crear soluciones escalables, fáciles de usar y visualmente atractivas con tecnologías modernas.",
    email: "july.algarin07@gmail.com",
  },
  experience: [
    {
      company: "Freelance",
      position: "Desarrolladora Web",
      startDate: "2023",
      endDate: "Actualidad",
      summary: [
        "Desarrollo de proyectos frontend y backend utilizando Python, React, Astro y WordPress.",
        "Construcción de sitios web escalables y optimizados para SEO y rendimiento.",
        "Un año de experiencia práctica en programación con tecnologías modernas.",
      ],
    },
    {
      company: "Wherever",
      position: "Soporte y Atención al Cliente",
      startDate: "2022",
      endDate: "2023",
      summary: [
        "Gestión de soporte técnico y servicio al cliente.",
        "Optimización de procesos internos de atención.",
      ],
    },
    {
      company: "Wherever",
      position: "Change",
      startDate: "2020",
      endDate: "2021",
      summary: [
        "Gestión y optimización de tienda en línea.",
        "Implementación de estrategias de ventas digitales.",
        "Mejoras en experiencia de usuario y conversión de clientes.",
      ],
    },
    {
      company: "Varias Empresas",
      position: "Mercadeo y Ventas",
      startDate: "2016",
      endDate: "2020",
      summary: [
        "Experiencia en investigación de mercados, mercadeo digital y ventas.",
        "Desarrollo de estrategias comerciales y manejo de clientes.",
      ],
    },
  ],
  projects: [
    {
      name: "FÉNIX",
      summary: "Plataforma de gestión digital.",
      linkSource: "https://fenixbgsas.com/",
      image: "/logo-fenix.png",
    },
    {
      name: "DEPORTECH",
      summary: "Página informativa de Deportes.",
      linkPreview: "/",
      linkSource: "https://github.com/julianaalgarin/deportech",
      image: "/figo-finances.png",
    },
    
  ],
  about: {
    description: `
Holaa, Soy Juliana, Desarrolladora Web con 1 año de experiencia práctica en programación y más de 3 años de trayectoria profesional en marketing, ventas y atención al cliente. Me especializo en crear soluciones web escalables, fáciles de usar y visualmente atractivas, con un fuerte enfoque en el rendimiento, la usabilidad y las prácticas modernas de desarrollo.
Mi experiencia diversa me permite cerrar la brecha entre la tecnología y las necesidades del negocio, entregando soluciones que no solo cumplen con los requisitos técnicos, sino que también se alinean con las expectativas de los usuarios y los objetivos organizacionales.
    `,
    image: "/girl.png",
  },
};
