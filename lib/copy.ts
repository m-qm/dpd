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
    eyebrow: "WhatsApp Automation & Event Displays | Barcelona",
    titleLines: ["Automate", "interactions.", "Elevate", "experiences."],
    subtitle:
      "WhatsApp automation that saves hours daily. Event displays that capture attention. Built in Barcelona.",
  },
  capabilitiesHeading: "What we do",
  capabilitiesLabel: "What we do",
  capabilities: [
    {
      title: "WhatsApp Automation",
      description:
        "Intelligent chatbots that handle FAQs, qualify leads, and sync with your CRM. Save 15-20 hours weekly. From €5,500 setup.",
    },
    {
      title: "Event Displays",
      description:
        "Interactive displays that capture attention and leads. Perfect for MWC, ISE, and Barcelona events. From €2,000.",
    },
    {
      title: "Messaging Integrations",
      description:
        "Connect WhatsApp, Telegram, and messaging platforms to your existing systems. Automated flows that work.",
    },
    {
      title: "Web Applications",
      description:
        "Custom dashboards for event organizers. Manage exhibitors, floor plans, and check-ins in one place.",
    },
    {
      title: "Process Automation",
      description:
        "Connect your tools. Automate workflows. Fewer spreadsheets, fewer meetings, more growth.",
    },
  ],
  approachHeading: "How we work",
  approachIntro:
    "No templates. No fluff. Just software that fits how you actually work. Barcelona-based with in-person support.",
  approachSteps: [
    {
      title: "We Listen (Really Listen)",
      description:
        "We dive into your daily grind. What makes you curse at your screen? What would make your team actually celebrate? We ask the awkward questions so we build the right thing.",
    },
    {
      title: "We Design for Humans",
      description:
        "Complex problems, simple solutions. We obsess over making things feel obvious—because your team shouldn't need a manual to use software they use every day.",
    },
    {
      title: "We Build to Last",
      description:
        "Clean code. Real integrations. No duct tape. Your software works on day one and keeps working as you scale. We're in it for the long haul.",
    },
    {
      title: "We Never Stop Improving",
      description:
        "Your business evolves. So does your software. We measure what matters, fix what's broken, and add what you actually need—not what sounds cool in a meeting.",
    },
  ],
  clientsHeading: "Trusted by",
  clientsLabel: "Clients",
  clientTypes: ["Event organizers", "Industrial", "Manufacturers", "Logistics", "Retail"],
  clientsIntro:
    "Spanish SMEs who need software that fits their process. Barcelona-based. In-person meetings available.",
  ctaHeading: "Ready to automate?",
  ctaBody:
    "30-minute consultation. No commitment. Actionable insights.",
  ctaButton: "Book consultation",
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
        title: "Interactive Displays That Capture Attention",
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
    eyebrow: "Automatización WhatsApp y Displays para Eventos | Barcelona",
    titleLines: ["Automatiza", "interacciones.", "Eleva", "experiencias."],
      subtitle:
        "Automatización WhatsApp que ahorra horas diarias. Displays que capturan miradas. Construido en Barcelona.",
  },
  capabilitiesHeading: "Capacidades",
  capabilitiesLabel: "Qué hacemos",
  capabilities: [
    {
      title: "Automatización WhatsApp",
      description:
        "Chatbots inteligentes que gestionan FAQs, cualifican leads y sincronizan con tu CRM. Ahorra 15-20 horas semanales. Desde €5.500.",
    },
    {
      title: "Displays para Eventos",
      description:
        "Displays interactivos que capturan atención y leads. Perfecto para MWC, ISE y eventos en Barcelona. Desde €2.000.",
    },
    {
      title: "Integraciones de Mensajería",
      description:
        "Conecta WhatsApp, Telegram y plataformas de mensajería a tus sistemas. Flujos automatizados que funcionan.",
    },
    {
      title: "Aplicaciones Web",
      description:
        "Paneles personalizados para organizadores. Gestiona expositores, planos y registro en un solo lugar.",
    },
    {
      title: "Automatización de Procesos",
      description:
        "Conecta tus herramientas. Automatiza flujos. Menos excels, menos reuniones, más crecimiento.",
    },
  ],
  approachHeading: "Cómo trabajamos",
  approachIntro:
    "Sin plantillas. Sin relleno. Solo software que se adapta a cómo trabajáis realmente. Con base en Barcelona y soporte presencial.",
  approachSteps: [
    {
      title: "Escuchamos (De Verdad)",
      description:
        "Nos metemos en vuestro día a día. ¿Qué os hace maldecir la pantalla? ¿Qué haría que vuestro equipo realmente celebre? Hacemos las preguntas incómodas para construir lo correcto.",
    },
    {
      title: "Diseñamos para Humanos",
      description:
        "Problemas complejos, soluciones simples. Nos obsesionamos con hacer que las cosas se sientan obvias—porque vuestro equipo no debería necesitar un manual para usar software que usan cada día.",
    },
    {
      title: "Construimos para Durar",
      description:
        "Código limpio. Integraciones reales. Sin cinta adhesiva. Vuestro software funciona desde el día uno y sigue funcionando mientras crecéis. Estamos aquí para el largo plazo.",
    },
    {
      title: "Nunca Dejamos de Mejorar",
      description:
        "Vuestro negocio evoluciona. Vuestro software también. Medimos lo que importa, arreglamos lo que está roto y añadimos lo que realmente necesitáis—no lo que suena bien en una reunión.",
    },
  ],
  clientsHeading: "Confían en nosotros",
  clientsLabel: "Clientes",
  clientTypes: [
    "Organizadores de eventos",
    "Industrial",
    "Fabricantes",
    "Logística",
    "Retail",
  ],
  clientsIntro:
    "PYMEs españolas que necesitan software que se adapta. Con base en Barcelona. Reuniones presenciales disponibles.",
  ctaHeading: "¿Listo para automatizar?",
  ctaBody:
    "Consulta de 30 minutos. Sin compromiso. Insights accionables.",
  ctaButton: "Reservar consulta",
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


