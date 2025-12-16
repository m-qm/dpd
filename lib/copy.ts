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
    eyebrow: "Boutique custom software studio in Barcelona",
    titleLines: ["Digital", "Experiences", "That Endure"],
    subtitle:
      "A boutique custom software studio in Barcelona, specialised in digital products, custom internal tools, and process automation, with integrations (WhatsApp, Telegram, Instagram) designed around your real-world workflows.",
  },
  capabilitiesHeading: "Capabilities",
  capabilitiesLabel: "Capabilities",
  capabilities: [
    {
      title: "Custom digital products",
      description:
        "We design and build web applications and internal tools that are fully tailored to how your team actually works, not to a generic template.",
    },
    {
      title: "Product & experience design",
      description:
        "We define the end-to-end product experience: flows, interfaces, and states that make complex processes feel clear and manageable.",
    },
    {
      title: "Platforms & connected systems",
      description:
        "We create platforms that connect different systems, data, and services, with an architecture designed to scale sustainably.",
    },
    {
      title: "E‑commerce & transactional flows",
      description:
        "We design and implement purchasing experiences and payment flows that prioritise conversion, clarity, and user confidence.",
    },
    {
      title: "Technical excellence, data & automation",
      description:
        "We build with boutique-level precision: clean code, solid performance, and a technical foundation for data visualisation, AI-assisted workflows, and process automation that can grow with your business.",
    },
  ],
  approachHeading: "Our Approach",
  approachIntro:
    "We design and build custom software in Next.js and React for teams that need tools shaped around their real processes—not generic platforms. We work with precision and purpose, connecting business strategy, product design, and engineering, and translating your workflows into clear, efficient, and—where it makes sense—automated digital flows.",
  approachSteps: [
    {
      title: "Discovery & Strategy",
      description:
        "We get close to your business, teams, and how you work today: processes, tools, friction points, and opportunities for automation. From there, we define what software makes the most sense to build.",
    },
    {
      title: "Design & Art Direction",
      description:
        "We shape the product experience: interfaces, flows, and states that make complex tasks feel clear and usable, while keeping a visual language that feels true to your brand.",
    },
    {
      title: "Engineering & Craft",
      description:
        "We engineer custom software with technical precision: internal dashboards, platforms, and services that integrate with your existing systems (CRM, email tools, social platforms, etc.), with performance, accessibility, and stability built in from the start.",
    },
    {
      title: "Ongoing Partnership",
      description:
        "We stay close as your digital ecosystem evolves: measuring how the software is used, refining processes, adding new automations, and iterating on the product as your business grows.",
    },
  ],
  clientsHeading: "Select Clients",
  clientsLabel: "Clients",
  clientTypes: ["Luxury brands", "Cultural institutions", "Premium hospitality", "Design-led agencies", "High-end retail"],
  clientsIntro:
    "We partner with industrial groups, global manufacturers, logistics leaders, and event specialists. Often, we are the team that creates the very first digital presence for new brands, designing and building the software that quietly supports their day-to-day operations.",
  ctaHeading: "Custom software for processes that matter.",
  ctaBody:
    "We work with teams who want to go beyond templates: first digital products, internal tools, process automation, and integrations tailored to their context. If you need a partner who understands your processes and turns them into well-crafted software, we can help.",
  ctaButton: "Start a conversation",
}

const es: CopyShape = {
  hero: {
    eyebrow: "Agencia boutique de software a medida en Barcelona",
    titleLines: ["Desarrollo local", "Impacto global"],
    subtitle:
      "Agencia boutique de software a medida en Barcelona (España), especializada en productos digitales, herramientas internas personalizadas y automatización de procesos, con integraciones (WhatsApp, Telegram, Instagram) diseñadas alrededor de tus flujos reales.",
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
      title: "Excelencia técnica, datos & automatización",
      description:
        "Construimos con precisión boutique: código limpio, rendimiento sólido y una base técnica preparada para visualización de datos, asistentes con IA y automatización de procesos que crecen junto a tu negocio.",
    },
  ],
  approachHeading: "Nuestro Enfoque",
  approachIntro:
    "Diseñamos y construimos software a medida con Next.js y React para equipos que necesitan herramientas adaptadas a sus procesos, no a una plataforma genérica. Trabajamos con precisión y propósito, conectando estrategia de negocio, diseño de producto e ingeniería, y traduciendo tus flujos reales en experiencias digitales claras, eficientes y, cuando tiene sentido, automatizadas.",
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


