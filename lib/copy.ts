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
      title: "Strategic Design & Art Direction",
      description:
        "Defining visual languages and interaction patterns that elevate perception and reinforce brand positioning.",
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
    "We partner with industrial groups, global manufacturers, logistics leaders, and event specialists, producing digital tools and experiences that support their operations.",
  ctaHeading: "For brands that value precision, craft, and enduring design.",
  ctaBody:
    "We collaborate with discerning clients who understand that exceptional digital experiences require both vision and restraint.",
  ctaButton: "Start a conversation",
}

const es: CopyShape = {
  hero: {
    eyebrow: "Agencia Digital en Barcelona",
    titleLines: ["Experiencias", "Digitales", "Que Permanecen"],
    subtitle:
      "Agencia digital joven en Barcelona que diseña y desarrolla experiencias esenciales para marcas, eventos y organizaciones que valoran el detalle y el impacto a largo plazo.",
  },
  capabilitiesHeading: "Capacidades",
  capabilitiesLabel: "Capacidades",
  capabilities: [
    {
      title: "Identidad de Marca & Expresión Digital",
      description:
        "Traducimos el valor de tu marca en experiencias digitales coherentes que comunican con claridad y personalidad.",
    },
    {
      title: "Diseño Estratégico & Dirección de Arte",
      description:
        "Definimos lenguajes visuales e interacciones que elevan la percepción y refuerzan tu posicionamiento.",
    },
    {
      title: "Plataformas Digitales a Medida",
      description:
        "Desarrollamos soluciones a medida para marcas premium, instituciones culturales y eventos que exigen una ejecución impecable.",
    },
    {
      title: "E‑commerce & Experiencia de Compra",
      description:
        "Creamos experiencias online que reflejan la calidad y el cuidado detrás de tus productos y servicios.",
    },
    {
      title: "Excelencia Técnica & Rendimiento",
      description:
        "Construimos con precisión, optimizando rendimiento, accesibilidad y fiabilidad para el futuro.",
    },
  ],
  approachHeading: "Nuestro Enfoque",
  approachIntro:
    "Trabajamos con precisión y propósito, equilibrando la ambición creativa con la claridad funcional. Cada decisión es intencionada.",
  approachSteps: [
    {
      title: "Descubrimiento & Estrategia",
      description:
        "Entendemos tu marca, audiencia y objetivos a través de conversaciones cercanas y análisis estratégico.",
    },
    {
      title: "Diseño & Dirección de Arte",
      description:
        "Definimos lenguajes visuales e interacciones que refuerzan tu posición y se sienten propios de tu marca.",
    },
    {
      title: "Ingeniería & Craft",
      description:
        "Construimos con precisión técnica, cuidando rendimiento, accesibilidad y estabilidad desde el inicio.",
    },
    {
      title: "Relación Continua",
      description:
        "Acompañamos la evolución de tu ecosistema digital, afinando y ampliando con el tiempo.",
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
    "Colaboramos con grupos industriales, fabricantes globales, compañías logísticas y especialistas en eventos, creando soluciones y experiencias digitales que apoyan su actividad.",
  ctaHeading: "Para marcas que buscan un socio digital exigente.",
  ctaBody:
    "Colaboramos con equipos que valoran la estrategia, el detalle y la consistencia a largo plazo en todos sus puntos de contacto digitales.",
  ctaButton: "Iniciar una conversación",
}

export const copy: Record<Locale, CopyShape> = {
  en,
  es,
}


