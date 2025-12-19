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
    titleLines: ["Your Process", "Our Focus"],
    subtitle:
      "Fast. Specialized. Visually Striking. We build custom websites, interactive displays, and specialized solutions that demand rapid execution and exceptional visual design. A close, honest partnership from day one.",
  },
  capabilitiesHeading: "Capabilities",
  capabilitiesLabel: "Capabilities",
  capabilities: [
    {
      title: "Custom websites & web applications",
      description:
        "Bespoke websites and web applications tailored to your needs, built with fast execution and exceptional visual design.",
    },
    {
      title: "Interactive displays & event solutions",
      description:
        "Interactive TV displays and screens for events and fairs. Specialized solutions that combine visual impact with technical precision.",
    },
    {
      title: "Chatbots & conversational interfaces",
      description:
        "Intelligent chatbots and conversational interfaces that engage users and automate interactions across platforms.",
    },
    {
      title: "Messaging platform integrations",
      description:
        "WhatsApp, Telegram, and messaging platform integrations that connect your systems with where your users communicate.",
    },
    {
      title: "Fast execution & technical excellence",
      description:
        "Highly specialized projects delivered quickly. Clean code, solid performance, and scalable architecture from day one.",
    },
  ],
  approachHeading: "Our Approach",
  approachIntro:
    "Specialized solutions, executed fast, designed to impress.",
  approachSteps: [
    {
      title: "Discovery & Strategy",
      description:
        "We quickly understand your needs and define the specialized solution, even for time-sensitive projects.",
    },
    {
      title: "Design & Visual Craft",
      description:
        "We design visually striking interfaces and experiences that make complex tasks clear and engaging.",
    },
    {
      title: "Fast Engineering & Execution",
      description:
        "We build with speed and precision, delivering specialized solutions that integrate seamlessly and perform from day one.",
    },
    {
      title: "Ongoing Partnership",
      description:
        "We measure, refine, and iterate as your business grows, maintaining the same fast, specialized approach.",
    },
  ],
  clientsHeading: "Select Clients",
  clientsLabel: "Clients",
  clientTypes: ["Event organization", "Industrial groups", "Global manufacturers", "Logistics & shipping", "New brand launches"],
  clientsIntro:
    "We partner with industrial groups, manufacturers, logistics companies, and event specialists, creating solutions for their digital needs in events and beyond.",
  ctaHeading: "Specialized solutions, executed fast, designed to impress.",
  ctaBody:
    "Custom websites, interactive displays, chatbots, messaging integrations, and specialized digital solutions tailored to your needs.",
  ctaButton: "Start a conversation",
}

const es: CopyShape = {
  hero: {
    eyebrow: "Agencia boutique de software a medida en Barcelona",
    titleLines: ["Tu Proceso", "Nuestro Enfoque"],
    subtitle:
      "Rápido. Especializado. Visualmente Impactante. Construimos sitios web a medida, displays interactivos y soluciones especializadas que requieren ejecución rápida y diseño visual excepcional. Una relación cercana y honesta desde el primer día.",
  },
  capabilitiesHeading: "Capacidades",
  capabilitiesLabel: "Capacidades",
  capabilities: [
    {
      title: "Sitios web y aplicaciones a medida",
      description:
        "Sitios web y aplicaciones web a medida adaptadas a tus necesidades, construidas con ejecución rápida y diseño visual excepcional.",
    },
    {
      title: "Displays interactivos y soluciones para eventos",
      description:
        "Displays interactivos y pantallas para eventos y ferias. Soluciones especializadas que combinan impacto visual con precisión técnica.",
    },
    {
      title: "Chatbots e interfaces conversacionales",
      description:
        "Chatbots inteligentes e interfaces conversacionales que involucran a los usuarios y automatizan interacciones en múltiples plataformas.",
    },
    {
      title: "Integraciones con plataformas de mensajería",
      description:
        "Integraciones con WhatsApp, Telegram y otras plataformas de mensajería que conectan tus sistemas con donde se comunican tus usuarios.",
    },
    {
      title: "Ejecución rápida y excelencia técnica",
      description:
        "Proyectos altamente especializados entregados rápidamente. Código limpio, rendimiento sólido y arquitectura escalable desde el inicio.",
    },
  ],
  approachHeading: "Nuestro Enfoque",
  approachIntro:
    "Soluciones especializadas, ejecutadas rápido, diseñadas para impresionar.",
  approachSteps: [
    {
      title: "Descubrimiento & Estrategia",
      description:
        "Entendemos rápidamente tus necesidades y definimos la solución especializada, incluso para proyectos con plazos ajustados.",
    },
    {
      title: "Diseño & Craft Visual",
      description:
        "Diseñamos interfaces y experiencias visualmente impactantes que hacen tareas complejas claras y atractivas.",
    },
    {
      title: "Ingeniería Rápida & Ejecución",
      description:
        "Construimos con velocidad y precisión, entregando soluciones especializadas que se integran perfectamente y funcionan desde el inicio.",
    },
    {
      title: "Relación Continua",
      description:
        "Medimos, afinamos e iteramos a medida que tu negocio crece, manteniendo el mismo enfoque rápido y especializado.",
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
  ctaHeading: "Soluciones especializadas, ejecutadas rápido, diseñadas para impresionar.",
  ctaBody:
    "Sitios web a medida, displays interactivos, chatbots, integraciones de mensajería y soluciones digitales especializadas adaptadas a tus necesidades.",
  ctaButton: "Iniciar una conversación",
}

export const copy: Record<Locale, CopyShape> = {
  en,
  es,
}


