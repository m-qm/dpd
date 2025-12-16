export type Locale = "en" | "es"

type HeroCopy = {
  eyebrow: string
  titleLines: string[]
  subtitle: string
}

type Capability = { title: string; description: string }

type CopyShape = {
  hero: HeroCopy
  capabilitiesHeading: string
  capabilitiesLabel: string
  capabilities: Capability[]
  approachHeading: string
  approachIntro: string
  approachSteps: Capability[]
  clientsHeading: string
  clientsLabel: string
  clientTypes: string[]
  clientsIntro?: string
  ctaHeading: string
  ctaBody: string
  ctaButton: string
}

const en: CopyShape = {
  hero: {
    eyebrow: "Barcelona Digital Agency",
    titleLines: ["Digital", "Experiences", "That Endure"],
    subtitle:
      "A young digital agency in Barcelona creating essential experiences for brands, events, and organizations that care about refinement, consistency, and long-term impact.",
  },
  capabilitiesHeading: "Capabilities",
  capabilitiesLabel: "Capabilities",
  capabilities: [
    {
      title: "Brand Identity & Digital Expression",
      description:
        "Translating refined brand values into cohesive digital experiences that communicate with clarity and distinction.",
    },
    {
      title: "Digital Product Design",
      description:
        "Designing clear, digital-first interfaces and flows that make complex products feel simple to use.",
    },
    {
      title: "Bespoke Digital Platforms",
      description:
        "Engineering custom solutions for luxury brands, cultural institutions, and high-profile events that demand exceptional execution.",
    },
    {
      title: "E-commerce & Digital Commerce",
      description:
        "Creating sophisticated online experiences that reflect the quality and craftsmanship of premium products and services.",
    },
    {
      title: "Technical Excellence & Performance",
      description:
        "Delivering solutions built with precision, optimized for performance, and designed to evolve with your ambitions.",
    },
  ],
  approachHeading: "Our Approach",
  approachIntro:
    "We work with precision and purpose, balancing aesthetic refinement with functional excellence. Every element is considered, every detail intentional.",
  approachSteps: [
    {
      title: "Discovery & Strategy",
      description:
        "Deep understanding of your brand, audience, and objectives through thoughtful dialogue and strategic analysis.",
    },
    {
      title: "Design & Art Direction",
      description:
        "Defining refined visual languages and interaction patterns that communicate with clarity and distinction.",
    },
    {
      title: "Engineering & Craft",
      description:
        "Building with technical precision, exceptional performance, and meticulous attention to detail.",
    },
    {
      title: "Ongoing Partnership",
      description:
        "Evolving your digital presence as your brand grows, maintaining the highest standards of quality and execution.",
    },
  ],
  clientsHeading: "Select Clients",
  clientsLabel: "Clients",
  clientTypes: ["Luxury brands", "Cultural institutions", "Premium hospitality", "Design-led agencies", "High-end retail"],
  clientsIntro:
    "We partner with industrial groups, global manufacturers, logistics leaders, and event specialists—often creating the very first digital presence for new brands—delivering tools and experiences that support their operations.",
  ctaHeading: "For brands that value precision, craft, and enduring design.",
  ctaBody:
    "We collaborate with discerning clients who understand that exceptional digital experiences require both vision and restraint.",
  ctaButton: "Start a conversation",
}

const es: CopyShape = {
  hero: {
    eyebrow: "Agencia boutique de producto digital en Barcelona",
    titleLines: ["Desarrollo local", "Impacto global"],
    subtitle:
      "Agencia boutique de producto digital en Barcelona, especializada en software a medida: productos, herramientas internas e integraciones (WhatsApp, Instagram, automatizaciones) diseñadas alrededor de tus procesos reales.",
  },
  capabilitiesHeading: "Capacidades",
  capabilitiesLabel: "Capacidades",
  capabilities: [
    {
      title: "Productos digitales a medida",
      description:
        "Diseñamos y desarrollamos aplicaciones web y herramientas internas completamente adaptadas a tu forma de trabajar, sin plantillas genéricas.",
    },
    {
      title: "Diseño de producto y experiencia",
      description:
        "Definimos la experiencia completa del producto: flujos, interfaces y estados que hacen que procesos complejos se sientan claros y manejables.",
    },
    {
      title: "Plataformas y sistemas conectados",
      description:
        "Creamos plataformas que integran distintos sistemas, datos y servicios, con una arquitectura pensada para crecer de forma sostenible.",
    },
    {
      title: "E‑commerce y flujos transaccionales",
      description:
        "Diseñamos y construimos experiencias de compra y flujos de pago que priorizan conversión, claridad y confianza del usuario.",
    },
    {
      title: "Excelencia Técnica & Rendimiento",
      description:
        "Construimos con precisión boutique: código limpio, rendimiento sólido y una base técnica que permite evolucionar el producto con calma.",
    },
  ],
  approachHeading: "Nuestro Enfoque",
  approachIntro:
    "Trabajamos con precisión y propósito, conectando estrategia de negocio, diseño de producto e ingeniería. Partimos siempre de tus procesos reales y los traducimos en flujos digitales claros, eficientes y, cuando tiene sentido, automatizados.",
  approachSteps: [
    {
      title: "Descubrimiento & Estrategia",
      description:
        "Entendemos tu negocio, tus equipos y cómo trabajáis hoy: procesos, herramientas, puntos de fricción y oportunidades de automatización. A partir de ahí definimos qué software tiene más sentido construir.",
    },
    {
      title: "Diseño & Dirección de Arte",
      description:
        "Definimos la experiencia del producto: interfaces, flujos y estados que hacen que tareas complejas se sientan claras y utilizables, manteniendo una expresión visual coherente con tu marca.",
    },
    {
      title: "Ingeniería & Craft",
      description:
        "Construimos software a medida con precisión técnica: paneles internos, plataformas y servicios que se integran con tus sistemas existentes (CRM, herramientas de email, redes sociales, etc.), cuidando rendimiento, accesibilidad y estabilidad desde el inicio.",
    },
    {
      title: "Relación Continua",
      description:
        "Acompañamos la evolución de tu ecosistema digital: medimos cómo se usa el software, afinamos procesos, añadimos nuevas automatizaciones e iteramos sobre el producto a medida que tu negocio crece.",
    },
  ],
  clientsHeading: "Clientes",
  clientsLabel: "Clientes",
  clientTypes: [
    "Marcas de lujo",
    "Instituciones culturales",
    "Hostelería premium",
    "Agencias de diseño",
    "Retail de alta gama",
  ],
  clientsIntro:
    "Colaboramos con grupos industriales, fabricantes globales, compañías logísticas y especialistas en eventos. A menudo somos el equipo que crea la primera presencia digital de nuevas marcas, diseñando y desarrollando soluciones que sostienen su actividad día a día.",
  ctaHeading: "Software a medida para procesos que importan.",
  ctaBody:
    "Trabajamos con equipos que quieren ir más allá de las plantillas: primeros productos digitales, herramientas internas, automatizaciones de procesos e integraciones específicas para su negocio. Si necesitas un socio que entienda tus procesos y los convierta en buen software, podemos ayudarte.",
  ctaButton: "Iniciar una conversación",
}

export const copy: Record<Locale, CopyShape> = {
  en,
  es,
}


