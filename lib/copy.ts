export type Locale = "en" | "es"

type HeroCopy = {
  eyebrow: string
  titleLines: string[]
  subtitle: string
}

type Capability = { title: string; description: string }

type ServicePageCopy = {
  whatsapp: {
    breadcrumb: string
    hero: {
      badge: string
      title: string
      subtitle: string
      cta1: string
      cta2: string
    }
    problem: {
      title: string
      point1Title: string
      point1Desc: string
      point2Title: string
      point2Desc: string
    }
    solution: {
      title: string
      subtitle: string
      feature1Title: string
      feature1Desc: string
      feature2Title: string
      feature2Desc: string
      feature3Title: string
      feature3Desc: string
    }
    howItWorks: {
      title: string
      steps: Array<{ step: string; title: string; description: string }>
    }
    pricing: {
      title: string
      subtitle: string
      setupTitle: string
      setupPrice: string
      setupPriceLabel: string
      retainerTitle: string
      retainerPrice: string
      retainerPriceLabel: string
      roiTitle: string
      roiDesc: string
    }
    useCases: {
      title: string
      case1Title: string
      case1Desc: string
      case2Title: string
      case2Desc: string
      case3Title: string
      case3Desc: string
    }
    cta: {
      badge: string
      title: string
      subtitle: string
    }
  }
  events: {
    breadcrumb: string
    hero: {
      badge: string
      title: string
      subtitle: string
      cta1: string
      cta2: string
    }
    problem: {
      title: string
      point1Title: string
      point1Desc: string
      point2Title: string
      point2Desc: string
    }
    solution: {
      title: string
      subtitle: string
      feature1Title: string
      feature1Desc: string
      feature2Title: string
      feature2Desc: string
      feature3Title: string
      feature3Desc: string
    }
    features: {
      title: string
      perfectForTitle: string
      whatWeBuildTitle: string
    }
    process: {
      title: string
      steps: Array<{ step: string; title: string; description: string }>
      rushTitle: string
      rushDesc: string
    }
    pricing: {
      title: string
      subtitle: string
      standardTitle: string
      premiumTitle: string
      enterpriseTitle: string
      disclaimer: string
    }
    cta: {
      badge: string
      title: string
      subtitle: string
    }
  }
}

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
  services: ServicePageCopy
}

