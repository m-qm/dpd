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
    titleLines: ["Digital Solutions", "Built Around", "Your Process"],
    subtitle:
      "Custom software, interactive displays, and integrations designed to work the way your team actually works. No templates. No guesswork.",
  },
  capabilitiesHeading: "What We Build: Custom Software & Interactive Solutions",
  capabilitiesLabel: "Capabilities",
  capabilities: [
    {
      title: "Custom websites & web applications",
      description:
        "Custom web applications that automate your internal processes. Example: event organizers managing exhibitor data, floor plans, and attendee check-ins from one dashboard.",
    },
    {
      title: "Interactive displays & event solutions",
      description:
        "Interactive displays tailored to your event workflow. Example: multi-screen experiences that pull data from your CRM and update in real time as attendees interact.",
    },
    {
      title: "Chatbots & conversational interfaces",
      description:
        "Chatbots that centralize communication and reduce manual replies. Example: a WhatsApp bot that qualifies leads, routes requests, and syncs with your internal tools.",
    },
    {
      title: "Messaging platform integrations",
      description:
        "Integrations with WhatsApp, Telegram, and messaging platforms so your systems talk to where your users already are.",
    },
    {
      title: "Process automation & integrations",
      description:
        "We turn manual workflows into automated flows by connecting the tools you already use. Fewer spreadsheets, fewer status meetings, fewer errors.",
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
  ctaHeading: "Ready when your team is",
  ctaBody:
    "Let's talk about your specific needs. Whether it's a custom website, interactive event displays, chatbots, or integrations—we build solutions that fit how you work.",
  ctaButton: "Start a conversation",
}

const es: CopyShape = {
  hero: {
    eyebrow: "Estudio boutique de software digital a medida en Barcelona",
    titleLines: ["Soluciones digitales", "construidas alrededor", "de tu proceso"],
    subtitle:
      "Software a medida, displays interactivos e integraciones diseñadas para funcionar como trabaja realmente tu equipo. Sin plantillas. Sin adivinar.",
  },
  capabilitiesHeading: "Qué construimos: software a medida y soluciones interactivas",
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
  ctaHeading: "Listo cuando tu equipo lo necesita",
  ctaBody:
    "Hablemos de tus necesidades específicas. Ya sea un sitio web a medida, displays interactivos para eventos, chatbots o integraciones—construimos soluciones que se adaptan a cómo trabajas.",
  ctaButton: "Iniciar una conversación",
}

export const copy: Record<Locale, CopyShape> = {
  en,
  es,
}


