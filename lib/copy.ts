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
      "Custom software, internal tools, and process automation with integrations designed around your workflows.",
  },
  capabilitiesHeading: "Capabilities",
  capabilitiesLabel: "Capabilities",
  capabilities: [
    {
      title: "Custom digital products",
      description:
        "Web applications and internal tools tailored to how your team works.",
    },
    {
      title: "Product & experience design",
      description:
        "End-to-end product experience: flows and interfaces that make complex processes clear.",
    },
    {
      title: "Platforms & connected systems",
      description:
        "Platforms that connect systems, data, and services with scalable architecture.",
    },
    {
      title: "E‑commerce & transactional flows",
      description:
        "Purchase experiences and payment flows focused on conversion and clarity.",
    },
    {
      title: "Technical excellence, data & automation",
      description:
        "Clean code, solid performance, and a foundation for data visualisation, AI workflows, and process automation.",
    },
  ],
  approachHeading: "Our Approach",
  approachIntro:
    "Custom software shaped around your real processes. We translate workflows into clear, efficient, and automated digital flows.",
  approachSteps: [
    {
      title: "Discovery & Strategy",
      description:
        "We understand your business, processes, and automation opportunities. Then we define what software to build.",
    },
    {
      title: "Design & Art Direction",
      description:
        "We design interfaces and flows that make complex tasks clear, with a visual language true to your brand.",
    },
    {
      title: "Engineering & Craft",
      description:
        "We build internal dashboards, platforms, and services that integrate with your existing systems, with performance and stability from day one.",
    },
    {
      title: "Ongoing Partnership",
      description:
        "We measure usage, refine processes, add automations, and iterate as your business grows.",
    },
  ],
  clientsHeading: "Select Clients",
  clientsLabel: "Clients",
  clientTypes: ["Event organization", "Industrial groups", "Global manufacturers", "Logistics & shipping", "New brand launches"],
  clientsIntro:
    "We partner with industrial groups, manufacturers, logistics companies, and event specialists. Often, we create the first digital presence for new brands.",
  ctaHeading: "Custom software for processes that matter.",
  ctaBody:
    "First digital products, internal tools, process automation, and integrations tailored to your context.",
  ctaButton: "Start a conversation",
}

const es: CopyShape = {
  hero: {
    eyebrow: "Agencia boutique de software a medida en Barcelona",
    titleLines: ["Desarrollo local", "Impacto global"],
    subtitle:
      "Software a medida, herramientas internas y automatización de procesos con integraciones diseñadas alrededor de tus flujos.",
  },
  capabilitiesHeading: "Capacidades",
  capabilitiesLabel: "Capacidades",
  capabilities: [
    {
      title: "Productos digitales a medida",
      description:
        "Aplicaciones web y herramientas internas adaptadas a cómo trabaja tu equipo.",
    },
    {
      title: "Diseño de producto y experiencia",
      description:
        "Experiencia completa del producto: flujos e interfaces que hacen procesos complejos claros.",
    },
    {
      title: "Plataformas y sistemas conectados",
      description:
        "Plataformas que conectan sistemas, datos y servicios con arquitectura escalable.",
    },
    {
      title: "E‑commerce y flujos transaccionales",
      description:
        "Experiencias de compra y flujos de pago enfocados en conversión y claridad.",
    },
    {
      title: "Excelencia técnica, datos & automatización",
      description:
        "Código limpio, rendimiento sólido y base técnica para visualización de datos, IA y automatización.",
    },
  ],
  approachHeading: "Nuestro Enfoque",
  approachIntro:
    "Software a medida adaptado a tus procesos. Traducimos flujos en experiencias digitales claras, eficientes y automatizadas.",
  approachSteps: [
    {
      title: "Descubrimiento & Estrategia",
      description:
        "Entendemos tu negocio, procesos y oportunidades de automatización. Definimos qué software construir.",
    },
    {
      title: "Diseño de producto & UX",
      description:
        "Diseñamos interfaces y flujos que hacen tareas complejas claras, con expresión visual coherente con tu marca.",
    },
    {
      title: "Ingeniería & Craft",
      description:
        "Construimos paneles internos, plataformas y servicios que se integran con tus sistemas existentes, con rendimiento y estabilidad desde el inicio.",
    },
    {
      title: "Relación Continua",
      description:
        "Medimos uso, afinamos procesos, añadimos automatizaciones e iteramos a medida que tu negocio crece.",
    },
  ],
  clientsHeading: "Clientes",
  clientsLabel: "Clientes",
  clientTypes: [
    "Organización de eventos",
    "Grupos industriales",
    "Fabricantes globales",
    "Logística y transporte",
    "Lanzamientos de nuevas marcas",
  ],
  clientsIntro:
    "Colaboramos con grupos industriales, fabricantes, compañías logísticas y especialistas en eventos. A menudo creamos la primera presencia digital de nuevas marcas.",
  ctaHeading: "Software a medida para procesos que importan.",
  ctaBody:
    "Primeros productos digitales, herramientas internas, automatizaciones e integraciones específicas para tu negocio.",
  ctaButton: "Iniciar una conversación",
}

export const copy: Record<Locale, CopyShape> = {
  en,
  es,
}