const en: CopyShape = {
  hero: {
    eyebrow: "WhatsApp Automation & Interactive Event Displays | Barcelona",
    titleLines: ["Automate Customer", "Interactions.", "Elevate Event", "Experiences."],
    subtitle:
      "We specialize in two things: WhatsApp/chatbot integrations that save Spanish businesses hours every day, and interactive event displays that turn booths into engaging experiences. Clear pricing. Proven ROI.",
  },
  capabilitiesHeading: "Two Core Services: WhatsApp Automation & Event Displays",
  capabilitiesLabel: "Services",
  capabilities: [
    {
      title: "WhatsApp & Chatbot Automation",
      description:
        "Stop drowning in manual WhatsApp inquiries. Our intelligent chatbots handle FAQs, qualify leads, route requests, and sync with your CRM automatically. Save 15-20 hours per week on customer interactions. Starting at €5,500 setup + €1,200/month support.",
    },
    {
      title: "Interactive Event Displays",
      description:
        "Transform your trade show booth from static to stunning. Custom interactive displays that capture leads, showcase real-time data, and create memorable experiences at Barcelona events like MWC and ISE. From €2,000 per event.",
    },
    {
      title: "Messaging Platform Integrations",
      description:
        "Connect your existing systems with WhatsApp, Telegram, and messaging platforms. Reach your customers where they already communicate, with automated flows that integrate seamlessly with your CRM and databases.",
    },
    {
      title: "Custom Web Applications",
      description:
        "Custom web applications that automate your internal processes. Event organizers managing exhibitor data, floor plans, and attendee check-ins from one dashboard. Built for your specific workflow.",
    },
    {
      title: "Process Automation & Integrations",
      description:
        "Turn manual workflows into automated flows by connecting the tools you already use. Fewer spreadsheets, fewer status meetings, fewer errors. Focus on growth while we handle the automation.",
    },
  ],
  approachHeading: "Our Approach",
  approachIntro:
    "We understand your process first, then build the solution. Fast execution comes from deep understanding, not shortcuts. As a Barcelona-based studio, we offer in-person meetings and local support.",
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
    "We work with Spanish SMEs who need software that fits their process, not the other way around. From event organizers who need interactive displays connected to their systems, to retailers automating WhatsApp inquiries—we build solutions that work from day one. Barcelona-based with in-person meetings available.",
  ctaHeading: "Start Automating or Planning Your Event Display",
  ctaBody:
    "Book a free 30-minute consultation. We'll assess your WhatsApp automation needs or discuss your upcoming event display—with no commitment. You'll leave with actionable insights, even if we're not the right fit.",
  ctaButton: "Book Free Consultation",
  services: {
    whatsapp: {
      breadcrumb: "WhatsApp Automation",
      hero: {
        badge: "WhatsApp Automation",
        title: "Stop Drowning in WhatsApp Inquiries",
        subtitle: "Our intelligent chatbots handle FAQs, qualify leads, and sync with your CRM—automatically. Save 15-20 hours per week on manual customer interactions while improving response times.",
        cta1: "Get Free 30-Minute Assessment",
        cta2: "View Pricing",
      },
      problem: {
        title: "The Manual WhatsApp Problem",
        point1Title: "Your team is overwhelmed",
        point1Desc: "50+ daily WhatsApp inquiries. Same questions repeated. Staff spending hours on manual replies instead of high-value work. Response times stretching to hours or even days.",
        point2Title: "Customers are frustrated",
        point2Desc: "Slow responses lose sales. Customers expect instant answers. Manual processes can't scale. You're missing opportunities while your competitors automate.",
      },
      solution: {
        title: "Automated WhatsApp That Actually Works",
        subtitle: "We build intelligent WhatsApp chatbots that integrate with your existing systems—CRM, databases, websites—so customer data flows automatically. No manual copying. No spreadsheets.",
        feature1Title: "Instant FAQ Responses",
        feature1Desc: "Your chatbot answers common questions instantly—hours, pricing, availability. Customers get immediate answers, 24/7.",
        feature2Title: "Lead Qualification",
        feature2Desc: "Automatically collect key information, qualify leads, and route them to the right person. Your team only handles hot prospects.",
        feature3Title: "CRM Integration",
        feature3Desc: "Every interaction syncs to your CRM automatically. Full conversation history. No data entry. Just insights.",
      },
      howItWorks: {
        title: "How We Implement Your WhatsApp Automation",
        steps: [
          {
            step: "01",
            title: "Process Discovery",
            description: "We analyze your current WhatsApp workflow, common inquiries, and pain points. 30-minute assessment call to understand your needs.",
          },
          {
            step: "02",
            title: "Chatbot Design",
            description: "We design conversation flows that handle your specific use cases. You approve the flows before any development starts.",
          },
          {
            step: "03",
            title: "Integration & Setup",
            description: "We connect WhatsApp Business API, integrate with your CRM/systems, test thoroughly, and train your team.",
          },
          {
            step: "04",
            title: "Launch & Optimize",
            description: "We go live, monitor performance, and continuously optimize based on real usage data. Monthly reviews included in retainer.",
          },
        ],
      },
      pricing: {
        title: "Transparent Pricing",
        subtitle: "No hidden fees. No surprises. Clear pricing that reflects the value you get.",
        setupTitle: "Initial Setup",
        setupPrice: "€5,500",
        setupPriceLabel: "one-time",
        retainerTitle: "Monthly Support",
        retainerPrice: "€1,200",
        retainerPriceLabel: "per month",
        roiTitle: "Typical ROI: 3 Months",
        roiDesc: "If you handle 50+ WhatsApp inquiries daily, that's ~20 hours/week of staff time. Automating 50% saves €1,500-€2,500/month in labor costs. Investment pays for itself quickly.",
      },
      useCases: {
        title: "Perfect For Spanish SMEs",
        case1Title: "Retail & E-commerce",
        case1Desc: "Answer product questions, check stock availability, handle order status inquiries, send shipping updates automatically.",
        case2Title: "Real Estate",
        case2Desc: "Qualify property inquiries, schedule viewings, answer common questions about listings, send property recommendations.",
        case3Title: "Hospitality & Services",
        case3Desc: "Handle booking inquiries, answer FAQs about services/hours, send confirmations, collect feedback automatically.",
      },
      cta: {
        badge: "Get Started",
        title: "Ready to Automate Your WhatsApp?",
        subtitle: "Book a free 30-minute assessment. We'll analyze your WhatsApp workflow and show you exactly how automation can save your team time—with no commitment.",
      },
    },
    events: {
      breadcrumb: "Interactive Event Displays",
      hero: {
        badge: "Interactive Event Displays",
        title: "Interactive Displays That Stop Traffic",
        subtitle: "Transform your trade show booth from static to stunning. Our custom interactive displays capture leads, showcase real-time data, and create memorable experiences that stand out at Barcelona's biggest events.",
        cta1: "Plan Your Event Display",
        cta2: "View Pricing",
      },
      problem: {
        title: "Static Booths Don't Engage",
        point1Title: "You're invisible in the crowd",
        point1Desc: "Hundreds of exhibitors competing for attention. Static posters and brochures blend into the noise. Attendees walk past without stopping. You're spending thousands on booth space but not getting noticed.",
        point2Title: "Lead capture is manual chaos",
        point2Desc: "Business cards get lost. Spreadsheets lag behind. Follow-ups take weeks. You have no real-time data on booth engagement or which demos worked. Valuable leads slip through the cracks.",
      },
      solution: {
        title: "Interactive Experiences That Attract & Convert",
        subtitle: "We build custom interactive displays tailored to your event goals—touchscreens that showcase products, capture leads automatically, pull live data from your systems, and create photo-worthy moments that attendees share.",
        feature1Title: "Eye-Catching Visuals",
        feature1Desc: "Large touchscreens with stunning visuals that make attendees stop and explore. Motion, color, and interactivity that demands attention in a crowded hall.",
        feature2Title: "Instant Lead Capture",
        feature2Desc: "Attendees interact with your display and their info flows directly to your CRM. No manual entry. Full engagement data. Follow up while the event is still happening.",
        feature3Title: "Real-Time Data Integration",
        feature3Desc: "Display live inventory, product specs, case studies, or social feeds. Pull data from your existing systems so information is always current and accurate.",
      },
      features: {
        title: "Built for Barcelona's Major Events",
        perfectForTitle: "Perfect For",
        whatWeBuildTitle: "What We Build",
      },
      process: {
        title: "From Concept to On-Site Support",
        steps: [
          {
            step: "01",
            title: "Event Briefing",
            description: "We discuss your event goals, booth layout, target audience, and key messages. 30-minute consultation to understand your vision.",
          },
          {
            step: "02",
            title: "Concept & Design",
            description: "We design the interactive experience with mockups and flow diagrams. You approve the concept before development starts.",
          },
          {
            step: "03",
            title: "Build & Integration",
            description: "We develop the display software, integrate with your data sources, and test on event-grade hardware. Rehearsal before the event.",
          },
          {
            step: "04",
            title: "On-Site Setup & Support",
            description: "We deliver and set up the display at your booth. On-site support during the event. Post-event analytics report with engagement metrics.",
          },
        ],
        rushTitle: "Rush Timelines Available",
        rushDesc: "We can deliver event displays in 2-3 weeks when needed. Contact us as soon as you have your booth confirmed to ensure we can accommodate your timeline.",
      },
      pricing: {
        title: "Transparent Event Pricing",
        subtitle: "Pricing depends on complexity and scope. Here are typical ranges to help you plan.",
        standardTitle: "Standard",
        premiumTitle: "Premium",
        enterpriseTitle: "Enterprise",
        disclaimer: "Pricing includes design, development, testing, on-site setup, and a post-event analytics report. Hardware rental available separately if needed. 50% deposit required to start, balance due before event.",
      },
      cta: {
        badge: "Get Started",
        title: "Ready to Stand Out at Your Next Event?",
        subtitle: "Schedule a consultation to discuss your upcoming event. We'll outline what's possible for your booth, timeline, and budget—with no commitment.",
      },
    },
  },
}

