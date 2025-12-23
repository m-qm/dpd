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
    eyebrow: "Boutique digital software studio in Barcelona",
    titleLines: ["Your Process", "Our Dual Perspective"],
    subtitle:
      "We turn your process into digital software. Custom websites, interactive displays, and integrations that fit how your team actually works. An open service mindset and a close, honest partnership from day one.",
  },
  capabilitiesHeading: "Capabilities",
  capabilitiesLabel: "Capabilities",
  capabilities: [
    {
      title: "Custom websites & web applications",
      description:
        "Websites and applications built around your team's workflow, not generic templates. Reduce manual work and streamline processes.",
    },
    {
      title: "Interactive displays & event solutions",
      description:
        "Engage event attendees with interactive displays that connect to your systems. Real-time data, seamless integrations, visual impact.",
    },
    {
      title: "Chatbots & conversational interfaces",
      description:
        "Automate interactions and centralize communication. Intelligent chatbots that understand context and reduce support workload.",
    },
    {
      title: "Messaging platform integrations",
      description:
        "Connect your systems with WhatsApp, Telegram, and messaging platforms. Reach users where they already communicate.",
    },
    {
      title: "Process automation & integrations",
      description:
        "Turn manual workflows into automated flows. Connect existing systems, reduce errors, and scale operations efficiently.",
    },
  ],
  approachHeading: "Our Approach",
  approachIntro:
    "We understand your process first, then build the solution. Fast execution comes from deep understanding, not shortcuts.",
  approachSteps: [
    {
      title: "Understand Your Process",
      description:
        "We start by learning how your team works, what slows you down, and what success looks like. Even for urgent projects, we take time to understand first.",
    },
    {
      title: "Design for Clarity",
      description:
        "We create interfaces that make complex processes feel simple. Visual design that guides users, not just looks good.",
    },
    {
      title: "Build with Precision",
      description:
        "We deliver solutions that integrate seamlessly with your existing systems. Clean code, solid performance, ready from day one.",
    },
    {
      title: "Evolve Together",
      description:
        "As your needs change, we adapt. We measure what matters, refine what doesn't work, and iterate as your business grows.",
    },
  ],
  clientsHeading: "Select Clients",
  clientsLabel: "Clients",
  clientTypes: ["Event organization", "Industrial groups", "Global manufacturers", "Logistics & shipping", "New brand launches"],
  clientsIntro:
    "We work with teams who need software that fits their process, not the other way around. From event organizers who need interactive displays connected to their systems, to manufacturers launching new brands who need their first digital presence—we build solutions that work from day one.",
  ctaHeading: "Ready to turn your process into your advantage?",
  ctaBody:
    "Let's talk about your specific needs. Whether it's a custom website, interactive event displays, chatbots, or integrations—we build solutions that fit how you work.",
  ctaButton: "Start a conversation",
}

const es: CopyShape = {
  hero: {
    eyebrow: "Estudio boutique de software digital a medida en Barcelona",
    titleLines: ["Tu Proceso", "Nuestra Doble Perspectiva"],
    subtitle:
      "Convertimos tu proceso en software digital funcional. Sitios web a medida, displays interactivos e integraciones que se adaptan a cómo trabaja realmente tu equipo. Un servicio abierto, cercano y honesto desde el primer día.",
  },
  capabilitiesHeading: "Capacidades",
  capabilitiesLabel: "Capacidades",
  capabilities: [
    {
      title: "Sitios web y aplicaciones a medida",
      description:
        "Sitios web y aplicaciones construidas alrededor del flujo de trabajo de tu equipo, no plantillas genéricas. Reduce trabajo manual y optimiza procesos.",
    },
    {
      title: "Displays interactivos y soluciones para eventos",
      description:
        "Involucra a los asistentes con displays interactivos conectados a tus sistemas. Datos en tiempo real, integraciones fluidas, impacto visual.",
    },
    {
      title: "Chatbots e interfaces conversacionales",
      description:
        "Automatiza interacciones y centraliza la comunicación. Chatbots inteligentes que entienden contexto y reducen la carga de soporte.",
    },
    {
      title: "Integraciones con plataformas de mensajería",
      description:
        "Conecta tus sistemas con WhatsApp, Telegram y plataformas de mensajería. Llega a tus usuarios donde ya se comunican.",
    },
    {
      title: "Automatización de procesos e integraciones",
      description:
        "Convierte flujos de trabajo manuales en procesos automatizados. Conecta sistemas existentes, reduce errores y escala operaciones eficientemente.",
    },
  ],
  approachHeading: "Nuestro Enfoque",
  approachIntro:
    "Entendemos tu proceso primero, luego construimos la solución. La ejecución rápida viene de entender en profundidad, no de atajos.",
  approachSteps: [
    {
      title: "Entender Tu Proceso",
      description:
        "Empezamos aprendiendo cómo trabaja tu equipo, qué los ralentiza y cómo se ve el éxito. Incluso para proyectos urgentes, tomamos tiempo para entender primero.",
    },
    {
      title: "Diseñar para la Claridad",
      description:
        "Creamos interfaces que hacen que procesos complejos se sientan simples. Diseño visual que guía a los usuarios, no solo se ve bien.",
    },
    {
      title: "Construir con Precisión",
      description:
        "Entregamos soluciones que se integran perfectamente con tus sistemas existentes. Código limpio, rendimiento sólido, listo desde el inicio.",
    },
    {
      title: "Evolucionar Juntos",
      description:
        "A medida que tus necesidades cambian, nos adaptamos. Medimos lo que importa, afinamos lo que no funciona e iteramos mientras tu negocio crece.",
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
    "Trabajamos con equipos que necesitan software que se adapte a su proceso, no al revés. Desde organizadores de eventos que necesitan displays interactivos conectados a sus sistemas, hasta fabricantes que lanzan nuevas marcas y necesitan su primera presencia digital—construimos soluciones que funcionan desde el primer día.",
  ctaHeading: "¿Listo para convertir tu proceso en tu ventaja?",
  ctaBody:
    "Hablemos de tus necesidades específicas. Ya sea un sitio web a medida, displays interactivos para eventos, chatbots o integraciones—construimos soluciones que se adaptan a cómo trabajas.",
  ctaButton: "Iniciar una conversación",
}

export const copy: Record<Locale, CopyShape> = {
  en,
  es,
}