const es: CopyShape = {
  hero: {
    eyebrow: "Automatización WhatsApp y Displays Interactivos para Eventos | Barcelona",
    titleLines: ["Automatiza las", "interacciones.", "Eleva la experiencia", "de tus eventos."],
      subtitle:
        "Nos especializamos en dos cosas: integraciones de WhatsApp/chatbots que ahorran horas diarias a empresas españolas, y displays interactivos que convierten stands en experiencias memorables. Precios claros. ROI demostrado.",
  },
  capabilitiesHeading: "Dos Servicios Principales: Automatización WhatsApp y Displays para Eventos",
  capabilitiesLabel: "Servicios",
  capabilities: [
    {
      title: "Automatización de WhatsApp y Chatbots",
      description:
        "Deja de ahogarte en consultas manuales de WhatsApp. Nuestros chatbots inteligentes gestionan FAQs, cualifican leads, enrutan solicitudes y se sincronizan con tu CRM automáticamente. Ahorra 15-20 horas semanales. Desde €5.500 configuración + €1.200/mes soporte.",
    },
    {
      title: "Displays Interactivos para Eventos",
      description:
        "Transforma tu stand de feria de estático a impresionante. Displays interactivos personalizados que capturan leads, muestran datos en tiempo real y crean experiencias memorables en eventos de Barcelona como MWC e ISE. Desde €2.000 por evento.",
    },
    {
      title: "Integraciones con Plataformas de Mensajería",
      description:
        "Conecta tus sistemas existentes con WhatsApp, Telegram y plataformas de mensajería. Alcanza a tus clientes donde ya se comunican, con flujos automatizados que se integran perfectamente con tu CRM y bases de datos.",
    },
    {
      title: "Aplicaciones Web a Medida",
      description:
        "Aplicaciones web personalizadas que automatizan tus procesos internos. Organizadores de eventos gestionando datos de expositores, planos y registro de asistentes desde un panel. Construido para tu flujo de trabajo específico.",
    },
    {
      title: "Automatización de Procesos e Integraciones",
      description:
        "Convierte flujos de trabajo manuales en procesos automatizados conectando las herramientas que ya usas. Menos excels, menos reuniones de estado, menos errores. Enfócate en crecer mientras nosotros manejamos la automatización.",
    },
  ],
  approachHeading: "Nuestro Enfoque",
  approachIntro:
    "Entendemos tu proceso primero, luego construimos la solución. La ejecución rápida viene de entender en profundidad, no de atajos. Como estudio local en Barcelona, ofrecemos reuniones presenciales y soporte cercano.",
  approachSteps: [
    {
      title: "Entender Tu Proceso",
      description:
        "Empezamos aprendiendo cómo trabaja tu equipo, qué los ralentiza y cómo se ve el éxito. Incluso para proyectos urgentes, tomamos tiempo para entender primero.",
    },
    {
      title: "Diseño Claro",
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
    "Trabajamos con PYMEs españolas que necesitan software que se adapte a su proceso, no al revés. Desde organizadores de eventos que necesitan displays interactivos conectados a sus sistemas, hasta comercios que buscan automatizar WhatsApp—construimos soluciones que funcionan desde el primer día. Con base en Barcelona, reuniones presenciales disponibles.",
  ctaHeading: "Comienza a Automatizar o Planifica tu Display para Eventos",
  ctaBody:
    "Reserva una consulta gratuita de 30 minutos. Evaluaremos tus necesidades de automatización de WhatsApp o discutiremos tu próximo display para eventos—sin compromiso. Saldrás con insights accionables, incluso si no somos la mejor opción para ti.",
  ctaButton: "Reservar Consulta Gratuita",
  services: {
    whatsapp: {
      breadcrumb: "Automatización WhatsApp",
      hero: {
        badge: "Automatización WhatsApp",
        title: "Deja de Ahogarte en Consultas de WhatsApp",
        subtitle: "Nuestros chatbots inteligentes gestionan FAQs, cualifican leads y se sincronizan con tu CRM—automáticamente. Ahorra 15-20 horas semanales en interacciones manuales mientras mejoras los tiempos de respuesta.",
        cta1: "Evaluación Gratuita de 30 Minutos",
        cta2: "Ver Precios",
      },
      problem: {
        title: "El Problema del WhatsApp Manual",
        point1Title: "Tu equipo está saturado",
        point1Desc: "Más de 50 consultas diarias de WhatsApp. Las mismas preguntas repetidas. El personal pasa horas respondiendo manualmente en lugar de trabajo de alto valor. Tiempos de respuesta de horas o incluso días.",
        point2Title: "Los clientes están frustrados",
        point2Desc: "Las respuestas lentas pierden ventas. Los clientes esperan respuestas instantáneas. Los procesos manuales no escalan. Pierdes oportunidades mientras tu competencia automatiza.",
      },
      solution: {
        title: "WhatsApp Automatizado Que Realmente Funciona",
        subtitle: "Construimos chatbots inteligentes de WhatsApp que se integran con tus sistemas existentes—CRM, bases de datos, sitios web—para que los datos del cliente fluyan automáticamente. Sin copiar manualmente. Sin excels.",
        feature1Title: "Respuestas Instantáneas a FAQs",
        feature1Desc: "Tu chatbot responde preguntas comunes al instante—horarios, precios, disponibilidad. Los clientes obtienen respuestas inmediatas, 24/7.",
        feature2Title: "Cualificación de Leads",
        feature2Desc: "Recopila información clave automáticamente, cualifica leads y enrútalos a la persona correcta. Tu equipo solo gestiona prospectos calientes.",
        feature3Title: "Integración con CRM",
        feature3Desc: "Cada interacción se sincroniza automáticamente con tu CRM. Historial completo de conversaciones. Sin entrada de datos. Solo insights.",
      },
      howItWorks: {
        title: "Cómo Implementamos Tu Automatización de WhatsApp",
        steps: [
          {
            step: "01",
            title: "Descubrimiento del Proceso",
            description: "Analizamos tu flujo actual de WhatsApp, consultas comunes y puntos de dolor. Llamada de evaluación de 30 minutos para entender tus necesidades.",
          },
          {
            step: "02",
            title: "Diseño del Chatbot",
            description: "Diseñamos flujos de conversación que manejan tus casos de uso específicos. Apruebas los flujos antes de que comience cualquier desarrollo.",
          },
          {
            step: "03",
            title: "Integración y Configuración",
            description: "Conectamos la API de WhatsApp Business, integramos con tu CRM/sistemas, probamos exhaustivamente y formamos a tu equipo.",
          },
          {
            step: "04",
            title: "Lanzamiento y Optimización",
            description: "Lanzamos, monitorizamos el rendimiento y optimizamos continuamente basándonos en datos de uso real. Revisiones mensuales incluidas.",
          },
        ],
      },
      pricing: {
        title: "Precios Transparentes",
        subtitle: "Sin costes ocultos. Sin sorpresas. Precios claros que reflejan el valor que obtienes.",
        setupTitle: "Configuración Inicial",
        setupPrice: "€5.500",
        setupPriceLabel: "pago único",
        retainerTitle: "Soporte Mensual",
        retainerPrice: "€1.200",
        retainerPriceLabel: "al mes",
        roiTitle: "ROI Típico: 3 Meses",
        roiDesc: "Si gestionas 50+ consultas diarias de WhatsApp, son ~20 horas semanales de tiempo del equipo. Automatizar el 50% ahorra €1.500-€2.500/mes en costes laborales. La inversión se autofinancia rápidamente.",
      },
      useCases: {
        title: "Perfecto Para PYMEs Españolas",
        case1Title: "Comercio y E-commerce",
        case1Desc: "Responde preguntas sobre productos, verifica disponibilidad de stock, gestiona consultas de pedidos, envía actualizaciones de envío automáticamente.",
        case2Title: "Inmobiliaria",
        case2Desc: "Cualifica consultas de propiedades, agenda visitas, responde preguntas comunes sobre listados, envía recomendaciones de propiedades.",
        case3Title: "Hostelería y Servicios",
        case3Desc: "Gestiona consultas de reservas, responde FAQs sobre servicios/horarios, envía confirmaciones, recopila feedback automáticamente.",
      },
      cta: {
        badge: "Empezar",
        title: "¿Listo Para Automatizar Tu WhatsApp?",
        subtitle: "Reserva una evaluación gratuita de 30 minutos. Analizaremos tu flujo de trabajo de WhatsApp y te mostraremos exactamente cómo la automatización puede ahorrar tiempo a tu equipo—sin compromiso.",
      },
    },
    events: {
      breadcrumb: "Displays Interactivos para Eventos",
      hero: {
        badge: "Displays Interactivos para Eventos",
        title: "Displays Interactivos Que Atraen Miradas",
        subtitle: "Transforma tu stand de feria de estático a impresionante. Nuestros displays interactivos personalizados capturan leads, muestran datos en tiempo real y crean experiencias memorables que destacan en los grandes eventos de Barcelona.",
        cta1: "Planifica Tu Display para Eventos",
        cta2: "Ver Precios",
      },
      problem: {
        title: "Los Stands Estáticos No Enganchan",
        point1Title: "Eres invisible entre la multitud",
        point1Desc: "Cientos de expositores compitiendo por atención. Pósters estáticos y folletos se pierden en el ruido. Los asistentes pasan de largo sin detenerse. Gastas miles en espacio de stand pero no te notan.",
        point2Title: "La captura de leads es caos manual",
        point2Desc: "Las tarjetas de visita se pierden. Los excels van con retraso. Los seguimientos tardan semanas. No tienes datos en tiempo real sobre el engagement del stand ni qué demos funcionaron. Los leads valiosos se escapan.",
      },
      solution: {
        title: "Experiencias Interactivas Que Atraen y Convierten",
        subtitle: "Construimos displays interactivos personalizados adaptados a tus objetivos de evento—pantallas táctiles que muestran productos, capturan leads automáticamente, extraen datos en vivo de tus sistemas y crean momentos dignos de foto que los asistentes comparten.",
        feature1Title: "Visuales Llamativos",
        feature1Desc: "Pantallas táctiles grandes con visuales impresionantes que hacen que los asistentes se detengan y exploren. Movimiento, color e interactividad que exige atención en un salón abarrotado.",
        feature2Title: "Captura Instantánea de Leads",
        feature2Desc: "Los asistentes interactúan con tu display y su información fluye directamente a tu CRM. Sin entrada manual. Datos completos de engagement. Haz seguimiento mientras el evento aún está sucediendo.",
        feature3Title: "Integración de Datos en Tiempo Real",
        feature3Desc: "Muestra inventario en vivo, especificaciones de productos, casos de estudio o feeds sociales. Extrae datos de tus sistemas existentes para que la información esté siempre actualizada y precisa.",
      },
      features: {
        title: "Construido para los Grandes Eventos de Barcelona",
        perfectForTitle: "Perfecto Para",
        whatWeBuildTitle: "Qué Construimos",
      },
      process: {
        title: "Del Concepto al Soporte On-Site",
        steps: [
          {
            step: "01",
            title: "Briefing del Evento",
            description: "Discutimos los objetivos de tu evento, distribución del stand, audiencia objetivo y mensajes clave. Consulta de 30 minutos para entender tu visión.",
          },
          {
            step: "02",
            title: "Concepto y Diseño",
            description: "Diseñamos la experiencia interactiva con mockups y diagramas de flujo. Apruebas el concepto antes de que comience el desarrollo.",
          },
          {
            step: "03",
            title: "Construcción e Integración",
            description: "Desarrollamos el software del display, integramos con tus fuentes de datos y probamos en hardware de grado profesional. Ensayo antes del evento.",
          },
          {
            step: "04",
            title: "Instalación y Soporte On-Site",
            description: "Entregamos e instalamos el display en tu stand. Soporte on-site durante el evento. Informe de análisis post-evento con métricas de engagement.",
          },
        ],
        rushTitle: "Plazos Urgentes Disponibles",
        rushDesc: "Podemos entregar displays para eventos en 2-3 semanas cuando es necesario. Contáctanos en cuanto tengas tu stand confirmado para asegurar que podemos acomodar tu timeline.",
      },
      pricing: {
        title: "Precios Transparentes para Eventos",
        subtitle: "El precio depende de la complejidad y alcance. Aquí hay rangos típicos para ayudarte a planificar.",
        standardTitle: "Estándar",
        premiumTitle: "Premium",
        enterpriseTitle: "Enterprise",
        disclaimer: "El precio incluye diseño, desarrollo, pruebas, instalación on-site y un informe de análisis post-evento. Alquiler de hardware disponible por separado si es necesario. Se requiere depósito del 50% para empezar, balance antes del evento.",
      },
      cta: {
        badge: "Empezar",
        title: "¿Listo Para Destacar en Tu Próximo Evento?",
        subtitle: "Agenda una consulta para discutir tu próximo evento. Describiremos qué es posible para tu stand, timeline y presupuesto—sin compromiso.",
      },
    },
  },
}

export const copy: Record<Locale, CopyShape> = {
  en,
  es,
}


